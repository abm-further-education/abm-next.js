import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'openDay' });

  return {
    title: `${t('metadata.title')} | ABM Further Education`,
    description: t('metadata.description'),
  };
}
