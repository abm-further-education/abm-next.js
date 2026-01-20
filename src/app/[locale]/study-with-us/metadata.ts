import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the study with us page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'studyWithUs' });

  const title = t('title');
  const description = t('description');

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
          url: '/study-with-us/banner.png',
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
      images: ['/study-with-us/banner.png'],
    },
    alternates: {
      canonical: `/${locale}/study-with-us`,
      languages: {
        en: '/en/study-with-us',
        ko: '/kr/study-with-us',
        es: '/sp/study-with-us',
      },
    },
    keywords: [
      'study with us',
      'campus',
      'facilities',
      'modern kitchen',
      'industry trainers',
      'work placement',
      'student support',
      'Sydney',
      'Australia',
      'education',
    ],
  };
}
