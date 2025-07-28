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
  'certificate-iii-in-fitness-fast-track': {
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
  'certificate-iv-in-fitness-fast-track': {
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
  'bsb60720-advanced-diploma-of-project-management-practice': {
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
