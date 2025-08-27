export const cookeryMenu = [
  {
    title: 'Certificate IV in Kitchen Management',
    href: '/cookery-and-hospitality-courses/sit40521-certificate-iv-in-kitchen-management',
  },
  {
    title: 'Industry Placement',
    href: '/cookery-and-hospitality-courses/industry-placement-work-placement',
  },
  {
    title: 'NSW Food Safety Supervisor',
    href: '/cookery-and-hospitality-courses/fss',
  },
];

export const hospitalityMenu = [
  {
    title: 'Diploma of hospitality management',
    href: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
  },
  {
    title: 'Advanced Diploma of Hospitality Management',
    href: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
  },
  {
    title: 'Industry Placement',
    href: '/cookery-and-hospitality-courses/industry-placement-hospitality-management',
  },
  {
    title: 'NSW Food Safety Supervisor',
    href: '/cookery-and-hospitality-courses/fss',
  },
];

export const fitnessMenu = [
  {
    title: 'Certificate III in Fitness',
    href: '/fitness-instructor-personal-trainer-courses/sis30321-certificate-iii-in-fitness',
  },
  {
    title: 'Certificate IV in Fitness',
    href: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness',
  },
  {
    title: 'Certificate III in Fitness',
    href: '/fitness-instructor-personal-trainer-courses/certificate-iii-in-fitness-fast-track',
  },
  {
    title: 'Certificate IV in Fitness',
    href: '/fitness-instructor-personal-trainer-courses/certificate-iv-in-fitness-fast-track',
  },
];

export const businessMenu = [
  {
    title: 'Certificate IV in Business',
    href: '/business-and-management-courses/business1/',
  },
  {
    title: 'Diploma of Business',
    href: '/business-and-management-courses/business2/',
  },
  {
    title: 'Advanced Diploma of Business',
    href: '/business-and-management-courses/business3/',
  },
  {
    title: 'Graduate Diploma of Management (Learning)',
    href: '/business-and-management-courses/business4/',
  },
];

export const projectMenu = [
  {
    title: 'Certificate IV in Business',
    href: '/project-and-program-management-courses/project1/',
  },
  {
    title: 'Diploma of Business',
    href: '/project-and-program-management-courses/project2/',
  },
  {
    title: 'Advanced Diploma of Business',
    href: '/project-and-program-management-courses/project3/',
  },
];

export const hrMenu = [
  {
    title: 'Certificate IV in Human Resource Management',
    href: '/human-resources-courses/hr1/',
  },
  {
    title: 'Diploma of Human Resource Management',
    href: '/human-resources-courses/hr2/',
  },
  {
    title: 'Advanced Diploma of Human Resource Management',
    href: '/human-resources-courses/hr3/',
  },
];

export const healthMenu = [
  {
    title: 'Certificate III in Health Services Assistance',
    href: '/health-and-wellness-courses/hlt33115-certificate-iii-in-health-services-assistance',
  },
];

export const shortCourseMenu = [
  {
    title: 'Hospitality',
    href: '/short-courses/hospitality',
    items: [
      {
        title: 'Barista Course',
        href: '/short-courses/barista',
      },
      {
        title: 'Wine Course',
        href: '/short-courses/wine',
      },
      {
        title: 'Fine Dining Dessert Plating Course',
        href: '/short-courses/dessert',
      },
      {
        title: 'Cocktail-Making and Mixology Course',
        href: '/short-courses/mixology',
      },
      {
        title: 'NSW Food Safety Supervisor Certificate',
        href: '/cookery-and-hospitality-courses/fss',
      },
    ],
  },
  {
    title: 'Cooking & Baking',
    href: '/short-courses/cooking-baking',
    items: [
      {
        title: 'Classic French Cakes Course',
        href: '/short-courses/cake',
      },
      {
        title: 'Sourdough and Focaccia Course',
        href: '/short-courses/focaccia',
      },
      {
        title: 'Classic French Pastries Course',
        href: '/short-courses/pastries',
      },
      {
        title: 'French Petit Four Course (Macaroon)',
        href: '/short-courses/petit',
      },
      {
        title: 'Vegan and Vegetarian Course',
        href: '/short-courses/vegan',
      },
      {
        title: 'Chocolate Class – Xmas',
        href: '/short-courses/chocolate',
      },
    ],
  },
  {
    title: 'Online Courses',
    href: '/short-courses/online',
    items: [
      {
        title: 'Introduction to HTML, CSS, and Basic Web Design',
        href: 'https://www.openlearning.com/abm-further-education/courses/introduction-to-html-css-and-basic-web-design/?cl=1',
      },
      {
        title: 'Advanced Course: Building a Portfolio Website',
        href: 'https://www.openlearning.com/abm-further-education/courses/advanced-course-building-a-portfolio-website/?cl=1',
      },
    ],
  },
];

