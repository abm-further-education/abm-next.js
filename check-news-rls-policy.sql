-- 뉴스 테이블 RLS 정책 확인 및 수정 스크립트
-- Supabase Dashboard → SQL Editor에서 이 스크립트를 실행하세요

-- 1. 현재 RLS 정책 확인 (roles 컬럼 포함)
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,  -- 이 컬럼이 중요합니다! public 또는 {authenticated, anon}이어야 합니다
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'news';

-- 2. RLS가 활성화되어 있는지 확인
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'news';

-- 3. 기존 정책 삭제 (필요한 경우)
DROP POLICY IF EXISTS "Enable read access for all users" ON news;
DROP POLICY IF EXISTS "Enable insert for admins" ON news;
DROP POLICY IF EXISTS "Enable update for admins" ON news;
DROP POLICY IF EXISTS "Enable delete for admins" ON news;

-- 4. RLS 활성화 (이미 활성화되어 있어도 안전)
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- 5. 모든 사용자가 published=true인 뉴스를 읽을 수 있도록 정책 생성
-- TO public을 명시하여 인증되지 않은 사용자(anon)도 포함합니다
-- 중요: roles를 명시하지 않으면 기본적으로 authenticated 역할에만 적용됩니다
CREATE POLICY "Enable read access for all users" ON news
FOR SELECT 
TO public  -- public = authenticated + anon (모든 사용자)
USING (published = true);

-- 6. 어드민만 뉴스를 작성할 수 있도록 정책 생성
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

-- 7. 어드민만 뉴스를 수정할 수 있도록 정책 생성
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

-- 8. 어드민만 뉴스를 삭제할 수 있도록 정책 생성
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

-- 9. 정책이 제대로 생성되었는지 확인 (roles 포함)
SELECT 
  policyname,
  roles,  -- public 또는 {authenticated, anon}이어야 합니다
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'news';

-- 10. roles가 null이거나 public이 아닌 경우 확인
-- 만약 "Enable read access for all users" 정책의 roles가 null이거나 
-- {authenticated}만 포함한다면, 위의 5번 단계를 다시 실행하세요
SELECT 
  policyname,
  roles
FROM pg_policies 
WHERE tablename = 'news' 
  AND policyname = 'Enable read access for all users';

