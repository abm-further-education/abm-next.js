import createMiddleware from 'next-intl/middleware';
import { routing } from '../i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /** Legacy fitness URLs → canonical *-online slugs */
  const fitnessSlugRedirects: Record<string, string> = {
    'certificate-iii-in-fitness-fast-track': 'certificate-iii-in-fitness-online',
    'certificate-iv-in-fitness-fast-track': 'certificate-iv-in-fitness-online',
  };
  for (const [fromSlug, toSlug] of Object.entries(fitnessSlugRedirects)) {
    const needle = `/fitness-instructor-personal-trainer-courses/${fromSlug}`;
    if (pathname.includes(needle)) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.replace(fromSlug, toSlug);
      return NextResponse.redirect(url, 308);
    }
  }

  // 어드민 라우트는 next-intl 미들웨어를 건너뛰고 직접 처리
  if (pathname.startsWith('/admin')) {
    // 어드민 라우트 보호 (로그인 페이지 제외)
    if (!pathname.startsWith('/admin/login')) {
      const accessToken = request.cookies.get('sb-access-token')?.value;

      if (!accessToken) {
        const url = request.nextUrl.clone();
        url.pathname = '/admin/login';
        return NextResponse.redirect(url);
      }
    }
    // 어드민 경로는 next-intl 미들웨어를 건너뛰고 그대로 반환
    return NextResponse.next();
  }

  // users 라우트도 어드민 체크
  if (pathname.startsWith('/users')) {
    const accessToken = request.cookies.get('sb-access-token')?.value;

    if (!accessToken) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // next-intl 미들웨어 실행
  return intlMiddleware(request);
}

export const config = {
  // 모든 경로를 매칭하되, api, _next, _vercel, 정적 파일은 제외
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
