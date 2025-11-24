import FadeIn from '@/components/common/FadeIn';
import { getTranslations } from 'next-intl/server';
import CoursesClient from './CoursesClient';
import { getCourseDataByLocale } from '@/lib/courseData';

export { generateMetadata } from './metadata';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'courses' });
  
  // Fetch course data from database
  const courseData = await getCourseDataByLocale(locale);

  return (
    <div className="px-20 xl:px-80 max-w-[1600px] mx-auto">
      <FadeIn>
        <div className="pt-140">
          <h2 className="text-2xl md:text-4xl font-bold py-20">{t('title')}</h2>
          <p className="text-sm md:text-base text-neutral-700">
            {t('description')}
          </p>
        </div>
      </FadeIn>

      <CoursesClient locale={locale} initialCourseData={courseData} />
    </div>
  );
}
