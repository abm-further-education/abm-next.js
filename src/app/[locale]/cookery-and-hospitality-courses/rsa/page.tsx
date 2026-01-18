import React from 'react';
import RSA from '@/domains/courses/contents/cookery/RSA';
import Banner from '@/components/common/Banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Responsible Service of Alcohol (RSA) - NSW | ABM Further Education',
  description:
    'Learn about Responsible Service of Alcohol (RSA) certification at ABM Further Education. Get detailed information about RSA training and certification requirements in NSW.',
};

export default async function RSAPage() {
  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/rsa_banner.png',
            title: 'Responsible Service of Alcohol (RSA) - NSW',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <RSA />
    </div>
  );
}
