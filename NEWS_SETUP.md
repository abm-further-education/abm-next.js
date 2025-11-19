# 뉴스 관리 시스템 설정 가이드

## 1. 패키지 설치

먼저 Tiptap 관련 패키지를 설치하세요:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/extension-image
```

## 2. Supabase 데이터베이스 스키마 설정

Supabase Dashboard → SQL Editor에서 다음 SQL을 실행하세요:

```sql
-- updated_at 자동 업데이트 함수 (이미 존재하는 경우 무시됨)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 뉴스 테이블 생성
CREATE TABLE news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT, -- Tiptap으로 작성된 마크다운/HTML 컨텐츠
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  date DATE NOT NULL,
  link TEXT,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- updated_at 자동 업데이트 트리거
CREATE TRIGGER update_news_updated_at BEFORE UPDATE
ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) 활성화
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 뉴스를 읽을 수 있도록 정책 설정
CREATE POLICY "Enable read access for all users" ON news
FOR SELECT USING (published = true);

-- 어드민만 뉴스를 작성/수정/삭제할 수 있도록 정책 설정
-- auth.jwt()를 사용하여 JWT 토큰의 user_metadata에서 isAdmin 확인
-- auth.users 테이블에 직접 접근하지 않으므로 권한 문제가 없습니다
CREATE POLICY "Enable insert for admins" ON news
FOR INSERT WITH CHECK (
  auth.uid() IS NOT NULL
  AND (auth.jwt() ->> 'user_metadata')::jsonb->>'isAdmin' = 'true'
);

CREATE POLICY "Enable update for admins" ON news
FOR UPDATE USING (
  auth.uid() IS NOT NULL
  AND (auth.jwt() ->> 'user_metadata')::jsonb->>'isAdmin' = 'true'
);

CREATE POLICY "Enable delete for admins" ON news
FOR DELETE USING (
  auth.uid() IS NOT NULL
  AND (auth.jwt() ->> 'user_metadata')::jsonb->>'isAdmin' = 'true'
);
```

## 3. 기존 뉴스 데이터 마이그레이션

어드민 대시보드에서 `/admin/news/migrate` 페이지를 방문하여 기존 뉴스 데이터를 Supabase로 마이그레이션할 수 있습니다.

## 4. 어드민 뉴스 작성

1. `/admin/news/new` 페이지로 이동
2. Tiptap 에디터를 사용하여 뉴스 내용 작성
3. 제목, 설명, 이미지, 카테고리, 날짜 입력
4. 저장 버튼 클릭

## 5. 뉴스 표시

- 뉴스 목록: `/{locale}/news`
- 뉴스 상세: `/{locale}/news/{id}`
