import { CourseDetailInfo } from '@/domains/courses/components/CourseDetail';
import { CourseInformationInfo } from '@/domains/courses/components/CourseInformation';

export const KM_UNITS = [
  {
    no: 1,
    code: 'SITHCCC023*',
    title: 'Use food preparation equipment',
    type: 'Core',
  },
  {
    no: 2,
    code: 'SITHCCC027*',
    title: 'Prepare dishes using basic methods of cookery',
    type: 'Core',
  },
  {
    no: 3,
    code: 'SITHCCC028*',
    title: 'Prepare appetisers and salads',
    type: 'Core',
  },
  {
    no: 4,
    code: 'SITHCCC029*',
    title: 'Prepare stocks, sauces and soups',
    type: 'Core',
  },
  {
    no: 5,
    code: 'SITHCCC030*',
    title: 'Prepare vegetable, fruit, eggs and farinaceous dishes',
    type: 'Core',
  },
  {
    no: 6,
    code: 'SITHCCC031*',
    title: 'Prepare vegetarian and vegan dishes',
    type: 'Core',
  },
  {
    no: 7,
    code: 'SITHCCC035*',
    title: 'Prepare poultry dishes',
    type: 'Core',
  },
  {
    no: 8,
    code: 'SITHCCC036*',
    title: 'Prepare meat dishes',
    type: 'Core',
  },
  {
    no: 9,
    code: 'SITHCCC037*',
    title: 'Prepare seafood dishes',
    type: 'Core',
  },
  {
    no: 10,
    code: 'SITHCCC041*',
    title: 'Produce cakes, pastries and breads',
    type: 'Core',
  },
  {
    no: 11,
    code: 'SITHCCC042*',
    title: 'Prepare food to meet special dietary requirements',
    type: 'Core',
  },
  {
    no: 12,
    code: 'SITHCCC043*',
    title: 'Work effectively as a cook',
    type: 'Core',
  },
  {
    no: 13,
    code: 'SITHKOP010',
    title: 'Plan and cost recipes',
    type: 'Core',
  },
  {
    no: 14,
    code: 'SITHKOP012*',
    title: 'Develop recipes for special dietary requirements',
    type: 'Core',
  },
  {
    no: 15,
    code: 'SITHKOP013*',
    title: 'Plan cooking operations',
    type: 'Core',
  },
  {
    no: 16,
    code: 'SITHKOP015*',
    title: 'Design and cost menus',
    type: 'Core',
  },
  {
    no: 17,
    code: 'SITHPAT016*',
    title: 'Produce desserts',
    type: 'Core',
  },
  {
    no: 18,
    code: 'SITXCOM010',
    title: 'Manage conflict',
    type: 'Core',
  },
  {
    no: 19,
    code: 'SITXFIN009',
    title: 'Manage finances within a budget',
    type: 'Core',
  },
  {
    no: 20,
    code: 'SITXFSA005',
    title: 'Use hygienic practices for food safety',
    type: 'Core',
  },
  {
    no: 21,
    code: 'SITXFSA006',
    title: 'Participate in safe food handling practices',
    type: 'Core',
  },
  {
    no: 22,
    code: 'SITXFSA008*',
    title: 'Develop and implement a food safety program',
    type: 'Core',
  },
  { no: 23, code: 'SITXHRM008', title: 'Roster staff', type: 'Core' },
  {
    no: 24,
    code: 'SITXHRM009',
    title: 'Lead and manage people',
    type: 'Core',
  },
  {
    no: 25,
    code: 'SITXINV006*',
    title: 'Receive, store and maintain stock',
    type: 'Core',
  },
  {
    no: 26,
    code: 'SITXMGT004',
    title: 'Monitor work operations',
    type: 'Core',
  },
  {
    no: 27,
    code: 'SITXWHS007',
    title: 'Implement and monitor work health and safety practices',
    type: 'Core',
  },
  {
    no: 28,
    code: 'SITHCCC026*-',
    title: 'Package prepared foodstuffs',
    type: 'Elective (Group A)',
  },
  {
    no: 29,
    code: 'SITHCCC038*',
    title: 'Produce and serve food for buffets',
    type: 'Elective (Group A)',
  },
  {
    no: 30,
    code: 'SITHCCC040*',
    title: 'Prepare and serve cheese',
    type: 'Elective (Group A)',
  },
  {
    no: 31,
    code: 'SITXHRM010',
    title: 'Recruit, select and induct staff',
    type: 'Elective',
  },
  {
    no: 32,
    code: 'SITHIND006',
    title: 'Source and use information on the hospitality industry',
    type: 'Elective',
  },
  {
    no: 33,
    code: 'BSBTWK501',
    title: 'Lead diversity and inclusion',
    type: 'Elective',
  },
];

