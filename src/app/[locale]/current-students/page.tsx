import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import Link from 'next/link';
import React from 'react';
import { getTranslations } from 'next-intl/server';

async function page() {
  const t = await getTranslations('currentStudents');

  return (
    <div className="md:py-100">
      <Banner
        slides={[
          {
            imgPath: '/current_student.jpg',
            title: 'Current Students',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold py-50 text-center">
          {t('title')}
        </h1>
        <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center mx-auto">
          {t('welcome')}
          <br />
          {t('description')}
        </p>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-40">
          {/* Moodle Login Card */}
          <div className="w-full md:w-1/3 p-8 text-center">
            <h2 className="text-xl font-semibold mb-18">{t('moodleTitle')}</h2>
            <Link
              href="https://moodle.abm.edu.au/moodle/login/index.php"
              className="inline-block w-full bg-black text-white font-medium py-12 hover:bg-black/80 transition"
            >
              {t('moodleLogin')}
            </Link>
          </div>

          {/* Student Portal Card */}
          <div className="w-full md:w-1/3 p-8 text-center">
            <h2 className="text-xl font-semibold mb-18">
              {t('studentPortalTitle')}
            </h2>
            <Link
              href="https://www.jotform.com/app/abm-further-education/student"
              className="inline-block w-full bg-black text-white font-medium py-12 hover:bg-black/80 transition"
            >
              {t('studentPortal')}
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default page;
