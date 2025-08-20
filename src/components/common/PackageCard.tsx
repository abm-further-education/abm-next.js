'use client';

import React from 'react';
import { Clock } from 'lucide-react';
import Button from './Button';
import { useRouter } from 'next/navigation';

interface PackageCardProps {
  title: string;
  duration: string;
  items: string[];
  icon?: React.ReactNode;
  backgroundImage?: string;
}

function PackageCard({
  title,
  duration,
  items,
  icon,
  backgroundImage,
}: PackageCardProps) {
  const router = useRouter();
  return (
    <div className="relative bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden w-300">
      {/* Header with background image and title */}
      <div
        className={`relative px-20 py-16 mb-4 bg-cover bg-center h-77 flex items-center ${
          backgroundImage ? '' : 'bg-gray-100'
        }`}
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: '20% 20%',
              }
            : undefined
        }
      >
        {/* Dimmed overlay */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-black/70"></div>
        )}

        {/* Content */}
        <div className="relative z-10 flex items-center gap-3">
          {icon && (
            <div
              className={`flex-shrink-0 ${
                backgroundImage ? 'text-white' : 'text-gray-600'
              }`}
            >
              {icon}
            </div>
          )}
          <h3
            className={`text-lg font-semibold leading-tight ${
              backgroundImage ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Content area */}
      <div className="px-20 pb-20 pt-10">
        {/* Duration */}
        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <Clock size={16} />
          <span className="text-sm font-bold">Duration: </span>
          <span className="text-sm font-medium">{duration}</span>
        </div>

        {/* Items list */}
        <ul className="space-y-2 mb-8 h-120">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              {/* <CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> */}
              <span className="text-sm text-gray-700 leading-relaxed">
                • {item}
              </span>
            </li>
          ))}
        </ul>

        <Button
          className="bg-primary text-white w-full"
          onClick={() => {
            router.push('/contact');
          }}
        >
          {'Enquire Now'}
        </Button>
      </div>
    </div>
  );
}

export default PackageCard;
