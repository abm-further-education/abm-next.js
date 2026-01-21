import ProjectDetailClient from './ProjectDetailClient';

export { generateMetadata } from './metadata';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  return <ProjectDetailClient params={params} />;
}
