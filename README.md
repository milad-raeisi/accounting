# Daftar · دفتر

دفتر دوره‌های آموزش ماژول‌های ERP برای صنعت نفت و گاز است، به فارسی و انگلیسی، ساخته [SBC](https://sbc.om).

Daftar teaches the modules of an oil and gas ERP, in Persian and English. Made by [SBC](https://sbc.om) (Senior Block Chain LLC).

## Courses

| Course | Lessons | Covers |
|---|---|---|
| **Financial accounting** (Finance module) | 32 | Foundations (equation, debits and credits, journal, ledger, vouchers and three-level coding, trial balance, adjustments, statements, closing), cash and bank reconciliation, receivables and cheques, inventory, fixed assets, liabilities and payroll, equity, ratio analysis; accounting in an ERP, journal-entry management, period close, cost allocation, foreign currency (IAS 21), leases (IFRS 16), oil and gas accounting and revenue (IFRS 6, IFRS 15), joint operations, cost recovery, intercompany and consolidation; Oman corporate income tax, VAT and e-invoicing (Fawtara). |
| **Budgets, projects and AFE** | 8 | Annual work programme and budget, cost-coding structure, WBS design, AFE lifecycle, commitments and availability control, variance and earned value, capitalisation and settlement, end-to-end ERP integration. |
| **Procurement** | 9 | Procure-to-pay, requisitions and approvals, suppliers, sourcing and tenders, POs and contracts, expediting and logistics, goods received notes (GRN) and service entry sheets (SES), invoice verification and payment, controls. |
| **Warehousing and inventory control** | 8 | Material master, store structure and HSE, GRN, goods issue and transfers, counting, replenishment, warehouse postings and reconciliation. |
| **Asset management and maintenance** | 8 | Asset register and hierarchy, maintenance strategies, work orders, planning and spares, reliability KPIs, asset accounting and CAPEX, EAM integration. |

Every lesson has objectives, worked examples, journals and tables, 3 to 5 exercises with full solutions, key terms and a 10-question quiz. The ERP courses follow one fictional operator, **Masar Petroleum** («شرکت مسار پترولیوم», company code `MP01`) on the Arya field; the accounting foundations follow *Nova Design Studio*. All tax rates, contract terms and limits are either sourced (Oman tax, checked November 2026) or labelled illustrative.

Also included:

- **31 interactive figures** (GSAP, Three.js): ERP module map, procure-to-pay, GRN/SES, WBS tree, budget control, AFE lifecycle, journal-entry workflow, cost recovery, T-accounts, trial balance, closing entries and more.
- **Ledger Lab:** a live double-entry simulator for the Nova example.
- **Glossary:** 303 bilingual terms in 17 categories, with search and flashcards.
- **Progress:** per-lesson completion (a quiz score of 60% or more completes the lesson), per-course progress, "continue learning", and a final exam per course. Stored in `localStorage`.

## Brand

Daftar has its own name and logo (`public/brand/daftar-logo.svg`) and follows the [SBC brand guide](https://sbc.om/brand/) for colour, type and voice: Royal `#406AE4` actions, Ink `#1D1D1D` headings, Slate `#4D585F` body, Mist `#EDF1F4` page field, white 30px cards without borders, pill buttons, a charcoal dark theme; Bricolage Grotesque headings, Inter Display text, Vazirmatn for Persian. Tokens are in `src/index.css`. Writing rule: never use the em dash.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview
```

Requires Node 22.18+ (lesson files are read at build time with Node's built-in TypeScript type stripping). Routing uses a hash router, so `dist/` can be served from any static host.

## Project structure

```
src/
  content/
    types.ts            content schema (Lesson, Block, Question, GlossaryTerm, DiagramId…)
    courses.ts          the five courses (order, ERP module, default currency)
    lessons/NN-*.ts     accounting lessons; lessons/index.ts = lesson API (lists, loadLesson)
    courses/<id>/NN-*.ts  lessons of the other courses
    glossary.ts         glossary terms
    nova.ts             Nova running example for the Ledger Lab
  lib/                  ledger engine, formatting (Persian digits, code isolation), gsap, progress, courseStats
  i18n/                 I18nProvider and UI strings
  components/           diagrams (registry.tsx), lesson blocks, quiz, layout, Animate UI components
  pages/                Home, Courses, Course, Lesson, Lab, Glossary, Practice
vite.config.ts          includes the lesson-manifest plugin
```

**How lessons load:** a small Vite plugin (`virtual:lesson-manifest`) reads every lesson file at build time and exposes only its summary (title, number, level, quiz count…). Lists, progress and navigation use that manifest; each lesson's full content is a separate chunk loaded when the lesson or a course exam is opened.

### Adding content

- **A lesson:** add `src/content/lessons/NN-slug.ts` (accounting) or `src/content/courses/<course>/NN-slug.ts` exporting `lesson: Lesson`, with a unique slug and `number` = position in its course. Use only type imports in lesson files. It is picked up automatically.
- **Currency label:** lessons default to their course currency; set `currency: 'usd' | 'omr' | 'toman'` to override.
- **A figure:** add a component in `src/components/diagrams/`, add its id to `DiagramId` in `content/types.ts` and to `diagrams/registry.tsx`, then place it with `{ type: 'diagram', id: '…' }`.
- **Codes in Persian text** (`AFE-2025-014.02.03`, `AR-07`) keep Latin digits and left-to-right order automatically.

### RTL notes

- Use logical Tailwind utilities (`ms-`, `pe-`, `start-`, `text-start`) and `rtl:` variants.
- Never split Persian text into characters. GSAP `SplitText` is used with `type: 'words'` only.
- In T-accounts, debit is the reading-start side: left in English, right in Persian.

---

Educational content only: not a substitute for professional accounting, tax or legal advice.
