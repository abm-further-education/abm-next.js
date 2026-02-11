import { getAdminSession } from '@/lib/auth';
import AdminBar from './AdminBar';

export default async function AdminUserInfo() {
  const session = await getAdminSession();

  if (!session) {
    return null;
  }

  return <AdminBar userEmail={session.user.email || ''} />;
}
