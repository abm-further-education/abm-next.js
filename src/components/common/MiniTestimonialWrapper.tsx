'use client';

import { useEffect, useState } from 'react';
import MiniTestimonial from './MiniTestimonial';
import type { Testimonial } from '@/lib/testimonial-types';

/**
 * MiniTestimonial 컴포넌트의 클라이언트 래퍼
 * 서버 액션을 통해 DB에서 데이터를 가져와서 클라이언트 컴포넌트에 전달합니다
 */
export default function MiniTestimonialWrapper() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch('/api/testimonials');
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading) {
    return null;
  }

  return <MiniTestimonial testimonials={testimonials} />;
}

