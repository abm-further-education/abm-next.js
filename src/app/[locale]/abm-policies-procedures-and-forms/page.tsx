import { getAdminSession } from '@/lib/auth';
import { getActivePolicyDocuments } from '@/lib/policy-documents-db';
import PoliciesContent from './PoliciesContent';

export default async function PoliciesPage() {
  let documents: Array<{
    id: string;
    title: string;
    description: string | null;
    filename: string;
    file_url: string;
  }> = [];

  try {
    const rawDocuments = await getActivePolicyDocuments();

    documents = rawDocuments.map((doc) => ({
      id: doc.id,
      title: doc.title,
      description: doc.description,
      filename: doc.filename,
      file_url: `/api/policy-documents/${doc.id}/file`,
    }));
  } catch (error) {
    console.error('Failed to fetch policy documents:', error);
    documents = [];
  }

  const adminSession = await getAdminSession();

  return (
    <PoliciesContent
      documents={documents}
      showAdminCopyLinks={!!adminSession}
    />
  );
}
