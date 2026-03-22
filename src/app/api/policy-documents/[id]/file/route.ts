import { NextRequest, NextResponse } from 'next/server';
import { getPolicyDocumentForPublicFile } from '@/lib/policy-documents-db';
import { filePathToR2Key, getR2DownloadSignedUrl } from '@/lib/r2';

/**
 * Stable URL for the current PDF of a policy document.
 * Redirects to a freshly signed R2 URL so bookmarks keep working after updates.
 */
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const doc = await getPolicyDocumentForPublicFile(id);
  if (!doc) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const key = filePathToR2Key(doc.file_url);
  if (!key) {
    return NextResponse.json({ error: 'Invalid file' }, { status: 404 });
  }

  try {
    const url = await getR2DownloadSignedUrl(key, 3600);
    return NextResponse.redirect(url, 302);
  } catch (e) {
    console.error('[policy-documents/file] signed URL error:', e);
    return NextResponse.json(
      { error: 'Failed to resolve file' },
      { status: 500 }
    );
  }
}
