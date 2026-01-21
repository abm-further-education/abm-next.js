import FitnessDetailClient from './FitnessDetailClient';

export { generateMetadata } from './metadata';

export default async function FitnessDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  return <FitnessDetailClient params={params} />;
}
