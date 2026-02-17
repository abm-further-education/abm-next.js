import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import {
  getAllEntryRequirementPages,
  seedEntryRequirementFromMessages,
} from '@/lib/entry-requirement-db';

export default async function EntryRequirementsAdminPage() {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const pages = await getAllEntryRequirementPages();

  if (pages.length > 0) {
    const page = pages[0];
    const enTrans = page.entry_requirement_page_translations?.find(
      (t) => t.locale === 'en',
    );

    // If English translation is missing or empty, seed from message files
    if (!enTrans || !enTrans.banner_title) {
      await seedEntryRequirementFromMessages(page.id);
    }

    redirect(`/admin/entry-requirements/${page.id}/edit`);
  } else {
    // No page exists — create one pre-filled from message files
    const newPageId = await seedEntryRequirementFromMessages();
    redirect(`/admin/entry-requirements/${newPageId}/edit`);
  }
}
