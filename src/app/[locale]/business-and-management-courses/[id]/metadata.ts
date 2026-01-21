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
  'bsb40120-certificate-iv-in-business': {
    title: 'BSB40120 Certificate IV in Business',
    description:
      'Develop foundation business skills and knowledge. This nationally recognized qualification prepares you for supervisory and team leader roles across various industries.',
    image: '/courses/business/business_1.jpg',
    keywords: [
      'certificate IV',
      'business',
      'management',
      'leadership',
      'team leader',
      'supervisor',
      'Sydney',
      'Australia',
    ],
  },
  'bsb50120-diploma-of-business': {
    title: 'BSB50120 Diploma of Business',
    description:
      'Comprehensive business management and leadership skills. This diploma prepares you for management positions with strategic planning and operational expertise.',
    image: '/courses/business/business_2.png',
    keywords: [
      'diploma',
      'business',
      'management',
      'leadership',
      'strategic planning',
      'operations',
      'Sydney',
      'Australia',
    ],
  },
  'bsb60120-advanced-diploma-of-business': {
    title: 'BSB60120 Advanced Diploma of Business',
    description:
      'Advanced business strategy and management skills. Prepare for senior management and executive positions with comprehensive business acumen.',
    image: '/courses/business/business_3.png',
    keywords: [
      'advanced diploma',
      'business',
      'management',
      'senior management',
      'executive',
      'strategy',
      'Sydney',
      'Australia',
    ],
  },
  'bsb80120-graduate-diploma-of-management': {
    title: 'BSB80120 Graduate Diploma of Management (Learning)',
    description:
      'Postgraduate level management and leadership skills. This graduate diploma develops advanced capabilities for senior leadership and organizational development roles.',
    image: '/courses/business/business_4.png',
    keywords: [
      'graduate diploma',
      'management',
      'leadership',
      'postgraduate',
      'organizational development',
      'senior leadership',
      'Sydney',
      'Australia',
    ],
  },
};

// Default metadata for unknown courses
const defaultMetadata = {
  title: 'Business & Management Course',
  description:
    'Explore our range of business and management courses at ABM Further Education. Nationally recognized qualifications in Sydney, Australia.',
  image: '/courses/business/business_1.jpg',
  keywords: [
    'business',
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
      canonical: `/${locale}/business-and-management-courses/${id}`,
      languages: {
        en: `/en/business-and-management-courses/${id}`,
        ko: `/kr/business-and-management-courses/${id}`,
        es: `/sp/business-and-management-courses/${id}`,
      },
    },
    keywords: course.keywords,
  };
}
