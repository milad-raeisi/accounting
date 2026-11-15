import { Link } from 'react-router'

import { useI18n } from '@/i18n/I18nProvider'
import { LogoMark } from './Logo'
import { NAV } from './SiteHeader'

export function SiteFooter() {
  const { t, digits } = useI18n()
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <span className="text-lg font-extrabold">{t('brand.full')}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{t('footer.about')}</p>
        </div>
        <nav className="grid grid-cols-2 content-start gap-2 text-sm">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground transition hover:text-foreground">
              {t(n.key)}
            </Link>
          ))}
        </nav>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="leading-7">{t('footer.disclaimer')}</p>
          <p className="text-xs">{t('footer.built')}</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {digits(String(new Date().getFullYear()))} {t('brand.name')}
      </div>
    </footer>
  )
}
