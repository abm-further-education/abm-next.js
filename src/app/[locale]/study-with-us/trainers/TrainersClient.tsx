'use client';

import React from 'react';
import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import TrainerCard from '@/components/trainers/TrainerCard';
import { trainers } from '@/lib/trainerData';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function TrainersClient() {
  const t = useTranslations('trainers');

  // Get all trainers for display
  const allTrainers = trainers;

  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <Banner
        slides={[
          {
            imgPath: '/study-with-us/trainers.png',
            title: t('title'),
            content: t('subtitle'),
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      <div className="container mx-auto px-4 py-40">
        <FadeIn>
          <div className="text-center mb-40">
            <h1 className="text-3xl md:text-4xl font-bold py-50 text-center">
              {t('heading')}
            </h1>
            <p className="text-sm md:text-base text-neutral-700 max-w-800 mx-auto text-center">
              {t('description')}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-16">
          <FadeIn>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                {allTrainers.map((trainer) => (
                  <TrainerCard key={trainer.id} trainer={trainer} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="text-center mt-16 pt-40 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('readyToLearn')}
            </h3>
            <p className="text-gray-600 mb-20">{t('contactDescription')}</p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-20 py-12 font-semibold hover:bg-primary-bk transition-colors"
            >
              {t('contactUs')}
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
