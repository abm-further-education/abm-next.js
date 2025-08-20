# Supabase 백엔드 설정 가이드

이 가이드는 ABM 프로젝트에서 Supabase를 백엔드로 설정하는 방법을 설명합니다.

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 로그인
2. "New Project" 버튼 클릭
3. 프로젝트 이름과 데이터베이스 비밀번호 설정
4. 지역 선택 (한국의 경우 Asia Pacific (Northeast Asia) - Seoul 권장)
5. 프로젝트 생성 대기 (1-2분 소요)

## 2. API 키 및 URL 확인

1. 프로젝트 대시보드에서 Settings → API 클릭
2. 다음 정보를 복사:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6...`
   - **service_role key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6...` (보안에 주의)

## 3. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```env
# Supabase Configuration (필수)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Supabase Service Role Key (선택사항 - 대부분의 경우 불필요)
# SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Stripe Configuration (기존 설정 유지)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Next.js URL for redirects
NEXTAUTH_URL=https://www.abm.edu.au
```

## 4. 데이터베이스 스키마 설정

Supabase Dashboard → SQL Editor에서 다음 SQL을 실행:

```sql
-- 사용자 테이블 생성
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- updated_at 자동 업데이트 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- updated_at 트리거 생성
CREATE TRIGGER update_users_updated_at BEFORE UPDATE
ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 코스 등록 테이블 (미래 확장용)
CREATE TABLE course_enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_slug TEXT NOT NULL,
  course_name TEXT NOT NULL,
  selected_date TEXT NOT NULL,
  selected_type TEXT,
  payment_status TEXT DEFAULT 'pending',
  payment_id TEXT,
  amount_paid DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 코스 등록 updated_at 트리거
CREATE TRIGGER update_course_enrollments_updated_at BEFORE UPDATE
ON course_enrollments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) 활성화
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;

-- 사용자 테이블 정책 (anon key로 접근 가능하도록 설정)
-- 주의: 실제 프로덕션에서는 더 제한적인 정책을 사용해야 합니다
CREATE POLICY "Enable read access for all users" ON users
FOR SELECT USING (true);

CREATE POLICY "Enable insert access for all users" ON users
FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update access for all users" ON users
FOR UPDATE USING (true);

CREATE POLICY "Enable delete access for all users" ON users
FOR DELETE USING (true);

-- 코스 등록에 대한 정책 (더 제한적)
CREATE POLICY "Enable read access for all" ON course_enrollments
FOR SELECT USING (true);

CREATE POLICY "Enable insert for all" ON course_enrollments
FOR INSERT WITH CHECK (true);

-- 더 안전한 정책 예시 (나중에 인증 시스템 추가 후 사용):
-- CREATE POLICY "Enable read own enrollments" ON course_enrollments
-- FOR SELECT USING (auth.uid() = user_id);
--
-- CREATE POLICY "Enable insert own enrollments" ON course_enrollments
-- FOR INSERT WITH CHECK (auth.uid() = user_id);
```

## 5. 패키지 설치

터미널에서 다음 명령어 실행:

```bash
npm install
```

MongoDB 관련 패키지가 제거되고 Supabase 패키지가 추가됩니다.

## 6. 기능 테스트

1. 개발 서버 시작:

   ```bash
   npm run dev
   ```

2. `https://www.abm.edu.au/users` 방문
3. 새 사용자 추가 테스트
4. 사용자 목록 확인

## 7. Supabase의 장점

### 개발 편의성

- **실시간 데이터베이스**: 자동 실시간 업데이트
- **인증 시스템**: 소셜 로그인, 이메일/비밀번호 등 다양한 인증 방식
- **파일 저장소**: 이미지, 문서 등 파일 업로드/다운로드
- **Edge Functions**: 서버리스 함수 지원

### 관리 편의성

- **대시보드**: 웹 기반 데이터베이스 관리
- **SQL 편집기**: 직접 SQL 쿼리 실행
- **API 자동 생성**: REST API 자동 생성
- **실시간 로그**: API 호출 및 에러 모니터링

### 확장 가능성

