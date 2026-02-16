import { getActivePolicyDocuments } from '@/lib/policy-documents-db';
import { getR2ImageUrl } from '@/lib/r2';
import PoliciesContent from './PoliciesContent';

// /policies/filename.pdf → policies/filename.pdf (R2 key 형식으로 변환)
function convertToR2Key(filePath: string): string {
  if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
    return filePath;
  }
  if (filePath.startsWith('/policies/')) {
    return filePath.substring(1);
  }
  if (filePath.startsWith('/')) {
    return filePath.substring(1);
  }
  return filePath;
}

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

    // R2 URL을 실제 접근 가능한 URL로 변환 (testimonial 패턴과 동일)
    documents = await Promise.all(
      rawDocuments.map(async (doc) => {
        const r2Key = convertToR2Key(doc.file_url);
        const resolvedUrl = await getR2ImageUrl(r2Key);
        return {
          id: doc.id,
          title: doc.title,
          description: doc.description,
          filename: doc.filename,
          file_url: resolvedUrl,
        };
      }),
    );
  } catch (error) {
    console.error('Failed to fetch policy documents:', error);
    documents = [];
  }

  return <PoliciesContent documents={documents} />;
}
