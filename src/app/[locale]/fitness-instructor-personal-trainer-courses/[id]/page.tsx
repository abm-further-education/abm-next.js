import FitnessDetailClient from './FitnessDetailClient';
import { getCourseDetails, getCourseInfo, getCourseUnits } from '@/lib/course-db';

export { generateMetadata } from './metadata';

export default async function FitnessDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  
  const [courseDetails, courseInformation, courseUnits] = await Promise.all([
    getCourseDetails(id, locale),
    getCourseInfo(id, locale),
    getCourseUnits(id),
  ]);
  
  return (
    <FitnessDetailClient 
      id={id}
      locale={locale}
      courseDetails={courseDetails}
      courseInformation={courseInformation}
      courseUnits={courseUnits}
    />
  );
}
