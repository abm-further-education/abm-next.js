'use client';
import { useEffect, useState } from 'react';

const TopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); // 300px 이상 스크롤하면 버튼이 보이도록 설정
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-120 z-[999] w-45 h-45 md:w-50 md:h-50 right-20 md:right-30 bg-primary text-black p-3 rounded-full shadow-lg hover:bg-primary transition-all cursor-pointer ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to Top"
    >
      ↑
    </button>
  );
};

export default TopButton;
