import type { Lesson } from '../types'

/* Account titles used in this lesson. */
const ac = {
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  capital: { fa: 'سرمایه', en: 'Share capital' },
  unpaid: { fa: 'سهامداران، بابت تعهد سهام', en: 'Shareholders’ unpaid subscriptions' },
  premium: { fa: 'صرف سهام', en: 'Share premium' },
  legal: { fa: 'اندوخته قانونی', en: 'Legal reserve' },
  optional: { fa: 'اندوخته اختیاری', en: 'Optional reserve' },
  re: { fa: 'سود انباشته', en: 'Retained earnings' },
  incSum: { fa: 'خلاصه سود و زیان', en: 'Income summary' },
  divPayable: { fa: 'سود سهام پرداختنی', en: 'Dividends payable' },
  deposit: { fa: 'علی‌الحساب افزایش سرمایه', en: 'Deposits for capital increase' },
}

const year = (n: number) => ({ fa: `سال ${n}`, en: `Year ${n}` })
const blank = { fa: '', en: '' }
const total = { fa: 'جمع', en: 'Total' }
/** A decrease shown in brackets, as in published statements. */
const neg = (s: string) => ({ fa: `(${s})`, en: `(${s})` })

export const lesson: Lesson = {
  slug: 'company-equity',
  number: 17,
  level: 'advanced',
  minutes: 35,
  icon: 'Users',
  tone: 'equity',
  title: { fa: 'حقوق مالکانه در شرکت‌ها: سرمایه، اندوخته و سود سهام', en: 'Company Equity: Share Capital, Reserves and Dividends' },
  summary: {
    fa: 'از مؤسسه انفرادی به شرکت سهامی بروید: سرمایه و ارزش اسمی، سرمایه تعهدشده و پرداخت‌شده، اندوخته قانونی، چرخه سود سهام، افزایش سرمایه، صورت تغییرات در حقوق مالکانه و سود پایه هر سهم را بیاموزید.',
    en: 'Move from a sole proprietorship to a company: learn share capital and nominal value, subscribed and paid-in capital, the legal reserve, the dividend cycle, capital increases, the statement of changes in equity and basic earnings per share.',
  },
  objectives: [
    {
      fa: 'شکل‌های حقوقی کسب‌وکار و شرکت‌های سهامی و با مسئولیت محدود را مقایسه کنید',
      en: 'Compare business forms, including joint-stock and limited-liability companies',
    },
    {
      fa: 'پذیره‌نویسی، پرداخت سرمایه و انتشار سهام را ثبت کنید',
      en: 'Record share subscriptions, capital payments and share issues',
    },
    {
      fa: 'اندوخته قانونی را طبق قانون تجارت برای چند سال محاسبه کنید',
      en: 'Compute the legal reserve under the Commercial Code over several years',
    },
    {
      fa: 'چرخه سود سهام و افزایش سرمایه از محل آورده نقدی و اندوخته‌ها را ثبت کنید',
      en: 'Record the dividend cycle and capital increases from cash and from reserves',
    },
    {
      fa: 'صورت تغییرات در حقوق مالکانه و سود پایه هر سهم را تهیه کنید',
      en: 'Prepare a statement of changes in equity and compute basic earnings per share',
    },
  ],
  sections: [
    /* ───────────────────────────── 1 ───────────────────────────── */
    {
      id: 'business-forms',
      title: { fa: 'شکل‌های حقوقی کسب‌وکار', en: 'Forms of Business' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'استودیو طراحی نوا رشد کرده است. سارا می‌خواهد یک سرمایه‌گذار و یک طراح ارشد را شریک کند و کسب‌وکار را به‌صورت شرکت ثبت کند. چه چیزی در حسابداری عوض می‌شود؟ دیگر یک حساب «سرمایه سارا» و یک حساب «برداشت» نداریم. سرمایه به **سهام** تقسیم می‌شود، سود به **سود انباشته** می‌رود، بخشی از آن طبق قانون **اندوخته** می‌شود و صاحبان سهام فقط با تصویب **مجمع عمومی** سود دریافت می‌کنند. این درس همین تفاوت‌ها را توضیح می‌دهد.',
            en: 'Nova Design Studio has grown. Sara wants to bring in an investor and a senior designer as partners and register the business as a company. What changes in the accounting? There is no longer one “Capital, Sara” account and one “Drawings” account. Capital is divided into **shares**, profit goes to **retained earnings**, part of it must by law be set aside as a **reserve**, and shareholders receive profit only when the **general meeting** approves it. This lesson explains those differences.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'سه شکل اصلی کسب‌وکار', en: 'The three main business forms' },
          head: [
            { fa: 'ویژگی', en: 'Feature' },
            { fa: 'مؤسسه انفرادی', en: 'Sole proprietorship' },
            { fa: 'شراکت', en: 'Partnership' },
            { fa: 'شرکت سهامی', en: 'Joint-stock company' },
          ],
          rows: [
            [
              { fa: 'مالکان', en: 'Owners' },
              { fa: 'یک نفر', en: 'One person' },
              { fa: 'دو یا چند شریک طبق قرارداد', en: 'Two or more partners under an agreement' },
              { fa: 'صاحبان سهام', en: 'Shareholders' },
            ],
            [
              { fa: 'مسئولیت مالک در برابر بدهی‌ها', en: 'Owner’s liability for debts' },
              { fa: 'نامحدود؛ دارایی شخصی هم در خطر است', en: 'Unlimited; personal assets are at risk' },
              {
                fa: 'بسته به نوع؛ در شرکت تضامنی، فراتر از آورده شریک',
                en: 'Depends on the type; in a general partnership company, beyond the partner’s contribution',
              },
              { fa: 'محدود به مبلغ اسمی سهام', en: 'Limited to the nominal value of the shares' },
            ],
            [
              { fa: 'حساب‌های حقوق مالکانه', en: 'Equity accounts' },
              { fa: 'سرمایه و برداشت', en: 'Capital and drawings' },
              { fa: 'حساب سرمایه و جاری برای هر شریک', en: 'A capital and a current account for each partner' },
              { fa: 'سرمایه، اندوخته‌ها و سود انباشته', en: 'Share capital, reserves and retained earnings' },
            ],
            [
              { fa: 'برداشت سود', en: 'Taking profit out' },
              { fa: 'هر زمان، با ثبت برداشت', en: 'Any time, recorded as drawings' },
              { fa: 'طبق قرارداد شراکت', en: 'As the partnership agreement says' },
              { fa: 'فقط با تصویب مجمع عمومی (سود سهام)', en: 'Only when the general meeting approves (dividends)' },
            ],
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**شرکت سهامی خاص**: سرمایه به سهام مساوی تقسیم می‌شود و تماماً به‌وسیله مؤسسان تأمین می‌شود؛ سهام را نمی‌توان به عموم عرضه کرد. طبق قانون تجارت دست‌کم سه سهامدار لازم است.',
              en: '**Private joint-stock company (sahami-ye khass)**: capital is divided into equal shares and fully provided by the founders; shares cannot be offered to the public. The Commercial Code requires at least three shareholders.',
            },
            {
              fa: '**شرکت سهامی عام**: بخشی از سرمایه با پذیره‌نویسی عمومی از مردم جمع می‌شود. شرکت‌های بورسی از این نوع‌اند و الزامات افشا و حسابرسی سخت‌تری دارند. دست‌کم پنج سهامدار لازم است.',
              en: '**Public joint-stock company (sahami-ye am)**: part of the capital is raised from the public by share subscription. Listed companies are of this type and face stricter disclosure and audit rules. At least five shareholders are required.',
            },
            {
              fa: '**شرکت با مسئولیت محدود**: دو یا چند شریک؛ سرمایه به سهام قابل معامله تقسیم نمی‌شود و هر شریک «سهم‌الشرکه» دارد. مسئولیت هر شریک به آورده‌اش محدود است و انتقال سهم‌الشرکه به دیگران طبق قانون تجارت به موافقت شرکا نیاز دارد.',
              en: '**Limited-liability company**: two or more partners; capital is not divided into tradable shares, and each partner holds a “share of partnership”. Each partner’s liability is limited to their contribution, and transferring that share to others needs the partners’ consent under the Commercial Code.',
            },
            {
              fa: 'قانون تجارت شکل‌های دیگری هم دارد (تضامنی، مختلط، نسبی و تعاونی)؛ در این درس روی شرکت سهامی تمرکز می‌کنیم.',
              en: 'The Commercial Code has other forms too (general partnership, mixed, proportional and cooperative companies); this lesson focuses on joint-stock companies.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل در ایران', en: 'In practice in Iran' },
          text: {
            fa: 'شرکت با ثبت در **اداره ثبت شرکت‌ها** و تصویب **اساسنامه** شخصیت حقوقی پیدا می‌کند و تغییرات سرمایه، مدیران و نشانی آن در **روزنامه رسمی** آگهی می‌شود. شرکت‌ها دفاتر قانونی روزنامه و کل نگه می‌دارند و سهام و انتقال‌های آن در **دفتر ثبت سهام** ثبت می‌شود. شرکت شخصی جدا از سهامداران است؛ دارایی شخصی سهامداران دارایی شرکت نیست و برعکس.',
            en: 'A company becomes a legal person when it is registered at the **Companies Registration Office** with approved **articles of association**, and changes to its capital, directors and address are announced in the **Official Gazette**. Companies keep the legal journal and ledger, and shares and their transfers are entered in the **share register**. The company is a person separate from its shareholders: their personal assets are not the company’s, and vice versa.',
          },
        },
      ],
    },
    /* ───────────────────────────── 2 ───────────────────────────── */
    {
      id: 'share-capital',
      title: { fa: 'سرمایه، ارزش اسمی و سرمایه پرداخت‌شده', en: 'Share Capital, Nominal Value and Paid-In Capital' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**سرمایه** شرکت سهامی به سهامی با **ارزش اسمی** برابر تقسیم می‌شود. ارزش اسمی مبلغی است که روی ورقه سهم نوشته شده و در اساسنامه ثبت شده است؛ با قیمت بازار سهم فرق دارد و با معامله سهام تغییر نمی‌کند. حساب سرمایه همیشه همان **سرمایه ثبت‌شده** را نشان می‌دهد.',
            en: 'The **share capital** of a joint-stock company is divided into shares of equal **nominal (par) value**. The nominal value is the amount printed on the share certificate and set in the articles; it differs from the market price and does not change when shares are traded. The Share capital account always shows the **registered capital**.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سرمایه = تعداد سهام × ارزش اسمی هر سهم = 10,000 × 100 = 1,000,000',
            en: 'Share capital = Number of shares × Nominal value per share = 10,000 × 100 = 1,000,000',
          },
          note: {
            fa: 'شرکت سهامی خاص پارس‌نور، مثال اصلی این درس.',
            en: 'ParsNoor Co., a private joint-stock company and this lesson’s main example.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در تأسیس، مؤسسان همه سهام را **تعهد** (پذیره‌نویسی) می‌کنند، اما لازم نیست همه مبلغ را همان روز بپردازند. طبق قانون تجارت، در شرکت سهامی دست‌کم **35٪** سرمایه تعهدشده باید هنگام تأسیس پرداخت شود و باقی‌مانده **تعهد سهامداران** است که هیئت‌مدیره بعداً مطالبه می‌کند. پارس‌نور با سرمایه 1,000,000 تأسیس می‌شود: 350,000 (35٪) هنگام تأسیس پرداخت می‌شود و 650,000 در ماه 6 سال 1 مطالبه و وصول می‌شود.',
            en: 'At formation, the founders **subscribe** for all the shares, but they need not pay it all on day one. Under the Commercial Code, at least **35%** of the subscribed capital of a joint-stock company must be paid in at formation; the rest is the **shareholders’ commitment**, which the board calls later. ParsNoor is formed with 1,000,000 of capital: 350,000 (35%) is paid at formation and 650,000 is called and collected in month 6 of Year 1.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'پذیره‌نویسی و پرداخت سرمایه پارس‌نور', en: 'ParsNoor’s subscription and capital payments' },
          entries: [
            {
              date: { fa: 'تأسیس', en: 'Formation' },
              lines: [
                { account: ac.unpaid, debit: 1000000 },
                { account: ac.capital, credit: 1000000 },
              ],
              memo: { fa: 'تعهد 10,000 سهم 100 واحدی.', en: 'Subscription for 10,000 shares of 100 each.' },
            },
            {
              date: { fa: 'تأسیس', en: 'Formation' },
              lines: [
                { account: ac.cash, debit: 350000 },
                { account: ac.unpaid, credit: 350000 },
              ],
              memo: { fa: 'پرداخت 35٪ به حساب بانکی شرکت.', en: '35% paid into the company’s bank account.' },
            },
            {
              date: { fa: 'ماه 6، سال 1', en: 'Month 6, Year 1' },
              lines: [
                { account: ac.cash, debit: 650000 },
                { account: ac.unpaid, credit: 650000 },
              ],
              memo: { fa: 'وصول باقی‌مانده تعهد سهامداران.', en: 'The rest of the shareholders’ commitment collected.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'حقوق مالکانه پارس‌نور بلافاصله پس از تأسیس', en: 'ParsNoor’s equity right after formation' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'سرمایه ثبت‌شده (10,000 سهم 100 واحدی)', en: 'Registered share capital (10,000 shares of 100)' }, 1000000],
            [{ fa: 'کسر می‌شود: سهامداران، بابت تعهد سهام', en: 'Less: shareholders’ unpaid subscriptions' }, 650000],
            [{ fa: 'سرمایه پرداخت‌شده', en: 'Paid-in capital' }, 350000],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'تعهد پرداخت‌نشده دارایی نیست', en: 'An unpaid commitment is not an asset' },
          text: {
            fa: 'رویه رایج این است که مانده «سهامداران، بابت تعهد سهام» از سرمایه در بخش حقوق مالکانه کسر شود، نه اینکه دارایی نشان داده شود. به این ترتیب حقوق مالکانه فقط منابعی را نشان می‌دهد که واقعاً به شرکت آمده است.',
            en: 'Common practice is to deduct the balance of “shareholders’ unpaid subscriptions” from share capital within equity, rather than show it as an asset. That way equity shows only resources that have actually reached the company.',
          },
        },
        {
          type: 'h',
          text: { fa: 'انتشار سهام به مبلغی بیش از ارزش اسمی', en: 'Issuing shares above nominal value' },
        },
        {
          type: 'p',
          text: {
            fa: 'وقتی شرکتی موفق سهام جدید می‌فروشد، خریداران ممکن است حاضر باشند بیش از ارزش اسمی بپردازند. حساب سرمایه همچنان فقط ارزش اسمی را می‌گیرد و مازاد به **صرف سهام** می‌رود که بخشی از حقوق مالکانه است. صرف سهام سود شرکت نیست، چون از معامله با مالکان به دست آمده، نه از فعالیت تجاری. مثال: انتشار 2,000 سهم 100 واحدی به قیمت هر سهم 130.',
            en: 'When a successful company sells new shares, buyers may pay more than nominal value. Share capital still takes only the nominal value, and the excess goes to **share premium**, part of equity. Share premium is not profit, because it comes from dealing with owners, not from trading. Example: issuing 2,000 shares of 100 nominal at 130 each.',
          },
        },
        {
          type: 'journal',
          entries: [
            {
              lines: [
                { account: ac.cash, debit: 260000 },
                { account: ac.capital, credit: 200000 },
                { account: ac.premium, credit: 60000 },
              ],
              memo: {
                fa: '2,000 × 130 = 260,000 دریافتی؛ 2,000 × 100 = 200,000 سرمایه؛ 2,000 × 30 = 60,000 صرف سهام.',
                en: '2,000 × 130 = 260,000 received; 2,000 × 100 = 200,000 capital; 2,000 × 30 = 60,000 share premium.',
              },
            },
          ],
        },
      ],
    },
    /* ───────────────────────────── 3 ───────────────────────────── */
    {
      id: 'reserves',
      title: { fa: 'اندوخته قانونی و اندوخته‌های اختیاری', en: 'The Legal Reserve and Optional Reserves' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در درس «بستن حساب‌ها و چرخه کامل حسابداری»، سود خالص نوا به حساب سرمایه سارا بسته شد. در شرکت، سود خالص به حساب **سود انباشته** بسته می‌شود. سپس بخشی از آن به **اندوخته‌ها** منتقل می‌شود، بخشی با تصویب مجمع به‌صورت **سود سهام** تقسیم می‌شود و باقی‌مانده در سود انباشته می‌ماند.',
            en: 'In the lesson “Closing Entries and the Accounting Cycle”, Nova’s net income was closed to Sara’s capital account. In a company, net profit is closed to **retained earnings**. Part of it is then transferred to **reserves**, part is distributed as **dividends** when the general meeting approves, and the rest stays in retained earnings.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'طبق قانون تجارت، شرکت سهامی باید هر سال **یک‌بیستم (5٪) سود خالص**، پس از کسر زیان‌های انباشته سال‌های قبل، را به **اندوخته قانونی** منتقل کند تا وقتی که اندوخته قانونی به **یک‌دهم (10٪) سرمایه** برسد. پس از آن، انتقال اختیاری است؛ اما اگر سرمایه افزایش یابد، انتقال 5٪ دوباره ادامه می‌یابد تا اندوخته به 10٪ سرمایه جدید برسد. اندوخته قانونی را **نمی‌توان میان صاحبان سهام تقسیم کرد**. (قانون تجارت برای شرکت با مسئولیت محدود هم قاعده مشابهی دارد.)',
            en: 'Under the Commercial Code, a joint-stock company must each year transfer **one-twentieth (5%) of net profit**, after deducting losses carried from previous years, to the **legal reserve**, until the legal reserve reaches **one-tenth (10%) of share capital**. After that the transfer is optional; but if capital is increased, the 5% transfers resume until the reserve reaches 10% of the new capital. The legal reserve **may not be distributed to shareholders**. (The Commercial Code has a similar rule for limited-liability companies.)',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'انتقال به اندوخته قانونی = کمترِ (5٪ × سود خالص پس از کسر زیان انباشته قبلی، 10٪ × سرمایه − مانده فعلی اندوخته قانونی)',
            en: 'Transfer to legal reserve = lower of (5% × net profit after prior accumulated losses, 10% × share capital − current legal reserve)',
          },
          note: {
            fa: 'در سال زیان چیزی منتقل نمی‌شود. مثال زیان انباشته: اگر شرکتی سال را با 50,000 زیان انباشته شروع کند و 300,000 سود خالص داشته باشد، مبنا 250,000 و انتقال 12,500 است.',
            en: 'Nothing is transferred in a loss year. Accumulated-loss example: a company starting the year with 50,000 of accumulated losses that earns 300,000 net profit uses a base of 250,000 and transfers 12,500.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'شرکت سهامی خاص کیان با سرمایه ثابت 800,000: سقف اندوخته قانونی 80,000',
            en: 'Kian Co. with constant share capital of 800,000: legal-reserve ceiling 80,000',
          },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'سود خالص', en: 'Net profit' },
            { fa: '5٪ سود خالص', en: '5% of net profit' },
            { fa: 'جای خالی تا سقف', en: 'Room up to ceiling' },
            { fa: 'انتقال', en: 'Transfer' },
            { fa: 'مانده اندوخته قانونی', en: 'Legal reserve balance' },
          ],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [year(1), 240000, 12000, 80000, 12000, 12000],
            [year(2), 360000, 18000, 68000, 18000, 30000],
            [year(3), 300000, 15000, 50000, 15000, 45000],
            [year(4), 500000, 25000, 35000, 25000, 70000],
            [year(5), 600000, 30000, 10000, 10000, 80000],
            [year(6), 700000, 35000, 0, 0, 80000],
            [total, blank, blank, blank, 80000, blank],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'بستن سود و انتقال به اندوخته قانونی (کیان، سال 1)', en: 'Closing profit and the legal-reserve transfer (Kian, Year 1)' },
          entries: [
            {
              date: { fa: 'پایان سال 1', en: 'End of Year 1' },
              lines: [
                { account: ac.incSum, debit: 240000 },
                { account: ac.re, credit: 240000 },
              ],
              memo: { fa: 'بستن سود خالص به سود انباشته.', en: 'Net profit closed to retained earnings.' },
            },
            {
              date: { fa: 'پایان سال 1', en: 'End of Year 1' },
              lines: [
                { account: ac.re, debit: 12000 },
                { account: ac.legal, credit: 12000 },
              ],
              memo: { fa: 'اندوخته قانونی: 5٪ × 240,000.', en: 'Legal reserve: 5% × 240,000.' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'جدا از اندوخته قانونی، اساسنامه یا مجمع عمومی می‌تواند **اندوخته‌های اختیاری** تعیین کند؛ مثلاً اندوخته طرح و توسعه برای یک پروژه بزرگ. اندوخته اختیاری هم بخشی از حقوق مالکانه است و مجمع می‌تواند بعداً آن را به سود انباشته برگرداند یا به سرمایه منتقل کند.',
            en: 'Besides the legal reserve, the articles or the general meeting may create **optional reserves**, for example a development reserve for a large project. An optional reserve is also part of equity, and the general meeting can later release it to retained earnings or transfer it to capital.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اندوخته، پول نقد نیست', en: 'A reserve is not cash' },
          text: {
            fa: 'اندوخته فقط برچسبی روی بخشی از حقوق مالکانه است و نشان می‌دهد آن بخش قابل تقسیم نیست یا برای هدفی کنار گذاشته شده است. هیچ پولی در بانک به نام اندوخته قانونی کنار نمی‌رود؛ ثبت آن هم هیچ حساب دارایی را درگیر نمی‌کند.',
            en: 'A reserve is only a label on part of equity, showing that part cannot be distributed or is earmarked for a purpose. No money is put aside in a bank under the name of the legal reserve, and recording it involves no asset account at all.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: زمان ثبت', en: 'In practice: when to record' },
          text: {
            fa: 'چون انتقال به اندوخته قانونی الزام قانونی است، شرکت‌های ایرانی آن را در همان صورت‌های مالی سال ثبت می‌کنند. اما اندوخته‌های اختیاری و سود سهام به تصمیم مجمع عمومی بستگی دارند و پس از تصویب مجمع ثبت می‌شوند. قانون تجارت همچنین مقرر می‌کند در صورت وجود سود قابل تقسیم، دست‌کم 10٪ سود خالص سال میان صاحبان سهام تقسیم شود. متن روز قانون را بررسی کنید.',
            en: 'Because the legal-reserve transfer is required by law, Iranian companies record it in that year’s financial statements. Optional reserves and dividends, however, depend on the general meeting and are recorded after it approves them. The Commercial Code also requires that, where there is distributable profit, at least 10% of the year’s net profit be distributed to shareholders. Check the current text of the law.',
          },
        },
      ],
    },
    /* ───────────────────────────── 4 ───────────────────────────── */
    {
      id: 'dividends',
      title: { fa: 'سود سهام: از تصویب تا پرداخت', en: 'Dividends: From Declaration to Payment' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**سود سهام** بخشی از سود انباشته است که میان صاحبان سهام تقسیم می‌شود. هیئت‌مدیره فقط **پیشنهاد** می‌دهد؛ **مجمع عمومی عادی سالانه** صورت‌های مالی را تصویب و **سود هر سهم** را تعیین می‌کند. تا پیش از تصویب مجمع بدهی‌ای وجود ندارد. با تصویب، سود انباشته کم می‌شود و بدهی **سود سهام پرداختنی** ایجاد می‌شود که طبق قانون تجارت باید ظرف هشت ماه پس از تصمیم مجمع پرداخت شود. سود سهام **هزینه نیست** و در صورت سود و زیان نمی‌آید.',
            en: '**Dividends** are the part of retained earnings distributed to shareholders. The board only **proposes**; the **annual ordinary general meeting** approves the financial statements and sets the **dividend per share**. Until the meeting approves, there is no liability. On approval, retained earnings fall and a **dividends payable** liability arises, which under the Commercial Code must be paid within eight months of the meeting’s decision. Dividends are **not an expense** and never appear in the income statement.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'کل سود سهام = سود هر سهم × تعداد سهام = 18 × 10,000 = 180,000',
            en: 'Total dividend = Dividend per share × Number of shares = 18 × 10,000 = 180,000',
          },
          note: {
            fa: 'پارس‌نور در سال 2 سود خالص 400,000 داشت. مجمع سال 3 سود هر سهم را 18 تعیین کرد: نسبت تقسیم سود = 180,000 ÷ 400,000 = 45٪.',
            en: 'ParsNoor earned 400,000 in Year 2. The general meeting in Year 3 set a dividend of 18 per share: payout ratio = 180,000 ÷ 400,000 = 45%.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'چرخه سود سهام پارس‌نور', en: 'ParsNoor’s dividend cycle' },
          entries: [
            {
              date: { fa: 'مجمع عمومی، ماه 3 سال 3', en: 'General meeting, month 3 of Year 3' },
              lines: [
                { account: ac.re, debit: 180000 },
                { account: ac.divPayable, credit: 180000 },
              ],
              memo: { fa: 'تصویب سود هر سهم 18 برای 10,000 سهم.', en: 'Dividend of 18 per share approved on 10,000 shares.' },
            },
            {
              date: { fa: 'ماه 5، سال 3', en: 'Month 5, Year 3' },
              lines: [
                { account: ac.divPayable, debit: 150000 },
                { account: ac.cash, credit: 150000 },
              ],
              memo: { fa: 'پرداخت به سهامدارانی که حساب بانکی معرفی کرده‌اند.', en: 'Paid to shareholders who have registered a bank account.' },
            },
            {
              date: { fa: 'ماه 8، سال 3', en: 'Month 8, Year 3' },
              lines: [
                { account: ac.divPayable, debit: 30000 },
                { account: ac.cash, credit: 30000 },
              ],
              memo: { fa: 'پرداخت باقی‌مانده.', en: 'The remainder paid.' },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'سود سهام پرداختنی پس از دو پرداخت صفر می‌شود', en: 'Dividends payable is cleared by the two payments' },
          accounts: [{ name: ac.divPayable, debits: [150000, 30000], credits: [180000] }],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'برداشت سهامدار سود سهام نیست', en: 'A shareholder’s withdrawal is not a dividend' },
          text: {
            fa: 'سارا در نوا هر زمان می‌توانست برداشت کند. در شرکت، سهامدار حتی اگر مدیرعامل باشد نمی‌تواند بدون تصویب مجمع سود بردارد. اگر پولی بدون مصوبه به سهامدار پرداخت شود، طلب شرکت از اوست و در حساب‌های دریافتنی (جاری سهامداران) ثبت می‌شود، نه سود سهام.',
            en: 'At Nova, Sara could draw cash whenever she liked. In a company, a shareholder, even the managing director, cannot take profit without the general meeting’s approval. Money paid to a shareholder without such a resolution is a receivable from that shareholder (a shareholder current account), not a dividend.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: سود سهام شرکت‌های بورسی', en: 'In practice: listed companies’ dividends' },
          text: {
            fa: 'شرکت‌های بورسی سود هر سهم و جدول زمانی پرداخت را پس از مجمع به‌طور عمومی اعلام می‌کنند و معمولاً سود را به حساب بانکی ثبت‌شده سهامداران واریز می‌کنند. سود سهامی که صاحبانش برای دریافت آن مراجعه نکرده‌اند تا زمان پرداخت بدهی شرکت می‌ماند و نباید به درآمد برگردانده شود.',
            en: 'Listed companies publicly announce the dividend per share and the payment schedule after the meeting, and usually pay into shareholders’ registered bank accounts. Dividends that shareholders have not yet claimed remain a liability until paid and must not be taken back to income.',
          },
        },
      ],
    },
    /* ───────────────────────────── 5 ───────────────────────────── */
    {
      id: 'equity-statement',
      title: { fa: 'سود انباشته و صورت تغییرات در حقوق مالکانه', en: 'Retained Earnings and the Statement of Changes in Equity' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**سود انباشته** سودهای سال‌های گذشته و جاری است که نه تقسیم شده، نه به اندوخته و نه به سرمایه منتقل شده است. **صورت تغییرات در حقوق مالکانه** حرکت هر جزء حقوق مالکانه را از مانده ابتدای سال تا پایان سال نشان می‌دهد: برای هر جزء یک ستون و برای هر رویداد یک سطر. در نوا این صورت فقط سرمایه، سود و برداشت را داشت؛ در شرکت، ستون‌های سرمایه، اندوخته‌ها و سود انباشته را دارد.',
            en: '**Retained earnings** are past and current profits that have been neither distributed nor transferred to reserves or capital. The **statement of changes in equity** shows how each component of equity moved from the opening to the closing balance: one column per component and one row per event. For Nova it held only capital, profit and drawings; for a company it has columns for share capital, reserves and retained earnings.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سود انباشته پایان سال = ابتدای سال + سود خالص − سود سهام مصوب − انتقال به اندوخته‌ها − انتقال به سرمایه',
            en: 'Closing retained earnings = Opening + Net profit − Dividends declared − Transfers to reserves − Transfers to capital',
          },
          note: {
            fa: 'پارس‌نور، سال 3: 445,000 + 500,000 − 180,000 − 25,000 − 30,000 = 710,000.',
            en: 'ParsNoor, Year 3: 445,000 + 500,000 − 180,000 − 25,000 − 30,000 = 710,000.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'رویدادهای سال 3 پارس‌نور: مجمع عمومی سود سهام 180,000 و انتقال 30,000 به اندوخته اختیاری را تصویب کرد؛ سود خالص سال 500,000 بود و 5٪ آن (25,000) به اندوخته قانونی رفت. اندوخته قانونی ابتدای سال، 35,000، حاصل انتقال 15,000 در سال 1 (5٪ × 300,000) و 20,000 در سال 2 (5٪ × 400,000) است.',
            en: 'ParsNoor’s Year 3 events: the general meeting approved a 180,000 dividend and a 30,000 transfer to the optional reserve; net profit for the year was 500,000, and 5% of it (25,000) went to the legal reserve. The opening legal reserve of 35,000 came from 15,000 in Year 1 (5% × 300,000) and 20,000 in Year 2 (5% × 400,000).',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'شرکت سهامی خاص پارس‌نور: صورت تغییرات در حقوق مالکانه، سال 3 (کاهش‌ها داخل پرانتز)',
            en: 'ParsNoor Co.: statement of changes in equity, Year 3 (decreases in brackets)',
          },
          head: [
            { fa: 'شرح', en: 'Description' },
            { fa: 'سرمایه', en: 'Share capital' },
            { fa: 'اندوخته قانونی', en: 'Legal reserve' },
            { fa: 'اندوخته اختیاری', en: 'Optional reserve' },
            { fa: 'سود انباشته', en: 'Retained earnings' },
            { fa: 'جمع', en: 'Total' },
          ],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [{ fa: 'مانده ابتدای سال 3', en: 'Balance at start of Year 3' }, 1000000, 35000, 20000, 445000, 1500000],
            [{ fa: 'سود سهام مصوب', en: 'Dividends declared' }, blank, blank, blank, neg('180,000'), neg('180,000')],
            [{ fa: 'انتقال به اندوخته اختیاری', en: 'Transfer to optional reserve' }, blank, blank, 30000, neg('30,000'), 0],
            [{ fa: 'سود خالص سال 3', en: 'Net profit for Year 3' }, blank, blank, blank, 500000, 500000],
            [{ fa: 'انتقال به اندوخته قانونی', en: 'Transfer to legal reserve' }, blank, 25000, blank, neg('25,000'), 0],
            [{ fa: 'مانده پایان سال 3', en: 'Balance at end of Year 3' }, 1000000, 60000, 50000, 710000, 1820000],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'دو کنترل سریع', en: 'Two quick checks' },
          text: {
            fa: 'انتقال به اندوخته‌ها جمع حقوق مالکانه را تغییر نمی‌دهد؛ فقط از یک ستون به ستون دیگر می‌رود (برای همین ستون جمع صفر است). جمع ستون آخر باید با جمع حقوق مالکانه ترازنامه برابر باشد: 1,500,000 + 500,000 − 180,000 = 1,820,000.',
            en: 'Transfers to reserves do not change total equity; they only move between columns (which is why the total column shows zero). The last column must equal total equity on the balance sheet: 1,500,000 + 500,000 − 180,000 = 1,820,000.',
          },
        },
      ],
    },
    /* ───────────────────────────── 6 ───────────────────────────── */
    {
      id: 'capital-increase',
      title: { fa: 'افزایش سرمایه', en: 'Increasing Share Capital' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'افزایش سرمایه با تصویب **مجمع عمومی فوق‌العاده** انجام می‌شود و پس از **ثبت** در اداره ثبت شرکت‌ها قطعی می‌شود. قانون تجارت چند منبع را مجاز می‌داند: **آورده نقدی** (سهامداران پول تازه می‌آورند)، **مطالبات حال‌شده** سهامداران از شرکت، و **انتقال سود انباشته یا اندوخته‌ها** به سرمایه. در افزایش سرمایه نقدی، سهامداران فعلی به نسبت سهامشان **حق تقدم** خرید سهام جدید را دارند.',
            en: 'A capital increase is approved by an **extraordinary general meeting** and becomes final once **registered** at the Companies Registration Office. The Commercial Code allows several sources: **cash contributions** (shareholders bring new money), shareholders’ **matured claims** on the company, and **transfers of retained earnings or reserves** to capital. In a cash increase, existing shareholders have a **pre-emptive right** to the new shares in proportion to their holdings.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'از محل آورده نقدی', en: 'From cash contributions' },
            items: [
              { fa: 'پول تازه وارد شرکت می‌شود', en: 'New money comes into the company' },
              { fa: 'جمع حقوق مالکانه به اندازه آورده افزایش می‌یابد', en: 'Total equity rises by the amount contributed' },
              { fa: 'سهامدار برای سهم جدید پول می‌پردازد', en: 'Shareholders pay for their new shares' },
            ],
          },
          right: {
            title: { fa: 'از محل سود انباشته و اندوخته‌ها', en: 'From retained earnings and reserves' },
            items: [
              { fa: 'هیچ پول تازه‌ای وارد نمی‌شود', en: 'No new money comes in' },
              {
                fa: 'جمع حقوق مالکانه ثابت می‌ماند؛ فقط از سود انباشته یا اندوخته به سرمایه منتقل می‌شود',
                en: 'Total equity is unchanged; amounts just move from retained earnings or reserves to capital',
              },
              { fa: 'سهامداران به نسبت سهامشان سهام جایزه می‌گیرند', en: 'Shareholders receive bonus shares in proportion to their holdings' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'پارس‌نور در سال 4 سرمایه را از 1,000,000 به 1,500,000 افزایش می‌دهد: 3,000 سهم جدید (300,000) از محل آورده نقدی و 2,000 سهم (200,000) از محل 150,000 سود انباشته و کل 50,000 اندوخته اختیاری. سهامداران در ابتدای ماه 10 مبلغ نقدی را می‌پردازند و افزایش سرمایه در ماه 11 ثبت می‌شود.',
            en: 'In Year 4 ParsNoor raises its capital from 1,000,000 to 1,500,000: 3,000 new shares (300,000) for cash, and 2,000 shares (200,000) from 150,000 of retained earnings and the whole 50,000 optional reserve. Shareholders pay the cash at the start of month 10, and the increase is registered in month 11.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'افزایش سرمایه پارس‌نور', en: 'ParsNoor’s capital increase' },
          entries: [
            {
              date: { fa: 'ابتدای ماه 10، سال 4', en: 'Start of month 10, Year 4' },
              lines: [
                { account: ac.cash, debit: 300000 },
                { account: ac.deposit, credit: 300000 },
              ],
              memo: {
                fa: 'آورده نقدی تا زمان ثبت، سرمایه نیست و در حساب علی‌الحساب نگه داشته می‌شود.',
                en: 'Until registration, the cash is not yet capital and is held in a deposits account.',
              },
            },
            {
              date: { fa: 'ماه 11، سال 4 (ثبت)', en: 'Month 11, Year 4 (registration)' },
              lines: [
                { account: ac.deposit, debit: 300000 },
                { account: ac.re, debit: 150000 },
                { account: ac.optional, debit: 50000 },
                { account: ac.capital, credit: 500000 },
              ],
              memo: { fa: 'انتقال به سرمایه پس از ثبت افزایش سرمایه.', en: 'Transferred to share capital once the increase is registered.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'حقوق مالکانه پارس‌نور پیش و پس از افزایش سرمایه', en: 'ParsNoor’s equity before and after the capital increase' },
          head: [
            { fa: 'جزء', en: 'Component' },
            { fa: 'پیش از افزایش', en: 'Before' },
            { fa: 'پس از افزایش', en: 'After' },
          ],
          numericCols: [1, 2],
          rows: [
            [ac.capital, 1000000, 1500000],
            [ac.legal, 60000, 60000],
            [ac.optional, 50000, 0],
            [ac.re, 710000, 560000],
            [total, 1820000, 2120000],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'نکته‌ها', en: 'Points to watch' },
          text: {
            fa: 'جمع حقوق مالکانه فقط 300,000 (آورده نقدی) افزایش یافت؛ بخش 200,000 جابه‌جایی درون حقوق مالکانه است. با سرمایه جدید، سقف اندوخته قانونی به 150,000 می‌رسد و انتقال 5٪ از سود سال‌های بعد ادامه می‌یابد. در عمل، افزایش سرمایه از محل اندوخته‌ها با اندوخته‌های اختیاری و سود انباشته انجام می‌شود و اندوخته قانونی برای آن به کار نمی‌رود.',
            en: 'Total equity rose by only 300,000 (the cash); the 200,000 is a reshuffle within equity. With the new capital, the legal-reserve ceiling becomes 150,000 and the 5% transfers continue from later profits. In practice, increases from reserves use optional reserves and retained earnings, not the legal reserve.',
          },
        },
      ],
    },
    /* ───────────────────────────── 7 ───────────────────────────── */
    {
      id: 'eps-practice',
      title: { fa: 'سود پایه هر سهم و اشتباهات رایج', en: 'Basic Earnings per Share and Common Mistakes' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**سود پایه هر سهم** (EPS) نشان می‌دهد به هر سهم عادی چه مقدار از سود خالص سال رسیده است. چون تعداد سهام ممکن است در طول سال تغییر کند، مخرج کسر **میانگین موزون** تعداد سهام عادی در جریان است: هر سهم به نسبت مدتی از سال که منتشر شده بوده حساب می‌شود. استثنای مهم: سهامی که **از محل اندوخته‌ها یا سود انباشته** (سهام جایزه) منتشر شده، منبع تازه‌ای نیاورده است؛ پس طوری حساب می‌شود که گویی از ابتدای سال وجود داشته است.',
            en: '**Basic earnings per share** (EPS) shows how much of the year’s net profit belongs to each ordinary share. Because the number of shares can change during the year, the denominator is the **weighted average** number of ordinary shares outstanding: each share counts for the part of the year it was in issue. One key exception: shares issued **from reserves or retained earnings** (bonus shares) brought in no new resources, so they are counted as if they had existed from the start of the year.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سود پایه هر سهم = سود خالص متعلق به سهامداران عادی ÷ میانگین موزون تعداد سهام عادی',
            en: 'Basic EPS = Net profit attributable to ordinary shareholders ÷ Weighted average number of ordinary shares',
          },
          note: {
            fa: 'پارس‌نور، سال 3 (بدون تغییر در تعداد سهام): 500,000 ÷ 10,000 = 50.',
            en: 'ParsNoor, Year 3 (no change in shares): 500,000 ÷ 10,000 = 50.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'پارس‌نور، سال 4: میانگین موزون سهام (سود خالص سال 4: 714,000)',
            en: 'ParsNoor, Year 4: weighted average shares (Year 4 net profit: 714,000)',
          },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'تعداد سهام', en: 'Shares' },
            { fa: 'بخشی از سال', en: 'Part of the year' },
            { fa: 'سهام موزون', en: 'Weighted shares' },
          ],
          numericCols: [1, 3],
          rows: [
            [{ fa: 'سهام ابتدای سال', en: 'Shares at start of year' }, 10000, { fa: '12/12', en: '12/12' }, 10000],
            [
              { fa: 'سهام جایزه از محل اندوخته‌ها (گویی از ابتدای سال)', en: 'Bonus shares from reserves (as if from the start)' },
              2000,
              { fa: '12/12', en: '12/12' },
              2000,
            ],
            [{ fa: 'سهام نقدی از ابتدای ماه 10', en: 'Cash shares from the start of month 10' }, 3000, { fa: '3/12', en: '3/12' }, 750],
            [total, 15000, blank, 12750],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'سود پایه هر سهم سال 4 = 714,000 ÷ 12,750 = 56',
            en: 'Year 4 basic EPS = 714,000 ÷ 12,750 = 56',
          },
          note: {
            fa: 'برای مقایسه‌پذیری، سود هر سهم سال 3 هم با 12,000 سهم تجدید ارائه می‌شود: 500,000 ÷ 12,000 ≈ 41.7. شرکت‌های بورسی ایران سود هر سهم را در صورت‌های مالی و در سامانه کدال منتشر می‌کنند.',
            en: 'For comparability, Year 3 EPS is restated using 12,000 shares: 500,000 ÷ 12,000 ≈ 41.7. Iranian listed companies publish EPS in their financial statements and on the Codal disclosure system.',
          },
        },
        {
          type: 'h',
          text: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'ثبت سود سهام به‌عنوان **هزینه** در صورت سود و زیان؛ سود سهام تقسیم سود است و از سود انباشته کم می‌شود.',
              en: 'Recording dividends as an **expense** in the income statement; dividends distribute profit and reduce retained earnings.',
            },
            {
              fa: 'ثبت بدهی سود سهام فقط بر اساس **پیشنهاد هیئت‌مدیره**؛ بدهی با تصویب مجمع ایجاد می‌شود.',
              en: 'Recording a dividend liability on the **board’s proposal** alone; the liability arises when the general meeting approves.',
            },
            {
              fa: 'محاسبه اندوخته قانونی از سرمایه به‌جای سود خالص، فراموش کردن کسر زیان انباشته قبلی، ادامه انتقال پس از رسیدن به 10٪ سرمایه، یا از سر نگرفتن آن پس از افزایش سرمایه.',
              en: 'Computing the legal reserve on capital instead of net profit, forgetting to deduct prior accumulated losses, continuing past 10% of capital, or not resuming after a capital increase.',
            },
            {
              fa: 'تصور اینکه اندوخته پول نقد کنار گذاشته‌شده است، یا تقسیم اندوخته قانونی میان سهامداران.',
              en: 'Thinking a reserve is cash set aside, or distributing the legal reserve to shareholders.',
            },
            {
              fa: 'ثبت آورده نقدی مستقیماً در حساب سرمایه پیش از ثبت افزایش سرمایه؛ یا تصور اینکه افزایش سرمایه از محل اندوخته‌ها حقوق مالکانه را زیاد می‌کند.',
              en: 'Crediting cash contributions straight to share capital before the increase is registered; or thinking an increase from reserves raises total equity.',
            },
            {
              fa: 'نشان دادن تعهد پرداخت‌نشده سهامداران به‌عنوان دارایی، یا ثبت صرف سهام به‌عنوان درآمد.',
              en: 'Showing shareholders’ unpaid subscriptions as an asset, or recording share premium as income.',
            },
            {
              fa: 'استفاده از تعداد سهام پایان سال به‌جای میانگین موزون در محاسبه سود هر سهم.',
              en: 'Using year-end shares instead of the weighted average when computing EPS.',
            },
          ],
        },
      ],
    },
    /* ───────────────────────────── 8 ───────────────────────────── */
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در همه تمرین‌ها شرکت‌ها سهامی خاص‌اند و قاعده اندوخته قانونی قانون تجارت (5٪ سود خالص تا 10٪ سرمایه) را به کار ببرید.',
            en: 'In every exercise the companies are private joint-stock companies; apply the Commercial Code’s legal-reserve rule (5% of net profit up to 10% of capital).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'پذیره‌نویسی و پرداخت سرمایه', en: 'Subscription and payment of capital' },
          difficulty: 'easy',
          problem: {
            fa: 'شرکت سهامی خاص آوین با 20,000 سهم 100 واحدی تأسیس می‌شود. مؤسسان 35٪ سرمایه را هنگام تأسیس می‌پردازند و هیئت‌مدیره باقی‌مانده را در سال 2 مطالبه و وصول می‌کند. ثبت‌ها را بنویسید و حقوق مالکانه را بلافاصله پس از تأسیس نشان دهید.',
            en: 'Avin Co. is formed with 20,000 shares of 100 each. The founders pay 35% of the capital at formation, and the board calls and collects the rest in Year 2. Write the entries and show equity right after formation.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'سرمایه', en: 'Capital' },
                  text: { fa: '20,000 × 100 = 2,000,000.', en: '20,000 × 100 = 2,000,000.' },
                },
                {
                  title: { fa: 'پرداخت هنگام تأسیس', en: 'Paid at formation' },
                  text: {
                    fa: '35٪ × 2,000,000 = 700,000؛ تعهد پرداخت‌نشده = 1,300,000.',
                    en: '35% × 2,000,000 = 700,000; unpaid commitment = 1,300,000.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'تأسیس', en: 'Formation' },
                  lines: [
                    { account: ac.unpaid, debit: 2000000 },
                    { account: ac.capital, credit: 2000000 },
                  ],
                },
                {
                  date: { fa: 'تأسیس', en: 'Formation' },
                  lines: [
                    { account: ac.cash, debit: 700000 },
                    { account: ac.unpaid, credit: 700000 },
                  ],
                },
                {
                  date: { fa: 'سال 2', en: 'Year 2' },
                  lines: [
                    { account: ac.cash, debit: 1300000 },
                    { account: ac.unpaid, credit: 1300000 },
                  ],
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'حقوق مالکانه پس از تأسیس', en: 'Equity after formation' },
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [1],
              rows: [
                [ac.capital, 2000000],
                [{ fa: 'کسر می‌شود: سهامداران، بابت تعهد سهام', en: 'Less: shareholders’ unpaid subscriptions' }, 1300000],
                [{ fa: 'سرمایه پرداخت‌شده', en: 'Paid-in capital' }, 700000],
              ],
            },
          ],
          answer: {
            fa: 'سرمایه ثبت‌شده 2,000,000؛ پرداخت‌شده هنگام تأسیس 700,000؛ تعهد پرداخت‌نشده 1,300,000.',
            en: 'Registered capital 2,000,000; paid at formation 700,000; unpaid commitment 1,300,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'اندوخته قانونی در هفت سال', en: 'The legal reserve over seven years' },
          difficulty: 'medium',
          problem: {
            fa: 'شرکت تابان در ابتدای سال 1 با سرمایه 600,000 تأسیس شد و سال اول را با زیان بست. در ابتدای سال 6 سرمایه به 900,000 افزایش یافت. انتقال به اندوخته قانونی و مانده آن را برای هر سال محاسبه کنید. (زیان سال 1 تنها زیان انباشته شرکت است.)',
            en: 'Taban Co. was formed at the start of Year 1 with 600,000 of capital and ended its first year with a loss. At the start of Year 6 capital was increased to 900,000. Compute the transfer to the legal reserve and its balance for each year. (Year 1’s loss is the company’s only accumulated loss.)',
          },
          given: {
            head: [
              { fa: 'سال', en: 'Year' },
              { fa: 'سرمایه', en: 'Share capital' },
              { fa: 'سود (زیان) خالص', en: 'Net profit (loss)' },
            ],
            numericCols: [1, 2],
            rows: [
              [year(1), 600000, { fa: 'زیان 40,000', en: 'Loss 40,000' }],
              [year(2), 600000, 200000],
              [year(3), 600000, 300000],
              [year(4), 600000, 400000],
              [year(5), 600000, 500000],
              [year(6), 900000, 700000],
              [year(7), 900000, 800000],
            ],
          },
          hint: {
            fa: 'سقف تا سال 5 برابر 60,000 و از سال 6 برابر 90,000 است. در سال 2 ابتدا زیان انباشته را از سود کم کنید.',
            en: 'The ceiling is 60,000 up to Year 5 and 90,000 from Year 6. In Year 2, deduct the accumulated loss from profit first.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'محاسبه سالانه', en: 'Year-by-year working' },
              head: [
                { fa: 'سال', en: 'Year' },
                { fa: 'مبنای محاسبه', en: 'Base' },
                { fa: '5٪ مبنا', en: '5% of base' },
                { fa: 'جای خالی تا سقف', en: 'Room up to ceiling' },
                { fa: 'انتقال', en: 'Transfer' },
                { fa: 'مانده', en: 'Balance' },
              ],
              numericCols: [1, 2, 3, 4, 5],
              rows: [
                [year(1), 0, 0, 60000, 0, 0],
                [year(2), 160000, 8000, 60000, 8000, 8000],
                [year(3), 300000, 15000, 52000, 15000, 23000],
                [year(4), 400000, 20000, 37000, 20000, 43000],
                [year(5), 500000, 25000, 17000, 17000, 60000],
                [year(6), 700000, 35000, 30000, 30000, 90000],
                [year(7), 800000, 40000, 0, 0, 90000],
                [total, blank, blank, blank, 90000, blank],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'سال 1 و 2', en: 'Years 1 and 2' },
                  text: {
                    fa: 'در سال زیان انتقالی نیست. در سال 2 مبنا = 200,000 − 40,000 زیان انباشته = 160,000؛ انتقال 8,000.',
                    en: 'No transfer in a loss year. In Year 2 the base = 200,000 − 40,000 accumulated loss = 160,000; transfer 8,000.',
                  },
                },
                {
                  title: { fa: 'سال 5: رسیدن به سقف', en: 'Year 5: hitting the ceiling' },
                  text: {
                    fa: '5٪ × 500,000 = 25,000، اما تا سقف 60,000 فقط 17,000 جا هست؛ انتقال 17,000.',
                    en: '5% × 500,000 = 25,000, but only 17,000 of room remains below 60,000; transfer 17,000.',
                  },
                },
                {
                  title: { fa: 'سال 6 و 7: پس از افزایش سرمایه', en: 'Years 6 and 7: after the capital increase' },
                  text: {
                    fa: 'سقف جدید 10٪ × 900,000 = 90,000. سال 6: کمترِ 35,000 و 30,000، یعنی 30,000. سال 7: سقف پر است و انتقالی لازم نیست.',
                    en: 'New ceiling 10% × 900,000 = 90,000. Year 6: lower of 35,000 and 30,000, so 30,000. Year 7: the ceiling is full and no transfer is required.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'انتقال‌ها: 0، 8,000، 15,000، 20,000، 17,000، 30,000 و 0؛ مانده پایان سال 7: 90,000.',
            en: 'Transfers: 0, 8,000, 15,000, 20,000, 17,000, 30,000 and 0; balance at the end of Year 7: 90,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'یک چرخه کامل سود سهام', en: 'A full dividend cycle' },
          difficulty: 'medium',
          problem: {
            fa: 'شرکت سپهر 20,000 سهم 100 واحدی دارد (سرمایه 2,000,000) و اندوخته قانونی آن در ابتدای سال 5 برابر 120,000 است. سود خالص سال 5 برابر 600,000 است. مجمع عمومی در ماه 3 سال 6 سود هر سهم را 12 تصویب می‌کند. شرکت در ماه 4 مبلغ 168,000 پرداخت می‌کند و باقی تا پایان سال 6 پرداخت نمی‌شود. (الف) ثبت‌های پایان سال 5، (ب) ثبت تصویب و پرداخت، (ج) نسبت تقسیم سود و سود هر سهم سال 5 و (د) مانده سود سهام پرداختنی در پایان سال 6 را به دست آورید.',
            en: 'Sepehr Co. has 20,000 shares of 100 (capital 2,000,000), and its legal reserve is 120,000 at the start of Year 5. Net profit for Year 5 is 600,000. The general meeting in month 3 of Year 6 approves a dividend of 12 per share. The company pays 168,000 in month 4, and the rest is still unpaid at the end of Year 6. Find (a) the Year 5 year-end entries, (b) the approval and payment entries, (c) the payout ratio and Year 5 EPS, and (d) dividends payable at the end of Year 6.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اندوخته قانونی', en: 'Legal reserve' },
                  text: {
                    fa: '5٪ × 600,000 = 30,000؛ جای خالی تا سقف 200,000 − 120,000 = 80,000؛ پس انتقال 30,000.',
                    en: '5% × 600,000 = 30,000; room below the ceiling 200,000 − 120,000 = 80,000; so transfer 30,000.',
                  },
                },
                {
                  title: { fa: 'سود سهام', en: 'Dividend' },
                  text: {
                    fa: '12 × 20,000 = 240,000. حداقل قانونی 10٪ × 600,000 = 60,000 رعایت شده است.',
                    en: '12 × 20,000 = 240,000. The legal minimum of 10% × 600,000 = 60,000 is met.',
                  },
                },
                {
                  title: { fa: 'نسبت‌ها', en: 'Ratios' },
                  text: {
                    fa: 'نسبت تقسیم سود = 240,000 ÷ 600,000 = 40٪. سود هر سهم = 600,000 ÷ 20,000 = 30.',
                    en: 'Payout ratio = 240,000 ÷ 600,000 = 40%. EPS = 600,000 ÷ 20,000 = 30.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'پایان سال 5', en: 'End of Year 5' },
                  lines: [
                    { account: ac.incSum, debit: 600000 },
                    { account: ac.re, credit: 600000 },
                  ],
                },
                {
                  date: { fa: 'پایان سال 5', en: 'End of Year 5' },
                  lines: [
                    { account: ac.re, debit: 30000 },
                    { account: ac.legal, credit: 30000 },
                  ],
                },
                {
                  date: { fa: 'ماه 3، سال 6', en: 'Month 3, Year 6' },
                  lines: [
                    { account: ac.re, debit: 240000 },
                    { account: ac.divPayable, credit: 240000 },
                  ],
                },
                {
                  date: { fa: 'ماه 4، سال 6', en: 'Month 4, Year 6' },
                  lines: [
                    { account: ac.divPayable, debit: 168000 },
                    { account: ac.cash, credit: 168000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'اندوخته قانونی 30,000؛ سود سهام 240,000؛ نسبت تقسیم 40٪؛ سود هر سهم 30؛ سود سهام پرداختنی پایان سال 6: 72,000.',
            en: 'Legal reserve 30,000; dividend 240,000; payout 40%; EPS 30; dividends payable at the end of Year 6: 72,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'افزایش سرمایه و حق تقدم', en: 'A capital increase and pre-emptive rights' },
          difficulty: 'hard',
          problem: {
            fa: 'شرکت نیکان 20,000 سهم 100 واحدی دارد. سود انباشته 900,000 و اندوخته قانونی 200,000 است. مجمع فوق‌العاده افزایش سرمایه به 2,800,000 را تصویب می‌کند: 500,000 از محل آورده نقدی و 300,000 از محل سود انباشته. لیلا 2,000 سهم (10٪) دارد و از حق تقدم خود کامل استفاده می‌کند. (الف) ثبت‌ها را بنویسید. (ب) اثر بر جمع حقوق مالکانه چیست؟ (ج) لیلا چند سهم جدید می‌گیرد، چقدر می‌پردازد و درصد مالکیتش چه می‌شود؟ (د) سقف جدید اندوخته قانونی چقدر است؟',
            en: 'Nikan Co. has 20,000 shares of 100. Retained earnings are 900,000 and the legal reserve 200,000. An extraordinary general meeting approves an increase to 2,800,000: 500,000 from cash contributions and 300,000 from retained earnings. Leila holds 2,000 shares (10%) and takes up her full pre-emptive right. (a) Write the entries. (b) What is the effect on total equity? (c) How many new shares does Leila receive, how much does she pay, and what is her new holding? (d) What is the new legal-reserve ceiling?',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: '(الف) ثبت‌ها', en: '(a) Entries' },
              entries: [
                {
                  date: { fa: 'دریافت آورده نقدی', en: 'Cash contributions received' },
                  lines: [
                    { account: ac.cash, debit: 500000 },
                    { account: ac.deposit, credit: 500000 },
                  ],
                },
                {
                  date: { fa: 'ثبت افزایش سرمایه', en: 'Increase registered' },
                  lines: [
                    { account: ac.deposit, debit: 500000 },
                    { account: ac.re, debit: 300000 },
                    { account: ac.capital, credit: 800000 },
                  ],
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: '(ب) حقوق مالکانه پیش و پس از افزایش', en: '(b) Equity before and after' },
              head: [
                { fa: 'جزء', en: 'Component' },
                { fa: 'پیش', en: 'Before' },
                { fa: 'پس', en: 'After' },
              ],
              numericCols: [1, 2],
              rows: [
                [ac.capital, 2000000, 2800000],
                [ac.legal, 200000, 200000],
                [ac.re, 900000, 600000],
                [total, 3100000, 3600000],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: '(ج) سهم لیلا', en: '(c) Leila’s share' },
                  text: {
                    fa: 'سهام نقدی جدید 5,000 و سهام جایزه 3,000 است. لیلا 10٪ هر کدام را می‌گیرد: 500 سهم نقدی (پرداخت 500 × 100 = 50,000) و 300 سهم جایزه بدون پرداخت. مجموع 2,800 سهم از 28,000، یعنی همان 10٪.',
                    en: 'There are 5,000 new cash shares and 3,000 bonus shares. Leila gets 10% of each: 500 cash shares (paying 500 × 100 = 50,000) and 300 bonus shares for nothing. In total 2,800 of 28,000 shares, still 10%.',
                  },
                },
                {
                  title: { fa: '(د) سقف اندوخته قانونی', en: '(d) Legal-reserve ceiling' },
                  text: {
                    fa: '10٪ × 2,800,000 = 280,000. اندوخته فعلی 200,000 است، پس انتقال 5٪ سود از سال‌های بعد دوباره آغاز می‌شود.',
                    en: '10% × 2,800,000 = 280,000. The reserve is 200,000, so the 5% transfers start again from future profits.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'جمع حقوق مالکانه فقط 500,000 افزایش می‌یابد (از 3,100,000 به 3,600,000)؛ لیلا 800 سهم جدید می‌گیرد و 50,000 می‌پردازد و 10٪ می‌ماند؛ سقف جدید اندوخته 280,000.',
            en: 'Total equity rises by only 500,000 (from 3,100,000 to 3,600,000); Leila receives 800 new shares, pays 50,000 and stays at 10%; the new reserve ceiling is 280,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'صورت تغییرات در حقوق مالکانه', en: 'A statement of changes in equity' },
          difficulty: 'hard',
          problem: {
            fa: 'شرکت رهنما سال را با این مانده‌ها شروع می‌کند: سرمایه 1,500,000، اندوخته قانونی 90,000، اندوخته اختیاری 60,000 و سود انباشته 540,000. رویدادهای سال: مجمع عمومی سود سهام 200,000 و انتقال 50,000 به اندوخته اختیاری را تصویب کرد؛ سرمایه به 2,000,000 افزایش یافت و ثبت شد (250,000 آورده نقدی و 250,000 از محل سود انباشته)؛ سود خالص سال 800,000 بود. صورت تغییرات در حقوق مالکانه را تهیه کنید.',
            en: 'Rahnama Co. starts the year with: share capital 1,500,000, legal reserve 90,000, optional reserve 60,000 and retained earnings 540,000. During the year the general meeting approved a 200,000 dividend and a 50,000 transfer to the optional reserve; capital was increased to 2,000,000 and registered (250,000 in cash and 250,000 from retained earnings); net profit was 800,000. Prepare the statement of changes in equity.',
          },
          hint: {
            fa: 'اندوخته قانونی را بر مبنای سرمایه پایان سال کنترل کنید: سقف 200,000.',
            en: 'Check the legal reserve against year-end capital: a 200,000 ceiling.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اندوخته قانونی', en: 'Legal reserve' },
                  text: {
                    fa: '5٪ × 800,000 = 40,000؛ جای خالی 200,000 − 90,000 = 110,000؛ انتقال 40,000.',
                    en: '5% × 800,000 = 40,000; room 200,000 − 90,000 = 110,000; transfer 40,000.',
                  },
                },
                {
                  title: { fa: 'سود انباشته پایان سال', en: 'Closing retained earnings' },
                  text: {
                    fa: '540,000 − 200,000 − 50,000 − 250,000 + 800,000 − 40,000 = 800,000.',
                    en: '540,000 − 200,000 − 50,000 − 250,000 + 800,000 − 40,000 = 800,000.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'شرکت رهنما: صورت تغییرات در حقوق مالکانه', en: 'Rahnama Co.: statement of changes in equity' },
              head: [
                { fa: 'شرح', en: 'Description' },
                { fa: 'سرمایه', en: 'Share capital' },
                { fa: 'اندوخته قانونی', en: 'Legal reserve' },
                { fa: 'اندوخته اختیاری', en: 'Optional reserve' },
                { fa: 'سود انباشته', en: 'Retained earnings' },
                { fa: 'جمع', en: 'Total' },
              ],
              numericCols: [1, 2, 3, 4, 5],
              rows: [
                [{ fa: 'مانده ابتدای سال', en: 'Opening balance' }, 1500000, 90000, 60000, 540000, 2190000],
                [{ fa: 'سود سهام مصوب', en: 'Dividends declared' }, blank, blank, blank, neg('200,000'), neg('200,000')],
                [{ fa: 'انتقال به اندوخته اختیاری', en: 'Transfer to optional reserve' }, blank, blank, 50000, neg('50,000'), 0],
                [{ fa: 'افزایش سرمایه: آورده نقدی', en: 'Capital increase: cash' }, 250000, blank, blank, blank, 250000],
                [{ fa: 'افزایش سرمایه: از محل سود انباشته', en: 'Capital increase: from retained earnings' }, 250000, blank, blank, neg('250,000'), 0],
                [{ fa: 'سود خالص سال', en: 'Net profit for the year' }, blank, blank, blank, 800000, 800000],
                [{ fa: 'انتقال به اندوخته قانونی', en: 'Transfer to legal reserve' }, blank, 40000, blank, neg('40,000'), 0],
                [{ fa: 'مانده پایان سال', en: 'Closing balance' }, 2000000, 130000, 110000, 800000, 3040000],
              ],
            },
          ],
          answer: {
            fa: 'مانده پایان سال: سرمایه 2,000,000، اندوخته قانونی 130,000، اندوخته اختیاری 110,000، سود انباشته 800,000؛ جمع 3,040,000.',
            en: 'Closing balances: capital 2,000,000, legal reserve 130,000, optional reserve 110,000, retained earnings 800,000; total 3,040,000.',
          },
        },
      ],
    },
    /* ───────────────────────────── 9 ───────────────────────────── */
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'در شرکت سهامی، مسئولیت سهامداران به مبلغ اسمی سهامشان محدود است و حقوق مالکانه از سرمایه، اندوخته‌ها و سود انباشته تشکیل می‌شود.',
              en: 'In a joint-stock company, shareholders’ liability is limited to their shares’ nominal value, and equity consists of share capital, reserves and retained earnings.',
            },
            {
              fa: 'سرمایه = تعداد سهام × ارزش اسمی؛ تعهد پرداخت‌نشده از سرمایه کسر می‌شود و مازاد قیمت انتشار بر ارزش اسمی صرف سهام است.',
              en: 'Share capital = shares × nominal value; unpaid subscriptions are deducted from it, and any issue price above nominal is share premium.',
            },
            {
              fa: 'هر سال 5٪ سود خالص (پس از کسر زیان انباشته) به اندوخته قانونی می‌رود تا به 10٪ سرمایه برسد؛ اندوخته قانونی قابل تقسیم نیست.',
              en: 'Each year 5% of net profit (after accumulated losses) goes to the legal reserve until it reaches 10% of capital; the legal reserve cannot be distributed.',
            },
            {
              fa: 'سود سهام با تصویب مجمع عمومی بدهی می‌شود (بدهکار سود انباشته، بستانکار سود سهام پرداختنی) و هزینه نیست.',
              en: 'Dividends become a liability when the general meeting approves them (debit retained earnings, credit dividends payable) and are not an expense.',
            },
            {
              fa: 'افزایش سرمایه نقدی حقوق مالکانه را زیاد می‌کند؛ افزایش از محل اندوخته‌ها و سود انباشته فقط جابه‌جایی درون حقوق مالکانه است.',
              en: 'A cash capital increase raises equity; an increase from reserves and retained earnings only reshuffles equity.',
            },
            {
              fa: 'صورت تغییرات در حقوق مالکانه حرکت هر جزء را نشان می‌دهد و سود پایه هر سهم = سود خالص ÷ میانگین موزون سهام.',
              en: 'The statement of changes in equity shows how each component moved, and basic EPS = net profit ÷ weighted average shares.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'شرکت سهامی خاص و عام', en: 'Private and public joint-stock company' },
              def: {
                fa: 'شرکت‌هایی که سرمایه‌شان به سهام تقسیم شده؛ سهامی خاص نمی‌تواند سهام را به عموم عرضه کند و سهامی عام می‌تواند.',
                en: 'Companies whose capital is divided into shares; a private one cannot offer shares to the public, a public one can.',
              },
            },
            {
              term: { fa: 'ارزش اسمی', en: 'Nominal (par) value' },
              def: {
                fa: 'مبلغ ثبت‌شده هر سهم در اساسنامه و ورقه سهم، مستقل از قیمت بازار.',
                en: 'The amount per share set in the articles and on the certificate, independent of market price.',
              },
            },
            {
              term: { fa: 'سرمایه تعهدشده و پرداخت‌شده', en: 'Subscribed and paid-in capital' },
              def: {
                fa: 'تعهدشده: کل سهامی که سهامداران پذیرفته‌اند؛ پرداخت‌شده: بخشی که واقعاً به شرکت پرداخت شده است.',
                en: 'Subscribed: all the shares shareholders have taken on; paid-in: the part actually paid to the company.',
              },
            },
            {
              term: { fa: 'صرف سهام', en: 'Share premium' },
              def: {
                fa: 'مازاد مبلغ دریافتی از انتشار سهام بر ارزش اسمی آن؛ جزء حقوق مالکانه.',
                en: 'The excess of the issue price over nominal value; part of equity.',
              },
            },
            {
              term: { fa: 'اندوخته قانونی', en: 'Legal reserve' },
              def: {
                fa: 'یک‌بیستم سود خالص هر سال که طبق قانون تجارت کنار گذاشته می‌شود تا به یک‌دهم سرمایه برسد؛ قابل تقسیم نیست.',
                en: 'One-twentieth of each year’s net profit set aside under the Commercial Code until it reaches one-tenth of capital; not distributable.',
              },
            },
            {
              term: { fa: 'اندوخته اختیاری', en: 'Optional reserve' },
              def: {
                fa: 'اندوخته‌ای که اساسنامه یا مجمع عمومی برای هدفی مشخص تعیین می‌کند.',
                en: 'A reserve set by the articles or the general meeting for a stated purpose.',
              },
            },
            {
              term: { fa: 'سود انباشته', en: 'Retained earnings' },
              def: {
                fa: 'سودهای تقسیم‌نشده‌ای که به اندوخته یا سرمایه هم منتقل نشده‌اند.',
                en: 'Undistributed profits not transferred to reserves or capital.',
              },
            },
            {
              term: { fa: 'سود سهام پرداختنی', en: 'Dividends payable' },
              def: {
                fa: 'بدهی شرکت به سهامداران بابت سود سهامی که مجمع تصویب کرده و هنوز پرداخت نشده است.',
                en: 'The company’s liability for dividends approved by the general meeting but not yet paid.',
              },
            },
            {
              term: { fa: 'حق تقدم', en: 'Pre-emptive right' },
              def: {
                fa: 'حق سهامداران فعلی برای خرید سهام جدید نقدی به نسبت سهامشان.',
                en: 'Existing shareholders’ right to buy new cash shares in proportion to their holdings.',
              },
            },
            {
              term: { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' },
              def: {
                fa: 'صورتی که حرکت هر جزء حقوق مالکانه را از ابتدا تا پایان دوره نشان می‌دهد.',
                en: 'A statement showing how each component of equity moved from the start to the end of the period.',
              },
            },
            {
              term: { fa: 'سود پایه هر سهم', en: 'Basic earnings per share' },
              def: {
                fa: 'سود خالص متعلق به سهامداران عادی تقسیم بر میانگین موزون تعداد سهام عادی.',
                en: 'Net profit attributable to ordinary shareholders divided by the weighted average number of ordinary shares.',
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
        fa: 'در کدام شکل کسب‌وکار، مسئولیت مالکان به مبلغ اسمی سهامشان محدود است و شرکت می‌تواند برای جمع‌آوری سرمایه سهام خود را به عموم عرضه کند؟',
        en: 'In which business form is owners’ liability limited to their shares’ nominal value, and can the company offer its shares to the public to raise capital?',
      },
      options: [
        { fa: 'مؤسسه انفرادی', en: 'Sole proprietorship' },
        { fa: 'شرکت تضامنی', en: 'General partnership company' },
        { fa: 'شرکت سهامی عام', en: 'Public joint-stock company' },
        { fa: 'شرکت با مسئولیت محدود', en: 'Limited-liability company' },
      ],
      answer: 2,
      explain: {
        fa: 'فقط شرکت سهامی عام می‌تواند سهام را به عموم عرضه کند و مسئولیت سهامداران آن محدود است. شرکت با مسئولیت محدود هم مسئولیت محدود دارد اما سرمایه‌اش به سهام قابل عرضه عمومی تقسیم نمی‌شود؛ در مؤسسه انفرادی و شرکت تضامنی مسئولیت مالک می‌تواند فراتر از آورده‌اش باشد.',
        en: 'Only a public joint-stock company can offer shares to the public, and its shareholders’ liability is limited. A limited-liability company also limits liability, but its capital is not divided into shares that can be offered publicly; in a sole proprietorship or a general partnership, an owner’s liability can exceed their contribution.',
      },
    },
    {
      q: {
        fa: 'شرکتی 50,000 سهم با ارزش اسمی هر سهم 100 دارد. سرمایه ثبت‌شده آن چقدر است؟',
        en: 'A company has 50,000 shares with a nominal value of 100 each. What is its registered capital?',
      },
      options: [
        { fa: '500,000', en: '500,000' },
        { fa: '5,000,000', en: '5,000,000' },
        { fa: '50,000,000', en: '50,000,000' },
        { fa: 'به قیمت بازار سهام بستگی دارد', en: 'It depends on the market price' },
      ],
      answer: 1,
      explain: {
        fa: 'سرمایه = تعداد سهام × ارزش اسمی = 50,000 × 100 = 5,000,000. قیمت بازار سهم بر حساب سرمایه اثری ندارد؛ سرمایه همیشه به ارزش اسمی ثبت می‌شود.',
        en: 'Capital = shares × nominal value = 50,000 × 100 = 5,000,000. The market price has no effect on the Share capital account, which is always recorded at nominal value.',
      },
    },
    {
      q: {
        fa: 'سرمایه شرکتی 1,000,000، مانده اندوخته قانونی 90,000 و سود خالص امسال 400,000 است (بدون زیان انباشته). انتقال امسال به اندوخته قانونی چقدر است؟',
        en: 'A company’s capital is 1,000,000, its legal reserve is 90,000 and this year’s net profit is 400,000 (no accumulated losses). How much goes to the legal reserve this year?',
      },
      options: [
        { fa: '20,000', en: '20,000' },
        { fa: '40,000', en: '40,000' },
        { fa: '10,000', en: '10,000' },
        { fa: 'صفر', en: 'Zero' },
      ],
      answer: 2,
      explain: {
        fa: '5٪ × 400,000 = 20,000، اما سقف 10٪ × 1,000,000 = 100,000 است و فقط 10,000 جا باقی مانده؛ پس انتقال 10,000. عدد 20,000 سقف را نادیده گرفته و 40,000 نرخ 10٪ را به‌جای 5٪ به کار برده است.',
        en: '5% × 400,000 = 20,000, but the ceiling is 10% × 1,000,000 = 100,000 and only 10,000 of room is left, so the transfer is 10,000. The 20,000 ignores the ceiling and 40,000 applies 10% instead of 5%.',
      },
    },
    {
      q: {
        fa: 'کدام عبارت درباره اندوخته قانونی درست است؟',
        en: 'Which statement about the legal reserve is true?',
      },
      options: [
        { fa: 'با تصویب مجمع عمومی می‌توان آن را به‌عنوان سود سهام تقسیم کرد', en: 'It can be paid out as a dividend if the general meeting approves' },
        { fa: 'نمی‌توان آن را میان صاحبان سهام تقسیم کرد', en: 'It cannot be distributed to shareholders' },
        { fa: 'باید معادل آن وجه نقد در حساب بانکی جداگانه نگه داشته شود', en: 'An equal amount of cash must be kept in a separate bank account' },
        { fa: 'هزینه‌ای است که در صورت سود و زیان ثبت می‌شود', en: 'It is an expense in the income statement' },
      ],
      answer: 1,
      explain: {
        fa: 'قانون تجارت تقسیم اندوخته قانونی میان صاحبان سهام را منع کرده است، حتی با تصویب مجمع. اندوخته برچسبی روی بخشی از حقوق مالکانه است، نه پول نقد جداشده، و انتقال به آن هزینه نیست بلکه تخصیص سود است.',
        en: 'The Commercial Code forbids distributing the legal reserve to shareholders, even with the meeting’s approval. A reserve is a label on part of equity, not cash set aside, and transferring to it is an appropriation of profit, not an expense.',
      },
    },
    {
      q: {
        fa: 'مجمع عمومی سود سهام 180,000 را تصویب می‌کند که ماه بعد پرداخت خواهد شد. ثبت روز تصویب کدام است؟',
        en: 'The general meeting approves a 180,000 dividend to be paid next month. What is the entry on the approval date?',
      },
      options: [
        { fa: 'بدهکار هزینه سود سهام / بستانکار موجودی نقد', en: 'Dr Dividend expense / Cr Cash' },
        { fa: 'بدهکار سود سهام پرداختنی / بستانکار سود انباشته', en: 'Dr Dividends payable / Cr Retained earnings' },
        { fa: 'تا پرداخت ثبتی لازم نیست', en: 'No entry until payment' },
        { fa: 'بدهکار سود انباشته / بستانکار سود سهام پرداختنی', en: 'Dr Retained earnings / Cr Dividends payable' },
      ],
      answer: 3,
      explain: {
        fa: 'با تصویب مجمع تعهد ایجاد می‌شود: سود انباشته کم می‌شود (بدهکار) و بدهی سود سهام پرداختنی ایجاد می‌شود (بستانکار). سود سهام هزینه نیست و صبر کردن تا روز پرداخت، بدهی موجود را از ترازنامه پنهان می‌کند.',
        en: 'The approval creates the obligation: retained earnings fall (debit) and dividends payable arises (credit). Dividends are not an expense, and waiting until payment would hide an existing liability from the balance sheet.',
      },
    },
    {
      q: {
        fa: 'شرکتی با 25,000 سهم، 300,000 سود سهام تقسیم می‌کند. سود هر سهم چقدر است؟',
        en: 'A company with 25,000 shares distributes 300,000 of dividends. What is the dividend per share?',
      },
      options: [
        { fa: '12', en: '12' },
        { fa: '120', en: '120' },
        { fa: '1.2', en: '1.2' },
        { fa: '8.33', en: '8.33' },
      ],
      answer: 0,
      explain: {
        fa: 'سود هر سهم = 300,000 ÷ 25,000 = 12. گزینه‌های 120 و 1.2 خطای جای ممیز هستند و 8.33 حاصل تقسیم وارونه (25,000 ÷ 300,000 × 100) است.',
        en: 'Dividend per share = 300,000 ÷ 25,000 = 12. The 120 and 1.2 are decimal-point slips, and 8.33 comes from dividing the wrong way round (25,000 ÷ 300,000 × 100).',
      },
    },
    {
      q: {
        fa: 'شرکتی 400,000 از سود انباشته را به سرمایه منتقل می‌کند (سهام جایزه). جمع حقوق مالکانه چه تغییری می‌کند؟',
        en: 'A company transfers 400,000 of retained earnings to share capital (a bonus issue). How does total equity change?',
      },
      options: [
        { fa: '400,000 افزایش می‌یابد', en: 'It rises by 400,000' },
        { fa: '400,000 کاهش می‌یابد', en: 'It falls by 400,000' },
        { fa: 'تغییری نمی‌کند', en: 'It does not change' },
        { fa: 'به اندازه 400,000 وجه نقد وارد شرکت می‌شود', en: 'It brings 400,000 of cash into the company' },
      ],
      answer: 2,
      explain: {
        fa: 'سرمایه 400,000 زیاد و سود انباشته 400,000 کم می‌شود؛ هر دو جزء حقوق مالکانه‌اند، پس جمع ثابت می‌ماند. هیچ پول تازه‌ای وارد نمی‌شود؛ این تفاوت اصلی با افزایش سرمایه نقدی است.',
        en: 'Capital rises by 400,000 and retained earnings fall by 400,000; both are equity, so the total is unchanged. No new money comes in; that is the key difference from a cash increase.',
      },
    },
    {
      q: {
        fa: 'سود خالص سال 460,000 است. شرکت سال را با 8,000 سهم شروع کرد و در ابتدای ماه 7، 4,000 سهم جدید به‌صورت نقدی منتشر کرد. سود پایه هر سهم چقدر است؟',
        en: 'Net profit for the year is 460,000. The company started the year with 8,000 shares and issued 4,000 new shares for cash at the start of month 7. What is basic EPS?',
      },
      options: [
        { fa: '38.33', en: '38.33' },
        { fa: '46', en: '46' },
        { fa: '57.5', en: '57.5' },
        { fa: '40', en: '40' },
      ],
      answer: 1,
      explain: {
        fa: 'میانگین موزون = 8,000 + 4,000 × 6/12 = 10,000؛ سود هر سهم = 460,000 ÷ 10,000 = 46. عدد 38.33 از تعداد سهام پایان سال (12,000) و 57.5 از تعداد سهام ابتدای سال (8,000) به دست می‌آید؛ سهام نقدی فقط برای مدتی که منتشر شده‌اند حساب می‌شوند.',
        en: 'Weighted average = 8,000 + 4,000 × 6/12 = 10,000; EPS = 460,000 ÷ 10,000 = 46. The 38.33 uses year-end shares (12,000) and 57.5 opening shares (8,000); cash shares count only for the time they were in issue.',
      },
    },
    {
      q: {
        fa: 'سرمایه تعهدشده شرکتی 2,000,000 است و سهامداران فقط 35٪ آن را پرداخته‌اند. مانده تعهد پرداخت‌نشده چقدر است و معمولاً چگونه نشان داده می‌شود؟',
        en: 'A company’s subscribed capital is 2,000,000 and shareholders have paid only 35%. What is the unpaid commitment, and how is it usually shown?',
      },
      options: [
        {
          fa: '1,300,000، که از سرمایه در بخش حقوق مالکانه کسر می‌شود',
          en: '1,300,000, deducted from share capital within equity',
        },
        { fa: '700,000، که از سرمایه کسر می‌شود', en: '700,000, deducted from share capital' },
        { fa: '1,300,000، که دارایی جاری نشان داده می‌شود', en: '1,300,000, shown as a current asset' },
        { fa: 'تا پرداخت کامل هیچ ثبتی لازم نیست', en: 'No entry until it is fully paid' },
      ],
      answer: 0,
      explain: {
        fa: 'پرداخت‌شده 35٪ × 2,000,000 = 700,000 است؛ پس 1,300,000 پرداخت نشده. رویه رایج کسر آن از سرمایه در حقوق مالکانه است تا حقوق مالکانه فقط منابع واقعاً دریافت‌شده را نشان دهد. 700,000 مبلغ پرداخت‌شده است، نه پرداخت‌نشده.',
        en: 'Paid = 35% × 2,000,000 = 700,000, so 1,300,000 is unpaid. Common practice deducts it from share capital in equity, so equity shows only resources actually received. The 700,000 is what was paid, not what is unpaid.',
      },
    },
    {
      q: {
        fa: 'کدام یک از رویدادهای زیر جمع حقوق مالکانه شرکت را **تغییر نمی‌دهد**؟',
        en: 'Which of these events does **not** change a company’s total equity?',
      },
      options: [
        { fa: 'سود خالص سال', en: 'Net profit for the year' },
        { fa: 'تصویب سود سهام', en: 'Approval of a dividend' },
        { fa: 'افزایش سرمایه از محل آورده نقدی', en: 'A capital increase from cash contributions' },
        { fa: 'انتقال به اندوخته قانونی', en: 'A transfer to the legal reserve' },
      ],
      answer: 3,
      explain: {
        fa: 'انتقال به اندوخته قانونی فقط مبلغ را از سود انباشته به ستون اندوخته می‌برد و جمع ثابت می‌ماند. سود خالص و آورده نقدی حقوق مالکانه را زیاد می‌کنند و تصویب سود سهام آن را کم می‌کند (چون بدهی ایجاد می‌شود).',
        en: 'A legal-reserve transfer only moves an amount from retained earnings to the reserve column, so the total is unchanged. Net profit and cash contributions increase equity, and approving a dividend decreases it (because a liability is created).',
      },
    },
  ],
}
