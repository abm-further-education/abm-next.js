'use client';

import Banner from '@/components/common/Banner';
import Button from '@/components/common/Button';
import ImageSlider from '@/components/shortCourses/ImageSlider';
import getShortCourseData from '@/lib/shortCourseData';

import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

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
  wine: '/short-course/wine/wine_1.jpg',
  focaccia: '/short-course/focaccia/sourdough_1.jpg',
  dessert: '/short-course/dessert/fine_dining_dessert_1.jpg',
  pastries: '/short-course/classic_french_pastries_1.png',
  mixology: '/short-course/mixology/cocktail_1.png',
  petit: '/short-course/macaroon_1.png',
  vegan: '/short-course/vegan/vegan_1.png',
  chocolate: '/short-course/chocolate/xmas_1.png',
  fss: '/short-course/fss_1.png',
};

function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = use(params);
  const courseData = getShortCourseData(locale)[slug];
  const router = useRouter();
  const { addItem, items } = useCart();

  React.useEffect(() => {
    if (!courseData) {
      router.replace(`/${locale}/short-courses`);
    }
  }, [courseData, locale, router]);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedType, setSelectedType] = useState('');
  // Determine available dates for this course
  const availableDates =
    courseData?.dates?.filter(
      (date: {
        date: string;
        displayDate: string;
        time: string;
        available?: boolean;
      }) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dateObj = new Date(date.date);
        dateObj.setHours(0, 0, 0, 0);
        // Check if date is in the future AND available (if available field is defined)
        const isFutureDate = dateObj >= today;
        const isAvailable = date.available !== false; // Default to true if not specified
        return isFutureDate && isAvailable;
      }
    ) || [];

  // 동적으로 페이지 타이틀 설정
  useEffect(() => {
    const courseTitle = titleMatch[slug] || 'Short Course';
    document.title = `${courseTitle} | ABM Further Education`;
  }, [slug]);

  // 장바구니에 추가하는 함수
  const handleAddToCart = () => {
    if (!selectedDate) {
      toast.error('Please select a course date');
      return;
    }
    if (courseData.courseType && !selectedType) {
      toast.error('Please select a course type');
      return;
    }

    // 선택된 날짜가 유효한지 확인
    const selectedDateObj = courseData.dates?.find(
      (date: any) => date.date === selectedDate
    );

    if (!selectedDateObj) {
      toast.error('Selected date is not available');
      return;
    }

    // 날짜가 오늘보다 이전인지 확인
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateObj = new Date(selectedDate);
    dateObj.setHours(0, 0, 0, 0);

    if (dateObj < today) {
      toast.error('Cannot select past dates');
      return;
    }

    // availability가 false인지 확인
    if (selectedDateObj.available === false) {
      toast.error('This date is not available for booking');
      return;
    }

    // 장바구니에 추가
    addItem({
      slug,
      title: courseData.title,
      price: courseData.price,
      image: imgMatch[slug],
      selectedDate,
      selectedType,
      courseData,
    });

    toast.success(`${courseData.title} added to cart!`);
  };

  // 바로 결제하는 함수 (기존 기능)
  const handleBuyNow = () => {
    if (!selectedDate) {
      toast.error('Please select a course date');
      return;
    }
    if (courseData.courseType && !selectedType) {
      toast.error('Please select a course type');
      return;
    }

    // 선택된 날짜가 유효한지 확인
    const selectedDateObj = courseData.dates?.find(
      (date: any) => date.date === selectedDate
    );

    if (!selectedDateObj) {
      toast.error('Selected date is not available');
      return;
    }

    // 날짜가 오늘보다 이전인지 확인
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateObj = new Date(selectedDate);
    dateObj.setHours(0, 0, 0, 0);

    if (dateObj < today) {
      toast.error('Cannot select past dates');
      return;
    }

    // availability가 false인지 확인
    if (selectedDateObj.available === false) {
      toast.error('This date is not available for booking');
      return;
    }

    // checkout 페이지로 이동 (선택값 쿼리스트링 전달)
    const params = new URLSearchParams();
    params.set('date', selectedDate);
    if (selectedType) params.set('type', selectedType);
    if (slug === 'fss') {
      router.push(
        `/cookery-and-hospitality-courses/fss/checkout?${params.toString()}`
      );
    } else {
      router.push(`/short-courses/${slug}/checkout?${params.toString()}`);
    }
  };

  // 장바구니에 이미 있는지 확인
  const isInCart = items.some((item) => item.slug === slug);

  return courseData ? (
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
      <section className="max-w-[1400px] mx-auto px-20 py-40">
        <div className="flex flex-col md:flex-row gap-20">
          <ImageSlider images={courseData.images} />
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
                <p className="font-semibold">
                  {courseData.courseDeliveryLabel || 'Course Delivery:'}
                </p>
                <p>
                  {courseData.courseDelivery ||
                    'Face to Face. Participants will engage in hands-on activities'}
                </p>
              </div>

              <div className="flex gap-10">
                <p className="font-semibold">
                  {courseData.timeLabel || 'Time:'}
                </p>
                <p>{courseData.time || courseData.duration}</p>
              </div>
              {courseData.maxParticipants && (
                <div className="flex gap-10">
                  <p className="font-semibold">Max Participants:</p>
                  <p>{courseData.maxParticipants}</p>
                </div>
              )}

              <div className="flex flex-col">
                <p className="font-semibold">
                  {courseData.locationLabel || 'Location:'}
                </p>
                <p>{courseData.location}</p>
              </div>
            </div>

            {/* Special Offer */}
            {courseData.specialOffer && (
              <div className="flex flex-col mb-20 p-15 bg-orange-50 ">
                <p className="font-semibold">
                  {courseData.specialOfferLabel || 'Special Offer:'}
                </p>
                <p>
                  {courseData.specialOffer.textBeforeCode || 'Use code'}{' '}
                  <strong>{courseData.specialOffer.code}</strong>{' '}
                  {courseData.specialOffer.textAfterCode || 'at checkout for a'}{' '}
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
              <div className="mb-20 p-15 bg-orange-50 ">
                <p className="font-bold text-orange-700">
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
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-8 py-12 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                >
                  <option value="">Select a type</option>
                  {courseData.courseType.options.map((option: string) => (
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
                {courseData.selectDateLabel || 'Course Date (Face to Face)'}
              </label>
              <select
                id="course-date"
                name="course-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-8 py-12 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                disabled={availableDates.length === 0}
              >
                {availableDates.length === 0 ? (
                  <option value="" disabled className="">
                    Not Available at the moment.
                  </option>
                ) : (
                  [
                    <option value="" key="select">
                      {courseData.selectDateOptionLabel || 'Select a date'}
                    </option>,
                    ...availableDates.map(
                      (date: {
                        date: string;
                        displayDate: string;
                        time: string;
                      }) => (
                        <option key={date.date} value={date.date}>
                          {date.displayDate} • {date.time}
                        </option>
                      )
                    ),
                  ]
                )}
              </select>
              <div className="font-bold text-2xl mt-20 text-primary">
                ${courseData.price}
              </div>

              {/* 버튼들 */}
              <div className="space-y-10 mt-20">
                <Button
                  className="bg-primary text-black w-full py-15 font-semibold flex items-center justify-center gap-10"
                  onClick={handleAddToCart}
                  disabled={availableDates.length === 0 || isInCart}
                >
                  <ShoppingCart size={20} />
                  {isInCart ? 'Already in Cart' : 'Add to Cart'}
                </Button>

                <Button
                  className="bg-black text-white w-full py-15 font-semibold"
                  onClick={handleBuyNow}
                  disabled={availableDates.length === 0}
                >
                  {courseData.callToAction || 'Buy Now'}
                </Button>
              </div>
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
                {courseData.whatYoullMake.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-10">
                    <span className="font-semibold">
                      {item.split(' – ')[0]}
                    </span>
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
                {courseData.whatYoullExperience.map(
                  (item: string, index: number) => (
                    <li key={index} className="flex items-start gap-10">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Why This Course */}
          {courseData.whyThisCourse && (
            <div className="mb-20 p-15 bg-orange-50 ">
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
                {courseData.whyLearnToMake.map(
                  (item: string, index: number) => (
                    <li key={index} className="flex items-start gap-10">
                      <span className="text-orange-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Instructor */}
          {courseData.instructor && (
            <div className="mb-20 p-15 bg-orange-50 ">
              <h3 className="text-lg font-bold mb-5">
                👨‍🍳 Learn from a Top Pastry Chef!
              </h3>
              <p>{courseData.instructor}</p>
            </div>
          )}

          {/* Who Should Attend */}
          {courseData.whoShouldAttend && (
            <div className="mb-20">
              <h3 className="text-lg font-bold mb-10">👩‍🍳 Who Should Attend?</h3>
              <ul className="space-y-5">
                {courseData.whoShouldAttend.map(
                  (item: string, index: number) => (
                    <li key={index} className="flex items-start gap-10">
                      <span className="text-orange-600 font-bold">✔</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
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
                {courseData.whatYoullLearn.map(
                  (item: string, index: number) => (
                    <li key={index} className="flex items-start gap-10">
                      <span className="text-orange-600 font-bold">✅</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Antipasto Message */}
          {courseData.antipastoMessage && (
            <div className="mb-20 p-15 bg-orange-50 ">
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
    </div>
  ) : null;
}

export default Page;
