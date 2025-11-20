'use client';

import { useEffect, useRef } from 'react';

interface NewsContentProps {
  content: string;
}

/**
 * 뉴스 콘텐츠를 렌더링하고 R2 이미지 URL을 로드하는 컴포넌트
 */
export default function NewsContent({ content }: NewsContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // R2 이미지 URL 로드
    const r2Images = contentRef.current.querySelectorAll('img[data-r2-key]');
    
    r2Images.forEach((img) => {
      const key = img.getAttribute('data-r2-key');
      if (key && !img.getAttribute('data-loading')) {
        img.setAttribute('data-loading', 'true');
        // placeholder 이미지 설정
        (img as HTMLImageElement).src = '/abm_logo.png';

        fetch(`/api/r2/get-url?key=${encodeURIComponent(key)}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.url) {
              (img as HTMLImageElement).src = data.url;
              img.removeAttribute('data-loading');
            } else {
              (img as HTMLImageElement).src = '/abm_logo.png';
              img.removeAttribute('data-loading');
            }
          })
          .catch((err) => {
            console.error('R2 image URL fetch error:', err);
            (img as HTMLImageElement).src = '/abm_logo.png';
            img.removeAttribute('data-loading');
          });
      }
    });

    // 일반 이미지 중 R2 key인 경우 처리 (data-r2-key가 없는 경우)
    const allImages = contentRef.current.querySelectorAll('img:not([data-r2-key])');
    allImages.forEach((img) => {
      const src = (img as HTMLImageElement).src || img.getAttribute('src');
      // 로컬 경로(/로 시작)나 전체 URL은 그대로 유지
      // R2 key인 경우만 변환 (http://, https://, /, ./로 시작하지 않는 경우)
      if (
        src &&
        !src.startsWith('http://') &&
        !src.startsWith('https://') &&
        !src.startsWith('/') &&
        !src.startsWith('./')
      ) {
        const key = src;
        img.setAttribute('data-r2-key', key);
        img.setAttribute('data-loading', 'true');
        (img as HTMLImageElement).src = '/abm_logo.png';

        fetch(`/api/r2/get-url?key=${encodeURIComponent(key)}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.url) {
              (img as HTMLImageElement).src = data.url;
              img.removeAttribute('data-loading');
            } else {
              (img as HTMLImageElement).src = '/abm_logo.png';
              img.removeAttribute('data-loading');
            }
          })
          .catch((err) => {
            console.error('R2 image URL fetch error:', err);
            (img as HTMLImageElement).src = '/abm_logo.png';
            img.removeAttribute('data-loading');
          });
      }
    });
  }, [content]);

  return (
    <div
      ref={contentRef}
      id="news-content"
      className="text-gray-700 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

