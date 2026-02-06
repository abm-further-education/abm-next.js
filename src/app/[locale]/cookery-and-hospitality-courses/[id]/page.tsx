import CookeryDetailClient from './CookeryDetailClient';
import { getCourseDetails, getCourseInfo } from '@/lib/course-db';

export { generateMetadata } from './metadata';

export default async function CookeryDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  
  // Fetch course data from database (with fallback to static files)
  const courseDetails = await getCourseDetails(id, locale);
  const courseInformation = await getCourseInfo(id, locale);
  
  return (
    <CookeryDetailClient 
      id={id}
      locale={locale}
      courseDetails={courseDetails}
      courseInformation={courseInformation}
    />
  );
}
