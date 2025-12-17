'use client';

import React, { useState } from 'react';
import { Grid3X3, List } from 'lucide-react';
import getShortCourseData from '@/lib/shortCourseData';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

interface CourseListSectionProps {
  currentSlug?: string; // 현재 페이지의 코스 slug (현재 코스는 제외)
}

export default function CourseListSection({
  currentSlug,
}: CourseListSectionProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const t = useTranslations('shortCourses');
  const params = useParams();
  let locale = 'en';
  if (params?.locale) {
    if (Array.isArray(params.locale)) {
      locale = params.locale[0];
    } else {
      locale = params.locale;
    }
  }
  const shortCourseData = getShortCourseData(locale);

  // 현재 코스를 제외한 모든 코스 데이터
  const courses = Object.entries(shortCourseData).filter(
    ([slug]) => slug !== currentSlug
  );

  return (
    <section className="max-w-1200 mx-auto px-20 py-40 bg-gray-50">
      <div className="text-center mb-40">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          {t('exploreOtherShortCourses')}
        </h2>
        <p className="text-gray-600 max-w-600 mx-auto">
          {t('exploreOtherShortCoursesDesc')}
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center mb-30">
        <div className="flex bg-white ">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-8 px-16 py-12 transition-colors ${
              viewMode === 'grid'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Grid3X3 size={18} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-8 px-16 py-12 transition-colors ${
              viewMode === 'list'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Courses Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
          {courses.map(([slug, course]) => (
            <div
              key={slug}
              className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-200">
                <Image
                  src={course.images[0]}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-10 right-10 bg-primary text-white px-8 py-4 rounded-full text-sm font-semibold">
                  ${course.price}
                </div>
              </div>
              <div className="p-20">
                <h3 className="text-lg font-bold text-gray-800 mb-8 overflow-hidden text-ellipsis whitespace-nowrap">
                  {course.title}
                </h3>
                <p
                  className="text-gray-600 text-sm mb-15 overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-15">
                  <span>⏱️ {course.duration}</span>
                </div>
                <Link
                  href={`/custom-programs/${slug}`}
                  className="inline-block w-full bg-primary-bk text-white text-center py-10 px-16  font-semibold transition-colors"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-15">
          {courses.map(([slug, course]) => (
            <div
              key={slug}
              className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-300 h-200 md:h-auto">
                  <Image
                    src={course.images[0]}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-10 right-10 bg-primary text-white px-8 py-4 rounded-full text-sm font-semibold">
                    ${course.price}
                  </div>
                </div>
                <div className="flex-1 p-20">
                  <h3 className="text-xl font-bold text-gray-800 mb-10">
                    {course.title}
                  </h3>
                  <p
                    className="text-gray-600 mb-15 overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-20 text-sm text-gray-500 mb-20">
                    <span>⏱️ {course.duration}</span>
                    <span>📍 {course.location.split('(')[0].trim()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      📅 {course.dates.length} available date
                      {course.dates.length > 1 ? 's' : ''}
                    </div>
                    <a
                      href={`/custom-programs/${slug}`}
                      className="bg-primary-bk text-white py-10 px-20  font-semibold hover:bg-primary/90 transition-colors"
                    >
                      View Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All Courses Button */}
      <div className="text-center mt-40">
        <Link
          href="/custom-programs"
          className="inline-block bg-primary-bk text-white py-15 px-30  font-semibold hover:bg-gray-700 transition-colors"
        >
          View All Short Courses
        </Link>
      </div>
    </section>
  );
}
