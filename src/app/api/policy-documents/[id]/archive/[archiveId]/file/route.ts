import { NextRequest, NextResponse } from 'next/server';
import { getPolicyArchiveForPublicFile } from '@/lib/policy-documents-db';
import { filePathToR2Key, getR2DownloadSignedUrl } from '@/lib/r2';

/**
 * Unlisted URL for a superseded PDF. Not linked from the public policy list.
 */
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string; archiveId: string }> }
) {
  const { id, archiveId } = await context.params;

  const row = await getPolicyArchiveForPublicFile(id, archiveId);
  if (!row) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const key = filePathToR2Key(row.file_url);
  if (!key) {
    return NextResponse.json({ error: 'Invalid file' }, { status: 404 });
  }

  try {
    const url = await getR2DownloadSignedUrl(key, 3600);
    return NextResponse.redirect(url, 302);
  } catch (e) {
    console.error('[policy-documents/archive/file] signed URL error:', e);
    return NextResponse.json(
      { error: 'Failed to resolve file' },
      { status: 500 }
    );
  }
}
