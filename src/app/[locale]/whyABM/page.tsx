import Banner from '@/components/common/Banner';
import React from 'react';

function page() {
  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/home/testimonial.png',
            title: 'Why ABM Further Education',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/40 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <h3>Welcome To ABM Further Education!</h3>
    </div>
  );
}

export default page;
