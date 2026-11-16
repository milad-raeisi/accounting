import type { Lesson } from '../types'

/* Accounts in the operator’s books (Masar Petroleum). */
const op = {
  bank: { fa: '1110 موجودی نقد (بانک)', en: '1110 Cash at bank' },
  jointAccount: { fa: '1710 حساب مشترک مشارکت آریا (واسط)', en: '1710 Arya JV joint account (clearing)' },
  alborz: { fa: '1720 حساب جاری شریک: انرژی البرز', en: '1720 Partner current account: Alborz Energy' },
  dena: { fa: '1730 حساب جاری شریک: نفت دنا', en: '1730 Partner current account: Dena Petroleum' },
  auc: { fa: '1510 دارایی‌های در جریان تکمیل (WBS چاه AR-08، سهم 50٪)', en: '1510 Assets under construction (WBS well AR-08, 50% share)' },
  ap: { fa: '2110 حساب‌های پرداختنی', en: '2110 Accounts payable' },
  grir: { fa: '2120 حساب واسط رسید کالا و فاکتور (GR/IR)', en: '2120 GR/IR clearing account' },
  opex: { fa: '5110 هزینه عملیات تولید', en: '5110 Production operating expense' },
  ga: { fa: '5900 هزینه‌های اداری و عمومی', en: '5900 General and administrative expense' },
  ohRecovered: { fa: '5910 سربار بازیافتی از حساب مشترک', en: '5910 Overhead recovered from the joint account' },
  soleRisk: { fa: '5120 هزینه عملیات انفرادی اپراتور', en: '5120 Operator sole-risk operations expense' },
}

/* Accounts in a non-operator’s books (Alborz Energy or Dena Petroleum). */
const nonOp = {
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
  advances: { fa: 'پیش‌پرداخت به اپراتور (درخواست وجه)', en: 'Cash calls paid to operator' },
  payable: { fa: 'حساب پرداختنی به اپراتور', en: 'Payable to operator' },
  receivable: { fa: 'حساب دریافتنی از اپراتور', en: 'Receivable from operator' },
  opex: { fa: 'هزینه عملیات تولید (سهم از مشارکت)', en: 'Production operating expense (JV share)' },
  overhead: { fa: 'هزینه سربار اپراتور', en: 'Operator overhead expense' },
}

