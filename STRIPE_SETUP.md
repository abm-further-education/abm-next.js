# Stripe 결제 연동 설정 가이드

이 가이드는 ABM Short Courses에서 Stripe 결제 시스템을 설정하는 방법을 설명합니다.

## 1. Stripe 계정 설정

1. [Stripe Dashboard](https://dashboard.stripe.com)에 로그인
2. 개발자 → API 키에서 다음 키들을 복사:
   - **Publishable key** (pk*test*로 시작)
   - **Secret key** (sk*test*로 시작)

## 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Next.js URL for Stripe redirects
NEXTAUTH_URL=https://abm.edu.au
```

## 3. 테스트 카드 번호

개발 환경에서 테스트할 때 사용할 수 있는 카드 번호:

- **성공**: 4242 4242 4242 4242
- **실패**: 4000 0000 0000 0002
- **CVV**: 임의의 3자리 숫자
- **만료일**: 미래의 날짜

## 4. 기능 설명

### 구현된 기능:

- ✅ 코스별 결제 페이지
- ✅ Stripe Checkout 연동
- ✅ 결제 성공/실패 처리
- ✅ 날짜 및 코스 타입 선택
- ✅ 결제 확인 페이지

### 추가할 수 있는 기능:

- 📧 결제 완료 이메일 발송
- 💾 데이터베이스에 등록 정보 저장
- 👥 정원 관리 시스템
- 🎫 등록 확인서 생성
- 📱 관리자 알림
- 🔗 웹훅 처리 (프로덕션용)

## 5. 파일 구조

```
src/
├── app/
│   ├── api/stripe/
│   │   ├── checkout/route.ts          # 결제 세션 생성
│   │   └── verify-payment/route.ts    # 결제 확인
│   └── [locale]/
│       ├── payment/success/page.tsx   # 결제 성공 페이지
│       └── short-courses/[slug]/page.tsx # 코스 페이지 (수정됨)
├── components/common/
│   └── Button.tsx                     # 버튼 컴포넌트 (disabled prop 추가)
└── lib/
    └── stripe.ts                      # Stripe 설정
```

## 6. 프로덕션 배포 시 주의사항

1. **환경 변수**: 프로덕션 환경에서는 실제 Stripe 키 사용
2. **HTTPS**: 프로덕션에서는 반드시 HTTPS 사용 필요
3. **웹훅**: 프로덕션에서는 웹훅 설정 권장 (결제 확실성을 위해)
4. **보안**: Stripe Secret Key는 절대 클라이언트에 노출되지 않도록 주의

## 7. 문제 해결

### 자주 발생하는 오류:

1. **환경 변수 오류**: `.env.local` 파일이 올바른 위치에 있는지 확인
2. **CORS 오류**: API 라우트가 올바르게 설정되었는지 확인
3. **Stripe 키 오류**: Publishable key와 Secret key가 올바른지 확인

### 디버깅:

- 브라우저 개발자 도구의 Network 탭에서 API 호출 확인
- 서버 로그에서 오류 메시지 확인
- Stripe Dashboard에서 결제 로그 확인

## 8. 지원

추가 도움이 필요하면:

- [Stripe 문서](https://stripe.com/docs)
- [Next.js API 라우트 문서](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
