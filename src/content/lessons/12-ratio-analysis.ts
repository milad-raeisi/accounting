import type { Lesson } from '../types'

export const lesson: Lesson = {
  slug: 'ratio-analysis',
  number: 18,
  level: 'advanced',
  minutes: 50,
  icon: 'TrendingUp',
  tone: 'revenue',
  title: { fa: 'تحلیل صورت‌های مالی و نسبت‌های مالی', en: 'Financial Statement and Ratio Analysis' },
  summary: {
    fa: 'صورت‌های مالی فقط وقتی به تصمیم تبدیل می‌شوند که تحلیل شوند. در این درس پایانی، تحلیل افقی، روند و عمودی را می‌آموزید، همه نسبت‌های اصلی نقدینگی، سودآوری، اهرمی و کارایی را برای استودیو نوا و یک شرکت بازرگانی محاسبه و تفسیر می‌کنید و یاد می‌گیرید از دل اعداد یک نتیجه‌گیری سنجیده بنویسید.',
    en: 'Financial statements only turn into decisions once they are analysed. In this capstone lesson you learn horizontal, trend and vertical analysis, calculate and interpret every major liquidity, profitability, leverage and efficiency ratio for Nova and for a trading company, and learn to turn the numbers into a reasoned conclusion.',
  },
  objectives: [
    {
      fa: 'توضیح دهید چرا صورت‌های مالی تحلیل می‌شوند و تحلیل افقی، روند و عمودی را انجام دهید.',
      en: 'Explain why financial statements are analysed and carry out horizontal, trend and vertical analysis.',
    },
    {
      fa: 'نسبت‌های نقدینگی، از جمله سرمایه در گردش، نسبت وجه نقد و نسبت جریان نقد عملیاتی را محاسبه و تفسیر کنید.',
      en: 'Calculate and interpret liquidity measures, including working capital, the cash ratio and the operating cash flow ratio.',
    },
    {
      fa: 'نسبت‌های سودآوری را محاسبه کنید و بازده حقوق مالکانه را با تجزیه دوپونت به اجزایش بشکنید.',
      en: 'Calculate profitability ratios and break return on equity into its parts with the DuPont analysis.',
    },
    {
      fa: 'نسبت‌های اهرمی و کارایی، از جمله چرخه تبدیل وجه نقد را محاسبه و تفسیر کنید.',
      en: 'Calculate and interpret leverage and efficiency ratios, including the cash conversion cycle.',
    },
    {
      fa: 'صورت‌های مالی دوساله یک شرکت را تحلیل کنید، نتیجه‌ای مستدل بنویسید و محدودیت‌های نسبت‌ها را در نظر بگیرید.',
      en: 'Analyse two years of a company’s statements, write a reasoned conclusion and allow for the limits of ratios.',
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
            fa: 'خانم رحیمی کارشناس اعتبارات یک بانک است. **شرکت بازرگانی مهرگان**، عمده‌فروش لوازم خانگی، تقاضای وام تازه‌ای داده و صورت‌های مالی دو سال اخیرش را ضمیمه کرده است. فروش شرکت در سال دوم 20 درصد رشد کرده و مدیرعامل در نامه‌اش فقط به همین رقم اشاره کرده است. آیا بانک باید وام بدهد؟ خانم رحیمی بدون تحلیل نمی‌تواند پاسخ دهد، چون رشد سریع فروش ممکن است نشانه موفقیت باشد و ممکن است آغاز یک بحران نقدینگی. در این درس دقیقاً همان کاری را می‌کنیم که او انجام می‌دهد.',
            en: 'Ms Rahimi is a credit officer at a bank. **Mehregan Trading Co.**, a wholesaler of household appliances, has applied for a new loan and attached its financial statements for the last two years. Sales grew 20% in the second year, and the managing director’s cover letter mentions nothing else. Should the bank lend? Ms Rahimi cannot answer without analysis: fast sales growth can be a sign of success, or the start of a cash crisis. In this lesson we do exactly what she does.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'یک عدد به‌تنهایی معنای چندانی ندارد. سود خالص 4,850 استودیو نوا خوب است یا بد؟ پاسخ به این بستگی دارد که آن را با چه مقایسه کنیم: با درآمد، با دارایی‌ها، با سرمایه سارا، با ماه قبل یا با رقبا. **تحلیل صورت‌های مالی** یعنی کنار هم گذاشتن ارقام برای کشف روابط، روندها و نقاط قوت و ضعف. **نسبت مالی** هم چیزی جز تقسیم یک رقم بر رقم مرتبط دیگر نیست؛ مثلاً دارایی‌های جاری بر بدهی‌های جاری.',
            en: 'A number on its own says very little. Is Nova’s 4,850 net income good or bad? That depends on what we compare it with: revenue, assets, Sara’s investment, last month or competitors. **Financial statement analysis** puts numbers side by side to reveal relationships, trends, strengths and weaknesses. A **financial ratio** is simply one figure divided by another related figure, for example current assets divided by current liabilities.',
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
            {
              fa: '**ارزش بازار** (فقط برای شرکت‌هایی که سهامشان معامله می‌شود): سرمایه‌گذاران برای هر واحد سود شرکت چه قیمتی می‌پردازند؟',
              en: '**Market value** (only for companies whose shares are traded): what price do investors pay for each unit of the company’s earnings?',
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'هر استفاده‌کننده بیشتر به کدام نسبت‌ها نگاه می‌کند؟', en: 'Which ratios each user watches most' },
          head: [
            { fa: 'استفاده‌کننده', en: 'User' },
            { fa: 'پرسش اصلی', en: 'Main question' },
            { fa: 'نسبت‌های کلیدی', en: 'Key ratios' },
          ],
          rows: [
            [
              { fa: 'بانک و وام‌دهنده', en: 'Bank or lender' },
              { fa: 'آیا اصل و بهره وام به‌موقع بازپرداخت می‌شود؟', en: 'Will principal and interest be repaid on time?' },
              { fa: 'نسبت جاری، نسبت بدهی، پوشش بهره، جریان نقد عملیاتی', en: 'Current ratio, debt ratio, interest coverage, operating cash flow' },
            ],
            [
              { fa: 'تأمین‌کننده', en: 'Supplier' },
              { fa: 'آیا می‌توان به این مشتری نسیه فروخت؟', en: 'Is it safe to sell to this customer on credit?' },
              { fa: 'نسبت آنی، نسبت وجه نقد، دوره پرداخت بدهی‌ها', en: 'Quick ratio, cash ratio, days payable outstanding' },
            ],
            [
              { fa: 'مالک یا سهامدار', en: 'Owner or shareholder' },
              { fa: 'سرمایه من چه بازدهی دارد؟', en: 'What return is my money earning?' },
              { fa: 'بازده حقوق مالکانه، حاشیه سود خالص', en: 'Return on equity, net profit margin' },
            ],
            [
              { fa: 'مدیر', en: 'Manager' },
              { fa: 'کجا می‌توان بهتر عمل کرد؟', en: 'Where can we do better?' },
              { fa: 'حاشیه‌های سود، گردش موجودی کالا، دوره وصول مطالبات', en: 'Profit margins, inventory turnover, days sales outstanding' },
            ],
            [
              { fa: 'سرمایه‌گذار بورس', en: 'Stock-market investor' },
              { fa: 'آیا قیمت سهم منطقی است؟', en: 'Is the share price reasonable?' },
              { fa: 'سود هر سهم، نسبت قیمت به سود', en: 'Earnings per share, price/earnings ratio' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: داده‌ها از کجا می‌آیند؟', en: 'In practice: where the data comes from' },
          text: {
            fa: 'شرکت‌های پذیرفته‌شده در بورس‌های ایران صورت‌های مالی میان‌دوره‌ای و سالانه خود را در **سامانه کدال** منتشر می‌کنند و تحلیلگران بازار سرمایه نسبت‌ها را از همین گزارش‌ها استخراج می‌کنند. بانک‌ها هم برای پرونده‌های اعتباری معمولاً صورت‌های مالی **حسابرسی‌شده** را می‌خواهند و آن را کنار اظهارنامه مالیاتی و گردش حساب بانکی بررسی می‌کنند؛ مدارک دقیق را از دستورالعمل همان بانک بپرسید. در سطح بین‌المللی هیچ استانداردی نسبت‌ها را تعیین نمی‌کند؛ نسبت‌ها ابزار تحلیلگرند، نه بخشی از صورت‌های مالی. تنها استثنا **سود هر سهم** است که طبق IAS 33 شرکت‌های بورسی باید آن را ارائه کنند.',
            en: 'Companies listed on Iran’s stock exchanges publish their interim and annual financial statements on the **Codal** disclosure system, and capital-market analysts draw their ratios from those reports. Banks usually ask for **audited** financial statements for a credit file and read them alongside the tax return and bank statements; ask each bank for its exact requirements. Internationally, no standard prescribes ratios: they are the analyst’s tools, not part of the statements. The one exception is **earnings per share**, which IAS 33 requires listed companies to present.',
          },
        },
      ],
    },
    {
      id: 'horizontal-vertical',
      title: { fa: 'تحلیل افقی، روند و عمودی', en: 'Horizontal, trend and vertical analysis' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پرونده مهرگان را باز کنیم. این شرکت کالا می‌خرد و عمده می‌فروشد، پس صورت سود و زیان آن، برخلاف نوا، **بهای تمام‌شده کالای فروش‌رفته** و **سود ناخالص** دارد؛ همان مفاهیمی که در درس موجودی کالا دیدیم. در این مثال نرخ مالیات بر درآمد را 25 درصد سود قبل از مالیات فرض می‌کنیم؛ نرخ رسمی را از قانون روز بررسی کنید. نخستین ابزار تحلیل ساده است: ارقام چند دوره را کنار هم بگذارید.',
            en: 'Let’s open Mehregan’s file. The company buys goods and resells them wholesale, so unlike Nova its income statement has **cost of goods sold** and **gross profit**, the ideas we met in the lesson on inventory. In this example we assume an income-tax rate of 25% of profit before tax; check the current law for the official rate. The first analytical tool is simple: put several periods side by side.',
          },
        },
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
            fa: 'فروش مهرگان از 400,000 به 480,000 رسیده است: (480,000 − 400,000) ÷ 400,000 × 100 = 20 درصد رشد. اگر مبلغ دوره پایه صفر یا منفی باشد، درصد تغییر معنا ندارد؛ در این حالت فقط تغییر مبلغ را گزارش کنید.',
            en: 'Mehregan’s sales rose from 400,000 to 480,000: (480,000 − 400,000) ÷ 400,000 × 100 = 20% growth. If the base amount is zero or negative, a percentage change is meaningless; report only the change in amount.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'شرکت بازرگانی مهرگان: صورت سود و زیان مقایسه‌ای با تحلیل افقی',
            en: 'Mehregan Trading Co.: comparative income statement with horizontal analysis',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'سال 1', en: 'Year 1' },
            { fa: 'سال 2', en: 'Year 2' },
            { fa: 'تغییر (مبلغ)', en: 'Change (amount)' },
            { fa: 'تغییر (درصد)', en: 'Change (%)' },
          ],
          rows: [
            [{ fa: 'فروش (همه نسیه)', en: 'Sales (all on credit)' }, 400000, 480000, 80000, { fa: 'افزایش 20%', en: '+20.0%' }],
            [{ fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, 280000, 345600, 65600, { fa: 'افزایش 23.4%', en: '+23.4%' }],
            [{ fa: '**سود ناخالص**', en: '**Gross profit**' }, 120000, 134400, 14400, { fa: 'افزایش 12%', en: '+12.0%' }],
            [{ fa: 'هزینه‌های عملیاتی (شامل استهلاک)', en: 'Operating expenses (incl. depreciation)' }, 72000, 86400, 14400, { fa: 'افزایش 20%', en: '+20.0%' }],
            [{ fa: '**سود عملیاتی**', en: '**Operating profit**' }, 48000, 48000, 0, { fa: 'بدون تغییر', en: '0.0%' }],
            [{ fa: 'هزینه بهره', en: 'Interest expense' }, 6000, 12000, 6000, { fa: 'افزایش 100%', en: '+100.0%' }],
            [{ fa: 'سود قبل از مالیات', en: 'Profit before tax' }, 42000, 36000, -6000, { fa: 'کاهش 14.3%', en: '−14.3%' }],
            [{ fa: 'مالیات بر درآمد (25%، فرضی)', en: 'Income tax (25%, assumed)' }, 10500, 9000, -1500, { fa: 'کاهش 14.3%', en: '−14.3%' }],
            [{ fa: '**سود خالص**', en: '**Net income**' }, 31500, 27000, -4500, { fa: 'کاهش 14.3%', en: '−14.3%' }],
          ],
          numericCols: [1, 2, 3, 4],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'فروش بیشتر، سود کمتر', en: 'More sales, less profit' },
          text: {
            fa: 'فروش 20 درصد رشد کرده، اما بهای تمام‌شده 23.4 درصد؛ یعنی شرکت یا گران‌تر خریده یا برای فروش بیشتر، ارزان‌تر فروخته است. هزینه‌های عملیاتی هم پابه‌پای فروش بالا رفته‌اند، پس سود عملیاتی اصلاً رشد نکرده است. هزینه بهره دو برابر شده و در نتیجه سود خالص 14.3 درصد **کاهش** یافته است. رشد فروش بدون رشد سود، نخستین پرسشی است که خانم رحیمی از مدیرعامل می‌پرسد.',
            en: 'Sales grew 20%, but cost of goods sold grew 23.4%: the company either bought at higher prices or cut its selling prices to sell more. Operating expenses rose in step with sales, so operating profit did not grow at all. Interest doubled, and as a result net income **fell** by 14.3%. Sales growth without profit growth is the first question Ms Rahimi puts to the managing director.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'شرکت بازرگانی مهرگان: ترازنامه در سه تاریخ متوالی (ستون آخر: تغییر سال 2 نسبت به سال 1)',
            en: 'Mehregan Trading Co.: balance sheets at three consecutive dates (last column: Year 2 vs Year 1)',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'ابتدای سال 1', en: 'Start of Year 1' },
            { fa: 'پایان سال 1', en: 'End of Year 1' },
            { fa: 'پایان سال 2', en: 'End of Year 2' },
            { fa: 'تغییر', en: 'Change' },
          ],
          rows: [
            [{ fa: 'موجودی نقد', en: 'Cash' }, 30000, 35000, 12000, { fa: 'کاهش 65.7%', en: '−65.7%' }],
            [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 40000, 50000, 90000, { fa: 'افزایش 80%', en: '+80.0%' }],
            [{ fa: 'موجودی کالا', en: 'Inventory' }, 50000, 60000, 105000, { fa: 'افزایش 75%', en: '+75.0%' }],
            [{ fa: 'پیش‌پرداخت‌ها', en: 'Prepayments' }, 5000, 5000, 6000, { fa: 'افزایش 20%', en: '+20.0%' }],
            [{ fa: '**جمع دارایی‌های جاری**', en: '**Total current assets**' }, 125000, 150000, 213000, { fa: 'افزایش 42%', en: '+42.0%' }],
            [{ fa: 'دارایی‌های ثابت (خالص)', en: 'Property and equipment (net)' }, 75000, 80000, 97000, { fa: 'افزایش 21.3%', en: '+21.3%' }],
            [{ fa: '**جمع دارایی‌ها**', en: '**Total assets**' }, 200000, 230000, 310000, { fa: 'افزایش 34.8%', en: '+34.8%' }],
            [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 35000, 40000, 66000, { fa: 'افزایش 65%', en: '+65.0%' }],
            [{ fa: 'هزینه‌های پرداختنی (تعهدی)', en: 'Accrued expenses' }, 5000, 4500, 5000, { fa: 'افزایش 11.1%', en: '+11.1%' }],
            [{ fa: 'مالیات پرداختنی', en: 'Income tax payable' }, 5000, 10500, 9000, { fa: 'کاهش 14.3%', en: '−14.3%' }],
            [{ fa: '**جمع بدهی‌های جاری**', en: '**Total current liabilities**' }, 45000, 55000, 80000, { fa: 'افزایش 45.5%', en: '+45.5%' }],
            [{ fa: 'وام بلندمدت بانکی', en: 'Long-term bank loan' }, 40000, 40000, 80000, { fa: 'افزایش 100%', en: '+100.0%' }],
            [{ fa: '**جمع بدهی‌ها**', en: '**Total liabilities**' }, 85000, 95000, 160000, { fa: 'افزایش 68.4%', en: '+68.4%' }],
            [{ fa: 'سرمایه (سهام)', en: 'Share capital' }, 80000, 80000, 80000, { fa: 'بدون تغییر', en: '0.0%' }],
            [{ fa: 'سود انباشته', en: 'Retained earnings' }, 35000, 55000, 70000, { fa: 'افزایش 27.3%', en: '+27.3%' }],
            [{ fa: '**جمع حقوق مالکانه**', en: '**Total equity**' }, 115000, 135000, 150000, { fa: 'افزایش 11.1%', en: '+11.1%' }],
            [{ fa: '**جمع بدهی‌ها و حقوق مالکانه**', en: '**Total liabilities and equity**' }, 200000, 230000, 310000, { fa: 'افزایش 34.8%', en: '+34.8%' }],
          ],
          numericCols: [1, 2, 3, 4],
        },
        {
          type: 'p',
          text: {
            fa: 'اطلاعات تکمیلی از صورت جریان‌های نقدی و یادداشت‌ها: خالص وجه نقد حاصل از فعالیت‌های عملیاتی در سال 1 برابر 29,500 بود، اما در سال 2 **منفی** شد و 24,000 وجه نقد از عملیات خارج شد. شرکت در سال 2 به مبلغ 27,000 دارایی ثابت خرید (سال 1: 13,000)، 40,000 وام بلندمدت تازه گرفت و 12,000 سود سهام پرداخت (سال 1: 11,500). همه فروش‌ها و همه خریدهای کالا نسیه بوده است.',
            en: 'Extra information from the cash flow statement and the notes: net cash from operating activities was 29,500 in Year 1, but turned **negative** in Year 2, an outflow of 24,000. In Year 2 the company bought 27,000 of property and equipment (Year 1: 13,000), took a new 40,000 long-term loan and paid 12,000 of dividends (Year 1: 11,500). All sales and all purchases of goods were on credit.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'شاخص روند مهرگان (ابتدای سال 1 = 100؛ شاخص = مبلغ هر تاریخ ÷ مبلغ تاریخ پایه × 100، به عدد صحیح)',
            en: 'Mehregan trend index (start of Year 1 = 100; index = amount at each date ÷ base-date amount × 100, rounded)',
          },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'ابتدای سال 1', en: 'Start of Year 1' },
            { fa: 'پایان سال 1', en: 'End of Year 1' },
            { fa: 'پایان سال 2', en: 'End of Year 2' },
          ],
          rows: [
            [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 100, 125, 225],
            [{ fa: 'موجودی کالا', en: 'Inventory' }, 100, 120, 210],
            [{ fa: 'موجودی نقد', en: 'Cash' }, 100, 117, 40],
            [{ fa: 'دارایی‌ها (کل)', en: 'Assets (all)' }, 100, 115, 155],
            [{ fa: 'بدهی‌ها (کل)', en: 'Liabilities (all)' }, 100, 112, 188],
            [{ fa: 'حقوق مالکانه (کل)', en: 'Equity (all)' }, 100, 117, 130],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'formula',
          text: {
            fa: 'درصد هم‌اندازه (عمودی) = مبلغ قلم ÷ رقم مبنا × 100',
            en: 'Common-size % (vertical) = Line item ÷ Base figure × 100',
          },
          note: {
            fa: 'مبنا در صورت سود و زیان، درآمد (فروش) و در ترازنامه، جمع دارایی‌هاست.',
            en: 'The base is revenue (sales) on the income statement and total assets on the balance sheet.',
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
          title: { fa: 'آنچه این سه نگاه نشان می‌دهند', en: 'What the three views reveal' },
          text: {
            fa: 'در نوا، تحلیل عمودی در یک نگاه نشان می‌دهد که حقوق و دستمزد بزرگ‌ترین هزینه است (28.3 درصد درآمد) و اجاره در رتبه دوم قرار دارد؛ هر برنامه کنترل هزینه باید از همین دو قلم شروع شود. در مهرگان، شاخص روند نشان می‌دهد مطالبات و موجودی کالا در دو سال بیش از دو برابر شده‌اند (225 و 210)، اما حقوق مالکانه فقط به 130 رسیده است؛ پس رشد را تأمین‌کنندگان و بانک تأمین مالی کرده‌اند (بدهی‌ها: 188). ترازنامه هم‌اندازه همین را تأیید می‌کند: سهم مطالبات و موجودی کالا از جمع دارایی‌ها از 47.8 درصد به 62.9 درصد رسیده و سهم وجه نقد از 15.2 درصد به 3.9 درصد افت کرده است.',
            en: 'For Nova, the common-size view shows at a glance that salaries are the largest cost (28.3% of revenue), followed by rent; any cost-control effort should start with those two lines. For Mehregan, the trend index shows receivables and inventory more than doubling in two years (225 and 210) while equity only reached 130: suppliers and the bank financed the growth (liabilities: 188). A common-size balance sheet confirms it: receivables plus inventory rose from 47.8% to 62.9% of total assets, while cash fell from 15.2% to 3.9%.',
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
            fa: 'نسبت‌های نقدینگی توان واحد تجاری را در پرداخت **بدهی‌های جاری** از محل **دارایی‌های جاری** می‌سنجند؛ یعنی پاسخ می‌دهند که اگر طلبکاران کوتاه‌مدت امروز پولشان را بخواهند، این پول از کجا می‌آید. اعتباردهندگان کوتاه‌مدت و تأمین‌کنندگان بیش از همه به این نسبت‌ها توجه می‌کنند. همه آن‌ها از ترازنامه در یک تاریخ به دست می‌آیند، به‌جز نسبت جریان نقد عملیاتی که یک رقم دوره‌ای هم لازم دارد.',
            en: 'Liquidity ratios measure the ability to pay **current liabilities** out of **current assets**: if short-term creditors asked for their money today, where would it come from? Short-term lenders and suppliers watch them most closely. All of them come from the balance sheet at one date, except the operating cash flow ratio, which also needs a figure for the period.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سرمایه در گردش = دارایی‌های جاری − بدهی‌های جاری',
            en: 'Working capital = Current assets − Current liabilities',
          },
          note: {
            fa: 'یک مبلغ است، نه نسبت: حاشیه اطمینانی که پس از پرداخت همه بدهی‌های جاری باقی می‌ماند. نوا: 51,400 − 2,250 = 49,150. مهرگان: سال 1 برابر 95,000 و سال 2 برابر 133,000.',
            en: 'An amount, not a ratio: the cushion left after paying every current liability. Nova: 51,400 − 2,250 = 49,150. Mehregan: 95,000 in Year 1 and 133,000 in Year 2.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت جاری = دارایی‌های جاری ÷ بدهی‌های جاری',
            en: 'Current ratio = Current assets ÷ Current liabilities',
          },
          note: {
            fa: 'نشان می‌دهد در برابر هر واحد بدهی جاری چند واحد دارایی جاری وجود دارد. نسبت کمتر از 1 هشداری درباره نقدینگی است؛ در بسیاری از صنایع رقمی حدود 1.5 تا 2 مناسب تلقی می‌شود، اما نسبت بسیار بالا هم می‌تواند نشانه وجه نقد راکد یا موجودی کالای انباشته باشد. مهرگان: سال 1 برابر 150,000 ÷ 55,000 = 2.73 و سال 2 برابر 213,000 ÷ 80,000 = 2.66.',
            en: 'Current assets available per unit of current liabilities. Below 1 is a liquidity warning; around 1.5 to 2 is comfortable in many industries, though a very high ratio can signal idle cash or piled-up inventory. Mehregan: 150,000 ÷ 55,000 = 2.73 in Year 1 and 213,000 ÷ 80,000 = 2.66 in Year 2.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت آنی = (موجودی نقد + سرمایه‌گذاری‌های کوتاه‌مدت + حساب‌های دریافتنی) ÷ بدهی‌های جاری',
            en: 'Quick ratio = (Cash + Short-term investments + Accounts receivable) ÷ Current liabilities',
          },
          note: {
            fa: 'آزمونی سخت‌گیرانه‌تر است: موجودی کالا، ملزومات و پیش‌پرداخت‌ها را کنار می‌گذارد، چون به‌سرعت به نقد تبدیل نمی‌شوند. نسبت آنی حدود 1 یا بیشتر معمولاً اطمینان‌بخش است. مهرگان: سال 1 برابر (35,000 + 50,000) ÷ 55,000 = 1.55 و سال 2 برابر (12,000 + 90,000) ÷ 80,000 = 1.28.',
            en: 'A stricter “acid test”: it leaves out inventory, supplies and prepayments because they cannot be turned into cash quickly. A quick ratio of about 1 or more is usually reassuring. Mehregan: (35,000 + 50,000) ÷ 55,000 = 1.55 in Year 1 and (12,000 + 90,000) ÷ 80,000 = 1.28 in Year 2.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت وجه نقد = (موجودی نقد + سرمایه‌گذاری‌های کوتاه‌مدت) ÷ بدهی‌های جاری',
            en: 'Cash ratio = (Cash + Short-term investments) ÷ Current liabilities',
          },
          note: {
            fa: 'سخت‌گیرانه‌ترین آزمون: فقط پولی که همین حالا در دسترس است. نوا: 46,300 ÷ 2,250 = 20.58. مهرگان: از 35,000 ÷ 55,000 = 0.64 در سال 1 به 12,000 ÷ 80,000 = 0.15 در سال 2 رسیده است؛ یعنی در پایان سال 2 فقط 15 درصد بدهی‌های جاری را می‌تواند فوراً بپردازد.',
            en: 'The strictest test: only money that is available right now. Nova: 46,300 ÷ 2,250 = 20.58. Mehregan fell from 35,000 ÷ 55,000 = 0.64 in Year 1 to 12,000 ÷ 80,000 = 0.15 in Year 2: at the end of Year 2 it could pay only 15% of its current liabilities immediately.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت جریان نقد عملیاتی = خالص وجه نقد حاصل از فعالیت‌های عملیاتی ÷ بدهی‌های جاری',
            en: 'Operating cash flow ratio = Net cash from operating activities ÷ Current liabilities',
          },
          note: {
            fa: 'نسبت‌های قبلی عکسی از یک روزند؛ این نسبت می‌پرسد عملیات طی دوره چقدر پول ساخته است. نوا: 2,300 ÷ 2,250 = 1.02. مهرگان: سال 1 برابر 29,500 ÷ 55,000 = 0.54؛ در سال 2 جریان نقد عملیاتی منفی است (خروج 24,000)، پس نسبت هم منفی است (حدود 0.30 منفی) و عملیات هیچ بخشی از بدهی‌های جاری را تأمین نکرده است.',
            en: 'The earlier ratios are a photo of one day; this one asks how much cash operations actually produced during the period. Nova: 2,300 ÷ 2,250 = 1.02. Mehregan: 29,500 ÷ 55,000 = 0.54 in Year 1; in Year 2 operating cash flow is an outflow of 24,000, so the ratio is negative (about −0.30) and operations covered none of the current liabilities.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مهرگان: نقدینگی در دو سال', en: 'Mehregan: liquidity over two years' },
          head: [
            { fa: 'نسبت', en: 'Measure' },
            { fa: 'سال 1', en: 'Year 1' },
            { fa: 'سال 2', en: 'Year 2' },
            { fa: 'جهت', en: 'Direction' },
          ],
          rows: [
            [{ fa: 'سرمایه در گردش', en: 'Working capital' }, 95000, 133000, { fa: 'بهتر به نظر می‌رسد', en: 'Looks better' }],
            [{ fa: 'نسبت جاری', en: 'Current ratio' }, { fa: '2.73', en: '2.73' }, { fa: '2.66', en: '2.66' }, { fa: 'تقریباً ثابت', en: 'Roughly flat' }],
            [{ fa: 'نسبت آنی', en: 'Quick ratio' }, { fa: '1.55', en: '1.55' }, { fa: '1.28', en: '1.28' }, { fa: 'ضعیف‌تر', en: 'Weaker' }],
            [{ fa: 'نسبت وجه نقد', en: 'Cash ratio' }, { fa: '0.64', en: '0.64' }, { fa: '0.15', en: '0.15' }, { fa: 'بسیار ضعیف‌تر', en: 'Much weaker' }],
            [
              { fa: 'نسبت جریان نقد عملیاتی', en: 'Operating cash flow ratio' },
              { fa: '0.54', en: '0.54' },
              { fa: 'منفی (0.30)', en: '−0.30' },
              { fa: 'بسیار ضعیف‌تر', en: 'Much weaker' },
            ],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'سرمایه در گردش بیشتر، نقدینگی بدتر', en: 'More working capital, weaker liquidity' },
          text: {
            fa: 'سرمایه در گردش مهرگان 38,000 بیشتر شده و نسبت جاری تقریباً ثابت مانده است؛ کسی که فقط این دو رقم را ببیند خیالش راحت می‌شود. اما رشد دارایی‌های جاری از **مطالبات و موجودی کالا** آمده، نه از وجه نقد. کیفیت دارایی‌های جاری به اندازه مقدار آن‌ها مهم است: همیشه ترکیب آن‌ها و نسبت‌های سخت‌گیرانه‌تر را کنار نسبت جاری ببینید.',
            en: 'Mehregan’s working capital grew by 38,000 and its current ratio barely moved; anyone who looked only at those two figures would relax. But the growth in current assets came from **receivables and inventory**, not cash. The quality of current assets matters as much as their amount: always read their make-up and the stricter ratios alongside the current ratio.',
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
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: پیش‌دریافت از مشتریان', en: 'In practice: advances from customers' },
          text: {
            fa: 'در صورت‌های مالی برخی شرکت‌های ایرانی، مانند خودروسازان و سازندگان مسکن که پیش‌فروش می‌کنند، **پیش‌دریافت از مشتریان** بخش بزرگی از بدهی‌های جاری است. این بدهی با تحویل کالا تسویه می‌شود، نه با پرداخت پول؛ پس نسبت جاری پایین چنین شرکتی لزوماً به معنای خطر پرداخت نیست. پیش از قضاوت، یادداشت بدهی‌های جاری را بخوانید و ببینید چه سهمی از آن‌ها واقعاً با وجه نقد پرداخت می‌شود.',
            en: 'In the statements of some Iranian companies, such as car makers and housing developers that pre-sell, **advances from customers** are a large part of current liabilities. They are settled by delivering goods, not by paying cash, so a low current ratio at such a company does not necessarily mean a payment risk. Before judging, read the note on current liabilities and see how much of them will really be paid in cash.',
          },
        },
      ],
    },
    {
      id: 'profitability',
      title: { fa: 'نسبت‌های سودآوری و تجزیه دوپونت', en: 'Profitability ratios and the DuPont breakdown' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نسبت‌های سودآوری سود را با فروشی که آن را ایجاد کرده (**حاشیه‌ها**) یا با منابعی که برای کسب آن به کار رفته (**بازده‌ها**) مقایسه می‌کنند. مالکان و سرمایه‌گذاران معمولاً پیش از هر چیز به این گروه نگاه می‌کنند. حاشیه‌ها را از صورت سود و زیان و بازده‌ها را از ترکیب صورت سود و زیان و ترازنامه به دست می‌آوریم.',
            en: 'Profitability ratios compare profit with the sales that produced it (**margins**) or with the resources used to earn it (**returns**). Owners and investors usually look here first. Margins come from the income statement alone; returns combine the income statement with the balance sheet.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'حاشیه سود ناخالص = سود ناخالص ÷ فروش خالص × 100',
            en: 'Gross margin = Gross profit ÷ Net sales × 100',
          },
          note: {
            fa: 'نشان می‌دهد از هر 100 واحد فروش، پس از پوشش بهای خود کالا چه مقدار می‌ماند. مخصوص شرکت‌های بازرگانی و تولیدی است: فروشگاه آرمان در درس موجودی کالا (روش FIFO) 4,100 ÷ 7,500 = 54.7 درصد؛ مهرگان از 30 درصد در سال 1 به 28 درصد در سال 2 رسیده است. نوا خدماتی است و بهای تمام‌شده کالای فروش‌رفته ندارد، پس این نسبت برایش کاربرد ندارد.',
            en: 'What is left from every 100 of sales after covering the cost of the goods themselves. It applies to merchandisers and manufacturers: Arman Store in the lesson on inventory (FIFO) had 4,100 ÷ 7,500 = 54.7%; Mehregan slipped from 30% in Year 1 to 28% in Year 2. Nova is a service business with no cost of goods sold, so the ratio does not apply to it.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'حاشیه سود عملیاتی = سود عملیاتی ÷ فروش × 100',
            en: 'Operating margin = Operating profit ÷ Sales × 100',
          },
          note: {
            fa: 'کارایی فعالیت اصلی، پیش از هزینه‌های تأمین مالی و مالیات. نوا: 5,000 ÷ 12,700 = 39.4 درصد. مهرگان: از 48,000 ÷ 400,000 = 12 درصد به 48,000 ÷ 480,000 = 10 درصد.',
            en: 'How efficient the core business is, before financing costs and tax. Nova: 5,000 ÷ 12,700 = 39.4%. Mehregan: from 48,000 ÷ 400,000 = 12% to 48,000 ÷ 480,000 = 10%.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'حاشیه سود خالص = سود خالص ÷ درآمد (فروش) × 100',
            en: 'Net profit margin = Net income ÷ Revenue × 100',
          },
          note: {
            fa: 'نشان می‌دهد از هر 100 واحد درآمد، چند واحد به سود خالص تبدیل می‌شود. نوا: 4,850 ÷ 12,700 = 38.2 درصد. مهرگان: از 31,500 ÷ 400,000 = 7.9 درصد به 27,000 ÷ 480,000 = 5.6 درصد.',
            en: 'How much of every 100 of revenue ends up as net profit. Nova: 4,850 ÷ 12,700 = 38.2%. Mehregan: from 31,500 ÷ 400,000 = 7.9% to 27,000 ÷ 480,000 = 5.6%.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'بازده دارایی‌ها (ROA) = سود خالص ÷ میانگین جمع دارایی‌ها × 100',
            en: 'Return on assets (ROA) = Net income ÷ Average total assets × 100',
          },
          note: {
            fa: 'می‌سنجد کل دارایی‌ها، صرف‌نظر از منبع تأمین آن‌ها، چقدر سود ایجاد کرده‌اند. چون سود رقم یک دوره است و دارایی‌ها رقم یک تاریخ، از میانگین ابتدا و پایان دوره استفاده می‌کنیم. مهرگان سال 2: 27,000 ÷ ((230,000 + 310,000) ÷ 2) = 27,000 ÷ 270,000 = 10.0 درصد (سال 1: 31,500 ÷ 215,000 = 14.7 درصد). نوا (یک‌ماهه و با دارایی‌های پایان دوره، چون مانده ابتدای دوره صفر است): 4,850 ÷ 71,100 = 6.8 درصد.',
            en: 'How effectively all assets, however financed, generate profit. Profit covers a period while assets are measured at a date, so we use the average of the opening and closing balances. Mehregan Year 2: 27,000 ÷ ((230,000 + 310,000) ÷ 2) = 27,000 ÷ 270,000 = 10.0% (Year 1: 31,500 ÷ 215,000 = 14.7%). Nova (one month, on ending assets because the opening balance is zero): 4,850 ÷ 71,100 = 6.8%.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'بازده حقوق مالکانه (ROE) = سود خالص ÷ میانگین حقوق مالکانه × 100',
            en: 'Return on equity (ROE) = Net income ÷ Average owners’ equity × 100',
          },
          note: {
            fa: 'بازده مالک بر سرمایه‌ای که در کسب‌وکار دارد. مهرگان سال 2: 27,000 ÷ ((135,000 + 150,000) ÷ 2) = 27,000 ÷ 142,500 = 18.9 درصد (سال 1: 31,500 ÷ 125,000 = 25.2 درصد). نوا (یک‌ماهه): 4,850 ÷ 53,850 = 9.0 درصد.',
            en: 'The owners’ return on their stake in the business. Mehregan Year 2: 27,000 ÷ ((135,000 + 150,000) ÷ 2) = 27,000 ÷ 142,500 = 18.9% (Year 1: 31,500 ÷ 125,000 = 25.2%). Nova (one month): 4,850 ÷ 53,850 = 9.0%.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا ROE از ROA بیشتر است؟', en: 'Why is ROE higher than ROA?' },
          text: {
            fa: 'بازده حقوق مالکانه نوا (9.0 درصد) از بازده دارایی‌هایش (6.8 درصد) بیشتر است، چون بخشی از دارایی‌ها با وام تأمین شده است. هزینه بهره وام ماهانه حدود 1 درصد است (12 درصد سالانه)، در حالی که دارایی‌ها 6.8 درصد بازده داده‌اند؛ این مازاد به مالک می‌رسد. به این اثر **اهرم مالی** می‌گویند. اهرم شمشیری دولبه است: اگر بازده کاهش یابد، بهره همچنان باید پرداخت شود.',
            en: 'Nova’s ROE (9.0%) exceeds its ROA (6.8%) because part of the assets is financed by the loan. The loan costs about 1% a month (12% a year) while the assets earned 6.8%, and that surplus goes to the owner: the effect of **financial leverage**. Leverage cuts both ways: if returns fall, the interest is still due.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'تجزیه دوپونت: بازده حقوق مالکانه = حاشیه سود خالص × گردش دارایی‌ها × ضریب اهرم مالکانه',
            en: 'DuPont analysis: ROE = Net profit margin × Asset turnover × Equity multiplier',
          },
          note: {
            fa: '(سود خالص ÷ فروش) × (فروش ÷ میانگین دارایی‌ها) × (میانگین دارایی‌ها ÷ میانگین حقوق مالکانه). فروش و دارایی‌ها در ضرب حذف می‌شوند و همان سود خالص ÷ حقوق مالکانه باقی می‌ماند. ارزش این تجزیه در این است که نشان می‌دهد بازده از کجا آمده: از سود هر فروش، از سرعت به‌کارگیری دارایی‌ها یا از بدهی.',
            en: '(Net income ÷ Sales) × (Sales ÷ Average assets) × (Average assets ÷ Average equity). Sales and assets cancel out, leaving net income ÷ equity. The value of the breakdown is that it shows where the return comes from: profit on each sale, how hard the assets work, or debt.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'تجزیه دوپونت بازده حقوق مالکانه (ارقام تقریبی‌اند؛ حاصل‌ضرب ممکن است در رقم آخر کمی فرق کند)',
            en: 'DuPont breakdown of ROE (figures are rounded, so the product may differ slightly in the last digit)',
          },
          head: [
            { fa: 'واحد و دوره', en: 'Business and period' },
            { fa: 'حاشیه سود خالص', en: 'Net margin' },
            { fa: 'گردش دارایی‌ها', en: 'Asset turnover' },
            { fa: 'ضریب اهرم مالکانه', en: 'Equity multiplier' },
            { fa: 'بازده حقوق مالکانه', en: 'ROE' },
          ],
          rows: [
            [{ fa: 'مهرگان، سال 1', en: 'Mehregan, Year 1' }, { fa: '7.9%', en: '7.9%' }, { fa: '1.86', en: '1.86' }, { fa: '1.72', en: '1.72' }, { fa: '25.2%', en: '25.2%' }],
            [{ fa: 'مهرگان، سال 2', en: 'Mehregan, Year 2' }, { fa: '5.6%', en: '5.6%' }, { fa: '1.78', en: '1.78' }, { fa: '1.89', en: '1.89' }, { fa: '18.9%', en: '18.9%' }],
            [{ fa: 'نوا، ماه اول', en: 'Nova, first month' }, { fa: '38.2%', en: '38.2%' }, { fa: '0.18', en: '0.18' }, { fa: '1.32', en: '1.32' }, { fa: '9.0%', en: '9.0%' }],
          ],
          numericCols: [1, 2, 3, 4],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'دوپونت درباره مهرگان چه می‌گوید؟', en: 'What DuPont says about Mehregan' },
          text: {
            fa: 'بازده حقوق مالکانه مهرگان از 25.2 به 18.9 درصد افت کرده است. دوپونت علت را نشان می‌دهد: حاشیه سود خالص از 7.9 به 5.6 درصد و گردش دارایی‌ها از 1.86 به 1.78 کاهش یافته‌اند. تنها جزئی که بالا رفته **ضریب اهرم مالکانه** است (از 1.72 به 1.89)؛ یعنی شرکت با بدهی بیشتر جلوی افت بیشتر بازده را گرفته است. بازدهی که با بدهی بیشتر حفظ شود، ریسک بیشتری هم با خود دارد.',
            en: 'Mehregan’s ROE fell from 25.2% to 18.9%. DuPont shows why: the net margin dropped from 7.9% to 5.6% and asset turnover from 1.86 to 1.78. The only component that rose is the **equity multiplier** (from 1.72 to 1.89): more debt kept the return from falling further. A return propped up by extra debt comes with extra risk.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سود هر سهم (EPS) = سود خالص متعلق به سهامداران عادی ÷ میانگین موزون تعداد سهام عادی؛ نسبت قیمت به سود (P/E) = قیمت بازار هر سهم ÷ سود هر سهم',
            en: 'Earnings per share (EPS) = Net income attributable to ordinary shareholders ÷ Weighted average ordinary shares; Price/earnings (P/E) = Market price per share ÷ EPS',
          },
          note: {
            fa: 'این دو **نسبت بازار** فقط برای شرکت‌هایی معنا دارند که سهامشان معامله می‌شود. مثال: سود خالص 50,000 و 100,000 سهم یعنی سود هر سهم 0.5؛ اگر هر سهم در بازار 4 معامله شود، P/E برابر 8 است، یعنی بازار حاضر است 8 برابر سود یک سال را بپردازد. **نسبت تقسیم سود** (سود سهام ÷ سود خالص) هم نشان می‌دهد چه سهمی از سود توزیع شده است: مهرگان در سال 2 برابر 12,000 ÷ 27,000 = 44.4 درصد سودش را تقسیم کرده است (سال 1: 36.5 درصد).',
            en: 'These **market ratios** only make sense for companies whose shares are traded. Example: net income of 50,000 and 100,000 shares give EPS of 0.5; if a share trades at 4, the P/E is 8, meaning the market will pay 8 times one year’s earnings. The **dividend payout ratio** (dividends ÷ net income) shows how much of the profit was distributed: Mehregan paid out 12,000 ÷ 27,000 = 44.4% in Year 2 (Year 1: 36.5%).',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'یک احتیاط درباره سود نوا', en: 'A caveat on Nova’s profit' },
          text: {
            fa: 'سارا برای کار خودش حقوقی دریافت نمی‌کند و برداشت هم هزینه نیست؛ مالیات بر درآمد هم در این مثال کسر نشده است. بنابراین حاشیه سود 38.2 درصدی، ارزش کار مالک و مالیات را در بر ندارد و مقایسه آن با شرکتی که مدیر حقوق‌بگیر دارد، مانند مهرگان، باید با احتیاط انجام شود.',
            en: 'Sara pays herself no salary, drawings are not an expense, and no income tax has been deducted in this example. The 38.2% margin therefore excludes both the value of the owner’s own work and tax, so compare it cautiously with a company that employs salaried managers, such as Mehregan.',
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
            fa: 'سهم دارایی‌هایی که با منابع اعتباردهندگان تأمین شده است؛ هرچه بالاتر، ریسک برای وام‌دهندگان بیشتر. نوا: 17,250 ÷ 71,100 = 24.3 درصد. مهرگان: از 95,000 ÷ 230,000 = 41.3 درصد به 160,000 ÷ 310,000 = 51.6 درصد رسیده است؛ اکنون بیش از نیمی از دارایی‌ها با بدهی تأمین شده است.',
            en: 'The share of assets financed by creditors; the higher it is, the greater the risk for lenders. Nova: 17,250 ÷ 71,100 = 24.3%. Mehregan rose from 95,000 ÷ 230,000 = 41.3% to 160,000 ÷ 310,000 = 51.6%: more than half of its assets are now debt-financed.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت بدهی به حقوق مالکانه = جمع بدهی‌ها ÷ جمع حقوق مالکانه',
            en: 'Debt-to-equity = Total liabilities ÷ Total equity',
          },
          note: {
            fa: 'در برابر هر واحد سرمایه مالک چند واحد بدهی وجود دارد. نوا: 17,250 ÷ 53,850 = 0.32. مهرگان: از 0.70 به 1.07. نسبت مکمل آن **نسبت مالکانه** است (حقوق مالکانه ÷ جمع دارایی‌ها) و همیشه نسبت بدهی و نسبت مالکانه با هم 100 درصد می‌شوند: برای نوا 75.7 درصد و برای مهرگان در سال 2 برابر 48.4 درصد.',
            en: 'Debt per unit of the owners’ money. Nova: 17,250 ÷ 53,850 = 0.32. Mehregan: from 0.70 to 1.07. Its mirror image is the **equity ratio** (equity ÷ total assets); the debt ratio and the equity ratio always add up to 100%: 75.7% for Nova and 48.4% for Mehregan in Year 2.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نسبت پوشش بهره = سود قبل از بهره و مالیات ÷ هزینه بهره',
            en: 'Interest coverage = Earnings before interest and tax (EBIT) ÷ Interest expense',
          },
          note: {
            fa: 'نشان می‌دهد سود عملیاتی چند برابر هزینه بهره است؛ رقم کمتر از حدود 1.5 تا 2 زنگ خطر است. نوا: (4,850 + 150) ÷ 150 = 5,000 ÷ 150 = 33.3 برابر. مهرگان: از 48,000 ÷ 6,000 = 8 برابر به 48,000 ÷ 12,000 = 4 برابر نصف شده است، چون سود عملیاتی ثابت مانده و بهره دو برابر شده است.',
            en: 'How many times operating profit covers interest; below roughly 1.5 to 2 is a red flag. Nova: (4,850 + 150) ÷ 150 = 5,000 ÷ 150 = 33.3 times. Mehregan halved from 48,000 ÷ 6,000 = 8 times to 48,000 ÷ 12,000 = 4 times, because operating profit stood still while interest doubled.',
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
            fa: 'نشان می‌دهد مطالبات در هر دوره چند بار وصول و جایگزین می‌شوند. فروش نسیه نوا 4,700 است (4,000 خدمات نسیه + 700 درآمد صورت‌حساب‌نشده)؛ با مانده پایان دوره: 4,700 ÷ 2,200 = 2.14 بار در ماه. مهرگان (همه فروش نسیه): سال 1 برابر 400,000 ÷ 45,000 = 8.89 بار و سال 2 برابر 480,000 ÷ 70,000 = 6.86 بار.',
            en: 'How many times receivables are collected and replaced in a period. Nova’s credit sales are 4,700 (4,000 billed on account + 700 earned but unbilled); on the ending balance: 4,700 ÷ 2,200 = 2.14 times in the month. Mehregan (all sales on credit): 400,000 ÷ 45,000 = 8.89 times in Year 1 and 480,000 ÷ 70,000 = 6.86 times in Year 2.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'دوره وصول مطالبات (روز) = تعداد روزهای دوره ÷ گردش حساب‌های دریافتنی',
            en: 'Days sales outstanding (DSO) = Days in the period ÷ Accounts receivable turnover',
          },
          note: {
            fa: 'میانگین تعداد روزهایی که وصول طول می‌کشد؛ باید با شرایط اعتباری اعطاشده به مشتریان مقایسه شود. نوا: 30 ÷ 2.14 ≈ 14 روز. مهرگان (سال 365 روزه): از 365 ÷ 8.89 ≈ 41 روز به 365 ÷ 6.86 ≈ 53 روز رسیده است؛ مشتریان حدود 12 روز دیرتر می‌پردازند.',
            en: 'The average number of days it takes to collect; compare it with the credit terms given to customers. Nova: 30 ÷ 2.14 ≈ 14 days. Mehregan (365-day year): from 365 ÷ 8.89 ≈ 41 days to 365 ÷ 6.86 ≈ 53 days; customers are paying about 12 days later.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'گردش موجودی کالا = بهای تمام‌شده کالای فروش‌رفته ÷ میانگین موجودی کالا؛ دوره نگهداری موجودی (روز) = 365 ÷ گردش موجودی کالا',
            en: 'Inventory turnover = Cost of goods sold ÷ Average inventory; Days in inventory = 365 ÷ Inventory turnover',
          },
          note: {
            fa: 'موجودی چند بار در دوره فروخته و جایگزین می‌شود و هر کالا به‌طور میانگین چند روز در انبار می‌ماند. صورت کسر بهای تمام‌شده است نه فروش، چون موجودی کالا به بها ثبت شده است. نوا موجودی کالا ندارد. فروشگاه آرمان در درس موجودی کالا (FIFO): 3,400 ÷ 1,250 = 2.72 بار. مهرگان: از 280,000 ÷ 55,000 = 5.09 بار (حدود 72 روز) به 345,600 ÷ 82,500 = 4.19 بار (حدود 87 روز).',
            en: 'How many times inventory is sold and replaced, and how many days an item sits in the warehouse on average. The numerator is cost of goods sold, not sales, because inventory is carried at cost. Nova holds no inventory. Arman Store in the lesson on inventory (FIFO): 3,400 ÷ 1,250 = 2.72 times. Mehregan: from 280,000 ÷ 55,000 = 5.09 times (about 72 days) to 345,600 ÷ 82,500 = 4.19 times (about 87 days).',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'گردش حساب‌های پرداختنی = خرید نسیه ÷ میانگین حساب‌های پرداختنی؛ دوره پرداخت بدهی‌ها (روز) = 365 ÷ این گردش',
            en: 'Accounts payable turnover = Credit purchases ÷ Average accounts payable; Days payable outstanding (DPO) = 365 ÷ this turnover',
          },
          note: {
            fa: 'اگر خرید در صورت‌های مالی نیامده باشد، از این رابطه به دست می‌آید: **خرید = بهای تمام‌شده کالای فروش‌رفته + موجودی پایان دوره − موجودی ابتدای دوره**. مهرگان سال 2: 345,600 + 105,000 − 60,000 = 390,600؛ گردش = 390,600 ÷ 53,000 = 7.37 بار و دوره پرداخت حدود 50 روز (سال 1: خرید 290,000، گردش 7.73 بار، حدود 47 روز). برخی تحلیلگران برای سادگی به‌جای خرید از بهای تمام‌شده استفاده می‌کنند؛ مهم این است که در همه سال‌ها یک روش به کار رود.',
            en: 'If purchases are not shown, work them out: **Purchases = Cost of goods sold + Ending inventory − Beginning inventory**. Mehregan Year 2: 345,600 + 105,000 − 60,000 = 390,600; turnover = 390,600 ÷ 53,000 = 7.37 times, about 50 days (Year 1: purchases 290,000, 7.73 times, about 47 days). Some analysts use cost of goods sold instead of purchases for simplicity; what matters is using the same method for every year.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'چرخه تبدیل وجه نقد (روز) = دوره وصول مطالبات + دوره نگهداری موجودی − دوره پرداخت بدهی‌ها',
            en: 'Cash conversion cycle (days) = DSO + Days in inventory − DPO',
          },
          note: {
            fa: 'تعداد روزهایی که پول شرکت، از پرداخت به تأمین‌کننده تا وصول از مشتری، در کالا و مطالبات «گیر» است. مهرگان: سال 1 برابر 41 + 72 − 47 = 66 روز و سال 2 برابر 53 + 87 − 50 = 90 روز. هزینه کالای فروش‌رفته هر روز سال 2 حدود 345,600 ÷ 365 ≈ 950 است؛ پس 24 روز اضافه یعنی حدود 22,700 پول بیشتر که در مطالبات و موجودی کالا خوابیده است، تقریباً همان کاهش 23,000 در موجودی نقد مهرگان.',
            en: 'The number of days the company’s money is “stuck” in goods and receivables, from paying the supplier to collecting from the customer. Mehregan: 41 + 72 − 47 = 66 days in Year 1 and 53 + 87 − 50 = 90 days in Year 2. Each day of Year 2 cost of sales is about 345,600 ÷ 365 ≈ 950, so 24 extra days lock up roughly 22,700 more in receivables and inventory, almost exactly Mehregan’s 23,000 fall in cash.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'گردش دارایی‌ها = درآمد (فروش) ÷ میانگین جمع دارایی‌ها',
            en: 'Asset turnover = Revenue ÷ Average total assets',
          },
          note: {
            fa: 'نشان می‌دهد هر واحد دارایی چند واحد فروش ایجاد کرده است. نوا (یک‌ماهه، با دارایی‌های پایان دوره): 12,700 ÷ 71,100 = 0.18. مهرگان: از 400,000 ÷ 215,000 = 1.86 به 480,000 ÷ 270,000 = 1.78.',
            en: 'Revenue generated per unit of assets. Nova (one month, on ending assets): 12,700 ÷ 71,100 = 0.18. Mehregan: from 400,000 ÷ 215,000 = 1.86 to 480,000 ÷ 270,000 = 1.78.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'جهت گردش‌ها را اشتباه نخوانید', en: 'Don’t misread the direction of turnover ratios' },
          text: {
            fa: 'گردش بالاتر یعنی روزهای کمتر. افزایش **گردش** مطالبات یا موجودی کالا معمولاً خبر خوب است، اما افزایش **دوره** وصول یا دوره نگهداری خبر بد. در دوره پرداخت بدهی‌ها برعکس است: دوره طولانی‌تر به نقد شرکت کمک می‌کند، به شرط آنکه با توافق تأمین‌کننده باشد و نشانه ناتوانی در پرداخت نباشد.',
            en: 'Higher turnover means fewer days. A rise in receivables or inventory **turnover** is usually good news, while a rise in collection or inventory **days** is bad news. Payables work the other way: a longer payment period helps the company’s cash, provided it is agreed with the supplier and is not a sign of inability to pay.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: تورم، موجودی کالا و چک‌های مدت‌دار', en: 'In practice: inflation, inventory and post-dated cheques' },
          text: {
            fa: 'در اقتصاد تورمی، بسیاری از شرکت‌های ایرانی آگاهانه موجودی بیشتری نگه می‌دارند، چون انتظار دارند خرید بعدی گران‌تر باشد. این کار دوره نگهداری موجودی را طولانی‌تر می‌کند، بی‌آنکه لزوماً نشانه کالای راکد باشد؛ پس پیش از قضاوت، یادداشت موجودی کالا را بخوانید (کالای راکد یا کم‌گردش و کاهش ارزش شناسایی‌شده). همچنین بخش بزرگی از فروش نسیه در ایران با **چک مدت‌دار** وصول می‌شود که در «اسناد دریافتنی» ثبت می‌شود؛ هنگام محاسبه دوره وصول و نسبت آنی، اسناد دریافتنی تجاری را کنار حساب‌های دریافتنی بیاورید و احتمال برگشت چک را هم در نظر بگیرید.',
            en: 'In an inflationary economy many Iranian companies deliberately hold more inventory, expecting the next purchase to cost more. That lengthens days in inventory without necessarily meaning slow-moving goods, so read the inventory note (slow-moving items and write-downs) before judging. Also, much of Iran’s credit selling is settled with **post-dated cheques** recorded as notes receivable; when you compute DSO and the quick ratio, add trade notes receivable to accounts receivable, and allow for the risk of bounced cheques.',
          },
        },
      ],
    },
    {
      id: 'worked-analysis',
      title: { fa: 'تحلیل کامل: نوا و مهرگان', en: 'Full worked analysis: Nova and Mehregan' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'اکنون همه نسبت‌ها را کنار هم می‌گذاریم؛ اول برای نوا با ارقام تعدیل‌شده پایان ماه اول. چون نوا تازه شروع به کار کرده و همه مانده‌های ابتدای دوره‌اش صفر است، به‌جای میانگین از **مانده‌های پایان دوره** و از نتایج **یک‌ماهه** استفاده می‌کنیم.',
            en: 'Now we put the whole set side by side, starting with Nova’s adjusted figures at the end of its first month. Because Nova has just started and every opening balance is zero, we use **ending balances** instead of averages, and **one month** of results.',
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
              { fa: 'حاشیه قوی؛ اما بدون حقوق مالک و مالیات', en: 'Strong margin, but excludes owner’s pay and tax' },
            ],
            [
              { fa: 'بازده دارایی‌ها (ماهانه)', en: 'ROA (monthly)' },
              { fa: '4,850 ÷ 71,100', en: '4,850 ÷ 71,100' },
              { fa: '6.8 درصد', en: '6.8%' },
              { fa: 'برای یک ماه بسیار بالاست؛ آن را ساده در 12 ضرب نکنید', en: 'Very high for one month; do not simply multiply by 12' },
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
              { fa: 'حدود یک‌چهارم دارایی‌ها با بدهی تأمین شده؛ محافظه‌کارانه', en: 'About a quarter of assets debt-financed: conservative' },
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
            fa: 'نسبت‌های نقدینگی، سودآوری، اهرمی و کارایی یک شرکت نمونه روی شاخص‌های عقربه‌ای؛ هر عقربه را با محدوده‌ای که در این درس دیدید مقایسه کنید.',
            en: 'Liquidity, profitability, leverage and efficiency ratios for a sample company, shown as gauges; compare each needle with the ranges discussed in this lesson.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا نسبت‌های نوا این‌قدر غیرعادی‌اند؟', en: 'Why do Nova’s ratios look so extreme?' },
          text: {
            fa: 'یک کسب‌وکار تازه‌تأسیس پس از یک ماه تصویر عادی‌ای ارائه نمی‌دهد: وجه نقد حاصل از تأمین مالی هنوز خرج نشده، پس نقدینگی بسیار بالا و گردش دارایی‌ها پایین است. در عمل، نسبت‌ها معمولاً با **ارقام سالانه** و **میانگین مانده‌های** ابتدا و پایان دوره محاسبه می‌شوند؛ مثلاً ROA = سود خالص سالانه ÷ میانگین جمع دارایی‌ها. اگر برای نوا از میانگین استفاده می‌کردیم، چون مانده‌های ابتدای دوره صفرند، مخرج‌ها نصف و نسبت‌ها دو برابر می‌شدند؛ که خود تحریف دیگری است.',
            en: 'A brand-new business one month in does not give a normal picture: the cash raised from financing has not been spent yet, so liquidity is very high and asset turnover is low. In practice, ratios are usually computed on **annual figures** and **average balances** (opening plus closing, divided by two), e.g. ROA = annual net income ÷ average total assets. Had we averaged Nova’s balances, the zero opening balances would halve every denominator and double the ratios: simply a different distortion.',
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
        { type: 'h', text: { fa: 'تحلیل کامل مهرگان', en: 'A full analysis of Mehregan' } },
        {
          type: 'table',
          caption: {
            fa: 'شرکت بازرگانی مهرگان: نسبت‌های اصلی در دو سال (بازده‌ها و گردش‌ها با میانگین مانده‌ها، سال 365 روزه)',
            en: 'Mehregan Trading Co.: key ratios for two years (returns and turnovers on average balances, 365-day year)',
          },
          head: [
            { fa: 'نسبت', en: 'Ratio' },
            { fa: 'سال 1', en: 'Year 1' },
            { fa: 'سال 2', en: 'Year 2' },
            { fa: 'ارزیابی', en: 'Assessment' },
          ],
          rows: [
            [{ fa: 'نسبت جاری', en: 'Current ratio' }, { fa: '2.73', en: '2.73' }, { fa: '2.66', en: '2.66' }, { fa: 'تقریباً ثابت', en: 'Roughly flat' }],
            [{ fa: 'نسبت آنی', en: 'Quick ratio' }, { fa: '1.55', en: '1.55' }, { fa: '1.28', en: '1.28' }, { fa: 'ضعیف‌تر', en: 'Weaker' }],
            [{ fa: 'نسبت وجه نقد', en: 'Cash ratio' }, { fa: '0.64', en: '0.64' }, { fa: '0.15', en: '0.15' }, { fa: 'بسیار ضعیف‌تر', en: 'Much weaker' }],
            [{ fa: 'نسبت جریان نقد عملیاتی', en: 'Operating cash flow ratio' }, { fa: '0.54', en: '0.54' }, { fa: 'منفی (0.30)', en: '−0.30' }, { fa: 'بسیار ضعیف‌تر', en: 'Much weaker' }],
            [{ fa: 'حاشیه سود ناخالص', en: 'Gross margin' }, { fa: '30%', en: '30%' }, { fa: '28%', en: '28%' }, { fa: 'ضعیف‌تر', en: 'Weaker' }],
            [{ fa: 'حاشیه سود عملیاتی', en: 'Operating margin' }, { fa: '12%', en: '12%' }, { fa: '10%', en: '10%' }, { fa: 'ضعیف‌تر', en: 'Weaker' }],
            [{ fa: 'حاشیه سود خالص', en: 'Net profit margin' }, { fa: '7.9%', en: '7.9%' }, { fa: '5.6%', en: '5.6%' }, { fa: 'ضعیف‌تر', en: 'Weaker' }],
            [{ fa: 'بازده دارایی‌ها', en: 'Return on assets' }, { fa: '14.7%', en: '14.7%' }, { fa: '10.0%', en: '10.0%' }, { fa: 'ضعیف‌تر', en: 'Weaker' }],
            [{ fa: 'بازده حقوق مالکانه', en: 'Return on equity' }, { fa: '25.2%', en: '25.2%' }, { fa: '18.9%', en: '18.9%' }, { fa: 'ضعیف‌تر', en: 'Weaker' }],
            [{ fa: 'نسبت بدهی', en: 'Debt ratio' }, { fa: '41.3%', en: '41.3%' }, { fa: '51.6%', en: '51.6%' }, { fa: 'پرریسک‌تر', en: 'Riskier' }],
            [{ fa: 'نسبت بدهی به حقوق مالکانه', en: 'Debt-to-equity' }, { fa: '0.70', en: '0.70' }, { fa: '1.07', en: '1.07' }, { fa: 'پرریسک‌تر', en: 'Riskier' }],
            [{ fa: 'پوشش بهره', en: 'Interest coverage' }, { fa: '8.0 برابر', en: '8.0×' }, { fa: '4.0 برابر', en: '4.0×' }, { fa: 'ضعیف‌تر، اما هنوز بالای محدوده خطر', en: 'Weaker, but still above the danger zone' }],
            [{ fa: 'دوره وصول مطالبات', en: 'Days sales outstanding' }, { fa: '41 روز', en: '41 days' }, { fa: '53 روز', en: '53 days' }, { fa: 'کندتر', en: 'Slower' }],
            [{ fa: 'دوره نگهداری موجودی', en: 'Days in inventory' }, { fa: '72 روز', en: '72 days' }, { fa: '87 روز', en: '87 days' }, { fa: 'کندتر', en: 'Slower' }],
            [{ fa: 'دوره پرداخت بدهی‌ها', en: 'Days payable outstanding' }, { fa: '47 روز', en: '47 days' }, { fa: '50 روز', en: '50 days' }, { fa: 'کمی طولانی‌تر', en: 'Slightly longer' }],
            [{ fa: 'چرخه تبدیل وجه نقد', en: 'Cash conversion cycle' }, { fa: '66 روز', en: '66 days' }, { fa: '90 روز', en: '90 days' }, { fa: 'بدتر', en: 'Worse' }],
            [{ fa: 'گردش دارایی‌ها', en: 'Asset turnover' }, { fa: '1.86', en: '1.86' }, { fa: '1.78', en: '1.78' }, { fa: 'کمی ضعیف‌تر', en: 'Slightly weaker' }],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**رشد بدون سود**: فروش 20 درصد رشد کرد، اما سود خالص 14.3 درصد کم شد؛ حاشیه ناخالص 2 واحد درصد افت کرد و بهره دو برابر شد.',
              en: '**Growth without profit**: sales rose 20% but net income fell 14.3%; the gross margin lost 2 percentage points and interest doubled.',
            },
            {
              fa: '**نقدینگی فریبنده**: نسبت جاری تقریباً ثابت است، اما وجه نقد از 35,000 به 12,000 رسید و جریان نقد عملیاتی منفی شد.',
              en: '**Deceptive liquidity**: the current ratio is almost unchanged, yet cash fell from 35,000 to 12,000 and operating cash flow turned negative.',
            },
            {
              fa: '**کارایی کمتر**: مشتریان 12 روز دیرتر پرداختند و کالا 15 روز بیشتر در انبار ماند؛ چرخه تبدیل وجه نقد 24 روز طولانی‌تر شد. به بیان ساده، رشد فروش با اعتبار دادن سخاوتمندانه‌تر و انبار کردن بیشتر به دست آمده است.',
              en: '**Lower efficiency**: customers paid 12 days later and goods sat 15 days longer in the warehouse; the cash conversion cycle grew by 24 days. Put simply, the extra sales were bought with looser credit and heavier stocking.',
            },
            {
              fa: '**اهرم بیشتر**: کمبود نقد با 40,000 وام تازه و پرداخت دیرتر به تأمین‌کنندگان پر شد؛ نسبت بدهی از نیمه گذشت و پوشش بهره نصف شد.',
              en: '**More leverage**: the cash gap was filled with a new 40,000 loan and slower payment to suppliers; the debt ratio passed one half and interest coverage halved.',
            },
            {
              fa: '**نقاط قوت**: شرکت هنوز سودده است، سرمایه در گردش مثبت دارد و پوشش بهره 4 برابر هنوز بالای محدوده خطر است.',
              en: '**Strengths**: the company is still profitable, has positive working capital, and interest coverage of 4 times is still above the danger zone.',
            },
            {
              fa: '**پرسش‌هایی که باید از مدیریت پرسید**: چرا حاشیه ناخالص افت کرد (تخفیف، کاهش قیمت فروش یا گرانی خرید)؟ چه بخشی از 90,000 مطالبات سررسیدگذشته است و آیا ذخیره مطالبات مشکوک‌الوصول کافی است؟ چه بخشی از 105,000 موجودی کالا راکد است؟ وام تازه صرف چه شد و پیش‌بینی جریان نقد سال آینده چیست؟',
              en: '**Questions for management**: why did the gross margin fall (discounts, lower selling prices or dearer purchases)? How much of the 90,000 of receivables is overdue, and is the allowance for doubtful accounts adequate? How much of the 105,000 of inventory is slow-moving? What was the new loan spent on, and what is next year’s cash-flow forecast?',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'نتیجه‌گیری خانم رحیمی', en: 'Ms Rahimi’s conclusion' },
          text: {
            fa: 'مهرگان سودده است و هنوز بحرانی ندارد، اما روندش نگران‌کننده است: رشد فروش را با پول بانک و تأمین‌کنندگان تأمین مالی کرده و عملیاتش اکنون وجه نقد مصرف می‌کند. وامی که فقط شکاف نقدی را پر کند، مشکل را عقب می‌اندازد. توصیه منطقی: پیش از تصمیم، پاسخ پرسش‌های بالا و پیش‌بینی جریان نقد گرفته شود و وام، در صورت تصویب، به شرط‌هایی مانند کاهش دوره وصول مطالبات و حفظ حداقل نسبت پوشش بهره گره بخورد.',
            en: 'Mehregan is profitable and not yet in crisis, but its trend is worrying: it has financed its sales growth with the bank’s and suppliers’ money, and its operations now consume cash. A loan that merely plugs the cash gap would only postpone the problem. A sensible recommendation: get answers to the questions above and a cash-flow forecast before deciding, and, if the loan is approved, tie it to conditions (covenants) such as cutting collection days and keeping interest coverage above an agreed minimum.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'هدف را روشن کنید', en: 'Define the purpose' },
              text: {
                fa: 'تحلیل برای چه کسی و برای کدام تصمیم است: وام، سرمایه‌گذاری، اعتبار خرید یا کنترل هزینه؟ هدف تعیین می‌کند کدام نسبت‌ها مهم‌ترند.',
                en: 'Who is the analysis for, and which decision: a loan, an investment, trade credit or cost control? The purpose decides which ratios matter most.',
              },
            },
            {
              title: { fa: 'داده‌ها را آماده کنید', en: 'Prepare the data' },
              text: {
                fa: 'دست‌کم دو سال صورت‌های مالی را همراه با یادداشت‌ها جمع کنید و اقلام غیرعادی یا غیرتکراری را جدا کنید.',
                en: 'Gather at least two years of statements together with the notes, and set aside unusual or one-off items.',
              },
            },
            {
              title: { fa: 'نگاه کلی بیندازید', en: 'Take the big picture' },
              text: {
                fa: 'با تحلیل افقی و عمودی تغییرات بزرگ و ساختار ارقام را پیدا کنید؛ همین قدم معمولاً پرسش‌های اصلی را نشان می‌دهد.',
                en: 'Use horizontal and vertical analysis to spot the big changes and the structure of the figures; this step usually reveals the main questions.',
              },
            },
            {
              title: { fa: 'نسبت‌ها را با روش یکسان حساب کنید', en: 'Compute ratios consistently' },
              text: {
                fa: 'برای همه سال‌ها یک روش به کار ببرید: میانگین یا پایان دوره، 365 روز، خرید یا بهای تمام‌شده.',
                en: 'Use one method for every year: averages or year-end balances, 365 days, purchases or cost of goods sold.',
              },
            },
            {
              title: { fa: 'مقایسه کنید', en: 'Compare' },
              text: {
                fa: 'هر نسبت را با روند خود شرکت، با رقبا و با میانگین صنعت بسنجید.',
                en: 'Judge each ratio against the company’s own trend, its competitors and the industry average.',
              },
            },
            {
              title: { fa: 'داستان را بنویسید', en: 'Write the story' },
              text: {
                fa: 'علت‌ها را به هم وصل کنید (رشد فروش ← مطالبات و موجودی بیشتر ← نقد کمتر ← وام بیشتر)، نقاط قوت و ضعف را بگویید، پرسش‌ها را فهرست کنید و یک توصیه روشن بدهید.',
                en: 'Link causes together (sales growth → more receivables and inventory → less cash → more borrowing), state strengths and weaknesses, list your questions and give a clear recommendation.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'limitations',
      title: { fa: 'محدودیت‌ها و اشتباه‌های رایج', en: 'Limitations and common mistakes' },
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
              fa: '**تفاوت رویه‌های حسابداری**: انتخاب FIFO یا میانگین موزون (درس موجودی کالا) یا روش استهلاک (درس دارایی‌های ثابت) نسبت‌های دو کسب‌وکار کاملاً مشابه را متفاوت می‌کند.',
              en: '**Different accounting policies**: FIFO vs weighted average (the lesson on inventory) or the depreciation method (the lesson on fixed assets) can make two identical businesses report different ratios.',
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
          tone: 'info',
          title: { fa: 'در عمل: رشد اسمی و رشد واقعی', en: 'In practice: nominal growth and real growth' },
          text: {
            fa: 'در ایران با تورم بالا، رشد 20 درصدی فروش مهرگان ممکن است فقط اثر افزایش قیمت‌ها باشد. اگر تورم همان سال مثلاً 30 درصد بوده باشد، حجم واقعی فروش احتمالاً **کم شده** است. به همین دلیل تحلیلگران رشد ارقام را کنار نرخ تورم رسمی می‌گذارند. همچنین بازده دارایی‌ها را با احتیاط تفسیر می‌کنند، چون دارایی‌های ثابتی که سال‌ها پیش خریده شده‌اند در ترازنامه به بهای تاریخی و بسیار کمتر از ارزش روزشان نشان داده می‌شوند و بازده را بزرگ‌تر از واقع جلوه می‌دهند.',
            en: 'With high inflation in Iran, Mehregan’s 20% sales growth may be nothing more than higher prices. If inflation that year was, say, 30%, the real volume of sales probably **fell**. That is why analysts set growth figures beside the official inflation rate. They also read return on assets cautiously: fixed assets bought years ago sit on the balance sheet at historical cost, far below their current value, which makes the return look bigger than it really is.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'خطاهای زیر بیشتر از همه در تحلیل نسبت‌ها دیده می‌شوند. پرهزینه‌ترینِ آن‌ها تعمیم یک نتیجه کوتاه‌مدت است: بازده دارایی یک‌ماهه نوا (6.8 درصد) را نمی‌توان ساده در 12 ضرب کرد و گفت بازده سالانه حدود 82 درصد است، چون ماه اول یک کسب‌وکار تازه نماینده کل سال نیست.',
            en: 'These are the errors seen most often in ratio analysis. The costliest is stretching a short-term result: Nova’s one-month ROA of 6.8% cannot simply be multiplied by 12 to claim an annual return of about 82%, because a new business’s first month does not represent a whole year.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**استفاده از سود خالص در پوشش بهره**: صورت کسر باید سود قبل از بهره و مالیات باشد؛ سود خالص بهره را یک بار کسر کرده است (نوا: 33.3 برابر، نه 32.3).',
              en: '**Using net income for interest coverage**: the numerator must be earnings before interest and tax; net income has already had the interest deducted (Nova: 33.3 times, not 32.3).',
            },
            {
              fa: '**ترکیب رقم دوره‌ای با مانده لحظه‌ای بدون فکر**: برای بازده‌ها و گردش‌ها، تا جایی که داده هست از میانگین ابتدا و پایان دوره استفاده کنید و برای همه سال‌ها یک روش به کار ببرید.',
              en: '**Mixing a period figure with a point-in-time balance carelessly**: for returns and turnovers, use the average of opening and closing balances whenever the data allows, and use the same method for every year.',
            },
            {
              fa: '**سالانه کردن نسبت یک‌ماهه یا فصلی** بدون توجه به فصلی بودن فروش و رویدادهای غیرتکراری.',
              en: '**Annualising a monthly or quarterly ratio** without allowing for seasonality and one-off events.',
            },
            {
              fa: '**مقایسه شرکت‌های دو صنعت متفاوت**: نسبت جاری 0.8 برای فروشگاه زنجیره‌ای که نقدی می‌فروشد می‌تواند عادی باشد و برای یک عمده‌فروش نگران‌کننده.',
              en: '**Comparing companies from different industries**: a current ratio of 0.8 can be normal for a supermarket that sells for cash and worrying for a wholesaler.',
            },
            {
              fa: '**تفسیر یک نسبت به‌تنهایی**: نسبت جاری خوب مهرگان، بدون نسبت وجه نقد و جریان نقد عملیاتی، تصویری غلط می‌داد.',
              en: '**Reading one ratio in isolation**: Mehregan’s healthy current ratio, without the cash ratio and operating cash flow, gave a false picture.',
            },
            {
              fa: '**نخواندن یادداشت‌ها**: سررسید وام‌ها، بدهی‌های احتمالی، رویه موجودی کالا و رویدادهای پس از تاریخ ترازنامه فقط در یادداشت‌ها پیدا می‌شوند.',
              en: '**Skipping the notes**: loan maturities, contingent liabilities, the inventory policy and events after the reporting date are found only in the notes.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'قاعده طلایی', en: 'The golden rule' },
          text: {
            fa: 'هیچ نسبتی را به‌تنهایی تفسیر نکنید. همیشه آن را با **روند** خود شرکت، با **رقبا** و با **میانگین صنعت** مقایسه کنید و برای فهم علت‌ها به یادداشت‌های توضیحی مراجعه کنید.',
            en: 'Never interpret a ratio in isolation. Always compare it with the company’s own **trend**, with **competitors** and with the **industry average**, and turn to the notes to understand the reasons behind it.',
          },
        },
      ],
    },
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'exercise',
          title: { fa: 'تحلیل افقی و عمودی کارگاه نجاری چنار', en: 'Horizontal and vertical analysis: Chenar Carpentry' },
          difficulty: 'easy',
          problem: {
            fa: 'کارگاه نجاری چنار صورت سود و زیان دو سال اخیرش را در اختیار شما گذاشته است. (الف) برای هر قلم، درصد تغییر سال 2 نسبت به سال 1 را حساب کنید. (ب) هر قلم را در هر سال به‌صورت درصدی از درآمد بیان کنید. (ج) در یک یا دو جمله بگویید چه چیزی تغییر کرده است.',
            en: 'Chenar Carpentry Workshop has given you its income statements for the last two years. (a) For each line, compute the percentage change from Year 1 to Year 2. (b) Express each line as a percentage of revenue in each year. (c) In one or two sentences, say what has changed.',
          },
          given: {
            head: [
              { fa: 'شرح', en: 'Item' },
              { fa: 'سال 1', en: 'Year 1' },
              { fa: 'سال 2', en: 'Year 2' },
            ],
            rows: [
              [{ fa: 'درآمد فروش', en: 'Sales revenue' }, 250000, 300000],
              [{ fa: 'مواد مصرفی (چوب و یراق)', en: 'Materials (wood and fittings)' }, 100000, 132000],
              [{ fa: 'دستمزد', en: 'Wages' }, 60000, 66000],
              [{ fa: 'اجاره کارگاه', en: 'Workshop rent' }, 24000, 24000],
              [{ fa: 'سایر هزینه‌ها', en: 'Other expenses' }, 16000, 18000],
              [{ fa: '**سود خالص**', en: '**Net income**' }, 50000, 60000],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'درصد تغییر = تغییر ÷ مبلغ سال 1 × 100. درصد هم‌اندازه = مبلغ قلم ÷ درآمد همان سال × 100.',
            en: 'Change % = change ÷ Year 1 amount × 100. Common-size % = line item ÷ that year’s revenue × 100.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'نمونه محاسبه افقی', en: 'A horizontal calculation' },
                  text: {
                    fa: 'مواد مصرفی: (132,000 − 100,000) ÷ 100,000 × 100 = 32 درصد افزایش. درآمد: (300,000 − 250,000) ÷ 250,000 × 100 = 20 درصد افزایش.',
                    en: 'Materials: (132,000 − 100,000) ÷ 100,000 × 100 = a 32% increase. Revenue: (300,000 − 250,000) ÷ 250,000 × 100 = a 20% increase.',
                  },
                },
                {
                  title: { fa: 'نمونه محاسبه عمودی', en: 'A vertical calculation' },
                  text: {
                    fa: 'مواد مصرفی سال 1: 100,000 ÷ 250,000 = 40 درصد درآمد؛ سال 2: 132,000 ÷ 300,000 = 44 درصد درآمد.',
                    en: 'Materials Year 1: 100,000 ÷ 250,000 = 40% of revenue; Year 2: 132,000 ÷ 300,000 = 44% of revenue.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'نتیجه تحلیل افقی و عمودی', en: 'Horizontal and vertical results' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'تغییر', en: 'Change' },
                { fa: 'سال 1 (درصد درآمد)', en: 'Year 1 (% of revenue)' },
                { fa: 'سال 2 (درصد درآمد)', en: 'Year 2 (% of revenue)' },
              ],
              rows: [
                [{ fa: 'درآمد فروش', en: 'Sales revenue' }, { fa: 'افزایش 20%', en: '+20%' }, { fa: '100%', en: '100%' }, { fa: '100%', en: '100%' }],
                [{ fa: 'مواد مصرفی', en: 'Materials' }, { fa: 'افزایش 32%', en: '+32%' }, { fa: '40%', en: '40%' }, { fa: '44%', en: '44%' }],
                [{ fa: 'دستمزد', en: 'Wages' }, { fa: 'افزایش 10%', en: '+10%' }, { fa: '24%', en: '24%' }, { fa: '22%', en: '22%' }],
                [{ fa: 'اجاره کارگاه', en: 'Workshop rent' }, { fa: 'بدون تغییر', en: '0%' }, { fa: '9.6%', en: '9.6%' }, { fa: '8%', en: '8%' }],
                [{ fa: 'سایر هزینه‌ها', en: 'Other expenses' }, { fa: 'افزایش 12.5%', en: '+12.5%' }, { fa: '6.4%', en: '6.4%' }, { fa: '6%', en: '6%' }],
                [{ fa: '**سود خالص**', en: '**Net income**' }, { fa: 'افزایش 20%', en: '+20%' }, { fa: '20%', en: '20%' }, { fa: '20%', en: '20%' }],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'تفسیر', en: 'Interpretation' },
              text: {
                fa: 'سود خالص هم‌پای درآمد 20 درصد رشد کرده و حاشیه سود خالص در 20 درصد ثابت مانده است. اما ساختار هزینه‌ها جابه‌جا شده: سهم مواد مصرفی 4 واحد درصد بالا رفته (شاید گرانی چوب یا ضایعات بیشتر) و این افزایش را ثابت ماندن اجاره و رشد کندتر دستمزد جبران کرده است. اگر قیمت مواد باز هم بالا برود، چنین جبرانی تکرار نمی‌شود؛ پس مواد مصرفی را باید زیر نظر گرفت.',
                en: 'Net income grew 20% in step with revenue, and the net margin held at 20%. But the cost structure shifted: materials rose by 4 percentage points of revenue (perhaps dearer wood or more waste), offset by flat rent and slower wage growth. If material prices keep rising, that offset will not repeat, so materials need watching.',
              },
            },
          ],
          answer: {
            fa: 'درآمد و سود هر دو 20 درصد رشد کردند و حاشیه سود خالص 20 درصد ماند؛ سهم مواد از 40 به 44 درصد درآمد رسید و با سهم کمتر اجاره و دستمزد جبران شد.',
            en: 'Revenue and profit both grew 20% and the net margin stayed at 20%; materials rose from 40% to 44% of revenue, offset by smaller shares for rent and wages.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'نسبت‌های نقدینگی داروخانه شفا', en: 'Liquidity ratios: Shafa Pharmacy' },
          difficulty: 'easy',
          problem: {
            fa: 'اقلام جاری ترازنامه داروخانه شفا در پایان سال در جدول آمده است. سرمایه در گردش، نسبت جاری، نسبت آنی و نسبت وجه نقد را حساب کنید و بگویید آیا داروخانه در پرداخت بدهی‌های کوتاه‌مدتش مشکلی دارد.',
            en: 'The current items on Shafa Pharmacy’s year-end balance sheet are shown below. Compute working capital, the current ratio, the quick ratio and the cash ratio, and say whether the pharmacy has a problem paying its short-term debts.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: 'موجودی نقد', en: 'Cash' }, 18000],
              [{ fa: 'سپرده کوتاه‌مدت بانکی', en: 'Short-term bank deposit' }, 6000],
              [{ fa: 'حساب‌های دریافتنی (از سازمان‌های بیمه‌گر)', en: 'Accounts receivable (from insurers)' }, 24000],
              [{ fa: 'موجودی کالا (دارو)', en: 'Inventory (medicines)' }, 52000],
              [{ fa: 'پیش‌پرداخت‌ها', en: 'Prepayments' }, 4000],
              [{ fa: 'حساب‌های پرداختنی (شرکت‌های پخش)', en: 'Accounts payable (distributors)' }, 40000],
              [{ fa: 'وام کوتاه‌مدت', en: 'Short-term loan' }, 15000],
              [{ fa: 'هزینه‌های پرداختنی', en: 'Accrued expenses' }, 5000],
            ],
            numericCols: [1],
          },
          hint: {
            fa: 'اول جمع دارایی‌های جاری و جمع بدهی‌های جاری را بسازید. در نسبت آنی، موجودی کالا و پیش‌پرداخت‌ها کنار گذاشته می‌شوند؛ سپرده کوتاه‌مدت بانکی جزو سرمایه‌گذاری‌های کوتاه‌مدت است.',
            en: 'First build total current assets and total current liabilities. The quick ratio leaves out inventory and prepayments; the short-term deposit counts as a short-term investment.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'جمع‌ها', en: 'Totals' },
                  text: {
                    fa: 'دارایی‌های جاری = 18,000 + 6,000 + 24,000 + 52,000 + 4,000 = 104,000. بدهی‌های جاری = 40,000 + 15,000 + 5,000 = 60,000.',
                    en: 'Current assets = 18,000 + 6,000 + 24,000 + 52,000 + 4,000 = 104,000. Current liabilities = 40,000 + 15,000 + 5,000 = 60,000.',
                  },
                },
                {
                  title: { fa: 'سرمایه در گردش', en: 'Working capital' },
                  text: { fa: '104,000 − 60,000 = 44,000.', en: '104,000 − 60,000 = 44,000.' },
                },
                {
                  title: { fa: 'نسبت جاری', en: 'Current ratio' },
                  text: { fa: '104,000 ÷ 60,000 = 1.73.', en: '104,000 ÷ 60,000 = 1.73.' },
                },
                {
                  title: { fa: 'نسبت آنی', en: 'Quick ratio' },
                  text: {
                    fa: '(18,000 + 6,000 + 24,000) ÷ 60,000 = 48,000 ÷ 60,000 = 0.80.',
                    en: '(18,000 + 6,000 + 24,000) ÷ 60,000 = 48,000 ÷ 60,000 = 0.80.',
                  },
                },
                {
                  title: { fa: 'نسبت وجه نقد', en: 'Cash ratio' },
                  text: { fa: '(18,000 + 6,000) ÷ 60,000 = 0.40.', en: '(18,000 + 6,000) ÷ 60,000 = 0.40.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'تفسیر', en: 'Interpretation' },
              text: {
                fa: 'نسبت جاری 1.73 در محدوده معمول است، اما نسبت آنی زیر 1 است؛ یعنی داروخانه برای پرداخت همه بدهی‌های جاری به فروش دارو نیاز دارد. برای داروخانه‌ای که دارو را سریع می‌فروشد این وضعیت عادی است، اما دو چیز را باید پایید: سرعت وصول مطالبات از سازمان‌های بیمه‌گر و داروهای نزدیک به تاریخ انقضا که شاید هرگز فروخته نشوند.',
                en: 'A current ratio of 1.73 is in the usual range, but the quick ratio is below 1: the pharmacy needs to sell medicines to pay all its current liabilities. That is normal for a pharmacy whose stock moves fast, but two things need watching: how quickly the insurers pay, and medicines close to their expiry date that may never be sold.',
              },
            },
          ],
          answer: {
            fa: 'سرمایه در گردش 44,000؛ نسبت جاری 1.73؛ نسبت آنی 0.80؛ نسبت وجه نقد 0.40. مشکل فوری ندارد، اما به فروش دارو و وصول از بیمه‌ها وابسته است.',
            en: 'Working capital 44,000; current ratio 1.73; quick ratio 0.80; cash ratio 0.40. No immediate problem, but it depends on selling stock and collecting from insurers.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'سودآوری و تجزیه دوپونت فروشگاه اینترنتی آوا', en: 'Profitability and DuPont: Ava Online Store' },
          difficulty: 'medium',
          problem: {
            fa: 'اطلاعات سال گذشته فروشگاه اینترنتی آوا در جدول آمده است. نرخ مالیات بر درآمد را 25 درصد سود قبل از مالیات فرض کنید (این نرخ فرضی است). (الف) سود ناخالص، سود عملیاتی و سود خالص را بسازید. (ب) حاشیه سود ناخالص، عملیاتی و خالص، بازده دارایی‌ها و بازده حقوق مالکانه را حساب کنید. (ج) بازده حقوق مالکانه را با تجزیه دوپونت بازسازی کنید و توضیح دهید چرا از بازده دارایی‌ها بیشتر است.',
            en: 'Last year’s figures for Ava Online Store are below. Assume an income-tax rate of 25% of profit before tax (an illustrative rate). (a) Build gross profit, operating profit and net income. (b) Compute the gross, operating and net margins, ROA and ROE. (c) Rebuild ROE with the DuPont breakdown and explain why it is higher than ROA.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: 'فروش خالص', en: 'Net sales' }, 900000],
              [{ fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, 585000],
              [{ fa: 'هزینه‌های عملیاتی', en: 'Operating expenses' }, 225000],
              [{ fa: 'هزینه بهره', en: 'Interest expense' }, 18000],
              [{ fa: 'میانگین جمع دارایی‌ها', en: 'Average total assets' }, 600000],
              [{ fa: 'میانگین حقوق مالکانه', en: 'Average equity' }, 360000],
            ],
            numericCols: [1],
          },
          hint: {
            fa: 'ضریب اهرم مالکانه = میانگین دارایی‌ها ÷ میانگین حقوق مالکانه. حاصل‌ضرب سه جزء دوپونت باید دقیقاً با ROE برابر شود.',
            en: 'Equity multiplier = average assets ÷ average equity. The three DuPont components must multiply back to ROE exactly.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'ساختن صورت سود و زیان آوا', en: 'Building Ava’s income statement' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              rows: [
                [{ fa: 'فروش خالص', en: 'Net sales' }, 900000],
                [{ fa: 'کسر می‌شود: بهای تمام‌شده کالای فروش‌رفته', en: 'Less: cost of goods sold' }, -585000],
                [{ fa: '**سود ناخالص**', en: '**Gross profit**' }, 315000],
                [{ fa: 'کسر می‌شود: هزینه‌های عملیاتی', en: 'Less: operating expenses' }, -225000],
                [{ fa: '**سود عملیاتی**', en: '**Operating profit**' }, 90000],
                [{ fa: 'کسر می‌شود: هزینه بهره', en: 'Less: interest expense' }, -18000],
                [{ fa: 'سود قبل از مالیات', en: 'Profit before tax' }, 72000],
                [{ fa: 'کسر می‌شود: مالیات (25%، فرضی)', en: 'Less: income tax (25%, assumed)' }, -18000],
                [{ fa: '**سود خالص**', en: '**Net income**' }, 54000],
              ],
              numericCols: [1],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'حاشیه‌ها', en: 'Margins' },
                  text: {
                    fa: 'ناخالص: 315,000 ÷ 900,000 = 35 درصد؛ عملیاتی: 90,000 ÷ 900,000 = 10 درصد؛ خالص: 54,000 ÷ 900,000 = 6 درصد.',
                    en: 'Gross: 315,000 ÷ 900,000 = 35%; operating: 90,000 ÷ 900,000 = 10%; net: 54,000 ÷ 900,000 = 6%.',
                  },
                },
                {
                  title: { fa: 'بازده‌ها', en: 'Returns' },
                  text: {
                    fa: 'ROA = 54,000 ÷ 600,000 = 9 درصد؛ ROE = 54,000 ÷ 360,000 = 15 درصد.',
                    en: 'ROA = 54,000 ÷ 600,000 = 9%; ROE = 54,000 ÷ 360,000 = 15%.',
                  },
                },
                {
                  title: { fa: 'دوپونت', en: 'DuPont' },
                  text: {
                    fa: 'حاشیه سود خالص 6 درصد × گردش دارایی‌ها (900,000 ÷ 600,000 = 1.5) × ضریب اهرم مالکانه (600,000 ÷ 360,000 ≈ 1.67) = 15 درصد؛ دقیقاً همان ROE.',
                    en: 'Net margin 6% × asset turnover (900,000 ÷ 600,000 = 1.5) × equity multiplier (600,000 ÷ 360,000 ≈ 1.67) = 15%, exactly the ROE.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'چرا ROE بیشتر است؟', en: 'Why is ROE higher?' },
              text: {
                fa: '240,000 از دارایی‌ها (600,000 − 360,000) با بدهی تأمین شده است. دارایی‌ها پیش از بهره و مالیات 15 درصد بازده داده‌اند (90,000 ÷ 600,000)، در حالی که بهره پرداختی فقط 18,000 ÷ 240,000 = 7.5 درصد بدهی‌ها بوده است؛ این مازاد به مالکان رسیده است. ضریب اهرم 1.67 همین اثر را در دوپونت نشان می‌دهد.',
                en: '240,000 of the assets (600,000 − 360,000) are financed by liabilities. The assets earned 15% before interest and tax (90,000 ÷ 600,000), while interest cost only 18,000 ÷ 240,000 = 7.5% of the liabilities; the surplus went to the owners. The equity multiplier of 1.67 captures that effect in DuPont.',
              },
            },
          ],
          answer: {
            fa: 'حاشیه‌ها 35، 10 و 6 درصد؛ ROA برابر 9 درصد و ROE برابر 15 درصد = 6% × 1.5 × 1.67.',
            en: 'Margins of 35%, 10% and 6%; ROA 9% and ROE 15% = 6% × 1.5 × 1.67.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کارایی و چرخه تبدیل وجه نقد شرکت پخش البرز', en: 'Efficiency and the cash conversion cycle: Alborz Food Distribution' },
          difficulty: 'medium',
          problem: {
            fa: 'شرکت پخش مواد غذایی البرز همه کالاهایش را نسیه می‌فروشد و همه خریدهایش هم نسیه است. فروش سال 730,000 و بهای تمام‌شده کالای فروش‌رفته 547,500 بوده است. با اطلاعات جدول و سال 365 روزه: (الف) خرید سال را به دست آورید. (ب) دوره وصول مطالبات، دوره نگهداری موجودی و دوره پرداخت بدهی‌ها را حساب کنید. (ج) چرخه تبدیل وجه نقد را بسازید. (د) اگر شرکت با توافق تأمین‌کنندگان به دوره پرداخت 30 روزه برسد، چه مقدار وجه نقد آزاد می‌شود؟',
            en: 'Alborz Food Distribution sells everything on credit and buys everything on credit. Sales for the year were 730,000 and cost of goods sold 547,500. Using the table and a 365-day year: (a) work out the year’s purchases; (b) compute DSO, days in inventory and DPO; (c) build the cash conversion cycle; (d) if the company agrees 30-day payment terms with its suppliers, how much cash is freed?',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'ابتدای سال', en: 'Start of year' },
              { fa: 'پایان سال', en: 'End of year' },
            ],
            rows: [
              [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 55000, 65000],
              [{ fa: 'موجودی کالا', en: 'Inventory' }, 41350, 48650],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 28400, 32400],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'خرید = بهای تمام‌شده + موجودی پایان − موجودی ابتدا. دوره هر قلم = میانگین مانده ÷ رقم سالانه مربوط × 365 (مطالبات با فروش، موجودی با بهای تمام‌شده، پرداختنی‌ها با خرید).',
            en: 'Purchases = COGS + ending inventory − beginning inventory. Days for each item = average balance ÷ the matching annual figure × 365 (receivables with sales, inventory with COGS, payables with purchases).',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'میانگین مانده‌ها', en: 'Average balances' },
                  text: {
                    fa: 'مطالبات: (55,000 + 65,000) ÷ 2 = 60,000؛ موجودی: (41,350 + 48,650) ÷ 2 = 45,000؛ پرداختنی‌ها: (28,400 + 32,400) ÷ 2 = 30,400.',
                    en: 'Receivables: (55,000 + 65,000) ÷ 2 = 60,000; inventory: (41,350 + 48,650) ÷ 2 = 45,000; payables: (28,400 + 32,400) ÷ 2 = 30,400.',
                  },
                },
                {
                  title: { fa: 'خرید سال', en: 'Purchases' },
                  text: { fa: '547,500 + 48,650 − 41,350 = 554,800.', en: '547,500 + 48,650 − 41,350 = 554,800.' },
                },
                {
                  title: { fa: 'دوره وصول مطالبات', en: 'DSO' },
                  text: {
                    fa: '60,000 ÷ 730,000 × 365 = 30 روز (گردش مطالبات 730,000 ÷ 60,000 = 12.17 بار).',
                    en: '60,000 ÷ 730,000 × 365 = 30 days (receivables turnover 730,000 ÷ 60,000 = 12.17 times).',
                  },
                },
                {
                  title: { fa: 'دوره نگهداری موجودی', en: 'Days in inventory' },
                  text: {
                    fa: '45,000 ÷ 547,500 × 365 = 30 روز (گردش موجودی 12.17 بار).',
                    en: '45,000 ÷ 547,500 × 365 = 30 days (inventory turnover 12.17 times).',
                  },
                },
                {
                  title: { fa: 'دوره پرداخت بدهی‌ها', en: 'DPO' },
                  text: {
                    fa: '30,400 ÷ 554,800 × 365 = 20 روز (گردش پرداختنی‌ها 554,800 ÷ 30,400 = 18.25 بار).',
                    en: '30,400 ÷ 554,800 × 365 = 20 days (payables turnover 554,800 ÷ 30,400 = 18.25 times).',
                  },
                },
                {
                  title: { fa: 'چرخه تبدیل وجه نقد', en: 'Cash conversion cycle' },
                  text: { fa: '30 + 30 − 20 = 40 روز.', en: '30 + 30 − 20 = 40 days.' },
                },
                {
                  title: { fa: 'وجه نقد آزادشده', en: 'Cash freed' },
                  text: {
                    fa: 'خرید روزانه = 554,800 ÷ 365 = 1,520. ده روز اعتبار بیشتر یعنی 10 × 1,520 = 15,200 وجه نقد که دیگر لازم نیست در عملیات بخوابد؛ چرخه هم به 30 روز کوتاه می‌شود.',
                    en: 'Daily purchases = 554,800 ÷ 365 = 1,520. Ten more days of credit free 10 × 1,520 = 15,200 of cash that no longer has to sit in operations, and the cycle shortens to 30 days.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              text: {
                fa: 'طولانی‌تر کردن دوره پرداخت فقط با توافق تأمین‌کننده درست است. تأخیر یک‌طرفه اعتبار شرکت را خراب می‌کند و ممکن است تخفیف‌های خرید یا اولویت تحویل کالا را هم از بین ببرد.',
                en: 'Stretching the payment period is only sound if the supplier agrees. Paying late unilaterally damages the company’s credit and may cost it purchase discounts or delivery priority.',
              },
            },
          ],
          answer: {
            fa: 'خرید 554,800؛ دوره‌ها 30، 30 و 20 روز؛ چرخه تبدیل وجه نقد 40 روز؛ رسیدن به دوره پرداخت 30 روزه 15,200 وجه نقد آزاد می‌کند.',
            en: 'Purchases 554,800; DSO 30, inventory 30 and DPO 20 days; a 40-day cash conversion cycle; 30-day payment terms would free 15,200 of cash.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'پروژه پایانی: تحلیل دوساله شرکت پوشاک ستاره', en: 'Capstone: a two-year analysis of Setareh Apparel' },
          difficulty: 'hard',
          problem: {
            fa: 'شرکت پوشاک ستاره، یک خرده‌فروش لباس با چند شعبه، برای گرفتن اعتبار خرید از یک تأمین‌کننده بزرگ، صورت‌های مالی خلاصه دو سال را ارائه کرده است. فروش تقریباً همیشه نقدی یا با کارت بانکی است. نرخ مالیات را 25 درصد سود قبل از مالیات فرض کنید (نرخ فرضی). (الف) سود خالص هر سال را بسازید و کنترل کنید که ترازنامه تراز است. (ب) برای هر دو سال این نسبت‌ها را حساب کنید: نسبت جاری، نسبت آنی، نسبت جریان نقد عملیاتی، حاشیه سود ناخالص، عملیاتی و خالص، بازده دارایی‌ها، بازده حقوق مالکانه، نسبت بدهی، نسبت بدهی به حقوق مالکانه، پوشش بهره، گردش موجودی کالا و دوره نگهداری موجودی. چون فقط ترازنامه پایان دو سال در دست است، برای هر دو سال از **مانده‌های پایان سال** استفاده کنید. (ج) در چند جمله نتیجه بگیرید: آیا تأمین‌کننده باید اعتبار بدهد؟',
            en: 'Setareh Apparel, a clothing retailer with several branches, has submitted two years of summary statements to a large supplier to obtain trade credit. Its sales are almost always for cash or by bank card. Assume an income-tax rate of 25% of profit before tax (an illustrative rate). (a) Build net income for each year and check that the balance sheet balances. (b) For both years compute: current ratio, quick ratio, operating cash flow ratio, gross, operating and net margins, ROA, ROE, debt ratio, debt-to-equity, interest coverage, inventory turnover and days in inventory. Only two year-end balance sheets are available, so use **year-end balances** for both years. (c) Conclude in a few sentences: should the supplier grant credit?',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'سال 1', en: 'Year 1' },
              { fa: 'سال 2', en: 'Year 2' },
            ],
            rows: [
              [{ fa: 'فروش', en: 'Sales' }, 600000, 660000],
              [{ fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, 360000, 382800],
              [{ fa: 'هزینه‌های عملیاتی', en: 'Operating expenses' }, 168000, 178200],
              [{ fa: 'هزینه بهره', en: 'Interest expense' }, 12000, 9000],
              [{ fa: 'وجه نقد حاصل از فعالیت‌های عملیاتی (خالص)', en: 'Cash from operating activities (net)' }, 60000, 117500],
              [{ fa: 'موجودی نقد (پایان سال)', en: 'Cash (year-end)' }, 20000, 45000],
              [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 30000, 33000],
              [{ fa: 'موجودی کالا', en: 'Inventory' }, 90000, 72000],
              [{ fa: 'سایر دارایی‌های جاری', en: 'Other current assets' }, 10000, 10000],
              [{ fa: 'دارایی‌های غیرجاری (خالص)', en: 'Non-current assets (net)' }, 250000, 260000],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 70000, 75000],
              [{ fa: 'سایر بدهی‌های جاری', en: 'Other current liabilities' }, 30000, 30000],
              [{ fa: 'وام بلندمدت', en: 'Long-term loan' }, 100000, 75000],
              [{ fa: 'حقوق مالکانه (کل)', en: 'Equity (all)' }, 200000, 240000],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'اول جمع دارایی‌های جاری، جمع دارایی‌ها، جمع بدهی‌های جاری و جمع بدهی‌ها را بسازید و کنترل کنید: دارایی‌ها = بدهی‌ها + حقوق مالکانه. سپس نسبت‌ها را گروه به گروه حساب کنید و در پایان، داستان را از روی جهت تغییرات بنویسید.',
            en: 'First build total current assets, total assets, total current liabilities and total liabilities, and check that assets = liabilities + equity. Then compute the ratios group by group, and finally write the story from the direction of the changes.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'گام 1: ساختن سود و جمع‌های ترازنامه', en: 'Step 1: build profit and the balance-sheet totals' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'سال 1', en: 'Year 1' },
                { fa: 'سال 2', en: 'Year 2' },
              ],
              rows: [
                [{ fa: 'سود ناخالص (فروش − بهای تمام‌شده)', en: 'Gross profit (sales − COGS)' }, 240000, 277200],
                [{ fa: 'سود عملیاتی (سود ناخالص − هزینه‌های عملیاتی)', en: 'Operating profit (gross profit − operating expenses)' }, 72000, 99000],
                [{ fa: 'سود قبل از مالیات (پس از کسر بهره)', en: 'Profit before tax (after interest)' }, 60000, 90000],
                [{ fa: 'مالیات (25%، فرضی)', en: 'Income tax (25%, assumed)' }, 15000, 22500],
                [{ fa: '**سود خالص**', en: '**Net income**' }, 45000, 67500],
                [{ fa: 'جمع دارایی‌های جاری', en: 'Total current assets' }, 150000, 160000],
                [{ fa: 'جمع دارایی‌ها', en: 'Total assets' }, 400000, 420000],
                [{ fa: 'جمع بدهی‌های جاری', en: 'Total current liabilities' }, 100000, 105000],
                [{ fa: 'جمع بدهی‌ها', en: 'Total liabilities' }, 200000, 180000],
                [{ fa: 'کنترل: بدهی‌ها + حقوق مالکانه', en: 'Check: liabilities + equity' }, 400000, 420000],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'table',
              caption: { fa: 'گام 2: نسبت‌ها (با مانده‌های پایان سال)', en: 'Step 2: the ratios (on year-end balances)' },
              head: [
                { fa: 'نسبت', en: 'Ratio' },
                { fa: 'سال 1', en: 'Year 1' },
                { fa: 'سال 2', en: 'Year 2' },
              ],
              rows: [
                [{ fa: 'نسبت جاری', en: 'Current ratio' }, { fa: '150,000 ÷ 100,000 = 1.50', en: '150,000 ÷ 100,000 = 1.50' }, { fa: '160,000 ÷ 105,000 = 1.52', en: '160,000 ÷ 105,000 = 1.52' }],
                [{ fa: 'نسبت آنی', en: 'Quick ratio' }, { fa: '50,000 ÷ 100,000 = 0.50', en: '50,000 ÷ 100,000 = 0.50' }, { fa: '78,000 ÷ 105,000 = 0.74', en: '78,000 ÷ 105,000 = 0.74' }],
                [{ fa: 'نسبت جریان نقد عملیاتی', en: 'Operating cash flow ratio' }, { fa: '60,000 ÷ 100,000 = 0.60', en: '60,000 ÷ 100,000 = 0.60' }, { fa: '117,500 ÷ 105,000 = 1.12', en: '117,500 ÷ 105,000 = 1.12' }],
                [{ fa: 'حاشیه سود ناخالص', en: 'Gross margin' }, { fa: '40%', en: '40%' }, { fa: '42%', en: '42%' }],
                [{ fa: 'حاشیه سود عملیاتی', en: 'Operating margin' }, { fa: '12%', en: '12%' }, { fa: '15%', en: '15%' }],
                [{ fa: 'حاشیه سود خالص', en: 'Net profit margin' }, { fa: '7.5%', en: '7.5%' }, { fa: '10.2%', en: '10.2%' }],
                [{ fa: 'بازده دارایی‌ها', en: 'Return on assets' }, { fa: '45,000 ÷ 400,000 = 11.3%', en: '45,000 ÷ 400,000 = 11.3%' }, { fa: '67,500 ÷ 420,000 = 16.1%', en: '67,500 ÷ 420,000 = 16.1%' }],
                [{ fa: 'بازده حقوق مالکانه', en: 'Return on equity' }, { fa: '45,000 ÷ 200,000 = 22.5%', en: '45,000 ÷ 200,000 = 22.5%' }, { fa: '67,500 ÷ 240,000 = 28.1%', en: '67,500 ÷ 240,000 = 28.1%' }],
                [{ fa: 'نسبت بدهی', en: 'Debt ratio' }, { fa: '200,000 ÷ 400,000 = 50%', en: '200,000 ÷ 400,000 = 50%' }, { fa: '180,000 ÷ 420,000 = 42.9%', en: '180,000 ÷ 420,000 = 42.9%' }],
                [{ fa: 'نسبت بدهی به حقوق مالکانه', en: 'Debt-to-equity' }, { fa: '1.00', en: '1.00' }, { fa: '0.75', en: '0.75' }],
                [{ fa: 'پوشش بهره', en: 'Interest coverage' }, { fa: '72,000 ÷ 12,000 = 6.0 برابر', en: '72,000 ÷ 12,000 = 6.0×' }, { fa: '99,000 ÷ 9,000 = 11.0 برابر', en: '99,000 ÷ 9,000 = 11.0×' }],
                [{ fa: 'گردش موجودی کالا', en: 'Inventory turnover' }, { fa: '360,000 ÷ 90,000 = 4.0 بار', en: '360,000 ÷ 90,000 = 4.0×' }, { fa: '382,800 ÷ 72,000 = 5.32 بار', en: '382,800 ÷ 72,000 = 5.32×' }],
                [{ fa: 'دوره نگهداری موجودی', en: 'Days in inventory' }, { fa: '365 ÷ 4.0 ≈ 91 روز', en: '365 ÷ 4.0 ≈ 91 days' }, { fa: '365 ÷ 5.32 ≈ 69 روز', en: '365 ÷ 5.32 ≈ 69 days' }],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'callout',
              tone: 'example',
              title: { fa: 'گام 3: نتیجه‌گیری', en: 'Step 3: the conclusion' },
              text: {
                fa: 'تقریباً همه نشانه‌ها بهتر شده‌اند. فروش 10 درصد رشد کرده و هم‌زمان هر سه حاشیه سود بالا رفته‌اند؛ پس رشد سودآور بوده است. کالا حدود 22 روز زودتر فروخته می‌شود و همین، همراه با جریان نقد عملیاتی 117,500، وجه نقد را بالا برده و اجازه داده 25,000 از وام بازپرداخت شود. اهرم کمتر (نسبت بدهی 42.9 درصد) و پوشش بهره 11 برابر، ریسک را پایین آورده است. نقطه ضعف: نسبت آنی 0.74 کمتر از 1 است، اما برای خرده‌فروشی که نقدی می‌فروشد و موجودی‌اش سریع‌تر از قبل می‌چرخد پذیرفتنی است. نتیجه: اعطای اعتبار منطقی است؛ تأمین‌کننده می‌تواند سقف اعتبار را متناسب با حجم خرید فعلی تعیین کند و صورت‌های مالی سال بعد را هم بخواهد.',
                en: 'Almost every signal has improved. Sales grew 10% while all three margins rose, so the growth was profitable. Goods now sell about 22 days faster, which, together with 117,500 of operating cash flow, lifted cash and allowed 25,000 of the loan to be repaid. Lower leverage (a 42.9% debt ratio) and 11 times interest coverage have reduced risk. The weak spot: a quick ratio of 0.74 is below 1, but that is acceptable for a retailer that sells for cash and turns its stock faster than before. Conclusion: granting credit is reasonable; the supplier can set a limit in line with current purchase volumes and ask for next year’s statements.',
              },
            },
          ],
          answer: {
            fa: 'سود خالص 45,000 و 67,500؛ سودآوری، کارایی و اهرم همه بهتر شده‌اند (ROE از 22.5 به 28.1 درصد، پوشش بهره از 6 به 11 برابر، دوره موجودی از 91 به 69 روز)؛ اعطای اعتبار با پایش منظم منطقی است.',
            en: 'Net income 45,000 and 67,500; profitability, efficiency and leverage all improved (ROE from 22.5% to 28.1%, interest coverage from 6 to 11 times, days in inventory from 91 to 69); granting credit with regular monitoring is reasonable.',
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
              fa: 'تحلیل یعنی مقایسه: با دوره قبل (تحلیل افقی و روند)، با یک رقم مبنا (تحلیل عمودی) و با رقبا و میانگین صنعت.',
              en: 'Analysis means comparison: with earlier periods (horizontal and trend analysis), with a base figure (vertical analysis), and with competitors and the industry average.',
            },
            {
              fa: 'نقدینگی را با نسبت جاری شروع کنید، اما با نسبت آنی، نسبت وجه نقد و جریان نقد عملیاتی کاملش کنید؛ کیفیت دارایی‌های جاری به اندازه مقدارشان مهم است.',
              en: 'Start liquidity with the current ratio, but complete it with the quick ratio, the cash ratio and operating cash flow; the quality of current assets matters as much as their amount.',
            },
            {
              fa: 'سودآوری دو چهره دارد: حاشیه‌ها (سود از هر فروش) و بازده‌ها (سود از منابع). دوپونت نشان می‌دهد بازده حقوق مالکانه از حاشیه، از گردش دارایی‌ها یا از بدهی آمده است.',
              en: 'Profitability has two faces: margins (profit per sale) and returns (profit per unit of resources). DuPont shows whether ROE comes from margin, asset turnover or debt.',
            },
            {
              fa: 'اهرم بازده مالک را بالا می‌برد و ریسک را هم؛ نسبت بدهی و پوشش بهره را همیشه با هم ببینید.',
              en: 'Leverage raises the owners’ return and the risk with it; always read the debt ratio and interest coverage together.',
            },
            {
              fa: 'چرخه تبدیل وجه نقد (وصول + نگهداری − پرداخت) پیوند سود و نقد است؛ رشد سریع با چرخه طولانی، وجه نقد را می‌بلعد.',
              en: 'The cash conversion cycle (collection + inventory − payment days) links profit to cash; fast growth with a long cycle devours cash.',
            },
            {
              fa: 'برای ارقام دوره‌ای از میانگین مانده‌ها استفاده کنید، روش را در همه سال‌ها یکسان نگه دارید و نسبت کوتاه‌مدت را ساده سالانه نکنید.',
              en: 'Use average balances with period figures, keep the method the same for every year, and do not simply annualise a short-period ratio.',
            },
            {
              fa: 'هیچ نسبتی را تنها تفسیر نکنید و یادداشت‌ها را بخوانید؛ خروجی تحلیل یک داستان منسجم، چند پرسش دقیق و یک توصیه روشن است.',
              en: 'Never read a ratio alone, and read the notes; the output of an analysis is a coherent story, a few sharp questions and a clear recommendation.',
            },
          ],
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
              term: { fa: 'شاخص روند', en: 'Trend index' },
              def: {
                fa: 'مبلغ هر دوره ÷ مبلغ دوره پایه × 100؛ دوره پایه برابر 100 است.',
                en: 'Each period’s amount ÷ the base-period amount × 100; the base period equals 100.',
              },
            },
            {
              term: { fa: 'تحلیل عمودی (هم‌اندازه)', en: 'Vertical (common-size) analysis' },
              def: {
                fa: 'بیان هر قلم به‌صورت درصدی از یک رقم مبنا (درآمد یا جمع دارایی‌ها) در همان دوره.',
                en: 'Expressing each line as a percentage of a base figure (revenue or total assets) in the same period.',
              },
            },
            {
              term: { fa: 'سرمایه در گردش', en: 'Working capital' },
              def: { fa: 'دارایی‌های جاری منهای بدهی‌های جاری؛ یک مبلغ، نه نسبت.', en: 'Current assets minus current liabilities: an amount, not a ratio.' },
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
              term: { fa: 'نسبت وجه نقد', en: 'Cash ratio' },
              def: {
                fa: '(موجودی نقد + سرمایه‌گذاری‌های کوتاه‌مدت) ÷ بدهی‌های جاری.',
                en: '(Cash + short-term investments) ÷ current liabilities.',
              },
            },
            {
              term: { fa: 'نسبت جریان نقد عملیاتی', en: 'Operating cash flow ratio' },
              def: {
                fa: 'خالص وجه نقد حاصل از فعالیت‌های عملیاتی ÷ بدهی‌های جاری.',
                en: 'Net cash from operating activities ÷ current liabilities.',
              },
            },
            {
              term: { fa: 'حاشیه سود ناخالص', en: 'Gross margin' },
              def: { fa: 'سود ناخالص ÷ فروش خالص.', en: 'Gross profit ÷ net sales.' },
            },
            {
              term: { fa: 'حاشیه سود عملیاتی', en: 'Operating margin' },
              def: { fa: 'سود عملیاتی ÷ فروش.', en: 'Operating profit ÷ sales.' },
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
              def: { fa: 'سود خالص ÷ میانگین حقوق مالکانه.', en: 'Net income ÷ average equity.' },
            },
            {
              term: { fa: 'تجزیه دوپونت', en: 'DuPont analysis' },
              def: {
                fa: 'شکستن بازده حقوق مالکانه به حاشیه سود خالص × گردش دارایی‌ها × ضریب اهرم مالکانه.',
                en: 'Breaking ROE into net profit margin × asset turnover × equity multiplier.',
              },
            },
            {
              term: { fa: 'ضریب اهرم مالکانه', en: 'Equity multiplier' },
              def: { fa: 'میانگین جمع دارایی‌ها ÷ میانگین حقوق مالکانه.', en: 'Average total assets ÷ average equity.' },
            },
            {
              term: { fa: 'سود هر سهم', en: 'Earnings per share (EPS)' },
              def: {
                fa: 'سود خالص متعلق به سهامداران عادی ÷ میانگین موزون تعداد سهام عادی.',
                en: 'Net income attributable to ordinary shareholders ÷ weighted average ordinary shares.',
              },
            },
            {
              term: { fa: 'نسبت قیمت به سود', en: 'Price/earnings ratio (P/E)' },
              def: { fa: 'قیمت بازار هر سهم ÷ سود هر سهم.', en: 'Market price per share ÷ earnings per share.' },
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
              term: { fa: 'گردش حساب‌های دریافتنی و دوره وصول مطالبات', en: 'Receivables turnover and days sales outstanding' },
              def: {
                fa: 'فروش نسیه خالص ÷ میانگین حساب‌های دریافتنی؛ دوره وصول = روزهای دوره ÷ این گردش.',
                en: 'Net credit sales ÷ average accounts receivable; DSO = days in the period ÷ this turnover.',
              },
            },
            {
              term: { fa: 'گردش موجودی کالا و دوره نگهداری موجودی', en: 'Inventory turnover and days in inventory' },
              def: {
                fa: 'بهای تمام‌شده کالای فروش‌رفته ÷ میانگین موجودی کالا؛ دوره نگهداری = 365 ÷ این گردش.',
                en: 'Cost of goods sold ÷ average inventory; days in inventory = 365 ÷ this turnover.',
              },
            },
            {
              term: { fa: 'دوره پرداخت بدهی‌ها', en: 'Days payable outstanding (DPO)' },
              def: {
                fa: '365 ÷ (خرید نسیه ÷ میانگین حساب‌های پرداختنی)؛ میانگین روزهایی که پرداخت به تأمین‌کنندگان طول می‌کشد.',
                en: '365 ÷ (credit purchases ÷ average accounts payable): the average number of days taken to pay suppliers.',
              },
            },
            {
              term: { fa: 'چرخه تبدیل وجه نقد', en: 'Cash conversion cycle' },
              def: {
                fa: 'دوره وصول مطالبات + دوره نگهداری موجودی − دوره پرداخت بدهی‌ها؛ روزهایی که پول در عملیات گیر است.',
                en: 'DSO + days in inventory − DPO: the days cash is tied up in operations.',
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
        fa: 'در صورت سود و زیان، مبنای تحلیل عمودی درآمد است (100 درصد) و هر هزینه و سود به‌صورت سهمی از آن دیده می‌شود. جمع دارایی‌ها گزینه وسوسه‌انگیزی است، اما مبنای تحلیل عمودی **ترازنامه** است، نه صورت سود و زیان.',
        en: 'On the income statement the base is revenue (100%), so every cost and profit is seen as a share of it. Total assets is tempting, but it is the base for a common-size **balance sheet**, not the income statement.',
      },
    },
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
        fa: 'نسبت جاری = 60,000 ÷ 40,000 = 1.5؛ یعنی در برابر هر واحد بدهی جاری، 1.5 واحد دارایی جاری وجود دارد. 20,000 سرمایه در گردش است، یک مبلغ و نه یک نسبت؛ 0.67 هم حاصل تقسیم وارونه است.',
        en: 'Current ratio = 60,000 ÷ 40,000 = 1.5: there are 1.5 of current assets for every 1 of current liabilities. 20,000 is working capital, an amount rather than a ratio, and 0.67 comes from dividing the wrong way round.',
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
        fa: 'نسبت آنی فقط دارایی‌هایی را حساب می‌کند که به‌سرعت به نقد تبدیل می‌شوند و موجودی کالا، ملزومات و پیش‌پرداخت‌ها چنین نیستند؛ برای نوا: 48,500 ÷ 2,250 = 21.56. موجودی نقد و حساب‌های دریافتنی دقیقاً همان اقلامی‌اند که نسبت آنی **نگه می‌دارد**، و بدهی‌های بلندمدت در هیچ‌کدام از دو نسبت نیستند.',
        en: 'The quick ratio counts only assets that turn into cash quickly; inventory, supplies and prepayments do not. For Nova: 48,500 ÷ 2,250 = 21.56. Cash and receivables are exactly what the quick ratio **keeps**, and long-term debt is in neither ratio.',
      },
    },
    {
      q: {
        fa: 'چرا نسبت جاری و نسبت آنی نوا این‌قدر بالاست؟',
        en: 'Why are Nova’s current and quick ratios so high?',
      },
      options: [
        {
          fa: 'چون نوا تازه‌تأسیس است و بیشتر وجه نقد حاصل از آورده مالک و وام هنوز خرج نشده است',
          en: 'Because Nova is brand new and most of the cash from the owner’s investment and the loan is still unspent',
        },
        { fa: 'چون حساب‌های دریافتنی نوا بسیار زیاد است', en: 'Because Nova has very large receivables' },
        { fa: 'چون کل وام جزو بدهی‌های جاری طبقه‌بندی شده است', en: 'Because the whole loan is classified as a current liability' },
        { fa: 'چون استهلاک انباشته دارایی‌های جاری را افزایش می‌دهد', en: 'Because accumulated depreciation increases current assets' },
      ],
      answer: 0,
      explain: {
        fa: 'موجودی نقد 46,300 از 51,400 دارایی جاری نواست و بدهی‌های جاری فقط 2,250 است؛ این وضعیت خاص یک کسب‌وکار تازه‌تأسیس است. مطالبات نوا فقط 2,200 است، پس عامل اصلی نیست؛ و اگر وام جاری بود، نسبت‌ها **پایین‌تر** می‌شدند، نه بالاتر.',
        en: 'Cash makes up 46,300 of Nova’s 51,400 current assets, against only 2,250 of current liabilities: typical of a start-up. Receivables are only 2,200, so they are not the driver; and if the loan were current, the ratios would be **lower**, not higher.',
      },
    },
    {
      q: {
        fa: 'حاشیه سود خالص یک شرکت 5 درصد، گردش دارایی‌هایش 2 و ضریب اهرم مالکانه‌اش 1.5 است. بازده حقوق مالکانه طبق تجزیه دوپونت چقدر است؟',
        en: 'A company has a 5% net margin, asset turnover of 2 and an equity multiplier of 1.5. What is its ROE under the DuPont breakdown?',
      },
      options: [
        { fa: '8.5 درصد', en: '8.5%' },
        { fa: '10 درصد', en: '10%' },
        { fa: '7.5 درصد', en: '7.5%' },
        { fa: '15 درصد', en: '15%' },
      ],
      answer: 3,
      explain: {
        fa: 'سه جزء در هم **ضرب** می‌شوند: 5% × 2 × 1.5 = 15 درصد. گزینه 10 درصد فقط حاشیه × گردش است که همان بازده دارایی‌هاست و اثر اهرم را جا انداخته؛ 8.5 درصد هم از جمع کردن اجزا به دست آمده است.',
        en: 'The three parts are **multiplied**: 5% × 2 × 1.5 = 15%. The 10% option is margin × turnover only, which is ROA and leaves out leverage; 8.5% comes from adding the parts instead of multiplying them.',
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
        fa: 'نسبت بدهی = 17,250 ÷ 71,100 = 24.3 درصد؛ یعنی سهم اعتباردهندگان در تأمین دارایی‌ها. گزینه «24 درصد حقوق مالکانه» وسوسه‌انگیز است، اما نسبت بدهی به حقوق مالکانه رقم دیگری است: 17,250 ÷ 53,850 = 0.32.',
        en: 'Debt ratio = 17,250 ÷ 71,100 = 24.3%: the creditors’ share in financing the assets. “24% of equity” is tempting, but debt-to-equity is a different figure: 17,250 ÷ 53,850 = 0.32.',
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
        fa: 'پوشش بهره = 5,000 ÷ 150 = 33.3 برابر. رقم 32.3 از تقسیم سود خالص (4,850) بر بهره به دست می‌آید که اشتباه است، چون بهره قبلاً از سود خالص کسر شده و پوشش را کمتر از واقع نشان می‌دهد.',
        en: 'Interest coverage = 5,000 ÷ 150 = 33.3 times. The 32.3 option divides net income (4,850) by interest: wrong, because interest has already been deducted from net income, which understates the coverage.',
      },
    },
    {
      q: {
        fa: 'گردش حساب‌های دریافتنی شرکتی در سال 8 بار است. با سال 365 روزه، دوره وصول مطالبات تقریباً چند روز است؟',
        en: 'A company’s receivables turnover is 8 times a year. With a 365-day year, what is its DSO, roughly?',
      },
      options: [
        { fa: '8 روز', en: '8 days' },
        { fa: '46 روز', en: '46 days' },
        { fa: '2,920 روز', en: '2,920 days' },
        { fa: '30 روز', en: '30 days' },
      ],
      answer: 1,
      explain: {
        fa: 'دوره وصول = 365 ÷ 8 ≈ 45.6، یعنی حدود 46 روز. 2,920 از **ضرب** 365 در 8 به دست می‌آید که اشتباه است؛ 8 خود گردش است، نه تعداد روزها.',
        en: 'DSO = 365 ÷ 8 ≈ 45.6, about 46 days. 2,920 comes from **multiplying** 365 by 8, which is wrong; 8 is the turnover itself, not a number of days.',
      },
    },
    {
      q: {
        fa: 'دوره وصول مطالبات شرکتی 40 روز، دوره نگهداری موجودی 60 روز و دوره پرداخت بدهی‌ها 35 روز است. چرخه تبدیل وجه نقد چند روز است؟',
        en: 'A company has DSO of 40 days, days in inventory of 60 and DPO of 35. What is its cash conversion cycle?',
      },
      options: [
        { fa: '65 روز', en: '65 days' },
        { fa: '135 روز', en: '135 days' },
        { fa: '15 روز', en: '15 days' },
        { fa: '55 روز', en: '55 days' },
      ],
      answer: 0,
      explain: {
        fa: 'چرخه = 40 + 60 − 35 = 65 روز. گزینه 135 روز دوره پرداخت را **جمع** کرده، در حالی که اعتبار تأمین‌کننده بخشی از دوره را تأمین مالی می‌کند و باید کسر شود؛ 15 روز هم دوره موجودی را به اشتباه کسر کرده است.',
        en: 'Cycle = 40 + 60 − 35 = 65 days. The 135-day option **adds** DPO, but supplier credit finances part of the cycle and must be subtracted; 15 days wrongly subtracts the inventory days.',
      },
    },
    {
      q: {
        fa: 'سود خالص مهرگان در سال 2 برابر 27,000 بود، اما جریان نقد عملیاتی‌اش منفی شد (خروج 24,000). علت اصلی چیست؟',
        en: 'Mehregan made 27,000 of net income in Year 2, yet its operating cash flow was an outflow of 24,000. What is the main reason?',
      },
      options: [
        { fa: 'استهلاک 10,000 یک پرداخت نقدی است', en: 'The 10,000 of depreciation is a cash payment' },
        { fa: 'وام تازه 40,000 جریان نقد عملیاتی را کاهش داد', en: 'The new 40,000 loan reduced operating cash flow' },
        {
          fa: 'مطالبات 40,000 و موجودی کالا 45,000 افزایش یافتند و نقد را حبس کردند؛ افزایش پرداختنی‌ها فقط بخشی از آن را جبران کرد',
          en: 'Receivables rose 40,000 and inventory 45,000, locking up cash; higher payables offset only part of it',
        },
        { fa: 'پرداخت 12,000 سود سهام از جریان نقد عملیاتی کسر شد', en: 'The 12,000 of dividends was deducted from operating cash flow' },
      ],
      answer: 2,
      explain: {
        fa: 'سود تعهدی وقتی به نقد تبدیل نمی‌شود که پول در مطالبات و موجودی کالا بخوابد: افزایش 40,000 مطالبات و 45,000 موجودی کالا، با وجود 26,000 افزایش پرداختنی‌ها و افزودن استهلاک، جریان نقد عملیاتی را منفی کرد. سود سهام و وام جزو فعالیت‌های **تأمین مالی** هستند، نه عملیاتی؛ و استهلاک هزینه غیرنقدی است که در روش غیرمستقیم به سود **اضافه** می‌شود.',
        en: 'Accrual profit fails to become cash when money gets stuck in receivables and inventory: the 40,000 rise in receivables and 45,000 rise in inventory turned operating cash flow negative despite a 26,000 rise in payables and the depreciation add-back. Dividends and the loan are **financing** items, not operating ones, and depreciation is a non-cash expense that is **added back** under the indirect method.',
      },
    },
  ],
}
