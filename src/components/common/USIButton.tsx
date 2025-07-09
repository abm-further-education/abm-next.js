'use client';

import React from 'react';
import Button from '@/components/common/Button';

interface USIButtonProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

const USIButton = ({ children, className, url }: USIButtonProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Button className={className} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default USIButton;