export const HM_UNITS = [
  {
    no: 1,
    code: 'SITXCCS015',
    title: 'Enhance customer service experiences',
    type: 'Core',
  },
  {
    no: 2,
    code: 'SITXCCS016',
    title: 'Develop and manage quality customer service practices',
    type: 'Core',
  },
  { no: 3, code: 'SITXCOM010', title: 'Manage conflict', type: 'Core' },
  {
    no: 4,
    code: 'SITXFIN009',
    title: 'Manage finances within a budget',
    type: 'Core',
  },
  {
    no: 5,
    code: 'SITXFIN010',
    title: 'Prepare and monitor budgets',
    type: 'Core',
  },
  {
    no: 6,
    code: 'SITXGLC002',
    title: 'Identify and manage legal risks and comply with law',
    type: 'Core',
  },
  { no: 7, code: 'SITXHRM008', title: 'Roster staff', type: 'Core' },
  { no: 8, code: 'SITXHRM009', title: 'Lead and manage people', type: 'Core' },
  { no: 9, code: 'SITXMGT004', title: 'Monitor work operations', type: 'Core' },
  {
    no: 10,
    code: 'SITXMGT005',
    title: 'Establish and conduct business relationships',
    type: 'Core',
  },
  {
    no: 11,
    code: 'SITXWHS007',
    title: 'Implement and monitor work health and safety practices',
    type: 'Core',
  },
  {
    no: 12,
    code: 'SITXFSA005',
    title: 'Use hygienic practices for food safety',
    type: 'Elective',
  },
  {
    no: 13,
    code: 'SITHIND008',
    title: 'Work effectively in the Hospitality service',
    type: 'Elective',
  },
  {
    no: 14,
    code: 'SITXHRM010',
    title: 'Recruit, select and induct staff',
    type: 'Elective',
  },
  {
    no: 15,
    code: 'SITHFAB030*',
    title: 'Prepare and serve cocktails',
    type: 'Elective',
  },
  { no: 16, code: 'SITXINV008', title: 'Control stock', type: 'Elective' },
  {
    no: 17,
    code: 'SITHKOP014',
    title: 'Plan catering for events or functions',
    type: 'Elective',
  },
  { no: 18, code: 'BSBCMM411', title: 'Make presentations', type: 'Elective' },
  {
    no: 19,
    code: 'BSBSUS511',
    title: 'Develop workplace policies and procedures for sustainability',
    type: 'Elective',
  },
  {
    no: 20,
    code: 'BSBTWK501',
    title: 'Lead diversity and inclusion',
    type: 'Elective',
  },
  {
    no: 21,
    code: 'SITHFAB021',
    title: 'Provide responsible service of alcohol',
    type: 'Elective',
  },
  { no: 22, code: 'SITHFAB023', title: 'Operate a bar', type: 'Elective' },
  {
    no: 23,
    code: 'SITXFSA006',
    title: 'Participate in safe food handling practices',
    type: 'Elective',
  },
  {
    no: 24,
    code: 'SITXFSA008*',
    title: 'Develop and implement a food safety program',
    type: 'Elective',
  },
  {
    no: 25,
    code: 'SITHFAB025',
    title: 'Prepare and serve espresso coffee',
    type: 'Elective',
  },
  {
    no: 26,
    code: 'SITHIND006',
    title: 'Source and use information on the hospitality industry',
    type: 'Elective',
  },
  {
    no: 27,
    code: 'SITXCCS010',
    title: 'Provide visitor information',
    type: 'Elective',
  },
  {
    no: 28,
    code: 'SITXCCS012',
    title: 'Provide lost and found services',
    type: 'Elective',
  },
];

