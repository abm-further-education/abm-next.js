# 어드민 로그인 설정 가이드

이 가이드는 ABM 프로젝트에서 어드민 로그인 기능을 설정하는 방법을 설명합니다.

## 1. Supabase Auth 설정

### 1.1 Supabase 대시보드에서 사용자 생성

1. [Supabase Dashboard](https://supabase.com/dashboard)에 로그인
2. 프로젝트 선택
3. **Authentication** → **Users** 메뉴로 이동
4. **Add user** 버튼 클릭
5. 다음 정보 입력:
   - **Email**: 어드민 이메일 주소
   - **Password**: 강력한 비밀번호
   - **Auto Confirm User**: 체크 (자동 확인)

### 1.2 어드민 권한 부여

생성한 사용자의 **User Metadata**에 `isAdmin: true`를 추가해야 합니다.

**방법 1: Supabase Dashboard에서 직접 수정**

1. 생성한 사용자를 클릭하여 상세 페이지로 이동
2. **Raw User Meta Data** 섹션에서 다음 JSON을 추가:

```json
{
  "isAdmin": true
}
```

**방법 2: SQL Editor에서 수정**

Supabase Dashboard → **SQL Editor**에서 다음 SQL 실행:

```sql
-- 사용자 이메일을 실제 어드민 이메일로 변경하세요
UPDATE auth.users
SET raw_user_meta_data = jsonb_set(
  COALESCE(raw_user_meta_data, '{}'::jsonb),
  '{isAdmin}',
  'true'::jsonb
)
WHERE email = 'admin@example.com';
```

## 2. 환경 변수 확인

`.env.local` 파일에 다음 환경 변수가 설정되어 있는지 확인하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## 3. 로그인 사용 방법

1. 브라우저에서 `/admin/login` 경로로 이동
2. 설정한 어드민 이메일과 비밀번호로 로그인
3. 로그인 성공 시 `/admin` 대시보드로 자동 이동

## 4. 보안 고려사항

- 어드민 비밀번호는 강력하게 설정하세요 (최소 12자 이상, 대소문자, 숫자, 특수문자 포함)
- 프로덕션 환경에서는 HTTPS를 사용하세요
- 세션 쿠키는 `httpOnly`로 설정되어 있어 XSS 공격으로부터 보호됩니다
- 세션은 7일 후 자동 만료됩니다

## 5. 어드민 전용 페이지

다음 페이지들은 어드민 로그인이 필요합니다:

- `/admin` - 어드민 대시보드
- `/users` - 사용자 관리 페이지

로그인하지 않은 상태에서 접근하면 자동으로 `/admin/login`으로 리다이렉트됩니다.

## 6. 문제 해결

### 로그인이 안 되는 경우

1. Supabase 대시보드에서 사용자가 생성되었는지 확인
2. 사용자 메타데이터에 `isAdmin: true`가 설정되었는지 확인
3. 환경 변수가 올바르게 설정되었는지 확인
4. 브라우저 콘솔과 서버 로그에서 오류 메시지 확인

### 권한 오류가 발생하는 경우

- 사용자 메타데이터에 `isAdmin: true`가 설정되어 있는지 확인
- 세션 쿠키가 올바르게 설정되었는지 확인 (브라우저 개발자 도구 → Application → Cookies)

