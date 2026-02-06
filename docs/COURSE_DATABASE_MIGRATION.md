# Course Data Database Migration Guide

이 문서는 ABM 웹사이트의 코스 데이터를 정적 TypeScript 파일에서 Supabase 데이터베이스로 마이그레이션하는 방법을 설명합니다.

## 개요

### 현재 구조 (정적 파일)
- `src/lib/courseData.*.ts` - 코스 목록 데이터 (8개 언어)
- `src/lib/courseDetails/*.ts` - 코스 상세 정보 (8개 언어)
- `src/lib/courseInformation/*.ts` - 코스 메타데이터 (8개 언어)
- `src/lib/shortCourseData/*.ts` - 숏코스 데이터 (5개 언어)

### 새로운 구조 (데이터베이스)
- `courses_new` - 기본 코스 데이터 (비번역 필드)
- `course_translations` - 코스 제목/설명 번역
- `course_details` - 코스 상세 섹션 (번역 포함)
- `course_information` - 코스 메타데이터 (번역 포함)
- `short_courses` - 숏코스 기본 데이터
- `short_course_translations` - 숏코스 번역
- `short_course_dates` - 숏코스 일정

## 마이그레이션 단계

### 1단계: 데이터베이스 스키마 생성

Supabase 대시보드의 SQL Editor에서 다음 파일을 실행합니다:

```bash
supabase/migrations/001_course_schema.sql
```

또는 Supabase CLI를 사용:

```bash
supabase db push
```

### 2단계: 데이터 마이그레이션 (Dry Run)

먼저 dry run 모드로 마이그레이션을 테스트합니다:

```bash
npm run migrate:courses:dry
```

이 명령은 실제 데이터를 삽입하지 않고 마이그레이션 계획을 보여줍니다.

### 3단계: 실제 마이그레이션 실행

dry run이 성공하면 실제 마이그레이션을 실행합니다:

```bash
npm run migrate:courses
```

### 4단계: 데이터베이스 사용 활성화

`.env.local` 파일에서 다음 설정을 변경합니다:

```env
NEXT_PUBLIC_USE_COURSE_DATABASE=true
```

### 5단계: 테스트

애플리케이션을 실행하고 다음을 확인합니다:
- 코스 목록 페이지가 정상 작동하는지
- 코스 상세 페이지가 정상 작동하는지
- 다국어 전환이 정상 작동하는지
- 숏코스 페이지가 정상 작동하는지

## 롤백

문제가 발생하면 환경 변수만 변경하여 정적 파일로 롤백할 수 있습니다:

```env
NEXT_PUBLIC_USE_COURSE_DATABASE=false
```

## 데이터베이스 스키마

### courses_new
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | TEXT (PK) | 코스 식별자 (예: 'kitchen-management') |
| category | TEXT | 카테고리 |
| type | TEXT | 코스 타입 (full-course, short-course, fast-track) |
| level | TEXT | 자격증 레벨 |
| duration | TEXT | 기간 |
| price | NUMERIC | 가격 (선택) |
| image | TEXT | 이미지 경로 |
| link | TEXT | URL 링크 |
| tags | TEXT[] | 태그 배열 |
| is_active | BOOLEAN | 활성화 여부 |
| display_order | INTEGER | 표시 순서 |

### course_translations
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | UUID (PK) | 고유 ID |
| course_id | TEXT (FK) | courses_new.id 참조 |
| locale | TEXT | 언어 코드 (en, kr, sp, ...) |
| title | TEXT | 번역된 제목 |
| description | TEXT | 번역된 설명 |

### course_details
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | UUID (PK) | 고유 ID |
| course_id | TEXT (FK) | courses_new.id 참조 |
| locale | TEXT | 언어 코드 |
| section_key | TEXT | 섹션 키 (courseDuration, jobRoles, ...) |
| title | TEXT | 섹션 제목 |
| description | JSONB | 섹션 내용 (문자열, 배열, 테이블 등) |
| display_order | INTEGER | 표시 순서 |

### course_information
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | UUID (PK) | 고유 ID |
| course_id | TEXT (FK) | courses_new.id 참조 |
| locale | TEXT | 언어 코드 |
| course_code | TEXT | 코스 코드 (예: SIT40521) |
| cricos_code | TEXT | CRICOS 코드 |
| description | TEXT | 상세 설명 |
| duration | TEXT | 기간 |
| entry_requirement | JSONB | 입학 요건 |
| delivery_mode | JSONB | 교육 방식 |
| delivery_site | JSONB | 교육 장소 |
| additional_info | JSONB | 추가 정보 |
| starting_dates | JSONB | 시작 일정 |
| tables | JSONB | 테이블 데이터 |
| partners | JSONB | 파트너 정보 |

## API 사용법

### 기본 사용법 (자동 fallback)

```typescript
import { getCoursesByLocale, getCourseDetails, getCourseInfo } from '@/lib/course-db';

// 코스 목록 조회
const courses = await getCoursesByLocale('en');

// 코스 상세 정보 조회
const details = await getCourseDetails('sit40521-certificate-iv-in-kitchen-management', 'en');

// 코스 메타데이터 조회
const info = await getCourseInfo('sit40521-certificate-iv-in-kitchen-management', 'en');
```

### 관리자 CRUD 작업

```typescript
import { createCourse, updateCourse, deleteCourse } from '@/lib/course-db';

// 코스 생성
const newCourse = await createCourse(
  {
    id: 'new-course',
    category: 'business',
    type: 'full-course',
    level: 'diploma',
    duration: '52 weeks',
    image: '/courses/new.png',
    link: '/business-courses/new-course',
    tags: ['business', 'new'],
    is_active: true,
    display_order: 100,
  },
  [
    { course_id: 'new-course', locale: 'en', title: 'New Course', description: '...' },
    { course_id: 'new-course', locale: 'kr', title: '새 코스', description: '...' },
  ]
);

// 코스 업데이트
await updateCourse('new-course', { is_active: false });

// 코스 삭제
await deleteCourse('new-course');
```

## 주의사항

1. **Fallback 동작**: 데이터베이스 조회 실패 시 자동으로 정적 파일 데이터를 반환합니다.
2. **캐싱**: 프로덕션 환경에서는 적절한 캐싱 전략을 고려하세요.
3. **RLS 정책**: 관리자만 데이터를 수정할 수 있도록 Row Level Security가 설정되어 있습니다.
4. **기존 courses 테이블**: 기존 `courses` 테이블과 충돌을 피하기 위해 `courses_new`라는 이름을 사용합니다. 마이그레이션 완료 후 필요시 테이블명을 변경할 수 있습니다.

## 문제 해결

### 마이그레이션 스크립트 실행 오류

```bash
# 환경 변수 확인
echo $NEXT_PUBLIC_SUPABASE_URL
echo $SUPABASE_SERVICE_ROLE_KEY

# 상세 로그와 함께 실행
npm run migrate:courses -- --verbose
```

### 데이터베이스 연결 오류

1. Supabase 대시보드에서 프로젝트가 활성화되어 있는지 확인
2. 환경 변수가 올바르게 설정되어 있는지 확인
3. Service Role Key가 올바른지 확인 (anon key가 아닌 service role key 사용)

### 번역 누락

정적 파일에서 일부 언어의 번역이 누락된 경우, 해당 언어로 조회 시 영어(en) 데이터로 fallback됩니다.
