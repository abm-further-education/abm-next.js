import Banner from '@/components/common/Banner';
import React from 'react';

function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: imgMatch[params.slug],
            title: titleMatch[params.slug],
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />
    </div>
  );
}

export default page;

const titleMatch: { [key: string]: string } = {
  barista: 'Barista Course',
  cake: 'Classic French Cake Course',
  wine: 'Wine Course',
  sourdough: 'Sourdough and Focaccia Course',
  dessert: 'Fine Dining Dessert Plating Course',
  pastries: 'Classic French Pastries Course',
  mixology: 'Cocktail-Making and Mixology Course',
  petit: 'French petit four Course (Macaroon)',
  vegan: 'Vegan and Vegetarian Course',
  chocolate: 'Chocolate Class – Xmas',
  fss: 'NSW Food Safety Supervisor Certificate (FSS)',
};

const imgMatch: { [key: string]: string } = {
  barista: '/short-course/barista_1.jpg',
  cake: '/short-course/classic_french_cakes_2.png',
  wine: '/short-course/wine_1.jpg',
  focaccia: '/short-course/sourdough_1.jpg',
  dessert: '/short-course/fine_dining_dessert_1.jpg',
  pastries: '/short-course/classic_french_pastries_1.png',
  mixology: '/short-course/cocktail_1.png',
  petit: '/short-course/macaroon_1.png',
  vegan: '/short-course/vegan_1.png',
  chocolate: '/short-course/xmas_1.png',
  fss: '/short-course/fss_1.png',
};
