'use client';

import Banner from '@/components/common/Banner';
import Button from '@/components/common/Button';
import ImageSlider from '@/components/shortCourses/ImageSlider';
import { shortCourseData } from '@/lib/shortCourseData';
import React, { use, useEffect } from 'react';

const titleMatch: { [key: string]: string } = {
  barista: 'Barista Course',
  cake: 'Classic French Cake Course',
  wine: 'Wine Course',
  focaccia: 'Sourdough and Focaccia Course',
  dessert: 'Fine Dining Dessert Plating Course',
  pastries: 'Classic French Pastries Course',
  mixology: 'Cocktail-Making and Mixology Course',
  petit: 'French petit four Course (Macaroon)',
  vegan: 'Vegan and Vegetarian Course',
  chocolate: 'Chocolate Class – Xmas',
  fss: 'NSW Food Safety Supervisor Certificate (FSS)',
};

const imgMatch: { [key: string]: string } = {
  barista: '/short-course/barista_1.jpg',
  cake: '/short-course/classic_french_cakes_2.png',
  wine: '/short-course/wine_1.jpg',
  focaccia: '/short-course/sourdough_1.jpg',
  dessert: '/short-course/fine_dining_dessert_1.jpg',
  pastries: '/short-course/classic_french_pastries_1.png',
  mixology: '/short-course/cocktail_1.png',
  petit: '/short-course/macaroon_1.png',
  vegan: '/short-course/vegan_1.png',
  chocolate: '/short-course/xmas_1.png',
  fss: '/short-course/fss_1.png',
};

