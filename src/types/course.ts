// =====================================================
// Course Database Types
// Generated for Supabase course data migration
// =====================================================

// Supported locales
export type Locale = 'en' | 'kr' | 'sp' | 'pt' | 'jp' | 'tl' | 'zh' | 'id';

// Course categories
export type CourseCategory =
  | 'cookery'
  | 'hospitality'
  | 'fitness'
  | 'business'
  | 'project'
  | 'hr'
  | 'health'
  | 'short-course-hospitality'
  | 'short-course-cooking'
  | 'short-course-online';

// Course types
export type CourseType = 'full-course' | 'short-course' | 'fast-track';

// Course levels
export type CourseLevel =
  | 'certificate-iii'
  | 'certificate-iv'
  | 'diploma'
  | 'advanced-diploma'
  | 'graduate-diploma';

// =====================================================
// Database Table Types (matches Supabase schema)
// =====================================================

// Base course data (non-translatable)
export interface DbCourse {
  id: string;
  category: CourseCategory;
  type: CourseType;
  level: CourseLevel | null;
  duration: string;
  price: number | null;
  image: string;
  link: string;
  tags: string[];
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

// Course translations
export interface DbCourseTranslation {
  id: string;
  course_id: string;
  locale: Locale;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

// Course details section types
export interface TableData {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface LinkData {
  type: 'link';
  text: string;
  url: string;
}

export type DescriptionItem = string | TableData | LinkData;

// Course details (sections like duration, job roles, etc.)
export interface DbCourseDetail {
  id: string;
  course_id: string;
  locale: Locale;
  section_key: string;
  title: string;
  description: DescriptionItem | DescriptionItem[];
  display_order: number;
  created_at: string;
  updated_at: string;
}

// Delivery site location
export interface DeliverySiteLocation {
  type: string;
  address: string;
}

// Course information (metadata)
export interface DbCourseInformation {
  id: string;
  course_id: string;
  locale: Locale;
  course_code: string | null;
  cricos_code: string | null;
  description: string | null;
  duration: string | null;
  entry_requirement: string | string[] | null;
  delivery_mode: {
    title: string;
    mode: string;
  } | null;
  delivery_site: {
    title: string;
    locations: DeliverySiteLocation[];
  } | null;
  additional_info: {
    description?: string;
    linkText?: string;
    linkUrl?: string;
  } | null;
  starting_dates: Array<{
    title?: string;
    dates?: string[];
  }> | null;
  tables: Array<{
    headers: string[];
    rows: string[][];
  }> | null;
  partners: Array<{
    name: string;
    desc: string;
  }> | null;
  created_at: string;
  updated_at: string;
}

// Short course base data
export interface DbShortCourse {
  id: string;
  images: string[];
  location: string;
  price: number;
  duration: string;
  max_participants: string | null;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

// Short course date
export interface DbShortCourseDate {
  id: string;
  short_course_id: string;
  date: string;
  display_date: string;
  time: string;
  available: boolean;
  created_at: string;
  updated_at: string;
}

// Short course translation content (all translatable fields)
export interface ShortCourseContent {
  specialOffer?: {
    textBeforeCode?: string;
    code: string;
    textAfterCode?: string;
    discount: string;
    validUntil: string;
    note: string;
  };
  courseType?: {
    label: string;
    options: string[];
    selectLabel?: string;
  };
  whoShouldAttend?: string[];
  whatYoullLearn?: string[];
  takeHomeMessage?: string;
  dressCode?: string;
  callToAction?: string;
  whatYoullMake?: string[];
  instructor?: string;
  whatYoullExperience?: string[];
  whyThisCourse?: string;
  whyLearnToMake?: string[];
  antipastoMessage?: string;
  courseOverview?: string;
  keyUnits?: Array<{
    code: string;
    title: string;
    description: string;
  }>;
  activities?: Array<{
    occasion: string;
    description: string;
  }>;
  whoNeedsFSS?: string[];
  whyYouNeedRSA?: string[];
  whatToBring?: string[];
  howToEnrol?: string[];
  whyTrainWithABM?: string;
  courseFormat?: string | string[];
  faq1?: { question: string; answerList?: string[]; answer?: string };
  faq2?: { question: string; answer: string | string[] };
  faq3?: { question: string; answer: string | string[] };
  faq4?: { question: string; answer: string | string[] };
  faq5?: { question: string; answer: string | string[] };
  courseDeliveryLabel?: string;
  courseDelivery?: string;
  locationLabel?: string;
  timeLabel?: string;
  time?: string;
  addressLabel?: string;
  address?: string;
  specialOfferLabel?: string;
  selectDateLabel?: string;
  selectDateOptionLabel?: string;
}

// Short course translation
export interface DbShortCourseTranslation {
  id: string;
  short_course_id: string;
  locale: Locale;
  title: string;
  description: string;
  content: ShortCourseContent;
  created_at: string;
  updated_at: string;
}

// =====================================================
// Combined/Joined Types (for frontend use)
// =====================================================

// Course with translation (what the frontend typically needs)
export interface CourseWithTranslation extends DbCourse {
  title: string;
  description: string;
}

// Course detail item (for UI components)
// Note: description can be string, string[], or DescriptionItem[] to match the CourseDetail component
export interface CourseDetailItem {
  title: string;
  description: string | string[] | DescriptionItem[];
}

// Course details map (keyed by section)
export interface CourseDetailInfo {
  [sectionKey: string]: CourseDetailItem;
}

// Course information (for UI components)
export interface CourseInformationInfo {
  description?: string;
  courseCode?: string;
  cricosCode?: string;
  duration?: string;
  entryRequirement?: string | string[];
  deliveryMode?: {
    title: string;
    mode: string;
  };
  deliverySite?: {
    title: string;
    locations: DeliverySiteLocation[];
  };
  additionalInfo?: {
    linkText?: string;
    linkUrl?: string;
    description?: string;
  };
  startingDates?: Array<{
    title?: string;
    dates?: string[];
  }>;
  tables?: Array<{
    headers: string[];
    rows: string[][];
  }>;
  partners?: Array<{
    name: string;
    desc: string;
  }>;
}

// Short course with all data (for UI)
export interface ShortCourseWithTranslation extends DbShortCourse {
  title: string;
  description: string;
  dates: Array<{
    date: string;
    displayDate: string;
    time: string;
    available?: boolean;
  }>;
  // Spread all content fields
  specialOffer?: ShortCourseContent['specialOffer'];
  courseType?: ShortCourseContent['courseType'];
  whoShouldAttend?: string[];
  whatYoullLearn?: string[];
  takeHomeMessage?: string;
  dressCode?: string;
  callToAction?: string;
  whatYoullMake?: string[];
  instructor?: string;
  whatYoullExperience?: string[];
  whyThisCourse?: string;
  whyLearnToMake?: string[];
  antipastoMessage?: string;
  courseOverview?: string;
  keyUnits?: ShortCourseContent['keyUnits'];
  activities?: ShortCourseContent['activities'];
  whoNeedsFSS?: string[];
  whyYouNeedRSA?: string[];
  whatToBring?: string[];
  howToEnrol?: string[];
  whyTrainWithABM?: string;
  courseFormat?: string | string[];
  faq1?: ShortCourseContent['faq1'];
  faq2?: ShortCourseContent['faq2'];
  faq3?: ShortCourseContent['faq3'];
  faq4?: ShortCourseContent['faq4'];
  faq5?: ShortCourseContent['faq5'];
  courseDeliveryLabel?: string;
  courseDelivery?: string;
  locationLabel?: string;
  timeLabel?: string;
  time?: string;
  addressLabel?: string;
  address?: string;
  specialOfferLabel?: string;
  selectDateLabel?: string;
  selectDateOptionLabel?: string;
}

// =====================================================
// Legacy Types (for backward compatibility)
// =====================================================

// This matches the existing CourseData interface
export interface CourseData {
  id: string;
  title: string;
  description: string;
  category: CourseCategory;
  type: CourseType;
  level?: CourseLevel;
  duration: string;
  price?: number;
  image: string;
  link: string;
  tags: string[];
}

// This matches the existing ShortCourseData interface
export interface ShortCourseData {
  title: string;
  description: string;
  images: string[];
  dates: Array<{
    date: string;
    displayDate: string;
    time: string;
    available?: boolean;
  }>;
  maxParticipants?: string;
  location: string;
  price: number;
  duration: string;
  specialOffer?: ShortCourseContent['specialOffer'];
  courseType?: ShortCourseContent['courseType'];
  whoShouldAttend?: string[];
  whatYoullLearn?: string[];
  takeHomeMessage?: string;
  dressCode?: string;
  callToAction?: string;
  whatYoullMake?: string[];
  instructor?: string;
  whatYoullExperience?: string[];
  whyThisCourse?: string;
  whyLearnToMake?: string[];
  antipastoMessage?: string;
  courseOverview?: string;
  keyUnits?: ShortCourseContent['keyUnits'];
  activities?: ShortCourseContent['activities'];
  whoNeedsFSS?: string[];
  whyYouNeedRSA?: string[];
  whatToBring?: string[];
  howToEnrol?: string[];
  whyTrainWithABM?: string;
  courseFormat?: string | string[];
  faq1?: ShortCourseContent['faq1'];
  faq2?: ShortCourseContent['faq2'];
  faq3?: ShortCourseContent['faq3'];
  faq4?: ShortCourseContent['faq4'];
  faq5?: ShortCourseContent['faq5'];
  courseDeliveryLabel?: string;
  courseDelivery?: string;
  locationLabel?: string;
  timeLabel?: string;
  time?: string;
  addressLabel?: string;
  address?: string;
  specialOfferLabel?: string;
  selectDateLabel?: string;
  selectDateOptionLabel?: string;
}
