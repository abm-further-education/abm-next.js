import React, { useEffect, useState } from 'react';

interface CourseDetailMenuProps {
  menuItems: string[];
}

function CourseDetailMenu({ menuItems }: CourseDetailMenuProps) {
  const [activeSection, setActiveSection] = useState(menuItems[0]);

  // 섹션 ID를 생성하는 함수
  const getSectionId = (menuItem: string) => {
    return menuItem.toLowerCase().replace(/\s+/g, '-');
  };

  // 해당 섹션으로 스크롤하는 함수
  const scrollToSection = (menuItem: string) => {
    const sectionId = getSectionId(menuItem);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 150; // 메뉴 높이만큼 오프셋
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // 현재 뷰포트에 있는 섹션을 감지하는 함수
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems
        .map((item) => ({
          id: getSectionId(item),
          name: item,
          element: document.getElementById(getSectionId(item)),
        }))
        .filter((section) => section.element);

      let currentSection = sections[0]?.name || menuItems[0];

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section.name;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuItems]);

  return (
    <div className="sticky top-20 bg-white/95 backdrop-blur-sm shadow-sm z-40 border-b border-gray-100">
      <div className="flex flex-wrap gap-24 py-20 text-base md:text-xl items-center justify-center font-[family-name:var(--font-montserrat)]">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`pb-2 font-medium transition-all duration-200 cursor-pointer ${
              activeSection === item
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500 hover:text-primary'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CourseDetailMenu;
