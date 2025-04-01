import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ children, id, className, type = 'button', onClick }: Props) {
  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      className={cn(
        className,
        'px-16 py-10 transition-all font-[family-name:var(--font-montserrat)] cursor-pointer'
      )}
    >
      {children}
    </button>
  );
}

export default Button;
