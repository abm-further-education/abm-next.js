'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trainer, courseCategories } from '@/lib/trainerData';
import { Mail } from 'lucide-react';

interface TrainerCardProps {
  trainer: Trainer;
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  // Get category info
  const categoryInfo = courseCategories.find(
    (cat) => cat.value === trainer.courseCategory
  );
  const categoryLabel = categoryInfo?.label || trainer.courseCategory;
  const categoryHref = categoryInfo?.href || '#';

  return (
    <div className="bg-white">
      <div className="relative h-300 w-full">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {trainer.name}
        </h3>

        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <Mail className="w-16 h-16 mr-2 text-primary" />
            <Link
              href={`mailto:${trainer.email}`}
              className="text-sm hover:text-primary transition-colors"
            >
              {trainer.email}
            </Link>
          </div>

          {/* Category label */}
          <div className="pt-2 border-t border-gray-100">
            <Link
              href={categoryHref}
              className="inline-block px-3 py-1 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded transition-colors"
            >
              {categoryLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
