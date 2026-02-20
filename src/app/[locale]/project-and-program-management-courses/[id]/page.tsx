import ProjectDetailClient from './ProjectDetailClient';
import { getCourseDetails, getCourseInfo, getCourseUnits } from '@/lib/course-db';

export { generateMetadata } from './metadata';

export default async function ProjectDetailPage({
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
    <ProjectDetailClient 
      id={id}
      locale={locale}
      courseDetails={courseDetails}
      courseInformation={courseInformation}
      courseUnits={courseUnits}
    />
  );
}
