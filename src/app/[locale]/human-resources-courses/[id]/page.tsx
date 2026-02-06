import HRDetailClient from './HRDetailClient';
import { getCourseDetails, getCourseInfo } from '@/lib/course-db';

export { generateMetadata } from './metadata';

export default async function HRDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  
  const courseDetails = await getCourseDetails(id, locale);
  const courseInformation = await getCourseInfo(id, locale);
  
  return (
    <HRDetailClient 
      id={id}
      locale={locale}
      courseDetails={courseDetails}
      courseInformation={courseInformation}
    />
  );
}
