'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

function Card({
  imgPath,
  title,
  link,
  className,
}: {
  imgPath: string;
  title: string;
  link?: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <div
      className={cn(
        'h-320 xl:h-300 relative group cursor-pointer overflow-hidden',
        className
      )}
      onClick={() => link && router.push(`${link}`)}
    >
      <Image
        src={imgPath}
        alt="banner_image"
        fill
        className="md:object-center object-cover group-hover:scale-105 transition-all"
      />
      <div className="absolute bottom-0 left-0 w-full text-2xl p-20 font-[family-name:var(--font-montserrat)] text-white font-bold bg-black/70 flex items-center justify-between">
        {title}
        <div className="group-hover:bg-primary rounded-full p-10 transition-all text-primary group-hover:text-black">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Card;
