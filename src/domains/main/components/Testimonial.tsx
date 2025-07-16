'use client';
import React from 'react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

function Testimonial() {
  const params = useParams();
  const t = useTranslations('HomePage');
  const tCommon = useTranslations('common');
  return (
    <section className="flex flex-col items-center justify-center py-50">
      <h2 className="text-3xl md:text-5xl font-bold py-50">
        {t('testimonialTitle')}
      </h2>
      <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
        {t('testimonialDescription')}
      </p>
      <div className="w-full max-w-screen overflow-hidden">
        <motion.div
          animate={{ x: ['0', '-100%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap h-560 flex gap-20 mt-20"
        >
          {Array.from({ length: 18 }).map((_, index) => (
            <Image
              key={index}
              src={`/testimonials/${index + 1}.png`}
              alt="banner_image"
              width={400}
              height={350}
              className="md:object-center object-contain"
            />
          ))}
        </motion.div>
      </div>
      <Link
        href={`/${params.locale}/abm-student-insights`}
        className="bg-black text-white px-20 py-10"
      >
        {tCommon('findOutMore')}
      </Link>
    </section>
  );
}

export default Testimonial;
