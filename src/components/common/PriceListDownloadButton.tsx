'use client';

import React from 'react';
import { Eye } from 'lucide-react';

const PriceListDownloadButton = () => {
  const handleOpenImage = () => {
    window.open('/files/2stay-offshore-price-list-2026.png', '_blank');
  };

  return (
    <button
      onClick={handleOpenImage}
      className="flex items-center gap-10 px-20 py-12 bg-primary-bk text-white hover:bg-primary transition-colors text-sm font-medium font-[family-name:var(--font-montserrat)]"
    >
      <Eye size={16} />
      See Price List
    </button>
  );
};

export default PriceListDownloadButton;
