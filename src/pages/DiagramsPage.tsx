import { Diagram, diagramIds } from '@/components/diagrams/registry'
import { useI18n } from '@/i18n/I18nProvider'

/** Developer gallery: every diagram on one page (route: #/dev/diagrams). */
export default function DiagramsPage() {
  const { tr, num } = useI18n()
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight">{tr({ fa: 'گالری نمودارها', en: 'Diagram gallery' })}</h1>
      <p className="mt-2 text-muted-foreground">
        {num(diagramIds.length)} {tr({ fa: 'نمودار تعاملی', en: 'interactive figures' })}
      </p>
      {diagramIds.map((id) => (
        <section key={id} id={id} className="scroll-mt-24">
          <div className="mt-10 font-mono text-xs text-muted-foreground" dir="ltr">
            {id}
          </div>
          <Diagram id={id} />
        </section>
      ))}
    </div>
  )
}
