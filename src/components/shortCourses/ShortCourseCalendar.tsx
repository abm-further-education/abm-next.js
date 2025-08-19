'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { shortCourseData as shortCourseDataEn } from '@/lib/shortCourseData/shortCourseData.en';
import { shortCourseData_kr as shortCourseDataKr } from '@/lib/shortCourseData/shortCourseData.kr';
import { shortCourseData_sp as shortCourseDataSp } from '@/lib/shortCourseData/shortCourseData.sp';
import FadeIn from '@/components/common/FadeIn';

interface CourseDate {
  date: string;
  displayDate: string;
  time: string;
}

interface CalendarCourse {
  slug: string;
  title: string;
  date: CourseDate;
  price: number;
}

interface ShortCourseCalendarProps {
  locale: string;
}

const ShortCourseCalendar: React.FC<ShortCourseCalendarProps> = ({
  locale,
}) => {
  const router = useRouter();

  // Get the appropriate data based on locale
  const getShortCourseData = () => {
    switch (locale) {
      case 'kr':
        return shortCourseDataKr;
      case 'sp':
        return shortCourseDataSp;
      default:
        return shortCourseDataEn;
    }
  };

  const shortCourseData = getShortCourseData();

  function toLocalDate(value: string) {
    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (match) {
      const year = Number(match[1]);
      const month = Number(match[2]) - 1;
      const day = Number(match[3]);
      return new Date(year, month, day);
    }
    return new Date(value);
  }

  // Collect all courses with their dates
  const allCourses: CalendarCourse[] = [];

  Object.entries(shortCourseData).forEach(([slug, course]) => {
    if (course && course.dates) {
      course.dates.forEach((date: CourseDate) => {
        allCourses.push({
          slug,
          title: course.title,
          date,
          price: course.price,
        });
      });
    }
  });

  // Group courses by month
  const coursesByMonth: { [key: string]: CalendarCourse[] } = {};

  allCourses.forEach((course) => {
    const date = toLocalDate(course.date.date);
    const monthKey = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, '0')}`;

    if (!coursesByMonth[monthKey]) {
      coursesByMonth[monthKey] = [];
    }
    coursesByMonth[monthKey].push(course);
  });

  // Sort courses inside each month by date (ascending)
  Object.keys(coursesByMonth).forEach((key) => {
    coursesByMonth[key].sort((a, b) => {
      const aTime = toLocalDate(a.date.date).getTime();
      const bTime = toLocalDate(b.date.date).getTime();
      return aTime - bTime;
    });
  });

  // Sort months chronologically
  const sortedMonths = Object.keys(coursesByMonth).sort();

  const handleCourseClick = (slug: string) => {
    router.push(`/short-courses/${slug}`);
  };

  const isPastDate = (dateString: string) => {
    const targetDate = toLocalDate(dateString);
    const now = new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    return targetDate < startOfToday;
  };

  const formatDayMonth = (dateString: string) => {
    const date = toLocalDate(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedMonths.map((monthKey) => {
            const monthName = new Date(monthKey + '-01').toLocaleDateString(
              'en-US',
              {
                year: 'numeric',
                month: 'long',
              }
            );
            const courses = coursesByMonth[monthKey];

            return (
              <div
                key={monthKey}
                className="bg-white  shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-primary-bk text-white p-4">
                  <h3 className="text-lg font-semibold text-center">
                    {monthName}
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {courses.map((course, index) => (
                      <div
                        key={`${course.slug}-${course.date.date}-${index}`}
                        onClick={() => handleCourseClick(course.slug)}
                        className="bg-gray-50  p-6 cursor-pointer hover:bg-orange-50 transition-colors duration-200 border border-gray-100"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-xl font-bold ${
                              isPastDate(course.date.date)
                                ? 'text-gray-600'
                                : 'text-primary'
                            }`}
                          >
                            {formatDayMonth(course.date.date)}
                          </span>
                          <span className="text-sm font-medium text-gray-600">
                            ${course.price}
                          </span>
                        </div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
                          {course.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {course.date.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </div>
  );
};

export default ShortCourseCalendar;