export const AHM_UNITS = [
  {
    no: 1,
    code: 'BSBFIN601',
    title: 'Manage organisational finances',
    type: 'Core',
  },
  {
    no: 2,
    code: 'BSBOPS601',
    title: 'Develop and implement business plans',
    type: 'Core',
  },
  { no: 3, code: 'SITXFIN011', title: 'Manage physical assets', type: 'Core' },
  {
    no: 4,
    code: 'SITXHRM012',
    title: 'Monitor staff performance',
    type: 'Core',
  },
  {
    no: 5,
    code: 'SITXMPR014',
    title: 'Develop and implement marketing strategies',
    type: 'Core',
  },
  {
    no: 6,
    code: 'SITXWHS008',
    title: 'Establish and maintain a work health and safety system',
    type: 'Core',
  },
  {
    no: 7,
    code: 'SITHFAB027*',
    title: 'Serve food and beverage',
    type: 'Elective',
  },
  {
    no: 8,
    code: 'SITHFAB024*',
    title: 'Prepare and serve non-alcoholic beverages',
    type: 'Elective',
  },
];

export const CERTIV_FITNESS_UNITS = [
  {
    code: 'CHCCOM006',
    title: 'Establish and manage client relationships',
    type: 'Core',
  },
  {
    code: 'SISFFIT041',
    title: 'Develop personalised exercise programs',
    type: 'Core',
  },
  {
    code: 'SISFFIT042',
    title: 'Instruct personalised exercise sessions',
    type: 'Core',
  },
  {
    code: 'SISFFIT043',
    title:
      'Develop and instruct personalised exercise programs for body composition goals',
    type: 'Core',
  },
  {
    code: 'SISFFIT044',
    title:
      'Develop and instruct personalised exercise programs for older clients',
    type: 'Core',
  },
  {
    code: 'SISFFIT045',
    title:
      'Develop and instruct personalised exercise programs for adolescent clients',
    type: 'Core',
  },
  {
    code: 'SISFFIT049',
    title: 'Use exercise science principles in fitness instruction',
    type: 'Core',
  },
  {
    code: 'SISFFIT050',
    title: 'Support exercise behaviour change',
    type: 'Core',
  },
  {
    code: 'SISFFIT051',
    title:
      'Establish and maintain professional practice for fitness instruction',
    type: 'Core',
  },
  {
    code: 'SISFFIT053',
    title: 'Support healthy eating for individual fitness clients',
    type: 'Core',
  },
  {
    code: 'SISFFIT034',
    title: 'Assess client movement and provide exercise advice',
    type: 'Elective',
  },
  {
    code: 'SISXCAI010',
    title: 'Develop strength and conditioning programs',
    type: 'Elective',
  },
  {
    code: 'BSBESB401',
    title: 'Research and develop business plans',
    type: 'Elective',
  },
  {
    code: 'BSBESB301',
    title: 'Investigate business opportunities',
    type: 'Elective',
  },
  {
    code: 'SISFFIT046',
    title: 'Plan and instruct online exercise sessions',
    type: 'Elective',
  },
  { code: 'BSBLDR414', title: 'Lead team effectiveness', type: 'Elective' },
  {
    code: 'BSBCRT411',
    title: 'Apply critical thinking to work practices',
    type: 'Elective',
  },
];

