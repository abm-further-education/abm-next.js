# 프로덕션 로그 확인 가이드

## Vercel 배포인 경우

### 1. Vercel 대시보드에서 확인
1. [Vercel Dashboard](https://vercel.com/dashboard)에 로그인
2. 프로젝트 선택
3. 상단 메뉴에서 **"Deployments"** 클릭
4. 최신 배포를 클릭
5. **"Functions"** 또는 **"Logs"** 탭 클릭
6. 실시간 로그 확인 가능

### 2. Vercel CLI로 확인
```bash
# Vercel CLI 설치 (없는 경우)
npm i -g vercel

# 로그인
vercel login

# 프로젝트 디렉토리에서 로그 확인
vercel logs

# 특정 배포의 로그 확인
vercel logs [deployment-url]
```

### 3. 실시간 로그 스트리밍
```bash
# 실시간 로그 스트리밍
vercel logs --follow
```

## 다른 배포 플랫폼

### AWS (Amplify, EC2, Lambda)
- **AWS CloudWatch**: AWS 콘솔 > CloudWatch > Logs
- **Amplify**: AWS Amplify 콘솔 > 앱 선택 > Logs 탭

### Railway
- Railway 대시보드 > 프로젝트 > **"Deployments"** > 최신 배포 > **"View Logs"**

### Render
- Render 대시보드 > 서비스 선택 > **"Logs"** 탭

### Netlify
- Netlify 대시보드 > 사이트 선택 > **"Functions"** > **"Logs"** 탭

### Docker/커스텀 서버
```bash
# Docker 컨테이너 로그
docker logs [container-name]

# 실시간 로그
docker logs -f [container-name]

# 시스템 로그 (systemd 사용 시)
journalctl -u [service-name] -f
```

## 로그에서 찾아야 할 내용

현재 코드에서 `console.log`와 `console.error`로 출력하는 로그들:

### 이미지 업로드 관련 로그
- `[upload-image]`로 시작하는 모든 로그
- `[upload-image] Supabase 환경 변수가 설정되지 않았습니다.`
- `[upload-image] Access token이 쿠키에 없습니다.`
- `[upload-image] 모든 쿠키:`
- `[upload-image] Access token 발견됨`
- `[upload-image] Supabase 인증 오류:`
- `[upload-image] 사용자를 찾을 수 없습니다.`
- `[upload-image] 사용자가 어드민 권한이 없습니다.`
- `[upload-image] 이미지 업로드 성공:`
- `[upload-image] R2 업로드 오류:`

### 쿠키 관련 로그
- `Set session cookies error:`
- `Get session error:`

### R2 관련 로그
- `R2 업로드 오류:`
- `R2 presigned URL 생성 오류:`

## 로그 필터링 팁

### Vercel CLI에서 필터링
```bash
# 특정 키워드로 필터링
vercel logs | grep "upload-image"

# 에러만 확인
vercel logs | grep "error\|Error\|ERROR"
```

### 브라우저 개발자 도구
1. **Network 탭**: `/api/upload-image` 요청 확인
2. **Console 탭**: 클라이언트 측 로그 확인
3. **Application 탭**: 쿠키 확인

## 문제 해결 체크리스트

로그를 확인할 때 다음을 체크하세요:

1. ✅ 쿠키가 전송되는가?
   - `[upload-image] 모든 쿠키:` 로그에서 `sb-access-token` 확인

2. ✅ Access token이 있는가?
   - `[upload-image] Access token 발견됨` 로그 확인

3. ✅ Supabase 인증이 성공하는가?
   - `[upload-image] Supabase 인증 오류:` 로그 확인

4. ✅ 어드민 권한이 있는가?
   - `[upload-image] 사용자가 어드민 권한이 없습니다.` 로그 확인

5. ✅ R2 업로드가 성공하는가?
   - `[upload-image] R2 업로드 오류:` 로그 확인

## 로그 레벨별 확인 방법

### 개발 환경
```bash
npm run dev
# 터미널에서 직접 로그 확인
```

### 프로덕션 환경
- Vercel: 대시보드 또는 CLI
- 다른 플랫폼: 해당 플랫폼의 로그 확인 방법 사용
