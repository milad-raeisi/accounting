import type { Lesson } from '../../types'

/* Account titles used in the Pars Arya examples. */
const ac = {
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
  bidDeposits: { fa: 'سپرده‌های دریافتی شرکت در مناقصه', en: 'Bid deposits received' },
  memo: { fa: 'حساب انتظامی: ضمانت‌نامه‌های دریافتی', en: 'Memorandum: guarantees received' },
  memoContra: { fa: 'طرف حساب انتظامی: ضمانت‌نامه‌های دریافتی', en: 'Memorandum contra: guarantees received' },
  forfeited: { fa: 'سایر درآمدها: سپرده‌های ضبط‌شده', en: 'Other income: forfeited bid deposits' },
  repairs: { fa: 'هزینه تعمیر و نگهداری (مرکز هزینه CC-310)', en: 'Repairs and maintenance expense (cost centre CC-310)' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
}

const blank = { fa: '', en: '' }
const notOpened = { fa: 'باز نشد', en: 'Not opened' }

export const lesson: Lesson = {
  slug: 'sourcing-tendering',
  number: 4,
  level: 'intermediate',
  minutes: 28,
  icon: 'Scale',
  tone: 'equity',
  title: { fa: 'منبع‌یابی و مناقصه', en: 'Sourcing and Tendering' },
  summary: {
    fa: 'روش درست منبع‌یابی را انتخاب کنید (تأمین انحصاری یا تک‌منبع، استعلام، مناقصه محدود یا عمومی)، استعلام، درخواست پیشنهاد و اسناد مناقصه را بشناسید، پیشنهادها را با حد نصاب فنی و امتیازدهی وزنی فنی و بازرگانی ارزیابی کنید، تضمین‌ها را مدیریت کنید، مذاکره و انتخاب برنده را مستند کنید و ببینید ERP پیشنهادها، مقایسه‌ها و تضمین‌ها را چگونه ثبت می‌کند.',
    en: 'Choose the right sourcing route (sole or single source, RFQ, limited or open tender), know RFQs, RFPs and invitations to bid, evaluate bids with a technical threshold and weighted technical-commercial scoring, manage bid bonds and guarantees, negotiate and award with a full record, and see how the ERP records quotations, comparisons and guarantees.',
  },
  objectives: [
    {
      fa: 'برای یک نیاز، بر اساس مبلغ، ریسک و بازار، راهبرد و روش منبع‌یابی را انتخاب کنید',
      en: 'Choose a sourcing strategy and method for a need based on value, risk and market',
    },
    {
      fa: 'استعلام بها، درخواست پیشنهاد و اسناد مناقصه را از هم جدا کنید و محتوای هر کدام را بدانید',
      en: 'Distinguish RFQs, RFPs and invitations to bid, and know what each must contain',
    },
    {
      fa: 'پیشنهادها را با حد نصاب فنی، قیمت ارزیابی‌شده و امتیازدهی وزنی ارزیابی کنید',
      en: 'Evaluate bids with a technical threshold, evaluated prices and weighted scoring',
    },
    {
      fa: 'تضمین شرکت در مناقصه، ضمانت‌نامه انجام تعهدات و پیش‌پرداخت و ثبت حسابداری آن‌ها را توضیح دهید',
      en: 'Explain bid bonds, performance and advance payment guarantees and how they are recorded',
    },
    {
      fa: 'مذاکره، انتخاب برنده و مستندسازی را شرح دهید و ثبت استعلام، پیشنهاد و مقایسه را در ERP دنبال کنید',
      en: 'Describe negotiation, award and documentation, and follow how the ERP records RFQs, quotations and comparisons',
    },
  ],
  sections: [
    {
      id: 'why-sourcing',
      title: { fa: 'چرا روش منبع‌یابی مهم است؟', en: 'Why the Sourcing Route Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'قرارداد سه‌ساله نگهداری ایستگاه تقویت فشار میدان آریا شش ماه دیگر تمام می‌شود و برآورد قرارداد تازه 2,000,000 است. رئیس ایستگاه می‌گوید: «همان پیمانکار فعلی را تمدید کنید؛ دستگاه‌ها را می‌شناسد.» مدیر تدارکات پاسخ می‌دهد که قراردادی به این مبلغ طبق جدول اختیارات به مناقصه عمومی و تصویب شرکا نیاز دارد؛ تمدید مستقیم بدون توجیه ممکن است در حسابرسی شرکا و در بازیافت هزینه زیر سؤال برود. تازه، در این سه سال دو پیمانکار واجد صلاحیت دیگر هم به بازار آمده‌اند.',
            en: 'The three-year maintenance contract for the Arya compressor station ends in six months, and the new contract is estimated at 2,000,000. The station manager says: “Just extend the current contractor; they know the machines.” The procurement manager replies that a contract of this size needs an open tender and partner approval under the authority matrix, and a direct extension without justification could be challenged in a partner audit and in cost recovery. Besides, two more qualified contractors have entered the market in the last three years.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**منبع‌یابی (Sourcing)** یعنی یافتن و انتخاب تأمین‌کننده و شرایط خرید. **راهبرد منبع‌یابی** برای هر گروه کالا تعیین می‌کند با چند تأمین‌کننده کار کنیم، چه نوع قراردادی ببندیم (یک‌باره یا چارچوبی) و با چه روشی رقابت را برگزار کنیم. ابزار رایج برای این تصمیم **ماتریس کرالیچ** است که هر گروه کالا را بر اساس دو پرسش جای می‌دهد: چقدر برایش خرج می‌کنیم، و تأمینش چقدر پرریسک است؟',
            en: '**Sourcing** means finding and selecting suppliers and purchase terms. A **sourcing strategy** decides, for each category, how many suppliers to use, what kind of contract to sign (one-off or framework) and how to run the competition. A common tool for this is the **Kraljic matrix**, which places each category by two questions: how much do we spend on it, and how risky is its supply?',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ماتریس کرالیچ برای پارس‌آریا', en: 'The Kraljic matrix for Pars Arya' },
          head: [
            { fa: 'گروه', en: 'Quadrant' },
            { fa: 'هزینه‌کرد / ریسک تأمین', en: 'Spend / supply risk' },
            { fa: 'نمونه در پارس‌آریا', en: 'Pars Arya example' },
            { fa: 'راهبرد', en: 'Strategy' },
          ],
          rows: [
            [
              { fa: 'راهبردی', en: 'Strategic' },
              { fa: 'زیاد / زیاد', en: 'High / high' },
              { fa: 'نگهداری کمپرسورها، اجاره دکل حفاری', en: 'Compressor maintenance, drilling rig hire' },
              { fa: 'قرارداد بلندمدت، مناقصه با ارزیابی فنی قوی، شاخص‌های عملکرد', en: 'Long-term contracts, tenders with strong technical evaluation, performance KPIs' },
            ],
            [
              { fa: 'گلوگاهی', en: 'Bottleneck' },
              { fa: 'کم / زیاد', en: 'Low / high' },
              { fa: 'قطعات اختصاصی سازنده کمپرسور، آب‌بندهای خاص', en: 'OEM-only compressor parts, special seals' },
              { fa: 'تأمین مطمئن: موجودی اطمینان، قرارداد با سازنده، پرورش جایگزین', en: 'Secure supply: safety stock, agreement with the OEM, develop alternatives' },
            ],
            [
              { fa: 'اهرمی', en: 'Leverage' },
              { fa: 'زیاد / کم', en: 'High / low' },
              { fa: 'لوله‌های استاندارد OCTG، گازوئیل، باریت', en: 'Standard OCTG, diesel, barite' },
              { fa: 'مناقصه رقابتی، استفاده از حجم خرید، قرارداد چارچوبی', en: 'Competitive tenders, use volume, framework agreements' },
            ],
            [
              { fa: 'روزمره', en: 'Routine' },
              { fa: 'کم / کم', en: 'Low / low' },
              { fa: 'ملزومات اداری، تجهیزات حفاظت فردی، مصرفی‌های عمومی', en: 'Office supplies, PPE, general consumables' },
              { fa: 'کاتالوگ و خرید از قرارداد چارچوبی؛ ساده‌سازی فرایند', en: 'Catalogues and framework call-offs; keep the process simple' },
            ],
          ],
        },
      ],
    },
    {
      id: 'sourcing-methods',
      title: { fa: 'روش‌های منبع‌یابی', en: 'Sourcing Methods' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'روش منبع‌یابی به مبلغ (جدول اختیارات)، تعداد تأمین‌کنندگان واجد صلاحیت و فوریت بستگی دارد. دو اصطلاح اغلب با هم اشتباه می‌شوند: **تأمین انحصاری (Sole source)** یعنی واقعاً فقط یک تأمین‌کننده وجود دارد؛ **تک‌منبع (Single source)** یعنی چند تأمین‌کننده هست اما عمداً یکی را انتخاب می‌کنیم.',
            en: 'The sourcing method depends on value (the authority matrix), the number of qualified suppliers and urgency. Two terms are often confused: **sole source** means there really is only one supplier; **single source** means several exist but we deliberately choose one.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'روش‌های منبع‌یابی و کنترل هر کدام', en: 'Sourcing methods and their controls' },
          head: [
            { fa: 'روش', en: 'Method' },
            { fa: 'چه زمانی', en: 'When' },
            { fa: 'مزیت', en: 'Strength' },
            { fa: 'کنترل لازم', en: 'Control needed' },
          ],
          rows: [
            [
              { fa: 'تأمین انحصاری', en: 'Sole source' },
              { fa: 'فقط یک سازنده یا دارنده فناوری وجود دارد (قطعه اختصاصی سازنده)', en: 'Only one maker or technology owner exists (an OEM proprietary part)' },
              { fa: 'تنها گزینه موجود', en: 'The only option available' },
              { fa: 'مدرک انحصار، تحلیل قیمت، مذاکره و تأیید یک سطح بالاتر', en: 'Proof of uniqueness, price analysis, negotiation and approval one level higher' },
            ],
            [
              { fa: 'تک‌منبع', en: 'Single source' },
              { fa: 'یکسان‌سازی با تجهیزات موجود، اضطرار واقعی، ادامه کار در جریان', en: 'Standardisation with existing equipment, a genuine emergency, continuing work in progress' },
              { fa: 'سرعت و سازگاری', en: 'Speed and compatibility' },
              { fa: 'توجیه کتبی با تأیید یک سطح بالاتر؛ نباید عادت شود', en: 'Written justification approved one level higher; must not become a habit' },
            ],
            [
              { fa: 'استعلام بها', en: 'Request for quotation' },
              { fa: 'اقلام استاندارد و مبالغ کمتر (در پارس‌آریا تا 100,000)', en: 'Standard items and lower values (up to 100,000 at Pars Arya)' },
              { fa: 'سریع و رقابتی', en: 'Quick and competitive' },
              { fa: 'دست‌کم سه پیشنهاد از فهرست تأییدشده و ثبت مقایسه', en: 'At least three quotations from the AVL, with the comparison recorded' },
            ],
            [
              { fa: 'مناقصه محدود', en: 'Limited tender' },
              { fa: 'بازار شناخته‌شده و مبلغ متوسط (بیش از 100,000 تا 1,000,000)', en: 'A known market and medium value (over 100,000 up to 1,000,000)' },
              { fa: 'رقابت میان تأمین‌کنندگان آزموده', en: 'Competition among proven suppliers' },
              { fa: 'فهرست دعوت‌شدگان پیش از ارسال تأیید شود', en: 'The bidders’ list is approved before issue' },
            ],
            [
              { fa: 'مناقصه عمومی', en: 'Open tender' },
              { fa: 'مبلغ زیاد (بیش از 1,000,000) یا بازار ناشناخته', en: 'High value (over 1,000,000) or an unfamiliar market' },
              { fa: 'بیشترین رقابت و شفافیت', en: 'Widest competition and transparency' },
              { fa: 'آگهی عمومی، ارزیابی صلاحیت در فرایند، زمان بیشتر', en: 'Public notice, prequalification within the process, more time' },
            ],
            [
              { fa: 'قرارداد چارچوبی', en: 'Framework agreement' },
              { fa: 'نیازهای تکراری مثل باریت یا تجهیزات حفاظت فردی', en: 'Repeated needs such as barite or PPE' },
              { fa: 'مناقصه کمتر، قیمت توافق‌شده', en: 'Fewer tenders, agreed prices' },
              { fa: 'یک بار رقابتی بسته شود؛ خرید از آن در سقف مشخص', en: 'Competed once; call-offs within set limits' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'تک‌منبع به‌عنوان عادت', en: 'Single sourcing as a habit' },
          text: {
            fa: 'وقتی «فوری» یا «همیشه از همین می‌خریم» دلیل تک‌منبع شود، رقابت از بین می‌رود و قیمت‌ها بالا می‌رود. فوریتی که از برنامه‌ریزی ضعیف آمده، اضطرار نیست. گزارش ماهانه خریدهای انحصاری و تک‌منبع به تفکیک واحد درخواست‌کننده این الگو را زود نشان می‌دهد.',
            en: 'When “urgent” or “we always buy from them” becomes the reason for single sourcing, competition dies and prices rise. Urgency caused by poor planning is not an emergency. A monthly report of sole- and single-source purchases by requesting department exposes the pattern early.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران، شرکت‌های مشمول قانون برگزاری مناقصات، مناقصه عمومی را با آگهی عمومی و مناقصه محدود را میان شرکت‌های واجد صلاحیت برگزار می‌کنند؛ کنار گذاشتن تشریفات مناقصه (**ترک تشریفات**) فقط با تصویب هیئتی که قانون تعیین کرده ممکن است. پیشنهادها معمولاً در سه پاکت تحویل می‌شوند: **پاکت الف** تضمین شرکت در مناقصه، **پاکت ب** مدارک فنی و بازرگانی و **پاکت ج** پیشنهاد قیمت. جزئیات را از آخرین مقررات و دستورالعمل خرید شرکت بررسی کنید.',
            en: 'In Iran, companies covered by the Law on Holding Tenders run open tenders through a public notice and limited tenders among qualified companies; waiving tender formalities is only possible with the approval of a board designated by the law. Bids are usually submitted in three envelopes: **envelope A** for the bid security, **envelope B** for technical and commercial documents and **envelope C** for the price. Check the details against the latest regulations and your company’s procurement manual.',
          },
        },
      ],
    },
    {
      id: 'solicitation',
      title: { fa: 'استعلام، درخواست پیشنهاد و اسناد مناقصه', en: 'RFQ, RFP and Invitation to Bid' },
      blocks: [
        {
          type: 'table',
          caption: { fa: 'سه سند دعوت به رقابت', en: 'The three solicitation documents' },
          head: [
            { fa: 'سند', en: 'Document' },
            { fa: 'برای', en: 'Used for' },
            { fa: 'محتوای اصلی', en: 'Key content' },
            { fa: 'روش ارزیابی', en: 'Evaluation' },
          ],
          rows: [
            [
              { fa: 'استعلام بها (RFQ)', en: 'Request for quotation (RFQ)' },
              { fa: 'کالا و خدمات استاندارد با مشخصات روشن', en: 'Standard goods and services with clear specifications' },
              { fa: 'قلم، مشخصات، مقدار، تاریخ و محل تحویل، Incoterms، اعتبار پیشنهاد، شرایط پرداخت', en: 'Item, specification, quantity, delivery date and place, Incoterms, validity, payment terms' },
              { fa: 'کمترین قیمت ارزیابی‌شده میان پیشنهادهای منطبق', en: 'Lowest evaluated price among compliant offers' },
            ],
            [
              { fa: 'درخواست پیشنهاد (RFP)', en: 'Request for proposal (RFP)' },
              { fa: 'خدمات پیچیده که روش اجرا را پیشنهاددهنده طراحی می‌کند', en: 'Complex services where the bidder designs the method' },
              { fa: 'شرح کار و نتایج مورد انتظار، معیارها و وزن‌ها، قالب پیشنهاد فنی و مالی، شاخص‌های عملکرد', en: 'Scope and required outcomes, criteria and weights, technical and commercial proposal formats, KPIs' },
              { fa: 'امتیازدهی وزنی فنی و بازرگانی', en: 'Weighted technical and commercial scoring' },
            ],
            [
              { fa: 'دعوت به مناقصه (ITB)', en: 'Invitation to bid (ITB)' },
              { fa: 'مناقصه رسمی محدود یا عمومی', en: 'A formal limited or open tender' },
              { fa: 'دستورالعمل شرکت‌کنندگان، مشخصات، پیش‌نویس قرارداد، روش ارزیابی، فرم قیمت، الزام تضمین، مهلت و اعتبار پیشنهاد', en: 'Instructions to bidders, specifications, draft contract, evaluation method, price schedule, bid bond requirement, deadline and bid validity' },
              { fa: 'طبق روش اعلام‌شده؛ معمولاً اول فنی و بعد بازرگانی', en: 'As stated in the ITB; usually technical first, then commercial' },
            ],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'برنامه‌ریزی', en: 'Plan' },
              text: {
                fa: 'راهبرد، برآورد و **معیارها و وزن‌های ارزیابی پیش از دریافت پیشنهادها** تعیین و تأیید می‌شوند.',
                en: 'The strategy, estimate and **evaluation criteria and weights are set and approved before any bid arrives**.',
              },
            },
            {
              title: { fa: 'فهرست شرکت‌کنندگان', en: 'Bidders’ list' },
              text: { fa: 'از فهرست تأییدشده؛ برای قراردادهای بزرگ، به تأیید شرکا هم می‌رسد.', en: 'Drawn from the AVL; for large contracts, also endorsed by the partners.' },
            },
            {
              title: { fa: 'ارسال اسناد', en: 'Issue' },
              text: { fa: 'اسناد هم‌زمان برای همه فرستاده می‌شود.', en: 'The documents go to everyone at the same time.' },
            },
            {
              title: { fa: 'پرسش و پاسخ', en: 'Clarifications' },
              text: { fa: 'پرسش‌ها کتبی؛ پاسخ‌ها بدون نام پرسشگر و به‌صورت اصلاحیه برای همه.', en: 'Questions in writing; answers, without the asker’s name, go to all bidders as addenda.' },
            },
            {
              title: { fa: 'دریافت و گشایش', en: 'Receipt and opening' },
              text: { fa: 'پیشنهادهای مهروموم‌شده تا مهلت؛ پیشنهاد دیررسیده رد می‌شود؛ گشایش در کمیسیون و امضای صورت‌جلسه.', en: 'Sealed bids by the deadline; late bids are rejected; opening by the committee with signed minutes.' },
            },
            {
              title: { fa: 'ارزیابی فنی', en: 'Technical evaluation' },
              text: { fa: 'تیم فنی بدون دیدن قیمت‌ها امتیاز می‌دهد.', en: 'The technical team scores without seeing any prices.' },
            },
            {
              title: { fa: 'گشایش و ارزیابی بازرگانی', en: 'Commercial opening and evaluation' },
              text: { fa: 'فقط قیمت شرکت‌کنندگانِ قبول‌شده در ارزیابی فنی باز می‌شود.', en: 'Only the prices of technically qualified bidders are opened.' },
            },
            {
              title: { fa: 'مذاکره و پیشنهاد برنده', en: 'Negotiation and recommendation' },
              text: { fa: 'اگر رویه اجازه دهد مذاکره، سپس گزارش ارزیابی و پیشنهاد برنده.', en: 'Negotiation if the procedure allows, then the evaluation report and award recommendation.' },
            },
            {
              title: { fa: 'تصویب و ابلاغ', en: 'Approval and notification' },
              text: { fa: 'تصویب طبق جدول اختیارات و شرکا، ابلاغ به برنده، اطلاع به بازندگان، امضای قرارداد و بازگرداندن تضمین‌ها.', en: 'Approval per the DoA and partners, notice to the winner, letters to the others, contract signing and return of bid bonds.' },
            },
          ],
        },
      ],
    },
    {
      id: 'evaluation',
      title: { fa: 'ارزیابی فنی و بازرگانی', en: 'Technical and Commercial Evaluation' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ارزیابی معمولاً دو مرحله دارد. اول **ارزیابی فنی**: هر پیشنهاد امتیاز فنی می‌گیرد و فقط پیشنهادهایی که به **حد نصاب فنی** برسند ادامه می‌دهند. بعد **ارزیابی بازرگانی**: قیمت‌ها مقایسه می‌شوند. دو روش رایج وجود دارد: **کمترین قیمت از میان پیشنهادهای قابل‌قبول فنی**، که برای کالای استاندارد مناسب است، و **امتیازدهی وزنی فنی و بازرگانی**، که برای خدمات پیچیده به کار می‌رود. روش، وزن‌ها و فرمول‌ها باید در اسناد مناقصه اعلام شده باشند.',
            en: 'Evaluation usually has two stages. First, the **technical evaluation**: each bid gets a technical score, and only bids that reach the **technical threshold** go forward. Then the **commercial evaluation**: prices are compared. There are two common methods: **lowest price technically acceptable**, suited to standard goods, and **weighted technical-commercial scoring**, used for complex services. The method, weights and formulas must be stated in the tender documents.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'امتیاز بازرگانی = کمترین قیمت ارزیابی‌شده ÷ قیمت ارزیابی‌شده پیشنهاددهنده × 100؛ امتیاز کل = وزن فنی × امتیاز فنی + وزن بازرگانی × امتیاز بازرگانی',
            en: 'Commercial score = lowest evaluated price ÷ bidder’s evaluated price × 100; total score = technical weight × technical score + commercial weight × commercial score',
          },
          note: {
            fa: 'کمترین قیمت فقط از میان پیشنهادهایی انتخاب می‌شود که حد نصاب فنی را گذرانده‌اند.',
            en: 'The lowest price is taken only from bids that passed the technical threshold.',
          },
        },
        {
          type: 'h',
          text: { fa: 'مثال: مناقصه نگهداری ایستگاه تقویت فشار', en: 'Example: the compressor station maintenance tender' },
        },
        {
          type: 'p',
          text: {
            fa: 'پارس‌آریا مناقصه عمومی برگزار کرده و چهار پیشنهاد (الف، ب، ج و د) رسیده است. وزن فنی 70٪، وزن بازرگانی 30٪ و حد نصاب فنی 70 است. امتیاز فنی از پنج معیار ساخته می‌شود؛ جدول زیر محاسبه آن را برای پیشنهاددهنده الف نشان می‌دهد (امتیاز وزنی = وزن × امتیاز از 10 ÷ 10).',
            en: 'Pars Arya ran an open tender and received four bids (A, B, C and D). The technical weight is 70%, the commercial weight 30% and the technical threshold 70. The technical score is built from five criteria; the table below works it out for bidder A (weighted points = weight × score out of 10 ÷ 10).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'امتیاز فنی پیشنهاددهنده الف', en: 'Technical score of bidder A' },
          head: [
            { fa: 'معیار', en: 'Criterion' },
            { fa: 'وزن', en: 'Weight' },
            { fa: 'امتیاز (از 10)', en: 'Score (out of 10)' },
            { fa: 'امتیاز وزنی', en: 'Weighted points' },
          ],
          numericCols: [1, 2, 3],
          rows: [
            [{ fa: 'سابقه کار روی کمپرسورهای مشابه', en: 'Experience with similar compressors' }, 30, 9, 27],
            [{ fa: 'روش اجرا و برنامه کار', en: 'Methodology and work plan' }, 25, 8, 20],
            [{ fa: 'نیروهای کلیدی', en: 'Key personnel' }, 20, 9, 18],
            [{ fa: 'برنامه و سابقه HSE', en: 'HSE plan and record' }, 15, 8, 12],
            [{ fa: 'ساخت داخل', en: 'Local content' }, 10, 9, 9],
            [{ fa: '**جمع**', en: '**Total**' }, 100, blank, 86],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'مقایسه نهایی چهار پیشنهاد (قیمت برای سه سال)', en: 'Final comparison of the four bids (price for three years)' },
          head: [
            { fa: 'پیشنهاددهنده', en: 'Bidder' },
            { fa: 'امتیاز فنی', en: 'Technical score' },
            { fa: 'قبول در فنی؟', en: 'Passed technical?' },
            { fa: 'قیمت', en: 'Price' },
            { fa: 'امتیاز بازرگانی', en: 'Commercial score' },
            { fa: 'امتیاز کل (70/30)', en: 'Total (70/30)' },
            { fa: 'رتبه', en: 'Rank' },
          ],
          numericCols: [1, 3, 4, 5, 6],
          rows: [
            [{ fa: 'الف', en: 'A' }, 86, { fa: 'بله', en: 'Yes' }, 2000000, 90, 87.2, 1],
            [{ fa: 'ب', en: 'B' }, 72, { fa: 'بله', en: 'Yes' }, 1800000, 100, 80.4, 3],
            [{ fa: 'ج', en: 'C' }, 64, { fa: 'خیر', en: 'No' }, notOpened, blank, blank, blank],
            [{ fa: 'د', en: 'D' }, 90, { fa: 'بله', en: 'Yes' }, 2400000, 75, 85.5, 2],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'حذف پیشنهاد زیر حد نصاب', en: 'Drop the bid below the threshold' },
              text: {
                fa: 'ج با 64 به حد نصاب 70 نرسیده است؛ پاکت قیمتش باز نمی‌شود و بسته برگردانده می‌شود.',
                en: 'C, at 64, did not reach the threshold of 70; its price envelope is returned unopened.',
              },
            },
            {
              title: { fa: 'امتیاز بازرگانی', en: 'Commercial scores' },
              text: {
                fa: 'کمترین قیمت قبول‌شده‌ها 1,800,000 (ب) است. الف: 1,800,000 ÷ 2,000,000 × 100 = 90. د: 1,800,000 ÷ 2,400,000 × 100 = 75. ب: 100.',
                en: 'The lowest qualified price is 1,800,000 (B). A: 1,800,000 ÷ 2,000,000 × 100 = 90. D: 1,800,000 ÷ 2,400,000 × 100 = 75. B: 100.',
              },
            },
            {
              title: { fa: 'امتیاز کل', en: 'Total scores' },
              text: {
                fa: 'الف: 86 × 70٪ + 90 × 30٪ = 60.2 + 27 = 87.2. ب: 72 × 70٪ + 100 × 30٪ = 50.4 + 30 = 80.4. د: 90 × 70٪ + 75 × 30٪ = 63 + 22.5 = 85.5.',
                en: 'A: 86 × 70% + 90 × 30% = 60.2 + 27 = 87.2. B: 72 × 70% + 100 × 30% = 50.4 + 30 = 80.4. D: 90 × 70% + 75 × 30% = 63 + 22.5 = 85.5.',
              },
            },
            {
              title: { fa: 'نتیجه', en: 'Result' },
              text: {
                fa: 'الف برنده است: نه ارزان‌ترین (ب) و نه بهترین فنی (د)، بلکه بهترین ترکیب. با روش «کمترین قیمت قابل‌قبول فنی»، ب با 1,800,000 برنده می‌شد؛ برای قرارداد راهبردی نگهداری کمپرسور، پارس‌آریا کیفیت را مهم‌تر دانسته و روش وزنی را از پیش اعلام کرده است.',
                en: 'A wins: not the cheapest (B), not the best technical (D), but the best combination. Under “lowest price technically acceptable”, B would have won at 1,800,000; for a strategic compressor maintenance contract, Pars Arya judged quality more important and announced the weighted method in advance.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**قیمت ارزیابی‌شده (Evaluated price)** همان قیمت پیشنهادی نیست. هزینه‌هایی که خریدار جداگانه می‌پردازد (حمل، بیمه، ترخیص، بازرسی) به آن اضافه می‌شود و انحراف از شرایط مناقصه، مثل شرایط پرداخت متفاوت، اگر اسناد مناقصه اجازه داده باشند، ارزش‌گذاری و اضافه می‌شود. این کار پیشنهادها را هم‌سطح می‌کند تا سیب با سیب مقایسه شود.',
            en: 'The **evaluated price** is not the same as the bid price. Costs the buyer pays separately (freight, insurance, customs clearance, inspection) are added, and deviations from the tender terms, such as different payment terms, are priced and added if the tender documents allow it. This levels the bids so that apples are compared with apples.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'معیارها و وزن‌ها پیش از گشایش ثبت و امضا می‌شوند و پس از دیدن قیمت‌ها هرگز تغییر نمی‌کنند. ارزیاب فنی قیمت‌ها را نمی‌بیند. هر امتیاز با دلیل کتبی ثبت می‌شود (مثلاً «سابقه: 9 از 10؛ پنج قرارداد مشابه در پنج سال اخیر»)، چون شرکا و حسابرسان ممکن است سال‌ها بعد بپرسند چرا پیشنهاد ارزان‌تر برنده نشد.',
            en: 'Criteria and weights are recorded and signed before opening and never changed after prices are seen. Technical evaluators do not see prices. Every score is recorded with a written reason (for example “experience: 9 of 10; five similar contracts in the last five years”), because partners and auditors may ask years later why the cheaper bid did not win.',
          },
        },
      ],
    },
    {
      id: 'guarantees-award',
      title: { fa: 'تضمین‌ها، مذاکره و انتخاب برنده', en: 'Guarantees, Negotiation and Award' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در مناقصه، خریدار برای هر مرحله تضمینی می‌گیرد تا اگر طرف مقابل به تعهدش عمل نکرد، خسارتش جبران شود. رایج‌ترین شکل، **ضمانت‌نامه بانکی** است: تعهد بانک به پرداخت مبلغی مشخص به خریدار در صورت درخواست. **سپرده نقدی** هم پذیرفته می‌شود. شرکت‌های دولتی در ایران باید آیین‌نامه تضمین معاملات دولتی را رعایت کنند که انواع و مبالغ تضمین را تعیین می‌کند؛ آخرین نسخه آن را بررسی کنید.',
            en: 'In a tender the buyer takes a guarantee at each stage, so that if the other side fails to perform, the loss is covered. The most common form is a **bank guarantee**: the bank’s undertaking to pay the buyer a set amount on demand. A **cash deposit** is also accepted. State-owned companies in Iran must follow the regulation on guarantees for government transactions, which sets the allowed forms and amounts; check its latest version.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'انواع تضمین (مبالغ نمونه فرضی‌اند)', en: 'Types of guarantee (sample amounts are illustrative)' },
          head: [
            { fa: 'تضمین', en: 'Guarantee' },
            { fa: 'از چه چیزی محافظت می‌کند', en: 'What it protects against' },
            { fa: 'چه زمانی داده می‌شود', en: 'When given' },
            { fa: 'چه زمانی برمی‌گردد', en: 'When returned' },
          ],
          rows: [
            [
              { fa: 'تضمین شرکت در مناقصه (مثلاً 5٪ برآورد)', en: 'Bid bond (say 5% of the estimate)' },
              { fa: 'برنده پیشنهادش را پس بگیرد یا قرارداد را امضا نکند', en: 'The winner withdraws its bid or refuses to sign' },
              { fa: 'همراه پیشنهاد', en: 'With the bid' },
              { fa: 'بازندگان: پس از انتخاب برنده؛ برنده: با امضای قرارداد و تحویل ضمانت‌نامه انجام تعهدات', en: 'Losers: after the award; winner: on signing and delivering the performance guarantee' },
            ],
            [
              { fa: 'ضمانت‌نامه انجام تعهدات (مثلاً 10٪ مبلغ قرارداد)', en: 'Performance guarantee (say 10% of the contract value)' },
              { fa: 'اجرا نشدن یا اجرای ناقص قرارداد', en: 'Failure to perform, or poor performance' },
              { fa: 'هنگام امضای قرارداد', en: 'At contract signing' },
              { fa: 'پس از تحویل و پذیرش کار', en: 'After completion and acceptance' },
            ],
            [
              { fa: 'ضمانت‌نامه پیش‌پرداخت (برابر پیش‌پرداخت)', en: 'Advance payment guarantee (equal to the advance)' },
              { fa: 'پس ندادن پیش‌پرداخت', en: 'Failure to repay the advance' },
              { fa: 'پیش از پرداخت پیش‌پرداخت', en: 'Before the advance is paid' },
              { fa: 'به تدریج با کسر پیش‌پرداخت از صورت‌حساب‌ها', en: 'Gradually, as the advance is deducted from invoices' },
            ],
            [
              { fa: 'کسور حسن انجام کار (مثلاً 10٪ هر پرداخت)', en: 'Retention (say 10% of each payment)' },
              { fa: 'نقص‌هایی که پس از تحویل پیدا شود', en: 'Defects found after handover' },
              { fa: 'از هر پرداخت کسر می‌شود', en: 'Withheld from each payment' },
              { fa: 'پس از دوره تضمین', en: 'After the warranty period' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'اعتبار تضمین را کنترل کنید', en: 'Check the guarantee’s validity' },
          text: {
            fa: 'تضمین شرکت در مناقصه باید دست‌کم تا پایان مدت اعتبار پیشنهاد به‌علاوه یک فاصله اطمینان معتبر باشد. اگر ارزیابی طول بکشد، پیش از انقضا از همه شرکت‌کنندگان تمدید اعتبار پیشنهاد و تضمین را بخواهید. صحت ضمانت‌نامه را هم مستقیماً از بانک صادرکننده استعلام کنید.',
            en: 'A bid bond must stay valid at least until the end of the bid validity period plus a safety margin. If evaluation drags on, ask all bidders to extend their bid and bond validity before they expire. Also confirm each guarantee directly with the issuing bank.',
          },
        },
        {
          type: 'h',
          text: { fa: 'مذاکره', en: 'Negotiation' },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**چه زمانی**: در تأمین انحصاری و تک‌منبع همیشه؛ در درخواست پیشنهاد و مناقصه محدود، پس از ارزیابی و فقط اگر رویه اجازه دهد. در مناقصه رسمی عمومی، مذاکره پس از گشایش اغلب محدود یا ممنوع است.',
              en: '**When**: always for sole and single sourcing; for RFPs and limited tenders, after evaluation and only if the procedure allows. In a formal open tender, post-bid negotiation is often restricted or prohibited.',
            },
            {
              fa: '**آمادگی**: هدف، حد نهایی (بهترین جایگزین در صورت عدم توافق)، تحلیل اجزای قیمت و هزینه کل مالکیت.',
              en: '**Preparation**: a target, a walk-away point (the best alternative if there is no deal), a breakdown of the price and the total cost of ownership.',
            },
            {
              fa: '**فقط قیمت نیست**: شرایط پرداخت، زمان تحویل، دوره تضمین، قیمت قطعات یدکی، شاخص‌های عملکرد و ساخت داخل.',
              en: '**Not only price**: payment terms, delivery time, warranty period, spare-part prices, performance KPIs and local content.',
            },
            {
              fa: '**انصاف**: اگر دور «بهترین و آخرین پیشنهاد» (BAFO) برگزار شود، با شرایط برابر برای همه قبول‌شده‌ها؛ قیمت یک شرکت‌کننده هرگز به دیگری گفته نمی‌شود. همه چیز در صورت‌جلسه ثبت می‌شود.',
              en: '**Fairness**: a best and final offer (BAFO) round, if held, uses equal terms for all qualified bidders; one bidder’s price is never revealed to another. Everything is minuted.',
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'انتخاب برنده و مستندسازی', en: 'Award and documentation' },
        },
        {
          type: 'p',
          text: {
            fa: '**پرونده مناقصه** شامل این‌هاست: برنامه و برآورد، فهرست دعوت‌شدگان و تأییدش، اسناد و اصلاحیه‌ها، صورت‌جلسه گشایش، گزارش ارزیابی با دلیل هر امتیاز، صورت‌جلسه کمیسیون، تصویب طبق جدول اختیارات و (برای بیش از 1,000,000) تصویب کمیته عملیات شرکا، ابلاغ برنده، نامه به بازندگان، قرارداد امضاشده و سوابق تضمین‌ها. این پرونده سال‌ها نگهداری می‌شود، چون حسابرسی شرکا و بازیافت هزینه معمولاً بررسی می‌کنند که خرید طبق الزامات رقابتی قرارداد نفتی انجام شده باشد.',
            en: 'The **tender file** contains: the plan and estimate, the bidders’ list and its approval, the documents and addenda, the opening minutes, the evaluation report with a reason for every score, the committee minutes, approval per the DoA and (above 1,000,000) by the partners’ operating committee, the award notice, letters to unsuccessful bidders, the signed contract and the guarantee records. It is kept for years, because partner audits and cost recovery usually check that purchasing met the petroleum contract’s competitive bidding requirements.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: '(1) تغییر معیار یا وزن پس از دیدن قیمت‌ها. (2) دسترسی ارزیاب فنی به قیمت‌ها. (3) پذیرفتن پیشنهاد دیررسیده. (4) «دست‌به‌دست کردن قیمت» (Bid shopping): گفتن قیمت یک شرکت‌کننده به دیگری برای پایین آوردن قیمت. (5) استفاده از قیمت پیشنهاد ردشده در فنی به‌عنوان کمترین قیمت. (6) کنترل نکردن اعتبار و بانک صادرکننده ضمانت‌نامه. (7) پرونده ناقص که هزینه را در حسابرسی شرکا غیرقابل دفاع می‌کند.',
            en: '(1) Changing criteria or weights after seeing prices. (2) Letting technical evaluators see prices. (3) Accepting a late bid. (4) Bid shopping: telling one bidder another’s price to push prices down. (5) Using the price of a technically failed bid as the lowest price. (6) Not checking a guarantee’s validity and issuing bank. (7) An incomplete file that leaves the cost indefensible at a partner audit.',
          },
        },
      ],
    },
    {
      id: 'erp-sourcing',
      title: { fa: 'منبع‌یابی در ERP و ثبت‌های مالی', en: 'Sourcing in the ERP and the Finance Entries' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**داده پایه** این مرحله: داده پایه تأمین‌کننده و فهرست تأییدشده (چه کسی می‌تواند دعوت شود)، داده پایه کالا و خدمت، سوابق قیمت قبلی و الگوهای ارزیابی. **داده تراکنشی**: یک **استعلام** برای هر شرکت‌کننده که همه زیر یک شماره مشترک گروه‌بندی می‌شوند، **پیشنهادها** (قیمت، زمان تحویل، اعتبار و انحراف‌ها)، **جدول مقایسه قیمت** با قیمت‌های ارزیابی‌شده، و **انتخاب برنده** که سفارش خرید یا قرارداد را با ارجاع به پیشنهاد برنده می‌سازد. نقش‌ها: کارشناس خرید استعلام‌ها را می‌سازد، دبیر کمیسیون پیشنهادهای رسیده را با زمان ثبت وارد می‌کند، ارزیابان امتیاز می‌دهند، تأییدکنندگان طبق گردش کار تصویب می‌کنند و خزانه‌داری ضمانت‌نامه‌ها را نگه می‌دارد.',
            en: 'The **master data** at this stage: the vendor master and AVL (who may be invited), material and service masters, past price records and evaluation templates. The **transaction data**: one **RFQ** per bidder, all grouped under a shared collective number; the **quotations** (price, delivery, validity and deviations); the **price comparison** with evaluated prices; and the **award**, which creates the PO or contract with a reference to the winning quotation. Roles: the buyer creates the RFQs, the committee secretary records the bids received with a time stamp, evaluators score, approvers approve through the workflow, and treasury holds the guarantees.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'هر قدم، سند ERP و اثر مالی', en: 'Each step, its ERP document and its finance effect' },
          head: [
            { fa: 'قدم', en: 'Step' },
            { fa: 'سند در ERP', en: 'ERP document' },
            { fa: 'ثبت در مالی', en: 'Finance posting' },
          ],
          rows: [
            [{ fa: 'ارسال استعلام یا اسناد مناقصه', en: 'Issue RFQs or tender documents' }, { fa: 'استعلام برای هر شرکت‌کننده با شماره مشترک', en: 'An RFQ per bidder under a collective number' }, { fa: 'ندارد', en: 'None' }],
            [{ fa: 'دریافت پیشنهادها', en: 'Receive bids' }, { fa: 'ثبت پیشنهادها و تضمین‌ها', en: 'Quotations and guarantees recorded' }, { fa: 'برای قیمت ندارد؛ برای تضمین‌ها: جدول پایین', en: 'None for prices; for guarantees, see below' }],
            [{ fa: 'مقایسه', en: 'Compare' }, { fa: 'جدول مقایسه با قیمت‌های ارزیابی‌شده', en: 'Comparison with evaluated prices' }, { fa: 'ندارد', en: 'None' }],
            [{ fa: 'انتخاب برنده', en: 'Award' }, { fa: 'پیشنهاد برنده به قرارداد یا سفارش خرید تبدیل می‌شود', en: 'The winning quotation becomes a contract or PO' }, { fa: 'ثبت در دفتر کل ندارد؛ تعهد در برابر بودجه', en: 'No ledger entry; a commitment against the budget' }],
            [{ fa: 'اجرای خدمت', en: 'Service performed' }, { fa: 'تأییدیه انجام خدمات ماهانه', en: 'Monthly service entry sheet' }, { fa: 'بدهکار موضوع هزینه / بستانکار GR/IR', en: 'Dr cost object / Cr GR/IR' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'تضمین‌ها دو رفتار متفاوت دارند. **ضمانت‌نامه بانکی** دارایی پارس‌آریا نیست و طبق IFRS در ترازنامه شناسایی نمی‌شود؛ اما باید پیگیری شود، و در عمل حسابداری ایران در **حساب‌های انتظامی** ثبت می‌شود: یک حساب و طرف حساب که در ترازنامه اثری ندارند و فقط یادآور تعهدند. **سپرده نقدی** اما پول واقعی است: به بانک پارس‌آریا واریز شده و تا بازگرداندن یا ضبط، **بدهی** به شرکت‌کننده است.',
            en: 'Guarantees behave in two different ways. A **bank guarantee** is not Pars Arya’s asset and is not recognised on the balance sheet under IFRS; but it must be tracked, and in Iranian practice it is recorded in **memorandum accounts**: a pair of accounts with no effect on the balance sheet, kept only as a record of the obligation. A **cash deposit**, however, is real money: it sits in Pars Arya’s bank and is a **liability** to the bidder until it is returned or forfeited.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'تضمین‌های مناقصه نگهداری ایستگاه', en: 'Guarantees in the station maintenance tender' },
          text: {
            fa: 'تضمین شرکت در مناقصه برای هر پیشنهاددهنده 100,000 بود (5٪ برآورد 2,000,000، فرضی). الف و د ضمانت‌نامه بانکی دادند؛ ب و ج سپرده نقدی واریز کردند. الف برنده شد، قرارداد را امضا کرد و ضمانت‌نامه انجام تعهدات 10٪ یعنی 200,000 تحویل داد. سپس همه تضمین‌های شرکت در مناقصه برگردانده شدند.',
            en: 'The bid bond was 100,000 per bidder (5% of the 2,000,000 estimate, illustrative). A and D gave bank guarantees; B and C paid cash deposits. A won, signed the contract and delivered a 10% performance guarantee, that is 200,000. Then all bid bonds were returned.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های تضمین در ERP', en: 'Guarantee entries in the ERP' },
          entries: [
            {
              lines: [
                { account: ac.bank, debit: 200000 },
                { account: ac.bidDeposits, credit: 200000 },
              ],
              memo: { fa: 'دریافت سپرده نقدی ب و ج: 2 × 100,000.', en: 'Cash deposits from B and C: 2 × 100,000.' },
            },
            {
              lines: [
                { account: ac.memo, debit: 200000 },
                { account: ac.memoContra, credit: 200000 },
              ],
              memo: { fa: 'ثبت انتظامی ضمانت‌نامه‌های بانکی الف و د.', en: 'Memorandum record of A’s and D’s bank guarantees.' },
            },
            {
              lines: [
                { account: ac.memo, debit: 200000 },
                { account: ac.memoContra, credit: 200000 },
              ],
              memo: { fa: 'ثبت انتظامی ضمانت‌نامه انجام تعهدات الف: 2,000,000 × 10٪.', en: 'Memorandum record of A’s performance guarantee: 2,000,000 × 10%.' },
            },
            {
              lines: [
                { account: ac.bidDeposits, debit: 200000 },
                { account: ac.bank, credit: 200000 },
              ],
              memo: { fa: 'بازگرداندن سپرده‌های نقدی ب و ج پس از امضای قرارداد.', en: 'Refund of B’s and C’s cash deposits after contract signing.' },
            },
            {
              lines: [
                { account: ac.memoContra, debit: 200000 },
                { account: ac.memo, credit: 200000 },
              ],
              memo: { fa: 'برگشت ثبت انتظامی ضمانت‌نامه‌های شرکت در مناقصه الف و د.', en: 'Reverse the memorandum record of A’s and D’s bid bonds.' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'پس از این ثبت‌ها، حساب سپرده‌های دریافتی صفر است و در حساب‌های انتظامی فقط ضمانت‌نامه انجام تعهدات الف به مبلغ 200,000 باقی مانده است. قرارداد 2,000,000 به‌صورت تعهد در برابر بودجه مرکز هزینه CC-310 ثبت می‌شود. نخستین ثبت واقعی در دفتر کل با **تأییدیه انجام خدمات** ماه اول می‌آید؛ فرض کنید خدمات تأییدشده ماه اول طبق نرخ‌های قرارداد 54,000 باشد:',
            en: 'After these entries, bid deposits are back to zero and only A’s 200,000 performance guarantee remains in the memorandum accounts. The 2,000,000 contract is recorded as a commitment against the CC-310 budget. The first real ledger entry comes with the first month’s **service entry sheet**; suppose the services confirmed in month one come to 54,000 at the contract rates:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ماه اول قرارداد', en: 'Month one of the contract' },
          entries: [
            {
              lines: [
                { account: ac.repairs, debit: 54000 },
                { account: ac.grir, credit: 54000 },
              ],
              memo: { fa: 'تأییدیه انجام خدمات ماه اول؛ تعهد قرارداد 54,000 کاهش و هزینه واقعی 54,000 افزایش می‌یابد.', en: 'Month-one service entry sheet; the contract commitment falls by 54,000 and actual cost rises by 54,000.' },
            },
            {
              lines: [
                { account: ac.grir, debit: 54000 },
                { account: ac.ap, credit: 54000 },
              ],
              memo: { fa: 'صورت‌حساب پیمانکار پس از تطبیق با تأییدیه.', en: 'The contractor’s invoice after matching with the service entry sheet.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: مشارکت و شرکا', en: 'In practice: the joint venture' },
          text: {
            fa: 'برای قراردادهای بالاتر از سقف موافقت‌نامه عملیات مشترک، بهره‌بردار پیش از انتخاب برنده خلاصه ارزیابی را برای تصویب به شرکا می‌فرستد. در ERP این تصویب به‌صورت پیوست و مرحله‌ای از گردش کار ثبت می‌شود، تا سفارش یا قرارداد بدون آن آزاد نشود.',
            en: 'For contracts above the JOA limit, the operator sends the partners the evaluation summary for approval before the award. In the ERP this approval is stored as an attachment and a workflow step, so the PO or contract cannot be released without it.',
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
          title: { fa: 'کدام روش منبع‌یابی؟', en: 'Which sourcing method?' },
          difficulty: 'easy',
          problem: {
            fa: 'با جدول اختیارات پارس‌آریا و تعریف روش‌ها، برای هر نیاز روش منبع‌یابی مناسب را تعیین کنید.',
            en: 'Using the Pars Arya authority matrix and the method definitions, choose the right sourcing method for each need.',
          },
          given: {
            head: [
              { fa: 'نیاز', en: 'Need' },
              { fa: 'شرح', en: 'Description' },
              { fa: 'مبلغ', en: 'Value' },
            ],
            numericCols: [2],
            rows: [
              [{ fa: 'الف', en: 'a' }, { fa: 'برد کنترل اختصاصی کمپرسور که فقط سازنده اصلی می‌سازد', en: 'A proprietary compressor control board made only by the OEM' }, 45000],
              [{ fa: 'ب', en: 'b' }, { fa: 'باریت مصرفی یک سال حفاری؛ چند تأمین‌کننده واجد صلاحیت', en: 'A year of barite for drilling; several qualified suppliers' }, 600000],
              [{ fa: 'ج', en: 'c' }, { fa: 'لوازم‌التحریر دفتر مرکزی', en: 'Stationery for the head office' }, 4000],
              [{ fa: 'د', en: 'd' }, { fa: 'نگهداری یکپارچه ایستگاه تقویت فشار برای سه سال', en: 'Integrated compressor station maintenance for three years' }, 2000000],
              [{ fa: 'ه', en: 'e' }, { fa: 'تعمیر فوری نشتی H2S توسط پیمانکار متخصص در محل', en: 'Urgent repair of an H2S leak by a specialist contractor on site' }, 80000],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'نیاز', en: 'Need' },
                { fa: 'روش', en: 'Method' },
                { fa: 'دلیل و کنترل', en: 'Reason and control' },
              ],
              rows: [
                [{ fa: 'الف', en: 'a' }, { fa: 'تأمین انحصاری', en: 'Sole source' }, { fa: 'فقط یک سازنده؛ مدرک انحصار، تحلیل قیمت و تأیید یک سطح بالاتر', en: 'Only one maker; proof of uniqueness, price analysis and approval one level higher' }],
                [{ fa: 'ب', en: 'b' }, { fa: 'مناقصه محدود برای قرارداد چارچوبی', en: 'Limited tender for a framework agreement' }, { fa: 'گروه اهرمی با نیاز تکراری؛ 600,000 در طبقه مناقصه محدود', en: 'A leverage category with a repeated need; 600,000 is in the limited-tender band' }],
                [{ fa: 'ج', en: 'c' }, { fa: 'یک پیشنهاد یا کاتالوگ', en: 'One quotation or a catalogue' }, { fa: 'روزمره و زیر 10,000', en: 'Routine and under 10,000' }],
                [{ fa: 'د', en: 'd' }, { fa: 'مناقصه عمومی با ارزیابی وزنی', en: 'Open tender with weighted evaluation' }, { fa: 'بیش از 1,000,000 و راهبردی؛ تصویب شرکا لازم است', en: 'Over 1,000,000 and strategic; partner approval required' }],
                [{ fa: 'ه', en: 'e' }, { fa: 'تک‌منبع طبق رویه اضطراری', en: 'Single source under the emergency procedure' }, { fa: 'اضطرار واقعی ایمنی؛ تأیید شفاهی و ثبت و توجیه کتبی در مهلت مقرر', en: 'A genuine safety emergency; verbal approval, then entry and written justification within the deadline' }],
              ],
            },
          ],
          answer: {
            fa: 'الف: انحصاری؛ ب: مناقصه محدود (چارچوبی)؛ ج: یک پیشنهاد؛ د: مناقصه عمومی؛ ه: تک‌منبع اضطراری.',
            en: 'a: sole source; b: limited tender (framework); c: one quotation; d: open tender; e: emergency single source.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ارزیابی وزنی خدمات سیمان‌کاری چاه', en: 'Weighted evaluation of well cementing services' },
          difficulty: 'medium',
          problem: {
            fa: 'در مناقصه محدود خدمات سیمان‌کاری چاه، وزن فنی 60٪، وزن بازرگانی 40٪ و حد نصاب فنی 75 است. امتیاز کل هر پیشنهاد و برنده را تعیین کنید. چرا قیمت R نباید در محاسبه به کار رود؟',
            en: 'In a limited tender for well cementing services, the technical weight is 60%, the commercial weight 40% and the technical threshold 75. Find each bidder’s total score and the winner. Why must R’s price not be used in the calculation?',
          },
          given: {
            head: [
              { fa: 'پیشنهاددهنده', en: 'Bidder' },
              { fa: 'امتیاز فنی', en: 'Technical score' },
              { fa: 'قیمت', en: 'Price' },
            ],
            numericCols: [1, 2],
            rows: [
              [{ fa: 'P', en: 'P' }, 88, 500000],
              [{ fa: 'Q', en: 'Q' }, 78, 480000],
              [{ fa: 'R', en: 'R' }, 72, 450000],
              [{ fa: 'S', en: 'S' }, 95, 600000],
            ],
          },
          hint: {
            fa: 'اول پیشنهادهای زیر حد نصاب را حذف کنید، بعد کمترین قیمت را از میان باقی‌مانده‌ها پیدا کنید.',
            en: 'First drop the bids below the threshold, then find the lowest price among the rest.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'پیشنهاددهنده', en: 'Bidder' },
                { fa: 'امتیاز بازرگانی', en: 'Commercial score' },
                { fa: 'فنی × 60٪', en: 'Technical × 60%' },
                { fa: 'بازرگانی × 40٪', en: 'Commercial × 40%' },
                { fa: 'امتیاز کل', en: 'Total' },
              ],
              numericCols: [1, 2, 3, 4],
              rows: [
                [{ fa: 'P', en: 'P' }, 96, 52.8, 38.4, 91.2],
                [{ fa: 'Q', en: 'Q' }, 100, 46.8, 40, 86.8],
                [{ fa: 'R (رد در فنی)', en: 'R (failed technical)' }, blank, blank, blank, blank],
                [{ fa: 'S', en: 'S' }, 80, 57, 32, 89],
              ],
            },
            {
              type: 'steps',
              items: [
                { title: { fa: 'حذف', en: 'Drop' }, text: { fa: 'R با 72 کمتر از 75 است و حذف می‌شود.', en: 'R, at 72, is below 75 and is dropped.' } },
                {
                  title: { fa: 'امتیاز بازرگانی', en: 'Commercial scores' },
                  text: {
                    fa: 'کمترین قیمت قبول‌شده‌ها 480,000 (Q). P: 480,000 ÷ 500,000 × 100 = 96. S: 480,000 ÷ 600,000 × 100 = 80.',
                    en: 'The lowest qualified price is 480,000 (Q). P: 480,000 ÷ 500,000 × 100 = 96. S: 480,000 ÷ 600,000 × 100 = 80.',
                  },
                },
                {
                  title: { fa: 'چرا قیمت R نه؟', en: 'Why not R’s price?' },
                  text: {
                    fa: 'R از نظر فنی قابل‌قبول نیست، پس قیمتش مبنای مقایسه نیست. اگر اشتباهی 450,000 را کمترین قیمت می‌گرفتیم، امتیاز بازرگانی P به 90 و Q به 93.75 می‌افتاد و پیشنهاددهنده‌ای که صلاحیت ندارد، نتیجه را تغییر می‌داد.',
                    en: 'R is not technically acceptable, so its price is not a benchmark. Had 450,000 been wrongly used as the lowest price, P’s commercial score would drop to 90 and Q’s to 93.75, letting an unqualified bidder shape the outcome.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'P با 91.2 برنده است؛ سپس S با 89 و Q با 86.8. R حذف می‌شود و قیمتش استفاده نمی‌شود.',
            en: 'P wins with 91.2, followed by S at 89 and Q at 86.8. R is dropped and its price is not used.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'قیمت ارزیابی‌شده لوله مغزی', en: 'Evaluated prices for tubing' },
          difficulty: 'medium',
          problem: {
            fa: 'برای خرید لوله مغزی چاه‌های آریا سه پیشنهاد رسیده است. اسناد مناقصه اجازه می‌دهد هزینه‌های خریدار و هزینه بازرسی جایگزین به قیمت اضافه شود. قیمت ارزیابی‌شده هر پیشنهاد و رتبه‌ها را تعیین کنید.',
            en: 'Three bids have arrived for tubing for the Arya wells. The tender documents allow buyer-borne costs and the cost of substitute inspection to be added to the price. Find each bid’s evaluated price and the ranking.',
          },
          given: {
            head: [
              { fa: 'پیشنهاد', en: 'Bid' },
              { fa: 'قیمت', en: 'Price' },
              { fa: 'شرایط', en: 'Terms' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: '1', en: '1' }, 480000, { fa: 'تحویل در انبار میدان (DAP)، با گواهی 3.1', en: 'Delivered to the Field Warehouse (DAP), with 3.1 certificates' }],
              [
                { fa: '2', en: '2' },
                450000,
                { fa: 'تحویل در کارخانه فروشنده (FCA)؛ حمل و بیمه 25,000 و ترخیص و جابه‌جایی 15,000 با خریدار', en: 'At the seller’s works (FCA); freight and insurance 25,000 and clearance and handling 15,000 paid by the buyer' },
              ],
              [{ fa: '3', en: '3' }, 470000, { fa: 'تحویل در انبار میدان، بدون گواهی 3.1؛ بازرسی شخص ثالث 12,000 لازم است', en: 'Delivered to the Field Warehouse, without 3.1 certificates; third-party inspection of 12,000 needed' }],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'پیشنهاد', en: 'Bid' },
                { fa: 'قیمت', en: 'Price' },
                { fa: 'افزوده‌ها', en: 'Additions' },
                { fa: 'قیمت ارزیابی‌شده', en: 'Evaluated price' },
                { fa: 'رتبه', en: 'Rank' },
              ],
              numericCols: [1, 2, 3, 4],
              rows: [
                [{ fa: '1', en: '1' }, 480000, 0, 480000, 1],
                [{ fa: '2', en: '2' }, 450000, 40000, 490000, 3],
                [{ fa: '3', en: '3' }, 470000, 12000, 482000, 2],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'ارزان‌ترین قیمت روی کاغذ (پیشنهاد 2) پس از افزودن 25,000 + 15,000 = 40,000 گران‌ترین است. اگر اسناد مناقصه گواهی 3.1 را **الزامی** اعلام کرده بود، پیشنهاد 3 نامنطبق بود و اصلاً ارزیابی نمی‌شد. 480,000 در طبقه مناقصه محدود است.',
                en: 'The cheapest price on paper (bid 2) becomes the most expensive after adding 25,000 + 15,000 = 40,000. Had the tender made 3.1 certificates **mandatory**, bid 3 would be non-compliant and not evaluated at all. 480,000 falls in the limited-tender band.',
              },
            },
          ],
          answer: {
            fa: 'پیشنهاد 1 با 480,000 اول است؛ پیشنهاد 3 با 482,000 دوم و پیشنهاد 2 با 490,000 سوم.',
            en: 'Bid 1 ranks first at 480,000; bid 3 is second at 482,000 and bid 2 third at 490,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'سپرده‌ای که ضبط شد', en: 'A forfeited bid deposit' },
          difficulty: 'hard',
          problem: {
            fa: 'برای اجاره سه‌ماهه دکل تعمیر چاه (برآورد 850,000)، سه شرکت X، Y و Z هر کدام 40,000 سپرده نقدی شرکت در مناقصه واریز کردند. X برنده شد اما در مهلت اعتبار پیشنهاد از امضای قرارداد خودداری کرد؛ طبق اسناد مناقصه سپرده‌اش ضبط شد و کار به Y (رتبه دوم) به مبلغ 820,000 واگذار شد. Y قرارداد را امضا کرد و ضمانت‌نامه بانکی انجام تعهدات 10٪ تحویل داد. سپس سپرده‌های Y و Z برگردانده شد. همه ثبت‌ها را بنویسید و مانده حساب سپرده‌ها و اثر خالص بر بانک را پیدا کنید.',
            en: 'For a three-month workover rig hire (estimate 850,000), three companies, X, Y and Z, each paid a 40,000 cash bid deposit. X won but refused to sign within the bid validity period; under the tender documents its deposit was forfeited and the work went to Y (second ranked) at 820,000. Y signed and delivered a 10% bank performance guarantee. Then Y’s and Z’s deposits were refunded. Write all the entries and find the bid-deposit balance and the net effect on the bank.',
          },
          hint: {
            fa: 'سپرده ضبط‌شده دیگر بدهی نیست. ضمانت‌نامه بانکی فقط در حساب‌های انتظامی ثبت می‌شود.',
            en: 'A forfeited deposit is no longer a liability. A bank guarantee goes only to the memorandum accounts.',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  lines: [
                    { account: ac.bank, debit: 120000 },
                    { account: ac.bidDeposits, credit: 120000 },
                  ],
                  memo: { fa: 'دریافت سپرده‌ها: 3 × 40,000.', en: 'Deposits received: 3 × 40,000.' },
                },
                {
                  lines: [
                    { account: ac.bidDeposits, debit: 40000 },
                    { account: ac.forfeited, credit: 40000 },
                  ],
                  memo: { fa: 'ضبط سپرده X به دلیل امضا نکردن قرارداد.', en: 'X’s deposit forfeited for refusing to sign.' },
                },
                {
                  lines: [
                    { account: ac.memo, debit: 82000 },
                    { account: ac.memoContra, credit: 82000 },
                  ],
                  memo: { fa: 'ضمانت‌نامه انجام تعهدات Y: 820,000 × 10٪ = 82,000.', en: 'Y’s performance guarantee: 820,000 × 10% = 82,000.' },
                },
                {
                  lines: [
                    { account: ac.bidDeposits, debit: 80000 },
                    { account: ac.bank, credit: 80000 },
                  ],
                  memo: { fa: 'بازگرداندن سپرده‌های Y و Z.', en: 'Refund of Y’s and Z’s deposits.' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'حساب سپرده‌های دریافتی', en: 'The bid deposits account' },
              head: [
                { fa: 'رویداد', en: 'Event' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
                { fa: 'مانده بستانکار', en: 'Credit balance' },
              ],
              numericCols: [1, 2, 3],
              rows: [
                [{ fa: 'دریافت سه سپرده', en: 'Three deposits received' }, 0, 120000, 120000],
                [{ fa: 'ضبط سپرده X', en: 'X’s deposit forfeited' }, 40000, 0, 80000],
                [{ fa: 'بازگرداندن Y و Z', en: 'Y and Z refunded' }, 80000, 0, 0],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'اثر خالص بر بانک: 120,000 − 80,000 = 40,000 افزایش، برابر سپرده ضبط‌شده. اگر این مناقصه برای عملیات مشترک باشد، دستورالعمل حسابداری موافقت‌نامه عملیات مشترک معمولاً می‌خواهد چنین مبالغی به حساب مشترک بستانکار شود تا هزینه‌های شرکا کم شود، نه اینکه درآمد بهره‌بردار باشد؛ موافقت‌نامه خود را بررسی کنید.',
                en: 'Net effect on the bank: 120,000 − 80,000 = 40,000 more, equal to the forfeited deposit. If the tender was for joint operations, the JOA accounting procedure usually requires such amounts to be credited to the joint account to reduce the partners’ costs, rather than kept as the operator’s income; check your agreement.',
              },
            },
          ],
          answer: {
            fa: 'مانده سپرده‌ها صفر؛ بانک 40,000 افزایش یافته (سپرده ضبط‌شده X)؛ ضمانت‌نامه 82,000 Y در حساب‌های انتظامی.',
            en: 'Bid deposits are zero; the bank is up 40,000 (X’s forfeited deposit); Y’s 82,000 guarantee sits in the memorandum accounts.',
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
              fa: 'راهبرد منبع‌یابی از هزینه‌کرد و ریسک تأمین (ماتریس کرالیچ) و جدول اختیارات می‌آید؛ انحصاری یعنی فقط یک منبع وجود دارد و تک‌منبع یعنی یکی را عمداً انتخاب کرده‌ایم.',
              en: 'The sourcing strategy follows from spend and supply risk (the Kraljic matrix) and the authority matrix; sole source means only one supplier exists, single source means we chose one deliberately.',
            },
            {
              fa: 'استعلام بها برای اقلام استاندارد، درخواست پیشنهاد برای راه‌حل‌های پیچیده و اسناد مناقصه برای رقابت رسمی است؛ معیارها و وزن‌ها پیش از دریافت پیشنهادها تعیین می‌شوند.',
              en: 'RFQs suit standard items, RFPs complex solutions and ITBs formal competition; criteria and weights are fixed before bids arrive.',
            },
            {
              fa: 'ارزیابی دو مرحله دارد: حد نصاب فنی، سپس مقایسه بازرگانی با قیمت ارزیابی‌شده؛ امتیاز بازرگانی = کمترین قیمت ÷ قیمت پیشنهاددهنده × 100.',
              en: 'Evaluation has two stages: a technical threshold, then a commercial comparison on evaluated prices; commercial score = lowest price ÷ bidder’s price × 100.',
            },
            {
              fa: 'تضمین شرکت در مناقصه، ضمانت‌نامه انجام تعهدات، ضمانت‌نامه پیش‌پرداخت و کسور حسن انجام کار هر کدام از خطری محافظت می‌کنند؛ ضمانت‌نامه بانکی در حساب‌های انتظامی و سپرده نقدی به‌عنوان بدهی ثبت می‌شود.',
              en: 'Bid bonds, performance guarantees, advance payment guarantees and retention each protect against a risk; bank guarantees go to memorandum accounts and cash deposits are recorded as liabilities.',
            },
            {
              fa: 'ERP استعلام‌ها، پیشنهادها، مقایسه و انتخاب برنده را با جریان اسناد به سفارش یا قرارداد وصل می‌کند؛ نخستین ثبت واقعی هزینه با رسید کالا یا تأییدیه خدمات می‌آید و پرونده کامل مناقصه، پشتوانه بازیافت هزینه است.',
              en: 'The ERP links RFQs, quotations, comparison and award to the PO or contract through the document flow; the first real cost entry comes with the goods receipt or service entry sheet, and a complete tender file underpins cost recovery.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'تأمین انحصاری و تک‌منبع', en: 'Sole and single source' },
              def: { fa: 'انحصاری: فقط یک تأمین‌کننده وجود دارد؛ تک‌منبع: چند تأمین‌کننده هست اما یکی با توجیه انتخاب می‌شود.', en: 'Sole: only one supplier exists; single: several exist but one is chosen with a justification.' },
            },
            {
              term: { fa: 'مناقصه محدود و عمومی', en: 'Limited and open tender' },
              def: { fa: 'محدود: میان دعوت‌شدگان واجد صلاحیت؛ عمومی: با آگهی عمومی برای همه.', en: 'Limited: among invited qualified suppliers; open: by public notice to all.' },
            },
            {
              term: { fa: 'استعلام بها، درخواست پیشنهاد، دعوت به مناقصه', en: 'RFQ, RFP, ITB' },
              def: { fa: 'سه سند دعوت به رقابت، از ساده (قیمت کالای استاندارد) تا رسمی (مناقصه کامل).', en: 'Three solicitation documents, from simple (price for standard goods) to formal (a full tender).' },
            },
            {
              term: { fa: 'حد نصاب فنی', en: 'Technical threshold' },
              def: { fa: 'حداقل امتیاز فنی که پیشنهاد برای ورود به ارزیابی بازرگانی لازم دارد.', en: 'The minimum technical score a bid needs to enter the commercial evaluation.' },
            },
            {
              term: { fa: 'قیمت ارزیابی‌شده', en: 'Evaluated price' },
              def: { fa: 'قیمت پیشنهادی به‌علاوه هزینه‌های جداگانه خریدار و ارزش انحراف‌ها از شرایط.', en: 'The bid price plus the buyer’s separate costs and the value of deviations from the terms.' },
            },
            {
              term: { fa: 'تضمین شرکت در مناقصه', en: 'Bid bond' },
              def: { fa: 'تضمینی که اگر برنده از پیشنهاد یا امضای قرارداد کنار بکشد، ضبط می‌شود.', en: 'A security forfeited if the winner withdraws its bid or refuses to sign.' },
            },
            {
              term: { fa: 'ضمانت‌نامه انجام تعهدات', en: 'Performance guarantee' },
              def: { fa: 'ضمانت‌نامه‌ای که اجرای درست قرارداد را تضمین می‌کند.', en: 'A guarantee securing proper performance of the contract.' },
            },
            {
              term: { fa: 'حساب‌های انتظامی', en: 'Memorandum accounts' },
              def: { fa: 'جفت حساب‌هایی خارج از ترازنامه برای پیگیری تعهداتی مثل ضمانت‌نامه‌های دریافتی.', en: 'Paired off-balance-sheet accounts used to track obligations such as guarantees received.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'برد کنترل کمپرسوری را فقط سازنده اصلی می‌سازد و هیچ جایگزین مجازی ندارد. این خرید کدام است؟',
        en: 'A compressor control board is made only by the original manufacturer, with no approved alternative. What is this purchase?',
      },
      options: [
        { fa: 'تک‌منبع', en: 'Single source' },
        { fa: 'تأمین انحصاری', en: 'Sole source' },
        { fa: 'مناقصه محدود', en: 'Limited tender' },
        { fa: 'قرارداد چارچوبی', en: 'Framework agreement' },
      ],
      answer: 1,
      explain: {
        fa: 'وقتی واقعاً فقط یک تأمین‌کننده وجود دارد، خرید انحصاری است و باید با مدرک انحصار، تحلیل قیمت و مذاکره همراه شود. تک‌منبع یعنی چند تأمین‌کننده هست اما یکی را عمداً انتخاب کرده‌ایم؛ این‌جا انتخابی وجود ندارد.',
        en: 'When there really is only one supplier, the purchase is sole source and needs proof of uniqueness, price analysis and negotiation. Single source means several suppliers exist but we deliberately chose one; here there is no choice.',
      },
    },
    {
      q: {
        fa: 'برای نگهداری یکپارچه ایستگاه، پارس‌آریا می‌خواهد پیمانکاران خودشان روش اجرا را پیشنهاد دهند و پیشنهادها با امتیاز وزنی سنجیده شوند. کدام سند مناسب است؟',
        en: 'For integrated station maintenance, Pars Arya wants contractors to propose their own method, with bids scored by weighted criteria. Which document fits?',
      },
      options: [
        { fa: 'استعلام بها (RFQ)', en: 'Request for quotation (RFQ)' },
        { fa: 'سفارش خرید', en: 'Purchase order' },
        { fa: 'درخواست خرید', en: 'Purchase requisition' },
        { fa: 'درخواست پیشنهاد (RFP)', en: 'Request for proposal (RFP)' },
      ],
      answer: 3,
      explain: {
        fa: 'درخواست پیشنهاد برای راه‌حل‌های پیچیده است که پیشنهاددهنده روش را طراحی می‌کند و ارزیابی با معیارهای وزنی انجام می‌شود. استعلام بها برای اقلام استاندارد با مشخصات روشن است و مقایسه‌اش عمدتاً قیمتی است.',
        en: 'An RFP is for complex solutions where the bidder designs the method and evaluation uses weighted criteria. An RFQ is for standard items with clear specifications and is compared mainly on price.',
      },
    },
    {
      q: {
        fa: 'کمترین قیمت قبول‌شده 1,800,000 است. امتیاز بازرگانی پیشنهادی با قیمت 2,250,000 چقدر است؟',
        en: 'The lowest qualified price is 1,800,000. What is the commercial score of a bid priced at 2,250,000?',
      },
      options: [
        { fa: '80', en: '80' },
        { fa: '125', en: '125' },
        { fa: '20', en: '20' },
        { fa: '75', en: '75' },
      ],
      answer: 0,
      explain: {
        fa: '1,800,000 ÷ 2,250,000 × 100 = 80. گزینه 125 کسر را وارونه کرده است (2,250,000 ÷ 1,800,000)؛ امتیاز بازرگانی هرگز از 100 بیشتر نمی‌شود، چون ارزان‌ترین پیشنهاد 100 می‌گیرد.',
        en: '1,800,000 ÷ 2,250,000 × 100 = 80. The 125 option inverts the fraction (2,250,000 ÷ 1,800,000); a commercial score never exceeds 100, because the cheapest bid gets 100.',
      },
    },
    {
      q: {
        fa: 'وزن فنی 70٪ و بازرگانی 30٪ است. پیشنهادی امتیاز فنی 80 و امتیاز بازرگانی 90 دارد. امتیاز کل چقدر است؟',
        en: 'The technical weight is 70% and commercial 30%. A bid scores 80 technical and 90 commercial. What is its total score?',
      },
      options: [
        { fa: '85', en: '85' },
        { fa: '170', en: '170' },
        { fa: '83', en: '83' },
        { fa: '87', en: '87' },
      ],
      answer: 2,
      explain: {
        fa: '80 × 70٪ + 90 × 30٪ = 56 + 27 = 83. گزینه 87 وزن‌ها را جابه‌جا کرده (80 × 30٪ + 90 × 70٪) و 85 میانگین ساده بدون وزن است.',
        en: '80 × 70% + 90 × 30% = 56 + 27 = 83. The 87 option swaps the weights (80 × 30% + 90 × 70%), and 85 is the simple unweighted average.',
      },
    },
    {
      q: {
        fa: 'حد نصاب فنی 70 است. X: فنی 68، قیمت 1,500,000. Y: فنی 80، قیمت 1,600,000. Z: فنی 85، قیمت 2,000,000. امتیاز بازرگانی Z چقدر است؟',
        en: 'The technical threshold is 70. X: technical 68, price 1,500,000. Y: technical 80, price 1,600,000. Z: technical 85, price 2,000,000. What is Z’s commercial score?',
      },
      options: [
        { fa: '75', en: '75' },
        { fa: '80', en: '80' },
        { fa: '100', en: '100' },
        { fa: '125', en: '125' },
      ],
      answer: 1,
      explain: {
        fa: 'X با 68 زیر حد نصاب است و قیمتش باز نمی‌شود؛ پس کمترین قیمت قبول‌شده 1,600,000 (Y) است و Z = 1,600,000 ÷ 2,000,000 × 100 = 80. گزینه 75 با قیمت X حساب شده، یعنی قیمت پیشنهادی را که صلاحیت فنی ندارد مبنا گرفته است.',
        en: 'X, at 68, is below the threshold and its price is not opened, so the lowest qualified price is 1,600,000 (Y) and Z = 1,600,000 ÷ 2,000,000 × 100 = 80. The 75 option uses X’s price, benchmarking against a bid that is not technically qualified.',
      },
    },
    {
      q: {
        fa: 'پیشنهادی 300,000 با تحویل در کارخانه فروشنده است؛ خریدار باید 18,000 حمل و بیمه و 7,000 ترخیص بپردازد. قیمت ارزیابی‌شده چقدر است؟',
        en: 'A bid is 300,000 delivered at the seller’s works; the buyer must pay 18,000 freight and insurance and 7,000 clearance. What is its evaluated price?',
      },
      options: [
        { fa: '300,000', en: '300,000' },
        { fa: '318,000', en: '318,000' },
        { fa: '307,000', en: '307,000' },
        { fa: '325,000', en: '325,000' },
      ],
      answer: 3,
      explain: {
        fa: '300,000 + 18,000 + 7,000 = 325,000. قیمت ارزیابی‌شده همه هزینه‌هایی را که خریدار جداگانه می‌پردازد شامل می‌شود تا با پیشنهادهای «تحویل در انبار» قابل مقایسه شود؛ گزینه 318,000 ترخیص را جا انداخته است.',
        en: '300,000 + 18,000 + 7,000 = 325,000. The evaluated price includes every cost the buyer pays separately, so it can be compared with “delivered to warehouse” bids; the 318,000 option leaves out clearance.',
      },
    },
    {
      q: {
        fa: 'اسناد مناقصه تضمین شرکت در مناقصه را 5٪ برآورد تعیین کرده‌اند و برآورد 3,000,000 است. مبلغ تضمین چقدر است؟',
        en: 'The tender sets the bid bond at 5% of the estimate, and the estimate is 3,000,000. How much is the bid bond?',
      },
      options: [
        { fa: '150,000', en: '150,000' },
        { fa: '15,000', en: '15,000' },
        { fa: '300,000', en: '300,000' },
        { fa: '1,500,000', en: '1,500,000' },
      ],
      answer: 0,
      explain: {
        fa: '3,000,000 × 5٪ = 150,000. گزینه 300,000 همان 10٪ است که معمولاً برای ضمانت‌نامه انجام تعهدات به کار می‌رود، نه تضمین شرکت در مناقصه؛ گزینه‌های دیگر خطای جای ممیزند.',
        en: '3,000,000 × 5% = 150,000. The 300,000 option is 10%, the size typically used for a performance guarantee, not a bid bond; the other options are decimal-place slips.',
      },
    },
    {
      q: {
        fa: 'یک شرکت‌کننده ضمانت‌نامه بانکی شرکت در مناقصه داده است. پارس‌آریا آن را چگونه ثبت می‌کند؟',
        en: 'A bidder submits a bank guarantee as its bid bond. How does Pars Arya record it?',
      },
      options: [
        { fa: 'بدهکار بانک / بستانکار درآمد', en: 'Dr Cash at bank / Cr Revenue' },
        { fa: 'به‌عنوان دارایی و بدهی در ترازنامه', en: 'As an asset and a liability on the balance sheet' },
        { fa: 'در حساب‌های انتظامی، خارج از ترازنامه، برای پیگیری', en: 'In memorandum accounts, off the balance sheet, for tracking' },
        { fa: 'هیچ ثبتی ندارد و پیگیری هم لازم نیست', en: 'No record at all and no tracking is needed' },
      ],
      answer: 2,
      explain: {
        fa: 'ضمانت‌نامه بانکی پولی به پارس‌آریا منتقل نمی‌کند، پس دارایی یا درآمد نیست و در ترازنامه شناسایی نمی‌شود؛ اما باید اعتبار و بازگرداندنش پیگیری شود، و در عمل حسابداری ایران در حساب‌های انتظامی ثبت می‌شود. سپرده نقدی برعکس پول واقعی است و بدهی ثبت می‌شود.',
        en: 'A bank guarantee transfers no money to Pars Arya, so it is neither an asset nor income and is not recognised on the balance sheet; but its validity and return must be tracked, and in Iranian practice it is recorded in memorandum accounts. A cash deposit, by contrast, is real money and is recorded as a liability.',
      },
    },
    {
      q: {
        fa: 'برنده مناقصه در مهلت اعتبار پیشنهاد از امضای قرارداد خودداری می‌کند. پارس‌آریا طبق اسناد مناقصه چه می‌کند؟',
        en: 'The winning bidder refuses to sign within the bid validity period. Under the tender documents, what does Pars Arya do?',
      },
      options: [
        { fa: 'مناقصه را تا ابد متوقف می‌کند', en: 'Halts the tender indefinitely' },
        { fa: 'تضمین شرکت در مناقصه را ضبط می‌کند و در صورت اجازه رویه، کار را به رتبه دوم واگذار می‌کند', en: 'Forfeits the bid bond and, if the procedure allows, awards to the second-ranked bidder' },
        { fa: 'تضمین را برمی‌گرداند، چون قراردادی امضا نشده است', en: 'Returns the bond, since no contract was signed' },
        { fa: 'با قیمت رتبه دوم با برنده دوباره مذاکره می‌کند', en: 'Renegotiates with the winner using the second-ranked bidder’s price' },
      ],
      answer: 1,
      explain: {
        fa: 'تضمین شرکت در مناقصه دقیقاً برای همین وضعیت است: ضبط می‌شود تا زیان خریدار جبران شود، و کار طبق رویه به رتبه بعدی می‌رسد. بازگرداندن تضمین هدفش را بی‌معنا می‌کند و گفتن قیمت دیگران به برنده، دست‌به‌دست کردن قیمت و نقض محرمانگی است.',
        en: 'The bid bond exists for exactly this case: it is forfeited to cover the buyer’s loss, and the work goes to the next-ranked bidder under the procedure. Returning the bond would defeat its purpose, and quoting another bidder’s price to the winner is bid shopping and a breach of confidentiality.',
      },
    },
    {
      q: {
        fa: 'در یک قرارداد خدمات که از مناقصه بیرون آمده، نخستین ثبت در دفتر کل در کدام قدم ERP ایجاد می‌شود؟',
        en: 'For a services contract that came out of a tender, at which ERP step is the first general ledger entry created?',
      },
      options: [
        { fa: 'تأییدیه انجام خدمات ماهانه', en: 'The monthly service entry sheet' },
        { fa: 'ثبت پیشنهادهای رسیده', en: 'Entering the bids received' },
        { fa: 'جدول مقایسه قیمت', en: 'The price comparison' },
        { fa: 'انتخاب برنده و ساخت قرارداد', en: 'The award and creation of the contract' },
      ],
      answer: 0,
      explain: {
        fa: 'استعلام، پیشنهاد، مقایسه و انتخاب برنده هیچ ثبتی در دفتر کل ندارند؛ قرارداد فقط تعهدی در برابر بودجه می‌سازد. نخستین هزینه واقعی وقتی ثبت می‌شود که خدمت انجام و تأیید شود: بدهکار موضوع هزینه / بستانکار GR/IR.',
        en: 'RFQs, bids, comparison and award create no ledger entries; the contract only creates a commitment against the budget. The first actual cost is posted when the service is performed and confirmed: Dr cost object / Cr GR/IR.',
      },
    },
  ],
}