export const studyWithUsMenu = [
  {
    title: 'Student Insights',
    href: '/abm-student-insights',
  },
  {
    title: 'Academic Calendar',
    href: '/academic-calendar',
  },
  {
    title: 'Timetable',
    href: '/abm-further-education-timetable-and-sessions',
  },
  {
    title: 'Fees & Payment',
    href: '/abm-further-education-fee-schedule-2025',
  },
  {
    title: 'Entry Requirements',
    href: '/course-entry-requirement',
  },
  {
    title: 'Get USI',
    href: '/get-a-usi',
  },
  {
    title: 'Enrol Now',
    href: 'https://form.jotform.com/ABMonlineforms/abm-further-education-application-f',
  },
  {
    title: 'Higher Education Pathway',
    href: '/higher-education-pathway',
  },
  {
    title: 'Study Tour Programs',
    href: '/abm-study-tour-programs',
  },
];

export const currentStudentsMenu = [
  {
    title: 'Moodle Login',
    href: 'https://moodle.abm.edu.au/moodle/login/index.php',
  },
  {
    title: 'Student Portal',
    href: 'https://www.jotform.com/app/abm-further-education/student',
  },
];

// 메뉴 구조 데이터
export interface MenuItem {
  titleKey?: string;
  title: string;
  href: string;
  items?: MenuItem[];
}

export interface MenuSection {
  titleKey: string;
  href: string;
  subMenu?: {
    titleKey: string;
    href: string;
    items: MenuItem[];
  }[];
}

