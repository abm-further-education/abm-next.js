import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Generate metadata for the student insights page
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const t = await getTranslations({ locale, namespace: 'studentInsights' });

  const title = t('testimonialTitle');
  const description = t('testimonialDescription');

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
          url: '/home/testimonial.png',
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
      images: ['/home/testimonial.png'],
    },
    alternates: {
      canonical: `/${locale}/abm-student-insights`,
      languages: {
        en: '/en/abm-student-insights',
        ko: '/kr/abm-student-insights',
        es: '/sp/abm-student-insights',
      },
    },
    keywords: [
      'student testimonials',
      'student insights',
      'student reviews',
      'graduate success',
      'ABM education',
      'student experiences',
      'Australia',
      'Sydney',
    ],
  };
}
