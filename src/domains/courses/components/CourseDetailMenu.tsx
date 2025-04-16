import React from 'react';

interface CourseDetailMenuProps {
  menuItems: string[];
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}

function CourseDetailMenu({
  menuItems,
  selectedMenu,
  setSelectedMenu,
}: CourseDetailMenuProps) {
  return (
    <div className="flex flex-wrap gap-24 my-20 md:my-40 text-xl items-center justify-center font-[family-name:var(--font-montserrat)]">
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedMenu(item)}
          className={`pb-2 font-medium transition-colors cursor-pointer ${
            selectedMenu === item
              ? 'border-b-2 border-primary text-primary'
              : 'text-gray-500 hover:text-primary'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CourseDetailMenu;
