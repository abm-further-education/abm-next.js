import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Programs | ABM Further Education',
  description:
    'ABM offers customized short-term courses and one-day programs delivered in a private group format. Tailored to each group’s needs, our programs are ideal for schools, universities, and hospitality enthusiasts. We have successfully collaborated with numerous high schools and universities, creating engaging and hands-on learning experiences.',
};

export default function CustomProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
