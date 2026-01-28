'use client';

import React, { createContext, useState, ReactNode } from 'react';

interface CourseTypeContextType {
  courseType: string;
  setCourseType: (type: string) => void;
}

export const CourseTypeContext = createContext<CourseTypeContextType>({
  courseType: '',
  setCourseType: () => {},
});

interface CourseTypeProviderProps {
  children: ReactNode;
}

export const CourseTypeProvider: React.FC<CourseTypeProviderProps> = ({
  children,
}) => {
  const [courseType, setCourseType] = useState<string>('');

  return (
    <CourseTypeContext.Provider value={{ courseType, setCourseType }}>
      {children}
    </CourseTypeContext.Provider>
  );
};
