# SBC Accounting Course · آموزش حسابداری SBC

دوره آموزش حسابداری مالی به فارسی و انگلیسی، تهیه‌شده توسط [SBC](https://sbc.om).

A financial accounting course in Persian and English, by [SBC](https://sbc.om) (Senior Block Chain LLC).

## Brand

The site follows the [SBC brand guide](https://sbc.om/brand/):

- **Logo:** `public/brand/sbc-logo.svg`, used as supplied (never recoloured, stretched or given effects; at least 24px; clear space of a quarter of the mark's width). The "mark with name" lockup lives in `src/components/layout/Logo.tsx`.
- **Colour:** Royal `#406AE4` for buttons and links, Ink `#1D1D1D` headings, Slate `#4D585F` body, Mist `#EDF1F4` page field, white cards, Tint `#EAF0F9` panels inside cards, Navy `#06132A` for dark mode. SBC Blue `#0098EA` is reserved for the mark. Tokens are in `src/index.css`.
- **Type:** Bricolage Grotesque (semibold) for English headings, Inter Display for English text, Vazirmatn for Persian.
- **Shape:** white cards with 30px corners and no borders, pill buttons, line icons inside a Royal to Azure circle.

## Features

| | |
|---|---|
| **12 lessons** | What is accounting → equation → accounts → debits & credits → journal → ledger → trial balance → adjusting entries → financial statements → closing & the cycle → inventory → ratio analysis. Every lesson has objectives, worked examples, tables and a 6-question quiz with explanations. |
| **20 animated figures** | GSAP timelines (ScrollTrigger, DrawSVG, MotionPath, SplitText), T-accounts, posting flow, trial balance, closing entries, depreciation chart, inventory layers, ratio gauges… |
| **3D scenes** | Three.js / React Three Fiber: a balance scale for *Assets = Liabilities + Equity* and an orbiting accounting cycle. |
| **Ledger Lab** | A live double-entry simulator for the running example (*Nova Design Studio*). Record events, adjustments, closing entries or your own Dr/Cr entry and watch the journal, T-accounts, trial balance, statements and the 3D scale update. |
| **Glossary** | 100 bilingual terms with formulas, search, categories and 3D flashcards. |
| **Practice exam** | Randomised questions from any combination of lessons, with timer and review. |
| **Bilingual** | Persian (default, RTL, Vazirmatn, Persian digits) and English (LTR, Inter). Language and theme persist in `localStorage`. |

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview
```

Routing uses a hash router, so `dist/` can be served from any static host (GitHub Pages, Netlify, S3…).

## Project structure

```
src/
  content/            course data (bilingual { fa, en } strings)
    types.ts          content schema (Lesson, Block, Question, GlossaryTerm…)
    lessons/NN-*.ts   one file per lesson, auto-discovered by lessons/index.ts
    glossary.ts       100 terms
    nova.ts           running example: chart of accounts, 12 transactions, 6 adjustments
  lib/
    ledger.ts         double-entry engine (balances, trial balance, statements, closing)
    format.ts         Persian digits, money/percent formatting
    gsap.ts           GSAP + plugin registration (import GSAP only from here)
    progress.ts       lesson completion & quiz scores (localStorage)
    theme.tsx         light/dark theme provider
  i18n/               I18nProvider (lang, dir, t, tr, num, money) + UI strings
  components/
    animate-ui/       components installed from the Animate UI registry (shadcn CLI)
    diagrams/         one file per figure + registry.tsx (lazy-loaded by id)
    three/            React Three Fiber scenes
    lesson/           block renderer, quiz, journal/T-account/analysis tables
    layout/           header, footer, page shell
  pages/              Home, Lessons, Lesson, Lab, Glossary, Practice (+ #/dev/diagrams gallery)
```

### Adding content

- **A lesson:** add `src/content/lessons/13-my-topic.ts` exporting `lesson: Lesson`. It is picked up automatically.
- **A figure:** add a component in `src/components/diagrams/`, register its id in `content/types.ts` (`DiagramId`) and `diagrams/registry.tsx`, then place it in a lesson with `{ type: 'diagram', id: '…' }`.
- **More Animate UI components:** `npx shadcn@latest add @animate-ui/<name>` (the registry is configured in `components.json`).

### RTL notes

- Use logical Tailwind utilities (`ms-`, `pe-`, `start-`, `text-start`) and `rtl:` variants; flex/grid order mirrors automatically.
- Never split Persian text into characters (it breaks letter joining). GSAP `SplitText` is used with `type: 'words'` only, and animate-ui's per-character text effects are used in English only.
- In T-accounts, *debit* is the reading-start side, left in English, right in Persian, matching Persian textbooks.

---

Educational content only: not a substitute for professional accounting or tax advice.
