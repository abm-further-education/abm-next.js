import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Trainers | ABM Further Education',
    description: 'Meet our industry-leading trainers at ABM Further Education. Learn from experienced professionals in cookery, business, fitness, and more.',
    keywords: 'ABM trainers, cooking instructors, business trainers, fitness instructors, hospitality trainers, Sydney education',
    openGraph: {
      title: 'Trainers | ABM Further Education',
      description: 'Meet our industry-leading trainers at ABM Further Education. Learn from experienced professionals in cookery, business, fitness, and more.',
      type: 'website',
      locale: 'en_US',
    },
  };
}
