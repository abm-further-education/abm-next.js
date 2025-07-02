import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import NewsLetter from '@/domains/main/components/NewsLetter';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomePage');
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <main className="">
        <Banner
          slides={[
            {
              imgPath:
                'https://www.youtube.com/embed/MuePUlkXUZA?si=djdrv_RZgSlrTG2g',
              title: 'Your Career Starts Here',
              content: '',
            },
          ]}
        />

        <div className="flex flex-wrap md:gap-40 items-center justify-center py-50 px-20 md:px-0 gap-20">
          <Card
            imgPath="/home/home.png"
            title="Full Courses"
            link="/"
            className="w-full md:w-400"
          />
          <Card
            imgPath="/home/FastTrack.png"
            title="Fast Track"
            link="/"
            className="w-full md:w-400"
          />
          <Card
            imgPath="/home/ShortCourse.png"
            title="Short Courses"
            link={`short-courses`}
            className="w-full md:w-400"
          />
        </div>

        <section className="flex flex-col items-center justify-center py-50">
          <h2 className="text-3xl md:text-5xl font-bold py-50">
            {t('coursesTitle')}
          </h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
            {t('coursesDescription')}
          </p>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-40 mt-40">
              <Card
                imgPath="/home/Cookery.png"
                title="Cookery"
                link="/cookery-and-hospitality-courses"
                className="w-300 md:w-440"
              />
              <Card
                imgPath="/home/Hospitality.png"
                title="Hospitality"
                link="/cookery-and-hospitality-courses"
                className="w-300 md:w-440"
              />
              <Card
                imgPath="/home/Fitness.png"
                title="Fitness & Sports"
                link="/fitness-instructor-personal-trainer-courses"
                className="w-300 md:w-440"
              />
              <Card
                imgPath="/home/Business.png"
                title="Business"
                link="/business-and-management-courses"
                className="w-300 md:w-440"
              />
              <Card
                imgPath="/home/Project.png"
                title="Project & Program"
                link="/project-and-program-management-courses"
                className="w-300 md:w-440"
              />
              <Card
                imgPath="/home/HR.png"
                title="HR Management"
                link="/human-resource-management-courses"
                className="w-300 md:w-440"
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
