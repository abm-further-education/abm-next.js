import {
  CourseDetailInfo,
  DescriptionItem,
} from '@/domains/courses/components/CourseDetail';

// 코스별 상세 정보 데이터
export const courseDetailsData: { [key: string]: CourseDetailInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Certificate IV in Kitchen Management is offered over 18 months, equating to 78 weeks, including 18 weeks of holidays. This will be split into six 10-week terms.',
    },
    workPlacement: {
      title: 'Work Placement',
      description: '600 hours',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: ['Chef', 'Chef de partie'],
    },
    pathways: {
      title: 'Pathways to Further Study / Career Opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the:',
        {
          type: 'link',
          text: 'SIT50422 Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook before enrolling, as it contains important information about ABM. For more details, email info@abm.edu.au or call +61 (02) 9160 4507.',
    },
  },
  'sit50422-diploma-of-hospitality-management': {
    courseDuration1: {
      title: 'Course Duration – Packaged with Kitchen Management Course',
      description: [
        'Students completed a SIT40521 Certificate IV in Kitchen Management with ABM Further Education will receive 20 credit transfer units. This will reduce the course SIT50422 Diploma of Hospitality Management to 26 weeks comprising of: Two (2) terms of 10 weeks each (20 weeks total) of teaching period. Holiday breaks amounting to 6 weeks (as specified in the timetable).',
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
        {
          type: 'table' as const,
          headers: ['Number of units', 'Code', 'Title', 'Core/Elective'],
          rows: [
            ['1', 'SITXFIN010', 'Prepare and monitor budgets', 'Core'],
            [
              '2',
              'SITXWHS006',
              'Identify hazards, assess and control safety risks',
              '',
            ],
            ['3', 'SITXINV008', 'Control stock', 'Group C'],
            [
              '4',
              'SITXMGT005',
              'Establish and conduct business relationships',
              'Core',
            ],
            [
              '5',
              'SITXGLC002',
              'Identify and manage legal risks and comply with law',
              'Core',
            ],
            ['6', 'SITXCCS015', 'Enhance customer service experiences', 'Core'],
            ['7', 'SITXCCS010', 'Provide visitor information', 'Group C'],
            [
              '8',
              'SITXCCS016',
              'Develop and manage quality customer service practices',
              'Core',
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
              'Group A',
            ],
            [
              '13',
              'SITHIND008',
              'Work effectively in the Hospitality service',
              'Group B',
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
      title: 'Work Placement • Food and Beverage Stream only',
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
              'Week 1-10 SITHIND008 Work effectively in the hospitality service – 30 shifts at 5 hours from a total 57 shifts',
              '150',
            ],
            [
              'Term 6',
              'Week 1-9 SITHIND008 Work effectively in the hospitality service – 27 shifts at 5 hours from a total 57 shifts',
              '135',
            ],
            ['', 'TOTAL Minimum hours', '285'],
          ],
        },
        '*Please note Hospitality shifts may vary in time due to business needs. ABM has allocated approximately 5 hours per shift based on industry standards. ABM understands some shifts may be slightly shorter or longer based on individual business needs. Students may need to do additional service periods to reach the 285 workplace hours.\n\n',
        '**Work placement arrangements**',
        "• Students can choose their work placement locations. However, it will be verified by the Trainer/Assessors to ensure it has all the facilities and equipment's that meets the requirements of SITHIND008 Work effectively in the hospitality service.",
        '• Students would be supervised/assessed while on placement by the ABM Trainer/Assessors.',
        '• ABM would organise work-placement locations if students are unable to manage by themselves.',
        '• Work-placement agreement needs to be filled by the relevant parties. ABM would provide the agreement to the students.',
        '• Trainers and Assessors would instruct the students on how to complete the logbook.',
        '• ABM may engage a third party to manage work-placement for the students which includes, visiting the work placement venues, organising work placement locations for the students and instruct students to fill the logbook as per requirement.',
      ],
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: [
        'Hotel or Motel Manager',
        'Restaurant Manager',

        'Café Manager',

        'Food and Beverage Supervisor',

        'Bar Manager',
        'Resort Manager',
        'Catering Manager',
      ],
    },
    pathways: {
      title: 'Pathways to Further Study / Career Opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the:',
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
        'The Advanced Diploma of Hospitality Management is offered over 24 months, equating to 104 weeks, including 24 weeks of holidays. This will be split into eight 10-week terms.',
    },
    courseStructure1: {
      title:
        'Course Structure – Packaged with Certificate IV in Kitchen Management & Diploma of Hospitality Management',
      description: [
        'Students who have completed both qualifications by ABM Further Education are eligible for 25 Credit Transfer',
        '• SIT40521 Cetificate IV in Kitchen Manangement',
        '• SIT50422 Diploma of Hospitality Management',
        'Advance Diploma of Hospitality Management course can be completed within two term (26 weeks)',
      ],
    },
    courseStructure2: {
      title:
        'Course Structure – Packaged with Diploma of Hospitality Management',
      description: [
        {
          type: 'table' as const,
          headers: ['No of Units', 'Code', 'Title', 'Core/Electives'],
          rows: [
            ['1', 'BSBFIN601', 'Manage organisational finances', 'Core'],
            ['2', 'BSBOPS601', ' Develop and implement business plans', 'Core'],
            ['3', 'SITXFIN011', ' Manage physical assets', 'Core'],
            ['4', 'SITXHRM012', ' Monitor staff performance', 'Core'],
            [
              '5',
              'SITXMPR014',
              ' Develop and implement marketing strategies',
              'Core',
            ],
            [
              '6',
              'SITXWHS008',
              ' Establish and maintain a work health and safety system',
              'Core',
            ],
            ['7', 'SITHFAB027', ' Serve food and beverage', 'Group C'],
            [
              '8',
              'SITHFAB024',
              ' Prepare and serve non-alcoholic beverages',
              'Group C',
            ],
          ],
        },
        '**Students who have completed SIT50422 in ABM further education are eligible for 25 credit Transfers, and can complete the course in two terms (26 weeks).**',
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
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
        'The Certificate III in Fitness is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
        'After achieving this qualification, graduates may undertake the next qualification up the:',
        {
          type: 'link',
          text: 'SIS40221 Certificate IV in Fitness',
          url: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness',
        },
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
        'The Certificate IV in Fitness is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
        'Students who complete this course may wish to continue their education in the fitness industry with qualifications such as the:',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
        'SIS50122 Diploma of Sport, Aquatics and Recreation Management, SIS50421 Diploma of Outdoor Leadership or continue their education into a range of Higher Education qualifications.',
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'certificate-iii-in-fitness-fast-track': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Certificate III in Fitness (Fast Track) is offered over 3 months, equating to 12 weeks, including work experience and 1 year gym membership.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
        'Students who complete this course may wish to continue their education in the fitness industry with qualifications such as the:',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'certificate-iv-in-fitness-fast-track': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Certificate IV in Fitness (Fast Track) is offered over 3 months, equating to 12 weeks, including work experience and 1 year gym membership.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
        'Students who complete this course may wish to continue their education in the fitness industry with qualifications such as the:',

        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
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
        'The Certificate IV in Business is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: ['Administrative Officer', 'Assistant Business Analyst'],
    },
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the:',
        {
          type: 'link',
          text: 'BSB50120 Diploma of Business',
          url: '/business-and-management-courses/bsb50120-diploma-of-business',
        },
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
        'The Diploma of Business is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
      ],
    },
    jobRoles: {
      title: 'Job roles',
      description: ['Business Manager', 'Chief Data Officer'],
    },
    pathways: {
      title: 'Pathways to further study / career opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the:',
        {
          type: 'link',
          text: 'BSB60120 Advanced Diploma of Business',
          url: '/business-and-management-courses/bsb60120-advanced-diploma-of-business',
        },
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
        'The Diploma of Sport is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
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
        'The Advanced Diploma of Business is offered over 18 months, equating to 78 weeks, including 18 weeks holidays. This will be split into six 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
        'The Graduate Diploma of Management (Learning) is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
        'The Certificate IV in Project Management Practice is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
        'After achieving this qualification, graduates may undertake the next qualification up the:',
        {
          type: 'link',
          text: 'BSB50820 – Diploma of Project Management Practice',
          url: '/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice',
        },
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
        'The Diploma of Project Management Practice is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
        'After achieving this qualification, graduates may undertake the next qualification up the:',
        {
          type: 'link',
          text: 'BSB60720 Advanced Diploma of Program Management',
          url: '/project-and-program-management-courses/bsb60720-advanced-diploma-of-program-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'bsb60720-advanced-diploma-of-program-management': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Advanced Diploma of Program Management is offered over 18 months, equating to 78 weeks, including 18 weeks of holidays. This will be split into six 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Certificate IV in Human Resource Management is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
    pathways: {
      title: 'Pathway to further study / career opportunities',
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the:',
        {
          type: 'link',
          text: 'BSB50320 – Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb50320-diploma-of-human-resource-management',
        },
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
      description:
        'The Diploma of Human Resource Management is offered over 12 months, equating to 52 weeks, including 12 weeks of holidays. This will be split into four 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the:',
        {
          type: 'link',
          text: 'BSB60320 – Advanced Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management',
        },
      ],
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
      description:
        'The Advanced Diploma of Human Resource Management is offered over 18 months, equating to 78 weeks, including 18 weeks of holidays. This will be split into six 10-week terms.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
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
      description: [
        'After achieving this qualification, graduates may undertake the next qualification up the:',
        {
          type: 'link',
          text: 'BSB80120 – Graduate Diploma of Management (Learning)',
          url: '/business-and-management-courses/bsb80120-graduate-diploma-of-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Additional Information',
      description:
        'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
    },
  },
  'hlt33115-certificate-iii-in-health-services-assistance': {
    courseDuration: {
      title: 'Course Duration',
      description:
        'The Certificate III in Health Services Assistance is offered over 4 months, equating to 16 weeks, including face-to-face delivery at our Sydney campus.',
    },
    workPlacement: {
      title: 'Work Placement',
      description:
        '80 hours of work placement in real healthcare settings. During your work placement, you will complete HLTINF006 (Infection prevention and control), HLTAIN001 (Assist with nursing care in an acute care setting), and CHCCCS031 (Provide individualised support). Support includes work placement agreement, supervision by qualified trainers/assessors, logbook instruction and support, and flexible shifts based on business needs.',
    },
    studentSupport: {
      title: 'Student Support',
      description: [
        '• ABM assesses student support needs before enrolment via Enrolment and Pre-Enrolment Forms.',
        '• Possible supports include LLN assistance, assistive technology, extra tutorials, and help with online learning tools.',
        '• Additional costs or limitations are communicated before enrolment.',
        '• If ABM cannot provide certain support, students are referred to third-party providers at their own expense.',
        '• If ABM cannot offer a suitable learning environment, it will inform the student and may refer them to another provider instead of enrolling them.',
      ],
    },
    jobRoles: {
      title: 'Job Roles',
      description: [
        'Assistant in Nursing (AIN)',
        'Health Services Assistant',
        'Personal Care Assistant',
        'Hospital Orderly',
        'Patient Support Assistant',
        'Support Worker',
        'Care Worker',
      ],
    },
    pathways: {
      title: 'Pathways to Further Study / Career Opportunities',
      description: [
        'Upon completion, you may be eligible to progress to:',
        '• HLT54115 Diploma of Nursing',
        '• CHC33015 Certificate III in Individual Support',
        '• CHC43115 Certificate IV in Disability',
        '• CHC52015 Diploma of Community Services',
        '• HLT47321 Certificate IV in Health Administration',
        'And more healthcare qualifications.',
      ],
    },
    additionalInfo: {
      title: 'Programme Highlights',
      description: [
        '• Learn in a supportive, face-to-face classroom environment',
        '• Build specialised English for healthcare communication',
        '• Gain a nationally recognised qualification',
        '• Complete 80 hours of work placement in real healthcare settings',
        '• Suitable for those with or without prior healthcare experience',
        '• Comprehensive support throughout the programme',
        'For more information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
      ].join('\n'),
    },
  },
};
