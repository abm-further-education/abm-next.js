// 시간표 데이터 타입 정의
export interface TimetableEntry {
  qualification: string;
  code: string;
  intake: string;
  mon?: string;
  tue?: string;
  wed?: string;
  thu?: string;
  fri?: string;
  tutorial?: string;
}

// 코스별 타임테이블 데이터
export const timetableDataByCategory = {
  // Kitchen Management & Hospitality 코스
  cookery: [
    {
      qualification: 'Certificate IV in Kitchen Management',
      code: 'SIT40521',
      intake: 'October – November 2024',
      thu: '8:00 am',
      fri: '8:00 am',
      tutorial: 'MON / THU 1:00 pm',
    },
    {
      qualification: 'Certificate IV in Kitchen Management',
      code: 'SIT40521',
      intake: 'January – February 2025',
      thu: '1:00 pm',
      fri: '1:00 pm',
      tutorial: 'MON / THU 1:00 pm',
    },
    {
      qualification: 'Certificate IV in Kitchen Management',
      code: 'SIT40521',
      intake: 'April – May 2025',
      mon: '1:00 pm',
      tue: '1:00 pm',
      tutorial: 'MON / THU 1:00 pm',
    },
    {
      qualification: 'Certificate IV in Kitchen Management',
      code: 'SIT40521',
      intake: 'July – August 2025',
      wed: '8:00 am',
      thu: '8:00 am',
      tutorial: 'MON / THU 1:00 pm',
    },
    {
      qualification: 'Certificate IV in Kitchen Management',
      code: 'SIT40521',
      intake: 'October – November 2025',
      mon: '8:00 am',
      tue: '8:00 am',
      tutorial: 'MON / THU 1:00 pm',
    },
    {
      qualification: 'Certificate IV in Kitchen Management',
      code: 'SIT40521',
      intake: 'January – February 2026',
      tue: '1:00 pm',
      wed: '1:00 pm',
      tutorial: 'MON / THU 1:00 pm',
    },
  ],

  hospitality: [
    {
      qualification: 'Diploma of Hospitality Management',
      code: 'SIT50422',
      intake: '[SIT50422] Diploma of Hospitality Management',
      mon: '8:00 am',
      tue: '8:00 am',
      tutorial: 'MON / THU 1:00 pm',
    },
    {
      qualification: 'Advanced Diploma of Hospitality Management',
      code: 'SIT60322',
      intake: '[SIT60322] Advanced Diploma of Hospitality Management',
      mon: '8:00 am',
      tue: '8:00 am',
      tutorial: 'MON / THU 1:00 pm',
    },
  ],

  // Business 코스
  business: [
    {
      qualification: 'Certificate IV in Business',
      code: 'BSB40120',
      intake: '[BSB40120] Certificate IV in Business',
      mon: '4:00 pm',
      tue: '1:00 pm',
      wed: '',
      thu: '11:00 am',
    },
    {
      qualification: 'Diploma of Business',
      code: 'BSB50120',
      intake: '[BSB50120] Diploma of Business',
      mon: '1:00 pm',
      tue: '4:00 pm',
      wed: '',
      thu: '',
      fri: '11:00 am',
    },
    {
      qualification: 'Advanced Diploma of Business',
      code: 'BSB60120',
      intake: '[BSB60120] Advanced Diploma of Business',
      mon: '1:00 pm',
      tue: '4:00 pm',
      wed: '11:00 am',
    },
    {
      qualification: 'Graduate Diploma of Management',
      code: 'BSB80120',
      intake: '[BSB80120] Graduate Diploma of Management',
      mon: '5:00 pm',
      tue: '2:00 pm',
      wed: '',
      thu: '11:00 am',
    },
  ],

  // Project Management 코스
  project: [
    {
      qualification: 'Certificate IV in Project Management Practice',
      code: 'BSB40920',
      intake: '[BSB40920] Certificate IV in Project Management Practice',
      mon: '9:00 am',
      tue: '5:00 pm',
      wed: '5:00 pm',
      thu: '9:00 am',
    },
    {
      qualification: 'Diploma of Project Management',
      code: 'BSB50820',
      intake: '[BSB50820] Diploma of Project Management',
      mon: '12:00 pm',
      tue: '7:00 pm',
      wed: '7:00 pm',
      thu: '12:00 pm',
    },
    {
      qualification: 'Advanced Diploma of Program Management',
      code: 'BSB60720',
      intake: '[BSB60720] Advanced Diploma of Program Management',
      mon: '3:00 pm',
      tue: '3:00 pm',
      wed: '9:00 am',
    },
  ],

  // Human Resource 코스
  humanResource: [
    {
      qualification: 'Certificate IV in Human Resource Management',
      code: 'BSB40420',
      intake: '[BSB40420] Certificate IV in Human Resource Management',
      mon: '5:00 pm',
      tue: '5:00 pm',
      wed: '',
      thu: '1:00 pm',
    },
    {
      qualification: 'Diploma of Human Resource Management',
      code: 'BSB50320',
      intake: '[BSB50320] Diploma of Human Resource Management',
      mon: '5:00 pm',
      tue: '5:00 pm',
      wed: '',
      thu: '1:00 pm',
    },
    {
      qualification: 'Advanced Diploma of Human Resource Management',
      code: 'BSB60320',
      intake: '[BSB60320] Advanced Diploma of Human Resource Management',
      mon: 'TBC',
      tue: 'TBC',
      wed: 'TBC',
      thu: 'TBC',
    },
  ],

  // Fitness 코스
  fitness: [
    {
      qualification: 'Certificate III in Fitness (International Students)',
      code: 'SIS30321',
      intake: '[SIS30321] Certificate III in Fitness (International Students)',
      mon: '8:00 am',
      tue: '8:00 am',
    },

    {
      qualification: 'Certificate III & IV in Fitness (Fast Track - Domestic)',
      code: 'SIS30321',
      intake:
        '[SIS30321] Certificate III & IV in Fitness (Fast Track - Domestic)',
      tue: '1:00 pm',
      wed: '9:00 am',
      thu: '9:00 am',
    },
  ],
};

