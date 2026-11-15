import { Link } from 'react-router'

import { useI18n } from '@/i18n/I18nProvider'

export default function NotFoundPage() {
  const { t, num } = useI18n()
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-xl place-items-center px-4 text-center">
      <div>
        <div className="bg-gradient-to-br from-primary to-equity bg-clip-text text-8xl font-black text-transparent tabular">{num(404)}</div>
        <p className="mt-4 text-lg text-muted-foreground">{t('common.notFound')}</p>
        <Link to="/" className="mt-8 inline-flex h-11 items-center rounded-xl bg-primary px-6 font-semibold text-primary-foreground">
          {t('common.home')}
        </Link>
      </div>
    </div>
  )
}
