import { Link } from 'react-router'
import { ArrowUpRight, Mail } from 'lucide-react'

import { useI18n } from '@/i18n/I18nProvider'
import { DaftarLockup, SbcMark } from './Logo'
import { NAV } from './SiteHeader'

export function SiteFooter() {
  const { t, digits } = useI18n()
  const year = digits(String(new Date().getFullYear()))
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <DaftarLockup size={36} showDescriptor />
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">{t('footer.about')}</p>
          <a
            href="https://sbc.om"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-card py-1.5 ps-1.5 pe-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <SbcMark size={26} />
            {t('footer.madeBy')}
          </a>
        </div>

        <nav aria-label={t('nav.footer')} className="grid grid-cols-2 content-start gap-x-6 gap-y-2.5 text-sm">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-foreground">
              {t(n.key)}
            </Link>
          ))}
        </nav>

        <div className="space-y-2.5 text-sm">
          <div className="font-semibold text-foreground">{t('footer.contact')}</div>
          <a href="mailto:post@sbc.om" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
            <Mail className="size-4" /> <span dir="ltr">post@sbc.om</span>
          </a>
          <a href="https://sbc.om" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
            <ArrowUpRight className="size-4 rtl:-scale-x-100" /> {t('footer.website')}
          </a>
          <p className="pt-2 text-xs leading-6 text-muted-foreground">{t('footer.disclaimer')}</p>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
          <span>
            © {year} SBC. {t('footer.rights')}
          </span>
          <span dir="ltr">Senior Block Chain LLC</span>
        </div>
      </div>
    </footer>
  )
}
