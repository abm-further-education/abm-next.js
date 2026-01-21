import { Metadata } from 'next';

// Course metadata mapping
const courseMetadata: {
  [key: string]: {
    title: string;
    description: string;
    image: string;
    keywords: string[];
  };
} = {
  'sit40521-certificate-iv-in-kitchen-management': {
    title: 'SIT40521 Certificate IV in Kitchen Management',
    description:
      'Learn professional kitchen management skills and culinary techniques. This nationally recognized qualification prepares you for supervisory roles in commercial kitchens.',
    image: '/courses/cookery/KM.png',
    keywords: [
      'kitchen management',
      'culinary arts',
      'certificate IV',
      'commercial cooking',
      'chef training',
      'Sydney',
      'Australia',
    ],
  },
  'sit50422-diploma-of-hospitality-management': {
    title: 'SIT50422 Diploma of Hospitality Management',
    description:
      'Comprehensive hospitality management training. Develop leadership and operational skills for the hospitality industry with this nationally recognized diploma.',
    image: '/courses/cookery/DHM.png',
    keywords: [
      'hospitality management',
      'diploma',
      'hotel management',
      'restaurant management',
      'leadership',
      'Sydney',
      'Australia',
    ],
  },
  'advanced-diploma-of-hospitality-management': {
    title: 'SIT60322 Advanced Diploma of Hospitality Management',
    description:
      'Advanced hospitality management and leadership skills. Prepare for senior management positions in the hospitality industry.',
    image: '/courses/cookery/ADHM.png',
    keywords: [
      'advanced diploma',
      'hospitality management',
      'senior management',
      'leadership',
      'strategic planning',
      'Sydney',
      'Australia',
    ],
  },
  'industry-placement-work-placement': {
    title: 'Industry Placement - Work Placement',
    description:
      'Gain hands-on experience in commercial kitchens through our industry placement program. Apply your culinary skills in real-world environments.',
    image: '/courses/cookery/industry.png',
    keywords: [
      'industry placement',
      'work placement',
      'internship',
      'practical training',
      'kitchen experience',
      'Sydney',
      'Australia',
    ],
  },
  'industry-placement-hospitality-management': {
    title: 'Industry Placement for Hospitality Management (F&B)',
    description:
      'Hands-on experience in food and beverage service through our hospitality industry placement program.',
    image: '/courses/cookery/industry-hospitality.jpg',
    keywords: [
      'industry placement',
      'hospitality',
      'food and beverage',
      'practical training',
      'work experience',
      'Sydney',
      'Australia',
    ],
  },
  fss: {
    title: 'NSW Food Safety Supervisor',
    description:
      'Become a certified Food Safety Supervisor in NSW. Learn essential food safety and hygiene management skills required by law.',
    image: '/short-course/fss_1.png',
    keywords: [
      'food safety',
      'food safety supervisor',
      'NSW',
      'hygiene',
      'HACCP',
      'certification',
      'Sydney',
      'Australia',
    ],
  },
};

// Default metadata for unknown courses
const defaultMetadata = {
  title: 'Cookery & Hospitality Course',
  description:
    'Explore our range of cookery and hospitality courses at ABM Further Education. Nationally recognized qualifications in Sydney, Australia.',
  image: '/courses/cookery/cookery_1.png',
  keywords: [
    'cookery',
    'hospitality',
    'courses',
    'training',
    'Sydney',
    'Australia',
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;

  const course = courseMetadata[id] || defaultMetadata;
  const title = course.title;
  const description = course.description;

  return {
    title: `${title} | ABM Further Education`,
    description: description,
    openGraph: {
      title: `${title} | ABM Further Education`,
      description: description,
      type: 'website',
      locale: locale,
      siteName: 'ABM Further Education',
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ABM Further Education`,
      description: description,
      images: [course.image],
    },
    alternates: {
      canonical: `/${locale}/cookery-and-hospitality-courses/${id}`,
      languages: {
        en: `/en/cookery-and-hospitality-courses/${id}`,
        ko: `/kr/cookery-and-hospitality-courses/${id}`,
        es: `/sp/cookery-and-hospitality-courses/${id}`,
      },
    },
    keywords: course.keywords,
  };
}
