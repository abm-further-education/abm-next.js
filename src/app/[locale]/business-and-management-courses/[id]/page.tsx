import BusinessDetailClient from './BusinessDetailClient';

export { generateMetadata } from './metadata';

export default async function BusinessDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  return <BusinessDetailClient params={params} />;
}
