import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import ImageTextSection from '@/components/common/ImageTextSection';
import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <Banner
        slides={[
          {
            imgPath: '/study-with-us/banner.png',
            title: 'Study With Us',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <section className="px-120 py-50">
        <h1 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Welcome To ABM Further Education!
        </h1>

        <p className="max-w-2xl text-center mx-auto">
          Our mission is to provide high-quality, practical education that
          prepares students for successful careers. At ABM, you'll learn from
          experienced industry leaders who are dedicated to your growth. With a
          supportive environment and real-world training, we ensure you gain the
          skills and confidence to thrive in your future career.
        </p>
        <FadeIn>
          <ImageTextSection
            order="left"
            imgPath="/study-with-us/why.jpg"
            title="Why study at ABM Further Education?"
            content="ABM Further Education is a newly established vocational education provider in Australia, offering nationally recognised courses led by experienced industry professionals. We focus on equipping students with practical skills for their future careers and are actively building industry partnerships to ensure our graduates are job-ready and aligned with current workforce needs."
          />
        </FadeIn>
        <FadeIn>
          <div className="container mx-auto px-16 py-80">
            <div className="grid gap-40 md:grid-cols-3">
              {highlights.map((item, index) => (
                <div key={index} className="space-y-16 animate-fadeInUp">
                  <div className="w-full h-190 overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-base text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

export default page;

const highlights = [
  {
    title: 'Prime location',
    description:
      'ABM is in the centre of Sydney! You can get there by train, light rail or bus, and there are plenty of jobs in the area.',
    image: {
      src: '/study-with-us/location.jpg',
      alt: 'Central Sydney view',
      width: 1024,
      height: 658,
    },
  },
  {
    title: 'Industry-leading modern kitchen and state of the art campus',
    description:
      'We want you to succeed, so we have just refreshed our campus with the most modern kitchen, and latest technologies. Students also have free access to a break room, wifi, computers, photocopier, scanner, phone charging station, and a kitchenette!',
    image: {
      src: '/study-with-us/kitchen.jpg',
      alt: 'Modern kitchen',
      width: 387,
      height: 267,
    },
  },
  {
    title: 'Industry-leading trainers',
    description:
      'Learn from professionals with years of experience in their industry!',
    image: {
      src: '/study-with-us/trainers.jpg',
      alt: 'Experienced trainers teaching',
      width: 1024,
      height: 487,
    },
  },
  {
    title: 'Work placement support',
    description:
      'ABM is in the centre of Sydney! You can get there by train, light rail or bus, and there are plenty of jobs in the area.',
    image: {
      src: '/study-with-us/support.jpg',
      alt: 'Work placement support',
      width: 1024,
      height: 658,
    },
  },
  {
    title: 'Multilingual student service team',
    description:
      'We want you to succeed, so we have just refreshed our campus with the most modern kitchen, and latest technologies. Students also have free access to a break room, wifi, computers, photocopier, scanner, phone charging station, and a kitchenette!',
    image: {
      src: '/study-with-us/service.png',
      alt: 'Multilingual student service team',
      width: 387,
      height: 267,
    },
  },
  {
    title: 'Industry Partnerships',
    description:
      'Learn from professionals with years of experience in their industry!',
    image: {
      src: '/study-with-us/partnership.jpg',
      alt: 'Industry Partnerships',
      width: 1024,
      height: 487,
    },
  },
];