export const MENU_STRUCTURE: MenuSection[] = [
  {
    titleKey: 'menu.courses',
    href: '/courses',
    subMenu: [
      {
        titleKey: 'subMenu.cookery',
        href: '/cookery-and-hospitality-courses',
        items: [
          {
            title: 'Certificate IV in Kitchen Management',
            href: '/cookery-and-hospitality-courses/sit40521-certificate-iv-in-kitchen-management',
          },
          {
            title: 'Industry Placement',
            href: '/cookery-and-hospitality-courses/industry-placement-work-placement',
          },
          {
            title: 'NSW Food Safety Supervisor',
            href: '/cookery-and-hospitality-courses/fss',
          },
        ],
      },
      {
        titleKey: 'subMenu.hospitality',
        href: '/cookery-and-hospitality-courses',
        items: [
          {
            title: 'Diploma of Hospitality Management',
            href: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
          },
          {
            title: 'Advanced Diploma of Hospitality Management',
            href: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
          },
          {
            title: 'Industry Placement (Hospitality Management)',
            href: '/cookery-and-hospitality-courses/industry-placement-hospitality-management',
          },
          {
            title: 'NSW Food Safety Supervisor',
            href: '/cookery-and-hospitality-courses/fss',
          },
        ],
      },
      {
        titleKey: 'subMenu.fitnessAndSport',
        href: '/fitness-instructor-personal-trainer-courses',
        items: [
          {
            title: 'Certificate III in Fitness',
            href: '/fitness-instructor-personal-trainer-courses/sis30321-certificate-iii-in-fitness',
          },
          {
            title: 'Certificate IV in Fitness',
            href: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness',
          },
          {
            title: 'Diploma of Sport',
            href: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
          },
          {
            title: 'Certificate III in Fitness (Fast Track)',
            href: '/fitness-instructor-personal-trainer-courses/certificate-iii-in-fitness-fast-track',
          },
          {
            title: 'Certificate IV in Fitness (Fast Track)',
            href: '/fitness-instructor-personal-trainer-courses/certificate-iv-in-fitness-fast-track',
          },
        ],
      },
      {
        titleKey: 'subMenu.business',
        href: '/business-and-management-courses',
        items: [
          {
            title: 'Certificate IV in Business',
            href: '/business-and-management-courses/bsb40120-certificate-iv-in-business',
          },
          {
            title: 'Diploma of Business',
            href: '/business-and-management-courses/bsb50120-diploma-of-business',
          },
          {
            title: 'Advanced Diploma of Business',
            href: '/business-and-management-courses/bsb60120-advanced-diploma-of-business',
          },
          {
            title: 'Graduate Diploma of Management (Learning)',
            href: '/business-and-management-courses/bsb80120-graduate-diploma-of-management',
          },
        ],
      },
      {
        titleKey: 'subMenu.projectAndProgram',
        href: '/project-and-program-management-courses',
        items: [
          {
            title: 'Certificate IV in Project Management Practice',
            href: '/project-and-program-management-courses/bsb40920-certificate-iv-in-project-management-practice',
          },
          {
            title: 'Diploma of Project Management Practice',
            href: '/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice',
          },
          {
            title: 'Advanced Diploma of Program Management',
            href: '/project-and-program-management-courses/bsb60720-advanced-diploma-of-program-management',
          },
        ],
      },
      {
        titleKey: 'subMenu.humanResource',
        href: '/human-resources-courses',
        items: [
          {
            title: 'Certificate IV in Human Resource Management',
            href: '/human-resources-courses/bsb40420-certificate-iv-in-human-resource-management',
          },
          {
            title: 'Diploma of Human Resource Management',
            href: '/human-resources-courses/bsb50320-diploma-of-human-resource-management',
          },
          {
            title: 'Advanced Diploma of Human Resource Management',
            href: '/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management',
          },
        ],
      },
      {
        titleKey: 'subMenu.health',
        href: '/health-and-wellness-courses',
        items: [
          {
            title: 'Certificate III in Health Services Assistance',
            href: '/health-and-wellness-courses/hlt33115-certificate-iii-in-health-services-assistance',
          },
        ],
      },
    ],
  },
  {
    titleKey: 'menu.shortCourses',
    href: '/short-courses',
    subMenu: [
      {
        titleKey: 'subMenu.hospitality',
        href: '/short-courses',
        items: [
          {
            titleKey: 'barista',
            title: 'Barista Course',
            href: '/short-courses/barista',
          },
          {
            titleKey: 'wine',
            title: 'Wine Course',
            href: '/short-courses/wine',
          },
          {
            titleKey: 'fineDessert',
            title: 'Fine Dining Dessert Plating Course',
            href: '/short-courses/dessert',
          },
          {
            titleKey: 'cocktail',
            title: 'Cocktail-Making and Mixology Course',
            href: '/short-courses/mixology',
          },
          {
            titleKey: 'foodSafety',
            title: 'NSW Food Safety Supervisor Certificate',
            href: '/cookery-and-hospitality-courses/fss',
          },
        ],
      },
      {
        titleKey: 'subMenu.cookingAndBaking',
        href: '/short-courses',
        items: [
          {
            titleKey: 'frenchCakes',
            title: 'Classic French Cakes Course',
            href: '/short-courses/cake',
          },
          {
            titleKey: 'sourdough',
            title: 'Sourdough and Focaccia Course',
            href: '/short-courses/focaccia',
          },
          {
            titleKey: 'frenchPastries',
            title: 'Classic French Pastries Course',
            href: '/short-courses/pastries',
          },
          {
            titleKey: 'petitFour',
            title: 'French Petit Four Course (Macaroon)',
            href: '/short-courses/petit',
          },
          {
            titleKey: 'vegan',
            title: 'Vegan and Vegetarian Course',
            href: '/short-courses/vegan',
          },
          {
            titleKey: 'chocolate',
            title: 'Chocolate Class – Xmas',
            href: '/short-courses/chocolate',
          },
        ],
      },
      {
        titleKey: 'subMenu.onlineCourses',
        href: '/short-courses',
        items: [
          {
            titleKey: 'htmlIntro',
            title: 'Introduction to HTML, CSS, and Basic Web Design',
            href: 'https://www.openlearning.com/abm-further-education/courses/introduction-to-html-css-and-basic-web-design/?cl=1',
          },
          {
            titleKey: 'portfolioWebsite',
            title: 'Advanced Course: Building a Portfolio Website',
            href: 'https://www.openlearning.com/abm-further-education/courses/introduction-to-html-css-and-basic-web-design/?cl=1',
          },
        ],
      },
    ],
  },
  {
    titleKey: 'menu.studyWithUs',
    href: '/study-with-us',
    subMenu: [
      {
        titleKey: 'menu.studyWithUs',
        href: '/study-with-us',
        items: [
          {
            title: 'studentInsights', // 이것들은 tStudy 함수를 사용하므로 key만 저장
            href: '/abm-student-insights',
          },
          {
            title: 'academicCalendar',
            href: '/academic-calendar',
          },
          {
            title: 'timetable',
            href: '/abm-further-education-timetable-and-sessions',
          },
          {
            title: 'feesAndPayment',
            href: '/abm-further-education-fee-schedule-2025',
          },
          {
            title: 'entryRequirements',
            href: '/course-entry-requirement',
          },
          {
            title: 'getUSI',
            href: '/get-a-usi',
          },
          {
            title: 'enrolNow',
            href: 'https://form.jotform.com/ABMonlineforms/abm-further-education-application-f',
          },
          {
            title: 'higherEducationPathway',
            href: '/higher-education-pathway',
          },
          {
            title: 'studyTourPrograms',
            href: '/abm-study-tour-programs',
          },
        ],
      },
    ],
  },
  {
    titleKey: 'menu.contact',
    href: '/contact',
  },
];
