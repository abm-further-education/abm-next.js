import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import NewsLetter from '@/domains/main/components/NewsLetter';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getNewsList } from '@/lib/news-db';
import { newsData } from '@/lib/news';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  // Supabase에서 뉴스 가져오기 시도, 실패하면 기존 데이터 사용
  let newsList;
  try {
    newsList = await getNewsList(true);
    // 최신 뉴스만 가져오기 (슬라이더용)
    newsList = newsList.slice(0, 8);
    // Supabase 데이터가 없으면 기존 데이터 사용 (호환성을 위해 변환)
    if (newsList.length === 0) {
      newsList = newsData.slice(0, 8).map((news) => ({
        id: news.id.toString(),
        displayId: news.id as number,
        dbId: news.id.toString(),
        title: news.title,
        description: news.description,
        content: news.content || null,
        image: news.image,
        category: news.category,
        date: convertDateToISO(news.date),
        link: news.link || null,
        published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }));
    }
  } catch (error) {
    console.error('Error fetching news from Supabase:', error);
    // 에러 발생 시 기존 데이터 사용
    newsList = newsData.slice(0, 8).map((news) => ({
      id: news.id.toString(),
      displayId: news.id as number,
      dbId: news.id.toString(),
      title: news.title,
      description: news.description,
      content: news.content || null,
      image: news.image,
      category: news.category,
      date: convertDateToISO(news.date),
      link: news.link || null,
      published: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
  }
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
            {
              imgPath: '/home/banner.png',
              title: 'Book Your Free Campus, Gym & Kitchen Tour or 1-Day Trial',
              content: '',
              linkButton: {
                href: '/promotion',
                text: 'Book Your Free Campus, Gym & Kitchen Tour or 1-Day Trial',
              },
            },
          ]}
          dimmed={
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          }
          autoplayDelay={20000}
        />

        <div className="flex flex-wrap xl:gap-20 items-center justify-center py-50 px-20 md:px-0 gap-10">
          <Card
            imgPath="/home/home.png"
            title={t('fullCourses')}
            link="/courses"
            className="w-full md:w-300 h-200 xl:w-400"
          />
          <Card
            imgPath="/courses/fitness/ABM_Fitness_Photos_10.jpg"
            title={t('fastTrack')}
            link="/fitness-instructor-personal-trainer-courses/certificate-iii-in-fitness-fast-track"
            className="w-full md:w-300 h-200 xl:w-400"
          />
          <Card
            imgPath="/short-course/barista/barista_course_1.jpg"
            title={t('nav.menu.shortCourses')}
            link={`short-courses`}
            className="w-full md:w-300 h-200 xl:w-400"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-20 mt-40">
              <Card
                imgPath="/home/Cookery.png"
                title={t('nav.subMenu.cookery')}
                link="/cookery-and-hospitality-courses"
                className="w-300 xl:w-300"
              />
              <Card
                imgPath="/home/Hospitality.png"
                title={t('nav.subMenu.hospitality')}
                link="/cookery-and-hospitality-courses"
                className="w-300 xl:w-300"
              />
              <Card
                imgPath="/courses/fitness/ABM_Fitness_Photos_11.jpg"
                title={t('nav.subMenu.fitnessAndSport')}
                link="/fitness-instructor-personal-trainer-courses"
                className="w-300 xl:w-300"
              />
              <Card
                imgPath="/home/Business.png"
                title={t('nav.subMenu.business')}
                link="/business-and-management-courses"
                className="w-300 xl:w-300"
              />
              <Card
                imgPath="/home/Project.png"
                title={t('nav.subMenu.projectAndProgram')}
                link="/project-and-program-management-courses"
                className="w-300 xl:w-300"
              />
              <Card
                imgPath="/home/HR.png"
                title={t('nav.subMenu.humanResource')}
                link="/human-resource-management-courses"
                className="w-300 xl:w-300"
              />
              {/* HSA */}
              <Card
                imgPath="/courses/health/health_1.png"
                title={t('nav.subMenu.health')}
                link="/health-and-wellness-courses"
                className="w-300 xl:w-300"
              />
              <Link href="/courses">
                <div className="w-300 h-full xl:w-300 bg-primary-bk text-white flex-col text-lg flex items-center justify-center hover:bg-primary transition-all">
                  <h2 className="font-bold">
                    Looking for All Courses?
                    <br />
                    <span className="text-white">Click here!</span>
                  </h2>
                </div>
              </Link>
            </div>
          </FadeIn>
        </section>
        <FadeIn>
          <Testimonial />
        </FadeIn>
        <FadeIn>
          <NewsLetter newsList={newsList} locale={locale} />
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
      {/* <FloatingTrialButton /> */}
    </div>
  );
}

function convertDateToISO(dateStr: string): string {
  // DD/MM/YYYY 형식을 YYYY-MM-DD로 변환
  const [day, month, year] = dateStr.split('/');
  return `${year}-${month}-${day}`;
}
