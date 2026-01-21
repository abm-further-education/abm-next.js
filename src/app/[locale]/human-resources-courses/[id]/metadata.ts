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
  'bsb40420-certificate-iv-in-human-resource-management': {
    title: 'BSB40420 Certificate IV in Human Resource Management',
    description:
      'Develop HR skills for entry-level positions. This nationally recognized qualification prepares you for roles in recruitment, employee relations, and HR administration.',
    image: '/courses/hr/hr_1.png',
    keywords: [
      'certificate IV',
      'human resources',
      'HR management',
      'recruitment',
      'employee relations',
      'Sydney',
      'Australia',
    ],
  },
  'bsb50320-diploma-of-human-resource-management': {
    title: 'BSB50320 Diploma of Human Resource Management',
    description:
      'Advanced HR management and strategic thinking. This diploma prepares you for HR management positions with expertise in workforce planning and performance management.',
    image: '/courses/hr/hr_2.png',
    keywords: [
      'diploma',
      'human resources',
      'HR management',
      'workforce planning',
      'performance management',
      'Sydney',
      'Australia',
    ],
  },
  'bsb60320-advanced-diploma-of-human-resource-management': {
    title: 'BSB60320 Advanced Diploma of Human Resource Management',
    description:
      'Senior HR leadership and strategic management skills. Prepare for senior HR director and executive positions with comprehensive strategic HR expertise.',
    image: '/courses/hr/hr_3.png',
    keywords: [
      'advanced diploma',
      'human resources',
      'HR leadership',
      'strategic HR',
      'senior management',
      'Sydney',
      'Australia',
    ],
  },
};

// Default metadata for unknown courses
const defaultMetadata = {
  title: 'Human Resources Course',
  description:
    'Explore our range of human resources courses at ABM Further Education. Nationally recognized qualifications in Sydney, Australia.',
  image: '/courses/hr/hr_1.png',
  keywords: [
    'human resources',
    'HR',
    'management',
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
      canonical: `/${locale}/human-resources-courses/${id}`,
      languages: {
        en: `/en/human-resources-courses/${id}`,
        ko: `/kr/human-resources-courses/${id}`,
        es: `/sp/human-resources-courses/${id}`,
      },
    },
    keywords: course.keywords,
  };
}
