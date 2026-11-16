import { CourseCard } from '@/components/ui/CourseCard'
import { courses } from '@/content/courses'
import { useI18n } from '@/i18n/I18nProvider'

export default function CoursesPage() {
  const { t } = useI18n()
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="text-4xl sm:text-5xl">{t('courses.title')}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-body">{t('courses.lead')}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  )
}
