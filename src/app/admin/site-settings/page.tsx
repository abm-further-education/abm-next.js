import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getAllSiteSettings } from '@/lib/site-settings-db';
import SiteSettingsForm from './SiteSettingsForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function SiteSettingsPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const settings = await getAllSiteSettings();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <AdminBackButton />
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Site Settings
          </h1>
          <p className="text-gray-600">
            Manage website-wide common settings such as brochure links,
            navigation data, and other shared configuration.
          </p>
        </div>
        <SiteSettingsForm initialSettings={settings} />
      </div>
    </div>
  );
}
