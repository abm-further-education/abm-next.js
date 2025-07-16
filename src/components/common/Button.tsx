import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

function Button({
  children,
  id,
  className,
  type = 'button',
  onClick,
  disabled = false,
}: Props) {
  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        className,
        'px-16 py-10 transition-all font-[family-name:var(--font-montserrat)] cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      {children}
    </button>
  );
}

export default Button;
