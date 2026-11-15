import { lazy, type ReactNode } from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import { Direction } from 'radix-ui'

import { Layout } from '@/components/layout/Layout'
import { I18nProvider, useI18n } from '@/i18n/I18nProvider'
import { ThemeProvider } from '@/lib/theme'

const HomePage = lazy(() => import('@/pages/HomePage'))
const LessonsPage = lazy(() => import('@/pages/LessonsPage'))
const LessonPage = lazy(() => import('@/pages/LessonPage'))
const LabPage = lazy(() => import('@/pages/LabPage'))
const GlossaryPage = lazy(() => import('@/pages/GlossaryPage'))
const PracticePage = lazy(() => import('@/pages/PracticePage'))
const DiagramsPage = lazy(() => import('@/pages/DiagramsPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

/** Radix primitives (tabs, radio, accordion…) need the reading direction for keyboard nav & layout. */
function DirectionBridge({ children }: { children: ReactNode }) {
  const { dir } = useI18n()
  return <Direction.Provider dir={dir}>{children}</Direction.Provider>
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <DirectionBridge>
          <HashRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="lessons" element={<LessonsPage />} />
                <Route path="lessons/:slug" element={<LessonPage />} />
                <Route path="lab" element={<LabPage />} />
                <Route path="glossary" element={<GlossaryPage />} />
                <Route path="practice" element={<PracticePage />} />
                <Route path="dev/diagrams" element={<DiagramsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </HashRouter>
        </DirectionBridge>
      </I18nProvider>
    </ThemeProvider>
  )
}
