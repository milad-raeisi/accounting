import { Suspense, useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'

import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import { useI18n } from '@/i18n/I18nProvider'
import { ScrollTrigger } from '@/lib/gsap'
import { isChunkLoadError, reloadPage } from '@/lib/stale-build'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

function PageFallback() {
  const { t } = useI18n()
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="size-2 animate-ping rounded-full bg-primary" />
        {t('common.loading')}
      </div>
    </div>
  )
}

export function Layout() {
  const { t } = useI18n()
  const location = useLocation()
  const outlet = useOutlet()

  // scroll to top (or to the hash target) on navigation, then let GSAP re-measure
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 450)
    return () => window.clearTimeout(id)
  }, [location.pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main id="main" tabIndex={-1} className="flex-1 scroll-mt-16 outline-none">
        <AnimatePresence mode="wait" initial={false}>
          {/* opacity only: a lingering transform/filter would become the containing block
              for GSAP's position:fixed pins and break ScrollTrigger pinning */}
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ErrorBoundary
              resetKey={location.pathname}
              fallback={(error, reset) => {
                // a page chunk from an older deploy: React.lazy keeps the failed import, so only a reload helps
                const chunk = isChunkLoadError(error)
                return (
                  <div className="mx-auto grid min-h-[50vh] max-w-lg place-items-center px-4 text-center">
                    <div>
                      <p className="text-muted-foreground">{chunk ? t('common.chunkError') : t('common.error')}</p>
                      <button type="button" onClick={chunk ? reloadPage : reset} className="mt-4 rounded-xl border px-4 py-2 text-sm font-medium hover:bg-muted">
                        {chunk ? t('common.reload') : t('quiz.retry')}
                      </button>
                    </div>
                  </div>
                )
              }}
            >
              <Suspense fallback={<PageFallback />}>{outlet}</Suspense>
            </ErrorBoundary>
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  )
}
