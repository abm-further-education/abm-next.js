import HRDetailClient from './HRDetailClient';

export { generateMetadata } from './metadata';

export default async function HRDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  return <HRDetailClient params={params} />;
}
