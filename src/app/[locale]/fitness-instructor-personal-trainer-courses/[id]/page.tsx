import FitnessDetailClient from './FitnessDetailClient';
import { getCourseDetails, getCourseInfo, getCourseUnits } from '@/lib/course-db';
import { getTestimonialImages } from '@/lib/testimonial-db';
import { getR2ImageUrl } from '@/lib/r2';

export { generateMetadata } from './metadata';

function testimonialPathToR2Key(imagePath: string): string {
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  if (imagePath.startsWith('/testimonials/')) {
    return imagePath.substring(1);
  }
  return imagePath;
}

export default async function FitnessDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;

  const [courseDetails, courseInformation, courseUnits, testimonialRaw] =
    await Promise.all([
      getCourseDetails(id, locale),
      getCourseInfo(id, locale),
      getCourseUnits(id),
      (async () => {
        try {
          return await getTestimonialImages('fitness', 12);
        } catch {
          return [] as string[];
        }
      })(),
    ]);

  const testimonialImages = await Promise.all(
    testimonialRaw.map(async (image) =>
      getR2ImageUrl(testimonialPathToR2Key(image)),
    ),
  );

  return (
    <FitnessDetailClient
      id={id}
      locale={locale}
      courseDetails={courseDetails}
      courseInformation={courseInformation}
      courseUnits={courseUnits}
      testimonialImages={testimonialImages}
    />
  );
}
