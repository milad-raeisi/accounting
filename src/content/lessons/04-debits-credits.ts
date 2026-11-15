import type { Lesson } from '../types'

export const lesson: Lesson = {
  slug: 'debits-credits',
  number: 4,
  level: 'beginner',
  minutes: 18,
  icon: 'ArrowLeftRight',
  tone: 'liability',
  title: { fa: 'بدهکار، بستانکار و حسابداری دوطرفه', en: 'Debits, Credits and Double-Entry' },
  summary: {
    fa: 'سازوکار اصلی همه دفاتر حسابداری را بیاموزید: حسابداری دوطرفه، قواعد بدهکار و بستانکار برای هر نوع حساب، مانده عادی و حساب T شکل.',
    en: 'Learn the mechanics behind every set of books: double-entry, the debit and credit rules for each account type, normal balances and the T-account.',
  },
  objectives: [
    {
      fa: 'نظام حسابداری دوطرفه را توضیح دهید و بگویید چرا جمع بدهکار همیشه با جمع بستانکار برابر است.',
      en: 'Explain the double-entry system and why total debits always equal total credits.',
    },
    {
      fa: 'قواعد بدهکار و بستانکار را برای هر پنج نوع حساب و حساب برداشت به کار ببرید.',
      en: 'Apply the debit and credit rules to all five account types and to drawings.',
    },
    {
      fa: 'مانده عادی هر حساب را با کمک رمز به‌خاطرسپاری DEALER تشخیص دهید.',
      en: 'Identify the normal balance of any account using the DEALER mnemonic.',
    },
    {
      fa: 'معاملات را در حساب‌های T شکل ثبت کنید و مانده آن‌ها را به دست آورید.',
      en: 'Record transactions in T-accounts and work out their balances.',
    },
    {
      fa: 'از رایج‌ترین اشتباهات تازه‌کارها در ثبت بدهکار و بستانکار دوری کنید.',
      en: 'Avoid the most common beginner mistakes with debits and credits.',
    },
  ],
  sections: [
    {
      id: 'double-entry',
      title: { fa: 'حسابداری دوطرفه: هر معامله دو رو دارد', en: 'Double-Entry: Two Sides to Every Story' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در دو درس گذشته دیدید که هر معامله دست‌کم بر دو قلم اثر می‌گذارد و معادله حسابداری را در توازن نگه می‌دارد. **حسابداری دوطرفه** این ایده را به یک نظام ثبت تبدیل می‌کند: هر معامله دست‌کم با یک **بدهکار** و یک **بستانکار** ثبت می‌شود و جمع مبالغ بدهکار باید با جمع مبالغ بستانکار برابر باشد.',
            en: 'In the last two lessons you saw that every transaction affects at least two items and leaves the accounting equation in balance. **Double-entry accounting** turns that idea into a recording system: every transaction is recorded with at least one **debit** and at least one **credit**, and total debits must equal total credits.',
          },
        },
        {
          type: 'formula',
          text: { fa: 'جمع بدهکار = جمع بستانکار', en: 'Σ Debits = Σ Credits' },
          note: {
            fa: 'این برابری در هر ثبت منفرد برقرار است و در نتیجه در کل دفتر کل نیز برقرار خواهد بود.',
            en: 'This holds for every single entry, and therefore for the ledger as a whole.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'نوا، روز 1: ثبت به روش دوطرفه', en: 'Nova, Day 1: recorded in double-entry form' },
          entries: [
            {
              date: { fa: 'روز 1', en: 'Day 1' },
              lines: [
                { account: { fa: 'وجه نقد', en: 'Cash' }, debit: 50000 },
                { account: { fa: 'سرمایه', en: 'Capital' }, credit: 50000 },
              ],
              memo: {
                fa: 'سرمایه‌گذاری نقدی سارا در کسب‌وکار',
                en: 'Sara invests cash in the business',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'ایده‌ای بیش از 500 ساله', en: 'An idea over 500 years old' },
          text: {
            fa: 'دفترداری دوطرفه را بازرگانان ایتالیایی در سده‌های میانه به کار می‌بردند و نخستین بار ریاضی‌دانی به نام **لوکا پاچیولی** در سال 1494 آن را در کتابی چاپی شرح داد. همین منطق امروز در دل همه نرم‌افزارهای حسابداری جریان دارد.',
            en: 'Double-entry bookkeeping was used by Italian merchants in the Middle Ages and first described in print by the mathematician **Luca Pacioli** in 1494. The same logic runs inside every modern accounting system.',
          },
        },
        { type: 'h', text: { fa: 'چرا دوطرفه؟', en: 'Why double-entry?' } },
        {
          type: 'list',
          items: [
            {
              fa: '**خودکنترل** است: اگر جمع بدهکار با جمع بستانکار برابر نباشد، بی‌درنگ می‌فهمید اشتباهی رخ داده است.',
              en: 'It is **self-checking**: if debits do not equal credits, you know at once that something is wrong.',
            },
            {
              fa: '**هر دو روی** معامله را نشان می‌دهد: آنچه به دست آمده و آنچه در برابرش داده شده یا بدهی ایجاد کرده است.',
              en: 'It captures **both sides** of a transaction, what was received and what was given up or owed in return.',
            },
            {
              fa: 'پس از هر ثبت، معادله حسابداری را در توازن نگه می‌دارد.',
              en: 'It keeps the accounting equation in balance after every entry.',
            },
          ],
        },
      ],
    },
    {
      id: 'left-and-right',
      title: { fa: 'بدهکار و بستانکار: دو ستون، نه خوب و بد', en: 'Debit Means Left, Credit Means Right' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'واژه‌های **بدهکار** و **بستانکار** در حسابداری بار ارزشی ندارند؛ آن‌ها فقط نام **دو ستون** هر حساب‌اند. ثبت مبلغی در ستون بدهکار را «بدهکار کردن» حساب و ثبت آن در ستون بستانکار را «بستانکار کردن» حساب می‌نامیم. اینکه این کار مانده حساب را افزایش می‌دهد یا کاهش، به نوع حساب بستگی دارد.',
            en: 'The terms **debit** (Dr) and **credit** (Cr) come from the Latin debere, “to owe”, and credere, “to entrust”. In modern accounting they simply mean the **left side** and the **right side** of an account, nothing more. Entering an amount on the left is “debiting” the account; entering it on the right is “crediting” it. Whether that increases or decreases the balance depends on the type of account.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در کتاب‌ها و نرم‌افزارهای انگلیسی‌زبان، ستون بدهکار در سمت چپ و ستون بستانکار در سمت راست قرار دارد. در کتاب‌ها و فرم‌های فارسی که از راست به چپ نوشته می‌شوند، این ترتیب معمولاً قرینه می‌شود: ستون بدهکار نخست و در سمت راست می‌آید و ستون بستانکار در سمت چپ. ترتیب هرچه باشد، آنچه اهمیت دارد نام ستون است، نه جهت آن.',
            en: 'By convention, English-language books and software put debits on the left and credits on the right. Persian books and forms, written right to left, usually mirror that layout, placing the debit column first, on the right. Whatever the layout, it is the column that matters, not the direction.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: {
            fa: 'بدهکار به معنای «بد» و بستانکار به معنای «خوب» نیست',
            en: 'Debit is not “bad”, credit is not “good”',
          },
          text: {
            fa: 'تازه‌کارها اغلب گمان می‌کنند بستانکار خبر خوب و بدهکار خبر بد است؛ چون وقتی پولی به حسابشان واریز می‌شود، بانک می‌گوید حساب آن‌ها را «بستانکار» کرده است. اما بانک از دید **دفاتر خودش** سخن می‌گوید: سپرده شما برای بانک بدهی است و با بستانکار افزایش می‌یابد. در **دفاتر شما**، همان واریز، وجه نقد را بدهکار می‌کند. بدهکار می‌تواند یک دارایی یا هزینه را افزایش دهد و بستانکار می‌تواند یک بدهی یا درآمد را؛ هیچ‌کدام ذاتاً خوب یا بد نیست.',
            en: 'Beginners often assume a credit is good news and a debit bad news, because a bank “credits” your account when money arrives. But the bank is talking about **its own** books: your deposit is a liability of the bank, so it increases with a credit. In **your** books, the same deposit is a debit to Cash. A debit can increase an asset or an expense; a credit can increase a liability or revenue. Neither is good or bad.',
          },
        },
        {
          type: 'diagram',
          id: 't-account',
          caption: {
            fa: 'حساب T شکل: بدهکار در یک ستون، بستانکار در ستون دیگر و مانده در پایین.',
            en: 'A T-account: debits on the left, credits on the right, the balance underneath.',
          },
        },
        { type: 'h', text: { fa: 'اجزای حساب T شکل', en: 'Anatomy of a T-account' } },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'عنوان حساب', en: 'Title' },
              text: {
                fa: 'نام و کد حساب بالای خط افقی T نوشته می‌شود؛ مانند 1010 وجه نقد.',
                en: 'The account name and code sit on top of the T, for example, 1010 Cash.',
              },
            },
            {
              title: { fa: 'ستون بدهکار', en: 'Debit side (left)' },
              text: {
                fa: 'مبالغی که به بدهکار حساب ثبت می‌شوند. در حساب وجه نقد، همه دریافت‌ها در این ستون قرار می‌گیرند.',
                en: 'Amounts debited to the account. In the Cash account, every receipt goes here.',
              },
            },
            {
              title: { fa: 'ستون بستانکار', en: 'Credit side (right)' },
              text: {
                fa: 'مبالغی که به بستانکار حساب ثبت می‌شوند. در حساب وجه نقد، همه پرداخت‌ها در این ستون قرار می‌گیرند.',
                en: 'Amounts credited to the account. In the Cash account, every payment goes here.',
              },
            },
            {
              title: { fa: 'جمع هر ستون', en: 'Totals' },
              text: {
                fa: 'مبالغ هر ستون را جداگانه جمع بزنید.',
                en: 'Add up each side separately. These subtotals are often called footings.',
              },
            },
            {
              title: { fa: 'مانده', en: 'Balance' },
              text: {
                fa: 'جمع کوچک‌تر را از جمع بزرگ‌تر کم کنید. مانده در ستونی قرار می‌گیرد که جمع بزرگ‌تری دارد و «مانده بدهکار» یا «مانده بستانکار» نامیده می‌شود.',
                en: 'Subtract the smaller total from the larger. The balance sits on the side with the larger total and is called a debit balance or a credit balance.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'rules',
      title: { fa: 'قواعد بدهکار و بستانکار و رمز DEALER', en: 'The Rules and the DEALER Mnemonic' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'این قواعد دلبخواهی نیستند و مستقیماً از معادله حسابداری به دست می‌آیند. دارایی‌ها در یک طرف معادله‌اند و با بدهکار افزایش می‌یابند؛ بدهی‌ها و حقوق مالکانه در طرف دیگرند و با بستانکار افزایش می‌یابند. درآمد حقوق مالکانه را افزایش می‌دهد، پس از قاعده حقوق مالکانه پیروی می‌کند؛ هزینه و برداشت حقوق مالکانه را کاهش می‌دهند، پس قاعده‌ای وارونه دارند.',
            en: 'The rules are not arbitrary, they fall straight out of the accounting equation. Assets sit on the left of the equation, so they increase on the left (debit) side. Liabilities and equity sit on the right, so they increase on the right (credit) side. Revenue increases equity, so it follows equity’s rule; expenses and drawings reduce equity, so they follow the opposite rule.',
          },
        },
        {
          type: 'diagram',
          id: 'debit-credit-rules',
          caption: {
            fa: 'برای هر نوع حساب: کدام ستون آن را افزایش می‌دهد، کدام ستون کاهش می‌دهد و مانده عادی آن در کدام ستون است.',
            en: 'For each account type: which side increases it, which side decreases it, and where its normal balance lies.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'نوع حساب', en: 'Account type' },
            { fa: 'افزایش', en: 'Increase' },
            { fa: 'کاهش', en: 'Decrease' },
            { fa: 'مانده عادی', en: 'Normal balance' },
          ],
          rows: [
            [
              { fa: 'برداشت', en: 'Drawings' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'بدهکار', en: 'Debit' },
            ],
            [
              { fa: 'هزینه‌ها', en: 'Expenses' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'بدهکار', en: 'Debit' },
            ],
            [
              { fa: 'دارایی‌ها', en: 'Assets' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'بدهکار', en: 'Debit' },
            ],
            [
              { fa: 'بدهی‌ها', en: 'Liabilities' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
            [
              { fa: 'حقوق مالکانه (سرمایه)', en: 'Equity (capital)' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
            [
              { fa: 'درآمدها', en: 'Revenue' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
          ],
        },
        {
          type: 'formula',
          text: { fa: 'DEA | LER', en: 'DEA | LER' },
          note: {
            fa: 'DEA یعنی برداشت (Drawings)، هزینه‌ها (Expenses) و دارایی‌ها (Assets) که با بدهکار افزایش می‌یابند. LER یعنی بدهی‌ها (Liabilities)، حقوق مالکانه (Equity) و درآمدها (Revenue) که با بستانکار افزایش می‌یابند.',
            en: 'DEA, Drawings, Expenses, Assets, increase with a debit. LER, Liabilities, Equity, Revenue, increase with a credit.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**مانده عادی** هر حساب همان ستونی است که حساب با آن افزایش می‌یابد؛ بنابراین مانده آن معمولاً در همان ستون قرار دارد. حساب‌های DEA معمولاً مانده بدهکار و حساب‌های LER معمولاً مانده بستانکار دارند. مانده‌ای که در ستون «نادرست» باشد زنگ خطر است؛ برای نمونه، مانده بستانکار در حساب وجه نقد یا نشانه اضافه‌برداشت از بانک است یا نشانه خطا در ثبت.',
            en: 'An account’s **normal balance** is the side on which it increases, and therefore the side where its balance usually sits. DEA accounts normally carry debit balances; LER accounts normally carry credit balances. A balance on the “wrong” side is a red flag: a credit balance in Cash, for instance, signals either a bank overdraft or a recording error.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'حساب‌های کاهنده قاعده را وارونه می‌کنند', en: 'Contra accounts flip the rule' },
          text: {
            fa: 'مانده عادی هر حساب کاهنده، خلاف مانده عادی حسابی است که آن را کاهش می‌دهد. استهلاک انباشته از یک دارایی کسر می‌شود؛ پس مانده عادی آن **بستانکار** است.',
            en: 'A contra account has the opposite normal balance to the account it reduces. Accumulated depreciation offsets an asset, so its normal balance is a **credit**.',
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'به‌کارگیری قواعد در چهار معامله نوا',
            en: 'Applying the rules to four of Nova’s transactions',
          },
          entries: [
            {
              date: { fa: 'روز 4', en: 'Day 4' },
              lines: [
                { account: { fa: 'ملزومات', en: 'Supplies' }, debit: 3000 },
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 3000 },
              ],
              memo: {
                fa: 'افزایش دارایی: بدهکار؛ افزایش بدهی: بستانکار',
                en: 'Asset up → debit; liability up → credit',
              },
            },
            {
              date: { fa: 'روز 8', en: 'Day 8' },
              lines: [
                { account: { fa: 'وجه نقد', en: 'Cash' }, debit: 8000 },
                { account: { fa: 'درآمد خدمات', en: 'Service revenue' }, credit: 8000 },
              ],
              memo: {
                fa: 'افزایش دارایی: بدهکار؛ افزایش درآمد: بستانکار',
                en: 'Asset up → debit; revenue up → credit',
              },
            },
            {
              date: { fa: 'روز 15', en: 'Day 15' },
              lines: [
                { account: { fa: 'هزینه اجاره', en: 'Rent expense' }, debit: 2500 },
                { account: { fa: 'وجه نقد', en: 'Cash' }, credit: 2500 },
              ],
              memo: {
                fa: 'افزایش هزینه: بدهکار؛ کاهش دارایی: بستانکار',
                en: 'Expense up → debit; asset down → credit',
              },
            },
            {
              date: { fa: 'روز 30', en: 'Day 30' },
              lines: [
                { account: { fa: 'برداشت', en: 'Drawings' }, debit: 1000 },
                { account: { fa: 'وجه نقد', en: 'Cash' }, credit: 1000 },
              ],
              memo: {
                fa: 'افزایش برداشت: بدهکار؛ کاهش دارایی: بستانکار',
                en: 'Drawings up → debit; asset down → credit',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'nova-t-accounts',
      title: { fa: 'حساب‌های T شکل نوا', en: 'Nova’s T-Accounts' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'اکنون معاملات ماه نخست نوا را به سه حساب آن منتقل می‌کنیم. همه مبالغ از همان دوازده معامله‌ای است که در درس 2 تحلیل کردید؛ با این تفاوت که اکنون هر مبلغ در ستون بدهکار یا بستانکار می‌نشیند.',
            en: 'Let’s post Nova’s first month to three of its accounts. Every amount comes from the twelve transactions you analyzed in Lesson 2, only now each one lands on the debit or the credit side.',
          },
        },
        {
          type: 'tAccounts',
          title: {
            fa: 'وجه نقد، حساب‌های دریافتنی و حساب‌های پرداختنی، ماه نخست',
            en: 'Cash, Accounts receivable and Accounts payable, first month',
          },
          accounts: [
            {
              name: { fa: 'وجه نقد', en: 'Cash' },
              debits: [50000, 15000, 8000, 2500],
              credits: [20000, 1200, 2500, 3000, 1500, 1000],
            },
            {
              name: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
              debits: [4000],
              credits: [2500],
            },
            {
              name: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              debits: [1500],
              credits: [3000],
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'منشأ مبالغ حساب وجه نقد', en: 'Where each Cash amount comes from' },
          head: [
            { fa: 'روز', en: 'Day' },
            { fa: 'معامله', en: 'Transaction' },
            { fa: 'ستون', en: 'Side' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [3],
          rows: [
            [
              { fa: 'روز 1', en: 'Day 1' },
              { fa: 'سرمایه‌گذاری سارا', en: 'Sara’s investment' },
              { fa: 'بدهکار', en: 'Debit' },
              50000,
            ],
            [
              { fa: 'روز 2', en: 'Day 2' },
              { fa: 'دریافت وام بانکی', en: 'Bank loan received' },
              { fa: 'بدهکار', en: 'Debit' },
              15000,
            ],
            [
              { fa: 'روز 3', en: 'Day 3' },
              { fa: 'خرید تجهیزات', en: 'Equipment purchased' },
              { fa: 'بستانکار', en: 'Credit' },
              20000,
            ],
            [
              { fa: 'روز 5', en: 'Day 5' },
              { fa: 'پرداخت حق بیمه', en: 'Insurance premium paid' },
              { fa: 'بستانکار', en: 'Credit' },
              1200,
            ],
            [
              { fa: 'روز 8', en: 'Day 8' },
              { fa: 'درآمد نقدی', en: 'Cash revenue' },
              { fa: 'بدهکار', en: 'Debit' },
              8000,
            ],
            [
              { fa: 'روز 15', en: 'Day 15' },
              { fa: 'پرداخت اجاره', en: 'Rent paid' },
              { fa: 'بستانکار', en: 'Credit' },
              2500,
            ],
            [
              { fa: 'روز 20', en: 'Day 20' },
              { fa: 'پرداخت حقوق و دستمزد', en: 'Salaries paid' },
              { fa: 'بستانکار', en: 'Credit' },
              3000,
            ],
            [
              { fa: 'روز 24', en: 'Day 24' },
              { fa: 'وصول از مشتریان', en: 'Collected from customers' },
              { fa: 'بدهکار', en: 'Debit' },
              2500,
            ],
            [
              { fa: 'روز 27', en: 'Day 27' },
              { fa: 'پرداخت به تأمین‌کننده', en: 'Paid the supplier' },
              { fa: 'بستانکار', en: 'Credit' },
              1500,
            ],
            [
              { fa: 'روز 30', en: 'Day 30' },
              { fa: 'برداشت سارا', en: 'Sara’s drawings' },
              { fa: 'بستانکار', en: 'Credit' },
              1000,
            ],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'مانده وجه نقد = 75,500 بدهکار − 29,200 بستانکار = 46,300 مانده بدهکار',
            en: 'Cash balance = 75,500 Dr − 29,200 Cr = 46,300 Dr',
          },
          note: {
            fa: 'جمع ستون بدهکار بزرگ‌تر است؛ پس مانده در ستون بدهکار قرار می‌گیرد، یعنی همان مانده عادی یک دارایی.',
            en: 'The debit side is larger, so the balance sits on the debit side, the normal balance for an asset.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'دو حساب دیگر', en: 'The other two accounts' },
          text: {
            fa: 'حساب‌های دریافتنی: 4,000 صورت‌حساب صادرشده منهای 2,500 وصول‌شده، یعنی **1,500 مانده بدهکار**؛ مشتریان هنوز 1,500 به نوا بدهی دارند. حساب‌های پرداختنی: 3,000 خرید نسیه منهای 1,500 پرداخت‌شده، یعنی **1,500 مانده بستانکار**؛ نوا هنوز 1,500 به تأمین‌کننده بدهی دارد. هر دو مانده در ستون عادی خود قرار دارند.',
            en: 'Accounts receivable: 4,000 billed less 2,500 collected leaves a **1,500 debit balance**: customers still owe Nova 1,500. Accounts payable: 3,000 bought on account less 1,500 paid leaves a **1,500 credit balance**: Nova still owes its supplier 1,500. Both balances sit on their normal side.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'نگاهی به جلو', en: 'A look ahead' },
          text: {
            fa: 'اگر همین کار را برای هر دوازده حساب نوا انجام دهید، جمع مانده‌های بدهکار 78,500 و جمع مانده‌های بستانکار نیز 78,500 می‌شود؛ همان چیزی که تراز آزمایشی در درس‌های بعد تأیید خواهد کرد.',
            en: 'Do this for all twelve of Nova’s accounts and the debit balances total 78,500, exactly matching the credit balances of 78,500. That is what the trial balance will confirm in a later lesson.',
          },
        },
      ],
    },
    {
      id: 'mistakes',
      title: { fa: 'اشتباهات رایج تازه‌کارها', en: 'Common Beginner Mistakes' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تقریباً همه هنگام یادگیری بدهکار و بستانکار در چند نقطه مشترک دچار لغزش می‌شوند. شناختن این نقاط از پیش، شما را از سردرگمی زیادی نجات می‌دهد.',
            en: 'Almost everyone trips over the same few points when learning debits and credits. Knowing them in advance will save you a lot of frustration.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'اشتباه', en: 'Mistake' },
            items: [
              {
                fa: 'بدهکار یعنی کاهش و بستانکار یعنی افزایش.',
                en: 'Debit means decrease and credit means increase.',
              },
              {
                fa: 'ثبت از دیدگاه بانک: «بانک حسابم را بستانکار کرده، پس من هم وجه نقد را بستانکار می‌کنم».',
                en: 'Recording from the bank’s viewpoint: “the bank credited me, so I credit Cash”.',
              },
              { fa: 'ثبت برداشت به‌عنوان هزینه.', en: 'Recording drawings as an expense.' },
              {
                fa: 'ثبت درآمد فقط هنگام دریافت وجه نقد.',
                en: 'Crediting revenue only when cash arrives.',
              },
              { fa: 'ثبت فقط یک طرف معامله.', en: 'Recording only one side of a transaction.' },
            ],
          },
          right: {
            title: { fa: 'برداشت درست', en: 'Correct thinking' },
            items: [
              {
                fa: 'اینکه بدهکار افزایش است یا کاهش، به نوع حساب بستگی دارد (DEALER).',
                en: 'Whether a debit increases or decreases depends on the account type (DEALER).',
              },
              {
                fa: 'همیشه از دیدگاه واحد تجاری خودتان ثبت کنید: ورود پول یعنی بدهکار شدن وجه نقد.',
                en: 'Always record from your own business’s viewpoint: money in means debit Cash.',
              },
              {
                fa: 'برداشت مستقیماً حقوق مالکانه را کاهش می‌دهد و هرگز در صورت سود و زیان نمی‌آید.',
                en: 'Drawings reduce equity directly and never appear on the income statement.',
              },
              {
                fa: 'درآمد هنگام کسب بستانکار می‌شود؛ اگر وجه نقد هنوز دریافت نشده، حساب‌های دریافتنی بدهکار می‌شود (روز 12).',
                en: 'Revenue is credited when earned; if no cash has arrived yet, debit Accounts receivable (Day 12).',
              },
              {
                fa: 'هر ثبت به بدهکار و بستانکار برابر نیاز دارد؛ پیش از ادامه کار، جمع‌ها را کنترل کنید.',
                en: 'Every entry needs equal debits and credits, check the totals before moving on.',
              },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'وصول طلب، درآمد نیست', en: 'Collecting a receivable is not revenue' },
          text: {
            fa: 'نوا در روز 24 مبلغ 2,500 از مشتریان وصول کرد. درآمد این کار پیش‌تر، در روز 12 که خدمت انجام شد، ثبت شده بود. ثبت درست، بدهکار کردن وجه نقد و بستانکار کردن حساب‌های دریافتنی است؛ بستانکار کردن دوباره درآمد خدمات، یک درآمد را دو بار ثبت می‌کند.',
            en: 'On Day 24 Nova collected 2,500 from customers. That revenue was already recorded on Day 12, when the work was done. The correct entry is Dr Cash / Cr Accounts receivable; crediting Service revenue again would count the same revenue twice.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت درست روز 24', en: 'The correct Day 24 entry' },
          entries: [
            {
              date: { fa: 'روز 24', en: 'Day 24' },
              lines: [
                { account: { fa: 'وجه نقد', en: 'Cash' }, debit: 2500 },
                { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, credit: 2500 },
              ],
              memo: {
                fa: 'یک دارایی افزایش و دارایی دیگر کاهش می‌یابد؛ درآمدی در کار نیست',
                en: 'One asset up, another down, no revenue involved',
              },
            },
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'کدام حساب‌ها؟', en: 'Which accounts?' },
              text: {
                fa: 'همه حساب‌هایی را که معامله بر آن‌ها اثر می‌گذارد نام ببرید.',
                en: 'Name every account the transaction affects.',
              },
            },
            {
              title: { fa: 'چه نوعی؟', en: 'What type?' },
              text: {
                fa: 'نوع هر حساب را مشخص کنید: دارایی، بدهی، حقوق مالکانه، درآمد، هزینه یا برداشت.',
                en: 'Classify each one: asset, liability, equity, revenue, expense or drawings.',
              },
            },
            {
              title: { fa: 'افزایش یا کاهش؟', en: 'Up or down?' },
              text: {
                fa: 'مشخص کنید مانده هر حساب افزایش می‌یابد یا کاهش.',
                en: 'Decide whether each balance goes up or down.',
              },
            },
            {
              title: { fa: 'DEALER را به کار ببرید', en: 'Apply DEALER' },
              text: {
                fa: 'هر افزایش یا کاهش را به بدهکار یا بستانکار تبدیل کنید.',
                en: 'Translate each increase or decrease into a debit or a credit.',
              },
            },
            {
              title: { fa: 'کنترل کنید', en: 'Check' },
              text: {
                fa: 'جمع بدهکار باید با جمع بستانکار برابر باشد.',
                en: 'Total debits must equal total credits.',
              },
            },
          ],
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
              fa: 'در حسابداری دوطرفه، هر معامله دست‌کم یک بدهکار و یک بستانکار دارد و جمع آن‌ها همیشه برابر است.',
              en: 'In double-entry accounting, every transaction has at least one debit and one credit, and their totals are always equal.',
            },
            {
              fa: 'بدهکار و بستانکار فقط نام دو ستون حساب‌اند و بار ارزشی ندارند.',
              en: 'Debit and credit are simply the left and right sides of an account, they carry no sense of good or bad.',
            },
            {
              fa: 'DEA (برداشت، هزینه‌ها، دارایی‌ها) با بدهکار و LER (بدهی‌ها، حقوق مالکانه، درآمدها) با بستانکار افزایش می‌یابند.',
              en: 'DEA (Drawings, Expenses, Assets) increase with debits; LER (Liabilities, Equity, Revenue) increase with credits.',
            },
            {
              fa: 'در پایان ماه، وجه نقد نوا 46,300 مانده بدهکار، حساب‌های دریافتنی 1,500 مانده بدهکار و حساب‌های پرداختنی 1,500 مانده بستانکار دارد.',
              en: 'At month end, Nova’s Cash has a 46,300 debit balance, Accounts receivable a 1,500 debit balance and Accounts payable a 1,500 credit balance.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در درس بعد', en: 'Coming up next' },
          text: {
            fa: 'معاملات را ابتدا در **دفتر روزنامه** ثبت می‌کنیم و سپس آن‌ها را به **دفتر کل** انتقال می‌دهیم.',
            en: 'We will record transactions in the **journal** first and then post them to the **ledger**.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'حسابداری دوطرفه', en: 'Double-entry accounting' },
              def: {
                fa: 'نظامی که در آن هر معامله با بدهکار و بستانکار برابر در دست‌کم دو حساب ثبت می‌شود.',
                en: 'The system in which every transaction is recorded with equal debits and credits in at least two accounts.',
              },
            },
            {
              term: { fa: 'بدهکار', en: 'Debit (Dr)' },
              def: {
                fa: 'ثبت مبلغ در ستون بدهکار حساب؛ دارایی، هزینه و برداشت را افزایش و بدهی، حقوق مالکانه و درآمد را کاهش می‌دهد.',
                en: 'An entry on the left side of an account; it increases assets, expenses and drawings and decreases liabilities, equity and revenue.',
              },
            },
            {
              term: { fa: 'بستانکار', en: 'Credit (Cr)' },
              def: {
                fa: 'ثبت مبلغ در ستون بستانکار حساب؛ بدهی، حقوق مالکانه و درآمد را افزایش و دارایی، هزینه و برداشت را کاهش می‌دهد.',
                en: 'An entry on the right side of an account; it increases liabilities, equity and revenue and decreases assets, expenses and drawings.',
              },
            },
            {
              term: { fa: 'مانده عادی', en: 'Normal balance' },
              def: {
                fa: 'ستونی که حساب با آن افزایش می‌یابد و مانده حساب معمولاً در آن قرار دارد.',
                en: 'The side on which an account increases and where its balance usually sits.',
              },
            },
            {
              term: { fa: 'حساب T شکل', en: 'T-account' },
              def: {
                fa: 'نمایش ساده یک حساب با عنوان در بالا، ستون بدهکار در یک سو و ستون بستانکار در سوی دیگر.',
                en: 'A simple picture of an account: the title on top, debits on the left and credits on the right.',
              },
            },
            {
              term: { fa: 'DEALER', en: 'DEALER' },
              def: {
                fa: 'رمز به‌خاطرسپاری قواعد: برداشت، هزینه‌ها و دارایی‌ها با بدهکار؛ بدهی‌ها، حقوق مالکانه و درآمدها با بستانکار افزایش می‌یابند.',
                en: 'A memory aid: Drawings, Expenses and Assets increase with debits; Liabilities, Equity and Revenue increase with credits.',
              },
            },
            {
              term: { fa: 'مانده بدهکار', en: 'Debit balance' },
              def: {
                fa: 'وضعیتی که جمع ستون بدهکار یک حساب از جمع ستون بستانکار آن بیشتر است.',
                en: 'The result when an account’s total debits exceed its total credits.',
              },
            },
            {
              term: { fa: 'مانده بستانکار', en: 'Credit balance' },
              def: {
                fa: 'وضعیتی که جمع ستون بستانکار یک حساب از جمع ستون بدهکار آن بیشتر است.',
                en: 'The result when an account’s total credits exceed its total debits.',
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
        fa: 'کدام حساب با بستانکار افزایش می‌یابد؟',
        en: 'Which account increases with a credit?',
      },
      options: [
        { fa: 'تجهیزات', en: 'Equipment' },
        { fa: 'درآمد خدمات', en: 'Service revenue' },
        { fa: 'هزینه اجاره', en: 'Rent expense' },
        { fa: 'برداشت', en: 'Drawings' },
      ],
      answer: 1,
      explain: {
        fa: 'درآمد از گروه LER است و با بستانکار افزایش می‌یابد. تجهیزات (دارایی)، هزینه اجاره و برداشت از گروه DEA هستند و با بدهکار افزایش می‌یابند.',
        en: 'Revenue belongs to LER and increases with a credit. Equipment (an asset), Rent expense and Drawings belong to DEA and increase with a debit.',
      },
    },
    {
      q: {
        fa: 'مانده عادی حساب‌های دریافتنی کدام است؟',
        en: 'What is the normal balance of Accounts receivable?',
      },
      options: [
        { fa: 'بستانکار', en: 'Credit' },
        { fa: 'مانده عادی ندارد', en: 'It has no normal balance' },
        { fa: 'بستگی دارد مشتری پرداخت کند یا نه', en: 'It depends on whether customers pay' },
        { fa: 'بدهکار', en: 'Debit' },
      ],
      answer: 3,
      explain: {
        fa: 'حساب‌های دریافتنی دارایی است و دارایی‌ها با بدهکار افزایش می‌یابند؛ بنابراین مانده عادی آن بدهکار است. در نوا مانده این حساب 1,500 بدهکار است.',
        en: 'Accounts receivable is an asset, and assets increase with debits, so its normal balance is a debit. Nova’s balance is a 1,500 debit.',
      },
    },
    {
      q: {
        fa: 'نوا 2,500 اجاره را نقد پرداخت می‌کند. ثبت درست کدام است؟',
        en: 'Nova pays rent of 2,500 in cash. What is the correct entry?',
      },
      options: [
        {
          fa: 'بدهکار هزینه اجاره 2,500 / بستانکار وجه نقد 2,500',
          en: 'Dr Rent expense 2,500 / Cr Cash 2,500',
        },
        {
          fa: 'بدهکار وجه نقد 2,500 / بستانکار هزینه اجاره 2,500',
          en: 'Dr Cash 2,500 / Cr Rent expense 2,500',
        },
        {
          fa: 'بدهکار هزینه اجاره 2,500 / بستانکار حساب‌های پرداختنی 2,500',
          en: 'Dr Rent expense 2,500 / Cr Accounts payable 2,500',
        },
        { fa: 'بدهکار سرمایه 2,500 / بستانکار وجه نقد 2,500', en: 'Dr Capital 2,500 / Cr Cash 2,500' },
      ],
      answer: 0,
      explain: {
        fa: 'هزینه افزایش می‌یابد، پس بدهکار می‌شود؛ وجه نقد (دارایی) کاهش می‌یابد، پس بستانکار می‌شود. چون پرداخت نقدی بوده، حساب‌های پرداختنی درگیر نیست و اجاره هزینه است، نه کاهش مستقیم سرمایه.',
        en: 'The expense increases, so it is debited; Cash (an asset) decreases, so it is credited. The rent was paid in cash, so Accounts payable is not involved, and rent is an expense rather than a direct reduction of capital.',
      },
    },
    {
      q: {
        fa: 'جمع ستون بدهکار حساب وجه نقد 75,500 و جمع ستون بستانکار آن 29,200 است. مانده حساب چیست؟',
        en: 'The Cash account has total debits of 75,500 and total credits of 29,200. What is its balance?',
      },
      options: [
        { fa: '104,700 بدهکار', en: '104,700 debit' },
        { fa: '46,300 بستانکار', en: '46,300 credit' },
        { fa: '46,300 بدهکار', en: '46,300 debit' },
        { fa: '29,200 بستانکار', en: '29,200 credit' },
      ],
      answer: 2,
      explain: {
        fa: '75,500 − 29,200 = 46,300. چون ستون بدهکار بزرگ‌تر است، مانده بدهکار است؛ همان مانده عادی یک دارایی.',
        en: '75,500 − 29,200 = 46,300. The debit side is larger, so the balance is a debit, the normal balance for an asset.',
      },
    },
    {
      q: {
        fa: 'در رمز DEALER، کدام گروه با بدهکار افزایش می‌یابد؟',
        en: 'In the DEALER mnemonic, which group increases with a debit?',
      },
      options: [
        { fa: 'بدهی‌ها، حقوق مالکانه، درآمدها', en: 'Liabilities, Equity, Revenue' },
        { fa: 'دارایی‌ها، بدهی‌ها، حقوق مالکانه', en: 'Assets, Liabilities, Equity' },
        { fa: 'درآمدها، هزینه‌ها، برداشت', en: 'Revenue, Expenses, Drawings' },
        { fa: 'برداشت، هزینه‌ها، دارایی‌ها', en: 'Drawings, Expenses, Assets' },
      ],
      answer: 3,
      explain: {
        fa: 'DEA یعنی برداشت، هزینه‌ها و دارایی‌ها که با بدهکار افزایش می‌یابند. LER، یعنی بدهی‌ها، حقوق مالکانه و درآمدها، با بستانکار افزایش می‌یابند.',
        en: 'DEA stands for Drawings, Expenses and Assets, which increase with debits. LER, Liabilities, Equity and Revenue, increase with credits.',
      },
    },
    {
      q: {
        fa: 'وقتی بانک می‌گوید حساب شما را «بستانکار» کرده است، سپرده شما از دید بانک چیست؟',
        en: 'When your bank says it has “credited” your account, what is your deposit from the bank’s point of view?',
      },
      options: [
        { fa: 'دارایی بانک', en: 'An asset of the bank' },
        { fa: 'بدهی بانک', en: 'A liability of the bank' },
        { fa: 'درآمد بانک', en: 'Revenue of the bank' },
        { fa: 'هزینه بانک', en: 'An expense of the bank' },
      ],
      answer: 1,
      explain: {
        fa: 'بانک باید سپرده را به شما برگرداند، پس سپرده برای بانک بدهی است و بدهی با بستانکار افزایش می‌یابد. در دفاتر خود شما، همین سپرده وجه نقد را بدهکار می‌کند.',
        en: 'The bank must repay your deposit, so to the bank it is a liability, and liabilities increase with credits. In your own books, the same deposit is a debit to Cash.',
      },
    },
  ],
}
