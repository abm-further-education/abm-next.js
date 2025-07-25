'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Star } from 'lucide-react';

import 'swiper/css';
import { testimonials } from '@/lib/testimonial';

function MiniTestimonial() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/abm-student-insights');
  };

  return (
    <div className="hidden md:block absolute bottom-4 right-4 w-[280px] z-50">
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
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div onClick={handleClick} className="cursor-pointer p-20">
              {/* Profile Image */}
              <div className="flex justify-center mb-15">
                <div className="w-60 h-60 rounded-full overflow-hidden">
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
              <div className="flex justify-center mb-15">
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
                <p className="text-sm text-white leading-relaxed mb-10">
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