export const CERTIII_FITNESS_UNITS = [
  {
    code: 'BSBOPS304',
    title: 'Deliver and monitor a service to customers',
    type: 'Core',
  },
  {
    code: 'BSBPEF301',
    title: 'Organise personal work priorities',
    type: 'Core',
  },
  { code: 'HLTAID011', title: 'Provide First Aid', type: 'Core' },
  {
    code: 'HLTWHS001',
    title: 'Participate in workplace health and safety',
    type: 'Core',
  },
  {
    code: 'SISFFIT032',
    title: 'Complete pre-exercise screening and service orientation',
    type: 'Core',
  },
  {
    code: 'SISFFIT033',
    title: 'Complete client fitness assessments',
    type: 'Core',
  },
  { code: 'SISFFIT035', title: 'Plan group exercise sessions', type: 'Core' },
  {
    code: 'SISFFIT036',
    title: 'Instruct group exercise sessions',
    type: 'Core',
  },
  {
    code: 'SISFFIT040',
    title:
      'Develop and instruct gym-based exercise programs for individual clients',
    type: 'Core',
  },
  {
    code: 'SISFFIT047',
    title:
      'Use anatomy and physiology knowledge to support safe and effective exercise',
    type: 'Core',
  },
  {
    code: 'SISFFIT052',
    title: 'Provide healthy eating information',
    type: 'Core',
  },
  {
    code: 'SISXIND011',
    title: 'Maintain sport, fitness and recreation industry knowledge',
    type: 'Elective',
  },
  { code: 'SISXFAC007', title: 'Maintain clean facilities', type: 'Elective' },
  {
    code: 'BSBOPS403',
    title: 'Apply business risk management processes',
    type: 'Elective',
  },
  {
    code: 'SISFFIT037',
    title: 'Develop and instruct group movement programs for children',
    type: 'Elective',
  },
];

export const CERTIII_FITNESS_FAST_UNITS = [
  {
    code: 'SISXIND011',
    title: 'Maintain sport, fitness and recreation industry knowledge',
    type: 'Core',
  },
  { code: 'SISXFAC007', title: 'Maintain clean facilities', type: 'Core' },
  {
    code: 'HLTWHS001',
    title: 'Participate in workplace health and safety',
    type: 'Core',
  },
  {
    code: 'BSBPEF301',
    title: 'Organise personal work priorities',
    type: 'Core',
  },
  {
    code: 'SISFFIT047',
    title:
      'Use anatomy and physiology knowledge to support safe and effective exercise',
    type: 'Core',
  },
  {
    code: 'BSBOPS403',
    title: 'Apply business risk management processes',
    type: 'Core',
  },
  {
    code: 'SISXIND009',
    title: 'Respond to interpersonal conflict',
    type: 'Core',
  },
  {
    code: 'SISFFIT032',
    title: 'Complete pre-exercise screening and service orientation',
    type: 'Core',
  },
  {
    code: 'SISFFIT033',
    title: 'Complete client fitness assessments',
    type: 'Core',
  },
  {
    code: 'SISFFIT040',
    title:
      'Develop and instruct gym-based exercise programs for individual clients',
    type: 'Core',
  },
  {
    code: 'SISFFIT052',
    title: 'Provide healthy eating information',
    type: 'Elective',
  },
  {
    code: 'SISFFIT035',
    title: 'Plan group exercise sessions',
    type: 'Elective',
  },
  {
    code: 'SISFFIT036',
    title: 'Instruct group exercise sessions',
    type: 'Elective',
  },
  { code: 'HLTAID001', title: 'Provide First Aid', type: 'Elective' },
  {
    code: 'BSBOPS304',
    title: 'Deliver and monitor a service to customers',
    type: 'Elective',
  },
];

