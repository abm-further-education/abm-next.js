import {
  CourseDetailInfo,
  DescriptionItem,
} from '@/domains/courses/components/CourseDetail';
import { CourseInformationInfo } from '@/domains/courses/components/CourseInformation';

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
    title: 'Certificate III in Sport',
    href: '/fitness-instructor-personal-trainer-courses/certificate-iii-in-sport-fast-track',
  },
  {
    title: 'Certificate IV in Sport',
    href: '/fitness-instructor-personal-trainer-courses/certificate-iv-in-sport-fast-track',
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
    title: 'Graduate Diploma of Management',
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

// 뉴스 데이터
export interface NewsItem {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  content?: string;
  link?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    image: '/home/home.png',
    category: 'Event',
    date: '20/08/2024',
    title: "ABM's Graduation Ceremony Highlights",
    description:
      'A special day celebrating our graduates and their achievements in hospitality and cookery programs.',
    link: '/',
  },
  {
    id: 2,
    image: '/home/home.png',
    category: 'Course Launch',
    date: '15/07/2024',
    title: 'New Advanced Diploma Program Launched',
    description:
      'Introducing our latest Advanced Diploma of Hospitality Management with enhanced industry partnerships.',
    link: '/',
  },
  {
    id: 3,
    image: '/home/home.png',
    category: 'Achievement',
    date: '10/06/2024',
    title: 'Student Success Stories',
    description:
      'Meet our outstanding graduates who are now working in top hotels and restaurants across Sydney.',
    link: '/',
  },
  {
    id: 4,
    image: '/home/home.png',
    category: 'Partnership',
    date: '25/05/2024',
    title: 'Industry Partnership Expansion',
    description:
      'ABM Further Education announces new partnerships with leading hospitality venues for work placements.',
    link: '/',
  },
  {
    id: 5,
    image: '/home/home.png',
    category: 'Workshop',
    date: '12/04/2024',
    title: 'Professional Development Workshop',
    description:
      'Join our upcoming workshop on modern cooking techniques and hospitality management trends.',
    link: '/',
  },
  {
    id: 6,
    image: '/home/home.png',
    category: 'Enrollment',
    date: '01/03/2024',
    title: 'Term 2 Enrollments Now Open',
    description:
      'Secure your place in our premium cookery and hospitality programs starting this term.',
    link: '/',
  },
];

