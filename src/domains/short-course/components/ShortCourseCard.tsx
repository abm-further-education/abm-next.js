'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

function ShortCourseCard({
  imgPath,
  title,
  link,
  price,
}: {
  imgPath: string;
  title: string;
  link?: string;
  price?: number;
}) {
  const router = useRouter();
  return (
    <div
      className={cn(
        'h-520 relative group cursor-pointer overflow-hidden md:w-400'
      )}
      onClick={() => link && router.push(link)}
    >
      <Image
        src={imgPath}
        alt="banner_image"
        fill
        className="md:object-center object-cover group-hover:scale-105 transition-all"
      />
      <div className="absolute bottom-0 left-0 w-full text-2xl p-20 font-[family-name:var(--font-montserrat)] text-white font-bold bg-black/70">
        <div className="flex items-center justify-between">
          {title}
          <div className="group-hover:bg-primary rounded-full p-10 transition-all text-primary group-hover:text-black">
            <ArrowRight />
          </div>
        </div>
        <div className="text-primary">${price}</div>
      </div>
    </div>
  );
}

export default ShortCourseCard;
