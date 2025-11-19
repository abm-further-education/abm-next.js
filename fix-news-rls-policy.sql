-- 뉴스 테이블 RLS 정책 수정
-- Supabase Dashboard → SQL Editor에서 이 스크립트를 실행하세요

-- 기존 정책 삭제
DROP POLICY IF EXISTS "Enable insert for admins" ON news;
DROP POLICY IF EXISTS "Enable update for admins" ON news;
DROP POLICY IF EXISTS "Enable delete for admins" ON news;

-- 새로운 INSERT 정책 (auth.users 테이블 조인 사용)
CREATE POLICY "Enable insert for admins" ON news
FOR INSERT 
WITH CHECK (
  auth.uid() IS NOT NULL
  AND EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'isAdmin')::boolean = true
  )
);

-- 새로운 UPDATE 정책
CREATE POLICY "Enable update for admins" ON news
FOR UPDATE 
USING (
  auth.uid() IS NOT NULL
  AND EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'isAdmin')::boolean = true
  )
);

-- 새로운 DELETE 정책
CREATE POLICY "Enable delete for admins" ON news
FOR DELETE 
USING (
  auth.uid() IS NOT NULL
  AND EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND (auth.users.raw_user_meta_data->>'isAdmin')::boolean = true
  )
);

