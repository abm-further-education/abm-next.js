'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type BadgeProps = {
  endpoint?: string; // default: "/api/google-reviews"
  fixed?: boolean; // 고정 토스트처럼 코너에 띄울지
  align?: 'left' | 'right'; // fixed일 때 정렬
  bottom?: string; // fixed일 때 오프셋
  width?: number; // 카드 폭
};

export function GoogleReviewsBadge({
  endpoint = '/api/google-reviews',
  fixed = true,
  align = 'left',
  bottom = '1rem',
  width = 300,
}: BadgeProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [placeUrl, setPlaceUrl] = useState<string | undefined>();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    // Set mounted state and check for mobile
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Fetch reviews data
    (async () => {
      try {
        const r = await fetch(endpoint, { cache: 'no-store' });
        const d = await r.json();
        if (typeof d?.rating === 'number') setRating(d.rating);
        if (typeof d?.user_ratings_total === 'number')
          setTotal(d.user_ratings_total);
        if (d?.placeUrl) setPlaceUrl(d.placeUrl);
      } catch {}
    })();

    return () => window.removeEventListener('resize', checkMobile);
  }, [endpoint]);

  const Stars = ({ value }: { value: number }) => {
    const full = Math.round(value);
    return (
      <div
        aria-label={`${value} out of 5 stars`}
        className="flex items-center md:text-xl leading-none text-yellow-500"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < full ? 'opacity-100' : 'opacity-30'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const wrapperStyle = fixed
    ? ({ bottom, [align]: '1rem', width } as React.CSSProperties)
    : { width };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !isMounted) {
    return null;
  }

  return (
    <div
      style={wrapperStyle}
      className={`${
        fixed ? 'fixed' : ''
      } z-[9999] flex bg-white shadow-md p-12 gap-10`}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 p-1 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Close reviews"
      >
        <X size={16} className="text-gray-500" />
      </button>

      <div className="flex items-center gap-2 text-sm text-gray-800">
        <Image
          src="/icons/google.png"
          alt="Google"
          width={isMobile ? 30 : 45}
          height={isMobile ? 30 : 45}
          className={`${isMobile ? 'w-30 h-30' : 'w-45 h-45'}`}
        />
      </div>
      <div>
        <div className="mt-2 flex items-center gap-3">
          <div className="text-lg md:text-2xl font-bold leading-none">
            {rating?.toFixed(1) ?? '-'}
          </div>
          {typeof rating === 'number' && <Stars value={rating} />}
        </div>

        <div className="mt-2 text-xs text-gray-600">
          {typeof total === 'number' ? (
            <span>Rating based on our {total.toLocaleString()} reviews.</span>
          ) : (
            <span>Loading reviews…</span>
          )}
        </div>

        <div className="mt-2">
          {placeUrl && (
            <a
              href={placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              Read reviews
            </a>
          )}
        </div>

        <div className="mt-2 text-[10px] text-gray-500">Powered by Google</div>
      </div>
    </div>
  );
}
