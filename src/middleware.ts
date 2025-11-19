import createMiddleware from 'next-intl/middleware';
import { routing } from '../i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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

  // locale이 없는 /news/[id] 경로를 기본 locale로 리다이렉트
  // 예: /news/fb413fe6-ca75-495b-9bfe-de5ceff255c8 -> /en/news/fb413fe6-ca75-495b-9bfe-de5ceff255c8
  const newsMatch = pathname.match(/^\/news\/([^/]+)$/);
  if (newsMatch) {
    const newsId = newsMatch[1];
    const url = request.nextUrl.clone();
    url.pathname = `/en/news/${newsId}`;
    return NextResponse.redirect(url);
  }

  // next-intl 미들웨어 실행
  return intlMiddleware(request);
}

export const config = {
  // 모든 경로를 매칭하되, api, _next, _vercel, 정적 파일은 제외
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
