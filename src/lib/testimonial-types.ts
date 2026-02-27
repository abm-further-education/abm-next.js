export type CourseCategory =
  | 'cookery'
  | 'business'
  | 'fitness'
  | 'hr'
  | 'project'
  | 'health';

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  message?: string | null;
  rating?: number | null;
  course: CourseCategory | 'cookery&hospitality'; // 'cookery&hospitality' for backward compat
  created_at: string;
  updated_at: string;
}

