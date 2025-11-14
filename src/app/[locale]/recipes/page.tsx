import React from 'react';
import Banner from '@/components/common/Banner';

function page() {
  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/recipes.png',
            title: 'Recipes',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/20 w-full h-screen md:h-700 absolute z-10" />
        }
      />
    </div>
  );
}

export default page;
