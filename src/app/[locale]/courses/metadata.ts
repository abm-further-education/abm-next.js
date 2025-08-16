import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the courses page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'courses' });

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
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ABM Further Education`,
      description: description,
    },
    alternates: {
      canonical: `/${locale}/courses`,
      languages: {
        en: '/en/courses',
        ko: '/kr/courses',
        es: '/sp/courses',
      },
    },
  };
}
