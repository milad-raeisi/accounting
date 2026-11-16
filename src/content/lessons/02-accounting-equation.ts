import type { Lesson } from '../types'

export const lesson: Lesson = {
  slug: 'accounting-equation',
  number: 2,
  level: 'beginner',
  minutes: 35,
  icon: 'Scale',
  tone: 'asset',
  title: { fa: 'معادله حسابداری', en: 'The Accounting Equation' },
  summary: {
    fa: 'با معادله‌ای آشنا شوید که همه دفاتر حسابداری باید همواره در آن صدق کنند، معاملات را گام‌به‌گام با آن تحلیل کنید و با معادله گسترده ببینید درآمد، هزینه و برداشت چگونه سهم مالک را تغییر می‌دهند.',
    en: 'Discover the one equation every set of books must satisfy, analyze transactions with it step by step, and use the expanded equation to see how revenue, expenses and drawings change the owner’s stake.',
  },
  objectives: [
    {
      fa: 'معادله حسابداری را بیان کنید و هر یک از اجزای آن را با مثال توضیح دهید.',
      en: 'State the accounting equation and explain each of its elements with examples.',
    },
    {
      fa: 'توضیح دهید چرا هیچ معامله‌ای توازن معادله را بر هم نمی‌زند.',
      en: 'Explain why no transaction can ever throw the equation out of balance.',
    },
    {
      fa: 'هر معامله را با چهار پرسش ثابت، گام‌به‌گام بر دارایی‌ها، بدهی‌ها و حقوق مالکانه تحلیل کنید.',
      en: 'Analyze any transaction step by step, using four fixed questions, by its effect on assets, liabilities and equity.',
    },
    {
      fa: 'با معادله گسترده نشان دهید سرمایه‌گذاری، درآمد، هزینه و برداشت چگونه حقوق مالکانه را تغییر می‌دهند.',
      en: 'Use the expanded equation to show how investments, revenue, expenses and drawings change equity.',
    },
    {
      fa: 'مبلغ‌های مجهول (مانند حقوق مالکانه یا سود خالص) را پیدا کنید و ماه نخست یک کسب‌وکار تازه را تحلیل کنید.',
      en: 'Solve for missing amounts (such as equity or net income) and analyze a new business’s first month.',
    },
  ],
  sections: [
    {
      id: 'the-equation',
      title: { fa: 'معادله‌ای که همه‌چیز بر آن استوار است', en: 'One Equation to Hold It All' },
      blocks: [
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'چرا اهمیت دارد؟', en: 'Why it matters' },
          text: {
            fa: 'رضا یک نانوایی کوچک باز کرده است. فر و تجهیزات نانوایی 40,000 قیمت داشته‌اند؛ 25,000 را از پس‌انداز خودش پرداخته و 15,000 را از بانک وام گرفته است. وقتی بانک می‌پرسد «چه مقدار از این کسب‌وکار واقعاً مال خودت است؟»، رضا با یک تفریق ساده پاسخ می‌دهد: 40,000 منهای 15,000، یعنی 25,000. هر ترازنامه‌ای دقیقاً بر همین منطق بنا شده است.',
            en: 'Reza has opened a small bakery. The oven and equipment cost 40,000: he paid 25,000 from his savings and borrowed 15,000 from the bank. When the bank asks, “How much of this business is really yours?”, Reza answers with one subtraction: 40,000 less 15,000, or 25,000. Every balance sheet is built on exactly this logic.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'هر منبعی که در اختیار یک واحد تجاری است، از جایی تأمین شده است: یا کسی آن را به واحد تجاری قرض داده، یا مالکان آن را فراهم کرده‌اند؛ چه مستقیم با سرمایه‌گذاری و چه غیرمستقیم با باقی گذاشتن سود در کسب‌وکار. همین مشاهده ساده، مهم‌ترین رابطه حسابداری را به ما می‌دهد:',
            en: 'Every resource a business controls came from somewhere. Either someone lent it to the business, or the owners supplied it, directly by investing or indirectly by leaving profits in the business. That simple observation gives us the most important relationship in accounting:',
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
            en: 'One side lists the **resources** of the business; the other side shows the **claims** on those resources, in other words, where the money to acquire them came from. Because both sides describe the same pool of resources from two angles, they must always be equal.',
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
            fa: 'سارا برای نوا یک حساب بانکی باز می‌کند و 50,000 از پول شخصی‌اش را در آن واریز می‌کند. اکنون نوا 50,000 دارایی (موجودی نقد) دارد، هیچ بدهی‌ای ندارد و حقوق مالکانه‌اش 50,000 است. معادله برقرار است: 50,000 = 0 + 50,000.',
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
            fa: '**دارایی‌ها** منابعی هستند که در نتیجه رویدادهای گذشته در کنترل واحد تجاری قرار گرفته‌اند و انتظار می‌رود منافع اقتصادی آتی برای آن ایجاد کنند. موجودی نقد، مطالبات از مشتریان (حساب‌های دریافتنی)، ملزومات، پیش‌پرداخت‌ها، تجهیزات، ساختمان و زمین همگی دارایی‌اند.',
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
              { fa: 'اغلب هزینه تأمین مالی، مانند بهره یا سود تسهیلات، دارند', en: 'Often carry a financing cost such as interest' },
              { fa: 'در صورت انحلال واحد تجاری، در اولویت پرداخت قرار دارند', en: 'Rank first for repayment if the business is wound up' },
              { fa: 'نمونه در نوا: وام بانکی 15,000', en: 'At Nova: the 15,000 bank loan' },
            ],
          },
          right: {
            title: { fa: 'حقوق مالکانه: ادعای مالک', en: 'Equity: the owner’s claim' },
            items: [
              { fa: 'تعهدی برای بازپرداخت آن وجود ندارد', en: 'No obligation to repay' },
              { fa: 'بازده آن از محل سود تأمین می‌شود، نه بهره', en: 'Rewarded through profits, not interest' },
              { fa: 'باقی‌مانده است: مالکان پس از طلبکاران سهم می‌برند', en: 'Residual: owners receive what remains after creditors' },
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
            en: 'Hiring a designer, signing a contract for next month or receiving a quote from a supplier does not change the equation yet: no asset, liability or equity has moved. Such events are recorded only once they actually change the financial position of the business.',
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
      id: 'step-by-step',
      title: { fa: 'تحلیل گام‌به‌گام یک معامله', en: 'Analyzing a Transaction Step by Step' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تحلیل معامله مهارتی است که در همه درس‌های بعدی به آن نیاز دارید؛ ثبت در دفتر روزنامه، بدهکار و بستانکار و حتی ثبت‌های اصلاحی همگی از همین‌جا شروع می‌شوند. برای هر معامله، چهار پرسش را به همین ترتیب بپرسید:',
            en: 'Transaction analysis is the skill you will need in every later lesson: journal entries, debits and credits and even adjusting entries all start here. For each transaction, ask four questions in this order:',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'کدام اقلام تغییر می‌کنند؟', en: 'Which items change?' },
              text: {
                fa: 'اقلامی را که معامله بر آن‌ها اثر می‌گذارد نام ببرید؛ مثلاً موجودی نقد و تجهیزات.',
                en: 'Name the items the transaction affects, for example, Cash and Equipment.',
              },
            },
            {
              title: { fa: 'هر قلم از چه نوعی است؟', en: 'What type is each item?' },
              text: {
                fa: 'مشخص کنید هر قلم دارایی است، بدهی است یا جزئی از حقوق مالکانه (سرمایه، درآمد، هزینه یا برداشت).',
                en: 'Decide whether each one is an asset, a liability or part of equity (capital, revenue, expense or drawings).',
              },
            },
            {
              title: { fa: 'افزایش یا کاهش؟ چقدر؟', en: 'Up or down? By how much?' },
              text: {
                fa: 'جهت تغییر و مبلغ آن را برای هر قلم تعیین کنید.',
                en: 'Determine the direction and the amount of each change.',
              },
            },
            {
              title: { fa: 'توازن را کنترل کنید', en: 'Check the balance' },
              text: {
                fa: 'اطمینان یابید که تغییر دارایی‌ها با مجموع تغییر بدهی‌ها و تغییر حقوق مالکانه برابر است.',
                en: 'Confirm that the change in assets equals the change in liabilities plus the change in equity.',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'نمونه اول: روز 4، خرید نسیه ملزومات', en: 'Example 1: Day 4, buying supplies on account' } },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'کدام اقلام؟', en: 'Which items?' },
              text: {
                fa: 'ملزومات (کاغذ، جوهر و لوازم طراحی) و حساب‌های پرداختنی (بدهی به فروشنده).',
                en: 'Supplies (paper, ink and design materials) and Accounts payable (the amount owed to the seller).',
              },
            },
            {
              title: { fa: 'چه نوعی؟', en: 'What type?' },
              text: {
                fa: 'ملزومات دارایی است، چون نوا آن را در اختیار دارد و در کارهای آینده مصرف می‌کند. حساب‌های پرداختنی بدهی است، چون نوا باید بعداً پول آن را بپردازد.',
                en: 'Supplies are an asset: Nova controls them and will use them on future jobs. Accounts payable is a liability: Nova must pay for them later.',
              },
            },
            {
              title: { fa: 'افزایش یا کاهش؟ چقدر؟', en: 'Up or down? By how much?' },
              text: {
                fa: 'ملزومات 3,000 افزایش و حساب‌های پرداختنی 3,000 افزایش می‌یابد. هیچ پولی پرداخت نشده، پس موجودی نقد تغییر نمی‌کند.',
                en: 'Supplies go up by 3,000 and Accounts payable goes up by 3,000. No money was paid, so Cash does not change.',
              },
            },
            {
              title: { fa: 'کنترل توازن', en: 'Check' },
              text: {
                fa: 'افزایش 3,000 در دارایی‌ها با افزایش 3,000 در بدهی‌ها برابر است و حقوق مالکانه تغییری نکرده است.',
                en: 'The 3,000 increase in assets equals the 3,000 increase in liabilities; equity is unchanged.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'معادله نوا پیش و پس از روز 4', en: 'Nova’s equation before and after Day 4' },
          head: [
            { fa: 'جزء', en: 'Element' },
            { fa: 'پیش از معامله', en: 'Before' },
            { fa: 'تغییر', en: 'Change' },
            { fa: 'پس از معامله', en: 'After' },
          ],
          numericCols: [1, 2, 3],
          rows: [
            [{ fa: 'دارایی‌ها', en: 'Assets' }, 65000, 3000, 68000],
            [{ fa: 'بدهی‌ها', en: 'Liabilities' }, 15000, 3000, 18000],
            [{ fa: 'حقوق مالکانه', en: 'Equity' }, 50000, 0, 50000],
          ],
        },
        { type: 'h', text: { fa: 'نمونه دوم: روز 15، پرداخت اجاره', en: 'Example 2: Day 15, paying rent' } },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'کدام اقلام؟', en: 'Which items?' },
              text: { fa: 'موجودی نقد و هزینه اجاره.', en: 'Cash and Rent expense.' },
            },
            {
              title: { fa: 'چه نوعی؟', en: 'What type?' },
              text: {
                fa: 'موجودی نقد دارایی است. هزینه اجاره یک حساب هزینه است و هزینه، حقوق مالکانه را کاهش می‌دهد.',
                en: 'Cash is an asset. Rent expense is an expense, and expenses reduce equity.',
              },
            },
            {
              title: { fa: 'افزایش یا کاهش؟ چقدر؟', en: 'Up or down? By how much?' },
              text: {
                fa: 'موجودی نقد 2,500 کاهش می‌یابد و حقوق مالکانه، از طریق هزینه اجاره، 2,500 کاهش می‌یابد. هیچ بدهی‌ای تغییر نمی‌کند.',
                en: 'Cash goes down by 2,500 and equity goes down by 2,500 through Rent expense. No liability changes.',
              },
            },
            {
              title: { fa: 'کنترل توازن', en: 'Check' },
              text: {
                fa: 'کاهش 2,500 در دارایی‌ها با کاهش 2,500 در حقوق مالکانه برابر است.',
                en: 'The 2,500 decrease in assets equals the 2,500 decrease in equity.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'یک پرسش کمکی', en: 'A helpful question' },
          text: {
            fa: 'در هر معامله بپرسید: کسب‌وکار **چه چیزی به دست آورد** و **در برابرش چه داد یا چه تعهدی پذیرفت؟** در روز 4، نوا ملزومات به دست آورد و تعهد پرداخت پذیرفت. در روز 15، نوا یک ماه استفاده از دفتر را به دست آورد (که همان ماه مصرف شد، پس هزینه است) و در برابرش وجه نقد داد.',
            en: 'In every transaction ask: what did the business **get**, and what did it **give or promise** in return? On Day 4 Nova got supplies and promised to pay. On Day 15 Nova got a month’s use of its office (used up that month, so an expense) and gave cash.',
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
            fa: 'اکنون همان چهار پرسش را برای همه دوازده معامله نخستین ماه استودیو طراحی نوا به کار می‌بریم. در هر ردیف، تغییر دارایی‌ها باید با مجموع تغییر بدهی‌ها و حقوق مالکانه برابر باشد؛ ستون‌های جمع، معادله را پس از هر معامله نشان می‌دهند.',
            en: 'Now let’s apply the same four questions to all twelve transactions in Nova Design Studio’s first month. In every row, the change in assets must equal the change in liabilities plus equity; the running totals show the equation after each transaction.',
          },
        },
        {
          type: 'analysis',
          title: { fa: 'استودیو طراحی نوا: تحلیل معاملات ماه نخست', en: 'Nova Design Studio: transaction analysis, first month' },
          rows: [
            {
              tx: {
                fa: 'روز 1: سارا 50,000 وجه نقد در کسب‌وکار سرمایه‌گذاری می‌کند (افزایش موجودی نقد و افزایش سرمایه)',
                en: 'Day 1: Sara invests 50,000 cash in the business (Cash +50,000; Capital +50,000)',
              },
              assets: 50000,
              equity: 50000,
            },
            {
              tx: {
                fa: 'روز 2: دریافت وام 15,000 از بانک (افزایش موجودی نقد و افزایش وام پرداختنی)',
                en: 'Day 2: Borrows 15,000 from the bank (Cash +15,000; Loan payable +15,000)',
              },
              assets: 15000,
              liabilities: 15000,
            },
            {
              tx: {
                fa: 'روز 3: خرید نقدی تجهیزات به مبلغ 20,000 (افزایش تجهیزات و کاهش موجودی نقد؛ جمع دارایی‌ها تغییر نمی‌کند)',
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
                fa: 'روز 5: پرداخت 1,200 بابت بیمه‌نامه 12 ماهه (افزایش پیش‌پرداخت بیمه و کاهش موجودی نقد؛ جمع دارایی‌ها تغییر نمی‌کند)',
                en: 'Day 5: Pays 1,200 for a 12-month insurance policy (Prepaid insurance +1,200; Cash −1,200; total assets unchanged)',
              },
              assets: 0,
            },
            {
              tx: {
                fa: 'روز 8: کسب 8,000 درآمد خدمات طراحی به‌صورت نقد (افزایش موجودی نقد؛ افزایش حقوق مالکانه از طریق درآمد خدمات)',
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
                fa: 'روز 15: پرداخت 2,500 اجاره (کاهش موجودی نقد؛ کاهش حقوق مالکانه از طریق هزینه اجاره)',
                en: 'Day 15: Pays rent of 2,500 (Cash −2,500; equity −2,500 through Rent expense)',
              },
              assets: -2500,
              equity: -2500,
            },
            {
              tx: {
                fa: 'روز 20: پرداخت 3,000 حقوق و دستمزد (کاهش موجودی نقد؛ کاهش حقوق مالکانه از طریق هزینه حقوق و دستمزد)',
                en: 'Day 20: Pays salaries of 3,000 (Cash −3,000; equity −3,000 through Salaries expense)',
              },
              assets: -3000,
              equity: -3000,
            },
            {
              tx: {
                fa: 'روز 24: وصول 2,500 از مطالبات مشتریان (افزایش موجودی نقد و کاهش حساب‌های دریافتنی؛ جمع دارایی‌ها تغییر نمی‌کند)',
                en: 'Day 24: Collects 2,500 from customers on account (Cash +2,500; Accounts receivable −2,500; total assets unchanged)',
              },
              assets: 0,
            },
            {
              tx: {
                fa: 'روز 27: پرداخت 1,500 به تأمین‌کننده (کاهش موجودی نقد و کاهش حساب‌های پرداختنی)',
                en: 'Day 27: Pays the supplier 1,500 (Cash −1,500; Accounts payable −1,500)',
              },
              assets: -1500,
              liabilities: -1500,
            },
            {
              tx: {
                fa: 'روز 30: برداشت 1,000 توسط سارا برای مصارف شخصی (کاهش موجودی نقد؛ کاهش حقوق مالکانه از طریق برداشت)',
                en: 'Day 30: Sara withdraws 1,000 for personal use (Cash −1,000; equity −1,000 through Drawings)',
              },
              assets: -1000,
              equity: -1000,
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'معادله نوا در پایان ماه (پیش از ثبت‌های اصلاحی)', en: 'Nova’s equation at month end (before adjusting entries)' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'موجودی نقد', en: 'Cash' }, 46300],
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
            fa: 'دارایی‌ها 72,000 = بدهی‌ها 16,500 + حقوق مالکانه 55,500. دقت کنید که سه معامله (روزهای 3، 5 و 24) فقط ترکیب دارایی‌ها را تغییر داده‌اند و به جمع آن‌ها دست نزده‌اند؛ نوا در این معاملات صرفاً یک دارایی را با دارایی دیگری مبادله کرده است.',
            en: 'Assets 72,000 = Liabilities 16,500 + Equity 55,500. Notice that three transactions (Days 3, 5 and 24) changed the mix of assets without changing their total: Nova simply swapped one asset for another.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: معادله در ترازنامه و نرم‌افزار', en: 'In practice: the equation in the balance sheet and in software' },
          text: {
            fa: 'ترازنامه (در قالب‌های جدیدتر، «صورت وضعیت مالی») همین معادله است که با جزئیات نوشته شده: دارایی‌ها در یک سو، بدهی‌ها و حقوق مالکانه در سوی دیگر. نرم‌افزارهای حسابداری سندی را که جمع بدهکار و بستانکارش برابر نباشد ذخیره نمی‌کنند، پس معادله خودبه‌خود برقرار می‌ماند. با این حال حسابداران حرفه‌ای هر ماه بررسی می‌کنند که ارقام منطقی باشند، زیرا معادله متوازن به معنای ثبت درست نیست.',
            en: 'The balance sheet (the statement of financial position in newer formats) is simply this equation written out in detail: assets on one side, liabilities and equity on the other. Accounting software will not save a voucher whose debits and credits differ, so the equation holds automatically. Even so, professional accountants check every month that the figures make sense, because a balanced equation does not prove the entries are right.',
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
            { fa: '**سرمایه** با سرمایه‌گذاری مالک در کسب‌وکار افزایش می‌یابد.', en: '**Capital** increases when the owner invests in the business.' },
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
          caption: { fa: 'معاملات نوا که حقوق مالکانه را تغییر دادند', en: 'Nova’s transactions that changed equity' },
          head: [
            { fa: 'روز', en: 'Day' },
            { fa: 'معامله', en: 'Transaction' },
            { fa: 'جزء حقوق مالکانه', en: 'Equity component' },
            { fa: 'اثر', en: 'Effect' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [4],
          rows: [
            [{ fa: 'روز 1', en: 'Day 1' }, { fa: 'سرمایه‌گذاری سارا', en: 'Sara’s investment' }, { fa: 'سرمایه', en: 'Capital' }, { fa: 'افزایش', en: 'Increase' }, 50000],
            [{ fa: 'روز 8', en: 'Day 8' }, { fa: 'خدمات نقدی', en: 'Services for cash' }, { fa: 'درآمد', en: 'Revenue' }, { fa: 'افزایش', en: 'Increase' }, 8000],
            [{ fa: 'روز 12', en: 'Day 12' }, { fa: 'خدمات نسیه', en: 'Services on account' }, { fa: 'درآمد', en: 'Revenue' }, { fa: 'افزایش', en: 'Increase' }, 4000],
            [{ fa: 'روز 15', en: 'Day 15' }, { fa: 'اجاره', en: 'Rent' }, { fa: 'هزینه', en: 'Expense' }, { fa: 'کاهش', en: 'Decrease' }, 2500],
            [{ fa: 'روز 20', en: 'Day 20' }, { fa: 'حقوق و دستمزد', en: 'Salaries' }, { fa: 'هزینه', en: 'Expense' }, { fa: 'کاهش', en: 'Decrease' }, 3000],
            [{ fa: 'روز 30', en: 'Day 30' }, { fa: 'برداشت سارا', en: 'Sara’s drawings' }, { fa: 'برداشت', en: 'Drawings' }, { fa: 'کاهش', en: 'Decrease' }, 1000],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'شش معامله دیگر ماه (روزهای 2، 3، 4، 5، 24 و 27) به حقوق مالکانه دست نزده‌اند؛ آن‌ها فقط دارایی‌ها و بدهی‌ها را جابه‌جا کرده‌اند. گرفتن وام، خرید دارایی، وصول طلب و پرداخت بدهی هیچ‌کدام مالک را ثروتمندتر یا فقیرتر نمی‌کنند.',
            en: 'The other six transactions of the month (Days 2, 3, 4, 5, 24 and 27) did not touch equity at all; they only moved assets and liabilities around. Borrowing, buying an asset, collecting a receivable and paying a debt make the owner neither richer nor poorer.',
          },
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
          type: 'formula',
          text: {
            fa: 'حقوق مالکانه پایان دوره = حقوق مالکانه ابتدای دوره + سرمایه‌گذاری جدید + سود خالص − برداشت',
            en: 'Ending equity = Beginning equity + New investment + Net income − Drawings',
          },
          note: {
            fa: 'این رابطه کلید حل بسیاری از مسئله‌های «مبلغ مجهول» است. برای نوا: 0 + 50,000 + 6,500 − 1,000 = 55,500. اگر هزینه‌ها از درآمدها بیشتر باشد، به‌جای سود خالص **زیان خالص** داریم که حقوق مالکانه را کاهش می‌دهد.',
            en: 'This relationship is the key to many “missing amount” problems. For Nova: 0 + 50,000 + 6,500 − 1,000 = 55,500. If expenses exceed revenue, the result is a **net loss** instead, which reduces equity.',
          },
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
      id: 'mistakes',
      title: { fa: 'اشتباهات رایج', en: 'Common Mistakes' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: '**ثبت وام به‌عنوان درآمد.** دریافت وام 15,000 موجودی نقد را افزایش می‌دهد، اما حقوق مالکانه را نه؛ نوا باید آن را پس بدهد، پس بدهی است.',
              en: '**Treating a loan as revenue.** Borrowing 15,000 increases cash but not equity; Nova must repay it, so it is a liability.',
            },
            {
              fa: '**ثبت برداشت به‌عنوان هزینه.** برداشت حقوق مالکانه را کاهش می‌دهد، اما به کسب درآمد کمکی نمی‌کند و در صورت سود و زیان نمی‌آید.',
              en: '**Treating drawings as an expense.** Drawings reduce equity, but they do not help earn revenue and never appear on the income statement.',
            },
            {
              fa: '**ثبت دوباره درآمد هنگام وصول طلب.** درآمد روز 12 همان روز ثبت شد؛ وصول روز 24 فقط حساب‌های دریافتنی را به موجودی نقد تبدیل می‌کند.',
              en: '**Recording revenue again when a receivable is collected.** The Day 12 revenue was recorded on Day 12; the Day 24 collection only turns a receivable into cash.',
            },
            {
              fa: '**ثبت خرید دارایی به‌عنوان هزینه.** خرید تجهیزات یا ملزومات، دارایی را با دارایی دیگر (یا با بدهی) عوض می‌کند؛ حقوق مالکانه تا وقتی دارایی مصرف نشده تغییر نمی‌کند.',
              en: '**Treating the purchase of an asset as an expense.** Buying equipment or supplies exchanges one asset for another (or for a liability); equity does not change until the asset is used up.',
            },
            {
              fa: '**فراموش کردن طرف دوم.** هر معامله دست‌کم دو قلم را تغییر می‌دهد؛ اگر فقط یک تغییر نوشته‌اید، چیزی جا افتاده است.',
              en: '**Forgetting the second side.** Every transaction changes at least two items; if you have written down only one change, something is missing.',
            },
            {
              fa: '**اعتماد بیش از حد به توازن.** معادله متوازن یعنی دو طرف برابرند، نه اینکه اقلام و مبالغ درست انتخاب شده‌اند.',
              en: '**Trusting the balance too much.** A balanced equation means the two sides are equal, not that the right items and amounts were used.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'یک آزمون سریع برای حقوق مالکانه', en: 'A quick test for equity' },
          text: {
            fa: 'حقوق مالکانه فقط به چهار دلیل تغییر می‌کند: **سرمایه‌گذاری مالک، درآمد، هزینه و برداشت**. اگر در تحلیل شما حقوق مالکانه به دلیل دیگری (مثلاً وام، خرید دارایی یا وصول طلب) تغییر کرده، دوباره بررسی کنید.',
            en: 'Equity changes for only four reasons: **owner investment, revenue, expenses and drawings**. If your analysis changes equity for any other reason (a loan, an asset purchase or a collection, say), check it again.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: پرسش بانک‌ها', en: 'In practice: what banks look at' },
          text: {
            fa: 'بانک‌ها هنگام بررسی درخواست تسهیلات، نسبت بدهی‌ها به حقوق مالکانه را می‌سنجند: هرچه سهم مالک از منابع بیشتر باشد، ریسک بانک کمتر است. نوا در پایان ماه 16,500 بدهی و 55,500 حقوق مالکانه دارد؛ یعنی بیشتر منابعش را مالک تأمین کرده است. این تحلیل را در درس تحلیل نسبت‌های مالی کامل‌تر می‌بینید.',
            en: 'When banks review a loan request, they compare liabilities with equity: the larger the owner’s share of the resources, the lower the bank’s risk. At month end Nova has 16,500 of liabilities and 55,500 of equity, so most of its resources came from the owner. You will see this analysis in full in the lesson on ratio analysis.',
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
            fa: 'این تمرین‌ها از ساده به دشوار مرتب شده‌اند. پیش از باز کردن پاسخ، کاغذ و قلم بردارید و چهار پرسش تحلیل معامله را برای هر مورد بنویسید.',
            en: 'These exercises run from easy to hard. Before opening a solution, take pen and paper and write out the four analysis questions for each item.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مبلغ مجهول را پیدا کنید', en: 'Find the missing amount' },
          difficulty: 'easy',
          problem: {
            fa: 'در هر ردیف جدول، یک مبلغ مجهول است. با معادله حسابداری آن را پیدا کنید. سپس به این پرسش پاسخ دهید: (ت) دارایی‌های یک کسب‌وکار در طول سال 18,000 افزایش و بدهی‌هایش 5,000 کاهش یافته است. حقوق مالکانه چقدر و در چه جهتی تغییر کرده است؟',
            en: 'In each row of the table one amount is missing. Find it with the accounting equation. Then answer: (D) during the year a business’s assets rose by 18,000 and its liabilities fell by 5,000. By how much, and in which direction, did equity change?',
          },
          given: {
            head: [
              { fa: 'حالت', en: 'Case' },
              { fa: 'دارایی‌ها', en: 'Assets' },
              { fa: 'بدهی‌ها', en: 'Liabilities' },
              { fa: 'حقوق مالکانه', en: 'Equity' },
            ],
            numericCols: [1, 2, 3],
            rows: [
              [{ fa: 'الف', en: 'A' }, 120000, 45000, { fa: '؟', en: '?' }],
              [{ fa: 'ب', en: 'B' }, { fa: '؟', en: '?' }, 30000, 52000],
              [{ fa: 'پ', en: 'C' }, 64000, { fa: '؟', en: '?' }, 40000],
            ],
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'حالت الف', en: 'Case A' },
                  text: { fa: 'حقوق مالکانه = دارایی‌ها − بدهی‌ها = 120,000 − 45,000 = 75,000', en: 'Equity = Assets − Liabilities = 120,000 − 45,000 = 75,000' },
                },
                {
                  title: { fa: 'حالت ب', en: 'Case B' },
                  text: { fa: 'دارایی‌ها = بدهی‌ها + حقوق مالکانه = 30,000 + 52,000 = 82,000', en: 'Assets = Liabilities + Equity = 30,000 + 52,000 = 82,000' },
                },
                {
                  title: { fa: 'حالت پ', en: 'Case C' },
                  text: { fa: 'بدهی‌ها = دارایی‌ها − حقوق مالکانه = 64,000 − 40,000 = 24,000', en: 'Liabilities = Assets − Equity = 64,000 − 40,000 = 24,000' },
                },
                {
                  title: { fa: 'بخش ت', en: 'Part D' },
                  text: {
                    fa: 'تغییر دارایی‌ها باید با تغییر بدهی‌ها به‌علاوه تغییر حقوق مالکانه برابر باشد. دارایی‌ها 18,000 بیشتر شده و بدهی‌ها 5,000 کمتر؛ پس حقوق مالکانه باید 18,000 + 5,000 = 23,000 افزایش یافته باشد تا دو طرف برابر بمانند.',
                    en: 'The change in assets must equal the change in liabilities plus the change in equity. Assets rose by 18,000 while liabilities fell by 5,000, so equity must have risen by 18,000 + 5,000 = 23,000 to keep the two sides equal.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'بخش ت را این‌طور هم می‌توان دید: کسب‌وکار هم دارایی بیشتری دارد و هم بدهی کمتری. هر دو به نفع مالک است، پس سهم مالک به اندازه مجموع آن دو بزرگ شده است.',
                en: 'Another way to see part D: the business has more assets and fewer debts. Both benefit the owner, so the owner’s share has grown by the sum of the two.',
              },
            },
          ],
          answer: {
            fa: 'الف 75,000؛ ب 82,000؛ پ 24,000؛ ت حقوق مالکانه 23,000 افزایش یافته است.',
            en: 'A 75,000; B 82,000; C 24,000; D equity increased by 23,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'اثر معاملات را تشخیص دهید', en: 'Identify the effects' },
          difficulty: 'medium',
          problem: {
            fa: 'مریم «آموزشگاه زبان پارسا» را راه انداخته است. اثر هر معامله زیر را بر دارایی‌ها، بدهی‌ها و حقوق مالکانه مشخص کنید (افزایش، کاهش یا بدون اثر). اگر حقوق مالکانه تغییر کرده، بگویید از طریق کدام جزء (سرمایه، درآمد، هزینه یا برداشت). در پایان، معادله آموزشگاه را بنویسید.',
            en: 'Maryam has opened Parsa Language School. For each transaction below, state its effect on assets, liabilities and equity (increase, decrease or no effect). If equity changes, say through which component (capital, revenue, expense or drawings). Finally, write out the school’s equation.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: '#' },
              { fa: 'معامله', en: 'Transaction' },
            ],
            rows: [
              [1, { fa: 'مریم 40,000 وجه نقد در آموزشگاه سرمایه‌گذاری می‌کند.', en: 'Maryam invests 40,000 cash in the school.' }],
              [2, { fa: 'میز، صندلی و تخته به مبلغ 12,000 نسیه خریداری می‌شود.', en: 'Desks, chairs and whiteboards are bought on account for 12,000.' }],
              [3, { fa: 'شهریه دوره‌ای که این ماه برگزار شده، 9,000 نقد دریافت می‌شود.', en: 'Fees of 9,000 are received in cash for a course held this month.' }],
              [4, { fa: 'حقوق مدرسان، 5,000، پرداخت می‌شود.', en: 'Teachers’ salaries of 5,000 are paid.' }],
              [5, { fa: '4,000 از بدهی خرید اثاثه پرداخت می‌شود.', en: '4,000 of the amount owed for the furniture is paid.' }],
              [6, { fa: 'مریم 1,500 وجه نقد برای مصارف شخصی برمی‌دارد.', en: 'Maryam takes 1,500 cash for personal use.' }],
              [7, { fa: 'قبض 800 آب و برق این ماه می‌رسد و ماه بعد پرداخت می‌شود.', en: 'This month’s 800 utility bill arrives; it will be paid next month.' }],
              [8, { fa: 'قرارداد اجاره یک کلاس دوم از ماه آینده امضا می‌شود.', en: 'A lease for a second classroom, starting next month, is signed.' }],
            ],
          },
          hint: {
            fa: 'معامله 7 هم بدهی را تغییر می‌دهد و هم حقوق مالکانه را، اما به دارایی‌ها دست نمی‌زند.',
            en: 'Transaction 7 changes both liabilities and equity but leaves assets alone.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: '#' },
                { fa: 'دارایی‌ها', en: 'Assets' },
                { fa: 'بدهی‌ها', en: 'Liabilities' },
                { fa: 'حقوق مالکانه', en: 'Equity' },
                { fa: 'جزء', en: 'Component' },
              ],
              rows: [
                [1, { fa: 'افزایش', en: 'Increase' }, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'افزایش', en: 'Increase' }, { fa: 'سرمایه', en: 'Capital' }],
                [2, { fa: 'افزایش', en: 'Increase' }, { fa: 'افزایش', en: 'Increase' }, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'ندارد', en: 'None' }],
                [3, { fa: 'افزایش', en: 'Increase' }, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'افزایش', en: 'Increase' }, { fa: 'درآمد', en: 'Revenue' }],
                [4, { fa: 'کاهش', en: 'Decrease' }, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'کاهش', en: 'Decrease' }, { fa: 'هزینه', en: 'Expense' }],
                [5, { fa: 'کاهش', en: 'Decrease' }, { fa: 'کاهش', en: 'Decrease' }, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'ندارد', en: 'None' }],
                [6, { fa: 'کاهش', en: 'Decrease' }, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'کاهش', en: 'Decrease' }, { fa: 'برداشت', en: 'Drawings' }],
                [7, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'افزایش', en: 'Increase' }, { fa: 'کاهش', en: 'Decrease' }, { fa: 'هزینه', en: 'Expense' }],
                [8, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'بدون اثر', en: 'No effect' }, { fa: 'رویداد حسابداری نیست', en: 'Not an accounting event' }],
              ],
            },
            {
              type: 'analysis',
              title: { fa: 'آموزشگاه پارسا: تحلیل با مبالغ', en: 'Parsa Language School: analysis with amounts' },
              rows: [
                { tx: { fa: '1. سرمایه‌گذاری مریم', en: '1. Maryam’s investment' }, assets: 40000, equity: 40000 },
                { tx: { fa: '2. خرید نسیه اثاثه', en: '2. Furniture bought on account' }, assets: 12000, liabilities: 12000 },
                { tx: { fa: '3. شهریه دریافتی (درآمد)', en: '3. Course fees received (revenue)' }, assets: 9000, equity: 9000 },
                { tx: { fa: '4. حقوق مدرسان (هزینه)', en: '4. Teachers’ salaries (expense)' }, assets: -5000, equity: -5000 },
                { tx: { fa: '5. پرداخت بخشی از بدهی اثاثه', en: '5. Part of the furniture debt paid' }, assets: -4000, liabilities: -4000 },
                { tx: { fa: '6. برداشت مریم', en: '6. Maryam’s drawings' }, assets: -1500, equity: -1500 },
                { tx: { fa: '7. قبض آب و برق پرداخت‌نشده (هزینه)', en: '7. Unpaid utility bill (expense)' }, liabilities: 800, equity: -800 },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'معادله آموزشگاه در پایان ماه', en: 'The school’s equation at month end' },
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: 'موجودی نقد (40,000 + 9,000 − 5,000 − 4,000 − 1,500)', en: 'Cash (40,000 + 9,000 − 5,000 − 4,000 − 1,500)' }, 38500],
                [{ fa: 'اثاثه و تجهیزات', en: 'Furniture and equipment' }, 12000],
                [{ fa: '**جمع دارایی‌ها**', en: '**Total assets**' }, 50500],
                [{ fa: 'حساب‌های پرداختنی (8,000 اثاثه + 800 آب و برق)', en: 'Accounts payable (8,000 furniture + 800 utilities)' }, 8800],
                [{ fa: 'حقوق مالکانه (40,000 + 9,000 − 5,000 − 800 − 1,500)', en: 'Equity (40,000 + 9,000 − 5,000 − 800 − 1,500)' }, 41700],
                [{ fa: '**جمع بدهی‌ها و حقوق مالکانه**', en: '**Total liabilities and equity**' }, 50500],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'معامله 7 یک «جابه‌جایی میان ادعاها»ست: هزینه همین ماه رخ داده (حقوق مالکانه کاهش)، اما پولش هنوز پرداخت نشده (بدهی افزایش). معامله 8 هنوز اجرا نشده و ثبت نمی‌شود.',
                en: 'Transaction 7 is a claim swap: the expense belongs to this month (equity down), but it has not been paid yet (liability up). Transaction 8 has not been performed yet, so it is not recorded.',
              },
            },
          ],
          answer: {
            fa: 'دارایی‌ها 50,500 = بدهی‌ها 8,800 + حقوق مالکانه 41,700.',
            en: 'Assets 50,500 = Liabilities 8,800 + Equity 41,700.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'سود خالص پنهان', en: 'Find the hidden net income' },
          difficulty: 'medium',
          problem: {
            fa: 'اطلاعات «گل‌فروشی یاس» در جدول زیر آمده است. در طول سال، مالک 10,000 سرمایه‌گذاری تازه کرده و 6,000 برداشت کرده است. (الف) سود خالص سال چقدر بوده است؟ (ب) اگر درآمد سال 48,000 بوده باشد، جمع هزینه‌ها چقدر بوده است؟',
            en: 'The figures for Yas Flower Shop are shown below. During the year the owner invested another 10,000 and withdrew 6,000. (a) What was the net income for the year? (b) If revenue for the year was 48,000, what were total expenses?',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'ابتدای سال', en: 'Start of year' },
              { fa: 'پایان سال', en: 'End of year' },
            ],
            numericCols: [1, 2],
            rows: [
              [{ fa: 'دارایی‌ها', en: 'Assets' }, 80000, 110000],
              [{ fa: 'بدهی‌ها', en: 'Liabilities' }, 30000, 45000],
            ],
          },
          hint: {
            fa: 'نخست حقوق مالکانه ابتدا و پایان سال را با معادله پایه حساب کنید؛ سپس از رابطه حقوق مالکانه پایان دوره استفاده کنید.',
            en: 'First compute beginning and ending equity with the basic equation; then use the ending-equity relationship.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'حقوق مالکانه ابتدای سال', en: 'Beginning equity' }, text: { fa: '80,000 − 30,000 = 50,000', en: '80,000 − 30,000 = 50,000' } },
                { title: { fa: 'حقوق مالکانه پایان سال', en: 'Ending equity' }, text: { fa: '110,000 − 45,000 = 65,000', en: '110,000 − 45,000 = 65,000' } },
                {
                  title: { fa: 'رابطه را بنویسید', en: 'Write the relationship' },
                  text: {
                    fa: 'حقوق مالکانه پایان = ابتدا + سرمایه‌گذاری جدید + سود خالص − برداشت؛ یعنی 65,000 = 50,000 + 10,000 + سود خالص − 6,000.',
                    en: 'Ending equity = Beginning + New investment + Net income − Drawings, so 65,000 = 50,000 + 10,000 + Net income − 6,000.',
                  },
                },
                {
                  title: { fa: 'سود خالص را پیدا کنید', en: 'Solve for net income' },
                  text: { fa: '65,000 = 54,000 + سود خالص؛ پس سود خالص = 11,000.', en: '65,000 = 54,000 + Net income, so Net income = 11,000.' },
                },
                {
                  title: { fa: 'هزینه‌ها را پیدا کنید', en: 'Solve for expenses' },
                  text: {
                    fa: 'سود خالص = درآمد − هزینه‌ها؛ پس هزینه‌ها = 48,000 − 11,000 = 37,000.',
                    en: 'Net income = Revenue − Expenses, so Expenses = 48,000 − 11,000 = 37,000.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'تطبیق حقوق مالکانه گل‌فروشی یاس', en: 'Yas Flower Shop: equity reconciliation' },
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: 'حقوق مالکانه ابتدای سال', en: 'Beginning equity' }, 50000],
                [{ fa: 'به‌علاوه: سرمایه‌گذاری جدید', en: 'Add: new investment' }, 10000],
                [{ fa: 'به‌علاوه: سود خالص', en: 'Add: net income' }, 11000],
                [{ fa: 'کسر می‌شود: برداشت', en: 'Less: drawings' }, 6000],
                [{ fa: '**حقوق مالکانه پایان سال**', en: '**Ending equity**' }, 65000],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              text: {
                fa: 'اشتباه رایج این است که کل افزایش حقوق مالکانه (15,000) را سود بدانیم. بخشی از این افزایش از سرمایه‌گذاری تازه مالک آمده و بخشی با برداشت از بین رفته است؛ سود فقط سهم عملیات کسب‌وکار است.',
                en: 'A common mistake is to treat the whole 15,000 increase in equity as profit. Part of it came from the owner’s new investment and part was offset by drawings; profit is only the part produced by operations.',
              },
            },
          ],
          answer: { fa: 'سود خالص 11,000؛ جمع هزینه‌ها 37,000.', en: 'Net income 11,000; total expenses 37,000.' },
        },
        {
          type: 'exercise',
          title: { fa: 'خطاها را پیدا کنید', en: 'Find the errors' },
          difficulty: 'medium',
          problem: {
            fa: 'کارآموزی جمع درآمد ماه «چاپخانه نقش» را 20,000 و جمع هزینه‌ها را 12,000 حساب کرده و سود را 8,000 گزارش داده است. در بررسی متوجه می‌شوید: (1) 5,000 وام بانکی دریافتی جزو درآمد آمده است. (2) 3,000 وصول طلب بابت کاری که ماه قبل انجام و ثبت شده بود، جزو درآمد آمده است. (3) 2,000 برداشت مالک جزو هزینه‌ها آمده است. (4) 1,500 کاغذ خریداری‌شده که هنوز در انبار است، جزو هزینه‌ها آمده است. درآمد، هزینه‌ها و سود درست را حساب کنید.',
            en: 'A trainee calculated Naqsh Print Shop’s revenue for the month as 20,000 and its expenses as 12,000, reporting a profit of 8,000. On review you find that: (1) a 5,000 bank loan received was included in revenue; (2) 3,000 collected for a job done and recorded last month was included in revenue; (3) the owner’s 2,000 of drawings was included in expenses; (4) 1,500 of paper bought and still in the storeroom was included in expenses. Compute the correct revenue, expenses and profit.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'وام', en: 'The loan' },
                  text: { fa: 'وام بدهی است، نه درآمد: 5,000 از درآمد کم و به‌عنوان وام پرداختنی ثبت می‌شود.', en: 'A loan is a liability, not revenue: remove 5,000 from revenue and record it as Loan payable.' },
                },
                {
                  title: { fa: 'وصول طلب', en: 'The collection' },
                  text: {
                    fa: 'درآمد آن کار ماه قبل ثبت شده است و وصول فقط دارایی‌ها را جابه‌جا می‌کند: 3,000 دیگر از درآمد کم می‌شود.',
                    en: 'That revenue was recorded last month; collecting it only swaps assets: remove another 3,000 from revenue.',
                  },
                },
                {
                  title: { fa: 'برداشت', en: 'The drawings' },
                  text: { fa: 'برداشت هزینه نیست: 2,000 از هزینه‌ها کم و در حساب برداشت ثبت می‌شود.', en: 'Drawings are not an expense: remove 2,000 from expenses and record it as Drawings.' },
                },
                {
                  title: { fa: 'کاغذ در انبار', en: 'The paper in stock' },
                  text: {
                    fa: 'کاغذی که هنوز مصرف نشده، دارایی (ملزومات) است: 1,500 از هزینه‌ها کم می‌شود.',
                    en: 'Paper not yet used is an asset (supplies): remove 1,500 from expenses.',
                  },
                },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'گزارش کارآموز', en: 'Trainee’s figure' },
                { fa: 'رقم درست', en: 'Correct figure' },
              ],
              numericCols: [1, 2],
              rows: [
                [{ fa: 'درآمد (20,000 − 5,000 − 3,000)', en: 'Revenue (20,000 − 5,000 − 3,000)' }, 20000, 12000],
                [{ fa: 'هزینه‌ها (12,000 − 2,000 − 1,500)', en: 'Expenses (12,000 − 2,000 − 1,500)' }, 12000, 8500],
                [{ fa: '**سود خالص**', en: '**Net income**' }, 8000, 3500],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'خطاها سود را در دو جهت مخالف جابه‌جا کرده بودند: دو خطای درآمد آن را 8,000 بیشتر و دو خطای هزینه آن را 3,500 کمتر نشان داده بودند. خالص اثر، 4,500 بیش‌نمایی سود بود (8,000 در برابر 3,500).',
                en: 'The errors pushed profit in opposite directions: the two revenue errors overstated it by 8,000 and the two expense errors understated it by 3,500. The net effect was a 4,500 overstatement (8,000 instead of 3,500).',
              },
            },
          ],
          answer: { fa: 'درآمد 12,000؛ هزینه‌ها 8,500؛ سود خالص 3,500 (نه 8,000).', en: 'Revenue 12,000; expenses 8,500; net income 3,500 (not 8,000).' },
        },
        {
          type: 'exercise',
          title: { fa: 'ماه نخست تعمیرگاه موبایل آرش', en: 'Arash Phone Repair: the first month' },
          difficulty: 'hard',
          problem: {
            fa: 'آرش یک تعمیرگاه موبایل راه انداخته است. ده معامله ماه نخست را با معادله حسابداری تحلیل کنید، سپس (الف) مانده هر قلم در پایان ماه، (ب) سود خالص و (پ) حقوق مالکانه پایان ماه را به دست آورید و نشان دهید معادله برقرار است.',
            en: 'Arash has opened a phone repair shop. Analyze the ten transactions of the first month with the accounting equation, then find (a) the balance of each item at month end, (b) the net income and (c) ending equity, and show that the equation balances.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: '#' },
              { fa: 'معامله', en: 'Transaction' },
            ],
            rows: [
              [1, { fa: 'آرش 30,000 وجه نقد سرمایه‌گذاری می‌کند.', en: 'Arash invests 30,000 cash.' }],
              [2, { fa: 'ابزار تعمیر به مبلغ 8,000 می‌خرد: 5,000 نقد و 3,000 نسیه.', en: 'Buys repair tools for 8,000: 5,000 in cash and 3,000 on account.' }],
              [3, { fa: 'قطعات یدکی (ملزومات) به مبلغ 2,500 نقد می‌خرد.', en: 'Buys spare parts (supplies) for 2,500 cash.' }],
              [4, { fa: 'گوشی مشتریان را تعمیر می‌کند و 6,000 نقد می‌گیرد.', en: 'Repairs customers’ phones for 6,000 cash.' }],
              [5, { fa: 'گوشی‌های یک شرکت را به‌صورت نسیه به مبلغ 3,500 تعمیر می‌کند.', en: 'Repairs a company’s phones on account for 3,500.' }],
              [6, { fa: 'اجاره مغازه، 2,000، را پرداخت می‌کند.', en: 'Pays the shop rent of 2,000.' }],
              [7, { fa: 'دستمزد دستیار، 1,800، را پرداخت می‌کند.', en: 'Pays the assistant’s wages of 1,800.' }],
              [8, { fa: '2,000 از آن شرکت وصول می‌کند.', en: 'Collects 2,000 from the company.' }],
              [9, { fa: '1,000 به فروشنده ابزار پرداخت می‌کند.', en: 'Pays 1,000 to the tool supplier.' }],
              [10, { fa: 'آرش 1,200 برای مصارف شخصی برمی‌دارد.', en: 'Arash withdraws 1,200 for personal use.' }],
            ],
          },
          hint: {
            fa: 'معامله 2 سه قلم را تغییر می‌دهد: ابزار 8,000 افزایش، موجودی نقد 5,000 کاهش و حساب‌های پرداختنی 3,000 افزایش.',
            en: 'Transaction 2 changes three items: Tools up 8,000, Cash down 5,000 and Accounts payable up 3,000.',
          },
          solution: [
            {
              type: 'analysis',
              title: { fa: 'تعمیرگاه آرش: تحلیل معاملات', en: 'Arash Phone Repair: transaction analysis' },
              rows: [
                { tx: { fa: '1. سرمایه‌گذاری آرش', en: '1. Arash invests cash' }, assets: 30000, equity: 30000 },
                {
                  tx: { fa: '2. خرید ابزار (افزایش ابزار 8,000، کاهش موجودی نقد 5,000)', en: '2. Tools bought (Tools +8,000; Cash −5,000)' },
                  assets: 3000,
                  liabilities: 3000,
                },
                { tx: { fa: '3. خرید نقدی قطعات (جابه‌جایی دارایی)', en: '3. Spare parts for cash (asset swap)' }, assets: 0 },
                { tx: { fa: '4. تعمیر نقدی (درآمد)', en: '4. Repairs for cash (revenue)' }, assets: 6000, equity: 6000 },
                { tx: { fa: '5. تعمیر نسیه (درآمد)', en: '5. Repairs on account (revenue)' }, assets: 3500, equity: 3500 },
                { tx: { fa: '6. اجاره (هزینه)', en: '6. Rent (expense)' }, assets: -2000, equity: -2000 },
                { tx: { fa: '7. دستمزد (هزینه)', en: '7. Wages (expense)' }, assets: -1800, equity: -1800 },
                { tx: { fa: '8. وصول از شرکت (جابه‌جایی دارایی)', en: '8. Collection from the company (asset swap)' }, assets: 0 },
                { tx: { fa: '9. پرداخت به فروشنده ابزار', en: '9. Payment to the tool supplier' }, assets: -1000, liabilities: -1000 },
                { tx: { fa: '10. برداشت آرش', en: '10. Arash’s drawings' }, assets: -1200, equity: -1200 },
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'موجودی نقد = 30,000 − 5,000 − 2,500 + 6,000 − 2,000 − 1,800 + 2,000 − 1,000 − 1,200 = 24,500',
                en: 'Cash = 30,000 − 5,000 − 2,500 + 6,000 − 2,000 − 1,800 + 2,000 − 1,000 − 1,200 = 24,500',
              },
            },
            {
              type: 'table',
              caption: { fa: 'مانده اقلام در پایان ماه', en: 'Balances at month end' },
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: 'موجودی نقد', en: 'Cash' }, 24500],
                [{ fa: 'حساب‌های دریافتنی (3,500 − 2,000)', en: 'Accounts receivable (3,500 − 2,000)' }, 1500],
                [{ fa: 'ملزومات (قطعات یدکی)', en: 'Supplies (spare parts)' }, 2500],
                [{ fa: 'ابزار تعمیر', en: 'Repair tools' }, 8000],
                [{ fa: '**جمع دارایی‌ها**', en: '**Total assets**' }, 36500],
                [{ fa: 'حساب‌های پرداختنی (3,000 − 1,000)', en: 'Accounts payable (3,000 − 1,000)' }, 2000],
                [{ fa: 'حقوق مالکانه', en: 'Equity' }, 34500],
                [{ fa: '**جمع بدهی‌ها و حقوق مالکانه**', en: '**Total liabilities and equity**' }, 36500],
              ],
            },
            {
              type: 'table',
              caption: { fa: 'از سرمایه تا حقوق مالکانه پایان ماه', en: 'From capital to ending equity' },
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: 'درآمد (6,000 + 3,500)', en: 'Revenue (6,000 + 3,500)' }, 9500],
                [{ fa: 'کسر می‌شود: هزینه‌ها (2,000 + 1,800)', en: 'Less: expenses (2,000 + 1,800)' }, 3800],
                [{ fa: '**سود خالص**', en: '**Net income**' }, 5700],
                [{ fa: 'سرمایه‌گذاری آرش', en: 'Arash’s investment' }, 30000],
                [{ fa: 'به‌علاوه: سود خالص', en: 'Add: net income' }, 5700],
                [{ fa: 'کسر می‌شود: برداشت', en: 'Less: drawings' }, 1200],
                [{ fa: '**حقوق مالکانه پایان ماه**', en: '**Ending equity**' }, 34500],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'به تفاوت سود و نقد دقت کنید: آرش 9,500 درآمد کسب کرده، اما از مشتریان فقط 8,000 نقد گرفته است (6,000 + 2,000)؛ 1,500 هنوز طلب است.',
                en: 'Notice the gap between profit and cash: Arash earned 9,500 of revenue but collected only 8,000 from customers (6,000 + 2,000); 1,500 is still owed to him.',
              },
            },
          ],
          answer: {
            fa: 'سود خالص 5,700؛ حقوق مالکانه پایان ماه 34,500؛ دارایی‌ها 36,500 = بدهی‌ها 2,000 + حقوق مالکانه 34,500.',
            en: 'Net income 5,700; ending equity 34,500; Assets 36,500 = Liabilities 2,000 + Equity 34,500.',
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
              fa: 'معادله حسابداری، **دارایی‌ها = بدهی‌ها + حقوق مالکانه**، پس از هر معامله برقرار می‌ماند؛ حقوق مالکانه ادعای باقی‌مانده مالک است.',
              en: 'The accounting equation, **Assets = Liabilities + Equity**, holds after every transaction; equity is the owner’s residual claim.',
            },
            {
              fa: 'هر معامله اثری دوگانه دارد: یا هر دو طرف معادله را به یک اندازه تغییر می‌دهد، یا اقلام یک طرف را با هم جابه‌جا می‌کند.',
              en: 'Every transaction has a dual effect: it either changes both sides by the same amount or swaps items within one side.',
            },
            {
              fa: 'برای تحلیل هر معامله بپرسید: کدام اقلام؟ چه نوعی؟ افزایش یا کاهش و چقدر؟ و در پایان، توازن را کنترل کنید.',
              en: 'To analyze any transaction ask: which items? what type? up or down, and by how much? Then check the balance.',
            },
            {
              fa: 'در پایان ماه نخست، نوا 72,000 دارایی، 16,500 بدهی و 55,500 حقوق مالکانه دارد.',
              en: 'At the end of its first month, Nova has assets of 72,000, liabilities of 16,500 and equity of 55,500.',
            },
            {
              fa: 'حقوق مالکانه فقط با سرمایه‌گذاری و درآمد افزایش و با برداشت و هزینه کاهش می‌یابد؛ وام، خرید دارایی و وصول طلب به آن دست نمی‌زنند.',
              en: 'Equity rises only through investment and revenue and falls only through drawings and expenses; loans, asset purchases and collections do not touch it.',
            },
            {
              fa: 'حقوق مالکانه پایان دوره = ابتدای دوره + سرمایه‌گذاری جدید + سود خالص − برداشت؛ این رابطه مبلغ‌های مجهول را پیدا می‌کند.',
              en: 'Ending equity = Beginning equity + New investment + Net income − Drawings; this relationship solves missing-amount problems.',
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
              def: { fa: 'رابطه دارایی‌ها = بدهی‌ها + حقوق مالکانه که همواره برقرار است.', en: 'Assets = Liabilities + Equity, a relationship that always holds.' },
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
              term: { fa: 'حقوق مالکانه', en: 'Equity' },
              def: { fa: 'منافع باقی‌مانده مالکان در دارایی‌ها پس از کسر همه بدهی‌ها.', en: 'The owners’ residual interest in the assets after deducting all liabilities.' },
            },
            {
              term: { fa: 'طلبکار', en: 'Creditor' },
              def: { fa: 'شخصی که واحد تجاری به او بدهکار است؛ مانند بانک یا تأمین‌کننده.', en: 'A party the business owes money to, such as a bank or a supplier.' },
            },
            {
              term: { fa: 'اثر دوگانه', en: 'Dual effect' },
              def: {
                fa: 'این ویژگی که هر معامله دست‌کم دو قلم را تغییر می‌دهد و معادله را متوازن نگه می‌دارد.',
                en: 'The fact that every transaction changes at least two items while keeping the equation in balance.',
              },
            },
            {
              term: { fa: 'تحلیل معامله', en: 'Transaction analysis' },
              def: {
                fa: 'تعیین اقلامی که یک معامله تغییر می‌دهد، نوع آن‌ها، جهت و مبلغ تغییر و کنترل توازن معادله.',
                en: 'Working out which items a transaction changes, their type, the direction and amount of each change, and checking the balance.',
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
              def: { fa: 'افزایش حقوق مالکانه ناشی از ارائه کالا یا خدمات به مشتریان.', en: 'The increase in equity from delivering goods or services to customers.' },
            },
            {
              term: { fa: 'هزینه', en: 'Expense' },
              def: { fa: 'کاهش حقوق مالکانه ناشی از مصرف منابع در جریان کسب درآمد.', en: 'The decrease in equity from using up resources in the process of earning revenue.' },
            },
            {
              term: { fa: 'سود خالص', en: 'Net income' },
              def: { fa: 'مازاد درآمدها بر هزینه‌های یک دوره؛ برای نوا در ماه نخست 6,500.', en: 'The excess of revenue over expenses for a period: 6,500 for Nova’s first month.' },
            },
            {
              term: { fa: 'زیان خالص', en: 'Net loss' },
              def: { fa: 'مازاد هزینه‌ها بر درآمدهای یک دوره که حقوق مالکانه را کاهش می‌دهد.', en: 'The excess of expenses over revenue for a period, which reduces equity.' },
            },
            {
              term: { fa: 'معادله گسترده', en: 'Expanded equation' },
              def: { fa: 'دارایی‌ها = بدهی‌ها + سرمایه − برداشت + درآمدها − هزینه‌ها', en: 'Assets = Liabilities + Capital − Drawings + Revenue − Expenses' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'دارایی‌های یک واحد تجاری 90,000 و بدهی‌های آن 35,000 است. حقوق مالکانه چقدر است؟', en: 'A business has assets of 90,000 and liabilities of 35,000. What is its equity?' },
      options: [
        { fa: '125,000', en: '125,000' },
        { fa: '55,000', en: '55,000' },
        { fa: '35,000', en: '35,000' },
        { fa: '90,000', en: '90,000' },
      ],
      answer: 1,
      explain: {
        fa: 'حقوق مالکانه = دارایی‌ها − بدهی‌ها = 90,000 − 35,000 = 55,000. گزینه 125,000 دو عدد را به‌اشتباه جمع کرده است؛ حقوق مالکانه ادعای باقی‌مانده مالک پس از کسر بدهی‌هاست، نه مجموع آن‌ها.',
        en: 'Equity = Assets − Liabilities = 90,000 − 35,000 = 55,000. The 125,000 option wrongly adds the two; equity is the owner’s residual claim after liabilities are deducted, not their sum.',
      },
    },
    {
      q: { fa: 'نوا در روز 3 تجهیزاتی را به مبلغ 20,000 نقد خرید. اثر این معامله بر معادله چیست؟', en: 'On Day 3 Nova bought equipment for 20,000 cash. What is the effect on the equation?' },
      options: [
        { fa: 'دارایی‌ها 20,000 افزایش و حقوق مالکانه 20,000 افزایش', en: 'Assets +20,000 and equity +20,000' },
        { fa: 'دارایی‌ها 20,000 کاهش و بدهی‌ها 20,000 کاهش', en: 'Assets −20,000 and liabilities −20,000' },
        { fa: 'دارایی‌ها 20,000 افزایش و بدهی‌ها 20,000 افزایش', en: 'Assets +20,000 and liabilities +20,000' },
        { fa: 'جمع دارایی‌ها تغییر نمی‌کند؛ یک دارایی جای دارایی دیگر را می‌گیرد', en: 'Total assets are unchanged: one asset replaces another' },
      ],
      answer: 3,
      explain: {
        fa: 'تجهیزات 20,000 افزایش و موجودی نقد 20,000 کاهش می‌یابد. این یک جابه‌جایی میان دارایی‌هاست و بدهی‌ها و حقوق مالکانه دست نمی‌خورند. گزینه افزایش دارایی و بدهی فقط زمانی درست بود که خرید نسیه انجام می‌شد.',
        en: 'Equipment rises by 20,000 and Cash falls by 20,000. It is an asset swap; liabilities and equity are untouched. The “assets and liabilities up” option would be right only if the equipment had been bought on account.',
      },
    },
    {
      q: { fa: 'کدام معامله هم دارایی‌ها و هم بدهی‌ها را کاهش می‌دهد؟', en: 'Which transaction decreases both assets and liabilities?' },
      options: [
        { fa: 'پرداخت 1,500 بدهی به تأمین‌کننده', en: 'Paying a supplier 1,500 that is owed' },
        { fa: 'خرید نسیه ملزومات', en: 'Buying supplies on account' },
        { fa: 'پرداخت اجاره', en: 'Paying rent' },
        { fa: 'وصول طلب از مشتری', en: 'Collecting cash from a customer' },
      ],
      answer: 0,
      explain: {
        fa: 'پرداخت به تأمین‌کننده، موجودی نقد (دارایی) و حساب‌های پرداختنی (بدهی) را به یک اندازه کاهش می‌دهد. خرید نسیه هر دو را افزایش می‌دهد، پرداخت اجاره دارایی و حقوق مالکانه را کاهش می‌دهد و وصول طلب فقط دارایی‌ها را جابه‌جا می‌کند.',
        en: 'Paying the supplier reduces Cash (an asset) and Accounts payable (a liability) by the same amount. Buying on account increases both, paying rent reduces assets and equity, and collecting a receivable merely swaps assets.',
      },
    },
    {
      q: { fa: 'سارا 1,000 از وجه نقد نوا را برای مصارف شخصی برداشت می‌کند. اثر آن چیست؟', en: 'Sara withdraws 1,000 of Nova’s cash for personal use. What is the effect?' },
      options: [
        { fa: 'هزینه‌ها افزایش می‌یابند', en: 'Expenses increase' },
        { fa: 'بدهی‌ها افزایش می‌یابند', en: 'Liabilities increase' },
        { fa: 'دارایی‌ها و حقوق مالکانه هر دو 1,000 کاهش می‌یابند', en: 'Assets and equity both decrease by 1,000' },
        { fa: 'اثری بر معادله ندارد', en: 'There is no effect on the equation' },
      ],
      answer: 2,
      explain: {
        fa: 'موجودی نقد 1,000 کاهش می‌یابد و حقوق مالکانه از طریق حساب برداشت 1,000 کم می‌شود. گزینه «هزینه» وسوسه‌انگیز است، اما برداشت هزینه نیست، چون به کسب درآمد کمکی نمی‌کند و در صورت سود و زیان نمی‌آید.',
        en: 'Cash falls by 1,000 and equity falls by 1,000 through Drawings. The “expenses” option is tempting, but drawings are not an expense: they do not help earn revenue and never appear on the income statement.',
      },
    },
    {
      q: { fa: 'نوا در روز 12 کاری به مبلغ 4,000 به‌صورت نسیه انجام داد. اثر آن بر معادله چیست؟', en: 'On Day 12 Nova completed a 4,000 job on account. What is the effect on the equation?' },
      options: [
        { fa: 'موجودی نقد و حقوق مالکانه هر دو 4,000 افزایش', en: 'Cash +4,000 and equity +4,000' },
        { fa: 'حساب‌های دریافتنی و حقوق مالکانه هر دو 4,000 افزایش', en: 'Accounts receivable +4,000 and equity +4,000' },
        { fa: 'حساب‌های دریافتنی و بدهی‌ها هر دو 4,000 افزایش', en: 'Accounts receivable +4,000 and liabilities +4,000' },
        { fa: 'تا زمان دریافت وجه نقد اثری ندارد', en: 'No effect until the cash is collected' },
      ],
      answer: 1,
      explain: {
        fa: 'درآمد هنگام انجام کار کسب شده است، پس حقوق مالکانه از طریق درآمد خدمات افزایش می‌یابد. چون وجه نقد هنوز دریافت نشده، دارایی ایجادشده حساب‌های دریافتنی است، نه موجودی نقد. «بی‌اثر تا دریافت پول» منطق مبنای نقدی است، نه تعهدی.',
        en: 'The revenue is earned when the work is done, so equity rises through Service revenue. Because no cash has been received yet, the asset that increases is Accounts receivable, not Cash. “No effect until collected” is cash-basis thinking, not accrual.',
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
    {
      q: {
        fa: 'حقوق مالکانه یک کسب‌وکار در ابتدای سال 40,000 و در پایان سال 52,000 است. مالک در طول سال 5,000 سرمایه‌گذاری تازه کرده و 3,000 برداشت کرده است. سود خالص سال چقدر است؟',
        en: 'A business’s equity was 40,000 at the start of the year and 52,000 at the end. During the year the owner invested another 5,000 and withdrew 3,000. What was the net income?',
      },
      options: [
        { fa: '12,000', en: '12,000' },
        { fa: '14,000', en: '14,000' },
        { fa: '10,000', en: '10,000' },
        { fa: '20,000', en: '20,000' },
      ],
      answer: 2,
      explain: {
        fa: '52,000 = 40,000 + 5,000 + سود خالص − 3,000؛ پس سود خالص 10,000 است. گزینه 12,000 کل افزایش حقوق مالکانه را سود فرض کرده و سرمایه‌گذاری و برداشت را نادیده گرفته است؛ گزینه 14,000 اثر آن دو را برعکس به کار برده است.',
        en: '52,000 = 40,000 + 5,000 + Net income − 3,000, so net income is 10,000. The 12,000 option treats the whole increase in equity as profit, ignoring the investment and the drawings; 14,000 applies both in the wrong direction.',
      },
    },
    {
      q: {
        fa: 'یک کسب‌وکار قبض 800 آب و برق این ماه را دریافت می‌کند و قرار است آن را ماه بعد بپردازد. اثر آن بر معادله در این ماه چیست؟',
        en: 'A business receives this month’s 800 utility bill and will pay it next month. What is the effect on the equation this month?',
      },
      options: [
        { fa: 'بدهی‌ها افزایش و حقوق مالکانه کاهش می‌یابد', en: 'Liabilities increase and equity decreases' },
        { fa: 'دارایی‌ها و حقوق مالکانه هر دو کاهش می‌یابند', en: 'Assets and equity both decrease' },
        { fa: 'تا زمان پرداخت اثری ندارد', en: 'No effect until it is paid' },
        { fa: 'دارایی‌ها و بدهی‌ها هر دو افزایش می‌یابند', en: 'Assets and liabilities both increase' },
      ],
      answer: 0,
      explain: {
        fa: 'هزینه آب و برق در همین ماه رخ داده، پس حقوق مالکانه از طریق هزینه کاهش می‌یابد؛ چون پولش هنوز پرداخت نشده، بدهی افزایش می‌یابد و دارایی‌ها تغییری نمی‌کنند. کاهش دارایی‌ها ماه بعد و هنگام پرداخت رخ می‌دهد؛ «بی‌اثر تا پرداخت» با مبنای تعهدی سازگار نیست.',
        en: 'The utility cost belongs to this month, so equity falls through an expense; because it has not been paid, a liability rises and assets do not change. Assets fall next month, when the bill is paid; “no effect until paid” does not fit the accrual basis.',
      },
    },
    {
      q: { fa: 'کسب‌وکاری 20,000 از بانک وام می‌گیرد. اثر آن بر حقوق مالکانه چیست؟', en: 'A business borrows 20,000 from the bank. What is the effect on equity?' },
      options: [
        { fa: 'حقوق مالکانه 20,000 افزایش می‌یابد، چون پول وارد شده است', en: 'Equity rises by 20,000 because money came in' },
        { fa: 'حقوق مالکانه 20,000 کاهش می‌یابد', en: 'Equity falls by 20,000' },
        { fa: 'درآمد 20,000 افزایش می‌یابد', en: 'Revenue rises by 20,000' },
        { fa: 'حقوق مالکانه تغییری نمی‌کند؛ دارایی‌ها و بدهی‌ها هر دو 20,000 افزایش می‌یابند', en: 'Equity is unchanged; assets and liabilities both rise by 20,000' },
      ],
      answer: 3,
      explain: {
        fa: 'وام موجودی نقد را 20,000 افزایش می‌دهد، اما کسب‌وکار باید آن را پس بدهد؛ پس بدهی هم 20,000 افزایش می‌یابد و سهم مالک تغییری نمی‌کند. ورود پول به معنای افزایش حقوق مالکانه یا درآمد نیست؛ این رایج‌ترین اشتباه تازه‌کارهاست.',
        en: 'The loan increases Cash by 20,000, but the business must repay it, so liabilities also rise by 20,000 and the owner’s stake is unchanged. Money coming in does not mean equity or revenue went up; this is the most common beginner mistake.',
      },
    },
    {
      q: {
        fa: 'دارایی‌های یک کسب‌وکار در طول سال 18,000 افزایش و بدهی‌هایش 5,000 کاهش یافته است. حقوق مالکانه چه تغییری کرده است؟',
        en: 'During the year a business’s assets increased by 18,000 and its liabilities decreased by 5,000. How did equity change?',
      },
      options: [
        { fa: '13,000 افزایش', en: 'Increased by 13,000' },
        { fa: '23,000 افزایش', en: 'Increased by 23,000' },
        { fa: '23,000 کاهش', en: 'Decreased by 23,000' },
        { fa: '18,000 افزایش', en: 'Increased by 18,000' },
      ],
      answer: 1,
      explain: {
        fa: 'دارایی‌ها 18,000 بیشتر شده و بدهی‌ها 5,000 کمتر؛ برای اینکه دو طرف برابر بمانند، حقوق مالکانه باید 18,000 + 5,000 = 23,000 افزایش یافته باشد. گزینه 13,000 کاهش بدهی را به‌اشتباه از افزایش دارایی کم کرده است، در حالی که کم شدن بدهی هم به نفع مالک است.',
        en: 'Assets went up by 18,000 and liabilities went down by 5,000; to keep both sides equal, equity must have risen by 18,000 + 5,000 = 23,000. The 13,000 option wrongly subtracts the drop in liabilities, although paying down debt also benefits the owner.',
      },
    },
  ],
}
