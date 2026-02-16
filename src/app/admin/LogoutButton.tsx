'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { signOut } from './actions';
import { LogOut } from 'lucide-react';

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
      className="px-12 py-6 bg-neutral-700 flex text-white hover:bg-primary transition-colors items-center gap-10"
    >
      <LogOut className="w-16 h-16" />
      Logout
    </button>
  );
}
