export interface Testimonial {
  id: string;
  name: string;
  image: string;
  message?: string | null;
  rating?: number | null;
  course: 'cookery&hospitality' | 'fitness';
  created_at: string;
  updated_at: string;
}

