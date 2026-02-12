import {
  CourseDetailInfo,
  DescriptionItem,
} from '@/domains/courses/components/CourseDetail';

// 코스별 상세 정보 데이터
export const courseDetailsData: { [key: string]: CourseDetailInfo } = {
  'sit40521-certificate-iv-in-kitchen-management': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Certificate IV in Kitchen Management ay inaalok sa loob ng 18 buwan, katumbas ng 78 linggo, kasama ang 18 linggo ng bakasyon. Ito ay hahatiin sa anim na 10-linggong term.',
    },
    workPlacement: {
      title: 'Work Placement',
      description: '600 oras',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Chef', 'Chef de partie'],
    },
    pathways: {
      title: 'Mga Landas sa Karagdagang Pag-aaral / Mga Oportunidad sa Karera',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'SIT50422 Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll, dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang detalye, mag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'sit50422-diploma-of-hospitality-management': {
    courseDuration1: {
      title: 'Tagal ng Kurso – Kasama ang Kitchen Management Course',
      description: [
        'Ang mga estudyanteng nakumpleto ang SIT40521 Certificate IV in Kitchen Management sa ABM Further Education ay makakatanggap ng 20 credit transfer units. Ito ay magbabawas sa kurso na SIT50422 Diploma of Hospitality Management sa 26 linggo na binubuo ng: Dalawang (2) term na 10 linggo bawat isa (20 linggo kabuuan) ng panahon ng pagtuturo. Mga holiday break na umaabot sa 6 na linggo (ayon sa timetable).',
      ] as DescriptionItem[],
    },
    courseDuration2: {
      title: 'Tagal ng Kurso – Food & Beverage Stream',
      description:
        'Ang kwalipikasyon ay ibinibigay sa loob ng 78 linggo na binubuo ng:\nAnim (6) na term na 10 linggo bawat isa (60 linggo kabuuan) ng panahon ng pagtuturo.\nMga holiday break na umaabot sa 18 linggo (ayon sa timetable)',
    },
    courseStructure1: {
      title:
        'Istruktura ng Kurso – Kasama ang Certificate IV in Kitchen Management',
      description: [
        {
          type: 'table' as const,
          headers: ['Bilang ng units', 'Code', 'Pamagat', 'Core/Elective'],
          rows: [
            ['1', 'SITXFIN010', 'Prepare and monitor budgets', 'Core'],
            ['2', 'SITXWHS006', 'Identify hazards, assess and control safety risks', ''],
            ['3', 'SITXINV008', 'Control stock', 'Group C'],
            ['4', 'SITXMGT005', 'Establish and conduct business relationships', 'Core'],
            ['5', 'SITXGLC002', 'Identify and manage legal risks and comply with law', 'Core'],
            ['6', 'SITXCCS015', 'Enhance customer service experiences', 'Core'],
            ['7', 'SITXCCS010', 'Provide visitor information', 'Group C'],
            ['8', 'SITXCCS016', 'Develop and manage quality customer service practices', 'Core'],
          ],
        },
      ],
    },
    courseStructure2: {
      title: 'Istruktura ng Kurso – Standalone Food & Beverage Stream',
      description: [
        {
          type: 'table' as const,
          headers: ['Bilang ng units', 'Code', 'Pamagat', 'Core/Elective'],
          rows: [
            ['1', 'SITXCCS015', 'Enhance customer service experiences', 'Core'],
            ['2', 'SITXCCS016', 'Develop and manage quality customer service practices', 'Core'],
            ['3', 'SITXCOM010', 'Manage conflict', 'Core'],
            ['4', 'SITXFIN009', 'Manage finances within a budget', 'Core'],
            ['5', 'SITXFIN010', 'Prepare and monitor budgets', 'Core'],
            ['6', 'SITXGLC002', 'Identify and manage legal risks and comply with law', 'Core'],
            ['7', 'SITXHRM008', 'Roster staff', 'Core'],
            ['8', 'SITXHRM009', 'Lead and manage people', 'Core'],
            ['9', 'SITXMGT004', 'Monitor work operations', 'Core'],
            ['10', 'SITXMGT005', 'Establish and conduct business relationships', 'Core'],
            ['11', 'SITXWHS007', 'Implement and monitor work health and safety practices', 'Core'],
            ['12', 'SITXFSA005', 'Use hygienic practices for food safety', 'Group A'],
            ['13', 'SITHIND008', 'Work effectively in the Hospitality service', 'Group B'],
            ['14', 'SITXHRM010', 'Recruit, select and induct staff', 'Group D'],
            ['15', 'SITHFAB030*', 'Prepare and serve cocktails', 'Group C'],
            ['16', 'SITXINV008', 'Control stock', 'Group C'],
            ['17', 'SITHKOP014', 'Plan catering for events or functions', 'Group C'],
            ['18', 'BSBCMM411', 'Make presentations', 'Group D'],
            ['19', 'BSBSUS511', 'Develop workplace policies and procedures for sustainability', 'Group D'],
            ['20', 'BSBTWK501', 'Lead diversity and inclusion', 'Group D'],
            ['21', 'SITHFAB021', 'Provide responsible service of alcohol', 'Group C'],
            ['22', 'SITHFAB023', 'Operate a bar', 'Group C'],
            ['23', 'SITXFSA006', 'Participate in safe food handling practices', 'Group C'],
            ['24', 'SITXFSA008*', 'Develop and implement a food safety program', 'Group C'],
            ['25', 'SITHFAB025', 'Prepare and serve espresso coffee', 'Group C'],
            ['26', 'SITHIND006', 'Source and use information on the hospitality industry', 'Group C'],
            ['27', 'SITXCCS010', 'Provide visitor information', 'Group C'],
            ['28', 'SITXCCS012', 'Provide lost and found services', 'Group C'],
          ],
        },
      ],
    },
    workPlacement: {
      title: 'Work Placement • Food and Beverage Stream lamang',
      description: [
        '285 oras (* hindi applicable kapag kasama ang Certificate IV in Kitchen Management course)',
        '\n**Workplace Component**',
        'Mahalagang tandaan na ang workplace unit ay bahagi ng kwalipikasyong ito at kinakailangan ng mga mag-aaral na kumpletuhin ang mga gawain na nakasaad sa training package elements at performance criteria.',
        '\nAng Workplace logbook ay ibibigay ng ABM at kinakailangan ng mga estudyante na panatilihin araw-araw ang talaan ng mga aktibidad / gawaing isinagawa sa panahon ng work placement. Ito ay susubaybayan ng ABM Workplace assessor sa mga nakaiskedyul na site visit. Ang mga pang-araw-araw na aktibidad / logbook entries ay dapat pirmahan ng workplace supervisor bawat araw.',
        {
          type: 'table' as const,
          headers: ['Term', 'Bilang ng Linggo', 'Oras'],
          rows: [
            ['Term 5', 'Linggo 1-10 SITHIND008 Work effectively in the hospitality service – 30 shift sa 5 oras mula sa kabuuang 57 shift', '150'],
            ['Term 6', 'Linggo 1-9 SITHIND008 Work effectively in the hospitality service – 27 shift sa 5 oras mula sa kabuuang 57 shift', '135'],
            ['', 'KABUUANG Minimum na oras', '285'],
          ],
        },
      ],
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: [
        'Hotel o Motel Manager',
        'Restaurant Manager',
        'Café Manager',
        'Food and Beverage Supervisor',
        'Bar Manager',
        'Resort Manager',
        'Catering Manager',
      ],
    },
    pathways: {
      title: 'Mga Landas sa Karagdagang Pag-aaral / Mga Oportunidad sa Karera',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'SIT60322 – Advanced Diploma of Hospitality Management',
          url: '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'advanced-diploma-of-hospitality-management': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Advanced Diploma of Hospitality Management ay inaalok sa loob ng 24 buwan, katumbas ng 104 linggo, kasama ang 24 linggo ng bakasyon. Ito ay hahatiin sa walong 10-linggong term.',
    },
    courseStructure1: {
      title: 'Istruktura ng Kurso – Kasama ang Certificate IV in Kitchen Management at Diploma of Hospitality Management',
      description: [
        'Ang mga estudyanteng nakumpleto ang parehong kwalipikasyon sa ABM Further Education ay karapat-dapat para sa 25 Credit Transfer',
        '• SIT40521 Certificate IV in Kitchen Management',
        '• SIT50422 Diploma of Hospitality Management',
        'Ang Advanced Diploma of Hospitality Management course ay maaaring makumpleto sa loob ng dalawang term (26 linggo)',
      ],
    },
    courseStructure2: {
      title: 'Istruktura ng Kurso – Kasama ang Diploma of Hospitality Management',
      description: [
        {
          type: 'table' as const,
          headers: ['Bilang ng Units', 'Code', 'Pamagat', 'Core/Electives'],
          rows: [
            ['1', 'BSBFIN601', 'Manage organisational finances', 'Core'],
            ['2', 'BSBOPS601', 'Develop and implement business plans', 'Core'],
            ['3', 'SITXFIN011', 'Manage physical assets', 'Core'],
            ['4', 'SITXHRM012', 'Monitor staff performance', 'Core'],
            ['5', 'SITXMPR014', 'Develop and implement marketing strategies', 'Core'],
            ['6', 'SITXWHS008', 'Establish and maintain a work health and safety system', 'Core'],
            ['7', 'SITHFAB027', 'Serve food and beverage', 'Group C'],
            ['8', 'SITHFAB024', 'Prepare and serve non-alcoholic beverages', 'Group C'],
          ],
        },
        '**Ang mga estudyanteng nakumpleto ang SIT50422 sa ABM further education ay karapat-dapat para sa 25 credit Transfer, at maaaring makumpleto ang kurso sa dalawang term (26 linggo).**',
      ],
    },
    workPlacement: {
      title: 'Work Placement',
      description: [
        'Stand alone - Advanced Diploma of Hospitality Management = 285 oras',
        'Kasama ang – Certificate IV in Kitchen Management at Diploma of Hospitality Management = walang karagdagang Work component hours',
        'Kasama ang – Diploma of Hospitality Management = walang karagdagang Work component hours',
      ],
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: [
        'Hotel o Resort Manager',
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
      title: 'Mga Landas sa Karagdagang Pag-aaral / Mga Oportunidad sa Karera',
      description: [
        'Ang mga potensyal na opsyon sa pagtatrabaho ay sa anumang sektor ng hospitality industry bilang departmental o small business manager. Tingnan din ang mga posibleng job title roles na ipinahiwatig sa paglalarawan ng kwalipikasyon.',
        '\nAng mga estudyanteng nakumpleto ang kursong ito ay maaaring magpatuloy ng kanilang edukasyon sa iba\'t ibang Higher Education qualifications.',
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description: [
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
      ],
    },
  },
  'sis30321-certificate-iii-in-fitness': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Certificate III in Fitness ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: [
        'Gym Instructor',
        'Group Fitness Instructor',
        'Fitness Instructor',
      ],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'SIS40221 Certificate IV in Fitness',
          url: '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'sis40221-certificate-iv-in-fitness': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Certificate IV in Fitness ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: [
        'Personal Trainer',
        'Fitness Instructor (Advanced)',
        'Outdoor Trainer',
        'Corporate o Workplace Trainer',
        'Online Personal Trainer',
        'Fitness Studio Owner/Manager',
      ],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral',
      description: [
        'Ang mga estudyanteng nakumpleto ang kursong ito ay maaaring magpatuloy ng kanilang edukasyon sa fitness industry gamit ang mga kwalipikasyon tulad ng:',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
        'SIS50122 Diploma of Sport, Aquatics and Recreation Management, SIS50421 Diploma of Outdoor Leadership o magpatuloy ng kanilang edukasyon sa iba\'t ibang Higher Education qualifications.',
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'certificate-iii-in-fitness-fast-track': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Certificate III in Fitness (Fast Track) ay inaalok sa loob ng 3 buwan, katumbas ng 12 linggo, kasama ang work experience at 1 taon gym membership.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Gym Instructor', 'Group Fitness Instructor', 'Fitness Instructor'],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral',
      description: [
        'Ang mga estudyanteng nakumpleto ang kursong ito ay maaaring magpatuloy ng kanilang edukasyon sa fitness industry gamit ang mga kwalipikasyon tulad ng:',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'certificate-iv-in-fitness-fast-track': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Certificate IV in Fitness (Fast Track) ay inaalok sa loob ng 3 buwan, katumbas ng 12 linggo, kasama ang work experience at 1 taon gym membership.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: [
        'Personal Trainer',
        'Fitness Instructor (Advanced)',
        'Outdoor Trainer',
        'Corporate o Workplace Trainer',
        'Online Personal Trainer',
        'Fitness Studio Owner/Manager',
      ],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral',
      description: [
        'Ang mga estudyanteng nakumpleto ang kursong ito ay maaaring magpatuloy ng kanilang edukasyon sa fitness industry gamit ang mga kwalipikasyon tulad ng:',
        {
          type: 'link',
          text: 'SIS50321 Diploma of Sport',
          url: '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'bsb40120-certificate-iv-in-business': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Certificate IV in Business ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Administrative Officer', 'Assistant Business Analyst'],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'BSB50120 Diploma of Business',
          url: '/business-and-management-courses/bsb50120-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'bsb50120-diploma-of-business': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Diploma of Business ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Business Manager', 'Chief Data Officer'],
    },
    pathways: {
      title: 'Mga landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'BSB60120 Advanced Diploma of Business',
          url: '/business-and-management-courses/bsb60120-advanced-diploma-of-business',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'sis50321-diploma-of-sport': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Diploma of Sport ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: [
        'Sports Trainer',
        'Sports Manager',
        'Personal Trainer',
        'Fitness Trainer',
        'Strength Coach',
        'Coaching staff',
        'General Managers ng mga gymnasium',
        'Sports Club coaching roles hal. tennis coach, swimming coach at football coach',
        'Reception/Sales',
      ],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral',
      description: [
        'Ang mga estudyanteng nakumpleto ang kursong ito ay maaaring magpatuloy ng kanilang edukasyon sa iba\'t ibang Higher Education qualifications.',
      ],
    },
  },
  'bsb60120-advanced-diploma-of-business': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Advanced Diploma of Business ay inaalok sa loob ng 18 buwan, katumbas ng 78 linggo, kasama ang 18 linggo ng bakasyon. Ito ay hahatiin sa anim na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Senior Administrator', 'Senior Executive', 'Executive Manager / Director'],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Ang mga potensyal na opsyon sa pagtatrabaho ay bilang manager sa iba\'t ibang larangan ng industriya.',
        'Ang mga estudyanteng nakumpleto ang kursong ito ay maaaring magpatuloy ng kanilang edukasyon sa BSB80120 Graduate Diploma of Management (Learning), pati na rin ang mga higher education qualifications sa business o management.',
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa RTO. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'bsb80120-graduate-diploma-of-management': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Graduate Diploma of Management (Learning) ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Business Manager', 'Business Director'],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Ang mga potensyal na opsyon sa pagtatrabaho ay bilang Leader o Manager sa mga organisasyon kung saan ginagamit ang pag-aaral upang bumuo ng organisational capability sa iba\'t ibang larangan ng industriya.',
        'Ang mga estudyanteng nakumpleto ang kursong ito ay maaaring magpatuloy ng kanilang edukasyon sa iba\'t ibang higher education qualifications sa organisational learning at development.',
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'bsb40920-certificate-iv-in-project-management-practice': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Certificate IV in Project Management Practice ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Contract Officer', 'Project Administrator', 'Quality Officer', 'Small Business Owner'],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'BSB50820 – Diploma of Project Management Practice',
          url: '/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'bsb50820-diploma-of-project-management-practice': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Diploma of Project Management Practice ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Project Officer', 'Project Coordinator', 'Project Manager'],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'BSB60720 Advanced Diploma of Program Management',
          url: '/project-and-program-management-courses/bsb60720-advanced-diploma-of-program-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'bsb60720-advanced-diploma-of-program-management': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Advanced Diploma of Program Management ay inaalok sa loob ng 18 buwan, katumbas ng 78 linggo, kasama ang 18 linggo ng bakasyon. Ito ay hahatiin sa anim na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Program Manager', 'Senior Project Manager', 'Program Leader', 'Program Coordinator'],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Ang mga estudyanteng nakumpleto ang kursong ito ay maaaring magpatuloy ng kanilang edukasyon sa iba\'t ibang Higher Education qualifications.',
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'bsb40420-certificate-iv-in-human-resource-management': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Certificate IV in Human Resource Management ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['HR Assistant', 'Recruitment Consultant', 'Workplace Health and Safety Officer'],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'BSB50320 – Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb50320-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'bsb50320-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Diploma of Human Resource Management ay inaalok sa loob ng 12 buwan, katumbas ng 52 linggo, kasama ang 12 linggo ng bakasyon. Ito ay hahatiin sa apat na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: ['Human Resources Manager', 'Human Resources Officer', 'Recruitment Consultant'],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'BSB60320 – Advanced Diploma of Human Resource Management',
          url: '/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'bsb60320-advanced-diploma-of-human-resource-management': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Advanced Diploma of Human Resource Management ay inaalok sa loob ng 18 buwan, katumbas ng 78 linggo, kasama ang 18 linggo ng bakasyon. Ito ay hahatiin sa anim na 10-linggong term.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
      description: [
        'Human Resources Practitioner.',
        'Personnel Officer.',
        'Industrial Relations Manager.',
        'Human Resources Development Practitioner.',
        'HR Manager.',
      ],
    },
    pathways: {
      title: 'Landas sa karagdagang pag-aaral / mga oportunidad sa karera',
      description: [
        'Pagkatapos makuha ang kwalipikasyong ito, maaaring kunin ng mga graduate ang susunod na kwalipikasyon:',
        {
          type: 'link',
          text: 'BSB80120 – Graduate Diploma of Management (Learning)',
          url: '/business-and-management-courses/bsb80120-graduate-diploma-of-management',
        },
      ],
    },
    additionalInfo: {
      title: 'Karagdagang Impormasyon',
      description:
        'Mangyaring basahin ang Student Handbook bago mag-enroll dahil naglalaman ito ng mahalagang impormasyon tungkol sa ABM. Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
    },
  },
  'hlt33115-certificate-iii-in-health-services-assistance': {
    courseDuration: {
      title: 'Tagal ng Kurso',
      description:
        'Ang Certificate III in Health Services Assistance ay inaalok sa loob ng 4 na buwan, katumbas ng 16 linggo, kasama ang face-to-face delivery sa aming Sydney campus.',
    },
    workPlacement: {
      title: 'Work Placement',
      description:
        '80 oras ng work placement sa tunay na healthcare settings. Sa panahon ng iyong work placement, kumukumpleto ka ng HLTINF006 (Infection prevention and control), HLTAIN001 (Assist with nursing care in an acute care setting), at CHCCCS031 (Provide individualised support). Kasama sa suporta ang work placement agreement, supervision ng mga kwalipikadong trainer/assessors, logbook instruction at suporta, at flexible shifts batay sa pangangailangan ng negosyo.',
    },
    studentSupport: {
      title: 'Suporta sa Estudyante',
      description: [
        '• Sinusuri ng ABM ang mga pangangailangan ng suporta ng estudyante bago mag-enroll sa pamamagitan ng Enrolment at Pre-Enrolment Forms.',
        '• Maaaring kasama sa mga suporta ang LLN assistance, assistive technology, karagdagang tutorial, at tulong sa mga online learning tools.',
        '• Ipinapaalam ang mga karagdagang gastos o limitasyon bago mag-enroll.',
        '• Kung hindi maibigay ng ABM ang ilang suporta, ire-refer ang mga estudyante sa mga third-party provider sa sarili nilang gastos.',
        '• Kung hindi makapagbigay ang ABM ng angkop na kapaligiran sa pag-aaral, ipapaalam nito sa estudyante at maaaring i-refer sila sa ibang provider sa halip na i-enroll sila.',
      ],
    },
    jobRoles: {
      title: 'Mga Trabaho',
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
      title: 'Mga Landas sa Karagdagang Pag-aaral / Mga Oportunidad sa Karera',
      description: [
        'Pagkatapos makumpleto, maaari kang maging karapat-dapat na magpatuloy sa:',
        '• HLT54115 Diploma of Nursing',
        '• CHC33015 Certificate III in Individual Support',
        '• CHC43115 Certificate IV in Disability',
        '• CHC52015 Diploma of Community Services',
        '• HLT47321 Certificate IV in Health Administration',
        'At higit pang healthcare qualifications.',
      ],
    },
    additionalInfo: {
      title: 'Mga Highlight ng Programa',
      description: [
        '• Matuto sa isang suportadong, face-to-face na kapaligiran ng classroom',
        '• Bumuo ng espesyalisadong Ingles para sa healthcare communication',
        '• Makakuha ng nationally recognised qualification',
        '• Kumpletuhin ang 80 oras ng work placement sa tunay na healthcare settings',
        '• Angkop para sa mga may o walang nakaraang healthcare experience',
        '• Komprehensibong suporta sa buong programa',
        'Para sa higit pang impormasyon, mangyaring makipag-ugnayan sa ABM sa pamamagitan ng pag-email sa info@abm.edu.au o tumawag sa +61 (02) 9160 4507.',
      ].join('\n'),
    },
    faq: {
      title: 'Mga Madalas Itanong',
      description: [
        { question: 'Magkano ang kursong nursing assistant?', answer: 'Mangyaring sumangguni sa aming opisyal na pricelist para sa pinakabagong impormasyon sa tuition.' },
        { question: 'Aling visa ang nagpapahintulot sa akin na mag-enroll?', answer: 'Ang kursong ito ay angkop para sa mga estudyante sa Working Holiday Visa o anumang uri ng visa na nagpapahintulot sa iyo na mag-aral ng 16 linggo nang walang Confirmation of Enrolment (CoE). Hindi kami nagbibigay ng payo sa visa. Mangyaring suriin ang iyong mga kondisyon sa visa o kumonsulta sa rehistradong migration agent kung hindi ka sigurado.' },
        { question: 'Paano ang placement at suporta para sa clinical training?', answer: 'Nagbibigay ang ABM ng 80 oras ng work placement bilang bahagi ng kursong, inaayos sa pamamagitan ng aming mapagkakatiwalaang industry partners. Pagkatapos makumpleto, nag-aalok din kami ng mga oportunidad sa paid employment para sa mga eligible na graduate, sinusuportahan ang iyong maayos na paglipat sa healthcare workforce.' },
        { question: 'Makakahanap ba ako ng trabaho sa qualification na ito?', answer: 'Oo, ang aming mga graduate ay madalas na nakakakuha ng mga tungkulin sa Private Hospitals, Medical Centres, Aged Care Centres.' },
        { question: 'Ano kung hindi sapat ang aking mga kasanayan sa Ingles?', answer: 'Ang minimum na entry requirement ay IELTS 5.5 o katumbas. Kung kasalukuyan mong hawak ang IELTS 4.5 o katumbas, maaari kang mag-enroll sa kurso sa Plus Nursing English, na nagbibigay ng karagdagang suporta sa wika na nakahanay sa healthcare settings. Kung wala kang resulta ng English test, maaari mong suriin ang iyong proficiency sa Ingles sa pamamagitan ng ABM English Placement Test.' },
      ],
    },
  },
};
