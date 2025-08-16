import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the cookery and hospitality courses page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'cookeryAndHospitality',
  });

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
          url: '/courses/cookery/cookery_1.png',
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
      images: ['/courses/cookery/cookery_1.png'],
    },
    alternates: {
      canonical: `/${locale}/cookery-and-hospitality-courses`,
      languages: {
        en: '/en/cookery-and-hospitality-courses',
        ko: '/kr/cookery-and-hospitality-courses',
        es: '/sp/cookery-and-hospitality-courses',
      },
    },
    keywords: [
      'cookery',
      'hospitality',
      'kitchen management',
      'food service',
      'culinary arts',
      'diploma',
      'certificate',
      'Australia',
      'Sydney',
    ],
  };
}
