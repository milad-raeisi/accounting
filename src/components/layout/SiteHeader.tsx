import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { motion, useScroll, useSpring } from 'motion/react'
import { BookOpen, FlaskConical, GraduationCap, Home, Languages, Library, Menu } from 'lucide-react'

import { ThemeTogglerButton } from '@/components/animate-ui/components/buttons/theme-toggler'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/animate-ui/components/radix/sheet'
import { useI18n } from '@/i18n/I18nProvider'
import type { UIKey } from '@/i18n/strings'
import { cn } from '@/lib/utils'
import { DaftarLockup } from './Logo'

export const NAV: { to: string; key: UIKey; icon: typeof Home; end?: boolean }[] = [
  { to: '/', key: 'nav.home', icon: Home, end: true },
  { to: '/courses', key: 'nav.courses', icon: BookOpen },
  { to: '/lab', key: 'nav.lab', icon: FlaskConical },
  { to: '/glossary', key: 'nav.glossary', icon: Library },
  { to: '/practice', key: 'nav.practice', icon: GraduationCap },
]

function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n()
  return (
    <div role="group" aria-label={t('lang.label')} className={cn('relative flex h-9 items-center rounded-full border bg-card p-0.5 text-xs font-semibold', className)}>
      {(['fa', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn('relative z-10 h-full rounded-full px-3 transition-colors', lang === l ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}
        >
          {lang === l && (
            <motion.span layoutId="lang-pill" className="absolute inset-0 -z-10 rounded-full bg-primary shadow-sm" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />
          )}
          <span lang={l} className={l === 'fa' ? 'font-fa' : ''}>{l === 'fa' ? 'فا' : 'EN'}</span>
        </button>
      ))}
    </div>
  )
}

export function SiteHeader() {
  const { t, isFa } = useI18n()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  const isActive = (to: string, end?: boolean) => (end ? pathname === to : pathname === to || pathname.startsWith(`${to}/`))

  return (
    <header className="glass sticky top-0 z-40 border-b">
      {/* HashRouter owns the URL hash, so a plain href="#main" would navigate to a "main" route; move focus instead */}
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault()
          const main = document.getElementById('main')
          main?.focus({ preventScroll: true })
          main?.scrollIntoView()
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
      >
        {t('nav.skip')}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Link to="/" aria-label={t('brand.full')} className="flex items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-ring">
          <DaftarLockup size={34} showDescriptor />
        </Link>

        <nav className="ms-6 hidden items-center gap-1 md:flex" aria-label={t('nav.main')}>
          {NAV.map((item) => {
            const active = isActive(item.to, item.end)
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={cn('relative rounded-lg px-3 py-2 text-sm font-medium transition-colors', active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}
              >
                {active && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-card" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                {t(item.key)}
              </NavLink>
            )
          })}
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <LangSwitch className="hidden sm:flex" />
          <ThemeTogglerButton variant="ghost" size="default" modes={['light', 'dark']} direction={isFa ? 'rtl' : 'ltr'} aria-label={t('theme.toggle')} className="rounded-full" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button type="button" aria-label={t('nav.menu')} className="grid size-9 place-items-center rounded-full border md:hidden">
                <Menu className="size-4" />
              </button>
            </SheetTrigger>
            <SheetContent side={isFa ? 'left' : 'right'} className="w-[290px] p-0" dir={isFa ? 'rtl' : 'ltr'}>
              <SheetHeader className="border-b p-4">
                <SheetTitle className="flex items-center gap-3">
                  <DaftarLockup size={30} showDescriptor />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-3">
                {NAV.map((item) => {
                  const Icon = item.icon
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      onClick={() => setOpen(false)}
                      className={({ isActive: a }) =>
                        cn('flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium', a ? 'bg-primary/10 text-primary' : 'hover:bg-muted')
                      }
                    >
                      <Icon className="size-4" />
                      {t(item.key)}
                    </NavLink>
                  )
                })}
              </nav>
              <div className="mt-auto flex items-center justify-between border-t p-4">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Languages className="size-4" /> {t('lang.label')}
                </span>
                <LangSwitch />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 -bottom-px h-px origin-left bg-primary/70 rtl:origin-right" />
    </header>
  )
}
