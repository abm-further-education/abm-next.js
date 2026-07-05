import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'OSHC - Overseas Student Health Cover | ABM Further Education',
    description:
      'Allianz Care Australia is the preferred provider of OSHC for ABM Further Education. Get health cover for international students studying in Australia.',
    openGraph: {
      title: 'OSHC - Overseas Student Health Cover | ABM Further Education',
      description:
        'Allianz Care Australia is the preferred provider of OSHC for ABM Further Education. Get health cover for international students studying in Australia.',
      type: 'website',
    },
  };
}
