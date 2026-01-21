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
  'bsb40920-certificate-iv-in-project-management-practice': {
    title: 'BSB40920 Certificate IV in Project Management Practice',
    description:
      'Foundation project management skills and methodologies. This nationally recognized qualification prepares you for project coordinator and assistant project manager roles.',
    image: '/courses/project/project_1.png',
    keywords: [
      'certificate IV',
      'project management',
      'project coordinator',
      'methodologies',
      'planning',
      'Sydney',
      'Australia',
    ],
  },
  'bsb50820-diploma-of-project-management-practice': {
    title: 'BSB50820 Diploma of Project Management',
    description:
      'Comprehensive project management and leadership skills. This diploma prepares you for project manager positions with expertise in planning, execution, and stakeholder management.',
    image: '/courses/project/project_2.png',
    keywords: [
      'diploma',
      'project management',
      'project manager',
      'leadership',
      'stakeholder management',
      'Sydney',
      'Australia',
    ],
  },
  'bsb60720-advanced-diploma-of-program-management': {
    title: 'BSB60720 Advanced Diploma of Program Management',
    description:
      'Advanced project management and strategic planning skills. Prepare for senior program manager and portfolio manager positions with comprehensive program management expertise.',
    image: '/courses/project/project_3.png',
    keywords: [
      'advanced diploma',
      'program management',
      'portfolio management',
      'strategic planning',
      'senior management',
      'Sydney',
      'Australia',
    ],
  },
};

// Default metadata for unknown courses
const defaultMetadata = {
  title: 'Project & Program Management Course',
  description:
    'Explore our range of project and program management courses at ABM Further Education. Nationally recognized qualifications in Sydney, Australia.',
  image: '/courses/project/project_1.png',
  keywords: [
    'project management',
    'program management',
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
      canonical: `/${locale}/project-and-program-management-courses/${id}`,
      languages: {
        en: `/en/project-and-program-management-courses/${id}`,
        ko: `/kr/project-and-program-management-courses/${id}`,
        es: `/sp/project-and-program-management-courses/${id}`,
      },
    },
    keywords: course.keywords,
  };
}
