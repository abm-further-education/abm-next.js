'use client';

import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

type FloatingTrialButtonProps = {
  href?: string;
  title?: string;
};

export default function FloatingTrialButton({
  href = '/promotion',
  title = 'Try 1-Day Free Trial',
}: FloatingTrialButtonProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed top-140 right-40 z-[9999]"
      role="complementary"
      aria-label={title}
    >
      <button
        onClick={() => setVisible(false)}
        aria-label="Close trial button"
        className="absolute top-2 right-0 inline-flex items-center justify-center h-20 w-20 rounded-full bg-white text-gray-600 shadow hover:bg-gray-100"
      >
        <X size={14} />
      </button>

      <Link
        href={href}
        title={title}
        aria-label={title}
        className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-full"
      >
        <div className="text-lg text-white bg-primary rounded-full h-150 w-150 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity font-montserrat">
          <span className="sr-only">{title}</span>
          <span className="eading-tight text-center">
            Try
            <br />
            1-Day
            <br />
            Free Trial
          </span>
        </div>
      </Link>
    </div>
  );
}
