import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import NewsLetter from '@/domains/main/components/NewsLetter';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <main className="">
        <Banner
          slides={[
            {
              imgPath: '/home/home.png',
              title: 'Your Career Starts Here',
              content: '',
            },
          ]}
        />

        <div className="flex flex-wrap md:gap-40 items-center justify-center py-50">
          <Card imgPath="/home/home.png" title="Full Courses" link="/" />
          <Card imgPath="/home/FastTrack.png" title="Fast Track" link="/" />
          <Card
            imgPath="/home/ShortCourse.png"
            title="Short Courses"
            link="/"
          />
        </div>

        <section className="flex flex-col items-center justify-center py-50">
          <h2 className="text-3xl md:text-5xl font-bold py-50">ABM Courses</h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
            We provide high-quality education in an innovative and supportive
            environment, ensuring student success with expert teaching and work
            experience opportunities across Australia.
          </p>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-40 mt-40">
              <Card imgPath="/home/Cookery.png" title="Cookery" link="/" />
              <Card
                imgPath="/home/Hospitality.png"
                title="Hospitality"
                link="/"
              />
              <Card
                imgPath="/home/Fitness.png"
                title="Fitness & Sports"
                link="/"
              />
              <Card imgPath="/home/Business.png" title="Business" link="/" />
              <Card
                imgPath="/home/Project.png"
                title="Project & Program"
                link="/"
              />
              <Card imgPath="/home/HR.png" title="HR Management" link="/" />
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
        <div
          className="elfsight-app-798ab103-6775-4b68-8258-a02d4672921a"
          data-elfsight-app-lazy
        ></div>
        <div
          className="elfsight-app-8f7b8768-24e6-4597-a418-90988f08ac58"
          data-elfsight-app-lazy
        ></div>
      </main>
    </div>
  );
}
