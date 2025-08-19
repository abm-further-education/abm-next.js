'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, DollarSign, Award } from 'lucide-react';
import { CourseData } from '@/lib/courseData';

interface CourseCardProps {
  course: CourseData;
}

export default function CourseCard({ course }: CourseCardProps) {
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

  // const getLevelColor = (level?: string) => {
  //   const colors = {
  //     'certificate-iii': 'bg-green-100 text-green-800',
  //     'certificate-iv': 'bg-blue-100 text-blue-800',
  //     diploma: 'bg-purple-100 text-purple-800',
  //     'advanced-diploma': 'bg-indigo-100 text-indigo-800',
  //     'graduate-diploma': 'bg-red-100 text-red-800',
  //   };
  //   return level
  //     ? colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  //     : '';
  // };

  return (
    <div className="bg-white border border-gray-200  overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-200 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-15 left-15">
          <span
            className={`inline-block px-10 py-5 text-xs font-medium rounded-full ${getCategoryColor(
              course.category
            )}`}
          >
            {formatRomanNumerals(
              course.category.startsWith('short-course-')
                ? course.category
                    .replace('short-course-', '')
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                : course.category.charAt(0).toUpperCase() +
                    course.category.slice(1)
            )}
          </span>
        </div>
        {/* {course.level && (
          <div className="absolute top-15 right-15">
            <span
              className={`inline-block px-10 py-5 text-xs font-medium rounded-full ${getLevelColor(
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
          </div>
        )} */}
      </div>

      {/* Content */}
      <div className="p-10">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2 h-48">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-20 line-clamp-3 h-40">
          {course.description}
        </p>

        {/* Course Details */}
        <div className="space-y-10 mb-20">
          <div className="flex items-center gap-10 text-sm text-gray-600">
            <Clock size={16} className="text-gray-400" />
            <span>{course.duration}</span>
          </div>
          {course.price && (
            <div className="flex items-center gap-10 text-sm text-gray-600">
              <DollarSign size={16} className="text-gray-400" />
              <span>${course.price}</span>
            </div>
          )}
          {(course.type === 'full-course' || course.type === 'fast-track') && (
            <div className="flex items-center gap-10 text-sm text-gray-600">
              <Award size={16} className="text-gray-400" />
              <span>
                {course.type === 'full-course' ? 'Full Course' : 'Fast Track'}
              </span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex gap-5 mb-20">
          {course.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-8 text-xs bg-gray-100 text-gray-600 rounded-full h-22 overflow-hidden text-ellipsis whitespace-nowrap max-w-100 flex items-center justify-center"
            >
              {tag}
            </span>
          ))}
          {course.tags.length > 3 && (
            <span className="px-8 text-xs bg-gray-100 text-gray-600 rounded-full h-22 overflow-hidden text-ellipsis whitespace-nowrap max-w-100 flex items-center justify-center">
              +{course.tags.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href={course.link}
          className="block w-full text-center bg-primary text-white py-12 px-20  hover:bg-primary/90 transition-colors duration-200 font-medium"
        >
          {course.type === 'short-course' ? 'Book Now' : 'Learn More'}
        </Link>
      </div>
    </div>
  );
}