// 코스별 상세 정보 데이터
export const courseDetails: { [key: string]: CourseDetailInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'This qualification will be delivered over 78 weeks, including 60 weeks of training and assessment spread over 6 terms of 10 weeks each.',
    },
    workPlacement: {
      title: 'Work Placement',
      description: '360 hours',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: ['Chef', 'Chef de partie'],
    },
    pathways: {
      title: 'Pathways to Further Study / Career Opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the SIT50422 DIPLOMA OF HOSPITALITY MANAGEMENT',
        'Possible job titles include:',
        'Chef',
        'Chef de partie',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'sit50422-diploma-of-hospitality-management': {
    courseDuration1: {
      title: 'Course Duration – Packaged with Kitchen Management Course',
      description: [
        'This course has a duration of 26 weeks.\n\nStudents completed a SIT40521 Certificate IV in Kitchen Management with ABM Further Education will receive 20 credit transfer units. This will reduce the course SIT50422 Diploma of Hospitality Management to 2 terms of study (20 weeks excluding holiday break).\nEach term consists of 10 weeks of training and assessments, followed by a 3-week holiday.',
      ] as DescriptionItem[],
    },
    courseDuration2: {
      title: 'Course Duration – Food & Beverage Stream',
      description:
        'The qualification is delivered over 78 weeks comprising of:\nSix(6) terms of 10 weeks each (60 weeks total) of teaching period.\nHoliday breaks amounting to 18 weeks (as specified in the timetable)',
    },
    courseStructure1: {
      title:
        'Course Structure – Packaged with Certificate IV in Kitchen Management',
      description: [
        'It is applicable ONLY for those who completed SIT40521 Cert Iv Kitchen Management with ABM Further education\nWork placement: N/A\nCourse duration: 26 weeks (2 terms)\n\n',
        '**Term1**',
        {
          type: 'table' as const,
          headers: ['No of weeks', 'Unit code and title'],
          rows: [
            ['3 weeks', 'SITXFIN010 Prepare and monitor budgets'],
            [
              '2 weeks',
              'SITXWHS006 Identify hazards, assess and control safety risks',
            ],
            ['3 weeks', 'SITXINV008 Control stock'],
            [
              '2 weeks',
              'SITXMGT005 Establish and conduct business relationships',
            ],
          ],
        },
        '**3 weeks break**',
        '\n**Term2**',
        {
          type: 'table' as const,
          headers: ['No of weeks', 'Unit code and title'],
          rows: [
            [
              '3 weeks',
              'SITXGLC002 Identify and manage legal risks and comply with law',
            ],
            ['2 weeks', 'SITXCCS015 Enhance customer service experiences'],
            ['3 weeks', 'SITXCCS010 Provide visitor information'],
            [
              '2 weeks',
              'SITXCCS016 Develop and manage quality customer service practices',
            ],
          ],
        },
      ],
    },
    courseStructure2: {
      title: 'Course Structure – Standalone Food & Beverage Stream',
      description: [
        {
          type: 'table' as const,
          headers: ['Number of units', 'Code', 'Title', 'Core/Elective'],
          rows: [
            ['1', 'SITXCCS015', 'Enhance customer service experiences', 'Core'],
            [
              '2',
              'SITXCCS016',
              'Develop and manage quality customer service practices',
              'Core',
            ],
            ['3', 'SITXCOM010', 'Manage conflict', 'Core'],
            ['4', 'SITXFIN009', 'Manage finances within a budget', 'Core'],
            ['5', 'SITXFIN010', 'Prepare and monitor budgets', 'Core'],
            [
              '6',
              'SITXGLC002',
              'Identify and manage legal risks and comply with law',
              'Core',
            ],
            ['7', 'SITXHRM008', 'Roster staff', 'Core'],
            ['8', 'SITXHRM009', 'Lead and manage people', 'Core'],
            ['9', 'SITXMGT004', 'Monitor work operations', 'Core'],
            [
              '10',
              'SITXMGT005',
              'Establish and conduct business relationships',
              'Core',
            ],
            [
              '11',
              'SITXWHS007',
              'Implement and monitor work health and safety practices',
              'Core',
            ],
            [
              '12',
              'SITXFSA005',
              'Use hygienic practices for food safety',
              'Elective Group A',
            ],
            [
              '13',
              'SITHIND008',
              'Work effectively in the Hospitality service',
              'Elective Group B',
            ],
            ['14', 'SITXHRM010', 'Recruit, select and induct staff', 'Group D'],
            ['15', 'SITHFAB030*', 'Prepare and serve cocktails', 'Group C'],
            ['16', 'SITXINV008', 'Control stock', 'Group C'],
            [
              '17',
              'SITHKOP014',
              'Plan catering for events or functions',
              'Group C',
            ],
            ['18', 'BSBCMM411', 'Make presentations', 'Group D'],
            [
              '19',
              'BSBSUS511',
              'Develop workplace policies and procedures for sustainability',
              'Group D',
            ],
            ['20', 'BSBTWK501', 'Lead diversity and inclusion', 'Group D'],
            [
              '21',
              'SITHFAB021',
              'Provide responsible service of alcohol',
              'Group C',
            ],
            ['22', 'SITHFAB023', 'Operate a bar', 'Group C'],
            [
              '23',
              'SITXFSA006',
              'Participate in safe food handling practices',
              'Group C',
            ],
            [
              '24',
              'SITXFSA008*',
              'Develop and implement a food safety program',
              'Group C',
            ],
            [
              '25',
              'SITHFAB025',
              'Prepare and serve espresso coffee',
              'Group C',
            ],
            [
              '26',
              'SITHIND006',
              'Source and use information on the hospitality industry',
              'Group C',
            ],
            ['27', 'SITXCCS010', 'Provide visitor information', 'Group C'],
            ['28', 'SITXCCS012', 'Provide lost and found services', 'Group C'],
          ],
        },
      ],
    },
    workPlacement: {
      title: 'Work Placement - Food and Beverage Stream only',
      description: [
        '285 hours (* not applicable when it is packaged with Certificate IV in Kitchen Management course)',
        '\n**Workplace Component**',
        'It is important to note a workplace unit forms part of this qualification and learners are required to complete tasks outlined in the training package elements and performance criteria.',
        '\nWorkplace logbook will be provided by ABM and students are required to maintain on a daily basis a record of activities / tasks performed during work placement This will be monitored by ABM Workplace assessor during scheduled site visits. Daily activities / logbook entries are to be signed by the workplace supervisor each day.',
        {
          type: 'table' as const,
          headers: ['Term', 'Week number', 'Hours'],
          rows: [
            [
              'Term 5',
              'Week 1-10 SITHIND008 Work effectively in the hospitality service – 30shifts at 5hours from a total 57 shifts',
              '150',
            ],
            [
              'Term 6',
              'Week 1-9 SITHIND008 Work effectively in the hospitality service – 27shifts at 5hours from a total 57 shifts',
              '135',
            ],
            ['TOTAL Minimum hours', '', '285'],
          ],
        },
        '*Please note Hospitality shifts may vary in time due to business needs. ABM has allocated approximately 5 hours per shift based on industry standards. ABM understands some shifts may be slightly shorter or longer based on individual business needs.&nbsp;Students may need to do additional service periods to reach the 285 workplace hours.\n\n',
        '**Work placement arrangements**',
        "- Students can choose their work placement locations. However, it will be verified by the Trainer/Assessors to ensure it has all the facilities and equipment's that meets the requirements of SITHIND008 Work effectively in the hospitality service.",
        '- Students would be supervised/assessed while on placement by the ABM Trainer/Assessors.',
        '- ABM would organise work-placement locations if students are unable to manage by themselves.',
        '- Work-placement agreement needs to be filled by the relevant parties. ABM would provide the agreement to the students.',
        '- Trainers and Assessors would instruct the students on how to complete the logbook.',
        '- ABM may engage a third party to manage work-placement for the students which includes, visiting the work placement venues, organising work placement locations for the students and instruct students to fill the logbook as per requirement.',
      ],
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.\n\n',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.\n\n',
        "Where this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        'Where ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.\n\n',
        'Where ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Hotel or Motel Manager',
        'Restaurant Manager',
        'Front Office Manager',
        'Café Manager',
        'Event Coordinator',
        'Housekeeping Supervisor',
        'Food and Beverage Supervisor',
        'Banquet Supervisor',
        'Duty Manager',
        'Bar Manager',
        'Resort Manager',
        'Catering Manager',
        'Operations Supervisor',
        'Guest Services Manager',
        'Conference and Events Coordinator',
      ],
    },
    pathways: {
      title: 'Pathways to Further Study / Career Opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the ',
        {
          type: 'link',
          text: 'SIT60322 – Advanced Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'advanced-diploma-of-hospitality-management': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Advanced Diploma of Hospitality Management is offered over  104 weeks, including 80 weeks of training and assessment spread over 8 terms of 10 weeks each and 24 weeks of holidays.',
    },
    courseStructure1: {
      title:
        'Course Structure – Packaged with Certificate IV in Kitchen Management & Diploma of Hospitality Management',
      description: [
        'Students who have completed both qualifications by ABM Further Education are eligible for 25 Credit Transfer',
        '- SIT40521 Cetificate IV in Kitchen Manangement',
        '- SIT50422 Diploma of Hospitality Management',
        'Advance Diploma of Hospitality Management course can be completed within two term (26 weeks)',
        'The allocation of units are as below:',
        '**Term1**',
        {
          type: 'table' as const,
          headers: ['No of weeks', 'Unit code and title'],
          rows: [
            ['3 weeks', 'BSBOPS601 Develop and implement business plans'],
            ['2 weeks', 'BSBFIN601 Manage organisational finances'],
            ['3 weeks', 'SITHFAB027* Serve food and beverage'],
            [
              '2 weeks',
              'SITHFAB024* Prepare and serve non-alcoholic beverages',
            ],
          ],
        },
        '\n**Term2**',
        {
          type: 'table' as const,
          headers: ['No of weeks', 'Unit code and title'],
          rows: [
            ['3 weeks', 'SITXFIN011 Manage physical assets'],
            ['2 weeks', 'SITXHRM012 Monitor staff performance'],
            [
              '3 weeks',
              'SITXMPR014 Develop and implement marketing strategies',
            ],
            [
              '2 weeks',
              'SITXWHS008 Establish and maintain a work health and safety system',
            ],
          ],
        },
        '**Course duration: 26 weeks (2 terms)**',
      ],
    },
    courseStructure2: {
      title:
        'Course Structure – Packaged with Diploma of Hospitality Management',
      description: [
        {
          type: 'table' as const,
          headers: ['No of Units', 'Units', 'Core/Electives'],
          rows: [
            ['1', 'BSBFIN601 Manage organisational finances', 'Core'],
            ['2', 'BSBOPS601 Develop and implement business plans', 'Core'],
            ['3', 'SITXFIN011 Manage physical assets', 'Core'],
            ['4', 'SITXHRM012 Monitor staff performance', 'Core'],
            [
              '5',
              'SITXMPR014 Develop and implement marketing strategies',
              'Core',
            ],
            [
              '6',
              'SITXWHS008 Establish and maintain a work health and safety system',
              'Core',
            ],
            ['7', 'SITHFAB027*, Serve food and beverage', 'Electives- Group C'],
            [
              '8',
              'SITHFAB024*, Prepare and serve non-alcoholic beverages',
              'Electives- Group C',
            ],
          ],
        },
        '**Students who have completed SIT50422 in ABM further education are eligible for 25 credit Transfers, and can complete the course in two terms (26 weeks).**',
        '\n**Term1**',
        {
          type: 'table' as const,
          headers: ['No of weeks', 'Unit code and title'],
          rows: [
            ['3 weeks', 'BSBOPS601 Develop and implement business plans'],
            ['2 weeks', 'BSBFIN601 Manage organisational finances'],
            ['3 weeks', 'SITHFAB027* Serve food and beverage'],
            [
              '2 weeks',
              'SITHFAB024* Prepare and serve non-alcoholic beverages',
            ],
          ],
        },
        '\n**Term2**',
        {
          type: 'table' as const,
          headers: ['No of weeks', 'Unit code and title'],
          rows: [
            ['3 weeks', 'SITXFIN011 Manage physical assets'],
            ['2 weeks', 'SITXHRM012 Monitor staff performance'],
            [
              '3 weeks',
              'SITXMPR014 Develop and implement marketing strategies',
            ],
            [
              '2 weeks',
              'SITXWHS008 Establish and maintain a work health and safety system',
            ],
          ],
        },
      ],
    },
    workPlacement: {
      title: 'Work Placement',
      description: [
        'Stand alone -Advance Diploma of Hospitality Management = 285 hours',
        'Packaged with – Cetificate IV in Kitchen Manangement & Diploma of Hospitality Management = no additional Work component hours',
        'Packaged with – Diploma of Hospitality Management = no additional Work component hours',
      ],
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Hotel or Resort Manager',
        'Restaurant Manager',
        'Event Manager',
        'Front Office Manager',
        'Housekeeping Manager',
        'Catering Manager',
        'Operations Manager',
        'General Manager',
      ],
    },
    pathways: {
      title: 'Pathways to Further Study / Career Opportunities',
      description: [
        'Potential employment options are in any hospitality industry sector as a departmental or small business manager. See also possible job title roles indicated in the qualification description.',
        '\nStudents who complete this course may wish to continue their education into a range of Higher Education qualifications.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description: [
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
      ],
    },
  },
  'sis30321-certificate-iii-in-fitness': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'This course has a duration of 52 weeks consisting of 4 x 10-week terms of training and assessment, each followed by a 3-week holiday break.\n\nEach week of term includes: 2 x 7.5 hour days of face to face instruction + 5 hours of tutorial',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) support',
        '- Assistive Technology',
        '- Additional Tutorials, and / or',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Gym Instructor',
        'Group Fitness Instructor',
        'Fitness Instructor',
      ],
    },
    pathways: {
      title: 'Pathway to further study',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the SIS40221 Certificate IV in Fitness',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'sis40221-certificate-iv-in-fitness': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'This course has a duration of 52 weeks consisting of 4 x 10-week terms of training and assessment, each followed by a 3-week holiday break.\n\nEach week of term includes:\n\n2 x 7.5 hour days of face to face instruction\n5 hours of tutorial',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Personal Trainer',
        'Fitness Instructor (Advanced)',
        'Outdoor Trainer',
        'Corporate or Workplace Trainer',
        'Online Personal Trainer',
        'Fitness Studio Owner/Manager',
      ],
    },
    pathways: {
      title: 'Pathway to further study',
      description: [
        'Students who complete this course may wish to continue their education in the fitness industry with qualifications such as the SIS50122 Diploma of Sport, Aquatics and Recreation Management, SIS50321 Diploma of Sport, SIS50421 Diploma of Outdoor Leadership or continue their education into a range of Higher Education qualifications.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'certificate-iii-in-sport-fast-track': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'Full Time Delivery Schedule – 12 Weeks + Work experience + 1 year gym membership included\nPart Time Delivery Schedule – 24 Weeks + Work experience',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Gym Instructor',
        'Group Fitness Instructor',
        'Fitness Instructor',
      ],
    },
    pathways: {
      title: 'Pathway to further study',
      description: [
        'Students who complete this course may wish to continue their education in the fitness industry with qualifications such as the SIS50122 Diploma of Sport, Aquatics and Recreation Management, SIS50321 Diploma of Sport, SIS50421 Diploma of Outdoor Leadership.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'certificate-iv-in-sport-fast-track': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'Full Time Delivery Schedule – 12 Weeks + Work experience + 1 year gym membership included\nPart Time Delivery Schedule – 24 Weeks + Work experience',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Personal Trainer',
        'Fitness Instructor (Advanced)',
        'Outdoor Trainer',
        'Corporate or Workplace Trainer',
        'Online Personal Trainer',
        'Fitness Studio Owner/Manager',
      ],
    },
    pathways: {
      title: 'Pathway to further study',
      description: [
        'Students who complete this course may wish to continue their education in the fitness industry with qualifications such as the SIS50122 Diploma of Sport, Aquatics and Recreation Management, SIS50321 Diploma of Sport, SIS50421 Diploma of Outdoor Leadership.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb40120-certificate-iv-in-business': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Certificate IV in Business is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms. You will receive an orientation from your trainer within one week of your enrolment.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: ['Administrative Officer', 'Assistant Business Analyst'],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the BSB50120 Diploma of Business.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb50120-diploma-of-business': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Diploma of Business is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms. You will receive an orientation from your trainer within one week of your enrolment.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: ['Business Manager', 'Chief Data Officer'],
    },
    pathways: {
      title: 'Pathways to further study / career opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the BSB60120 Advanced Diploma of Business.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'sis50321-diploma-of-sport': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'This course has a duration of 52 weeks consisting of 4 x 10-week terms of training and assessment, each followed by a 3-week holiday break.\n\nEach week of term includes:\n\n2 x 7.5 hour days of face to face instruction\n5 hours of tutorial',
    },

    jobRoles: {
      title: 'Job roles',
      description: [
        'Sports Trainer',
        'Sports Manager',
        'Personal Trainer',
        'Fitness Trainer',
        'Strength Coach',
        'Coaching staff',
        'General Managers of gymnasiums',
        'Sports Club coaching roles e.g. tennis coach, swimming coach and football coach',
        'Reception/Sales',
      ],
    },
    pathways: {
      title: 'Pathway to further study',
      description: [
        'Students who complete this course may wish to continue their education into a range of Higher Education qualifications.',
      ],
    },
  },
  'bsb60120-advanced-diploma-of-business': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Advanced Diploma of Business is offered over 18 months, equating to 78 weeks, including 18 weeks holidays. This will be split into six 10-week terms. You will receive an orientation from your trainer within one week of your enrolment.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Senior Administrator',
        'Senior Executive',
        'Executive Manager / Director',
      ],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: [
        'Potential employment options are as a manager in a range of industry areas.',
        'Students who complete this course may wish to continue their education into BSB80120 Graduate Diploma of Management (Learning), as well as higher education qualifications in business or management.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about the RTO. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb80120-graduate-diploma-of-management': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Graduate Diploma of Management (Learning) is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms. You will receive an orientation from your trainer within one week of your enrolment.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: ['Business Manager', 'Business Director'],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: [
        'Potential employment options are as a Leader or Manager in organisations where learning is used to build organisational capability in a range of industry areas.',
        'Students who complete this course may wish to continue their education into a range of higher education qualifications in organisational learning and development.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb40920-certificate-iv-in-project-management-practice': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'Duration: 52 Weeks (40 weeks of training and assessment + 12 weeks of holidays)',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Contract Officer',
        'Project Administrator',
        'Quality Officer',
        'Small Business Owner',
      ],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the BSB50820 – Diploma of Project Management',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb50820-diploma-of-project-management-practice': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'Duration: 52 Weeks (40 weeks of training and assessment + 12 weeks of holidays)',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Project Officer',
        'Project Coordinator',
        'Project Manager',
      ],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the BSB60720 Advanced Diploma of Program Management',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb60820-advanced-diploma-of-project-management-practice': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'Duration: 78 weeks (60 weeks of training and assessment + 18 weeks of holidays)',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Program Manager',
        'Senior Project Manager',
        'Program Leader',
        'Program Coordinator',
      ],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: [
        'Students who complete this course may wish to continue their education into a range of Higher Education qualifications.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb40420-certificate-iv-in-human-resource-management': {
    entryRequirement: {
      title: 'Entry Requirement',
      description: [
        'ABM Further Education has the following entry requirements:',
        'Students must be over 18 years of age.',
        'Students must have completed an overseas equivalent of Year 10 or higher qualification.',
        'Students must have either an IELTS score of 5.5 total or above with no band lower than 5.0 or equivalent.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'HR Assistant',
        'Recruitment Consultant',
        'Workplace Health and Safety Officer',
      ],
    },
    packagingRules: {
      title: 'Packaging rules',
      description: [
        'Six (6) core units and six (6) elective units are required for the award of the BSB40420 – Certificate IV in Human Resource Management. Units have been selected in accordance with the packaging rules and are relevant to the work outcome, local industry requirements and qualification level.',
        'The latest release of the qualification and packaging rules can be found at the following link:',
        {
          type: 'link',
          text: 'https://training.gov.au/Training/Details/BSB40420',
          url: 'https://training.gov.au/Training/Details/BSB40420',
        },
      ],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the BSB50320 – Diploma of Human Resource Management',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb50320-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Course Duration',
      description: '52 weeks',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Human Resources Manager',
        'Human Resources Officer',
        'Recruitment Consultant',
      ],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: ['BSB60320 – Advanced Diploma of Human Resource Management'],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb60320-advanced-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Course Duration',
      description: '78 weeks',
    },
    packagingRules: {
      title: 'Packaging rules',
      description: [
        'Six (6) core and eight (4) elective units are required for the award of the BSB60320 – Advanced Diploma of Human Resource Management. Units have been selected in accordance with the packaging rules and are relevant to the work outcome, local industry requirements and qualification level.',
        'The latest release of the qualification and packaging rules can be found at the following link:',
        {
          type: 'link',
          text: 'training.gov.au – BSB60320 – Advanced Diploma of Human Resource Management',
          url: 'https://training.gov.au/Training/Details/BSB60320',
        },
      ],
    },
    whyChooseABM: {
      title: 'Why Choose ABM?',
      description: [
        'Engage in face-to-face learning for a personalized educational journey.',
        'Industry-focused curriculum designed to meet local requirements.',
        'Experienced trainers guide you through real-world scenarios.',
        'Gain internationally recognized qualifications with hands-on training.',
      ],
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
        'The aim of both documents is to provide any support that may be required. This could include:',
        '- Language, Literacy and Numeracy (LLN) supports.',
        '- Assistive Technologys.',
        '- Additional Tutorials, and / ors.',
        '- Other mechanisms, such as assistance in using technology for online delivery components.',
        "\nWhere this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
        '\nWhere ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
        '\nWhere ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Human Resources Practitioner.',
        'Personnel Officer.',
        'Industrial Relations Manager.',
        'Human Resources Development Practitioner.',
        'HR Manager.',
      ],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: ['BSB80120 – Graduate Diploma of Management (Learning)'],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
};

