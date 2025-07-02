import Banner from '@/components/common/Banner';
import React from 'react';

function page() {
  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/home/testimonial.png',
            title: 'A Glimpse into Student Experiences',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/40 w-full h-screen md:h-700 absolute z-10" />
        }
      />
    </div>
  );
}

export default page;
