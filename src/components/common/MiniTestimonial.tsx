'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Star } from 'lucide-react';

import 'swiper/css';
import { testimonials, fitnessTestimonials } from '@/lib/testimonial';

function MiniTestimonial() {
  const router = useRouter();
  const pathname = usePathname();

  // fitness나 sport가 경로에 포함되어 있으면 fitnessTestimonials 사용
  const isFitnessOrSport =
    pathname.includes('fitness') || pathname.includes('sport');
  const currentTestimonials = isFitnessOrSport
    ? fitnessTestimonials
    : testimonials;

  const handleClick = () => {
    router.push('/abm-student-insights');
  };

  return (
    <div className="hidden md:block absolute bottom-40 md:right-4 lg:right-200 w-[280px] z-50">
      <Swiper
        spaceBetween={0}
        className="bg-black/60 overflow-hidden"
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {currentTestimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div onClick={handleClick} className="cursor-pointer px-20 pt-6">
              {/* Profile Image */}
              <div className="flex justify-center mb-15">
                <div className="w-50 h-50 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Message */}
              <div className="text-center">
                <p className="text-sm text-white mb-10">
                  &quot;{testimonial.message}&quot;
                </p>
                <p className="text-xs text-gray-50 font-medium">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MiniTestimonial;