- **Row Level Security**: 세밀한 권한 관리
- **PostgreSQL**: 강력한 관계형 데이터베이스
- **Webhook**: 외부 서비스 연동
- **Extension**: 다양한 PostgreSQL 확장 기능

## 8. 향후 확장 계획

### 인증 시스템 추가

```typescript
// 관리자 로그인 기능
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

// 로그인
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@abm.edu.au',
  password: 'your_password',
});

// 로그아웃
await supabase.auth.signOut();
```

### 실시간 업데이트

```typescript
// 실시간 사용자 목록 업데이트
const channel = supabase
  .channel('users')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'users' },
    (payload) => {
      console.log('Change received!', payload);
      // UI 업데이트 로직
    }
  )
  .subscribe();
```

### 파일 업로드

```typescript
// 코스 이미지 업로드
const { data, error } = await supabase.storage
  .from('course-images')
  .upload('course-1.jpg', file);
```

## 9. 프로덕션 배포

1. **환경 변수 설정**: Vercel/Netlify에 환경 변수 추가
2. **도메인 설정**: Supabase Authentication → URL Configuration에서 사이트 URL 설정
3. **CORS 설정**: 필요시 CORS 정책 조정
4. **백업 설정**: 정기적인 데이터베이스 백업 설정

## 10. Service Role Key: 언제 필요하고 언제 불필요한가?

### 🚫 Service Role Key가 불필요한 경우 (대부분)

**✅ 권장: Anon Key + RLS 정책 사용**

다음과 같은 일반적인 CRUD 작업에는 Service Role Key가 필요하지 않습니다:

- 사용자 등록/로그인
- 게시물 작성/읽기/수정/삭제
- 댓글 시스템
- 기본적인 데이터베이스 작업

```typescript
// ✅ 안전한 방법: Anon key + RLS 정책
import { supabase } from '@/lib/supabase';

// 이 방법이 더 안전합니다
const { data, error } = await supabase.from('users').select('*');
```

### ⚠️ Service Role Key가 필요한 경우 (매우 제한적)

**🔴 주의: 정말 필요한 경우에만 사용**

다음과 같은 특수한 관리 작업에만 필요합니다:

- 시스템 관리자만 접근 가능한 작업
- RLS를 무시해야 하는 특별한 경우
- 자동화된 백그라운드 작업
- 사용자 데이터의 일괄 마이그레이션

```typescript
// 🔴 위험: Service Role Key 사용
import { supabaseAdmin } from '@/lib/supabase';

// 특별한 관리 작업에만 사용
const { data, error } = await supabaseAdmin.from('users').select('*'); // RLS 무시하고 모든 데이터 접근
```

### 🔒 현재 ABM 프로젝트 설정

현재 ABM 프로젝트는 **Service Role Key 없이** 동작하도록 설정되어 있습니다:

1. **기본 사용자 관리**: Anon Key + RLS 정책
2. **코스 등록**: Anon Key + RLS 정책
3. **결제 시스템**: Stripe (별도 시스템)

만약 나중에 관리자 전용 기능이 필요하다면, Supabase Auth를 사용하여 관리자 계정을 만드는 것이 더 안전합니다.

## 11. 보안 고려사항

- **✅ Anon Key는 클라이언트에 노출되어도 안전합니다** (RLS로 보호됨)
- **🔴 Service Role Key는 절대 클라이언트에 노출하지 마세요**
- **✅ RLS 정책을 적절히 설정하세요**
- **✅ 정기적으로 API 키를 갱신하세요**
- **✅ 민감한 데이터는 암호화하여 저장하세요**

## 트러블슈팅

### 연결 문제

- 환경 변수가 올바르게 설정되었는지 확인
- Supabase 프로젝트가 활성 상태인지 확인
- 네트워크 연결 상태 확인

### 권한 문제

- RLS 정책이 올바르게 설정되었는지 확인
- service_role key를 사용하고 있는지 확인
- 테이블 권한 설정 확인

### 성능 문제

- 인덱스 추가 고려
- 쿼리 최적화
- Connection pooling 설정
