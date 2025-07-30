import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import NewsLetter from '@/domains/main/components/NewsLetter';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations();
  return (
    <div className="font-[family-name:var(--font-montserrat)] pt-60">
      <main className="">
        <Banner
          slides={[
            {
              imgPath:
                'https://www.youtube.com/embed/FOWrWhWZPb8?si=YYieNS7QfEQ0kgrx',
              title: 'Your Career Starts Here',
              content: '',
            },
          ]}
        />

        <div className="flex flex-wrap xl:gap-40 items-center justify-center py-50 px-20 md:px-0 gap-20">
          <Card
            imgPath="/home/home.png"
            title={t('fullCourses')}
            link="/courses"
            className="w-full md:w-300 h-200 md:h-320 xl:w-400"
          />
          <Card
            imgPath="/home/FastTrack.png"
            title={t('fastTrack')}
            link="/fitness-instructor-personal-trainer-courses/certificate-iii-in-fitness-fast-track"
            className="w-full md:w-300 h-200 md:h- xl:w-400"
          />
          <Card
            imgPath="/home/ShortCourse.png"
            title={t('nav.menu.shortCourses')}
            link={`short-courses`}
            className="w-full md:w-300 h-200 md:h- xl:w-400"
          />
        </div>

        <section className="flex flex-col items-center justify-center md:py-50">
          <h2 className="text-3xl md:text-5xl font-bold py-50">
            {t('HomePage.coursesTitle')}
          </h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center px-20 md:px-0">
            {t('HomePage.coursesDescription')}
          </p>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 2xl:gap-10 mt-40">
              <Card
                imgPath="/home/Cookery.png"
                title={t('nav.subMenu.cookery')}
                link="/cookery-and-hospitality-courses"
                className="w-300 xl:w-220 2xl:w-250"
              />
              <Card
                imgPath="/home/Hospitality.png"
                title={t('nav.subMenu.hospitality')}
                link="/cookery-and-hospitality-courses"
                className="w-300 xl:w-220 2xl:w-250"
              />
              <Card
                imgPath="/home/Fitness.png"
                title={t('nav.subMenu.fitnessAndSport')}
                link="/fitness-instructor-personal-trainer-courses"
                className="w-300 xl:w-220 2xl:w-250"
              />
              <Card
                imgPath="/home/Business.png"
                title={t('nav.subMenu.business')}
                link="/business-and-management-courses"
                className="w-300 xl:w-220 2xl:w-250"
              />
              <Card
                imgPath="/home/Project.png"
                title={t('nav.subMenu.projectAndProgram')}
                link="/project-and-program-management-courses"
                className="w-300 xl:w-220 2xl:w-250"
              />
              <Card
                imgPath="/home/HR.png"
                title={t('nav.subMenu.humanResource')}
                link="/human-resource-management-courses"
                className="w-300 xl:w-220 2xl:w-250"
              />
            </div>
          </FadeIn>
        </section>
        <FadeIn>
          <Testimonial />
        </FadeIn>
        <FadeIn>
          <NewsLetter />
        </FadeIn>
        <FadeIn>
          <SubscriptionContainer />
        </FadeIn>
        {/* <div
          className="elfsight-app-798ab103-6775-4b68-8258-a02d4672921a"
          data-elfsight-app-lazy
        ></div>
        <div
          className="elfsight-app-8f7b8768-24e6-4597-a418-90988f08ac58"
          data-elfsight-app-lazy
        ></div> */}
      </main>
    </div>
  );
}
