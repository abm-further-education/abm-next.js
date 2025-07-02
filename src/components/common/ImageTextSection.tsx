import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  content: string;
  imgPath: string;
  order?: 'left' | 'right';
  className?: string;
  haveButton?: React.ReactNode;
};

function ImageTextSection({
  title,
  content,
  imgPath,
  order,
  className,
  haveButton,
}: Props) {
  return (
    <div
      className={cn(
        'flex-col md:flex-row flex items-center justify-center mt-120 gap-40 max-w-1000 mx-auto px-16 md:px-0',
        className
      )}
    >
      <div
        className={cn(
          order === 'left' ? 'md:order-1' : 'md:order-2',
          'w-300 h-300 md:w-400 md:h-400 relative'
        )}
      >
        <Image
          src={imgPath}
          alt={`${title}_image`}
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div
        className={cn(order === 'right' ? 'order-1' : 'order-2', 'max-w-450')}
      >
        <h2 className={cn('text-xl text-primary font-semibold')}>{title}</h2>
        <p className={cn('text-neutral-600 text-sm mt-20 whitespace-pre-wrap')}>
          {content}
        </p>
        {haveButton && haveButton}
      </div>
    </div>
  );
}

export default ImageTextSection;