export const CERTIV_FITNESS_FAST_UNITS = [
  {
    code: 'SISFFIT041',
    title: 'Develop personalised exercise programs',
    type: 'Core',
  },
  {
    code: 'SISFFIT049',
    title: 'Use exercise science principles in fitness instruction',
    type: 'Core',
  },
  {
    code: 'SISFFIT050',
    title: 'Support exercise behaviour change',
    type: 'Core',
  },
  {
    code: 'SISFFIT042',
    title: 'Instruct personalised exercise sessions',
    type: 'Core',
  },
  {
    code: 'ISFFIT044',
    title:
      'Develop and instruct personalised exercise programs for older clients',
    type: 'Core',
  }, // Double-check the "ISFFIT044" code—may be a typo.
  {
    code: 'CHCCOM006',
    title: 'Establish and manage client relationships',
    type: 'Core',
  },
  {
    code: 'SISFFIT053',
    title: 'Support healthy eating for individual fitness clients',
    type: 'Core',
  },
  {
    code: 'SISFFIT043',
    title:
      'Develop and instruct personalised exercise programs for body composition goals',
    type: 'Core',
  },
  {
    code: 'SISFFIT051',
    title:
      'Establish and maintain professional practice for fitness instruction',
    type: 'Core',
  },
  {
    code: 'SISFFIT034',
    title: 'Assess client movement and provide exercise advice',
    type: 'Core',
  },
  {
    code: 'SISFFIT045',
    title:
      'Develop and instruct personalised exercise programs for adolescent clients',
    type: 'Core',
  },
  {
    code: 'SISXCAI010',
    title: 'Develop strength and conditioning programs',
    type: 'Elective',
  },
  {
    code: 'SISFFIT046',
    title: 'Plan and instruct online exercise sessions',
    type: 'Elective',
  },
  {
    code: 'BSBESB401',
    title: 'Research and develop business plans',
    type: 'Elective',
  },
  {
    code: 'BSBESB301',
    title: 'Investigate business opportunities',
    type: 'Elective',
  },
  { code: 'BSBLDR414', title: 'Lead team effectiveness', type: 'Elective' },
  {
    code: 'BSBCRT411',
    title: 'Apply critical thinking to work practices',
    type: 'Elective',
  },
];

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
    title: 'Certificate IV in Fitness',
    href: '/fitness-instructor-personal-trainer-courses/sis30321-certificate-iv-in-fitness',
  },
  {
    title: 'Certificate III in Fitness',
    href: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iii-in-fitness',
  },
  {
    title: 'Certificate IV in Sport',
    href: '/fitness-instructor-personal-trainer-courses/certificate-iv-in-sport-fast-track',
  },
  {
    title: 'Certificate III in Sport',
    href: '/fitness-instructor-personal-trainer-courses/certificate-iii-in-sport-fast-track',
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
    title: 'Barista Course',
    href: '/short-courses/barista',
  },
  {
    title: 'Classic French Cake Course',
    href: '/short-courses/cake',
  },
  {
    title: 'Wine Course',
    href: '/short-courses/wine',
  },
  {
    title: 'Sourdough and Focaccia Course',
    href: '/short-courses/focaccia',
  },
  {
    title: 'Fine Dining Dessert Plating Course',
    href: '/short-courses/dessert',
  },
  {
    title: 'Classic French Pastries Course',
    href: '/short-courses/pastries',
  },
  {
    title: 'Cocktail-Making and Mixology Course',
    href: '/short-courses/mixology',
  },
  {
    title: 'French petit four Course (Macaroon)',
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
];

