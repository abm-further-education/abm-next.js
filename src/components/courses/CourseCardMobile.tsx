'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, DollarSign, Award, ChevronRight } from 'lucide-react';
import { CourseData } from '@/lib/courseData';

interface CourseCardMobileProps {
  course: CourseData;
}

export default function CourseCardMobile({ course }: CourseCardMobileProps) {
  const formatRomanNumerals = (text: string) => {
    // 로마 숫자 패턴 (I, II, III, IV, V, VI, VII, VIII, IX, X 등)
    return text.replace(
      /\b([Ii]{1,3}|[Ii][Vv]|[Vv]|[Vv][Ii]{0,3}|[Ii][Xx]|[Xx])\b/g,
      (match) => match.toUpperCase()
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      cookery: 'bg-orange-100 text-orange-800',
      hospitality: 'bg-blue-100 text-blue-800',
      fitness: 'bg-green-100 text-green-800',
      business: 'bg-purple-100 text-purple-800',
      project: 'bg-indigo-100 text-indigo-800',
      hr: 'bg-pink-100 text-pink-800',
      'short-course-hospitality': 'bg-blue-100 text-blue-800',
      'short-course-cooking': 'bg-orange-100 text-orange-800',
      'short-course-online': 'bg-purple-100 text-purple-800',
    };
    return (
      colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
    );
  };

  const getLevelColor = (level?: string) => {
    const colors = {
      'certificate-iii': 'bg-green-100 text-green-800',
      'certificate-iv': 'bg-blue-100 text-blue-800',
      diploma: 'bg-purple-100 text-purple-800',
      'advanced-diploma': 'bg-indigo-100 text-indigo-800',
      'graduate-diploma': 'bg-red-100 text-red-800',
    };
    return level
      ? colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800'
      : '';
  };

  return (
    <div className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex">
        {/* Content Section - 중간 */}
        <div className="flex-1 p-7 min-w-0">
          {/* 상단: 카테고리와 레벨 */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(
                course.category
              )}`}
            >
              {formatRomanNumerals(
                course.category.startsWith('short-course-')
                  ? course.category
                      .replace('short-course-', '')
                      .split('-')
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(' ')
                  : course.category.charAt(0).toUpperCase() +
                      course.category.slice(1)
              )}
            </span>
            {course.level && (
              <span
                className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(
                  course.level
                )}`}
              >
                {formatRomanNumerals(
                  course.level
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                )}
              </span>
            )}
          </div>

          {/* 제목 */}
          <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">
            {course.title}
          </h3>

          {/* 설명 */}
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">
            {course.description}
          </p>

          {/* 코스 정보 */}
          <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <Clock size={12} className="text-gray-400" />
              <span>{course.duration}</span>
            </div>
            {course.price && (
              <div className="flex items-center gap-1">
                <DollarSign size={12} className="text-gray-400" />
                <span>${course.price}</span>
              </div>
            )}
            {(course.type === 'full-course' ||
              course.type === 'fast-track') && (
              <div className="flex items-center gap-1">
                <Award size={12} className="text-gray-400" />
                <span>
                  {course.type === 'full-course' ? 'Full Course' : 'Fast Track'}
                </span>
              </div>
            )}
          </div>

          {/* 태그 */}
          <div className="flex gap-5 mb-2">
            {course.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full truncate max-w-120"
              >
                {tag}
              </span>
            ))}
            {course.tags.length > 2 && (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                +{course.tags.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* CTA Button Section - 우측 */}
        <div className="flex items-center p-3">
          <Link
            href={course.link}
            // className="bg-primary text-white py-2 px-3 text-xs hover:bg-primary/90 transition-colors duration-200 font-medium rounded whitespace-nowrap"
          >
            <ChevronRight className="text-primary" size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
