import BusinessDetailClient from './BusinessDetailClient';
import { getCourseDetails, getCourseInfo } from '@/lib/course-db';

export { generateMetadata } from './metadata';

export default async function BusinessDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  
  const courseDetails = await getCourseDetails(id, locale);
  const courseInformation = await getCourseInfo(id, locale);
  
  return (
    <BusinessDetailClient 
      id={id}
      locale={locale}
      courseDetails={courseDetails}
      courseInformation={courseInformation}
    />
  );
}