// CourseInformation 데이터 매핑
export const courseInformationData: { [key: string]: CourseInformationInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseCode: 'SIT40521',
    description:
      'Supersedes and is equivalent to SIT40516 – Certificate IV in Commercial Cookery 09/Jun/2022.\n\nThis qualification reflects the role of chefs and cooks who have a supervisory or team leading role in the kitchen. They operate independently or with limited guidance from others and use discretion to solve non-routine problems.\n\nThis qualification provides a pathway to work in organisations such as restaurants, hotels, clubs, pubs, cafes and coffee shops, or to run a small business in these sectors.\n\nThe skills in this qualification must be applied in accordance with Commonwealth and State or Territory legislation, Australian standards and industry codes of practice.\n\nNo occupational licensing, certification or specific legislative requirements apply to this qualification at the time of publication.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'bsb40120-certificate-iv-in-business': {
    courseCode: 'BSB40120',
    description:
      'Students participating in Certificate IV in Business will focus on building effective leadership and problem-solving capabilities crucial to success within a variety of business service job roles. Students pursuing a business-oriented career path will be armed with skills relating towards the completion of specialist and moderately complex administrative or operational tasks that will require advanced self-developmental skills. Upon the completion of Certificate IV in Business, you will be able to implement effective communication and problem-solving skills that will prove to be instrumental to their success within their chosen sector. Students will learn and implement a high level of skills and broad knowledge to apply solutions to a defined range of unpredictable complications and be able to concisely direct a team through any resolution proposed. Individuals with an aptitude for leadership and problem solving will be able to further their skills and learn key communication and problem-solving techniques to enable them to navigate a team through-out the many problems faced within the business environment.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'bsb50120-diploma-of-business': {
    courseCode: 'BSB50120',
    description:
      'This qualification reflects the role of individuals who apply specialised knowledge and skills, together with experience in leadership and management, across a range of enterprise and industry contexts.\n\nIndividuals at this level display initiative and judgement in planning, organising, implementing and monitoring their own workload and the workload of others. They use communication skills to support individuals and teams to meet organisational or enterprise requirements.\n\nThey may plan, design, apply and evaluate solutions to unpredictable problems, and identify, analyse and synthesise information from a variety of sources.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'bsb60120-advanced-diploma-of-business': {
    courseCode: 'BSB60120',
    description:
      'Individuals who seek to improve upon their leadership capabilities, learn key problem-solving procedures and engage in a team environment should look no further than ABM’s Advanced Diploma of Business. Graduates in this course will leave with all the necessary tools required to tackle highly complex tasks in their specialised field of expertise. ABM’s Advanced Diploma of Business will provide students with the key building blocks required for you to specialise and enter the business environment in your chosen field.\n\nThroughout this course, students will engage in exercises aimed to assist in complex problem solving, develop and implement business plans, develop organisational strategies and contribute to strategic workforce planning \n– All Necessary skills to excel in your specialised field of work.\n\nOur Advanced Diploma of Business is suited towards individuals with a passion for leadership, strong problem-solving capabilities and the ability to motivate and guide a team.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'bsb80120-graduate-diploma-of-management': {
    courseCode: 'BSB80120',
    description:
      'This qualification reflects the role of individuals who apply highly specialised management knowledge and skills to lead and influence change in complex and dynamic management environments.\n\nIndividuals at this level use cognitive and communication skills to identify, analyse, synthesise and act on information from a variety of sources, and transfer knowledge and skills to others.\n\nThey apply creative, conceptual and analytical skills to formulate and evaluate complex ideas or initiate change. They demonstrate self-directed application of knowledge and skills, with substantial personal responsibility and autonomy in complex situations.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'industry-placement-work-placement': {
    courseCode: 'SIT40521 + SIT50422',
    description:
      "Are you ready to take your cookery skills to the next level?\n\nAt ABM Further Education, we offer a certificate IV in Kitchen Management that combines academic learning with practical experience. You will have the opportunity to work in real commercial kitchens, such as restaurants, hotels, and aged care facilities, and learn from the best in the industry.\n\nAs part of your course, you will need to complete a mandatory work placement at the end of term 5 and throughout term 6. This is not just a requirement, but a chance for you to apply what you have learned in the classroom and gain valuable insights into the culinary world. You will be able to work the required hours in addition to your student visa requirements, so you don't have to worry about that.\n\nDuring the work placement period, you will need to complete 60 shifts and a total of 30 hours per week. You will also need to complete two units of competency that will help you work effectively as a cook and coordinate cooking operations.",
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face + Industry Placement',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
        {
          type: 'Industry Placement',
          address:
            'Various commercial kitchens, restaurants, hotels, and aged care facilities',
        },
      ],
    },
    additionalInfo: {
      description:
        'We encourage you to find your own work placement that suits your interests and goals, but we are also here to support you if you need any assistance. We have strong connections with various industry partners who are always looking for talented and motivated students like you.\n\nWe believe that this work placement is a key component of your course that will prepare you for the challenges and opportunities of the cookery industry. You will not only improve your culinary skills, but also develop your confidence, communication, and teamwork abilities. This is your chance to shine and show the world what you can do!',
    },
  },
  'industry-placement-hospitality-management': {
    courseCode: 'SIT50422',
    description:
      "Take Your Hospitality Career to New Heights with Practical Experience!\n\nAt ABM Education, we're committed to providing our Hospitality Management students with comprehensive industry experience. Our Work Placement program, consisting of 285 hours, is an essential part of our curriculum, enabling students to gain hands-on experience in real-world hospitality settings.\n\nWorkplace Component:\nIt's important to note that a workplace unit is an integral part of this qualification. Learners are required to complete tasks outlined in the training package elements and performance criteria. ABM Education provides a workplace logbook for students to maintain a daily record of activities and tasks performed during their work placement. This logbook will be closely monitored by ABM's Workplace Assessor during scheduled site visits. Each day, students are required to have their daily activities and logbook entries signed by their workplace supervisor.\n\nThis comprehensive workplace component ensures that students receive practical training aligned with industry standards, preparing them for successful careers in hospitality management.",
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face + Industry Placement',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'Industry Placement',
          address:
            'Various hospitality venues including hotels, restaurants, clubs, pubs, cafes, and function centres',
        },
      ],
    },
    additionalInfo: {
      description:
        "We encourage you to find your own work placement that suits your interests and goals, but we are also here to support you if you need any assistance. We have strong connections with various industry partners who are always looking for talented and motivated students like you.\n\nWe believe that this work placement is a key component of your course that will prepare you for the challenges and opportunities of the hospitality industry. You will not only improve your hospitality management skills, but also develop your confidence, communication, and teamwork abilities. This is your chance to shine and show the world what you can do!\n\nAt ABM Further Education, we are proud of our strong connections with various industry partners who are always on the lookout for talented and motivated students like you. You can work with some of the best names in the hospitality industry, such as:\n\n• Accor (Accor A&R): Leading multinational hospitality group\n• AMA Hospitality: Catering and event management company\n• Bills: Popular restaurant chain serving fresh and delicious food\n• Catering HQ: Food and beverage company operating in various venues\n• Grand Royale: Luxury hotel offering elegant accommodation and fine dining\n• Hurricane's Grill: Steakhouse and bar serving mouth-watering steaks and ribs\n• ICC Sydney: Australia's top venue for conventions, exhibitions, and events\n• Industry Placement Solutions: Recruitment and placement agency\n• Liverpool Catholic Club: Community club offering entertainment and dining\n• Primi Italian: Family-owned restaurant serving authentic Italian cuisine\n• Kuon Omakase: Japanese restaurant offering unique dining experiences",
    },
  },
  'sit50422-diploma-of-hospitality-management': {
    courseCode: 'SIT50422',
    description:
      'This qualification reflects the role of highly skilled senior operators who use a broad range of hospitality skills combined with managerial skills and sound knowledge of industry to coordinate hospitality operations.\n\nThey operate independently, have responsibility for others and make a range of operational business decisions.\n\nThis qualification provides a pathway to work in any hospitality industry sector as a departmental or small business manager. The diversity of employers includes restaurants, hotels, motels, catering operations, clubs, pubs, cafés and coffee shops.\nThis qualification allows for multiskilling and for specialisation in accommodation services, cookery, food and beverage and gaming.\n\nThe skills in this qualification must be applied in accordance with Commonwealth and State/Territory legislation, Australian standards and industry codes of practice.\nNo occupational licensing, certification or specific legislative requirements apply to this qualification at the time of publication',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'sit60322-advanced-diploma-of-hospitality-management': {
    courseCode: 'SIT60322',
    description:
      'This qualification reflects the role of senior managers who use substantial industry knowledge and wide-ranging operational skills to coordinate hospitality operations.\n\nThey operate with significant autonomy and are responsible for making strategic business decisions.\n\nThis qualification provides a pathway to work in any hospitality industry sector and for a diversity of employers including hotels, restaurants, motels, catering operations, clubs, pubs, cafés, and coffee shops. Possible job titles include hotel manager, motel manager, executive housekeeper, food and beverage manager, and cafe manager.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'advanced-diploma-of-hospitality-management': {
    courseCode: 'SIT60322',
    description:
      'Individuals well suited for our Advanced Diploma of Hospitality Management are those looking to pursue a career that will utilize a broad range of hospitality skills, combined with specialized managerial skills and substantial knowledge of industry to coordinate and monitor hospitality operations. Students in this field will operate with a high level of autonomy and will be responsible for the creation and implementation of strategic business management decisions.\n\nOur Advanced Diploma of Hospitality Management qualification provides students with a clear pathway to work in any hospitality industry sector and for a diverse range of employers including restaurants, hotels, motels, catering operations, clubs, pubs, cafes and coffee shops. Students completing this course will achieve the skills and framework required for multiskilling and for specialization in accommodation services, cookery, food and beverage gaming.\n\nDue to the nature of this course and the flexible electives available for students, we can ensure that you are working towards your goals in their chosen industry by allowing for specialized learning activities, catered towards your own preferences and career goals.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT60322?distanceFilter=25',
    },
  },
  'bsb40920-certificate-iv-in-project-management-practice': {
    courseCode: 'bsb40920',
    description:
      'This qualification reflects the role of individuals who possess well-developed skills in a range of project management processes.\n\nThey apply project management knowledge and skills to a defined range of contexts and are responsible for project outcomes where there are limited, non-routine or contingency measures and solutions.\n\nThis qualification is suitable for individuals working in team environments who support or are responsible for project activities and outcomes. It can apply to any industry or community context.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'bsb50820-diploma-of-project-management': {
    courseCode: 'BSB50820',
    description:
      'This qualification reflects the role of individuals who apply knowledge, practical skills and experience in leadership and management across a range of enterprise and industry contexts in a project environment.\n\nIndividuals at this level initiate, plan, execute and evaluate their own work and/or the work of others. They use well-developed skills and a broad knowledge base to analyse information.\n\nThis qualification is ideal for individuals working in project roles who require formal recognition of their skills, or for those new to project management. The qualification is also suited to those with project management experience who are seeking to consolidate and formalise their skills.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'ABM Kitchen',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'bsb50820-diploma-of-project-management-practice': {
    courseCode: 'BSB50820',
    description:
      'This qualification reflects the role of individuals who apply project management skills and knowledge in a variety of contexts, across a number of industry sectors. The job roles that relate to this qualification may include Project Manager and Project Team Leader. Individuals in these roles have project leadership and management roles and are responsible for achieving project objectives. They possess a sound theoretical knowledge base and use a range of specialised, technical, and managerial competencies to initiate, plan, execute and evaluate their own work and/or the work of others.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face (20 hours per week)',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description:
        "A face-to-face training mode is employed for this qualification. All classroom-based training will take place at the ABM Further Education's classrooms.",
    },
  },
  'BSB60720-diploma-of-project-management-practice': {
    courseCode: 'BSB60720',
    description:
      'This qualification reflects the role of individuals who apply project management skills and knowledge in a variety of contexts, across a number of industry sectors. The job roles that relate to this qualification may include Project Manager and Project Team Leader. Individuals in these roles have project leadership and management roles and are responsible for achieving project objectives. They possess a sound theoretical knowledge base and use a range of specialised, technical, and managerial competencies to initiate, plan, execute and evaluate their own work and/or the work of others.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face (20 hours per week)',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description:
        "A face-to-face training mode is employed for this qualification. All classroom-based training will take place at the ABM Further Education's classrooms.",
    },
  },
  'bsb60720-advanced-diploma-of-program-management': {
    courseCode: 'BSB60720',
    description:
      'This qualification reflects the role of individuals who apply specialised knowledge and skills, together with experience in leadership and management of complex programs.\n\nIndividuals at this level display initiative and judgement in planning, organising, implementing and monitoring program outcomes with accountability for personal and program outcomes within broad parameters.\n\nThey use cognitive and communication skills to identify, analyse and synthesise information from a variety of sources and transfer their knowledge to others, and creative or conceptual skills to express ideas and perspectives or respond to complex problems in program environments.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
  },
  'bsb60820-advanced-diploma-of-project-management-practice': {
    courseCode: 'BSB60820',
    description:
      'This qualification reflects the role of individuals who apply project management skills and knowledge in a variety of contexts, across a number of industry sectors. The job roles that relate to this qualification may include Project Manager and Project Team Leader.\n\nIndividuals in these roles have project leadership and management roles and are responsible for achieving project objectives. They possess a sound theoretical knowledge base and use a range of specialised, technical, and managerial competencies to initiate, plan, execute and evaluate their own work and/or the work of others.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face (20 hours per week)',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description:
        "A face-to-face training mode is employed for this qualification. All classroom-based training will take place at the ABM Further Education's classrooms.",
    },
  },
  'bsb40420-certificate-iv-in-human-resource-management': {
    courseCode: 'BSB40420',
    description:
      'This qualification describes the skills and knowledge for workers in human resources (HR) roles who apply a broad range of competencies using some discretion, judgement and relevant theoretical knowledge.\n\nThey may provide technical advice and support to a team.\n\nJob roles that relate to this qualification include Human Resources Officer, Human Resources Assistant, Recruitment Officer, and Learning and Development Officer.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'bsb50320-diploma-of-human-resource-management': {
    courseCode: 'BSB50320',
    description:
      'This qualification describes the skills and knowledge for workers in human resources specialist roles who apply a broad range of competencies using discretion, judgement and relevant theoretical knowledge.\n\nThey may provide technical advice and support to a team and take responsibility for the work outcomes of junior staff.\n\nJob roles that relate to this qualification include Human Resources Adviser, Human Resources Coordinator, Industrial Relations Adviser, Learning and Development Coordinator, Recruitment Consultant, and Workplace Health and Safety Adviser.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'bsb60320-advanced-diploma-of-human-resource-management': {
    courseCode: 'BSB60320',
    description:
      'This qualification describes the skills and knowledge for workers in senior human resources specialist or generalist roles who apply an advanced broad range of competencies using discretion, judgement and relevant theoretical knowledge.\n\nThey may provide leadership and guidance to others and have responsibility for making a range of operational and strategic decisions.\n\nJob roles that relate to this qualification include Human Resources Manager, Learning and Development Manager, Industrial Relations Manager, Recruitment Manager, and Workplace Health and Safety Manager.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'sis30321-certificate-iii-in-fitness': {
    courseCode: 'SIS30321',
    description:
      'This qualification reflects the role of individuals who perform a range of activities and functions within the fitness industry.\n\nIndividuals with this qualification are competent in providing fitness services including fitness orientation and health screening, fitness instruction, group exercise instruction and gym instruction.\n\nWork is performed in controlled environments such as fitness centres, gyms, aquatic centres, community centres, workplace fitness facilities and outdoor fitness settings. Individuals typically work independently with some level of autonomy in a controlled environment.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'Practical',
          address: 'Private Gymnasium for practical training and assessment',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
    },
  },
  'sis30321-certificate-iv-in-fitness': {
    courseCode: 'SIS30321',
    description:
      "Studying Certificate III in Fitness is a great way to start your journey as a fitness instructor. You'll learn how to plan and deliver group exercise classes and design gym-based programs for individuals who don't need ongoing monitoring. You'll be working in predictable environments, under general supervision, and using your judgement to handle routine matters, all while following clear policies and procedures.\n\nThis qualification opens the door to a career as a fitness instructor in settings such as gyms, fitness centres, leisure centres, or community hubs. The skills you'll develop will be in line with Australian standards and regulations, ensuring you're prepared to meet both Commonwealth and State requirements.",
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'Practical',
          address: 'Private Gymnasium for practical training and assessment',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIS30321?distanceFilter=25',
    },
  },
  'sis40221-certificate-iv-in-fitness': {
    courseCode: 'SIS40221',
    description:
      'The SIS40221 Certificate IV in Fitness is perfect for anyone looking to become a personal trainer. You’ll learn how to design, instruct, and assess exercise programmes for healthy clients aiming to achieve their fitness goals. If a client has more serious health concerns, you’ll refer them to medical professionals. Personal trainers work independently, using their fitness knowledge in both routine and unpredictable situations, and communicate well with clients and health experts to achieve the best results.\nThis course offers a pathway to work as a personal trainer in gyms, fitness centres, leisure facilities, client workplaces, homes, and even outdoors. You can train individuals or groups and may also provide online services. You could also step into leadership roles in some settings.\n\nThe target group for this qualification includes international students who:\n– Want to start or advance their career in the fitness industry.\n– Want to switch to a new field.\n– Have completed a Certificate III in Fitness and wish to develop further skills.\n– Are looking for a pathway to higher qualifications in fitness.\n\nOur students come from a range of countries. Some may be new to Australia, while others may have lived here before, either recently or in the past. This qualification is your stepping stone into the fitness industry, with no special licensing or certification required. You’ll follow Australian standards and industry practices to ensure you’re well-prepared for your career.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'Practical',
          address: 'Private Gymnasium for practical training and assessment',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIS40221?distanceFilter=25',
    },
  },
  'sis50321-diploma-of-sport': {
    courseCode: 'SIS50321',
    description:
      "Build Your Future in the Australian Sport and Fitness Industry\n\nThe Diploma of Sport (Coaching) equips students with the practical skills and knowledge needed to take on a range of roles in the Australian sport sector. Whether you're aiming to coach, lead a team, or support a community sports organisation, this qualification provides a strong foundation for success.\n\nStudents will learn to work independently, manage and supervise others, and apply their skills in accordance with Australian legislation, standards and industry best practice. The course also includes key leadership and communication elements essential for working within dynamic sporting environments.\n\nWho Is This Course For?\n\nThis course is ideal for international students who are:\n- Looking to begin or progress a career in the sport or fitness industry\n- Changing career paths or entering a new sector\n- Already holding a Certificate III or IV in Fitness and wishing to advance their skills\n- Interested in pathways to higher-level sport qualifications\n\nOur students come from a range of countries. Some may be new to Australia, while others may have lived here before, either recently or in the past. This qualification is your stepping stone into the fitness industry, with no special licensing or certification required. You'll follow Australian standards and industry practices to ensure you're well-prepared for your career.",
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'Practical',
          address: 'Private Gymnasium for practical training and assessment',
        },
      ],
    },
    additionalInfo: {
      description: '* More information is available via the',
      linkText: 'My Skills Website.',
      linkUrl:
        'https://www.yourcareer.gov.au/learn-and-train/courses/SIS50321?distanceFilter=25',
    },
  },
  'certificate-iii-in-sport-fast-track': {
    courseCode: 'SIS30321 & SIS40221',
    description:
      'Start Your Career as a Fitness Instructor\n\nThe SIS30321 Certificate III & SIS40221 Certificate IV in Fitness is designed for those looking to become Group Exercise Instructors or Gym Instructors. This qualification equips you with the skills to plan and deliver group exercise sessions and create gym-based programmes for individuals, where personalised instruction and ongoing client monitoring are limited.\n\nYou will work in structured and supervised environments, such as fitness centres, gyms, and community leisure facilities. As a fitness instructor, you will use discretion and judgement when delivering exercise sessions and interacting with clients, following established organisational policies and procedures.\n\nWhere Can This Qualification Take You?\nThis course provides a direct pathway to employment in:\n– Fitness Centres & Gyms\n– Leisure & Community Centres\n– Health & Wellness Clubs',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'Practical',
          address: 'Private Gymnasium for practical training and assessment',
        },
      ],
    },
    additionalInfo: {
      description:
        'Starting Date (Every 3 weeks):\n\n2025:\n• 28th July\n• 18th August\n• 8th September, 29th September\n• 20th October\n• 10th November\n• 1st December, 22nd December\n\n2026:\n• 12th January\n• 2nd February, 23rd February\n• 16th March\n• 6th April, 27th April\n• 18th May\n• 8th June\n\nRegulations & Standards\nThe skills gained in this qualification must be applied in accordance with Commonwealth and State/Territory legislation, Australian industry standards, and codes of practice.\n\nTake the first step towards a rewarding career in fitness today!\n',
    },
  },
  'certificate-iv-in-sport-fast-track': {
    courseCode: 'SIS30321 & SIS40221',
    description:
      'Start Your Career as a Fitness Instructor\n\nThe SIS30321 Certificate III & SIS40221 Certificate IV in Fitness is designed for those looking to become Group Exercise Instructors or Gym Instructors. This qualification equips you with the skills to plan and deliver group exercise sessions and create gym-based programmes for individuals, where personalised instruction and ongoing client monitoring are limited.\n\nYou will work in structured and supervised environments, such as fitness centres, gyms, and community leisure facilities. As a fitness instructor, you will use discretion and judgement when delivering exercise sessions and interacting with clients, following established organisational policies and procedures.\n\nWhere Can This Qualification Take You?\nThis course provides a direct pathway to employment in:\n– Fitness Centres & Gyms\n– Leisure & Community Centres\n– Health & Wellness Clubs',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'ABM Campus',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
        {
          type: 'Practical',
          address: 'Private Gymnasium for practical training and assessment',
        },
      ],
    },
    additionalInfo: {
      description:
        'Starting Date (Every 3 weeks):\n\n2025:\n• 28th July\n• 18th August\n• 8th September, 29th September\n• 20th October\n• 10th November\n• 1st December, 22nd December\n\n2026:\n• 12th January\n• 2nd February, 23rd February\n• 16th March\n• 6th April, 27th April\n• 18th May\n• 8th June\n\nRegulations & Standards\nThe skills gained in this qualification must be applied in accordance with Commonwealth and State/Territory legislation, Australian industry standards, and codes of practice.\n\nTake the first step towards a rewarding career in fitness today!\n\nSee the flexible payment options here!',
    },
  },
  fss: {
    // FSS 데이터
  },
};

// 메뉴 구조 데이터
export interface MenuItem {
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
            title: 'Certificate III in Sport',
            href: '/fitness-instructor-personal-trainer-courses/certificate-iii-in-sport-fast-track',
          },
          {
            title: 'Certificate IV in Sport',
            href: '/fitness-instructor-personal-trainer-courses/certificate-iv-in-sport-fast-track',
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
            title: 'Graduate Diploma of Management',
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
            title: 'Advanced Diploma of Project Management Practice',
            href: '/project-and-program-management-courses/bsb60820-advanced-diploma-of-project-management-practice',
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
        titleKey: 'subMenu.cookingAndBaking',
        href: '/short-courses',
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
        titleKey: 'subMenu.onlineCourses',
        href: '/short-courses',
        items: [
          {
            title: 'Introduction to HTML, CSS, and Basic Web Design',
            href: 'https://www.openlearning.com/abm-further-education/courses/introduction-to-html-css-and-basic-web-design/?cl=1',
          },
          {
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
            title: 'Timetable',
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
        ],
      },
    ],
  },
  {
    titleKey: 'menu.contact',
    href: '/contact',
  },
];
