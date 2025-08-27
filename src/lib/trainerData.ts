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

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'David Oh',
    email: 'david@abm.edu.au',
    image: '/trainers/david.png',
    courseCategory: 'cookery',
  },
  {
    id: '3',
    name: 'Patray Moncacha',
    email: 'pmoncacha@abm.edu.au',
    image: '/trainers/patray.png',
    courseCategory: 'cookery',
  },
  {
    id: '4',
    name: 'Edoardo Scepi',
    email: 'escepi@abm.edu.au',
    image: '/trainers/edoardo.png',
    courseCategory: 'cookery',
  },
  {
    id: '5',
    name: 'Sepehr Salmanikhosh ',
    email: 'sepehr@abm.edu.au',
    image: '/trainers/sepehr.png',
    courseCategory: 'cookery',
  },
  {
    id: '6',
    name: 'Carl Shi',
    email: 'cshi@abm.edu.au',
    image: '/trainers/carl.png',
    courseCategory: 'cookery',
  },
  {
    id: '7',
    name: 'Phillip Nguyen',
    email: 'pnguyen@abm.edu.au',
    image: '/trainers/phillip.png',
    courseCategory: 'cookery',
  },
  {
    id: '8',
    name: 'Ross Annas',
    email: 'rannas@abm.edu.au',
    image: '/trainers/ross.png',
    courseCategory: 'cookery',
  },
  {
    id: '2',
    name: 'Spiros Roumbas ',
    email: 'sroumbas@abm.edu.au',
    image: '/trainers/spiros.png',
    courseCategory: 'project',
  },
  {
    id: '9',
    name: 'Josep Gabernet',
    email: 'jgabernet@abm.edu.au',
    image: '/trainers/josep.png',
    courseCategory: 'hr',
  },
  {
    id: '10',
    name: 'Erwan Tjan',
    email: 'erwan@abm.edu.au',
    image: '/trainers/erwan.png',
    courseCategory: 'business',
  },
  {
    id: '11',
    name: 'Nadezhda Solomahina',
    email: 'nsolomahina@abm.edu.au',
    image: '/trainers/nadezhda.png',
    courseCategory: 'business',
  },
  {
    id: '12',
    name: 'Jonathan Ray',
    email: 'jray@abm.edu.au',
    image: '/trainers/jonathon.png',
    courseCategory: 'fitness',
  },
  {
    id: '13',
    name: 'Brayden',
    email: 'bsaintbarry@abm.edu.au',
    image: '/trainers/brayden.png',
    courseCategory: 'fitness',
  },
];

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

export function getTrainersByCategory(category: string): Trainer[] {
  if (category === 'all') {
    return trainers;
  }
  return trainers.filter((trainer) => trainer.courseCategory === category);
}

export function getAllCategories(): string[] {
  return [...new Set(trainers.map((trainer) => trainer.courseCategory))];
}
