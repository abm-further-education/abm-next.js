import Link from 'next/link';
import { getAdminSession } from '@/lib/auth';
import { SettingsIcon } from 'lucide-react';

export default async function AdminUserInfo() {
  const session = await getAdminSession();

  if (!session) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-bk text-white px-4 py-8 text-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-gray-300">Logged in user:</span>
          <span className="font-medium">{session.user.email}</span>
        </div>
        <Link
          href="/admin"
          className="px-8 py-4 bg-primary hover:bg-white rounded text-white text-xs font-medium transition-colors flex items-center"
        >
          <SettingsIcon className="w-14 h-14 mr-2" />
          Admin Settings
        </Link>
      </div>
    </div>
  );
}
