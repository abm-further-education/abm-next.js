import { cn } from '@/lib/utils';

interface CourseProgressItem {
  code?: string;
  title: string;
  duration?: string;
  color?: string;
}

interface CourseProgressProps {
  courses: CourseProgressItem[];
  startIndex?: number;
  description?: string;
}

const CourseProgress: React.FC<CourseProgressProps> = ({
  courses,
  startIndex = 0,
  description,
}) => {
  return (
    <div className="mb-12">
      <div className="flex items-center space-x-2">
        {courses.map((course, index) => (
          <div
            key={course.code || course.title}
            className={cn(
              'p-8 md:p-12 md:w-[50%] h-150 relative text-white',
              course.color || 'bg-neutral-500',
              index > 0 && 'ml-[-20px] md:ml-[-30px]',
              (!course.code || !course.duration) &&
                'flex flex-col justify-center',
            )}
            style={{
              clipPath:
                index + startIndex === 0
                  ? 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 50%, 0% 0%)'
                  : 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
            }}
          >
            <div
              className={cn(
                'text-xs md:text-sm font-semibold mb-2',
                index + startIndex > 0 && 'pl-25 md:pl-50',
              )}
            >
              {course.code || ''}
            </div>
            <div
              className={cn(
                'text-xs md:text-base font-bold max-w-120 md:max-w-210 mb-2 leading-tight ',
                index + startIndex > 0 && 'pl-25 md:pl-50 pr-10',
              )}
            >
              {course.title}
            </div>
            <div
              className={cn(
                'text-xs md:text-sm absolute bottom-10',
                index + startIndex > 0 && 'pl-25 md:pl-50',
              )}
            >
              {course.duration || ''}
            </div>
          </div>
        ))}
      </div>
      {description && (
        <p className="text-base text-neutral-700 mt-4">{description}</p>
      )}
    </div>
  );
};

export default CourseProgress;
