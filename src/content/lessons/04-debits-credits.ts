import type { Lesson } from '../types'

const E = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'debits-credits',
  number: 4,
  level: 'beginner',
  minutes: 40,
  icon: 'ArrowLeftRight',
  tone: 'liability',
  title: { fa: 'بدهکار، بستانکار و حسابداری دوطرفه', en: 'Debits, Credits and Double-Entry' },
  summary: {
    fa: 'سازوکار اصلی همه دفاتر حسابداری را بیاموزید: حسابداری دوطرفه، قواعد بدهکار و بستانکار برای هر نوع حساب، مانده عادی و غیرعادی، ثبت مرکب و مانده‌گیری حساب T شکل؛ همراه با تمرین‌های فراوان تا تشخیص بدهکار و بستانکار برایتان عادی شود.',
    en: 'Learn the mechanics behind every set of books: double-entry, the debit and credit rules for each account type, normal and abnormal balances, compound entries and balancing a T-account, with plenty of drills until debits and credits become second nature.',
  },
  objectives: [
    {
      fa: 'نظام حسابداری دوطرفه را توضیح دهید و بگویید چرا جمع بدهکار همیشه با جمع بستانکار برابر است.',
      en: 'Explain the double-entry system and why total debits always equal total credits.',
    },
    {
      fa: 'قواعد بدهکار و بستانکار را برای هر پنج نوع حساب و حساب برداشت به کار ببرید و بدهکار و بستانکار هر معامله را تشخیص دهید.',
      en: 'Apply the debit and credit rules to all five account types and to drawings, and decide the debit and credit for any transaction.',
    },
    {
      fa: 'مانده عادی هر حساب را با رمز DEALER تشخیص دهید و مانده‌های غیرعادی را بیابید و توضیح دهید.',
      en: 'Identify the normal balance of any account with the DEALER mnemonic, and spot and explain abnormal balances.',
    },
    {
      fa: 'معاملات را در حساب‌های T شکل ثبت کنید، مانده آن‌ها را به دست آورید و حساب را به روش سنتی مانده‌گیری کنید.',
      en: 'Record transactions in T-accounts, work out their balances and balance an account the traditional way.',
    },
    {
      fa: 'ثبت مرکب بنویسید و از رایج‌ترین اشتباهات تازه‌کارها در بدهکار و بستانکار دوری کنید.',
      en: 'Write compound entries and avoid the most common beginner mistakes with debits and credits.',
    },
  ],
  sections: [
    {
      id: 'double-entry',
      title: { fa: 'حسابداری دوطرفه: هر معامله دو رو دارد', en: 'Double-Entry: Two Sides to Every Story' },
      blocks: [
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'چرا اهمیت دارد؟', en: 'Why it matters' },
          text: {
            fa: 'فرض کنید حسابدار یک فروشگاه فقط «پول آمد، پول رفت» را یادداشت کند. روزی که فروشگاه 10,000 کالا نسیه می‌خرد، هیچ پولی جابه‌جا نمی‌شود و در یادداشت‌ها هیچ اثری نمی‌ماند؛ در حالی که فروشگاه هم کالای بیشتری دارد و هم 10,000 بدهی تازه. ماه بعد که فروشنده طلبش را می‌خواهد، کسی آن را به یاد ندارد. حسابداری دوطرفه هر دو روی معامله را ثبت می‌کند تا هیچ اثری گم نشود.',
            en: 'Imagine a shop’s bookkeeper who only notes “money in, money out”. On the day the shop buys 10,000 of goods on credit, no money moves and nothing is written down, yet the shop now has more stock and a new 10,000 debt. Next month, when the supplier asks to be paid, nobody remembers it. Double-entry records both sides of every transaction so that no effect is ever lost.',
          },
        },
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
                { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 50000 },
                { account: { fa: 'سرمایه سارا', en: 'Capital (Sara)' }, credit: 50000 },
              ],
              memo: { fa: 'سرمایه‌گذاری نقدی سارا در کسب‌وکار', en: 'Sara invests cash in the business' },
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
              en: 'It captures **both sides** of a transaction: what was received and what was given up or owed in return.',
            },
            { fa: 'پس از هر ثبت، معادله حسابداری را در توازن نگه می‌دارد.', en: 'It keeps the accounting equation in balance after every entry.' },
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
            fa: 'واژه‌های **بدهکار** و **بستانکار** در حسابداری بار ارزشی ندارند؛ آن‌ها فقط نام **دو ستون** هر حساب‌اند. در منابع انگلیسی به آن‌ها Debit (کوتاه‌شده Dr) و Credit (کوتاه‌شده Cr) می‌گویند. ثبت مبلغی در ستون بدهکار را «بدهکار کردن» حساب و ثبت آن در ستون بستانکار را «بستانکار کردن» حساب می‌نامیم. اینکه این کار مانده حساب را افزایش می‌دهد یا کاهش، به نوع حساب بستگی دارد.',
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
          title: { fa: 'بدهکار به معنای «بد» و بستانکار به معنای «خوب» نیست', en: 'Debit is not “bad”, credit is not “good”' },
          text: {
            fa: 'تازه‌کارها اغلب گمان می‌کنند بستانکار خبر خوب و بدهکار خبر بد است؛ چون وقتی پولی به حسابشان واریز می‌شود، بانک می‌گوید حساب آن‌ها را «بستانکار» کرده است. اما بانک از دید **دفاتر خودش** سخن می‌گوید: سپرده شما برای بانک بدهی است و با بستانکار افزایش می‌یابد. در **دفاتر شما**، همان واریز، موجودی نقد را بدهکار می‌کند. بدهکار می‌تواند یک دارایی یا هزینه را افزایش دهد و بستانکار می‌تواند یک بدهی یا درآمد را؛ هیچ‌کدام ذاتاً خوب یا بد نیست.',
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
              text: { fa: 'نام و کد حساب بالای خط افقی T نوشته می‌شود؛ مانند 1010 موجودی نقد.', en: 'The account name and code sit on top of the T, for example 1010 Cash.' },
            },
            {
              title: { fa: 'ستون بدهکار', en: 'Debit side (left)' },
              text: {
                fa: 'مبالغی که به بدهکار حساب ثبت می‌شوند. در حساب موجودی نقد، همه دریافت‌ها در این ستون قرار می‌گیرند.',
                en: 'Amounts debited to the account. In the Cash account, every receipt goes here.',
              },
            },
            {
              title: { fa: 'ستون بستانکار', en: 'Credit side (right)' },
              text: {
                fa: 'مبالغی که به بستانکار حساب ثبت می‌شوند. در حساب موجودی نقد، همه پرداخت‌ها در این ستون قرار می‌گیرند.',
                en: 'Amounts credited to the account. In the Cash account, every payment goes here.',
              },
            },
            {
              title: { fa: 'جمع هر ستون', en: 'Totals' },
              text: { fa: 'مبالغ هر ستون را جداگانه جمع بزنید.', en: 'Add up each side separately. These subtotals are often called footings.' },
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
            en: 'The rules are not arbitrary; they fall straight out of the accounting equation. Assets sit on the left of the equation, so they increase on the left (debit) side. Liabilities and equity sit on the right, so they increase on the right (credit) side. Revenue increases equity, so it follows equity’s rule; expenses and drawings reduce equity, so they follow the opposite rule.',
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
            [{ fa: 'برداشت', en: 'Drawings' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }],
            [{ fa: 'هزینه‌ها', en: 'Expenses' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }],
            [{ fa: 'دارایی‌ها', en: 'Assets' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }],
            [{ fa: 'بدهی‌ها', en: 'Liabilities' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }],
            [{ fa: 'حقوق مالکانه (سرمایه)', en: 'Equity (capital)' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }],
            [{ fa: 'درآمدها', en: 'Revenue' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }],
          ],
        },
        {
          type: 'formula',
          text: { fa: 'DEA | LER', en: 'DEA | LER' },
          note: {
            fa: 'DEA یعنی برداشت (Drawings)، هزینه‌ها (Expenses) و دارایی‌ها (Assets) که با بدهکار افزایش می‌یابند. LER یعنی بدهی‌ها (Liabilities)، حقوق مالکانه (Equity) و درآمدها (Revenue) که با بستانکار افزایش می‌یابند.',
            en: 'DEA (Drawings, Expenses, Assets) increase with a debit. LER (Liabilities, Equity, Revenue) increase with a credit.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**مانده عادی** هر حساب همان ستونی است که حساب با آن افزایش می‌یابد؛ بنابراین مانده آن معمولاً در همان ستون قرار دارد. حساب‌های DEA معمولاً مانده بدهکار و حساب‌های LER معمولاً مانده بستانکار دارند.',
            en: 'An account’s **normal balance** is the side on which it increases, and therefore the side where its balance usually sits. DEA accounts normally carry debit balances; LER accounts normally carry credit balances.',
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
          title: { fa: 'به‌کارگیری قواعد در چهار معامله نوا', en: 'Applying the rules to four of Nova’s transactions' },
          entries: [
            {
              date: { fa: 'روز 4', en: 'Day 4' },
              lines: [
                { account: { fa: 'ملزومات', en: 'Supplies' }, debit: 3000 },
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 3000 },
              ],
              memo: { fa: 'افزایش دارایی: بدهکار؛ افزایش بدهی: بستانکار', en: 'Asset up → debit; liability up → credit' },
            },
            {
              date: { fa: 'روز 8', en: 'Day 8' },
              lines: [
                { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 8000 },
                { account: { fa: 'درآمد خدمات', en: 'Service revenue' }, credit: 8000 },
              ],
              memo: { fa: 'افزایش دارایی: بدهکار؛ افزایش درآمد: بستانکار', en: 'Asset up → debit; revenue up → credit' },
            },
            {
              date: { fa: 'روز 15', en: 'Day 15' },
              lines: [
                { account: { fa: 'هزینه اجاره', en: 'Rent expense' }, debit: 2500 },
                { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 2500 },
              ],
              memo: { fa: 'افزایش هزینه: بدهکار؛ کاهش دارایی: بستانکار', en: 'Expense up → debit; asset down → credit' },
            },
            {
              date: { fa: 'روز 30', en: 'Day 30' },
              lines: [
                { account: { fa: 'برداشت سارا', en: 'Drawings (Sara)' }, debit: 1000 },
                { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 1000 },
              ],
              memo: { fa: 'افزایش برداشت: بدهکار؛ کاهش دارایی: بستانکار', en: 'Drawings up → debit; asset down → credit' },
            },
          ],
        },
      ],
    },
    {
      id: 'drills',
      title: { fa: 'تمرین ذهنی: بدهکار یا بستانکار؟', en: 'Drills: Debit or Credit?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'قواعد بدهکار و بستانکار با تکرار در ذهن می‌نشیند، نه با حفظ کردن. برای هر معامله، این پنج گام را به ترتیب طی کنید تا جایی که دیگر به آن‌ها فکر نکنید:',
            en: 'Debit and credit rules stick through repetition, not memorization. For every transaction, walk through these five steps in order until you no longer have to think about them:',
          },
        },
        {
          type: 'steps',
          items: [
            { title: { fa: 'کدام حساب‌ها؟', en: 'Which accounts?' }, text: { fa: 'همه حساب‌هایی را که معامله بر آن‌ها اثر می‌گذارد نام ببرید.', en: 'Name every account the transaction affects.' } },
            {
              title: { fa: 'چه نوعی؟', en: 'What type?' },
              text: { fa: 'نوع هر حساب را مشخص کنید: دارایی، بدهی، حقوق مالکانه، درآمد، هزینه یا برداشت.', en: 'Classify each one: asset, liability, equity, revenue, expense or drawings.' },
            },
            { title: { fa: 'افزایش یا کاهش؟', en: 'Up or down?' }, text: { fa: 'مشخص کنید مانده هر حساب افزایش می‌یابد یا کاهش.', en: 'Decide whether each balance goes up or down.' } },
            { title: { fa: 'DEALER را به کار ببرید', en: 'Apply DEALER' }, text: { fa: 'هر افزایش یا کاهش را به بدهکار یا بستانکار تبدیل کنید.', en: 'Translate each increase or decrease into a debit or a credit.' } },
            { title: { fa: 'کنترل کنید', en: 'Check' }, text: { fa: 'جمع بدهکار باید با جمع بستانکار برابر باشد.', en: 'Total debits must equal total credits.' } },
          ],
        },
        { type: 'h', text: { fa: 'یک نمونه با صدای بلند: روز 2 نوا', en: 'Thinking aloud: Nova’s Day 2' } },
        {
          type: 'p',
          text: {
            fa: 'نوا 15,000 از بانک وام می‌گیرد. **کدام حساب‌ها؟** موجودی نقد و وام پرداختنی. **چه نوعی؟** اولی دارایی و دومی بدهی. **افزایش یا کاهش؟** هر دو 15,000 افزایش می‌یابند. **DEALER:** دارایی با بدهکار افزایش می‌یابد و بدهی با بستانکار. پس: موجودی نقد 15,000 بدهکار و وام پرداختنی 15,000 بستانکار. **کنترل:** 15,000 = 15,000.',
            en: 'Nova borrows 15,000 from the bank. **Which accounts?** Cash and Loan payable. **What type?** An asset and a liability. **Up or down?** Both go up by 15,000. **DEALER:** assets increase with a debit, liabilities with a credit. So: debit Cash 15,000, credit Loan payable 15,000. **Check:** 15,000 = 15,000.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'چهارده معامله رایج و ثبت آن‌ها', en: 'Fourteen everyday transactions and how they are recorded' },
          head: [
            { fa: 'معامله', en: 'Transaction' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
            { fa: 'چرا؟', en: 'Why?' },
          ],
          rows: [
            [
              { fa: 'مالک وجه نقد سرمایه‌گذاری می‌کند', en: 'The owner invests cash' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'سرمایه', en: 'Capital' },
              { fa: 'دارایی و سرمایه هر دو افزایش می‌یابند', en: 'Asset and capital both increase' },
            ],
            [
              { fa: 'دریافت وام بانکی', en: 'A bank loan is received' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'وام پرداختنی', en: 'Loan payable' },
              { fa: 'دارایی و بدهی هر دو افزایش می‌یابند', en: 'Asset and liability both increase' },
            ],
            [
              { fa: 'خرید نقدی تجهیزات', en: 'Equipment bought for cash' },
              { fa: 'تجهیزات', en: 'Equipment' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'یک دارایی افزایش و دارایی دیگر کاهش می‌یابد', en: 'One asset up, another down' },
            ],
            [
              { fa: 'خرید نسیه ملزومات', en: 'Supplies bought on account' },
              { fa: 'ملزومات', en: 'Supplies' },
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              { fa: 'دارایی و بدهی هر دو افزایش می‌یابند', en: 'Asset and liability both increase' },
            ],
            [
              { fa: 'پرداخت بدهی به تأمین‌کننده', en: 'A supplier is paid' },
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'بدهی و دارایی هر دو کاهش می‌یابند', en: 'Liability and asset both decrease' },
            ],
            [
              { fa: 'ارائه خدمت و دریافت نقد', en: 'Services performed for cash' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'درآمد خدمات', en: 'Service revenue' },
              { fa: 'دارایی و درآمد هر دو افزایش می‌یابند', en: 'Asset and revenue both increase' },
            ],
            [
              { fa: 'ارائه خدمت به‌صورت نسیه', en: 'Services performed on account' },
              { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
              { fa: 'درآمد خدمات', en: 'Service revenue' },
              { fa: 'طلب و درآمد هر دو افزایش می‌یابند', en: 'Receivable and revenue both increase' },
            ],
            [
              { fa: 'وصول طلب از مشتری', en: 'A customer pays what they owe' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
              { fa: 'جابه‌جایی میان دو دارایی؛ درآمدی در کار نیست', en: 'Swap between two assets; no revenue involved' },
            ],
            [
              { fa: 'دریافت پیش‌پرداخت از مشتری برای کار آینده', en: 'A customer pays in advance for future work' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
              { fa: 'پول آمده، اما کار هنوز بدهکار است؛ پس بدهی است', en: 'Cash is in, but the work is still owed, so it is a liability' },
            ],
            [
              { fa: 'پرداخت اجاره همین ماه', en: 'This month’s rent is paid' },
              { fa: 'هزینه اجاره', en: 'Rent expense' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'هزینه افزایش و دارایی کاهش می‌یابد', en: 'Expense up, asset down' },
            ],
            [
              { fa: 'پرداخت بیمه 6 ماه آینده از پیش', en: 'Six months’ insurance is paid in advance' },
              { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'پوشش بیمه آینده دارایی است، نه هزینه', en: 'Future insurance cover is an asset, not yet an expense' },
            ],
            [
              { fa: 'دریافت قبض آب و برق که ماه بعد پرداخت می‌شود', en: 'A utility bill arrives, to be paid next month' },
              { fa: 'هزینه آب و برق', en: 'Utilities expense' },
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              { fa: 'هزینه رخ داده و بدهی ایجاد شده است', en: 'The expense has happened and a debt exists' },
            ],
            [
              { fa: 'برداشت وجه نقد توسط مالک', en: 'The owner withdraws cash' },
              { fa: 'برداشت', en: 'Drawings' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'برداشت افزایش و دارایی کاهش می‌یابد', en: 'Drawings up, asset down' },
            ],
            [
              { fa: 'بازپرداخت بخشی از اصل وام', en: 'Part of the loan principal is repaid' },
              { fa: 'وام پرداختنی', en: 'Loan payable' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'بدهی و دارایی هر دو کاهش می‌یابند', en: 'Liability and asset both decrease' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'از موجودی نقد شروع کنید', en: 'Start with Cash' },
          text: {
            fa: 'ساده‌ترین لنگر، موجودی نقد است: **پول وارد شد یعنی موجودی نقد بدهکار؛ پول خارج شد یعنی موجودی نقد بستانکار.** وقتی سمت موجودی نقد را پیدا کردید، طرف دیگر خودبه‌خود در ستون مقابل می‌نشیند و فقط باید حساب درستش را انتخاب کنید.',
            en: 'The easiest anchor is Cash: **money in means debit Cash; money out means credit Cash.** Once you know Cash’s side, the other account goes on the opposite side, and all you have to do is pick the right account.',
          },
        },
        { type: 'h', text: { fa: 'ثبت مرکب', en: 'Compound entries' } },
        {
          type: 'p',
          text: {
            fa: 'برخی معاملات بیش از دو حساب را درگیر می‌کنند. به چنین ثبتی **ثبت مرکب** می‌گویند. قاعده تغییر نمی‌کند: جمع بدهکارها باید با جمع بستانکارها برابر باشد. مثلاً کسب‌وکاری دستگاهی به مبلغ 10,000 می‌خرد، 4,000 را نقد می‌پردازد و بقیه را نسیه می‌گذارد:',
            en: 'Some transactions involve more than two accounts. Such an entry is called a **compound entry**. The rule does not change: total debits must equal total credits. For example, a business buys a machine for 10,000, pays 4,000 in cash and owes the rest:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'یک ثبت مرکب: یک بدهکار، دو بستانکار', en: 'A compound entry: one debit, two credits' },
          entries: [
            {
              lines: [
                { account: { fa: 'تجهیزات', en: 'Equipment' }, debit: 10000 },
                { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 4000 },
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 6000 },
              ],
              memo: {
                fa: 'خرید دستگاه: 4,000 نقد و 6,000 نسیه؛ جمع بدهکار 10,000 = جمع بستانکار 10,000',
                en: 'Machine bought: 4,000 in cash and 6,000 on account; debits 10,000 = credits 10,000',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'normal-balances',
      title: { fa: 'مانده عادی و مانده غیرعادی', en: 'Normal and Abnormal Balances' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بیشتر وقت‌ها مانده هر حساب در ستون عادی‌اش قرار دارد. مانده‌ای که در ستون «نادرست» باشد، **مانده غیرعادی** (در اصطلاح رایج، «مانده خلاف ماهیت») نام دارد و زنگ خطر است: یا توضیح خاصی دارد، یا نشانه خطای ثبت است. جدول زیر نشان می‌دهد مانده غیرعادی در هر حساب معمولاً چه معنایی دارد.',
            en: 'Most of the time an account’s balance sits on its normal side. A balance on the “wrong” side is an **abnormal balance** and a red flag: either there is a specific explanation or something was recorded incorrectly. The table shows what an abnormal balance usually means for each account.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'مانده عادی', en: 'Normal balance' },
            { fa: 'اگر مانده خلاف باشد یعنی...', en: 'An abnormal balance means…' },
          ],
          rows: [
            [
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'دارایی', en: 'Asset' },
              { fa: 'بدهکار', en: 'Debit' },
              {
                fa: 'اضافه‌برداشت از بانک یا خطای ثبت؛ صندوق هرگز نمی‌تواند مانده بستانکار داشته باشد',
                en: 'A bank overdraft or a recording error; cash on hand can never have a credit balance',
              },
            ],
            [
              { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
              { fa: 'دارایی', en: 'Asset' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'مشتری بیش از بدهی‌اش پرداخته یا پیش‌پرداخت داده است، یا خطای ثبت', en: 'A customer has overpaid or paid in advance, or a recording error' },
            ],
            [
              { fa: 'ملزومات', en: 'Supplies' },
              { fa: 'دارایی', en: 'Asset' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'تقریباً همیشه خطا؛ نمی‌توان بیش از آنچه خریده شده مصرف کرد', en: 'Almost always an error; you cannot use more than you bought' },
            ],
            [
              { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' },
              { fa: 'کاهنده دارایی', en: 'Contra asset' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'خطا', en: 'An error' },
            ],
            [
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              { fa: 'بدهی', en: 'Liability' },
              { fa: 'بستانکار', en: 'Credit' },
              {
                fa: 'به تأمین‌کننده بیش از بدهی پرداخت شده یا به او پیش‌پرداخت داده شده است، یا خطای ثبت',
                en: 'A supplier has been overpaid or paid in advance, or a recording error',
              },
            ],
            [
              { fa: 'وام پرداختنی', en: 'Loan payable' },
              { fa: 'بدهی', en: 'Liability' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'خطا؛ نمی‌توان بیش از اصل وام بازپرداخت کرد', en: 'An error; you cannot repay more than the principal' },
            ],
            [
              { fa: 'سرمایه', en: 'Capital' },
              { fa: 'حقوق مالکانه', en: 'Equity' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'زیان‌ها و برداشت‌ها از سرمایه بیشتر شده است (کسری سرمایه)', en: 'Losses and drawings have exceeded the capital (a deficit)' },
            ],
            [
              { fa: 'برداشت', en: 'Drawings' },
              { fa: 'کاهنده حقوق مالکانه', en: 'Contra equity' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'خطا', en: 'An error' },
            ],
            [
              { fa: 'درآمدها', en: 'Revenue' },
              { fa: 'درآمد', en: 'Revenue' },
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'خطا؛ مثلاً ثبت معکوس یا ثبت برگشت از فروش در حساب فروش', en: 'An error, such as a reversed entry or returns booked to the sales account' },
            ],
            [
              { fa: 'هزینه‌ها', en: 'Expenses' },
              { fa: 'هزینه', en: 'Expense' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'خطا؛ مثلاً ثبت معکوس', en: 'An error, such as a reversed entry' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: مانده‌های خلاف ماهیت', en: 'In practice: reviewing abnormal balances' },
          text: {
            fa: 'در نرم‌افزارهای حسابداری ایرانی، گزارش تراز مانده هر حساب را در ستون بدهکار یا بستانکار نشان می‌دهد و برخی نرم‌افزارها گزارش جداگانه‌ای از مانده‌های خلاف ماهیت دارند. حسابداران پیش از بستن ماه این مانده‌ها را مرور می‌کنند: هر کدام یا توضیح روشنی دارد یا خطایی است که باید با سند اصلاحی درست شود. اگر مانده واقعی است، مثلاً پیش‌پرداخت به یک تأمین‌کننده، بهتر است در صورت‌های مالی در طبقه درست (پیش‌پرداخت‌ها) نشان داده شود.',
            en: 'In Iranian accounting software, the trial balance report shows each account’s balance in the debit or the credit column, and some packages have a separate report of abnormal balances. Accountants review these before closing the month: each one either has a clear explanation or is an error to be fixed with a correcting voucher. If the balance is genuine, such as an advance paid to a supplier, it is better presented in the right category (prepayments) in the financial statements.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'مانده غیرعادی را نادیده نگیرید', en: 'Never ignore an abnormal balance' },
          text: {
            fa: 'یک مانده غیرعادی ممکن است توضیح موجهی داشته باشد، اما تا بررسی نشده، آن را خطا فرض کنید. یادتان باشد ثبت معکوس (بستانکار به‌جای بدهکار) خطایی به اندازه **دو برابر** مبلغ می‌سازد: اگر 500 هزینه را به‌اشتباه بستانکار کنید، مانده حساب 1,000 با رقم درست فاصله می‌گیرد.',
            en: 'An abnormal balance may have a good explanation, but until you have checked, assume it is an error. Remember that a reversed entry (credit instead of debit) creates an error of **twice** the amount: credit a 500 expense by mistake and the balance ends up 1,000 away from the right figure.',
          },
        },
      ],
    },
    {
      id: 'nova-t-accounts',
      title: { fa: 'حساب‌های T شکل نوا و مانده‌گیری', en: 'Nova’s T-Accounts and Balancing' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'اکنون معاملات ماه نخست نوا را به سه حساب آن منتقل می‌کنیم. همه مبالغ از همان دوازده معامله‌ای است که در درس معادله حسابداری تحلیل کردید؛ با این تفاوت که اکنون هر مبلغ در ستون بدهکار یا بستانکار می‌نشیند.',
            en: 'Let’s post Nova’s first month to three of its accounts. Every amount comes from the twelve transactions you analyzed in the lesson on the accounting equation; only now each one lands on the debit or the credit side.',
          },
        },
        {
          type: 'tAccounts',
          title: { fa: 'موجودی نقد، حساب‌های دریافتنی و حساب‌های پرداختنی، ماه نخست', en: 'Cash, Accounts receivable and Accounts payable, first month' },
          accounts: [
            { name: { fa: 'موجودی نقد', en: 'Cash' }, debits: [50000, 15000, 8000, 2500], credits: [20000, 1200, 2500, 3000, 1500, 1000] },
            { name: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, debits: [4000], credits: [2500] },
            { name: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debits: [1500], credits: [3000] },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'منشأ مبالغ حساب موجودی نقد', en: 'Where each Cash amount comes from' },
          head: [
            { fa: 'روز', en: 'Day' },
            { fa: 'معامله', en: 'Transaction' },
            { fa: 'ستون', en: 'Side' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [3],
          rows: [
            [{ fa: 'روز 1', en: 'Day 1' }, { fa: 'سرمایه‌گذاری سارا', en: 'Sara’s investment' }, { fa: 'بدهکار', en: 'Debit' }, 50000],
            [{ fa: 'روز 2', en: 'Day 2' }, { fa: 'دریافت وام بانکی', en: 'Bank loan received' }, { fa: 'بدهکار', en: 'Debit' }, 15000],
            [{ fa: 'روز 3', en: 'Day 3' }, { fa: 'خرید تجهیزات', en: 'Equipment purchased' }, { fa: 'بستانکار', en: 'Credit' }, 20000],
            [{ fa: 'روز 5', en: 'Day 5' }, { fa: 'پرداخت حق بیمه', en: 'Insurance premium paid' }, { fa: 'بستانکار', en: 'Credit' }, 1200],
            [{ fa: 'روز 8', en: 'Day 8' }, { fa: 'درآمد نقدی', en: 'Cash revenue' }, { fa: 'بدهکار', en: 'Debit' }, 8000],
            [{ fa: 'روز 15', en: 'Day 15' }, { fa: 'پرداخت اجاره', en: 'Rent paid' }, { fa: 'بستانکار', en: 'Credit' }, 2500],
            [{ fa: 'روز 20', en: 'Day 20' }, { fa: 'پرداخت حقوق و دستمزد', en: 'Salaries paid' }, { fa: 'بستانکار', en: 'Credit' }, 3000],
            [{ fa: 'روز 24', en: 'Day 24' }, { fa: 'وصول از مشتریان', en: 'Collected from customers' }, { fa: 'بدهکار', en: 'Debit' }, 2500],
            [{ fa: 'روز 27', en: 'Day 27' }, { fa: 'پرداخت به تأمین‌کننده', en: 'Paid the supplier' }, { fa: 'بستانکار', en: 'Credit' }, 1500],
            [{ fa: 'روز 30', en: 'Day 30' }, { fa: 'برداشت سارا', en: 'Sara’s drawings' }, { fa: 'بستانکار', en: 'Credit' }, 1000],
          ],
        },
        {
          type: 'formula',
          text: { fa: 'مانده موجودی نقد = 75,500 بدهکار − 29,200 بستانکار = 46,300 مانده بدهکار', en: 'Cash balance = 75,500 Dr − 29,200 Cr = 46,300 Dr' },
          note: {
            fa: 'جمع ستون بدهکار بزرگ‌تر است؛ پس مانده در ستون بدهکار قرار می‌گیرد، یعنی همان مانده عادی یک دارایی.',
            en: 'The debit side is larger, so the balance sits on the debit side: the normal balance for an asset.',
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
        { type: 'h', text: { fa: 'مانده‌گیری به روش سنتی', en: 'Balancing an account the traditional way' } },
        {
          type: 'steps',
          items: [
            { title: { fa: 'هر ستون را جمع بزنید', en: 'Total each side' }, text: { fa: 'در حساب موجودی نقد نوا: بدهکار 75,500 و بستانکار 29,200.', en: 'For Nova’s Cash: debits 75,500 and credits 29,200.' } },
            {
              title: { fa: 'مانده را در ستون کوچک‌تر بنویسید', en: 'Write the balance on the smaller side' },
              text: {
                fa: 'اختلاف (46,300) را در ستون بستانکار، با شرح «مانده نقل به دوره بعد»، بنویسید تا جمع دو ستون برابر شود.',
                en: 'Enter the difference (46,300) on the credit side as “balance carried down” (c/d), so that both sides total the same.',
              },
            },
            { title: { fa: 'جمع‌های برابر را ببندید', en: 'Rule off the equal totals' }, text: { fa: 'زیر هر دو ستون، 75,500 را بنویسید.', en: 'Write 75,500 under both sides.' } },
            {
              title: { fa: 'مانده را به دوره بعد ببرید', en: 'Bring the balance down' },
              text: {
                fa: 'در آغاز ماه دوم، 46,300 را در ستون بدهکار، با شرح «مانده از دوره قبل»، بنویسید.',
                en: 'At the start of month two, enter 46,300 on the debit side as “balance brought down” (b/d).',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'حساب موجودی نقد نوا پس از مانده‌گیری', en: 'Nova’s Cash account after balancing' },
          head: [
            { fa: 'بدهکار: شرح', en: 'Debit: description' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'بستانکار: شرح', en: 'Credit: description' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1, 3],
          rows: [
            [{ fa: 'روز 1: سرمایه سارا', en: 'Day 1: Capital' }, 50000, { fa: 'روز 3: تجهیزات', en: 'Day 3: Equipment' }, 20000],
            [{ fa: 'روز 2: وام پرداختنی', en: 'Day 2: Loan payable' }, 15000, { fa: 'روز 5: پیش‌پرداخت بیمه', en: 'Day 5: Prepaid insurance' }, 1200],
            [{ fa: 'روز 8: درآمد خدمات', en: 'Day 8: Service revenue' }, 8000, { fa: 'روز 15: هزینه اجاره', en: 'Day 15: Rent expense' }, 2500],
            [{ fa: 'روز 24: حساب‌های دریافتنی', en: 'Day 24: Accounts receivable' }, 2500, { fa: 'روز 20: هزینه حقوق و دستمزد', en: 'Day 20: Salaries expense' }, 3000],
            [E, E, { fa: 'روز 27: حساب‌های پرداختنی', en: 'Day 27: Accounts payable' }, 1500],
            [E, E, { fa: 'روز 30: برداشت سارا', en: 'Day 30: Drawings' }, 1000],
            [E, E, { fa: '**مانده نقل به دوره بعد**', en: '**Balance carried down**' }, 46300],
            [{ fa: '**جمع**', en: '**Total**' }, 75500, { fa: '**جمع**', en: '**Total**' }, 75500],
            [{ fa: '**مانده از دوره قبل (آغاز ماه دوم)**', en: '**Balance brought down (start of month two)**' }, 46300, E, E],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: کارت حساب در نرم‌افزار', en: 'In practice: the account card in software' },
          text: {
            fa: 'در نرم‌افزار، مانده هر حساب پس از هر سند خودکار حساب می‌شود و نیازی به بستن دستی حساب‌ها نیست؛ اما منطق همین است. گزارش «دفتر معین» یا «کارت حساب» در نرم‌افزارهای ایرانی، برای هر حساب ستون‌های بدهکار، بستانکار و مانده را ردیف‌به‌ردیف و همراه با شماره سند نشان می‌دهد. حسابداران این گزارش را برای پیگیری هر مشتری، تأمین‌کننده یا حساب بانکی بارها در روز باز می‌کنند.',
            en: 'In software, each account’s balance is updated automatically after every voucher, so nobody balances accounts by hand; but the logic is the same. The subsidiary ledger or “account card” report in Iranian software shows, line by line, the debit, credit and running balance of an account with the voucher number. Accountants open it many times a day to follow up a customer, a supplier or a bank account.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'نگاهی به جلو', en: 'A look ahead' },
          text: {
            fa: 'اگر همین کار را برای هر دوازده حساب نوا انجام دهید، جمع مانده‌های بدهکار 78,500 و جمع مانده‌های بستانکار نیز 78,500 می‌شود؛ همان چیزی که در درس تراز آزمایشی تأیید خواهید کرد.',
            en: 'Do this for all twelve of Nova’s accounts and the debit balances total 78,500, exactly matching the credit balances of 78,500. That is what you will confirm in the lesson on the trial balance.',
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
              { fa: 'بدهکار یعنی کاهش و بستانکار یعنی افزایش.', en: 'Debit means decrease and credit means increase.' },
              {
                fa: 'ثبت از دیدگاه بانک: «بانک حسابم را بستانکار کرده، پس من هم موجودی نقد را بستانکار می‌کنم».',
                en: 'Recording from the bank’s viewpoint: “the bank credited me, so I credit Cash”.',
              },
              { fa: 'ثبت برداشت به‌عنوان هزینه.', en: 'Recording drawings as an expense.' },
              { fa: 'ثبت درآمد فقط هنگام دریافت وجه نقد.', en: 'Crediting revenue only when cash arrives.' },
              { fa: 'ثبت پیش‌دریافت مشتری به‌عنوان درآمد.', en: 'Recording a customer advance as revenue.' },
              { fa: 'ثبت فقط یک طرف معامله.', en: 'Recording only one side of a transaction.' },
            ],
          },
          right: {
            title: { fa: 'برداشت درست', en: 'Correct thinking' },
            items: [
              { fa: 'اینکه بدهکار افزایش است یا کاهش، به نوع حساب بستگی دارد (DEALER).', en: 'Whether a debit increases or decreases depends on the account type (DEALER).' },
              {
                fa: 'همیشه از دیدگاه واحد تجاری خودتان ثبت کنید: ورود پول یعنی بدهکار شدن موجودی نقد.',
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
                fa: 'تا کار انجام نشده، پول دریافتی بدهی است: پیش‌دریافت درآمد بستانکار می‌شود.',
                en: 'Until the work is done, cash received is a liability: credit Unearned revenue.',
              },
              { fa: 'هر ثبت به بدهکار و بستانکار برابر نیاز دارد؛ پیش از ادامه کار، جمع‌ها را کنترل کنید.', en: 'Every entry needs equal debits and credits; check the totals before moving on.' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'وصول طلب، درآمد نیست', en: 'Collecting a receivable is not revenue' },
          text: {
            fa: 'نوا در روز 24 مبلغ 2,500 از مشتریان وصول کرد. درآمد این کار پیش‌تر، در روز 12 که خدمت انجام شد، ثبت شده بود. ثبت درست، بدهکار کردن موجودی نقد و بستانکار کردن حساب‌های دریافتنی است؛ بستانکار کردن دوباره درآمد خدمات، یک درآمد را دو بار ثبت می‌کند.',
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
                { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 2500 },
                { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, credit: 2500 },
              ],
              memo: { fa: 'یک دارایی افزایش و دارایی دیگر کاهش می‌یابد؛ درآمدی در کار نیست', en: 'One asset up, another down; no revenue involved' },
            },
          ],
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
            fa: 'این تمرین‌ها از ساده به دشوار مرتب شده‌اند. بدهکار و بستانکار را فقط با تمرین یاد می‌گیرید؛ پیش از باز کردن پاسخ، هر تمرین را کامل روی کاغذ حل کنید.',
            en: 'These exercises run from easy to hard. Debits and credits are learned only by practice, so solve each exercise fully on paper before opening the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کدام ستون افزایش می‌دهد؟', en: 'Which side increases it?' },
          difficulty: 'easy',
          problem: {
            fa: 'برای هر حساب زیر بنویسید: نوع حساب، ستونی که آن را افزایش می‌دهد، ستونی که آن را کاهش می‌دهد و مانده عادی آن.',
            en: 'For each account below, write its type, the side that increases it, the side that decreases it and its normal balance.',
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
              [5, { fa: 'برداشت', en: 'Drawings' }],
              [6, { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' }],
              [7, { fa: 'ساختمان', en: 'Building' }],
              [8, { fa: 'سرمایه', en: 'Capital' }],
              [9, { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' }],
              [10, { fa: 'هزینه بهره', en: 'Interest expense' }],
            ],
          },
          hint: { fa: 'ابتدا بپرسید حساب در گروه DEA است یا LER؛ حساب‌های کاهنده را جدا بسنجید.', en: 'First ask whether the account is in DEA or LER; treat contra accounts separately.' },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: '#' },
                { fa: 'نوع', en: 'Type' },
                { fa: 'افزایش', en: 'Increase' },
                { fa: 'کاهش', en: 'Decrease' },
                { fa: 'مانده عادی', en: 'Normal balance' },
              ],
              rows: [
                [1, { fa: 'دارایی', en: 'Asset' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }],
                [2, { fa: 'بدهی', en: 'Liability' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }],
                [3, { fa: 'درآمد', en: 'Revenue' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }],
                [4, { fa: 'هزینه', en: 'Expense' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }],
                [5, { fa: 'برداشت', en: 'Drawings' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }],
                [6, { fa: 'بدهی', en: 'Liability' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }],
                [7, { fa: 'دارایی', en: 'Asset' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }],
                [8, { fa: 'حقوق مالکانه', en: 'Equity' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }],
                [9, { fa: 'کاهنده دارایی', en: 'Contra asset' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }],
                [10, { fa: 'هزینه', en: 'Expense' }, { fa: 'بدهکار', en: 'Debit' }, { fa: 'بستانکار', en: 'Credit' }, { fa: 'بدهکار', en: 'Debit' }],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'ردیف 9 تنها استثنای ظاهری است: استهلاک انباشته کنار دارایی‌ها می‌آید، اما چون از دارایی کم می‌کند، قاعده‌اش وارونه است. ردیف 6 هم با نام «درآمد» شما را فریب ندهد؛ پیش‌دریافت درآمد بدهی است.',
                en: 'Row 9 is the only apparent exception: accumulated depreciation sits among the assets, but because it reduces an asset, its rule is reversed. And do not let the word “revenue” in row 6 fool you: unearned revenue is a liability.',
              },
            },
          ],
          answer: { fa: 'مانده عادی بدهکار: 1، 4، 5، 7، 10؛ مانده عادی بستانکار: 2، 3، 6، 8، 9.', en: 'Normal debit balance: 1, 4, 5, 7, 10; normal credit balance: 2, 3, 6, 8, 9.' },
        },
        {
          type: 'exercise',
          title: { fa: 'ده معامله، ده ثبت', en: 'Ten transactions, ten entries' },
          difficulty: 'medium',
          problem: {
            fa: 'نگار «آتلیه عکاسی نگار» را راه انداخته است. برای هر معامله، حساب بدهکار و حساب بستانکار و مبلغ را بنویسید.',
            en: 'Negar has opened Negar Photo Studio. For each transaction, write the account debited, the account credited and the amount.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: '#' },
              { fa: 'معامله', en: 'Transaction' },
            ],
            rows: [
              [1, { fa: 'نگار 40,000 وجه نقد در آتلیه سرمایه‌گذاری می‌کند.', en: 'Negar invests 40,000 cash in the studio.' }],
              [2, { fa: 'یک دوربین به مبلغ 18,000 نقد خریداری می‌شود.', en: 'A camera is bought for 18,000 cash.' }],
              [3, { fa: 'کاغذ و جوهر چاپ عکس (ملزومات) به مبلغ 2,400 نسیه خریداری می‌شود.', en: 'Photo paper and ink (supplies) are bought on account for 2,400.' }],
              [4, { fa: 'یک زوج 3,000 پیش‌پرداخت برای عکاسی مراسم ماه آینده می‌دهند.', en: 'A couple pays a 3,000 advance for next month’s wedding shoot.' }],
              [5, { fa: 'عکاسی یک همایش انجام می‌شود و 5,500 نقد دریافت می‌شود.', en: 'A conference is photographed and 5,500 is received in cash.' }],
              [6, { fa: 'عکاسی محصولات یک فروشگاه به‌صورت نسیه به مبلغ 4,200 انجام می‌شود.', en: 'A product shoot is done for a shop on account for 4,200.' }],
              [7, { fa: 'اجاره آتلیه، 2,800، پرداخت می‌شود.', en: 'The studio rent of 2,800 is paid.' }],
              [8, { fa: '1,200 به فروشنده ملزومات پرداخت می‌شود.', en: '1,200 is paid to the supplies vendor.' }],
              [9, { fa: '2,000 از فروشگاه وصول می‌شود.', en: '2,000 is collected from the shop.' }],
              [10, { fa: 'نگار 1,500 برای مصارف شخصی برمی‌دارد.', en: 'Negar withdraws 1,500 for personal use.' }],
            ],
          },
          hint: {
            fa: 'به معامله‌های 4 و 9 دقت کنید: در هیچ‌کدام درآمد این ماه ثبت نمی‌شود.',
            en: 'Watch transactions 4 and 9: neither records revenue for this month.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: 'ثبت‌های آتلیه عکاسی نگار', en: 'Negar Photo Studio: the entries' },
              entries: [
                {
                  date: { fa: 'معامله 1', en: 'Transaction 1' },
                  lines: [
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 40000 },
                    { account: { fa: 'سرمایه نگار', en: 'Capital (Negar)' }, credit: 40000 },
                  ],
                },
                {
                  date: { fa: 'معامله 2', en: 'Transaction 2' },
                  lines: [
                    { account: { fa: 'تجهیزات', en: 'Equipment' }, debit: 18000 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 18000 },
                  ],
                },
                {
                  date: { fa: 'معامله 3', en: 'Transaction 3' },
                  lines: [
                    { account: { fa: 'ملزومات', en: 'Supplies' }, debit: 2400 },
                    { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 2400 },
                  ],
                },
                {
                  date: { fa: 'معامله 4', en: 'Transaction 4' },
                  lines: [
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 3000 },
                    { account: { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' }, credit: 3000 },
                  ],
                  memo: { fa: 'کار هنوز انجام نشده؛ بدهی است، نه درآمد', en: 'The work is not done yet: a liability, not revenue' },
                },
                {
                  date: { fa: 'معامله 5', en: 'Transaction 5' },
                  lines: [
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 5500 },
                    { account: { fa: 'درآمد خدمات', en: 'Service revenue' }, credit: 5500 },
                  ],
                },
                {
                  date: { fa: 'معامله 6', en: 'Transaction 6' },
                  lines: [
                    { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, debit: 4200 },
                    { account: { fa: 'درآمد خدمات', en: 'Service revenue' }, credit: 4200 },
                  ],
                },
                {
                  date: { fa: 'معامله 7', en: 'Transaction 7' },
                  lines: [
                    { account: { fa: 'هزینه اجاره', en: 'Rent expense' }, debit: 2800 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 2800 },
                  ],
                },
                {
                  date: { fa: 'معامله 8', en: 'Transaction 8' },
                  lines: [
                    { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debit: 1200 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 1200 },
                  ],
                },
                {
                  date: { fa: 'معامله 9', en: 'Transaction 9' },
                  lines: [
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 2000 },
                    { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, credit: 2000 },
                  ],
                  memo: { fa: 'وصول طلب؛ درآمد در معامله 6 ثبت شده بود', en: 'Collection; the revenue was recorded in transaction 6' },
                },
                {
                  date: { fa: 'معامله 10', en: 'Transaction 10' },
                  lines: [
                    { account: { fa: 'برداشت نگار', en: 'Drawings (Negar)' }, debit: 1500 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 1500 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'درآمد این ماه فقط 5,500 + 4,200 = 9,700 است. 3,000 پیش‌دریافت ماه آینده، وقتی عکاسی انجام شد، از بدهی به درآمد منتقل می‌شود و 2,000 وصولی هم فقط طلب را به نقد تبدیل کرده است.',
                en: 'This month’s revenue is only 5,500 + 4,200 = 9,700. The 3,000 advance moves from liability to revenue next month, when the shoot takes place, and the 2,000 collection only turned a receivable into cash.',
              },
            },
          ],
          answer: {
            fa: 'جمع بدهکارها = جمع بستانکارها = 80,600؛ پیش‌دریافت (4) بدهی است و وصول طلب (9) درآمد نیست.',
            en: 'Total debits = total credits = 80,600; the advance (4) is a liability and the collection (9) is not revenue.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مانده‌های پایانی را حساب کنید', en: 'Compute the ending balances' },
          difficulty: 'medium',
          problem: {
            fa: 'سینا «خدمات نظافتی پاکان» را راه انداخته است. مبالغ ثبت‌شده در حساب‌های آن در ماه نخست در جدول آمده است. (الف) مانده هر حساب و ستون آن را به دست آورید. (ب) نشان دهید جمع مانده‌های بدهکار با جمع مانده‌های بستانکار برابر است.',
            en: 'Sina has started Pakan Cleaning Services. The amounts posted to its accounts in the first month are listed below. (a) Find each account’s balance and its side. (b) Show that the debit balances total the same as the credit balances.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'مبالغ بدهکار', en: 'Debits' },
              { fa: 'مبالغ بستانکار', en: 'Credits' },
            ],
            rows: [
              [{ fa: 'موجودی نقد', en: 'Cash' }, { fa: '25,000؛ 6,000؛ 3,500', en: '25,000; 6,000; 3,500' }, { fa: '9,000؛ 2,200؛ 1,800؛ 1,300', en: '9,000; 2,200; 1,800; 1,300' }],
              [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, { fa: '7,000؛ 2,500', en: '7,000; 2,500' }, { fa: '3,500', en: '3,500' }],
              [{ fa: 'ملزومات', en: 'Supplies' }, { fa: '4,000؛ 1,500', en: '4,000; 1,500' }, { fa: 'ندارد', en: 'none' }],
              [{ fa: 'تجهیزات', en: 'Equipment' }, { fa: '9,000', en: '9,000' }, { fa: 'ندارد', en: 'none' }],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, { fa: '1,800', en: '1,800' }, { fa: '4,000؛ 1,500', en: '4,000; 1,500' }],
              [{ fa: 'سرمایه سینا', en: 'Capital (Sina)' }, { fa: 'ندارد', en: 'none' }, { fa: '25,000', en: '25,000' }],
              [{ fa: 'برداشت سینا', en: 'Drawings (Sina)' }, { fa: '1,300', en: '1,300' }, { fa: 'ندارد', en: 'none' }],
              [{ fa: 'درآمد خدمات', en: 'Service revenue' }, { fa: 'ندارد', en: 'none' }, { fa: '6,000؛ 7,000؛ 2,500', en: '6,000; 7,000; 2,500' }],
              [{ fa: 'هزینه دستمزد', en: 'Wages expense' }, { fa: '2,200', en: '2,200' }, { fa: 'ندارد', en: 'none' }],
            ],
          },
          solution: [
            {
              type: 'tAccounts',
              title: { fa: 'حساب‌های T شکل خدمات نظافتی پاکان', en: 'Pakan Cleaning Services: T-accounts' },
              accounts: [
                { name: { fa: 'موجودی نقد', en: 'Cash' }, debits: [25000, 6000, 3500], credits: [9000, 2200, 1800, 1300] },
                { name: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, debits: [7000, 2500], credits: [3500] },
                { name: { fa: 'ملزومات', en: 'Supplies' }, debits: [4000, 1500], credits: [] },
                { name: { fa: 'تجهیزات', en: 'Equipment' }, debits: [9000], credits: [] },
                { name: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debits: [1800], credits: [4000, 1500] },
                { name: { fa: 'سرمایه سینا', en: 'Capital (Sina)' }, debits: [], credits: [25000] },
                { name: { fa: 'برداشت سینا', en: 'Drawings (Sina)' }, debits: [1300], credits: [] },
                { name: { fa: 'درآمد خدمات', en: 'Service revenue' }, debits: [], credits: [6000, 7000, 2500] },
                { name: { fa: 'هزینه دستمزد', en: 'Wages expense' }, debits: [2200], credits: [] },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'فهرست مانده‌ها', en: 'List of balances' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'مانده بدهکار', en: 'Debit balance' },
                { fa: 'مانده بستانکار', en: 'Credit balance' },
              ],
              numericCols: [1, 2],
              rows: [
                [{ fa: 'موجودی نقد (34,500 − 14,300)', en: 'Cash (34,500 − 14,300)' }, 20200, E],
                [{ fa: 'حساب‌های دریافتنی (9,500 − 3,500)', en: 'Accounts receivable (9,500 − 3,500)' }, 6000, E],
                [{ fa: 'ملزومات', en: 'Supplies' }, 5500, E],
                [{ fa: 'تجهیزات', en: 'Equipment' }, 9000, E],
                [{ fa: 'حساب‌های پرداختنی (5,500 − 1,800)', en: 'Accounts payable (5,500 − 1,800)' }, E, 3700],
                [{ fa: 'سرمایه سینا', en: 'Capital (Sina)' }, E, 25000],
                [{ fa: 'برداشت سینا', en: 'Drawings (Sina)' }, 1300, E],
                [{ fa: 'درآمد خدمات', en: 'Service revenue' }, E, 15500],
                [{ fa: 'هزینه دستمزد', en: 'Wages expense' }, 2200, E],
                [{ fa: '**جمع**', en: '**Total**' }, 44200, 44200],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'همه مانده‌ها در ستون عادی خود قرار دارند و دو جمع برابرند. چنین فهرستی از مانده‌ها همان تراز آزمایشی است که در درس تراز آزمایشی با جزئیات می‌سازید.',
                en: 'Every balance sits on its normal side and the two totals agree. A list of balances like this is a trial balance, which you will build in detail in the lesson on the trial balance.',
              },
            },
          ],
          answer: {
            fa: 'موجودی نقد 20,200 بدهکار؛ دریافتنی‌ها 6,000 بدهکار؛ ملزومات 5,500 بدهکار؛ پرداختنی‌ها 3,700 بستانکار؛ درآمد 15,500 بستانکار؛ جمع مانده‌های بدهکار و بستانکار هر دو 44,200.',
            en: 'Cash 20,200 Dr; receivables 6,000 Dr; supplies 5,500 Dr; payables 3,700 Cr; revenue 15,500 Cr; debit and credit balances both total 44,200.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مانده‌های غیرعادی را پیدا کنید', en: 'Spot the abnormal balances' },
          difficulty: 'medium',
          problem: {
            fa: 'یک کارآموز فهرست مانده‌های «فروشگاه کفش گام» را تهیه کرده است. کدام مانده‌ها غیرعادی‌اند؟ برای هر کدام، محتمل‌ترین دلیل را بنویسید.',
            en: 'A trainee has listed the balances of Gam Shoe Store. Which balances are abnormal? Give the most likely reason for each.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'مانده', en: 'Balance' },
              { fa: 'ستون', en: 'Side' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'صندوق (موجودی نقد)', en: 'Cash on hand' }, 1200, { fa: 'بستانکار', en: 'Credit' }],
              [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 3000, { fa: 'بستانکار', en: 'Credit' }],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 2500, { fa: 'بدهکار', en: 'Debit' }],
              [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 4000, { fa: 'بدهکار', en: 'Debit' }],
              [{ fa: 'فروش', en: 'Sales' }, 900, { fa: 'بدهکار', en: 'Debit' }],
              [{ fa: 'استهلاک انباشته', en: 'Accumulated depreciation' }, 5000, { fa: 'بستانکار', en: 'Credit' }],
              [{ fa: 'برداشت', en: 'Drawings' }, 2000, { fa: 'بدهکار', en: 'Debit' }],
              [{ fa: 'سرمایه', en: 'Capital' }, 30000, { fa: 'بستانکار', en: 'Credit' }],
              [{ fa: 'ملزومات', en: 'Supplies' }, 600, { fa: 'بستانکار', en: 'Credit' }],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'وضعیت', en: 'Status' },
                { fa: 'محتمل‌ترین دلیل', en: 'Most likely reason' },
              ],
              rows: [
                [
                  { fa: 'صندوق', en: 'Cash on hand' },
                  { fa: 'غیرعادی', en: 'Abnormal' },
                  { fa: 'صندوق نمی‌تواند کمتر از صفر پول داشته باشد؛ حتماً خطای ثبت است، مثلاً پرداختی که از بانک انجام شده در صندوق ثبت شده است.', en: 'A till cannot hold less than nothing; it must be an error, such as a bank payment posted to the till.' },
                ],
                [
                  { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
                  { fa: 'غیرعادی', en: 'Abnormal' },
                  { fa: 'مشتری بیش از بدهی‌اش پرداخته یا پیش‌پرداخت داده، یا یک وصولی دو بار ثبت شده است.', en: 'A customer has overpaid or paid in advance, or a collection was recorded twice.' },
                ],
                [
                  { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
                  { fa: 'غیرعادی', en: 'Abnormal' },
                  { fa: 'به تأمین‌کننده بیش از بدهی یا پیشاپیش پرداخت شده، یا یک پرداخت دو بار ثبت شده است.', en: 'A supplier has been overpaid or paid in advance, or a payment was recorded twice.' },
                ],
                [{ fa: 'هزینه اجاره', en: 'Rent expense' }, { fa: 'عادی', en: 'Normal' }, E],
                [
                  { fa: 'فروش', en: 'Sales' },
                  { fa: 'غیرعادی', en: 'Abnormal' },
                  { fa: 'احتمالاً ثبت معکوس، یا ثبت برگشت از فروش در خود حساب فروش.', en: 'Probably a reversed entry, or sales returns booked to the sales account itself.' },
                ],
                [{ fa: 'استهلاک انباشته', en: 'Accumulated depreciation' }, { fa: 'عادی (کاهنده دارایی)', en: 'Normal (contra asset)' }, E],
                [{ fa: 'برداشت', en: 'Drawings' }, { fa: 'عادی', en: 'Normal' }, E],
                [{ fa: 'سرمایه', en: 'Capital' }, { fa: 'عادی', en: 'Normal' }, E],
                [
                  { fa: 'ملزومات', en: 'Supplies' },
                  { fa: 'غیرعادی', en: 'Abnormal' },
                  { fa: 'نمی‌توان بیش از خرید مصرف کرد؛ مصرف بیش از واقع ثبت شده است.', en: 'You cannot use more than you bought; usage has been overstated.' },
                ],
              ],
            },
          ],
          answer: {
            fa: 'پنج مانده غیرعادی است: صندوق، حساب‌های دریافتنی، حساب‌های پرداختنی، فروش و ملزومات.',
            en: 'Five balances are abnormal: cash on hand, accounts receivable, accounts payable, sales and supplies.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مبلغ گمشده در حساب T شکل', en: 'The missing figure in a T-account' },
          difficulty: 'hard',
          problem: {
            fa: 'از دفاتر «عطاری سبز» فقط اطلاعات زیر مانده است. (الف) موجودی نقد: مانده اول ماه 8,000 بدهکار، جمع دریافت‌های ماه 31,500 و مانده پایان ماه 6,200 بدهکار است. جمع پرداخت‌های ماه چقدر بوده است؟ (ب) حساب‌های پرداختنی: مانده اول ماه 5,000 بستانکار، خریدهای نسیه ماه 12,000 و مانده پایان ماه 4,400 بستانکار است. در این ماه چقدر به تأمین‌کنندگان پرداخت شده است؟ (پ) حساب‌های دریافتنی: مانده اول ماه 7,000 بدهکار، فروش نسیه ماه 20,000 و وصولی‌ها 18,500 است. مانده پایان ماه چقدر و در کدام ستون است؟ (ت) ثبت خلاصه پرداخت‌های بخش ب را بنویسید.',
            en: 'Only the following information survives from Sabz Herbal Shop’s books. (a) Cash: opening balance 8,000 Dr, total receipts for the month 31,500, closing balance 6,200 Dr. What were total payments? (b) Accounts payable: opening balance 5,000 Cr, credit purchases 12,000, closing balance 4,400 Cr. How much was paid to suppliers? (c) Accounts receivable: opening balance 7,000 Dr, credit sales 20,000, collections 18,500. What is the closing balance, and on which side? (d) Write the summary entry for the payments in part (b).',
          },
          hint: {
            fa: 'برای هر حساب بنویسید: مانده اول + افزایش‌ها − کاهش‌ها = مانده پایان؛ سپس مجهول را پیدا کنید. یادتان باشد در حساب بدهی، افزایش در ستون بستانکار است.',
            en: 'For each account write: opening balance + increases − decreases = closing balance, then solve for the unknown. Remember that a liability increases on the credit side.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'الف) موجودی نقد', en: '(a) Cash' },
                  text: {
                    fa: '8,000 + 31,500 − پرداخت‌ها = 6,200؛ پس پرداخت‌ها = 39,500 − 6,200 = 33,300.',
                    en: '8,000 + 31,500 − payments = 6,200, so payments = 39,500 − 6,200 = 33,300.',
                  },
                },
                {
                  title: { fa: 'ب) حساب‌های پرداختنی', en: '(b) Accounts payable' },
                  text: {
                    fa: '5,000 + 12,000 − پرداخت‌ها = 4,400؛ پس پرداخت‌ها = 17,000 − 4,400 = 12,600.',
                    en: '5,000 + 12,000 − payments = 4,400, so payments = 17,000 − 4,400 = 12,600.',
                  },
                },
                {
                  title: { fa: 'پ) حساب‌های دریافتنی', en: '(c) Accounts receivable' },
                  text: {
                    fa: '7,000 + 20,000 − 18,500 = 8,500؛ چون جمع بدهکار بیشتر است، مانده 8,500 بدهکار است.',
                    en: '7,000 + 20,000 − 18,500 = 8,500; the debit side is larger, so the balance is 8,500 Dr.',
                  },
                },
              ],
            },
            {
              type: 'tAccounts',
              title: { fa: 'سه حساب کامل‌شده (نخستین رقم ستون مانده عادی، مانده اول ماه است)', en: 'The three completed accounts (the first amount on the normal side is the opening balance)' },
              accounts: [
                { name: { fa: 'موجودی نقد', en: 'Cash' }, debits: [8000, 31500], credits: [33300] },
                { name: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debits: [12600], credits: [5000, 12000] },
                { name: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, debits: [7000, 20000], credits: [18500] },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ت) ثبت خلاصه پرداخت به تأمین‌کنندگان', en: '(d) Summary entry for payments to suppliers' },
              entries: [
                {
                  lines: [
                    { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debit: 12600 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 12600 },
                  ],
                  memo: { fa: 'پرداخت‌های ماه به تأمین‌کنندگان', en: 'Payments to suppliers during the month' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'رابطه «مانده اول + افزایش‌ها − کاهش‌ها = مانده پایان» در عمل بسیار به کار می‌آید: وقتی بخشی از اطلاعات گم شده یا می‌خواهید رقمی را کنترل کنید، مجهول را پیدا می‌کند. حسابرسان هم از همین منطق برای سنجش معقول بودن ارقام استفاده می‌کنند.',
                en: 'The relationship “opening + increases − decreases = closing” is very useful in practice: when information is missing, or you want to check a figure, it finds the unknown. Auditors use the same logic to test whether figures are reasonable.',
              },
            },
          ],
          answer: {
            fa: 'پرداخت‌های نقدی 33,300؛ پرداخت به تأمین‌کنندگان 12,600؛ مانده دریافتنی‌ها 8,500 بدهکار.',
            en: 'Cash payments 33,300; paid to suppliers 12,600; receivables balance 8,500 Dr.',
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
              fa: 'در حسابداری دوطرفه، هر معامله دست‌کم یک بدهکار و یک بستانکار دارد و جمع آن‌ها همیشه برابر است؛ ثبت مرکب هم از همین قاعده پیروی می‌کند.',
              en: 'In double-entry accounting, every transaction has at least one debit and one credit, and their totals are always equal; compound entries follow the same rule.',
            },
            {
              fa: 'بدهکار و بستانکار فقط نام دو ستون حساب‌اند و بار ارزشی ندارند؛ همیشه از دیدگاه واحد تجاری خودتان ثبت کنید.',
              en: 'Debit and credit are simply the two sides of an account and carry no sense of good or bad; always record from your own business’s viewpoint.',
            },
            {
              fa: 'DEA (برداشت، هزینه‌ها، دارایی‌ها) با بدهکار و LER (بدهی‌ها، حقوق مالکانه، درآمدها) با بستانکار افزایش می‌یابند؛ حساب‌های کاهنده قاعده را وارونه می‌کنند.',
              en: 'DEA (Drawings, Expenses, Assets) increase with debits; LER (Liabilities, Equity, Revenue) increase with credits; contra accounts reverse the rule.',
            },
            {
              fa: 'مانده عادی هر حساب در ستون افزایش آن است؛ مانده غیرعادی یا توضیح روشنی دارد یا نشانه خطاست و باید بررسی شود.',
              en: 'An account’s normal balance is on its increase side; an abnormal balance either has a clear explanation or signals an error, and must be investigated.',
            },
            {
              fa: 'در مانده‌گیری سنتی، مانده در ستون کوچک‌تر نوشته می‌شود تا جمع‌ها برابر شوند و در آغاز دوره بعد در ستون مقابل می‌آید.',
              en: 'When balancing an account the traditional way, the balance is entered on the smaller side to make the totals agree, then brought down on the opposite side for the next period.',
            },
            {
              fa: 'در پایان ماه، موجودی نقد نوا 46,300 مانده بدهکار، حساب‌های دریافتنی 1,500 مانده بدهکار و حساب‌های پرداختنی 1,500 مانده بستانکار دارد.',
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
              def: { fa: 'ستونی که حساب با آن افزایش می‌یابد و مانده حساب معمولاً در آن قرار دارد.', en: 'The side on which an account increases and where its balance usually sits.' },
            },
            {
              term: { fa: 'مانده غیرعادی (خلاف ماهیت)', en: 'Abnormal balance' },
              def: { fa: 'مانده‌ای در ستون مخالف مانده عادی که یا توضیح خاصی دارد یا نشانه خطاست.', en: 'A balance on the opposite side to the normal one; it either has a specific explanation or signals an error.' },
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
              term: { fa: 'ثبت مرکب', en: 'Compound entry' },
              def: { fa: 'ثبتی که بیش از دو حساب را درگیر می‌کند و جمع بدهکار و بستانکار آن برابر است.', en: 'An entry involving more than two accounts, with equal total debits and credits.' },
            },
            {
              term: { fa: 'مانده بدهکار', en: 'Debit balance' },
              def: { fa: 'وضعیتی که جمع ستون بدهکار یک حساب از جمع ستون بستانکار آن بیشتر است.', en: 'The result when an account’s total debits exceed its total credits.' },
            },
            {
              term: { fa: 'مانده بستانکار', en: 'Credit balance' },
              def: { fa: 'وضعیتی که جمع ستون بستانکار یک حساب از جمع ستون بدهکار آن بیشتر است.', en: 'The result when an account’s total credits exceed its total debits.' },
            },
            {
              term: { fa: 'مانده نقل به دوره بعد / مانده از دوره قبل', en: 'Balance carried down / brought down' },
              def: {
                fa: 'مانده‌ای که در مانده‌گیری سنتی در ستون کوچک‌تر نوشته می‌شود تا جمع‌ها برابر شوند، و همان مبلغ که در آغاز دوره بعد در ستون مقابل می‌آید.',
                en: 'The balance entered on the smaller side when an account is balanced, so the totals agree, and the same amount entered on the opposite side at the start of the next period.',
              },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'کدام حساب با بستانکار افزایش می‌یابد؟', en: 'Which account increases with a credit?' },
      options: [
        { fa: 'تجهیزات', en: 'Equipment' },
        { fa: 'درآمد خدمات', en: 'Service revenue' },
        { fa: 'هزینه اجاره', en: 'Rent expense' },
        { fa: 'برداشت', en: 'Drawings' },
      ],
      answer: 1,
      explain: {
        fa: 'درآمد از گروه LER است و با بستانکار افزایش می‌یابد. تجهیزات (دارایی)، هزینه اجاره و برداشت از گروه DEA هستند و با بدهکار افزایش می‌یابند؛ برداشت با اینکه حقوق مالکانه را کم می‌کند، خودش با بدهکار زیاد می‌شود.',
        en: 'Revenue belongs to LER and increases with a credit. Equipment (an asset), Rent expense and Drawings belong to DEA and increase with a debit; drawings reduce equity, but the Drawings account itself grows with debits.',
      },
    },
    {
      q: { fa: 'مانده عادی حساب‌های دریافتنی کدام است؟', en: 'What is the normal balance of Accounts receivable?' },
      options: [
        { fa: 'بستانکار', en: 'Credit' },
        { fa: 'مانده عادی ندارد', en: 'It has no normal balance' },
        { fa: 'بستگی دارد مشتری پرداخت کند یا نه', en: 'It depends on whether customers pay' },
        { fa: 'بدهکار', en: 'Debit' },
      ],
      answer: 3,
      explain: {
        fa: 'حساب‌های دریافتنی دارایی است و دارایی‌ها با بدهکار افزایش می‌یابند؛ بنابراین مانده عادی آن بدهکار است. در نوا مانده این حساب 1,500 بدهکار است. پرداخت مشتری فقط مانده را کم می‌کند، نه اینکه ماهیت آن را عوض کند.',
        en: 'Accounts receivable is an asset, and assets increase with debits, so its normal balance is a debit. Nova’s balance is a 1,500 debit. Customer payments reduce the balance; they do not change its nature.',
      },
    },
    {
      q: { fa: 'نوا 2,500 اجاره را نقد پرداخت می‌کند. ثبت درست کدام است؟', en: 'Nova pays rent of 2,500 in cash. What is the correct entry?' },
      options: [
        { fa: 'بدهکار هزینه اجاره 2,500 / بستانکار موجودی نقد 2,500', en: 'Dr Rent expense 2,500 / Cr Cash 2,500' },
        { fa: 'بدهکار موجودی نقد 2,500 / بستانکار هزینه اجاره 2,500', en: 'Dr Cash 2,500 / Cr Rent expense 2,500' },
        { fa: 'بدهکار هزینه اجاره 2,500 / بستانکار حساب‌های پرداختنی 2,500', en: 'Dr Rent expense 2,500 / Cr Accounts payable 2,500' },
        { fa: 'بدهکار سرمایه 2,500 / بستانکار موجودی نقد 2,500', en: 'Dr Capital 2,500 / Cr Cash 2,500' },
      ],
      answer: 0,
      explain: {
        fa: 'هزینه افزایش می‌یابد، پس بدهکار می‌شود؛ موجودی نقد (دارایی) کاهش می‌یابد، پس بستانکار می‌شود. چون پرداخت نقدی بوده، حساب‌های پرداختنی درگیر نیست و اجاره هزینه است، نه کاهش مستقیم سرمایه.',
        en: 'The expense increases, so it is debited; Cash (an asset) decreases, so it is credited. The rent was paid in cash, so Accounts payable is not involved, and rent is an expense rather than a direct reduction of capital.',
      },
    },
    {
      q: {
        fa: 'جمع ستون بدهکار حساب موجودی نقد 75,500 و جمع ستون بستانکار آن 29,200 است. مانده حساب چیست؟',
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
        fa: '75,500 − 29,200 = 46,300. چون ستون بدهکار بزرگ‌تر است، مانده بدهکار است؛ همان مانده عادی یک دارایی. 104,700 دو ستون را جمع کرده، در حالی که مانده اختلاف دو ستون است.',
        en: '75,500 − 29,200 = 46,300. The debit side is larger, so the balance is a debit: the normal balance for an asset. The 104,700 option adds the two sides, but a balance is their difference.',
      },
    },
    {
      q: { fa: 'در رمز DEALER، کدام گروه با بدهکار افزایش می‌یابد؟', en: 'In the DEALER mnemonic, which group increases with a debit?' },
      options: [
        { fa: 'بدهی‌ها، حقوق مالکانه، درآمدها', en: 'Liabilities, Equity, Revenue' },
        { fa: 'دارایی‌ها، بدهی‌ها، حقوق مالکانه', en: 'Assets, Liabilities, Equity' },
        { fa: 'درآمدها، هزینه‌ها، برداشت', en: 'Revenue, Expenses, Drawings' },
        { fa: 'برداشت، هزینه‌ها، دارایی‌ها', en: 'Drawings, Expenses, Assets' },
      ],
      answer: 3,
      explain: {
        fa: 'DEA یعنی برداشت، هزینه‌ها و دارایی‌ها که با بدهکار افزایش می‌یابند. LER، یعنی بدهی‌ها، حقوق مالکانه و درآمدها، با بستانکار افزایش می‌یابند. گزینه «درآمدها، هزینه‌ها، برداشت» دو گروه را با هم مخلوط کرده است.',
        en: 'DEA stands for Drawings, Expenses and Assets, which increase with debits. LER (Liabilities, Equity, Revenue) increase with credits. The “Revenue, Expenses, Drawings” option mixes the two groups.',
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
        fa: 'بانک باید سپرده را به شما برگرداند، پس سپرده برای بانک بدهی است و بدهی با بستانکار افزایش می‌یابد. «دارایی بانک» وسوسه‌انگیز است، چون پول نزد بانک است؛ اما بانک آن را بدهکار شماست. در دفاتر خود شما، همین سپرده موجودی نقد را بدهکار می‌کند.',
        en: 'The bank must repay your deposit, so to the bank it is a liability, and liabilities increase with credits. “An asset of the bank” is tempting because the bank holds the cash, but the bank owes it to you. In your own books, the same deposit is a debit to Cash.',
      },
    },
    {
      q: {
        fa: 'مانده اول ماه حساب‌های پرداختنی 5,000 بستانکار، خریدهای نسیه ماه 12,000 و مانده پایان ماه 4,400 بستانکار است. در این ماه چقدر به تأمین‌کنندگان پرداخت شده است؟',
        en: 'Accounts payable opened the month with a 5,000 credit balance; credit purchases were 12,000 and the closing balance is 4,400 Cr. How much was paid to suppliers this month?',
      },
      options: [
        { fa: '12,600', en: '12,600' },
        { fa: '7,600', en: '7,600' },
        { fa: '21,400', en: '21,400' },
        { fa: '11,400', en: '11,400' },
      ],
      answer: 0,
      explain: {
        fa: 'مانده اول + افزایش‌ها − کاهش‌ها = مانده پایان: 5,000 + 12,000 − پرداخت‌ها = 4,400؛ پس پرداخت‌ها 12,600 است. گزینه 7,600 مانده اول ماه را نادیده گرفته و 21,400 مانده پایان را به‌اشتباه افزوده است.',
        en: 'Opening + increases − decreases = closing: 5,000 + 12,000 − payments = 4,400, so payments are 12,600. The 7,600 option ignores the opening balance, and 21,400 wrongly adds the closing balance.',
      },
    },
    {
      q: {
        fa: 'کسب‌وکاری دستگاهی به مبلغ 10,000 می‌خرد؛ 4,000 را نقد می‌پردازد و بقیه را نسیه می‌گذارد. حساب‌های پرداختنی با چه مبلغی بستانکار می‌شود؟',
        en: 'A business buys a machine for 10,000, paying 4,000 in cash and owing the rest. By how much is Accounts payable credited?',
      },
      options: [
        { fa: '10,000', en: '10,000' },
        { fa: '4,000', en: '4,000' },
        { fa: '6,000', en: '6,000' },
        { fa: '14,000', en: '14,000' },
      ],
      answer: 2,
      explain: {
        fa: 'این یک ثبت مرکب است: تجهیزات 10,000 بدهکار، موجودی نقد 4,000 بستانکار و حساب‌های پرداختنی 6,000 بستانکار؛ جمع بستانکارها 10,000 و برابر بدهکار است. گزینه 10,000 کل بها را بدهی فرض کرده، در حالی که 4,000 آن نقد پرداخت شده است.',
        en: 'This is a compound entry: debit Equipment 10,000, credit Cash 4,000 and credit Accounts payable 6,000; the credits total 10,000, matching the debit. The 10,000 option treats the whole price as owed, although 4,000 was paid in cash.',
      },
    },
    {
      q: {
        fa: 'مشتری 3,000 برای کاری که ماه آینده انجام می‌شود، پیشاپیش پرداخت می‌کند. ثبت درست کدام است؟',
        en: 'A customer pays 3,000 in advance for work to be done next month. What is the correct entry?',
      },
      options: [
        { fa: 'بدهکار موجودی نقد 3,000 / بستانکار درآمد خدمات 3,000', en: 'Dr Cash 3,000 / Cr Service revenue 3,000' },
        { fa: 'بدهکار حساب‌های دریافتنی 3,000 / بستانکار پیش‌دریافت درآمد 3,000', en: 'Dr Accounts receivable 3,000 / Cr Unearned revenue 3,000' },
        { fa: 'بدهکار پیش‌دریافت درآمد 3,000 / بستانکار موجودی نقد 3,000', en: 'Dr Unearned revenue 3,000 / Cr Cash 3,000' },
        { fa: 'بدهکار موجودی نقد 3,000 / بستانکار پیش‌دریافت درآمد 3,000', en: 'Dr Cash 3,000 / Cr Unearned revenue 3,000' },
      ],
      answer: 3,
      explain: {
        fa: 'پول وارد شده، پس موجودی نقد بدهکار می‌شود. چون کار هنوز انجام نشده، کسب‌وکار به مشتری بدهکار است و پیش‌دریافت درآمد (بدهی) بستانکار می‌شود. بستانکار کردن درآمد خدمات وسوسه‌انگیز است، اما درآمد ماه آینده، پس از انجام کار، شناسایی می‌شود.',
        en: 'Cash came in, so Cash is debited. The work is not done yet, so the business owes the customer and Unearned revenue (a liability) is credited. Crediting Service revenue is tempting, but the revenue is recognized next month, once the work is done.',
      },
    },
    {
      q: {
        fa: 'حساب ملزومات دو مبلغ بدهکار 4,000 و 1,500 و یک مبلغ بستانکار 1,200 (بابت مصرف) دارد. مانده آن چیست؟',
        en: 'The Supplies account has debits of 4,000 and 1,500 and a credit of 1,200 (supplies used). What is its balance?',
      },
      options: [
        { fa: '6,700 بدهکار', en: '6,700 debit' },
        { fa: '4,300 بدهکار', en: '4,300 debit' },
        { fa: '4,300 بستانکار', en: '4,300 credit' },
        { fa: '5,500 بدهکار', en: '5,500 debit' },
      ],
      answer: 1,
      explain: {
        fa: 'جمع بدهکار 5,500 و جمع بستانکار 1,200 است؛ 5,500 − 1,200 = 4,300 و چون ستون بدهکار بزرگ‌تر است، مانده بدهکار است. گزینه 5,500 مصرف را نادیده گرفته و 6,700 آن را به‌اشتباه افزوده است.',
        en: 'Debits total 5,500 and credits 1,200; 5,500 − 1,200 = 4,300, and since the debit side is larger the balance is a debit. The 5,500 option ignores the supplies used, and 6,700 wrongly adds them.',
      },
    },
  ],
}