function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const courseData = shortCourseData[slug];

  // 동적으로 페이지 타이틀 설정
  useEffect(() => {
    const courseTitle = titleMatch[slug] || 'Short Course';
    document.title = `${courseTitle} | ABM Further Education`;
  }, [slug]);

  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: imgMatch[slug],
            title: titleMatch[slug],
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      {courseData && (
        <section className="max-w-1000 mx-auto px-20 py-40">
          <div className="flex flex-col md:flex-row gap-20">
            <ImageSlider />
            <div className="flex-1">
              {/* Course Description */}
              <div className="mb-20">
                <h2 className="text-2xl font-bold mb-10">{courseData.title}</h2>
                <div className="whitespace-pre-line text-gray-700">
                  {courseData.description}
                </div>
              </div>

              {/* Course Details */}
              <div className="space-y-10 mb-20">
                <div className="flex flex-col">
                  <p className="font-semibold">Course Delivery:</p>
                  <p>
                    Face to Face. Participants will engage in hands-on
                    activities
                  </p>
                </div>

                <div className="flex gap-10">
                  <p className="font-semibold">Duration:</p>
                  <p>{courseData.duration}</p>
                </div>

                <div className="flex gap-10">
                  <p className="font-semibold">Max Participants:</p>
                  <p>{courseData.maxParticipants}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold">Location:</p>
                  <p>{courseData.location}</p>
                </div>
              </div>

              {/* Special Offer */}
              {courseData.specialOffer && (
                <div className="flex flex-col mb-20 p-15 bg-orange-50 rounded-lg">
                  <p className="font-semibold">Special Offer:</p>
                  <p>
                    Use code <strong>{courseData.specialOffer.code}</strong> at
                    checkout for a{' '}
                    <span className="bg-orange-100 text-orange-700 font-semibold">
                      {courseData.specialOffer.discount}
                    </span>
                    <br />
                    {courseData.specialOffer.note}
                  </p>
                </div>
              )}

              {/* Call to Action */}
              {courseData.callToAction && (
                <div className="mb-20 p-15 bg-red-50 rounded-lg">
                  <p className="font-bold text-red-700">
                    🔥 {courseData.callToAction}
                  </p>
                </div>
              )}

              {/* Course Type Selection */}
              {courseData.courseType && (
                <div className="w-full max-w-sm mt-20">
                  <label
                    htmlFor="course-type"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    {courseData.courseType.label}
                  </label>
                  <select
                    id="course-type"
                    name="course-type"
                    className="w-full px-8 py-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Select a type</option>
                    {courseData.courseType.options.map((option) => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Course Date Selection */}
              <div className="w-full max-w-sm mt-20">
                <label
                  htmlFor="course-date"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Course Date (Face to Face)
                </label>
                <select
                  id="course-date"
                  name="course-date"
                  className="w-full px-8 py-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  <option value="">Select a date</option>
                  {courseData.dates.map((date) => (
                    <option key={date.date} value={date.date}>
                      {date.displayDate} • {date.time}
                    </option>
                  ))}
                </select>
                <div className="font-bold text-2xl mt-20 text-primary">
                  ${courseData.price}
                </div>
                <Button className="bg-black text-white w-full mt-20">
                  Enrol Now
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-40">
            {/* What You'll Make */}
            {courseData.whatYoullMake && (
              <div className="mb-20">
                <h3 className="text-lg font-bold mb-10">
                  💡 What You&apos;ll Make:
                </h3>
                <ul className="space-y-5">
                  {courseData.whatYoullMake.map((item, index) => (
                    <li key={index} className="flex items-start gap-10">
                      <span className="text-2xl">{item.split(' – ')[0]}</span>
                      <span>{item.split(' – ')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What You'll Experience */}
            {courseData.whatYoullExperience && (
              <div className="mb-20">
                <h3 className="text-lg font-bold mb-10">
                  🌟 What You&apos;ll Experience:
                </h3>
                <ul className="space-y-5">
                  {courseData.whatYoullExperience.map((item, index) => (
                    <li key={index} className="flex items-start gap-10">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why This Course */}
            {courseData.whyThisCourse && (
              <div className="mb-20 p-15 bg-green-50 rounded-lg">
                <h3 className="text-lg font-bold mb-5">
                  🥖 Why Sourdough & Focaccia?
                </h3>
                <p>{courseData.whyThisCourse}</p>
              </div>
            )}

            {/* Why Learn to Make */}
            {courseData.whyLearnToMake && (
              <div className="mb-20">
                <h3 className="text-lg font-bold mb-10">
                  💪 Why Learn to Make Your Own?
                </h3>
                <ul className="space-y-5">
                  {courseData.whyLearnToMake.map((item, index) => (
                    <li key={index} className="flex items-start gap-10">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instructor */}
            {courseData.instructor && (
              <div className="mb-20 p-15 bg-purple-50 rounded-lg">
                <h3 className="text-lg font-bold mb-5">
                  👨‍🍳 Learn from a Top Pastry Chef!
                </h3>
                <p>{courseData.instructor}</p>
              </div>
            )}

            {/* Who Should Attend */}
            {courseData.whoShouldAttend && (
              <div className="mb-20">
                <h3 className="text-lg font-bold mb-10">
                  👩‍🍳 Who Should Attend?
                </h3>
                <ul className="space-y-5">
                  {courseData.whoShouldAttend.map((item, index) => (
                    <li key={index} className="flex items-start gap-10">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What You'll Learn */}
            {courseData.whatYoullLearn && (
              <div className="mb-20">
                <h3 className="text-lg font-bold mb-10">
                  ✨ What You&apos;ll Learn:
                </h3>
                <ul className="space-y-5">
                  {courseData.whatYoullLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-10">
                      <span className="text-green-600 font-bold">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Antipasto Message */}
            {courseData.antipastoMessage && (
              <div className="mb-20 p-15 bg-purple-50 rounded-lg">
                <h3 className="text-lg font-bold mb-5">
                  🍴 Enjoy an Antipasto & Cheese Platter!
                </h3>
                <p>{courseData.antipastoMessage}</p>
              </div>
            )}

            {/* Take Home Message */}
            {courseData.takeHomeMessage && (
              <div className="mb-20 p-15 bg-orange-50">
                <h3 className="text-lg font-bold mb-5">
                  🎁 Take Home Your Skills!
                </h3>
                <p>{courseData.takeHomeMessage}</p>
              </div>
            )}

            {/* Dress Code */}
            {courseData.dressCode && (
              <div className="mb-20">
                <h3 className="text-lg font-bold mb-10">👟 Dress Code:</h3>
                <p>{courseData.dressCode}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Who Should Attend */}
    </div>
  );
}

export default Page;