const t = (fa: string, en: string) => ({ fa, en })
const day = (n: number) => ({ fa: `روز ${n}`, en: `Day ${n}` })
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'joint-operations',
  number: 21,
  currency: 'usd',
  level: 'advanced',
  minutes: 30,
  icon: 'Users',
  tone: 'equity',
  title: { fa: 'مشارکت‌ها و عملیات مشترک', en: 'Joint Ventures and Joint Operations' },
  summary: {
    fa: 'بیاموزید شرکای یک میدان نفتی چگونه هزینه را تقسیم می‌کنند: موافقت‌نامه عملیات مشترک، اپراتور و شرکای غیرعامل، سهم مشارکت، AFE، درخواست وجه، صورت‌حساب سهم شرکا، سربار اپراتور، حسابرسی شرکا و ثبت‌های اپراتور و شریک غیرعامل.',
    en: 'Learn how the partners in an oil field share costs: the joint operating agreement, operator and non-operators, working interests, AFEs, cash calls, joint interest billing, operator overhead, partner audits, and the operator’s and non-operator’s journal entries.',
  },
  objectives: [
    {
      fa: 'نقش اپراتور و شرکای غیرعامل و مفاد اصلی موافقت‌نامه عملیات مشترک را توضیح دهید',
      en: 'Explain the roles of the operator and non-operators and the main terms of a joint operating agreement',
    },
    {
      fa: 'سهم هر شریک از AFE، درخواست وجه و هزینه‌های واقعی را با سهم مشارکت محاسبه کنید',
      en: 'Compute each partner’s share of an AFE, a cash call and actual costs using working interests',
    },
    {
      fa: 'صورت‌حساب ماهانه سهم شرکا را با سربار اپراتور تهیه کنید',
      en: 'Prepare a monthly joint interest billing statement including operator overhead',
    },
    {
      fa: 'ثبت‌های اپراتور و شریک غیرعامل را برای یک ماه کامل بنویسید',
      en: 'Record the operator’s and the non-operator’s journal entries for a full month',
    },
    {
      fa: 'یافته‌های رایج حسابرسی شرکا و راه پیشگیری از آن‌ها در ERP را بشناسید',
      en: 'Recognise common partner audit findings and how the ERP helps prevent them',
    },
  ],
  sections: [
    {
      id: 'why-jv',
      title: { fa: 'چرا شرکت‌های نفتی میدان را شریکی توسعه می‌دهند؟', en: 'Why Oil Companies Share Fields' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'توسعه میدان آریا ده‌ها میلیون هزینه دارد و هیچ‌کس نمی‌داند هر چاه جدید چقدر نفت می‌دهد. مسار پترولیوم نمی‌خواهد همه این ریسک و سرمایه را تنها بپذیرد؛ پس دو شریک آورده است: «شرکت انرژی البرز» و «شرکت نفت دنا». سه شرکت یک **موافقت‌نامه عملیات مشترک (JOA)** امضا کرده‌اند که می‌گوید چه کسی کار را اداره می‌کند، هر کس چه سهمی از هزینه و تولید دارد و حساب‌ها چگونه نگه داشته و تسویه می‌شوند.',
            en: 'Developing the Arya field costs tens of millions, and nobody knows how much oil each new well will deliver. Masar Petroleum does not want to carry all that risk and capital alone, so it has brought in two partners: Alborz Energy and Dena Petroleum. The three companies have signed a **joint operating agreement (JOA)** that says who runs the work, what share of costs and production each one has, and how the accounts are kept and settled.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**اپراتور (عامل)** شریکی است که عملیات روزانه را از طرف همه انجام می‌دهد: قرارداد می‌بندد، کارکنان را به کار می‌گیرد، به تأمین‌کنندگان پرداخت می‌کند و دفاتر **حساب مشترک (Joint Account)** را نگه می‌دارد. **شرکای غیرعامل** سهم خود را تأمین مالی می‌کنند و از راه کمیته عملیاتی تصمیم می‌گیرند. **سهم مشارکت (Working Interest)** درصدی است که هر شریک از هزینه‌ها می‌پردازد و از تولید سهم می‌برد.',
            en: 'The **operator** is the partner that runs day-to-day operations on behalf of everyone: it signs contracts, employs staff, pays vendors and keeps the books of the **joint account**. The **non-operators** fund their share and take decisions through the operating committee. A **working interest** is the percentage of costs each partner pays and of production it receives.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'شرکای مشارکت میدان آریا', en: 'The partners in the Arya field joint venture' },
          head: [
            { fa: 'شریک', en: 'Partner' },
            { fa: 'نقش', en: 'Role' },
            { fa: 'سهم مشارکت', en: 'Working interest' },
            { fa: 'سهم از AFE-208 (10,000,000)', en: 'Share of AFE-208 (10,000,000)' },
          ],
          numericCols: [3],
          rows: [
            [t('شرکت مسار پترولیوم', 'Masar Petroleum'), t('اپراتور', 'Operator'), t('50٪', '50%'), 5000000],
            [t('شرکت انرژی البرز', 'Alborz Energy'), t('غیرعامل', 'Non-operator'), t('30٪', '30%'), 3000000],
            [t('شرکت نفت دنا', 'Dena Petroleum'), t('غیرعامل', 'Non-operator'), t('20٪', '20%'), 2000000],
            [t('جمع', 'Total'), blank, t('100٪', '100%'), 10000000],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'IFRS 11: «مشارکت» در صنعت با «مشارکت خاص» در استاندارد فرق دارد', en: 'IFRS 11: the industry’s "joint venture" is not always the standard’s' },
          text: {
            fa: 'در صنعت نفت به هر همکاری شرکا «مشارکت» (Joint Venture) می‌گویند. اما IFRS 11 دو نوع **مشارکت** را جدا می‌کند: در **عملیات مشترک** شرکا نسبت به دارایی‌ها حق و نسبت به بدهی‌ها تعهد مستقیم دارند و هر شریک سهم خود از دارایی‌ها، بدهی‌ها، درآمدها و هزینه‌ها را ثبت می‌کند؛ در **مشارکت خاص (Joint Venture)** شرکا فقط نسبت به خالص دارایی‌های یک واحد جداگانه حق دارند و از روش ارزش ویژه استفاده می‌کنند. موافقت‌نامه‌های عملیات مشترک بالادستی که شرکت جداگانه‌ای نمی‌سازند، معمولاً **عملیات مشترک** هستند؛ مثال این درس هم همین است.',
            en: 'In the oil industry any partnership is called a "joint venture". IFRS 11, however, separates two types of joint arrangement: in a **joint operation** the parties have rights to the assets and obligations for the liabilities, and each records its share of assets, liabilities, revenue and expenses; in a **joint venture** the parties have rights only to the net assets of a separate vehicle and use the equity method. Upstream JOAs that do not create a separate company are usually **joint operations**, and that is the case in this lesson.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: ایران', en: 'In practice: Iran' },
          text: {
            fa: 'در قراردادهای نفتی ایران (IPC)، شرکت خارجی معمولاً با یک شرکت اکتشاف و تولید ایرانی واجد شرایط شریک می‌شود و رابطه شرکا با موافقت‌نامه‌ای میان خودشان تنظیم می‌شود که منطق آن مانند JOA است: سهم مشارکت، اپراتور، بودجه، درخواست وجه و حسابرسی. جزئیات هر قرارداد متفاوت است.',
            en: 'Under Iran’s petroleum contracts (IPC), a foreign company usually partners with a qualified Iranian exploration and production company, and the partners’ relationship is set by an agreement between them whose logic is like a JOA: working interests, an operator, budgets, cash calls and audits. The details differ in each contract.',
          },
        },
      ],
    },
    {
      id: 'joa-roles',
      title: { fa: 'اپراتور، شرکای غیرعامل و موافقت‌نامه', en: 'Operator, Non-operators and the JOA' },
      blocks: [
        {
          type: 'compare',
          left: {
            title: { fa: 'اپراتور (مسار پترولیوم)', en: 'Operator (Masar Petroleum)' },
            items: [
              { fa: 'عملیات روزانه و قراردادها را اداره می‌کند', en: 'Runs daily operations and contracts' },
              { fa: '100٪ هزینه‌ها را به تأمین‌کنندگان می‌پردازد', en: 'Pays vendors 100% of the costs' },
              { fa: 'دفاتر حساب مشترک را نگه می‌دارد', en: 'Keeps the joint account books' },
              { fa: 'درخواست وجه و صورت‌حساب ماهانه صادر می‌کند', en: 'Issues cash calls and monthly billings' },
              { fa: 'سهم خودش را مانند هر شریک دیگری می‌پردازد', en: 'Pays its own share like any other partner' },
            ],
          },
          right: {
            title: { fa: 'شریک غیرعامل (البرز، دنا)', en: 'Non-operator (Alborz, Dena)' },
            items: [
              { fa: 'در کمیته عملیاتی رأی می‌دهد', en: 'Votes in the operating committee' },
              { fa: 'درخواست وجه را در موعد می‌پردازد', en: 'Pays cash calls on time' },
              { fa: 'از روی صورت‌حساب اپراتور ثبت می‌کند', en: 'Records from the operator’s billing statement' },
              { fa: 'فاکتورهای تأمین‌کنندگان را نمی‌بیند', en: 'Does not see vendor invoices directly' },
              { fa: 'حق حسابرسی حساب مشترک را دارد', en: 'Has the right to audit the joint account' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: '**کمیته عملیاتی** نماینده همه شرکاست و برنامه کاری، بودجه و AFEهای بزرگ را تصویب می‌کند. قواعد رأی‌گیری (مثلاً حداقل دو شریک با جمع سهم مشخص) در JOA آمده است. اپراتور اجراکننده است، نه مالک؛ هر هزینه‌ای که خارج از برنامه و بودجه مصوب یا مفاد JOA باشد، ممکن است بر عهده خودش بماند.',
            en: 'The **operating committee** represents all partners and approves the work programme, budget and large AFEs. Its voting rules (for example at least two partners holding a stated combined interest) are set in the JOA. The operator is an executor, not an owner; any cost outside the approved programme and budget or the JOA terms may end up as its own cost.',
          },
        },
        {
          type: 'list',
          items: [
            { fa: '**سهم‌های مشارکت** و تغییر آن‌ها (واگذاری سهم).', en: '**Participating interests** and how they change (assignment).' },
            { fa: '**کمیته عملیاتی** و قواعد رأی‌گیری.', en: '**Operating committee** and voting rules.' },
            { fa: '**برنامه کاری و بودجه سالانه** و آستانه‌های AFE.', en: '**Annual work programme and budget** and AFE thresholds.' },
            { fa: '**درخواست وجه** و پیامد نپرداختن (نکول شریک).', en: '**Cash calls** and the consequences of not paying (partner default).' },
            { fa: '**عملیات انفرادی**: کاری که فقط برخی شرکا انجام می‌دهند و هزینه و منافعش فقط مال آن‌هاست.', en: '**Sole risk or non-consent operations**: work done by only some partners, whose cost and benefit belong only to them.' },
            { fa: '**روش حسابداری (Accounting Procedure)**: هزینه‌های مجاز، سربار، قیمت‌گذاری مواد، صورت‌حساب‌ها و حق حسابرسی.', en: '**Accounting procedure**: allowable charges, overhead, material pricing, billings and audit rights.' },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: پیوست حسابداری را بخوانید', en: 'In practice: read the accounting exhibit' },
          text: {
            fa: 'قراردادهای نمونه‌ای که انجمن‌های صنعت منتشر می‌کنند (برای نمونه مدل JOA انجمن بین‌المللی مذاکره‌کنندگان انرژی، AIPN) یک «روش حسابداری» پیوست دارند. حسابدار مشارکت باید این پیوست را مثل یک دستورالعمل کار بشناسد: کدام هزینه مستقیم قابل شارژ است، سربار چند درصد است، مواد انبار اپراتور با چه قیمتی به حساب مشترک می‌رود و صورت‌حساب تا چه روزی باید برسد.',
            en: 'Model contracts published by industry bodies (for example the AIPN model JOA) attach an "accounting procedure". A JV accountant should know this exhibit like a work manual: which direct costs are chargeable, what the overhead rate is, at what price material from the operator’s warehouse goes to the joint account, and by what day the billing must arrive.',
          },
        },
      ],
    },
    {
      id: 'afe-budget',
      title: { fa: 'برنامه کاری، بودجه و AFE', en: 'Work Programme, Budget and AFE' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر سال اپراتور **برنامه کاری و بودجه** سال بعد را به کمیته عملیاتی می‌دهد. برای هر کار بزرگ مشخص، مثل حفاری چاه AR-08، علاوه بر بودجه یک **AFE** هم لازم است: سندی با شماره، شرح کار، محل، برآورد هزینه به تفکیک دسته و سهم هر شریک که شرکا آن را امضا می‌کنند. اگر هزینه واقعی از آستانه مندرج در JOA فراتر رود، **AFE تکمیلی** لازم است.',
            en: 'Each year the operator presents next year’s **work programme and budget** to the operating committee. For each large specific job, such as drilling well AR-08, an **AFE** is needed on top of the budget: a document with a number, scope, location, cost estimate by category and each partner’s share, signed by the partners. If actual cost goes beyond the threshold in the JOA, a **supplementary AFE** is needed.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'AFE-208: حفاری و تکمیل چاه AR-08', en: 'AFE-208: drill and complete well AR-08' },
          head: [
            { fa: 'دسته هزینه', en: 'Cost category' },
            { fa: 'برآورد 100٪', en: 'Estimate 100%' },
            { fa: 'مسار پترولیوم 50٪', en: 'Masar Petroleum 50%' },
            { fa: 'البرز 30٪', en: 'Alborz 30%' },
            { fa: 'دنا 20٪', en: 'Dena 20%' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [t('اجاره دکل', 'Rig hire'), 4000000, 2000000, 1200000, 800000],
            [t('لوله جداری و مغزی', 'Casing and tubing'), 2000000, 1000000, 600000, 400000],
            [t('گل و مواد شیمیایی حفاری', 'Drilling fluids and chemicals'), 1000000, 500000, 300000, 200000],
            [t('سیمان‌کاری', 'Cementing'), 500000, 250000, 150000, 100000],
            [t('خدمات چاه', 'Well services'), 1300000, 650000, 390000, 260000],
            [t('آماده‌سازی محل و سایر', 'Site preparation and other'), 1200000, 600000, 360000, 240000],
            [t('جمع', 'Total'), 10000000, 5000000, 3000000, 2000000],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: t('تهیه', 'Prepare'), text: t('مهندس حفاری اپراتور برآورد را تهیه و حسابدار مشارکت سهم شرکا را اضافه می‌کند.', 'The operator’s drilling engineer prepares the estimate and the JV accountant adds the partners’ shares.') },
            { title: t('ارسال و تصویب', 'Circulate and approve'), text: t('AFE برای شرکا فرستاده و طبق قواعد JOA تصویب می‌شود.', 'The AFE is sent to the partners and approved under the JOA rules.') },
            { title: t('ساخت در ERP', 'Set up in the ERP'), text: t('عنصر WBS چاه AR-08 با AFE-208، بودجه 10,000,000، کد مشارکت آریا و نشانگر «قابل شارژ به حساب مشترک» ساخته می‌شود.', 'The WBS element for well AR-08 is created with AFE-208, a 10,000,000 budget, the Arya JV code and a "chargeable to the joint account" flag.') },
            { title: t('کنترل تعهد', 'Control commitments'), text: t('وقتی قرارداد دکل یا سفارش لوله ثبت می‌شود، ERP تعهد را از بودجه AFE کم می‌کند و پیش از عبور از سقف هشدار می‌دهد؛ سپس GRN و SES این تعهد را به هزینه واقعی تبدیل می‌کنند.', 'When the rig contract or a tubing order is created, the ERP deducts the commitment from the AFE budget and warns before the limit is crossed; GRNs and SESs then turn the commitment into actual cost.') },
            { title: t('بستن', 'Close out'), text: t('پس از تکمیل، گزارش نهایی AFE برای شرکا فرستاده می‌شود؛ بیش‌خرج بالای آستانه، AFE تکمیلی می‌خواهد.', 'After completion, the final AFE report goes to the partners; an overrun above the threshold needs a supplementary AFE.') },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'AFE مجوز است، نه پول', en: 'An AFE is an authorisation, not cash' },
          text: {
            fa: 'تصویب AFE هیچ ثبت حسابداری ندارد؛ فقط اجازه خرج کردن است. پول از راه درخواست وجه می‌آید و هزینه هنگام وقوع ثبت می‌شود. اشتباه رایج این است که بودجه AFE را با هزینه واقعی یا با پول دریافتی از شرکا یکی بگیرند.',
            en: 'Approving an AFE creates no accounting entry; it is only permission to spend. Money comes through cash calls, and cost is recorded when incurred. A common mistake is to confuse the AFE budget with actual cost or with cash received from partners.',
          },
        },
      ],
    },
    {
      id: 'cash-calls',
      title: { fa: 'درخواست وجه (Cash Call)', en: 'Cash Calls' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'اپراتور قرار نیست با پول خودش سهم شرکا را تأمین کند. هر ماه، بر اساس پیش‌بینی هزینه ماه بعد، از هر شریک **درخواست وجه** می‌کند: پیش‌پرداختی که باید تا تاریخ مشخصی به حساب بانکی مشارکت واریز شود. اگر شریکی نپردازد، JOA پیامدهایی مانند بهره دیرکرد، تعلیق حق رأی و در نهایت از دست دادن سهم را پیش‌بینی می‌کند.',
            en: 'The operator is not supposed to fund the partners’ shares with its own money. Each month, based on next month’s cost forecast, it issues a **cash call** to each partner: an advance to be paid into the joint venture bank account by a set date. If a partner does not pay, the JOA provides remedies such as late-payment interest, suspension of voting rights and ultimately loss of its interest.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'درخواست وجه مشارکت آریا برای ماه آینده', en: 'Arya JV cash call for next month' },
          head: [
            { fa: 'پیش‌بینی هزینه', en: 'Forecast cost' },
            { fa: '100٪', en: '100%' },
            { fa: 'مسار پترولیوم 50٪', en: 'Masar Petroleum 50%' },
            { fa: 'البرز 30٪', en: 'Alborz 30%' },
            { fa: 'دنا 20٪', en: 'Dena 20%' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [t('حفاری چاه AR-08 (AFE-208)', 'Drilling well AR-08 (AFE-208)'), 3000000, 1500000, 900000, 600000],
            [t('عملیات میدان', 'Field operations'), 1000000, 500000, 300000, 200000],
            [t('جمع درخواست وجه', 'Total cash call'), 4000000, 2000000, 1200000, 800000],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'دفاتر اپراتور: دریافت درخواست وجه', en: 'Operator’s books: cash calls received' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: op.bank, debit: 2000000 },
                { account: op.alborz, credit: 1200000 },
                { account: op.dena, credit: 800000 },
              ],
              memo: {
                fa: 'وجه دریافتی هنوز درآمد نیست؛ پیش‌دریافتی است که اپراتور باید خرج کار مشترک کند یا پس بدهد.',
                en: 'Cash received is not revenue; it is an advance the operator must spend on the joint work or return.',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'دفاتر انرژی البرز: پرداخت درخواست وجه', en: 'Alborz Energy’s books: cash call paid' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: nonOp.advances, debit: 1200000 },
                { account: nonOp.bank, credit: 1200000 },
              ],
              memo: {
                fa: 'دارایی است، نه هزینه؛ هزینه وقتی ثبت می‌شود که صورت‌حساب واقعی اپراتور برسد.',
                en: 'An asset, not an expense; cost is recorded when the operator’s actual billing arrives.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'بسیاری از اپراتورها برای هر مشارکت حساب بانکی جداگانه دارند تا پول شرکا با پول خودشان مخلوط نشود. مبلغ درخواست وجه هر ماه معمولاً با مانده ماه قبل (پیش‌پرداخت مازاد یا کسری) تعدیل می‌شود و اگر مشارکت ارزی باشد، ارز درخواست وجه در JOA تعیین شده است.',
            en: 'Many operators keep a separate bank account for each joint venture so partners’ money is not mixed with their own. Each month’s cash call is usually adjusted for the previous month’s balance (over- or under-funding), and if the venture runs in foreign currency, the JOA sets the currency of cash calls.',
          },
        },
      ],
    },
    {
      id: 'jib',
      title: { fa: 'صورت‌حساب سهم شرکا و سربار اپراتور', en: 'Joint Interest Billing and Operator Overhead' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در طول ماه، اپراتور همه هزینه‌های عملیات مشترک را **100٪** در حساب مشترک ثبت و پرداخت می‌کند. هزینه هنگام ثبت رسید کالا (GRN) یا تأیید برگه ثبت خدمات (SES) وارد حساب مشترک می‌شود، نه هنگام پرداخت به تأمین‌کننده؛ هر سطر روی شیء هزینه خودش (AFE-208، مرکز هزینه عملیات میدان) و با کد مشارکت آریا. در پایان ماه، **صورت‌حساب سهم شرکا (JIB: Joint Interest Billing)** اجرا می‌شود: سهم هر شریک از هزینه‌های واقعی محاسبه و پس از کسر وجه دریافتی، مانده بدهکار یا بستانکار او مشخص می‌شود.',
            en: 'During the month the operator records and pays **100%** of the joint operation’s costs in the joint account. A cost enters the joint account when its goods received note (GRN) or service entry sheet (SES) is posted, not when the vendor is paid; each line sits on its cost object (AFE-208, the field operations cost centre) with the Arya JV code. At month-end **joint interest billing (JIB)** is run: each partner’s share of actual costs is computed and, after deducting cash received, its balance due or owed is determined.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'اپراتور برای پشتیبانی دفتر مرکزی (مدیریت، حسابداری، فناوری اطلاعات، حقوقی) که مستقیم به حساب مشترک شارژ نمی‌شود، **سربار (Overhead)** می‌گیرد. روش آن در روش حسابداری JOA آمده است: معمولاً درصدی از هزینه‌ها، اغلب با نرخ پلکانی که با بزرگ شدن هزینه کم می‌شود، یا مبلغ ثابت. در این درس سربار را **3٪ هزینه‌های مستقیم** فرض می‌کنیم؛ این عدد فقط برای آموزش است.',
            en: 'For head-office support (management, accounting, IT, legal) that is not charged directly to the joint account, the operator charges **overhead**. The method is set in the JOA accounting procedure: usually a percentage of costs, often on a sliding scale that falls as costs grow, or a fixed amount. In this lesson we assume overhead of **3% of direct costs**; the figure is for teaching only.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سربار = 3٪ × 4,000,000 = 120,000؛ جمع هزینه حساب مشترک = 4,000,000 + 120,000 = 4,120,000',
            en: 'Overhead = 3% × 4,000,000 = 120,000; total joint account charges = 4,000,000 + 120,000 = 4,120,000',
          },
          note: {
            fa: 'هزینه‌های مستقیم واقعی ماه: حفاری AR-08 برابر 3,000,000 و عملیات میدان 1,000,000.',
            en: 'Actual direct costs for the month: drilling AR-08 3,000,000 and field operations 1,000,000.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تقسیم هزینه‌های واقعی ماه میان شرکا', en: 'Splitting the month’s actual costs among the partners' },
          head: [
            { fa: 'هزینه', en: 'Cost' },
            { fa: '100٪', en: '100%' },
            { fa: 'مسار پترولیوم 50٪', en: 'Masar Petroleum 50%' },
            { fa: 'البرز 30٪', en: 'Alborz 30%' },
            { fa: 'دنا 20٪', en: 'Dena 20%' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [t('حفاری AR-08 (AFE-208)', 'Drilling AR-08 (AFE-208)'), 3000000, 1500000, 900000, 600000],
            [t('عملیات میدان', 'Field operations'), 1000000, 500000, 300000, 200000],
            [t('سربار اپراتور (3٪)', 'Operator overhead (3%)'), 120000, 60000, 36000, 24000],
            [t('جمع هزینه', 'Total charges'), 4120000, 2060000, 1236000, 824000],
            [t('درخواست وجه دریافتی', 'Cash call received'), 2000000, blank, 1200000, 800000],
            [t('مانده بدهی شریک', 'Balance due from partner'), blank, blank, 36000, 24000],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'صورت‌حساب ماهانه انرژی البرز', en: 'Monthly billing statement: Alborz Energy' },
          head: [
            { fa: 'شرح', en: 'Description' },
            { fa: 'بدهکار (هزینه)', en: 'Debit (charges)' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          numericCols: [1, 2],
          rows: [
            [t('مانده ابتدای ماه', 'Opening balance'), 0, 0],
            [t('سهم 30٪ از AFE-208: حفاری AR-08', '30% share of AFE-208: drilling AR-08'), 900000, blank],
            [t('سهم 30٪ از هزینه‌های عملیات میدان', '30% share of field operating costs'), 300000, blank],
            [t('سهم 30٪ از سربار اپراتور', '30% share of operator overhead'), 36000, blank],
            [t('درخواست وجه دریافتی روز 1', 'Cash call received on Day 1'), blank, 1200000],
            [t('جمع', 'Total'), 1236000, 1200000],
            [t('مانده قابل پرداخت توسط البرز', 'Balance payable by Alborz'), 36000, blank],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در ERP: اجرای صورت‌حساب شرکا', en: 'In the ERP: the billing run' },
          text: {
            fa: 'ERP در پایان ماه همه سطرهای هزینه با کد مشارکت آریا و نشانگر «قابل شارژ» را جمع می‌کند، سربار را طبق نرخ JOA حساب می‌کند، 100٪ را به نسبت سهم‌ها میان شرکا تقسیم می‌کند (برخی ERPها به این مرحله Cutback می‌گویند) و برای هر شریک صورت‌حساب با جزئیات AFE و دسته هزینه می‌سازد. هزینه‌ای که بدون کد مشارکت ثبت شده باشد، در صورت‌حساب نمی‌آید و اپراتور باید آن را تنها بپردازد. اینکه GRN و SESهای فاکتورنشده هم در صورت‌حساب همان ماه بیایند یا نه، به روش حسابداری JOA بستگی دارد.',
            en: 'At month-end the ERP gathers every cost line carrying the Arya JV code and a "chargeable" flag, calculates overhead at the JOA rate, splits 100% among the partners by their interests (some ERPs call this step "cutback") and produces a statement for each partner with AFE and cost-category detail. A cost posted without the JV code does not reach the billing, and the operator ends up paying it alone. Whether uninvoiced GRNs and SESs are billed in the same month depends on the JOA accounting procedure.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پشت هر سطر صورت‌حساب', en: 'Behind every billing line' },
          text: {
            fa: 'شریکی که صورت‌حساب را بررسی می‌کند، باید بتواند هر سطر را تا مدرک آن دنبال کند: سهم 900,000 البرز از حفاری AR-08 به SESهای دکل و GRNهای مواد روی AFE-208 می‌رسد و هر SES به گزارش‌های روزانه امضاشده. همین مدارک بعداً در صورت بازیافت هزینه هم به کار می‌روند.',
            en: 'A partner reviewing the billing must be able to trace each line to its evidence: Alborz’s 900,000 share of drilling AR-08 leads to the rig SESs and material GRNs on AFE-208, and each SES to signed daily reports. The same records are used later in the cost-recovery statement.',
          },
        },
      ],
    },
    {
      id: 'entries',
      title: { fa: 'ثبت‌های اپراتور و شریک غیرعامل', en: 'The Operator’s and Non-operator’s Entries' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حالا همان ماه را در دفاتر دو طرف ببینیم. اپراتور ابتدا 100٪ هزینه را در حساب مشترک (یک حساب واسط) جمع می‌کند و در پایان ماه آن را میان حساب جاری شرکا و سهم خودش پخش می‌کند. شریک غیرعامل فاکتورهای تأمین‌کنندگان را نمی‌بیند و فقط از روی صورت‌حساب اپراتور ثبت می‌کند.',
            en: 'Now let’s see the same month in both sets of books. The operator first collects 100% of the costs in the joint account (a clearing account) and at month-end spreads it between the partners’ current accounts and its own share. The non-operator never sees vendor invoices and records only from the operator’s billing statement.',
          },
        },
        { type: 'h', text: { fa: 'دفاتر اپراتور (مسار پترولیوم)', en: 'The operator’s books (Masar Petroleum)' } },
        {
          type: 'journal',
          title: { fa: 'مسار پترولیوم: هزینه‌ها، سربار، صورت‌حساب و تسویه', en: 'Masar Petroleum: costs, overhead, billing and settlement' },
          entries: [
            {
              date: t('طی ماه', 'During the month'),
              lines: [
                { account: t('1710 حساب مشترک (AFE-208: حفاری AR-08)', '1710 Joint account (AFE-208: drilling AR-08)'), debit: 3000000 },
                { account: t('1710 حساب مشترک (عملیات میدان)', '1710 Joint account (field operations)'), debit: 1000000 },
                { account: op.grir, credit: 4000000 },
              ],
              memo: {
                fa: 'GRN مواد و SES دکل و خدمات، به 100٪ و با کد مشارکت آریا (خلاصه ماه).',
                en: 'GRNs for materials and SESs for the rig and services, at 100% with the Arya JV code (month summary).',
              },
            },
            {
              date: t('طی ماه', 'During the month'),
              lines: [
                { account: op.grir, debit: 4000000 },
                { account: op.ap, credit: 4000000 },
              ],
              memo: { fa: 'فاکتورهای تأمین‌کنندگان پس از تطبیق سه‌طرفه.', en: 'Vendor invoices after the three-way match.' },
            },
            {
              date: day(30),
              lines: [
                { account: op.jointAccount, debit: 120000 },
                { account: op.ohRecovered, credit: 120000 },
              ],
              memo: { fa: 'سربار 3٪ طبق JOA.', en: '3% overhead under the JOA.' },
            },
            {
              date: day(30),
              lines: [
                { account: op.alborz, debit: 1236000 },
                { account: op.dena, debit: 824000 },
                { account: op.auc, debit: 1500000 },
                { account: t('5110 هزینه عملیات تولید (سهم 50٪)', '5110 Production operating expense (50% share)'), debit: 500000 },
                { account: t('5900 هزینه‌های اداری و عمومی (سهم 50٪ سربار)', '5900 General and administrative expense (50% of overhead)'), debit: 60000 },
                { account: op.jointAccount, credit: 4120000 },
              ],
              memo: {
                fa: 'اجرای صورت‌حساب شرکا: حساب مشترک صفر می‌شود.',
                en: 'Joint interest billing run: the joint account clears to zero.',
              },
            },
            {
              date: t('روز 10 ماه بعد', 'Day 10 next month'),
              lines: [
                { account: op.bank, debit: 60000 },
                { account: op.alborz, credit: 36000 },
                { account: op.dena, credit: 24000 },
              ],
              memo: { fa: 'دریافت مانده صورت‌حساب از شرکا.', en: 'Partners pay their billing balances.' },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'حساب مشترک و حساب جاری البرز پیش از تسویه', en: 'The joint account and Alborz’s current account before settlement' },
          accounts: [
            { name: op.jointAccount, debits: [3000000, 1000000, 120000], credits: [4120000] },
            { name: op.alborz, debits: [1236000], credits: [1200000] },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'پس از صورت‌حساب، حساب مشترک صفر است و دفاتر اپراتور فقط **سهم 50٪ خودش** را نشان می‌دهد: 1,500,000 دارایی در جریان تکمیل و 500,000 هزینه عملیاتی، دقیقاً مانند یک شریک. سربار هم در نهایت 60,000 هزینه اداری اپراتور را کم کرده است (120,000 بستانکار منهای 60,000 سهم خودش)؛ یعنی سهم شرکا از هزینه پشتیبانی دفتر مرکزی.',
            en: 'After billing, the joint account is zero and the operator’s books show only **its own 50% share**: 1,500,000 of assets under construction and 500,000 of operating expense, just like a partner. Overhead has in the end reduced the operator’s administrative cost by 60,000 (the 120,000 credit less its own 60,000 share): the partners’ share of head-office support.',
          },
        },
        { type: 'h', text: { fa: 'دفاتر شریک غیرعامل (انرژی البرز)', en: 'The non-operator’s books (Alborz Energy)' } },
        {
          type: 'journal',
          title: { fa: 'البرز: ثبت صورت‌حساب و پرداخت مانده', en: 'Alborz: recording the billing and paying the balance' },
          entries: [
            {
              date: t('دریافت صورت‌حساب', 'Billing received'),
              lines: [
                { account: t('دارایی‌های در جریان تکمیل (سهم 30٪ چاه AR-08)', 'Assets under construction (30% share of well AR-08)'), debit: 900000 },
                { account: nonOp.opex, debit: 300000 },
                { account: nonOp.overhead, debit: 36000 },
                { account: nonOp.advances, credit: 1200000 },
                { account: nonOp.payable, credit: 36000 },
              ],
              memo: {
                fa: 'پیش‌پرداخت درخواست وجه مصرف و 36,000 بدهی به اپراتور ثبت می‌شود. رفتار سربارِ مربوط به پروژه‌های سرمایه‌ای به رویه شرکت بستگی دارد؛ اینجا برای سادگی هزینه شده است.',
                en: 'The cash call advance is used up and 36,000 is owed to the operator. Treatment of overhead on capital projects depends on company policy; here it is expensed for simplicity.',
              },
            },
            {
              date: t('روز 10 ماه بعد', 'Day 10 next month'),
              lines: [
                { account: nonOp.payable, debit: 36000 },
                { account: nonOp.bank, credit: 36000 },
              ],
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'آزمون سازگاری', en: 'A consistency check' },
          text: {
            fa: 'جمع سهم شرکا از دارایی چاه AR-08 در سه دفتر باید برابر 100٪ هزینه باشد: 1,500,000 (مسار پترولیوم) و 900,000 (البرز) و 600,000 (دنا)، یعنی 3,000,000. حسابدار مشارکت این آزمون را در پایان هر فصل با تأیید مانده‌ها از شرکا انجام می‌دهد.',
            en: 'The partners’ shares of the AR-08 well asset across the three sets of books must add up to 100% of the cost: 1,500,000 (Masar Petroleum), 900,000 (Alborz) and 600,000 (Dena), that is 3,000,000. The JV accountant runs this check every quarter by confirming balances with the partners.',
          },
        },
      ],
    },
    {
      id: 'audits-erp',
      title: { fa: 'حسابرسی شرکا و مشارکت در ERP', en: 'Partner Audits and the Joint Venture in the ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'JOA به شرکای غیرعامل حق می‌دهد حساب مشترک را در مهلت مشخصی پس از پایان هر سال **حسابرسی** کنند؛ اغلب شرکا با هم یک حسابرسی مشترک انجام می‌دهند. حسابرسان شرکا اسناد اپراتور را بررسی می‌کنند و **یافته‌ها (Exceptions)** را گزارش می‌دهند؛ اپراتور پاسخ می‌دهد و اقلام توافق‌شده در صورت‌حساب بعدی به نفع یا ضرر شرکا اصلاح می‌شوند. اقلام اختلافی طبق سازوکار JOA حل می‌شوند.',
            en: 'The JOA gives non-operators the right to **audit** the joint account within a set period after each year-end; partners often run one joint audit together. The partners’ auditors examine the operator’s records and report **exceptions**; the operator responds, and agreed items are corrected in the next billing in the partners’ favour or against them. Disputed items are settled through the JOA mechanism.',
          },
        },
        {
          type: 'steps',
          items: [
            { title: t('اعلام', 'Notice'), text: t('شرکا قصد حسابرسی و دوره مورد نظر را در مهلت JOA به اپراتور اعلام می‌کنند.', 'The partners notify the operator of the audit and the period it covers, within the JOA deadline.') },
            { title: t('کار میدانی', 'Fieldwork'), text: t('حسابرسان نمونه‌ای از هزینه‌ها را از صورت‌حساب تا AFE، سفارش، GRN یا SES، برگه کار و فاکتور دنبال می‌کنند.', 'The auditors trace a sample of charges from the billing to the AFE, PO, GRN or SES, field ticket and invoice.') },
            { title: t('گزارش یافته‌ها', 'Exception report'), text: t('هر یافته با مبلغ و دلیل و بند مربوط JOA گزارش می‌شود.', 'Each exception is reported with its amount, reason and the JOA clause involved.') },
            { title: t('پاسخ اپراتور', 'Operator response'), text: t('اپراتور هر یافته را می‌پذیرد یا با مدرک رد می‌کند.', 'The operator accepts each exception or rejects it with evidence.') },
            { title: t('تسویه', 'Settlement'), text: t('اقلام پذیرفته‌شده در صورت‌حساب بعدی اصلاح و اقلام اختلافی طبق سازوکار JOA پیگیری می‌شوند.', 'Accepted items are corrected in the next billing and disputed items follow the JOA mechanism.') },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'یافته‌های رایج حسابرسی شرکا', en: 'Common partner audit findings' },
          head: [
            { fa: 'یافته', en: 'Finding' },
            { fa: 'نمونه', en: 'Example' },
            { fa: 'پیشگیری در ERP', en: 'Prevention in the ERP' },
          ],
          rows: [
            [t('هزینه غیرمجاز طبق JOA', 'Cost not allowed by the JOA'), t('هزینه حقوقی دفتر مرکزی که سربار آن را پوشش می‌دهد', 'Head-office legal costs already covered by overhead'), t('مراکز هزینه دفتر مرکزی بدون نشانگر «قابل شارژ»', 'Head-office cost centres without a "chargeable" flag')],
            [t('هزینه عملیات انفرادی', 'Sole-risk cost'), t('آزمایشی که فقط اپراتور تصمیم به انجامش گرفت', 'A test only the operator decided to run'), t('WBS جدا با کد مشارکت انفرادی', 'A separate WBS with a sole-risk venture code')],
            [t('قیمت‌گذاری نادرست مواد', 'Wrong material pricing'), t('قطعه کارکرده با قیمت نو شارژ شده', 'A used part charged at the new price'), t('قاعده قیمت‌گذاری انتقال مواد طبق JOA در تنظیمات', 'JOA material-transfer pricing rules in the configuration')],
            [t('AFE اشتباه یا بیش‌خرج بدون مجوز', 'Wrong AFE or unapproved overrun'), t('هزینه چاه AR-09 روی AFE-208', 'Well AR-09 cost on AFE-208'), t('رزرو و سفارش فقط با WBS معتبر؛ کنترل بودجه AFE', 'Reservations and orders only with a valid WBS; AFE budget control')],
            [t('نبود مدرک پشتیبان', 'Missing support'), t('فاکتور بدون GRN، یا SES بدون برگه کار امضاشده', 'An invoice with no GRN, or an SES with no signed field ticket'), t('تطبیق سه‌طرفه (سفارش، GRN یا SES، فاکتور) و پیوست الکترونیکی برگه‌های کار', 'Three-way match (PO, GRN or SES, invoice) and electronic attachment of field tickets')],
            [t('سربار دوباره', 'Double overhead'), t('سربار روی هزینه‌ای که خودش سربار است', 'Overhead charged on a cost that is itself overhead'), t('پایه محاسبه سربار در تنظیمات ERP', 'The overhead base defined in the ERP configuration')],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'در ERP، حسابداری مشارکت روی چند داده پایه بنا می‌شود: **پرونده مشارکت** (مشارکت آریا، اپراتور، ارز، نرخ سربار)، **گروه سهام** (شرکا و سهم مشارکت هر کدام، با تاریخ اعتبار برای وقتی سهمی واگذار می‌شود)، و **نشانگرهای روی اشیای هزینه** (کد مشارکت، قابل شارژ یا غیرقابل شارژ، دسته هزینه سرمایه‌ای یا عملیاتی). همین نشانگرها بعداً در صورت بازیافت هزینه هم به کار می‌روند.',
            en: 'In the ERP, joint venture accounting rests on a few master records: the **venture record** (Arya JV, operator, currency, overhead rate), the **equity group** (the partners and each one’s working interest, with validity dates for when an interest is assigned), and **flags on cost objects** (venture code, chargeable or non-chargeable, capital or operating category). The same flags are later used in the cost-recovery statement.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: دو حسابرس، یک مجموعه سند', en: 'In practice: two auditors, one set of records' },
          text: {
            fa: 'در میدان‌هایی که تحت قرارداد نفتی کار می‌کنند، علاوه بر شرکا، شرکت ملی نفت یا نهاد دولتی هم هزینه‌ها را برای بازیافت هزینه حسابرسی می‌کند. هر دو حسابرس همان اسناد را می‌خواهند: AFE مصوب، سفارش خرید، GRN یا SES همراه با برگه‌های کار امضاشده، فاکتور و تأیید پرداخت. اپراتوری که اسناد را یک بار درست و کامل در ERP نگه دارد، هر دو حسابرسی را آسان‌تر می‌گذراند.',
            en: 'In fields run under a petroleum contract, besides the partners, the national oil company or a government body also audits costs for cost recovery. Both auditors ask for the same records: the approved AFE, purchase order, GRN or SES with its signed field tickets, invoice and payment approval. An operator that keeps the records correct and complete once, in the ERP, gets through both audits more easily.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'این خطاها در حسابداری مشارکت بیشترین اختلاف را میان شرکا می‌سازند:',
            en: 'These errors cause the most disputes between partners:',
          },
        },
        {
          type: 'list',
          items: [
            { fa: 'ثبت درخواست وجه دریافتی به‌عنوان درآمد در دفاتر اپراتور، یا به‌عنوان هزینه در دفاتر شریک.', en: 'Recording cash calls received as revenue in the operator’s books, or as expense in a partner’s books.' },
            { fa: 'ثبت 100٪ دارایی یا هزینه در دفاتر اپراتور به‌جای سهم خودش.', en: 'Leaving 100% of an asset or expense in the operator’s books instead of its own share.' },
            { fa: 'ثبت هزینه مشترک بدون کد مشارکت یا روی AFE اشتباه.', en: 'Posting a joint cost without the JV code or on the wrong AFE.' },
            { fa: 'استفاده از سهم مشارکت قدیمی پس از واگذاری سهم.', en: 'Using an old working interest after an interest has been assigned.' },
            { fa: 'سربار بیشتر از نرخ JOA یا سربار روی اقلامی که JOA مستثنا کرده است.', en: 'Overhead above the JOA rate, or on items the JOA excludes.' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'تمرین', en: 'Practice' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در همه تمرین‌ها سهم‌ها همان سهم‌های مشارکت آریاست: مسار پترولیوم 50٪ (اپراتور)، البرز 30٪ و دنا 20٪. نرخ سربار 3٪ عدد فرضی آموزشی است.',
            en: 'In all exercises the shares are the Arya JV interests: Masar Petroleum 50% (operator), Alborz 30% and Dena 20%. The 3% overhead rate is an illustrative teaching figure.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'سهم AFE و درخواست وجه', en: 'AFE shares and a cash call' },
          difficulty: 'easy',
          problem: {
            fa: 'AFE-211 برای تعمیر اساسی چاه AR-11 با بودجه 6,000,000 تصویب شده است. پیش‌بینی هزینه ماه آینده: 2,500,000 روی AFE-211 و 800,000 عملیات میدان. (الف) سهم هر شریک از AFE-211 و (ب) مبلغ درخواست وجه از هر شریک غیرعامل را حساب کنید.',
            en: 'AFE-211 for a major workover on well AR-11 is approved with a 6,000,000 budget. Next month’s forecast: 2,500,000 on AFE-211 and 800,000 of field operations. Compute (a) each partner’s share of AFE-211 and (b) the cash call to each non-operator.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'شریک', en: 'Partner' },
                { fa: 'سهم از AFE-211', en: 'Share of AFE-211' },
                { fa: 'سهم از پیش‌بینی ماه (3,300,000)', en: 'Share of the month’s forecast (3,300,000)' },
              ],
              numericCols: [1, 2],
              rows: [
                [t('مسار پترولیوم 50٪', 'Masar Petroleum 50%'), 3000000, 1650000],
                [t('البرز 30٪', 'Alborz 30%'), 1800000, 990000],
                [t('دنا 20٪', 'Dena 20%'), 1200000, 660000],
                [t('جمع', 'Total'), 6000000, 3300000],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'درخواست وجه فقط برای شرکای غیرعامل صادر می‌شود: البرز 990,000 و دنا 660,000. سهم 1,650,000 مسار پترولیوم را خودش تأمین می‌کند.',
                en: 'Cash calls go only to the non-operators: Alborz 990,000 and Dena 660,000. Masar Petroleum funds its own 1,650,000.',
              },
            },
          ],
          answer: {
            fa: 'AFE-211: مسار پترولیوم 3,000,000، البرز 1,800,000، دنا 1,200,000؛ درخواست وجه: البرز 990,000 و دنا 660,000.',
            en: 'AFE-211: Masar Petroleum 3,000,000, Alborz 1,800,000, Dena 1,200,000; cash calls: Alborz 990,000 and Dena 660,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'صورت‌حساب ماهانه نفت دنا', en: 'Dena Petroleum’s monthly statement' },
          difficulty: 'medium',
          problem: {
            fa: 'هزینه‌های مستقیم واقعی یک ماه: حفاری AR-08 برابر 2,400,000 و عملیات میدان 1,100,000. سربار 3٪ هزینه‌های مستقیم است. دنا در ابتدای ماه 750,000 درخواست وجه پرداخت کرده است. صورت‌حساب ماهانه دنا را تهیه کنید و بگویید چه کسی به چه کسی بدهکار است.',
            en: 'Actual direct costs for a month: drilling AR-08 2,400,000 and field operations 1,100,000. Overhead is 3% of direct costs. Dena paid a 750,000 cash call at the start of the month. Prepare Dena’s monthly statement and say who owes whom.',
          },
          solution: [
            {
              type: 'formula',
              text: {
                fa: 'سربار = 3٪ × (2,400,000 + 1,100,000) = 3٪ × 3,500,000 = 105,000',
                en: 'Overhead = 3% × (2,400,000 + 1,100,000) = 3% × 3,500,000 = 105,000',
              },
            },
            {
              type: 'table',
              head: [
                { fa: 'شرح', en: 'Description' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              numericCols: [1, 2],
              rows: [
                [t('سهم 20٪ حفاری AR-08', '20% of drilling AR-08'), 480000, blank],
                [t('سهم 20٪ عملیات میدان', '20% of field operations'), 220000, blank],
                [t('سهم 20٪ سربار', '20% of overhead'), 21000, blank],
                [t('درخواست وجه دریافتی', 'Cash call received'), blank, 750000],
                [t('جمع', 'Total'), 721000, 750000],
                [t('مانده بستانکار دنا (پیش‌پرداخت اضافه)', 'Dena’s credit balance (over-funded)'), blank, 29000],
              ],
            },
          ],
          answer: {
            fa: 'سهم دنا 721,000 است؛ دنا 29,000 اضافه پرداخته و اپراتور به او بدهکار است (معمولاً از درخواست وجه بعدی کم می‌شود).',
            en: 'Dena’s share is 721,000; Dena over-funded by 29,000 and the operator owes it that amount (usually deducted from the next cash call).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ثبت‌های دنا به‌عنوان شریک غیرعامل', en: 'Dena’s entries as a non-operator' },
          difficulty: 'medium',
          problem: {
            fa: 'با اطلاعات تمرین قبل، ثبت‌های دفاتر نفت دنا را برای پرداخت درخواست وجه و دریافت صورت‌حساب بنویسید. مانده حساب پیش‌پرداخت به اپراتور در پایان ماه چقدر است و چه معنایی دارد؟',
            en: 'Using the previous exercise, record Dena Petroleum’s entries for paying the cash call and receiving the statement. What is the balance of the cash-call advance at month-end, and what does it mean?',
          },
          hint: {
            fa: 'شریک غیرعامل هزینه‌ها را از روی صورت‌حساب، به تفکیک سرمایه‌ای و عملیاتی، ثبت می‌کند.',
            en: 'A non-operator records costs from the statement, split between capital and operating.',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: day(1),
                  lines: [
                    { account: nonOp.advances, debit: 750000 },
                    { account: nonOp.bank, credit: 750000 },
                  ],
                  memo: { fa: 'پرداخت درخواست وجه.', en: 'Cash call paid.' },
                },
                {
                  date: t('دریافت صورت‌حساب', 'Statement received'),
                  lines: [
                    { account: t('دارایی‌های در جریان تکمیل (سهم 20٪ چاه AR-08)', 'Assets under construction (20% share of well AR-08)'), debit: 480000 },
                    { account: nonOp.opex, debit: 220000 },
                    { account: nonOp.overhead, debit: 21000 },
                    { account: nonOp.advances, credit: 721000 },
                  ],
                  memo: { fa: 'مصرف پیش‌پرداخت به اندازه سهم واقعی.', en: 'The advance is used up to the actual share.' },
                },
              ],
            },
            {
              type: 'tAccounts',
              accounts: [{ name: nonOp.advances, debits: [750000], credits: [721000] }],
            },
          ],
          answer: {
            fa: 'مانده بدهکار پیش‌پرداخت 29,000 است: دارایی‌ای که از درخواست وجه بعدی کم یا از اپراتور مطالبه می‌شود.',
            en: 'The advance has a 29,000 debit balance: an asset to be offset against the next cash call or reclaimed from the operator.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'یافته حسابرسی شرکا', en: 'A partner audit finding' },
          difficulty: 'hard',
          problem: {
            fa: 'حسابرسی مشترک البرز و دنا دو یافته دارد که اپراتور می‌پذیرد: (1) 150,000 هزینه حقوقی دفتر مرکزی که JOA آن را جزو سربار می‌داند ولی مستقیم به حساب مشترک شارژ شده است؛ (2) 50,000 هزینه آزمایشی روی چاه AR-11 که فقط اپراتور تصمیم به انجامش گرفته بود (عملیات انفرادی). هر دو قلم در اصل به‌عنوان هزینه عملیات میدان صورت‌حساب شده‌اند و سربار روی آن‌ها اعمال نشده است. (الف) مبلغ اصلاح هر شریک، (ب) ثبت اپراتور و (ج) ثبت البرز را بنویسید.',
            en: 'The joint audit by Alborz and Dena has two findings the operator accepts: (1) 150,000 of head-office legal costs, which the JOA treats as covered by overhead, charged directly to the joint account; (2) 50,000 for a test on well AR-11 that only the operator chose to run (a sole-risk operation). Both were billed as field operating costs and no overhead was applied to them. Record (a) each partner’s adjustment, (b) the operator’s entries and (c) Alborz’s entry.',
          },
          hint: {
            fa: 'کل 200,000 باید هزینه خود اپراتور شود؛ سهم شرکا از آن به حساب جاری‌شان برمی‌گردد.',
            en: 'The whole 200,000 must become the operator’s own cost; the partners’ share of it goes back to their current accounts.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'شریک', en: 'Partner' },
                { fa: 'سهم از 200,000', en: 'Share of 200,000' },
                { fa: 'اثر', en: 'Effect' },
              ],
              numericCols: [1],
              rows: [
                [t('البرز 30٪', 'Alborz 30%'), 60000, t('بستانکار در صورت‌حساب بعدی', 'Credited in the next billing')],
                [t('دنا 20٪', 'Dena 20%'), 40000, t('بستانکار در صورت‌حساب بعدی', 'Credited in the next billing')],
                [t('مسار پترولیوم 50٪', 'Masar Petroleum 50%'), 100000, t('از هزینه مشارکت به هزینه خودش منتقل می‌شود', 'Moves from JV cost to its own cost')],
              ],
            },
            {
              type: 'journal',
              title: { fa: '(ب) دفاتر اپراتور', en: '(b) The operator’s books' },
              entries: [
                {
                  lines: [
                    { account: t('5900 هزینه‌های اداری و عمومی (سهم شرکا از هزینه حقوقی)', '5900 G&A expense (partners’ share of legal cost)'), debit: 75000 },
                    { account: t('5120 هزینه عملیات انفرادی (سهم شرکا از آزمایش AR-11)', '5120 Sole-risk operations expense (partners’ share of AR-11 test)'), debit: 25000 },
                    { account: op.alborz, credit: 60000 },
                    { account: op.dena, credit: 40000 },
                  ],
                  memo: {
                    fa: '50٪ از 150,000 = 75,000 و 50٪ از 50,000 = 25,000 که قبلاً به شرکا شارژ شده بود.',
                    en: '50% of 150,000 = 75,000 and 50% of 50,000 = 25,000 that had been charged to partners.',
                  },
                },
                {
                  lines: [
                    { account: op.ga, debit: 75000 },
                    { account: op.soleRisk, debit: 25000 },
                    { account: op.opex, credit: 100000 },
                  ],
                  memo: {
                    fa: 'انتقال سهم خود اپراتور از هزینه عملیات مشارکت به حساب‌های درست.',
                    en: 'Reclassifying the operator’s own share from JV operating expense to the right accounts.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: '(ج) دفاتر البرز', en: '(c) Alborz’s books' },
              entries: [
                {
                  lines: [
                    { account: nonOp.receivable, debit: 60000 },
                    { account: nonOp.opex, credit: 60000 },
                  ],
                  memo: { fa: 'هزینه‌ای که نباید می‌پرداخت، برگشت می‌خورد.', en: 'Cost it should not have borne is reversed.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'اگر روی این اقلام سربار هم گرفته شده بود، سربار آن‌ها هم باید برگشت داده می‌شد. پیشگیری: مراکز هزینه دفتر مرکزی بدون نشانگر «قابل شارژ» و WBS جداگانه برای عملیات انفرادی.',
                en: 'Had overhead been charged on these items, it would also have to be reversed. Prevention: head-office cost centres without the "chargeable" flag and a separate WBS for sole-risk work.',
              },
            },
          ],
          answer: {
            fa: 'البرز 60,000 و دنا 40,000 بستانکار می‌شوند و کل 200,000 هزینه خود اپراتور می‌شود (اداری 150,000 و عملیات انفرادی 50,000).',
            en: 'Alborz is credited 60,000 and Dena 40,000, and the whole 200,000 becomes the operator’s own cost (150,000 G&A and 50,000 sole-risk).',
          },
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'در مشارکت، اپراتور کار را اداره و 100٪ هزینه را پرداخت می‌کند و هر شریک به نسبت سهم مشارکت خود هزینه می‌دهد و تولید می‌برد.',
              en: 'In a joint venture the operator runs the work and pays 100% of costs, while each partner bears costs and receives production by its working interest.',
            },
            {
              fa: 'موافقت‌نامه‌های بالادستی بدون شرکت جداگانه معمولاً عملیات مشترک طبق IFRS 11 هستند: هر شریک سهم خود از دارایی‌ها و هزینه‌ها را ثبت می‌کند.',
              en: 'Upstream agreements without a separate company are usually joint operations under IFRS 11: each partner records its share of assets and costs.',
            },
            {
              fa: 'AFE اجازه خرج است، درخواست وجه پیش‌پرداخت است و صورت‌حساب سهم شرکا هزینه واقعی را تقسیم و با درخواست وجه تسویه می‌کند.',
              en: 'An AFE is permission to spend, a cash call is an advance, and joint interest billing splits actual cost and settles it against cash calls.',
            },
            {
              fa: 'سربار اپراتور طبق روش حسابداری JOA محاسبه می‌شود و سهم شرکا از آن، هزینه اداری اپراتور را جبران می‌کند.',
              en: 'Operator overhead follows the JOA accounting procedure, and the partners’ share of it offsets the operator’s administrative cost.',
            },
            {
              fa: 'اپراتور با حساب مشترک واسط و حساب‌های جاری شرکا کار می‌کند؛ شریک غیرعامل از روی صورت‌حساب ثبت می‌کند.',
              en: 'The operator works through a clearing joint account and partner current accounts; the non-operator records from the billing statement.',
            },
            {
              fa: 'کد مشارکت، نشانگر قابل شارژ و AFE درست روی هر سطر هزینه، پایه صورت‌حساب درست و حسابرسی بی‌دردسر است.',
              en: 'The JV code, the chargeable flag and the right AFE on every cost line are the basis of correct billing and smooth audits.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'موافقت‌نامه عملیات مشترک (JOA)', en: 'Joint operating agreement (JOA)' },
              def: {
                fa: 'قرارداد میان شرکای یک میدان که اداره عملیات، سهم‌ها، بودجه و حسابداری را تنظیم می‌کند.',
                en: 'The contract between a field’s partners that governs operations, shares, budgets and accounting.',
              },
            },
            {
              term: { fa: 'اپراتور (عامل)', en: 'Operator' },
              def: {
                fa: 'شریکی که عملیات را از طرف همه اداره می‌کند و دفاتر حساب مشترک را نگه می‌دارد.',
                en: 'The partner that runs operations on behalf of all and keeps the joint account books.',
              },
            },
            {
              term: { fa: 'شریک غیرعامل', en: 'Non-operator' },
              def: {
                fa: 'شریکی که سهم خود را تأمین مالی می‌کند، رأی می‌دهد و حق حسابرسی دارد ولی عملیات را اداره نمی‌کند.',
                en: 'A partner that funds its share, votes and may audit, but does not run operations.',
              },
            },
            {
              term: { fa: 'سهم مشارکت (Working Interest)', en: 'Working interest' },
              def: {
                fa: 'درصدی از هزینه‌ها که شریک می‌پردازد و درصدی از تولید که می‌برد.',
                en: 'The percentage of costs a partner pays and of production it receives.',
              },
            },
            {
              term: { fa: 'درخواست وجه (Cash Call)', en: 'Cash call' },
              def: {
                fa: 'درخواست پیش‌پرداخت اپراتور از شرکا بر اساس پیش‌بینی هزینه دوره بعد.',
                en: 'The operator’s request to partners for an advance based on the next period’s forecast cost.',
              },
            },
            {
              term: { fa: 'صورت‌حساب سهم شرکا (JIB)', en: 'Joint interest billing (JIB)' },
              def: {
                fa: 'تقسیم ماهانه هزینه‌های واقعی حساب مشترک میان شرکا و تسویه با درخواست وجه.',
                en: 'The monthly split of actual joint account costs among partners, settled against cash calls.',
              },
            },
            {
              term: { fa: 'سربار اپراتور', en: 'Operator overhead' },
              def: {
                fa: 'مبلغی که طبق JOA برای پشتیبانی دفتر مرکزی اپراتور به حساب مشترک شارژ می‌شود.',
                en: 'The charge to the joint account, under the JOA, for the operator’s head-office support.',
              },
            },
            {
              term: { fa: 'عملیات مشترک (IFRS 11)', en: 'Joint operation (IFRS 11)' },
              def: {
                fa: 'مشارکتی که در آن شرکا نسبت به دارایی‌ها حق و نسبت به بدهی‌ها تعهد مستقیم دارند.',
                en: 'A joint arrangement in which the parties have rights to the assets and obligations for the liabilities.',
              },
            },
            {
              term: { fa: 'حسابرسی شرکا', en: 'Partner audit' },
              def: {
                fa: 'بررسی حساب مشترک توسط شرکای غیرعامل طبق حق مندرج در JOA.',
                en: 'Non-operators’ examination of the joint account under the right granted in the JOA.',
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
        fa: 'در مشارکت میدان آریا، «اپراتور» کیست؟',
        en: 'In the Arya field joint venture, who is the "operator"?',
      },
      options: [
        { fa: 'شریکی که بیشترین سود را می‌برد', en: 'The partner that earns the most profit' },
        { fa: 'شرکت ملی نفت که مالک ذخایر است', en: 'The national oil company that owns the reserves' },
        { fa: 'هر شریکی که درخواست وجه می‌پردازد', en: 'Any partner that pays cash calls' },
        { fa: 'شریکی که عملیات روزانه را از طرف همه اداره و دفاتر حساب مشترک را نگه می‌دارد', en: 'The partner that runs daily operations for everyone and keeps the joint account books' },
      ],
      answer: 3,
      explain: {
        fa: 'اپراتور مجری عملیات از طرف همه شرکاست: قرارداد می‌بندد، پرداخت می‌کند و حساب مشترک را نگه می‌دارد. سهم او از سود به سهم مشارکتش بستگی دارد، نه به نقش اپراتوری. همه شرکا از جمله اپراتور سهم خود را تأمین می‌کنند.',
        en: 'The operator executes operations for all partners: it contracts, pays and keeps the joint account. Its share of profit depends on its working interest, not on being operator. All partners, the operator included, fund their share.',
      },
    },
    {
      q: {
        fa: 'بودجه AFE-208 برابر 10,000,000 است. سهم نفت دنا با سهم مشارکت 20٪ چقدر است؟',
        en: 'AFE-208’s budget is 10,000,000. What is Dena Petroleum’s share at a 20% working interest?',
      },
      options: [
        { fa: '200,000', en: '200,000' },
        { fa: '2,000,000', en: '2,000,000' },
        { fa: '3,000,000', en: '3,000,000' },
        { fa: '5,000,000', en: '5,000,000' },
      ],
      answer: 1,
      explain: {
        fa: '10,000,000 × 20٪ = 2,000,000. عدد 3,000,000 سهم البرز (30٪) و 5,000,000 سهم مسار پترولیوم (50٪) است؛ 200,000 یک صفر کم دارد.',
        en: '10,000,000 × 20% = 2,000,000. 3,000,000 is Alborz’s share (30%) and 5,000,000 Masar Petroleum’s (50%); 200,000 is missing a zero.',
      },
    },
    {
      q: {
        fa: 'پیش‌بینی هزینه ماه آینده 4,000,000 است. درخواست وجه از انرژی البرز (30٪) چقدر است؟',
        en: 'Next month’s forecast cost is 4,000,000. What is the cash call to Alborz Energy (30%)?',
      },
      options: [
        { fa: '1,200,000', en: '1,200,000' },
        { fa: '800,000', en: '800,000' },
        { fa: '2,000,000', en: '2,000,000' },
        { fa: '4,000,000', en: '4,000,000' },
      ],
      answer: 0,
      explain: {
        fa: '4,000,000 × 30٪ = 1,200,000. درخواست وجه هر شریک فقط سهم خودش از پیش‌بینی است؛ 800,000 سهم دنا و 2,000,000 سهم خود اپراتور است.',
        en: '4,000,000 × 30% = 1,200,000. Each partner is called only for its share of the forecast; 800,000 is Dena’s share and 2,000,000 the operator’s own.',
      },
    },
    {
      q: {
        fa: 'در یک موافقت‌نامه عملیات مشترک بالادستی بدون شرکت جداگانه، که شرکا نسبت به دارایی‌ها حق و نسبت به بدهی‌ها تعهد دارند، هر شریک طبق IFRS 11 چه می‌کند؟',
        en: 'In an upstream JOA with no separate company, where the parties have rights to assets and obligations for liabilities, what does each partner do under IFRS 11?',
      },
      options: [
        { fa: 'سرمایه‌گذاری را به روش ارزش ویژه ثبت می‌کند', en: 'Records an investment using the equity method' },
        { fa: 'فقط اپراتور همه دارایی‌ها را ثبت می‌کند', en: 'Only the operator records all the assets' },
        { fa: 'سهم خود از دارایی‌ها، بدهی‌ها، درآمدها و هزینه‌ها را ثبت می‌کند', en: 'Records its share of the assets, liabilities, revenue and expenses' },
        { fa: 'هیچ چیزی تا شروع تولید ثبت نمی‌کند', en: 'Records nothing until production starts' },
      ],
      answer: 2,
      explain: {
        fa: 'این وضعیت «عملیات مشترک» است و هر شریک سهم خود را مستقیم ثبت می‌کند. روش ارزش ویژه برای «مشارکت خاص» است که در آن شرکا فقط به خالص دارایی‌های یک واحد جداگانه حق دارند.',
        en: 'This is a "joint operation", and each partner records its share directly. The equity method is for a "joint venture", where the parties have rights only to the net assets of a separate vehicle.',
      },
    },
    {
      q: {
        fa: 'هزینه‌های مستقیم ماه 5,000,000 و سربار طبق JOA (در این مثال) 3٪ است. سهم البرز (30٪) از سربار چقدر است؟',
        en: 'Direct costs for the month are 5,000,000 and overhead under the JOA (in this example) is 3%. What is Alborz’s 30% share of overhead?',
      },
      options: [
        { fa: '150,000', en: '150,000' },
        { fa: '1,500,000', en: '1,500,000' },
        { fa: '15,000', en: '15,000' },
        { fa: '45,000', en: '45,000' },
      ],
      answer: 3,
      explain: {
        fa: 'سربار کل = 5,000,000 × 3٪ = 150,000؛ سهم البرز = 150,000 × 30٪ = 45,000. عدد 150,000 کل سربار است و 1,500,000 سهم البرز از هزینه‌های مستقیم.',
        en: 'Total overhead = 5,000,000 × 3% = 150,000; Alborz’s share = 150,000 × 30% = 45,000. 150,000 is the total overhead and 1,500,000 is Alborz’s share of direct costs.',
      },
    },
    {
      q: {
        fa: 'سهم البرز از هزینه‌های واقعی ماه 1,236,000 است و 1,200,000 درخواست وجه پرداخته است. نتیجه چیست؟',
        en: 'Alborz’s share of the month’s actual costs is 1,236,000 and it paid a 1,200,000 cash call. What is the result?',
      },
      options: [
        { fa: 'اپراتور 36,000 به البرز بدهکار است', en: 'The operator owes Alborz 36,000' },
        { fa: 'البرز 36,000 به اپراتور بدهکار است', en: 'Alborz owes the operator 36,000' },
        { fa: 'البرز 1,236,000 دیگر باید بپردازد', en: 'Alborz must pay another 1,236,000' },
        { fa: 'حساب تسویه است', en: 'The account is settled' },
      ],
      answer: 1,
      explain: {
        fa: 'هزینه 1,236,000 بیشتر از پیش‌پرداخت 1,200,000 است؛ پس البرز 36,000 کسری دارد و به اپراتور بدهکار است. اگر پیش‌پرداخت بیشتر بود، اپراتور بدهکار می‌شد.',
        en: 'Costs of 1,236,000 exceed the 1,200,000 advance, so Alborz is 36,000 short and owes the operator. Had the advance been larger, the operator would owe Alborz.',
      },
    },
    {
      q: {
        fa: 'اپراتور 1,200,000 درخواست وجه از البرز دریافت می‌کند. ثبت درست در دفاتر اپراتور کدام است؟',
        en: 'The operator receives a 1,200,000 cash call from Alborz. What is the correct entry in the operator’s books?',
      },
      options: [
        { fa: 'بدهکار بانک / بستانکار حساب جاری شریک: البرز', en: 'Dr Cash at bank / Cr Partner current account: Alborz' },
        { fa: 'بدهکار بانک / بستانکار درآمد', en: 'Dr Cash at bank / Cr Revenue' },
        { fa: 'بدهکار حساب مشترک / بستانکار بانک', en: 'Dr Joint account / Cr Cash at bank' },
        { fa: 'هیچ ثبتی تا صورت‌حساب پایان ماه لازم نیست', en: 'No entry until the month-end billing' },
      ],
      answer: 0,
      explain: {
        fa: 'وجه دریافتی پیش‌دریافت از شریک است، نه درآمد؛ پس بانک بدهکار و حساب جاری البرز بستانکار می‌شود. در پایان ماه، سهم البرز از هزینه‌ها همین حساب را بدهکار می‌کند. وجه نقد دریافت شده و باید همان روز ثبت شود.',
        en: 'The cash is an advance from a partner, not revenue, so cash is debited and Alborz’s current account credited. At month-end Alborz’s share of costs is debited to that same account. Cash has arrived, so it must be recorded that day.',
      },
    },
    {
      q: {
        fa: 'شریک غیرعامل هزینه‌های مشارکت را از روی چه منبعی در دفاترش ثبت می‌کند؟',
        en: 'From what source does a non-operator record joint venture costs in its books?',
      },
      options: [
        { fa: 'فاکتورهای اصلی تأمین‌کنندگان', en: 'The original vendor invoices' },
        { fa: 'AFE مصوب', en: 'The approved AFE' },
        { fa: 'صورت‌حساب ماهانه سهم شرکا که اپراتور می‌فرستد', en: 'The monthly joint interest billing statement the operator sends' },
        { fa: 'درخواست وجه', en: 'The cash call' },
      ],
      answer: 2,
      explain: {
        fa: 'شریک غیرعامل فاکتورهای تأمین‌کنندگان را نمی‌بیند؛ هزینه واقعی را از صورت‌حساب اپراتور ثبت می‌کند. AFE فقط مجوز و بودجه است و درخواست وجه یک پیش‌پرداخت بر اساس پیش‌بینی، نه هزینه واقعی.',
        en: 'A non-operator does not see vendor invoices; it records actual cost from the operator’s statement. The AFE is only an authorisation and budget, and the cash call is an advance based on a forecast, not actual cost.',
      },
    },
    {
      q: {
        fa: 'حسابرسی شرکا 200,000 هزینه غیرمجاز را که به حساب مشترک شارژ شده رد می‌کند. صورت‌حساب بعدی البرز (30٪) چقدر بستانکار می‌شود؟',
        en: 'A partner audit rejects 200,000 of unallowable costs charged to the joint account. By how much is Alborz (30%) credited in the next billing?',
      },
      options: [
        { fa: '40,000', en: '40,000' },
        { fa: '60,000', en: '60,000' },
        { fa: '100,000', en: '100,000' },
        { fa: '200,000', en: '200,000' },
      ],
      answer: 1,
      explain: {
        fa: '200,000 × 30٪ = 60,000. البرز فقط سهم خودش را پرداخته بود، پس فقط همان را پس می‌گیرد. 40,000 سهم دنا و 100,000 سهم اپراتور است که حالا خود اپراتور تحمل می‌کند.',
        en: '200,000 × 30% = 60,000. Alborz paid only its own share, so that is all it gets back. 40,000 is Dena’s share and 100,000 the operator’s share, which the operator now bears itself.',
      },
    },
    {
      q: {
        fa: 'کدام مورد یک یافته رایج حسابرسی شرکاست؟',
        en: 'Which of these is a common partner audit finding?',
      },
      options: [
        { fa: 'پرداخت درخواست وجه در موعد', en: 'Cash calls paid on time' },
        { fa: 'استفاده از سهم‌های مشارکت مندرج در JOA', en: 'Using the working interests stated in the JOA' },
        { fa: 'ارسال صورت‌حساب ماهانه با جزئیات AFE', en: 'Sending monthly statements with AFE detail' },
        { fa: 'شارژ هزینه عملیات انفرادی اپراتور به حساب مشترک', en: 'Charging the operator’s sole-risk costs to the joint account' },
      ],
      answer: 3,
      explain: {
        fa: 'هزینه عملیاتی که فقط اپراتور تصمیم به انجامش گرفته، طبق JOA فقط بر عهده خودش است؛ شارژ آن به حساب مشترک یک یافته رایج است. سه گزینه دیگر رفتار درست طبق JOA هستند.',
        en: 'Costs of an operation only the operator chose to run are its own under the JOA; charging them to the joint account is a common finding. The other three options are correct behaviour under the JOA.',
      },
    },
  ],
}
