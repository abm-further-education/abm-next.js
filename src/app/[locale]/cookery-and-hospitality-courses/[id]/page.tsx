import CookeryDetailClient from './CookeryDetailClient';

export { generateMetadata } from './metadata';

export default async function CookeryDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  return <CookeryDetailClient params={params} />;
}
