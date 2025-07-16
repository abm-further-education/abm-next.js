import React from 'react';
import FSS from '@/domains/courses/contents/cookery/FSS';
import Banner from '@/components/common/Banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NSW Food Safety Supervisor | ABM Further Education',
  description:
    'Learn about NSW Food Safety Supervisor certification at ABM Further Education. Get detailed information about food safety training and certification requirements.',
};

export default async function FSSPage() {
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
      <FSS />
    </div>
  );
}
