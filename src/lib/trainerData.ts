export interface Trainer {
  id: string;
  name: string;
  email: string;
  image: string;
  courseCategory:
    | 'cookery'
    | 'business'
    | 'fitness'
    | 'hr'
    | 'project'
    | 'health';
  courses?: string[];
  bio?: string;
}

export const courseCategories = [
  {
    value: 'cookery',
    label: 'Cookery & Hospitality',
    href: '/cookery-and-hospitality-courses',
  },
  {
    value: 'business',
    label: 'Business',
    href: '/business-and-management-courses',
  },
  {
    value: 'fitness',
    label: 'Fitness & Sports',
    href: '/fitness-instructor-personal-trainer-courses',
  },
  { value: 'hr', label: 'Human Resources', href: '/human-resources-courses' },
  {
    value: 'project',
    label: 'Project Management',
    href: '/project-and-program-management-courses',
  },
  {
    value: 'health',
    label: 'Health & Wellness',
    href: '/health-and-wellness-courses',
  },
];
