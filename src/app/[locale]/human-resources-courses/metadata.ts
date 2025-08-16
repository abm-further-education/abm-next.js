import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the human resources courses page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hrPage' });

  const title = t('heading');
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
          url: '/home/HR.png',
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
      images: ['/home/HR.png'],
    },
    alternates: {
      canonical: `/${locale}/human-resources-courses`,
      languages: {
        en: '/en/human-resources-courses',
        ko: '/kr/human-resources-courses',
        es: '/sp/human-resources-courses',
      },
    },
    keywords: [
      'human resources',
      'HR management',
      'certificate',
      'diploma',
      'advanced diploma',
      'BSB40420',
      'BSB50320',
      'BSB60320',
      'Australia',
      'Sydney',
    ],
  };
}
