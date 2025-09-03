interface CourseProgressItem {
  code: string;
  title: string;
  duration: string;
}

interface CourseProgressProps {
  courses: CourseProgressItem[];
  activeIndex: number;
  startIndex?: number;
}

const CourseProgress: React.FC<CourseProgressProps> = ({
  courses,
  activeIndex,
  startIndex = 0,
}) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-2">
        {courses.map((course, index) => (
          <div
            key={course.code}
            className={`p-8 md:p-12 md:w-[50%] h-150 relative ${
              index === activeIndex
                ? 'bg-primary text-white'
                : 'bg-neutral-500 text-white'
            } ${index > 0 ? 'ml-[-20px] md:ml-[-30px]' : ''}`}
            style={{
              clipPath:
                index + startIndex === 0
                  ? 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 50%, 0% 0%)'
                  : 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
            }}
          >
            <div
              className={`text-xs md:text-sm font-semibold mb-2 ${
                index + startIndex > 0 ? 'pl-35 md:pl-60' : ''
              }`}
            >
              {course.code}
            </div>
            <div
              className={`text-sm md:text-base font-bold max-w-200 mb-2 leading-tight ${
                index + startIndex > 0 ? 'pl-35 md:pl-60' : ''
              }`}
            >
              {course.title}
            </div>
            <div
              className={`text-xs md:text-sm absolute bottom-10 ${
                index + startIndex > 0 ? 'pl-35 md:pl-60' : ''
              }`}
            >
              {course.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;