// 샘플 코스 정보 데이터
export const sampleCourseDetail: CourseDetailInfo = {
  courseDuration: {
    title: 'Course Duration',
    description:
      'This qualification will be delivered over 78 weeks, including 60 weeks of training and assessment spread over 6 terms of 10 weeks each.',
  },
  workPlacement: {
    title: 'Work Placement',
    hours: '360 hours',
  },
  studentSupport: {
    title: 'Student Support',
    description: [
      'To maximise the chance of students successfully completing their training, ABM will identify any support individual students need prior to their enrolment and provide access to that support throughout their training. This will be done using both the Enrolment Form, and a Pre-Enrolment Form, that students are required to fill in.',
      'The aim of both documents is to provide any support that may be required. This could include:',
    ],
    supportTypes: [
      'Language, Literacy and Numeracy (LLN) supports.',
      'Assistive Technologys.',
      'Additional Tutorials, and / ors.',
      'Other mechanisms, such as assistance in using technology for online delivery components.',
    ],
    additionalInfo: [
      "Where this support attracts an additional cost to the student, ABM will make this clear prior to accepting the student's enrolment. If there are limitations to the support ABM is able to provide, these limitations will be made clear in information provided to a potential student.",
      'Where ABM identifies required support, such as literacy or numeracy, English or other language barriers or physical capabilities, and it cannot provide such support directly, it will refer the student to a third party. The costs of such third-party support will the responsibility of the individual.',
      'Where ABM is not capable of offering an environment suitable for the needs of a student with specific identified needs, it will inform them accordingly and may direct the student to a provider that can, and thus will not process their enrolment.',
    ],
  },
  jobRoles: {
    title: 'Job roles',
    roles: ['Chef', 'Chef de partie'],
  },
  pathways: {
    title: 'Pathways to Further Study / Career Opportunities',
    description:
      'After achieving this qualification, graduates may undertake the next qualification up the SIT50422 DIPLOMA OF HOSPITALITY MANAGEMENT',
    possibleJobTitles: 'Possible job titles include:',
    roles: ['Chef', 'Chef de partie'],
  },
  additionalInfo: {
    title: 'Additional Information',
    description:
      'Please read the Student Handbook prior to enrolment as this contains valuable information about ABM. For further information, please contact ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160 4507.',
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
        {
          type: 'Kitchen',
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
        {
          type: 'Kitchen',
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
  },
  'bsb60120-advanced-diploma-of-business': {
    courseCode: 'BSB60120',
    description:
      'This qualification reflects the role of individuals who apply an advanced broad range of competencies in varied work contexts, displaying leadership and management skills.\n\nIndividuals at this level apply initiative and judgement to plan and implement a range of leadership and management functions, with accountability for personal and team outcomes within broad parameters.\n\nThey use cognitive and communication skills to identify, analyse and synthesise information from a variety of sources and transfer their knowledge to others, and creative or conceptual skills to express ideas and perspectives or respond to complex problems.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
  },
  'sit50422-diploma-of-hospitality-management': {
    courseCode: 'SIT50422',
    description:
      'This qualification reflects the role of highly skilled senior operators who use a broad range of hospitality skills combined with managerial skills and sound knowledge of industry to coordinate hospitality operations.\n\nThey operate independently, have responsibility for others and make a range of operational business decisions.\n\nThis qualification provides a pathway to work in any hospitality industry sector as a departmental or small business manager. The diversity of employers includes restaurants, hotels, motels, catering operations, clubs, pubs, cafés and coffee shops.',
    deliveryMode: {
      title: 'Delivery mode',
      mode: 'Face to Face',
    },
    deliverySite: {
      title: 'Delivery site:',
      locations: [
        {
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
        {
          type: 'Kitchen',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
        {
          type: 'Kitchen',
          address: '242 Castlereagh Street Sydney NSW 2000 Australia',
        },
      ],
    },
  },
  'bsb40920-certificate-iv-in-project-management-practice': {
    courseCode: 'BSB40920',
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
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
          type: 'Classroom',
          address:
            'Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000',
        },
      ],
    },
  },
  // 다른 코스들도 추가할 수 있습니다...
  'industry-placement-work-placement': {
    // IndustryPlacement 데이터
  },
  fss: {
    // FSS 데이터
  },
  // ... 다른 코스들
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
            title: 'Certificate IV in Fitness',
            href: '/fitness-instructor-personal-trainer-courses/sis30321-certificate-iv-in-fitness',
          },
          {
            title: 'Certificate III in Fitness',
            href: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iii-in-fitness',
          },
          {
            title: 'Certificate IV in Fitness (Fast Track)',
            href: '/fitness-instructor-personal-trainer-courses/certificate-iv-in-sport-fast-track',
          },
          {
            title: 'Certificate III in Fitness (Fast Track)',
            href: '/fitness-instructor-personal-trainer-courses/certificate-iii-in-sport-fast-track',
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
        titleKey: 'menu.shortCourses',
        href: '/short-courses',
        items: [
          {
            title: 'Barista Course',
            href: '/short-courses/barista',
          },
          {
            title: 'Classic French Cake Course',
            href: '/short-courses/cake',
          },
          {
            title: 'Wine Course',
            href: '/short-courses/wine',
          },
          {
            title: 'Sourdough and Focaccia Course',
            href: '/short-courses/focaccia',
          },
          {
            title: 'Fine Dining Dessert Plating Course',
            href: '/short-courses/dessert',
          },
          {
            title: 'Classic French Pastries Course',
            href: '/short-courses/pastries',
          },
          {
            title: 'Cocktail-Making and Mixology Course',
            href: '/short-courses/mixology',
          },
          {
            title: 'French petit four Course (Macaroon)',
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
            href: '/testimonial',
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
            href: '/',
          },
          {
            title: 'entryRequirements',
            href: '/',
          },
          {
            title: 'getUSI',
            href: '/',
          },
          {
            title: 'enrolNow',
            href: '/',
          },
          {
            title: 'higherEducationPathway',
            href: '/',
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
