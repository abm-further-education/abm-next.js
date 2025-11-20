-- ABM Users 테이블 마이그레이션 스크립트
-- Supabase Dashboard → SQL Editor에서 이 스크립트를 실행하세요

-- 사용자 테이블 생성
CREATE TABLE IF NOT EXISTS public.users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- updated_at 자동 업데이트 함수 (이미 존재하면 무시)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- updated_at 트리거 생성 (이미 존재하면 교체)
DROP TRIGGER IF EXISTS update_users_updated_at ON public.users;
CREATE TRIGGER update_users_updated_at 
BEFORE UPDATE ON public.users 
FOR EACH ROW 
EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) 활성화
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- 기존 정책 삭제 (있다면)
DROP POLICY IF EXISTS "Enable read access for all users" ON public.users;
DROP POLICY IF EXISTS "Enable insert access for all users" ON public.users;
DROP POLICY IF EXISTS "Enable update access for all users" ON public.users;
DROP POLICY IF EXISTS "Enable delete access for all users" ON public.users;

-- 사용자 테이블 정책 (anon key로 접근 가능하도록 설정)
-- 주의: 실제 프로덕션에서는 더 제한적인 정책을 사용해야 합니다
CREATE POLICY "Enable read access for all users" ON public.users
FOR SELECT USING (true);

CREATE POLICY "Enable insert access for all users" ON public.users
FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update access for all users" ON public.users
FOR UPDATE USING (true);

CREATE POLICY "Enable delete access for all users" ON public.users
FOR DELETE USING (true);

-- 테이블 생성 확인
SELECT 'Users table created successfully!' AS status;


