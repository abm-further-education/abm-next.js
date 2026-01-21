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
  'sis30321-certificate-iii-in-fitness': {
    title: 'SIS30321 Certificate III in Fitness',
    description:
      'Foundation fitness and personal training skills. This nationally recognized qualification prepares you for entry-level roles as a gym instructor or group fitness instructor.',
    image: '/courses/fitness/ABM_Fitness_Photos_13.jpg',
    keywords: [
      'certificate III',
      'fitness',
      'personal training',
      'gym instructor',
      'group fitness',
      'Sydney',
      'Australia',
    ],
  },
  'sis40221-certificate-iv-in-fitness': {
    title: 'SIS40221 Certificate IV in Fitness',
    description:
      'Advanced fitness training and instruction skills. Become a qualified personal trainer with this nationally recognized certificate IV qualification.',
    image: '/courses/fitness/ABM_Fitness_Photos_10.jpg',
    keywords: [
      'certificate IV',
      'fitness',
      'personal trainer',
      'advanced training',
      'exercise programming',
      'Sydney',
      'Australia',
    ],
  },
  'sis50321-diploma-of-sport': {
    title: 'SIS50321 Diploma of Sport (Coaching)',
    description:
      'Comprehensive sports coaching and development program. Develop high-level coaching skills and athlete development expertise with this diploma qualification.',
    image: '/courses/fitness/diploma-of-sport.png',
    keywords: [
      'diploma',
      'sport',
      'coaching',
      'athlete development',
      'sports management',
      'Sydney',
      'Australia',
    ],
  },
  'certificate-iii-in-fitness-fast-track': {
    title: 'Certificate III in Fitness (Fast Track)',
    description:
      'Accelerated fitness instructor program. Complete your Certificate III in Fitness qualification in a condensed timeframe with our intensive fast track course.',
    image: '/courses/fitness/ABM_Fitness_Photos_11.jpg',
    keywords: [
      'certificate III',
      'fitness',
      'fast track',
      'accelerated',
      'gym instructor',
      'intensive course',
      'Sydney',
      'Australia',
    ],
  },
  'certificate-iv-in-fitness-fast-track': {
    title: 'Certificate IV in Fitness (Fast Track)',
    description:
      'Accelerated personal trainer program. Complete your Certificate IV in Fitness qualification in a condensed timeframe with our intensive fast track course.',
    image: '/courses/fitness/ABM_Fitness_Photos_9.jpg',
    keywords: [
      'certificate IV',
      'fitness',
      'fast track',
      'accelerated',
      'personal trainer',
      'intensive course',
      'Sydney',
      'Australia',
    ],
  },
};

// Default metadata for unknown courses
const defaultMetadata = {
  title: 'Fitness & Personal Training Course',
  description:
    'Explore our range of fitness and personal training courses at ABM Further Education. Nationally recognized qualifications in Sydney, Australia.',
  image: '/courses/fitness/ABM_Fitness_Photos_13.jpg',
  keywords: [
    'fitness',
    'personal training',
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
      canonical: `/${locale}/fitness-instructor-personal-trainer-courses/${id}`,
      languages: {
        en: `/en/fitness-instructor-personal-trainer-courses/${id}`,
        ko: `/kr/fitness-instructor-personal-trainer-courses/${id}`,
        es: `/sp/fitness-instructor-personal-trainer-courses/${id}`,
      },
    },
    keywords: course.keywords,
  };
}