// 코스 코드와 카테고리 매핑
export const courseCodeToCategory: Record<
  string,
  keyof typeof timetableDataByCategory
> = {
  // Kitchen Management
  SIT40521: 'cookery',

  // Hospitality Management
  SIT50422: 'hospitality',
  SIT60322: 'hospitality',

  // Business
  BSB40120: 'business',
  BSB50120: 'business',
  BSB60120: 'business',
  BSB80120: 'business',

  // Project Management
  BSB40920: 'project',
  BSB50820: 'project',
  BSB60720: 'project',

  // Human Resource
  BSB40420: 'humanResource',
  BSB50320: 'humanResource',
  BSB60320: 'humanResource',

  // Fitness
  SIS30321: 'fitness',
  SIS40221: 'fitness',
};

// 특정 코스 코드에 해당하는 타임테이블 가져오기
export function getTimetableByCode(courseCode: string): TimetableEntry[] {
  const category = courseCodeToCategory[courseCode];
  if (!category) return [];

  return timetableDataByCategory[category].filter(
    (entry) => entry.code === courseCode
  );
}

// 카테고리별 타임테이블 가져오기
export function getTimetableByCategory(
  category: keyof typeof timetableDataByCategory
): TimetableEntry[] {
  return timetableDataByCategory[category] || [];
}

// 모든 타임테이블 데이터 (기존 페이지용)
export const allTimetableData: TimetableEntry[] = [
  ...timetableDataByCategory.cookery,
  ...timetableDataByCategory.hospitality,
  ...timetableDataByCategory.business,
  ...timetableDataByCategory.project,
  ...timetableDataByCategory.humanResource,
  ...timetableDataByCategory.fitness,
];
