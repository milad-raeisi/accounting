import type { Lesson } from '../../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'goods-issue-transfers',
  number: 5,
  level: 'intermediate',
  minutes: 22,
  icon: 'ArrowLeftRight',
  tone: 'expense',
  title: { fa: 'حواله انبار، انتقال و برگشت کالا', en: 'Goods Issue, Transfers and Returns' },
  summary: {
    fa: 'وقتی کالا از انبار خارج می‌شود، به هزینه یا بخشی از یک دارایی در حال ساخت تبدیل می‌شود. در این درس با مثال شرکت نفت و گاز پارس‌آریا، رزرو کالا، برداشت و حواله انبار، انتقال میان انبار مرکزی و انبار میدان و برگشت کالا را دنبال می‌کنیم و می‌بینیم ERP برای هر کدام چه ثبتی در مالی می‌سازد.',
    en: 'When material leaves the warehouse it becomes an expense or part of an asset under construction. Using Pars Arya Oil & Gas, this lesson follows reservations, picking and goods issues, transfers between the Central and Field warehouses, and returns to stock, and shows the entry the ERP posts to Finance for each.',
  },
  objectives: [
    { fa: 'رزرو کالا را توضیح دهید و موجودی قابل استفاده را محاسبه کنید.', en: 'Explain reservations and calculate available stock.' },
    {
      fa: 'برداشت کالا و حواله انبار را با مدارک و کنترل‌های درست انجام دهید.',
      en: 'Carry out picking and a goods issue with the right documents and checks.',
    },
    {
      fa: 'برای هر حواله، موضوع هزینه (مرکز هزینه، دستور کار، پروژه یا AFE) و برچسب بازیافت هزینه درست را انتخاب کنید.',
      en: 'Choose the right cost object (cost centre, work order, project or AFE) and cost-recovery tag for each issue.',
    },
    {
      fa: 'ثبت‌هایی را که ERP برای حواله، انتقال و برگشت کالا در مالی می‌سازد بنویسید.',
      en: 'Write the entries the ERP posts to Finance for issues, transfers and returns.',
    },
    {
      fa: 'انتقال یک‌مرحله‌ای و دومرحله‌ای را از هم تشخیص دهید و برگشت کالا را درست ثبت کنید.',
      en: 'Tell one-step from two-step transfers and record returns to stock correctly.',
    },
  ],
  sections: [
    // @@SECTIONS@@
  ],
  quiz: [
    // @@QUIZ@@
  ],
}
