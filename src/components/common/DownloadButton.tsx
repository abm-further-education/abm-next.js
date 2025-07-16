'use client';

import React from 'react';
import Button from '@/components/common/Button';

const DownloadButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      className="bg-primary-bk text-white hover:bg-primary"
      onClick={() => {
        window.open(
          'https://www.jotform.com/app/abm-further-education/abm-agents',
          '_blank'
        );
      }}
    >
      {children}
    </Button>
  );
};

export default DownloadButton;
