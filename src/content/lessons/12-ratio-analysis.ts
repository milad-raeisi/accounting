import type { Lesson } from '../types'

export const lesson: Lesson = {
  slug: 'ratio-analysis',
  number: 12,
  level: 'advanced',
  minutes: 20,
  icon: 'TrendingUp',
  tone: 'revenue',
  title: { fa: 'تحلیل صورت‌های مالی و نسبت‌های مالی', en: 'Financial Statement and Ratio Analysis' },
  summary: {
    fa: 'صورت‌های مالی تنها زمانی به تصمیم تبدیل می‌شوند که تحلیل شوند. در این درس تحلیل افقی و عمودی را می‌آموزید و نسبت‌های نقدینگی، سودآوری، اهرمی و کارایی را برای استودیو طراحی نوا محاسبه و تفسیر می‌کنید.',
    en: 'Financial statements only turn into decisions once they are analysed. This lesson covers horizontal and vertical analysis, then calculates and interprets liquidity, profitability, leverage and efficiency ratios for Nova Design Studio.',
  },
  objectives: [
    {
      fa: 'توضیح دهید چرا صورت‌های مالی تحلیل می‌شوند و تحلیل افقی و عمودی را از هم تمیز دهید.',
      en: 'Explain why financial statements are analysed and distinguish horizontal from vertical analysis.',
    },
    {
      fa: 'نسبت‌های نقدینگی و سودآوری را محاسبه و تفسیر کنید.',
      en: 'Calculate and interpret liquidity and profitability ratios.',
    },
    {
      fa: 'نسبت‌های اهرمی و کارایی را محاسبه و تفسیر کنید.',
      en: 'Calculate and interpret leverage and efficiency ratios.',
    },
    {
      fa: 'برای یک مجموعه واقعی از صورت‌های مالی، نسبت‌ها را محاسبه کنید و نتیجه‌گیری منطقی ارائه دهید.',
      en: 'Build a full ratio set for a real set of statements and draw sensible conclusions.',
    },
    {
      fa: 'محدودیت‌های تحلیل نسبت‌ها را بشناسید.',
      en: 'Recognise the limitations of ratio analysis.',
    },
  ],
  sections: [
    {
      id: 'why-analyse',
      title: { fa: 'چرا صورت‌های مالی را تحلیل می‌کنیم؟', en: 'Why analyse financial statements?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'یک عدد به‌تنهایی معنای چندانی ندارد. سود خالص 4,850 برای نوا خوب است یا بد؟ پاسخ به این بستگی دارد که آن را با چه مقایسه کنیم: با درآمد، با دارایی‌ها، با سرمایه سارا، با ماه قبل یا با رقبا. **تحلیل صورت‌های مالی** یعنی کنار هم گذاشتن ارقام برای کشف روابط، روندها و نقاط قوت و ضعف.',
            en: 'A number on its own says very little. Is Nova’s 4,850 net income good or bad? That depends on what we compare it with: revenue, assets, Sara’s investment, last month or competitors. **Financial statement analysis** puts numbers side by side to reveal relationships, trends, strengths and weaknesses.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**نقدینگی**: آیا واحد تجاری می‌تواند بدهی‌های کوتاه‌مدتش را به‌موقع بپردازد؟',
              en: '**Liquidity**: can the business pay its short-term obligations on time?',
            },
            {
              fa: '**سودآوری**: از فروش و منابعی که در اختیار دارد، چقدر سود ایجاد می‌کند؟',
              en: '**Profitability**: how much profit does it generate from its sales and resources?',
            },
            {
              fa: '**اهرم مالی و توان پرداخت بلندمدت**: چه سهمی از منابع با بدهی تأمین شده و آیا بار بدهی قابل‌تحمل است؟',
              en: '**Leverage and solvency**: how much of the business is financed by debt, and is that burden sustainable?',
            },
            {
              fa: '**کارایی**: دارایی‌ها، مطالبات و موجودی کالا با چه سرعتی به فروش و وجه نقد تبدیل می‌شوند؟',
              en: '**Efficiency**: how quickly do assets, receivables and inventory turn into sales and cash?',
            },
          ],
        },
        { type: 'h', text: { fa: 'تحلیل افقی و تحلیل عمودی', en: 'Horizontal vs vertical analysis' } },
        {
          type: 'compare',
          left: {
            title: { fa: 'تحلیل افقی (روند)', en: 'Horizontal (trend) analysis' },
            items: [
              { fa: 'هر قلم را در طول چند دوره مقایسه می‌کند', en: 'Compares each line item across periods' },
              { fa: 'تغییر را به مبلغ و به درصد نسبت به دوره پایه نشان می‌دهد', en: 'Shows the change in amount and as a percentage of a base period' },
              { fa: 'پاسخ می‌دهد: «چه چیزی و با چه سرعتی تغییر کرده است؟»', en: 'Answers: “what changed, and how fast?”' },
              { fa: 'دست‌کم به داده‌های دو دوره نیاز دارد', en: 'Needs data for at least two periods' },
            ],
          },
          right: {
            title: { fa: 'تحلیل عمودی (هم‌اندازه)', en: 'Vertical (common-size) analysis' },
            items: [
              { fa: 'هر قلم را درصدی از یک رقم مبنا در همان دوره بیان می‌کند', en: 'Expresses each line as a percentage of a base figure in the same period' },
              { fa: 'مبنا: درآمد در صورت سود و زیان؛ جمع دارایی‌ها در ترازنامه', en: 'Base: revenue on the income statement; total assets on the balance sheet' },
              { fa: 'پاسخ می‌دهد: «ساختار ارقام چگونه است؟»', en: 'Answers: “what does the structure look like?”' },
              { fa: 'مقایسه شرکت‌هایی با اندازه‌های متفاوت را ممکن می‌کند', en: 'Makes companies of different sizes comparable' },
            ],
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'درصد تغییر (افقی) = (مبلغ دوره جاری − مبلغ دوره پایه) ÷ مبلغ دوره پایه × 100',
            en: 'Change % (horizontal) = (Current period − Base period) ÷ Base period × 100',
          },
          note: {
            fa: 'مثلاً اگر درآمد ماه دوم نوا 15,240 شود: (15,240 − 12,700) ÷ 12,700 × 100 = 20 درصد رشد.',
            en: 'E.g. if Nova’s month-two revenue were 15,240: (15,240 − 12,700) ÷ 12,700 × 100 = 20% growth.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'درصد هم‌اندازه (عمودی) = مبلغ قلم ÷ رقم مبنا × 100',
            en: 'Common-size % (vertical) = Line item ÷ Base figure × 100',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'تحلیل عمودی صورت سود و زیان نوا (درصد از درآمد)',
            en: 'Vertical analysis of Nova’s income statement (% of revenue)',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'درصد از درآمد', en: '% of revenue' },
          ],
          rows: [
            [{ fa: 'درآمد خدمات', en: 'Service revenue' }, 12700, 100],
            [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 3600, 28.3],
            [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 2500, 19.7],
            [{ fa: 'هزینه ملزومات', en: 'Supplies expense' }, 1200, 9.4],
            [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 300, 2.4],
            [{ fa: 'هزینه بهره', en: 'Interest expense' }, 150, 1.2],
            [{ fa: 'هزینه بیمه', en: 'Insurance expense' }, 100, 0.8],
            [{ fa: 'جمع هزینه‌ها', en: 'Total expenses' }, 7850, 61.8],
            [{ fa: '**سود خالص**', en: '**Net income**' }, 4850, 38.2],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'تحلیل عمودی در یک نگاه نشان می‌دهد که حقوق و دستمزد بزرگ‌ترین هزینه نواست (28.3 درصد درآمد) و اجاره در رتبه دوم قرار دارد؛ هر برنامه کنترل هزینه باید از همین دو قلم شروع شود.',
            en: 'The common-size view shows at a glance that salaries are Nova’s largest cost (28.3% of revenue), followed by rent, any cost-control effort should start with those two lines.',
          },
        },
      ],
    },
    {
      id: 'liquidity',
      title: { fa: 'نسبت‌های نقدینگی', en: 'Liquidity ratios' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نسبت‌های نقدینگی توان واحد تجاری را در پرداخت **بدهی‌های جاری** از محل **دارایی‌های جاری** می‌سنجند. اعتباردهندگان کوتاه‌مدت و تأمین‌کنندگان بیش از همه به این نسبت‌ها توجه می‌کنند.',
            en: 'Liquidity ratios measure the ability to pay **current liabilities** out of **current assets**. Short-term lenders and suppliers watch them most closely.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت جاری = دارایی‌های جاری ÷ بدهی‌های جاری',
            en: 'Current ratio = Current assets ÷ Current liabilities',
          },
          note: {
            fa: 'نشان می‌دهد در برابر هر واحد بدهی جاری چند واحد دارایی جاری وجود دارد. نسبت کمتر از 1 هشداری درباره نقدینگی است؛ در بسیاری از صنایع رقمی حدود 1.5 تا 2 مناسب تلقی می‌شود، اما نسبت بسیار بالا هم می‌تواند نشانه وجه نقد راکد باشد.',
            en: 'Current assets available per unit of current liabilities. Below 1 is a liquidity warning; around 1.5–2 is comfortable in many industries, though a very high ratio can signal idle cash.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت آنی = (موجودی نقد + سرمایه‌گذاری‌های کوتاه‌مدت + حساب‌های دریافتنی) ÷ بدهی‌های جاری',
            en: 'Quick ratio = (Cash + Short-term investments + Accounts receivable) ÷ Current liabilities',
          },
          note: {
            fa: 'آزمونی سخت‌گیرانه‌تر است: موجودی کالا، ملزومات و پیش‌پرداخت‌ها را کنار می‌گذارد، چون به‌سرعت به نقد تبدیل نمی‌شوند. نسبت آنی حدود 1 یا بیشتر معمولاً اطمینان‌بخش است.',
            en: 'A stricter “acid test”: it leaves out inventory, supplies and prepayments because they cannot be turned into cash quickly. A quick ratio of about 1 or more is usually reassuring.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'نقدینگی نوا', en: 'Nova’s liquidity' },
          text: {
            fa: 'نسبت جاری نوا 51,400 ÷ 2,250 = **22.84** و نسبت آنی آن (46,300 + 2,200) ÷ 2,250 = 48,500 ÷ 2,250 = **21.56** است. این ارقام به‌طور غیرعادی بالا هستند، چون نوا کسب‌وکاری تازه‌تأسیس است و بیشتر وجه نقد حاصل از آورده سارا و وام بانکی هنوز خرج نشده و در حساب بانکی مانده است.',
            en: 'Nova’s current ratio is 51,400 ÷ 2,250 = **22.84** and its quick ratio is (46,300 + 2,200) ÷ 2,250 = 48,500 ÷ 2,250 = **21.56**. Both are unusually high because Nova is brand new: most of the cash from Sara’s investment and the bank loan has not been spent yet and is still sitting in the bank.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'نقدینگی زیاد هم هزینه دارد', en: 'Too much liquidity has a cost' },
          text: {
            fa: 'وجه نقدی که بیکار در حساب بماند بازده چندانی ایجاد نمی‌کند و به‌ویژه در اقتصاد تورمی، به‌تدریج قدرت خریدش را از دست می‌دهد. سارا باید برای به‌کارگیری این منابع یا بازپرداخت زودتر بخشی از وام 12 درصدی برنامه داشته باشد.',
            en: 'Idle cash earns little and, especially in an inflationary economy, steadily loses purchasing power. Sara should plan either to put these funds to work or to repay part of the 12% loan early.',
          },
        },
      ],
    },
    {
      id: 'profitability',
      title: { fa: 'نسبت‌های سودآوری', en: 'Profitability ratios' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نسبت‌های سودآوری سود را با فروشی که آن را ایجاد کرده یا با منابعی که برای کسب آن به کار رفته مقایسه می‌کنند. مالکان و سرمایه‌گذاران معمولاً پیش از هر چیز به این گروه نگاه می‌کنند.',
            en: 'Profitability ratios compare profit with the sales that produced it or with the resources invested to earn it. Owners and investors usually look here first.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'حاشیه سود ناخالص = سود ناخالص ÷ فروش خالص × 100',
            en: 'Gross margin = Gross profit ÷ Net sales × 100',
          },
          note: {
            fa: 'مخصوص شرکت‌های بازرگانی و تولیدی است. برای فروشگاه آرمان (درس 11، روش FIFO): 4,100 ÷ 7,500 = 54.7 درصد. نوا خدماتی است و بهای تمام‌شده کالای فروش‌رفته ندارد، پس این نسبت برایش کاربرد ندارد.',
            en: 'Relevant to merchandisers and manufacturers. For Arman Store (Lesson 11, FIFO): 4,100 ÷ 7,500 = 54.7%. Nova is a service business with no cost of goods sold, so the ratio does not apply to it.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'حاشیه سود خالص = سود خالص ÷ درآمد (فروش) × 100',
            en: 'Net profit margin = Net income ÷ Revenue × 100',
          },
          note: {
            fa: 'نشان می‌دهد از هر 100 واحد درآمد، چند واحد به سود خالص تبدیل می‌شود. نوا: 4,850 ÷ 12,700 = 38.2 درصد.',
            en: 'How much of every 100 of revenue ends up as net profit. Nova: 4,850 ÷ 12,700 = 38.2%.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'بازده دارایی‌ها (ROA) = سود خالص ÷ میانگین جمع دارایی‌ها × 100',
            en: 'Return on assets (ROA) = Net income ÷ Average total assets × 100',
          },
          note: {
            fa: 'می‌سنجد کل دارایی‌ها، صرف‌نظر از منبع تأمین آن‌ها، چقدر سود ایجاد کرده‌اند. نوا (یک‌ماهه، با دارایی‌های پایان دوره): 4,850 ÷ 71,100 = 6.8 درصد.',
            en: 'How effectively all assets, however financed, generate profit. Nova (one month, on ending assets): 4,850 ÷ 71,100 = 6.8%.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'بازده حقوق مالکانه (ROE) = سود خالص ÷ میانگین حقوق مالکانه × 100',
            en: 'Return on equity (ROE) = Net income ÷ Average owner’s equity × 100',
          },
          note: {
            fa: 'بازده مالک بر سرمایه‌ای که در کسب‌وکار دارد. نوا (یک‌ماهه): 4,850 ÷ 53,850 = 9.0 درصد.',
            en: 'The owner’s return on their stake in the business. Nova (one month): 4,850 ÷ 53,850 = 9.0%.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا ROE از ROA بیشتر است؟', en: 'Why is ROE higher than ROA?' },
          text: {
            fa: 'بازده حقوق مالکانه نوا (9.0 درصد) از بازده دارایی‌هایش (6.8 درصد) بیشتر است، چون بخشی از دارایی‌ها با وام تأمین شده است. هزینه بهره وام ماهانه حدود 1 درصد است (12 درصد سالانه)، در حالی که دارایی‌ها 6.8 درصد بازده داده‌اند؛ این مازاد به مالک می‌رسد. به این اثر **اهرم مالی** می‌گویند. اهرم شمشیری دولبه است: اگر بازده کاهش یابد، بهره همچنان باید پرداخت شود.',
            en: 'Nova’s ROE (9.0%) exceeds its ROA (6.8%) because part of the assets is financed by the loan. The loan costs about 1% a month (12% a year) while the assets earned 6.8%, and that surplus accrues to the owner, the effect of **financial leverage**. Leverage cuts both ways: if returns fall, the interest is still due.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'یک احتیاط درباره سود نوا', en: 'A caveat on Nova’s profit' },
          text: {
            fa: 'سارا برای کار خودش حقوقی دریافت نمی‌کند و برداشت هم هزینه نیست؛ مالیات بر درآمد هم در این مثال کسر نشده است. بنابراین حاشیه سود 38.2 درصدی، ارزش کار مالک و مالیات را در بر ندارد و مقایسه آن با شرکتی که مدیر حقوق‌بگیر دارد باید با احتیاط انجام شود.',
            en: 'Sara pays herself no salary, drawings are not an expense, and no income tax has been deducted in this example. The 38.2% margin therefore excludes both the value of the owner’s own work and tax, compare it cautiously with a company that employs a salaried manager.',
          },
        },
      ],
    },
    {
      id: 'leverage-efficiency',
      title: { fa: 'نسبت‌های اهرمی و نسبت‌های کارایی', en: 'Leverage and efficiency ratios' },
      blocks: [
        { type: 'h', text: { fa: 'اهرم مالی و توان پرداخت بلندمدت', en: 'Leverage and solvency' } },
        {
          type: 'formula',
          text: {
            fa: 'نسبت بدهی = جمع بدهی‌ها ÷ جمع دارایی‌ها × 100',
            en: 'Debt ratio = Total liabilities ÷ Total assets × 100',
          },
          note: {
            fa: 'سهم دارایی‌هایی که با منابع اعتباردهندگان تأمین شده است؛ هرچه بالاتر، ریسک برای وام‌دهندگان بیشتر. نوا: 17,250 ÷ 71,100 = 24.3 درصد.',
            en: 'The share of assets financed by creditors, the higher it is, the greater the risk for lenders. Nova: 17,250 ÷ 71,100 = 24.3%.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت بدهی به حقوق مالکانه = جمع بدهی‌ها ÷ جمع حقوق مالکانه',
            en: 'Debt-to-equity = Total liabilities ÷ Total equity',
          },
          note: {
            fa: 'نشان می‌دهد در برابر هر واحد سرمایه مالک، چند واحد بدهی وجود دارد. نوا: 17,250 ÷ 53,850 = 0.32.',
            en: 'Debt per unit of the owner’s money. Nova: 17,250 ÷ 53,850 = 0.32.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت پوشش بهره = سود قبل از بهره و مالیات ÷ هزینه بهره',
            en: 'Interest coverage = Earnings before interest and tax (EBIT) ÷ Interest expense',
          },
          note: {
            fa: 'نشان می‌دهد سود عملیاتی چند برابر هزینه بهره است؛ رقم کمتر از حدود 1.5 تا 2 زنگ خطر است. نوا: (4,850 + 150) ÷ 150 = 5,000 ÷ 150 = 33.3 برابر.',
            en: 'How many times operating profit covers interest; below roughly 1.5–2 is a red flag. Nova: (4,850 + 150) ÷ 150 = 5,000 ÷ 150 = 33.3 times.',
          },
        },
        { type: 'h', text: { fa: 'کارایی (گردش)', en: 'Efficiency (turnover)' } },
        {
          type: 'formula',
          text: {
            fa: 'گردش حساب‌های دریافتنی = فروش نسیه خالص ÷ میانگین حساب‌های دریافتنی',
            en: 'Accounts receivable turnover = Net credit sales ÷ Average accounts receivable',
          },
          note: {
            fa: 'نشان می‌دهد مطالبات در هر دوره چند بار وصول و جایگزین می‌شوند. فروش نسیه نوا 4,700 است (4,000 خدمات نسیه + 700 درآمد صورت‌حساب‌نشده). با مانده پایان دوره: 4,700 ÷ 2,200 = 2.14 بار در ماه.',
            en: 'How many times receivables are collected and replaced in a period. Nova’s credit sales are 4,700 (4,000 billed on account + 700 earned but unbilled). On the ending balance: 4,700 ÷ 2,200 = 2.14 times in the month.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'دوره وصول مطالبات (روز) = تعداد روزهای دوره ÷ گردش حساب‌های دریافتنی',
            en: 'Days sales outstanding (DSO) = Days in the period ÷ Accounts receivable turnover',
          },
          note: {
            fa: 'میانگین تعداد روزهایی که وصول مطالبات طول می‌کشد؛ باید با شرایط اعتباری اعطاشده به مشتریان مقایسه شود. نوا: 30 ÷ 2.14 ≈ 14 روز.',
            en: 'The average number of days it takes to collect; compare it with the credit terms given to customers. Nova: 30 ÷ 2.14 ≈ 14 days.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'گردش موجودی کالا = بهای تمام‌شده کالای فروش‌رفته ÷ میانگین موجودی کالا',
            en: 'Inventory turnover = Cost of goods sold ÷ Average inventory',
          },
          note: {
            fa: 'نشان می‌دهد موجودی چند بار در دوره فروخته و جایگزین می‌شود؛ نوا موجودی کالا ندارد. فروشگاه آرمان (FIFO): 3,400 ÷ ((1,000 + 1,500) ÷ 2) = 3,400 ÷ 1,250 = 2.72 بار.',
            en: 'How many times inventory is sold and replaced in the period; Nova holds no inventory. Arman Store (FIFO): 3,400 ÷ ((1,000 + 1,500) ÷ 2) = 3,400 ÷ 1,250 = 2.72 times.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'گردش دارایی‌ها = درآمد (فروش) ÷ میانگین جمع دارایی‌ها',
            en: 'Asset turnover = Revenue ÷ Average total assets',
          },
          note: {
            fa: 'نشان می‌دهد هر واحد دارایی چند واحد درآمد ایجاد کرده است. نوا (یک‌ماهه، با دارایی‌های پایان دوره): 12,700 ÷ 71,100 = 0.18.',
            en: 'Revenue generated per unit of assets. Nova (one month, on ending assets): 12,700 ÷ 71,100 = 0.18.',
          },
        },
      ],
    },
    {
      id: 'nova-ratios',
      title: { fa: 'نمونه کامل: نسبت‌های استودیو نوا', en: 'Worked example: Nova’s full ratio set' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'اکنون همه نسبت‌ها را با ارقام تعدیل‌شده پایان ماه اول نوا کنار هم می‌گذاریم. چون نوا تازه شروع به کار کرده و همه مانده‌های ابتدای دوره‌اش صفر است، به‌جای میانگین از **مانده‌های پایان دوره** و از نتایج **یک‌ماهه** استفاده می‌کنیم.',
            en: 'Let’s put the whole set side by side using Nova’s adjusted month-end figures. Because Nova has just started and every opening balance is zero, we use **ending balances** instead of averages, and **one month** of results.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: نسبت‌های مالی پایان نخستین ماه',
            en: 'Nova Design Studio: financial ratios at the end of the first month',
          },
          head: [
            { fa: 'نسبت', en: 'Ratio' },
            { fa: 'محاسبه', en: 'Calculation' },
            { fa: 'نتیجه', en: 'Result' },
            { fa: 'تفسیر', en: 'Interpretation' },
          ],
          rows: [
            [
              { fa: 'نسبت جاری', en: 'Current ratio' },
              { fa: '51,400 ÷ 2,250', en: '51,400 ÷ 2,250' },
              { fa: '22.84 برابر', en: '22.84×' },
              { fa: 'نقدینگی بسیار بالا؛ وجه نقد راه‌اندازی هنوز خرج نشده', en: 'Extremely liquid: start-up cash not yet spent' },
            ],
            [
              { fa: 'نسبت آنی', en: 'Quick ratio' },
              { fa: '48,500 ÷ 2,250', en: '48,500 ÷ 2,250' },
              { fa: '21.56 برابر', en: '21.56×' },
              { fa: 'حتی بدون ملزومات و پیش‌پرداخت هم بسیار نقدشونده است', en: 'Highly liquid even without supplies and prepayments' },
            ],
            [
              { fa: 'حاشیه سود خالص', en: 'Net profit margin' },
              { fa: '4,850 ÷ 12,700', en: '4,850 ÷ 12,700' },
              { fa: '38.2 درصد', en: '38.2%' },
              { fa: 'حاشیه قوی؛ اما بدون حقوق مالک و مالیات', en: 'Strong margin: but excludes owner’s pay and tax' },
            ],
            [
              { fa: 'بازده دارایی‌ها (ماهانه)', en: 'ROA (monthly)' },
              { fa: '4,850 ÷ 71,100', en: '4,850 ÷ 71,100' },
              { fa: '6.8 درصد', en: '6.8%' },
              { fa: 'برای یک ماه بسیار بالاست؛ آن را ساده در 12 ضرب نکنید', en: 'Very high for one month, do not simply multiply by 12' },
            ],
            [
              { fa: 'بازده حقوق مالکانه (ماهانه)', en: 'ROE (monthly)' },
              { fa: '4,850 ÷ 53,850', en: '4,850 ÷ 53,850' },
              { fa: '9.0 درصد', en: '9.0%' },
              { fa: 'به لطف اهرم مالی، بالاتر از ROA', en: 'Above ROA thanks to financial leverage' },
            ],
            [
              { fa: 'نسبت بدهی', en: 'Debt ratio' },
              { fa: '17,250 ÷ 71,100', en: '17,250 ÷ 71,100' },
              { fa: '24.3 درصد', en: '24.3%' },
              { fa: 'حدود یک‌چهارم دارایی‌ها با بدهی تأمین شده؛ محافظه‌کارانه', en: 'About a quarter of assets debt-financed, conservative' },
            ],
            [
              { fa: 'نسبت بدهی به حقوق مالکانه', en: 'Debt-to-equity' },
              { fa: '17,250 ÷ 53,850', en: '17,250 ÷ 53,850' },
              { fa: '0.32', en: '0.32' },
              { fa: 'منابع مالک غالب است', en: 'Owner financing dominates' },
            ],
            [
              { fa: 'نسبت پوشش بهره', en: 'Interest coverage' },
              { fa: '5,000 ÷ 150', en: '5,000 ÷ 150' },
              { fa: '33.3 برابر', en: '33.3×' },
              { fa: 'بهره با اطمینان بسیار زیاد پوشش داده می‌شود', en: 'Interest is very comfortably covered' },
            ],
            [
              { fa: 'گردش حساب‌های دریافتنی', en: 'A/R turnover' },
              { fa: '4,700 ÷ 2,200', en: '4,700 ÷ 2,200' },
              { fa: '2.14 بار', en: '2.14×' },
              { fa: 'مطالبات حدوداً دو بار در ماه وصول می‌شوند', en: 'Receivables are collected about twice a month' },
            ],
            [
              { fa: 'دوره وصول مطالبات', en: 'Days sales outstanding' },
              { fa: '30 ÷ 2.14', en: '30 ÷ 2.14' },
              { fa: 'حدود 14 روز', en: '≈ 14 days' },
              { fa: 'مشتریان به‌طور میانگین حدود دو هفته بعد می‌پردازند', en: 'Customers pay in about two weeks on average' },
            ],
            [
              { fa: 'گردش دارایی‌ها (ماهانه)', en: 'Asset turnover (monthly)' },
              { fa: '12,700 ÷ 71,100', en: '12,700 ÷ 71,100' },
              { fa: '0.18 بار', en: '0.18×' },
              { fa: 'پایین؛ بخش بزرگی از دارایی‌ها وجه نقد راکد است', en: 'Low: much of the asset base is idle cash' },
            ],
          ],
        },
        {
          type: 'diagram',
          id: 'ratios',
          caption: {
            fa: 'نسبت‌های نقدینگی، سودآوری، اهرمی و کارایی یک شرکت نمونه روی شاخص‌های عقربه‌ای',
            en: 'Liquidity, profitability, leverage and efficiency ratios for a sample company, shown as gauges',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا نسبت‌های نوا این‌قدر غیرعادی‌اند؟', en: 'Why do Nova’s ratios look so extreme?' },
          text: {
            fa: 'یک کسب‌وکار تازه‌تأسیس پس از یک ماه تصویر عادی‌ای ارائه نمی‌دهد: وجه نقد حاصل از تأمین مالی هنوز خرج نشده، پس نقدینگی بسیار بالا و گردش دارایی‌ها پایین است. در عمل، نسبت‌ها معمولاً با **ارقام سالانه** و **میانگین مانده‌های** ابتدا و پایان دوره محاسبه می‌شوند؛ مثلاً ROA = سود خالص سالانه ÷ میانگین جمع دارایی‌ها. اگر برای نوا از میانگین استفاده می‌کردیم، چون مانده‌های ابتدای دوره صفرند، مخرج‌ها نصف و نسبت‌ها دو برابر می‌شدند؛ که خود تحریف دیگری است.',
            en: 'A brand-new business one month in does not give a normal picture: the cash raised from financing has not been spent yet, so liquidity is very high and asset turnover is low. In practice, ratios are usually computed on **annual figures** and **average balances** (beginning plus ending, divided by two), e.g. ROA = annual net income ÷ average total assets. Had we averaged Nova’s balances, the zero opening balances would halve every denominator and double the ratios, simply a different distortion.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'جمع‌بندی درباره نوا', en: 'The verdict on Nova' },
          text: {
            fa: 'نوا ماه اول را با سود، بدهی کم و نقدینگی فراوان پشت سر گذاشته است. پرسش‌های مدیریتی بعدی این‌هاست: آیا این سطح درآمد پایدار است؟ وجه نقد مازاد چگونه به کار گرفته شود؟ و آیا مشتریان طبق شرایط اعتباری پرداخت می‌کنند؟ برای پاسخ باید روند ماه‌های آینده را با تحلیل افقی دنبال کرد.',
            en: 'Nova has finished its first month profitable, lightly indebted and flush with cash. The next management questions: is this level of revenue sustainable? How should the surplus cash be deployed? Are customers paying within their credit terms? Answering them means tracking the trend over the coming months with horizontal analysis.',
          },
        },
      ],
    },
    {
      id: 'limitations',
      title: { fa: 'محدودیت‌های تحلیل نسبت‌ها و جمع‌بندی', en: 'Limitations and summary' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نسبت‌ها ابزار قدرتمندی‌اند، اما فقط نشانه‌ها را آشکار می‌کنند، نه تشخیص قطعی را. پیش از هر نتیجه‌گیری این محدودیت‌ها را در نظر بگیرید:',
            en: 'Ratios are powerful, but they flag symptoms rather than deliver a diagnosis. Keep these limitations in mind before drawing conclusions:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**داده‌های تاریخی**: صورت‌های مالی گذشته را توصیف می‌کنند و آینده ممکن است متفاوت باشد.',
              en: '**Historical data**: the statements describe the past; the future may look different.',
            },
            {
              fa: '**تفاوت رویه‌های حسابداری**: انتخاب FIFO یا میانگین موزون (درس 11) یا روش استهلاک، نسبت‌های دو کسب‌وکار کاملاً مشابه را متفاوت می‌کند.',
              en: '**Different accounting policies**: FIFO vs weighted average (Lesson 11) or the depreciation method can make two identical businesses report different ratios.',
            },
            {
              fa: '**تورم**: ارقام بهای تاریخی سال‌های مختلف به‌سختی قابل‌مقایسه‌اند؛ موضوعی که در اقتصادهای پرتورم مانند ایران اهمیت ویژه دارد.',
              en: '**Inflation**: historical-cost figures from different years are hard to compare, which matters especially in high-inflation economies such as Iran.',
            },
            {
              fa: '**مانده‌های لحظه‌ای و فصلی بودن**: ترازنامه در یک تاریخ ممکن است نماینده کل سال نباشد و مدیریت می‌تواند با اقداماتی مانند تسویه بدهی‌ها درست پیش از پایان سال، نسبت‌ها را «آرایش» کند.',
              en: '**Point-in-time balances and seasonality**: a balance sheet at one date may not represent the whole year, and management can “window-dress” ratios, e.g. by paying off payables just before year-end.',
            },
            {
              fa: '**نبود معیار جهانی**: نسبت جاری «مناسب» برای یک فروشگاه زنجیره‌ای با یک شرکت نرم‌افزاری فرق دارد؛ نسبت‌ها را با روند خود شرکت، رقبا و میانگین صنعت مقایسه کنید.',
              en: '**No universal benchmark**: a “good” current ratio for a supermarket chain differs from one for a software firm; compare with the company’s own trend, competitors and industry averages.',
            },
            {
              fa: '**عوامل غیرمالی**: رضایت مشتری، مهارت کارکنان، اعتبار برند و شرایط بازار در نسبت‌ها دیده نمی‌شوند.',
              en: '**Non-financial factors**: customer satisfaction, staff skills, brand reputation and market conditions are invisible in ratios.',
            },
            {
              fa: '**دوره‌های کوتاه یا غیرعادی**: همان‌طور که نوا نشان داد، شروع فعالیت یا رویدادهای غیرتکراری نسبت‌ها را تحریف می‌کنند.',
              en: '**Short or unusual periods**: as Nova shows, a start-up phase or one-off events distort the ratios.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'قاعده طلایی', en: 'The golden rule' },
          text: {
            fa: 'هیچ نسبتی را به‌تنهایی تفسیر نکنید. همیشه آن را با **روند** خود شرکت، با **رقبا** و با **میانگین صنعت** مقایسه کنید و برای فهم علت‌ها به یادداشت‌های توضیحی مراجعه کنید.',
            en: 'Never interpret a ratio in isolation. Always compare it with the company’s own **trend**, with **competitors** and with the **industry average**: and turn to the notes to understand the reasons behind it.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'تحلیل افقی', en: 'Horizontal analysis' },
              def: {
                fa: 'مقایسه اقلام صورت‌های مالی در طول چند دوره، به مبلغ و درصد.',
                en: 'Comparing line items across periods, in amounts and percentages.',
              },
            },
            {
              term: { fa: 'تحلیل عمودی', en: 'Vertical analysis' },
              def: {
                fa: 'بیان هر قلم به‌صورت درصدی از یک رقم مبنا (درآمد یا جمع دارایی‌ها) در همان دوره.',
                en: 'Expressing each line as a percentage of a base figure (revenue or total assets) in the same period.',
              },
            },
            {
              term: { fa: 'نسبت جاری', en: 'Current ratio' },
              def: { fa: 'دارایی‌های جاری ÷ بدهی‌های جاری.', en: 'Current assets ÷ current liabilities.' },
            },
            {
              term: { fa: 'نسبت آنی', en: 'Quick ratio' },
              def: {
                fa: '(موجودی نقد + سرمایه‌گذاری‌های کوتاه‌مدت + حساب‌های دریافتنی) ÷ بدهی‌های جاری.',
                en: '(Cash + short-term investments + accounts receivable) ÷ current liabilities.',
              },
            },
            {
              term: { fa: 'حاشیه سود ناخالص', en: 'Gross margin' },
              def: { fa: 'سود ناخالص ÷ فروش خالص.', en: 'Gross profit ÷ net sales.' },
            },
            {
              term: { fa: 'حاشیه سود خالص', en: 'Net profit margin' },
              def: { fa: 'سود خالص ÷ درآمد.', en: 'Net income ÷ revenue.' },
            },
            {
              term: { fa: 'بازده دارایی‌ها', en: 'Return on assets (ROA)' },
              def: { fa: 'سود خالص ÷ میانگین جمع دارایی‌ها.', en: 'Net income ÷ average total assets.' },
            },
            {
              term: { fa: 'بازده حقوق مالکانه', en: 'Return on equity (ROE)' },
              def: { fa: 'سود خالص ÷ میانگین حقوق مالکانه.', en: 'Net income ÷ average owner’s equity.' },
            },
            {
              term: { fa: 'نسبت بدهی', en: 'Debt ratio' },
              def: { fa: 'جمع بدهی‌ها ÷ جمع دارایی‌ها.', en: 'Total liabilities ÷ total assets.' },
            },
            {
              term: { fa: 'نسبت بدهی به حقوق مالکانه', en: 'Debt-to-equity ratio' },
              def: { fa: 'جمع بدهی‌ها ÷ جمع حقوق مالکانه.', en: 'Total liabilities ÷ total equity.' },
            },
            {
              term: { fa: 'نسبت پوشش بهره', en: 'Interest coverage' },
              def: {
                fa: 'سود قبل از بهره و مالیات ÷ هزینه بهره.',
                en: 'Earnings before interest and tax ÷ interest expense.',
              },
            },
            {
              term: { fa: 'گردش حساب‌های دریافتنی', en: 'Accounts receivable turnover' },
              def: {
                fa: 'فروش نسیه خالص ÷ میانگین حساب‌های دریافتنی؛ دوره وصول مطالبات = روزهای دوره ÷ این گردش.',
                en: 'Net credit sales ÷ average accounts receivable; days sales outstanding = days in period ÷ this turnover.',
              },
            },
            {
              term: { fa: 'گردش موجودی کالا', en: 'Inventory turnover' },
              def: {
                fa: 'بهای تمام‌شده کالای فروش‌رفته ÷ میانگین موجودی کالا.',
                en: 'Cost of goods sold ÷ average inventory.',
              },
            },
            {
              term: { fa: 'گردش دارایی‌ها', en: 'Asset turnover' },
              def: { fa: 'درآمد ÷ میانگین جمع دارایی‌ها.', en: 'Revenue ÷ average total assets.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'دارایی‌های جاری یک شرکت 60,000 و بدهی‌های جاری آن 40,000 است. نسبت جاری چقدر است؟',
        en: 'A company has current assets of 60,000 and current liabilities of 40,000. What is its current ratio?',
      },
      options: [
        { fa: '0.67', en: '0.67' },
        { fa: '1.5', en: '1.5' },
        { fa: '2.5', en: '2.5' },
        { fa: '20,000', en: '20,000' },
      ],
      answer: 1,
      explain: {
        fa: 'نسبت جاری = 60,000 ÷ 40,000 = 1.5؛ یعنی در برابر هر واحد بدهی جاری، 1.5 واحد دارایی جاری وجود دارد. 20,000 سرمایه در گردش است، نه یک نسبت.',
        en: 'Current ratio = 60,000 ÷ 40,000 = 1.5: there are 1.5 of current assets for every 1 of current liabilities. 20,000 is working capital, not a ratio.',
      },
    },
    {
      q: {
        fa: 'تفاوت نسبت آنی با نسبت جاری در این است که نسبت آنی … را کنار می‌گذارد.',
        en: 'The quick ratio differs from the current ratio because it leaves out …',
      },
      options: [
        { fa: 'موجودی نقد و حساب‌های دریافتنی', en: 'Cash and accounts receivable' },
        { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
        { fa: 'موجودی کالا، ملزومات و پیش‌پرداخت‌ها', en: 'Inventory, supplies and prepaid expenses' },
        { fa: 'بدهی‌های بلندمدت', en: 'Long-term debt' },
      ],
      answer: 2,
      explain: {
        fa: 'نسبت آنی فقط دارایی‌هایی را حساب می‌کند که به‌سرعت به نقد تبدیل می‌شوند. موجودی کالا، ملزومات و پیش‌پرداخت‌ها چنین نیستند؛ برای نوا: 48,500 ÷ 2,250 = 21.56.',
        en: 'The quick ratio counts only assets that turn into cash quickly; inventory, supplies and prepayments do not. For Nova: 48,500 ÷ 2,250 = 21.56.',
      },
    },
    {
      q: {
        fa: 'نسبت بدهی 24.3 درصدی نوا به چه معناست؟',
        en: 'What does Nova’s debt ratio of 24.3% mean?',
      },
      options: [
        { fa: 'حدود 24 درصد دارایی‌های نوا با بدهی تأمین شده است', en: 'About 24% of Nova’s assets are financed by liabilities' },
        { fa: 'نوا باید این ماه 24 درصد وامش را بازپرداخت کند', en: 'Nova must repay 24% of its loan this month' },
        { fa: 'بدهی‌ها 24 درصد حقوق مالکانه است', en: 'Liabilities equal 24% of equity' },
        { fa: 'نوا 24 درصد بازده کسب کرده است', en: 'Nova earned a 24% return' },
      ],
      answer: 0,
      explain: {
        fa: 'نسبت بدهی = 17,250 ÷ 71,100 = 24.3 درصد؛ یعنی سهم اعتباردهندگان در تأمین دارایی‌ها. نسبت بدهی به حقوق مالکانه رقم دیگری است (0.32).',
        en: 'Debt ratio = 17,250 ÷ 71,100 = 24.3%: the creditors’ share in financing the assets. Debt-to-equity is a different figure (0.32).',
      },
    },
    {
      q: {
        fa: 'در تحلیل عمودی صورت سود و زیان، هر قلم درصدی از کدام رقم بیان می‌شود؟',
        en: 'In vertical analysis of an income statement, each line is expressed as a percentage of …',
      },
      options: [
        { fa: 'سود خالص', en: 'Net income' },
        { fa: 'جمع دارایی‌ها', en: 'Total assets' },
        { fa: 'جمع هزینه‌ها', en: 'Total expenses' },
        { fa: 'درآمد (فروش)', en: 'Revenue (sales)' },
      ],
      answer: 3,
      explain: {
        fa: 'در صورت سود و زیان، مبنای تحلیل عمودی درآمد است (100 درصد). جمع دارایی‌ها مبنای تحلیل عمودی ترازنامه است.',
        en: 'On the income statement the base is revenue (100%). Total assets is the base for a common-size balance sheet.',
      },
    },
    {
      q: {
        fa: 'سود قبل از بهره و مالیات نوا 5,000 و هزینه بهره آن 150 است. نسبت پوشش بهره چقدر است؟',
        en: 'Nova’s EBIT is 5,000 and its interest expense is 150. What is its interest coverage?',
      },
      options: [
        { fa: '24.3 برابر', en: '24.3 times' },
        { fa: '32.3 برابر', en: '32.3 times' },
        { fa: '33.3 برابر', en: '33.3 times' },
        { fa: '1.03 برابر', en: '1.03 times' },
      ],
      answer: 2,
      explain: {
        fa: 'پوشش بهره = 5,000 ÷ 150 = 33.3 برابر. رقم 32.3 از تقسیم سود خالص (4,850) بر بهره به دست می‌آید که اشتباه است، چون بهره قبلاً از سود خالص کسر شده است.',
        en: 'Interest coverage = 5,000 ÷ 150 = 33.3 times. The 32.3 option divides net income (4,850) by interest: wrong, because interest has already been deducted from net income.',
      },
    },
    {
      q: {
        fa: 'چرا نسبت جاری و نسبت آنی نوا این‌قدر بالاست؟',
        en: 'Why are Nova’s current and quick ratios so high?',
      },
      options: [
        { fa: 'چون حساب‌های دریافتنی نوا بسیار زیاد است', en: 'Because Nova has very large receivables' },
        {
          fa: 'چون نوا تازه‌تأسیس است و بیشتر وجه نقد حاصل از آورده مالک و وام هنوز خرج نشده است',
          en: 'Because Nova is brand new and most of the cash from the owner’s investment and the loan is still unspent',
        },
        { fa: 'چون کل وام جزو بدهی‌های جاری طبقه‌بندی شده است', en: 'Because the whole loan is classified as a current liability' },
        { fa: 'چون استهلاک انباشته دارایی‌های جاری را افزایش می‌دهد', en: 'Because accumulated depreciation increases current assets' },
      ],
      answer: 1,
      explain: {
        fa: 'موجودی نقد 46,300 از 51,400 دارایی جاری نواست و بدهی‌های جاری فقط 2,250 است. این وضعیت خاص یک کسب‌وکار تازه‌تأسیس است؛ به همین دلیل نسبت‌ها معمولاً با ارقام سالانه و مانده‌های میانگین محاسبه می‌شوند.',
        en: 'Cash makes up 46,300 of Nova’s 51,400 current assets, against only 2,250 of current liabilities. That is typical of a start-up, one reason ratios are normally computed on annual figures and average balances.',
      },
    },
  ],
}
