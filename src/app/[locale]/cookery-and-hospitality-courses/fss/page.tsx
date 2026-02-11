import React from 'react';
import FSS from '@/domains/courses/contents/cookery/FSS';
import Banner from '@/components/common/Banner';
import { getShortCourseById } from '@/lib/course-db';
import getShortCourseData from '@/lib/shortCourseData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NSW Food Safety Supervisor | ABM Further Education',
  description:
    'Learn about NSW Food Safety Supervisor certification at ABM Further Education. Get detailed information about food safety training and certification requirements.',
};

export default async function FSSPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const normalizedLocale = locale || 'en';
  const data = await getShortCourseById('fss', normalizedLocale);
  const fallbackData = getShortCourseData(normalizedLocale).fss;

  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/short-course/fss_1.png',
            title: 'NSW Food Safety Supervisor',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <FSS data={data ?? fallbackData} courseId="fss" />
    </div>
  );
}
