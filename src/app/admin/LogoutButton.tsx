'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { signOut } from './actions';

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      // 클라이언트 사이드에서 로그아웃
      await supabase.auth.signOut();

      // 서버 사이드에서 쿠키 삭제
      await signOut();

      router.push('/admin/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
      // 오류가 발생해도 쿠키는 삭제
      await signOut();
      router.push('/admin/login');
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
    >
      Logout
    </button>
  );
}
