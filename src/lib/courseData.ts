export interface CourseData {
  id: string;
  title: string;
  description: string;
  category:
    | 'cookery'
    | 'hospitality'
    | 'fitness'
    | 'business'
    | 'project'
    | 'hr'
    | 'short-course-hospitality'
    | 'short-course-cooking'
    | 'short-course-online';
  type: 'full-course' | 'short-course';
  level?:
    | 'certificate-iii'
    | 'certificate-iv'
    | 'diploma'
    | 'advanced-diploma'
    | 'graduate-diploma';
  duration: string;
  price?: number;
  image: string;
  link: string;
  tags: string[];
}

export const courseData: CourseData[] = [
  // Cookery Courses
  {
    id: 'kitchen-management',
    title: 'Certificate IV in Kitchen Management',
    description:
      'Learn professional kitchen management skills and culinary techniques.',
    category: 'cookery',
    type: 'full-course',
    level: 'certificate-iv',
    duration: '12 months',
    image: '/courses/cookery/KM.jpg',
    link: '/cookery-and-hospitality-courses/sit40521-certificate-iv-in-kitchen-management',
    tags: ['kitchen', 'management', 'culinary', 'certificate-iv'],
  },
  {
    id: 'food-safety',
    title: 'NSW Food Safety Supervisor',
    description: 'Learn food safety and hygiene management.',
    category: 'cookery',
    type: 'full-course',
    duration: '1 day',
    image: '/short-course/fss_1.png',
    link: '/cookery-and-hospitality-courses/fss',
    tags: ['food-safety', 'hygiene', 'supervisor', 'nsw'],
  },
  // Hospitality Courses
  {
    id: 'hospitality-diploma',
    title: 'Diploma of Hospitality Management',
    description: 'Comprehensive hospitality management skills.',
    category: 'hospitality',
    type: 'full-course',
    level: 'diploma',
    duration: '18 months',
    image: '/courses/cookery/DHM.jpg',
    link: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
    tags: ['hospitality', 'management', 'diploma'],
  },
  {
    id: 'hospitality-advanced-diploma',
    title: 'Advanced Diploma of Hospitality Management',
    description: 'Advanced hospitality management and leadership skills.',
    category: 'hospitality',
    type: 'full-course',
    level: 'advanced-diploma',
    duration: '24 months',
    image: '/courses/cookery/ADHM.jpg',
    link: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
    tags: ['hospitality', 'management', 'advanced-diploma', 'leadership'],
  },

  // Fitness Courses
  {
    id: 'fitness-cert-iii',
    title: 'Certificate III in Fitness',
    description: 'Foundation fitness and personal training skills.',
    category: 'fitness',
    type: 'full-course',
    level: 'certificate-iii',
    duration: '12 months',
    image: '/courses/fitness/fitness_1.png',
    link: '/fitness-instructor-personal-trainer-courses/sis30321-certificate-iii-in-fitness',
    tags: ['fitness', 'personal-training', 'certificate-iii'],
  },
  {
    id: 'fitness-cert-iv',
    title: 'Certificate IV in Fitness',
    description: 'Advanced fitness training and instruction skills.',
    category: 'fitness',
    type: 'full-course',
    level: 'certificate-iv',
    duration: '18 months',
    image: '/courses/fitness/fitness_5-banner.png',
    link: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness',
    tags: ['fitness', 'personal-training', 'certificate-iv', 'advanced'],
  },
  {
    id: 'sport-cert-iii',
    title: 'Certificate III in Fitness (Fast Track)',
    description: 'Accelerated sports coaching and training program.',
    category: 'fitness',
    type: 'full-course',
    level: 'certificate-iii',
    duration: '6 months',
    image: '/courses/fitness/diploma-of-sport.png',
    link: '/fitness-instructor-personal-trainer-courses/certificate-iii-in-fitness-fast-track',
    tags: ['sport', 'coaching', 'fast-track', 'certificate-iii'],
  },
  {
    id: 'sport-cert-iv',
    title: 'Certificate IV in Fitness (Fast Track)',
    description: 'Advanced sports coaching and development program.',
    category: 'fitness',
    type: 'full-course',
    level: 'certificate-iv',
    duration: '12 months',
    image: '/courses/fitness/fitness_3-banner.png',
    link: '/fitness-instructor-personal-trainer-courses/certificate-iv-in-fitness-fast-track',
    tags: ['sport', 'coaching', 'fast-track', 'certificate-iv', 'advanced'],
  },
  {
    id: 'sport-diploma',
    title: 'Diploma of Sport',
    description: 'Comprehensive sports coaching and development program.',
    category: 'fitness',
    type: 'full-course',
    level: 'diploma',
    duration: '18 months',
    image: '/courses/fitness/fitness_2-banner.png',
    link: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
    tags: ['sport', 'coaching', 'diploma', 'development'],
  },

  // Business Courses
  {
    id: 'business-cert-iv',
    title: 'Certificate IV in Business',
    description: 'Foundation business skills and knowledge.',
    category: 'business',
    type: 'full-course',
    level: 'certificate-iv',
    duration: '12 months',
    image: '/courses/business/business_1.jpg',
    link: '/business-and-management-courses/bsb40120-certificate-iv-in-business',
    tags: ['business', 'management', 'certificate-iv'],
  },
  {
    id: 'business-diploma',
    title: 'Diploma of Business',
    description: 'Comprehensive business management and leadership skills.',
    category: 'business',
    type: 'full-course',
    level: 'diploma',
    duration: '18 months',
    image: '/courses/business/business_2.jpg',
    link: '/business-and-management-courses/bsb50120-diploma-of-business',
    tags: ['business', 'management', 'diploma', 'leadership'],
  },
  {
    id: 'business-advanced-diploma',
    title: 'Advanced Diploma of Business',
    description: 'Advanced business strategy and management skills.',
    category: 'business',
    type: 'full-course',
    level: 'advanced-diploma',
    duration: '24 months',
    image: '/courses/business/business_3.jpg',
    link: '/business-and-management-courses/bsb60120-advanced-diploma-of-business',
    tags: ['business', 'management', 'advanced-diploma', 'strategy'],
  },
  {
    id: 'business-graduate-diploma',
    title: 'Graduate Diploma of Management',
    description: 'Postgraduate level management and leadership skills.',
    category: 'business',
    type: 'full-course',
    level: 'graduate-diploma',
    duration: '12 months',
    image: '/courses/business/business_4.png',
    link: '/business-and-management-courses/bsb80120-graduate-diploma-of-management',
    tags: ['business', 'management', 'graduate-diploma', 'leadership'],
  },

  // Project Management Courses
  {
    id: 'project-cert-iv',
    title: 'Certificate IV in Project Management',
    description: 'Foundation project management skills and methodologies.',
    category: 'project',
    type: 'full-course',
    level: 'certificate-iv',
    duration: '12 months',
    image: '/courses/project/project_1.png',
    link: '/project-and-program-management-courses/bsb40920-certificate-iv-in-project-management-practice',
    tags: ['project-management', 'certificate-iv', 'methodologies'],
  },
  {
    id: 'project-diploma',
    title: 'Diploma of Project Management',
    description: 'Comprehensive project management and leadership skills.',
    category: 'project',
    type: 'full-course',
    level: 'diploma',
    duration: '18 months',
    image: '/courses/project/project_2.png',
    link: '/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice',
    tags: ['project-management', 'diploma', 'leadership'],
  },
  {
    id: 'project-advanced-diploma',
    title: 'Advanced Diploma of Project Management',
    description: 'Advanced project management and strategic planning skills.',
    category: 'project',
    type: 'full-course',
    level: 'advanced-diploma',
    duration: '24 months',
    image: '/courses/project/project_3.png',
    link: '/project-and-program-management-courses/bsb60720-advanced-diploma-of-project-management-practice',
    tags: ['project-management', 'advanced-diploma', 'strategic-planning'],
  },

  // HR Courses
  {
    id: 'hr-cert-iv',
    title: 'Certificate IV in Human Resource Management',
    description: 'Foundation HR management skills and practices.',
    category: 'hr',
    type: 'full-course',
    level: 'certificate-iv',
    duration: '12 months',
    image: '/courses/hr/hr_1.png',
    link: '/human-resources-courses/bsb40420-certificate-iv-in-human-resource-management',
    tags: ['hr', 'human-resources', 'certificate-iv', 'management'],
  },
  {
    id: 'hr-diploma',
    title: 'Diploma of Human Resource Management',
    description: 'Comprehensive HR management and organizational skills.',
    category: 'hr',
    type: 'full-course',
    level: 'diploma',
    duration: '18 months',
    image: '/courses/hr/hr_2.png',
    link: '/human-resources-courses/bsb50320-diploma-of-human-resource-management',
    tags: ['hr', 'human-resources', 'diploma', 'organizational'],
  },
  {
    id: 'hr-advanced-diploma',
    title: 'Advanced Diploma of Human Resource Management',
    description: 'Advanced HR strategy and organizational development skills.',
    category: 'hr',
    type: 'full-course',
    level: 'advanced-diploma',
    duration: '24 months',
    image: '/courses/hr/hr_3.png',
    link: '/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management',
    tags: ['hr', 'human-resources', 'advanced-diploma', 'strategy'],
  },

  // Short Courses - Hospitality
  {
    id: 'barista',
    title: 'One-Day Barista Class ☕️',
    description:
      'Learn to make the perfect espresso, froth silky milk, and create stunning latte art in just one day!',
    category: 'short-course-hospitality',
    type: 'short-course',
    duration: '4 hours',
    price: 150,
    image: '/short-course/barista_1.jpg',
    link: '/short-courses/barista',
    tags: ['barista', 'coffee', 'latte-art', 'one-day', 'hands-on'],
  },
  {
    id: 'wine',
    title: 'Wine Appreciation Course 🍷',
    description:
      'Learn about wine varieties, tasting techniques, and food pairing.',
    category: 'short-course-hospitality',
    type: 'short-course',
    duration: '3 hours',
    price: 120,
    image: '/short-course/wine_1.jpg',
    link: '/short-courses/wine',
    tags: ['wine', 'appreciation', 'tasting', 'food-pairing'],
  },
  {
    id: 'dessert-plating',
    title: 'Fine Dining Dessert Plating Course 🍰',
    description:
      'Master the art of professional dessert plating and presentation.',
    category: 'short-course-hospitality',
    type: 'short-course',
    duration: '4 hours',
    price: 140,
    image: '/short-course/fine_dining_dessert_1.jpg',
    link: '/short-courses/dessert',
    tags: ['dessert', 'plating', 'fine-dining', 'presentation'],
  },
  {
    id: 'cocktail',
    title: 'Cocktail-Making and Mixology Course 🍹',
    description: 'Master the art of cocktail making and mixology techniques.',
    category: 'short-course-hospitality',
    type: 'short-course',
    duration: '3 hours',
    price: 130,
    image: '/short-course/cocktail_1.png',
    link: '/short-courses/mixology',
    tags: ['cocktail', 'mixology', 'bartending', 'drinks'],
  },
  {
    id: 'fss',
    title: 'NSW Food Safety Supervisor Certificate',
    description: 'Become a certified Food Safety Supervisor in NSW.',
    category: 'short-course-hospitality',
    type: 'short-course',
    duration: '1 day',
    price: 100,
    image: '/home/Cookery.png',
    link: '/cookery-and-hospitality-courses/fss',
    tags: ['food-safety', 'supervisor', 'certification', 'nsw'],
  },

  // Short Courses - Cooking & Baking
  {
    id: 'french-cakes',
    title: 'Classic French Cakes Masterclass 🍰',
    description:
      'Learn to create stunning French pastries including Opera Cake and Lemon Petit Tarts.',
    category: 'short-course-cooking',
    type: 'short-course',
    duration: '5.5 hours',
    price: 180,
    image: '/short-course/classic_french_cakes_2.png',
    link: '/short-courses/cake',
    tags: ['french-cakes', 'pastry', 'baking', 'masterclass'],
  },
  {
    id: 'sourdough',
    title: 'Sourdough & Focaccia Masterclass 🥖✨',
    description:
      'Discover the art of artisan breadmaking with a medal-winning sourdough expert.',
    category: 'short-course-cooking',
    type: 'short-course',
    duration: '5.5 hours',
    price: 160,
    image: '/short-course/sourdough_1.jpg',
    link: '/short-courses/focaccia',
    tags: ['sourdough', 'bread', 'focaccia', 'artisan', 'baking'],
  },
  {
    id: 'french-pastries',
    title: 'Classic French Pastries Course 🥐',
    description: 'Learn to create authentic French pastries and viennoiserie.',
    category: 'short-course-cooking',
    type: 'short-course',
    duration: '6 hours',
    price: 190,
    image: '/short-course/classic_french_pastries_1.png',
    link: '/short-courses/pastries',
    tags: ['french-pastries', 'viennoiserie', 'baking', 'authentic'],
  },
  {
    id: 'macaron',
    title: 'French Petit Four Course (Macaroon) 🍪',
    description: 'Learn to make perfect French macarons and petit fours.',
    category: 'short-course-cooking',
    type: 'short-course',
    duration: '4 hours',
    price: 150,
    image: '/short-course/macaroon_1.png',
    link: '/short-courses/petit',
    tags: ['macaron', 'petit-four', 'french', 'delicate'],
  },
  {
    id: 'vegan',
    title: 'Vegan and Vegetarian Course 🌱',
    description: 'Explore plant-based cooking techniques and recipes.',
    category: 'short-course-cooking',
    type: 'short-course',
    duration: '4 hours',
    price: 140,
    image: '/short-course/vegan_1.png',
    link: '/short-courses/vegan',
    tags: ['vegan', 'vegetarian', 'plant-based', 'healthy'],
  },
  {
    id: 'chocolate',
    title: 'Chocolate Class – Xmas 🍫',
    description: 'Create festive chocolate treats and holiday confections.',
    category: 'short-course-cooking',
    type: 'short-course',
    duration: '3 hours',
    price: 120,
    image: '/short-course/xmas_1.png',
    link: '/short-courses/chocolate',
    tags: ['chocolate', 'christmas', 'festive', 'holiday'],
  },
];

export const courseCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'cookery', label: 'Cookery' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'fitness', label: 'Fitness & Sports' },
  { value: 'business', label: 'Business' },
  { value: 'project', label: 'Project Management' },
  { value: 'hr', label: 'HR Management' },
  { value: 'short-course-hospitality', label: 'Short Courses - Hospitality' },
  { value: 'short-course-cooking', label: 'Short Courses - Cooking & Baking' },
  { value: 'short-course-online', label: 'Short Courses - Online' },
];

export const courseTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'full-course', label: 'Full Courses' },
  { value: 'short-course', label: 'Short Courses' },
];

export const courseLevels = [
  { value: 'all', label: 'All Levels' },
  { value: 'certificate-iii', label: 'Certificate III' },
  { value: 'certificate-iv', label: 'Certificate IV' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'advanced-diploma', label: 'Advanced Diploma' },
  { value: 'graduate-diploma', label: 'Graduate Diploma' },
];
