'use client';

import FadeIn from '@/components/common/FadeIn';
import { useTranslations } from 'next-intl';
import React, { useState, useMemo } from 'react';
import CourseFilter from '@/components/courses/CourseFilter';
import CourseCard from '@/components/courses/CourseCard';
import {
  getCourseDataByLocale,
  courseCategories,
  courseTypes,
  courseLevels,
  CourseData,
} from '@/lib/courseData';
import { useParams } from 'next/navigation';

function Page() {
  const params = useParams();
  let locale = 'en';
  if (params?.locale) {
    if (Array.isArray(params.locale)) {
      locale = params.locale[0];
    } else {
      locale = params.locale;
    }
  }
  const courseData = getCourseDataByLocale(locale);
  const t = useTranslations('courses');

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return getCourseDataByLocale(locale).filter((course: CourseData) => {
      // Search filter
      const matchesSearch =
        searchTerm === '' ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || course.category === selectedCategory;

      // Type filter
      const matchesType =
        selectedType === 'all' || course.type === selectedType;

      // Level filter
      const matchesLevel =
        selectedLevel === 'all' || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesType && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedType, selectedLevel]);

  return (
    <div className="px-20 xl:px-0 max-w-[1600px] mx-auto">
      <FadeIn>
        <div className="pt-140">
          <h2 className="text-2xl md:text-4xl font-bold py-20">{t('title')}</h2>
          <p className="text-sm md:text-base text-neutral-700">
            {t('description')}
          </p>
        </div>
      </FadeIn>

      {/* Main Content */}
      <section className="px-16 md:px-0 py-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-40 relative min-h-screen">
            {/* Filters Sidebar */}
            <div className="lg:w-300 flex-shrink-0">
              <div className="sticky top-140 z-10">
                <CourseFilter
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  selectedLevel={selectedLevel}
                  setSelectedLevel={setSelectedLevel}
                  courseCategories={courseCategories}
                  courseTypes={courseTypes}
                  courseLevels={courseLevels}
                  totalCourses={courseData.length}
                  filteredCourses={filteredCourses.length}
                />
              </div>
            </div>

            {/* Courses Grid */}
            <div className="flex-1">
              {filteredCourses.length === 0 ? (
                <div className="text-center py-80">
                  <div className="text-gray-400 mb-20">
                    <svg
                      className="mx-auto h-24 w-24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-10">
                    No courses found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search or filter criteria to find what
                    you&apos;re looking for.
                  </p>
                </div>
              ) : (
                <div className="sm:grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
