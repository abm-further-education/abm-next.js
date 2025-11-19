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

  // locale이 없는 /news/[id] 경로를 처리
  // localePrefix: 'as-needed' 설정 때문에 기본 locale('en')은 URL에 포함되지 않음
  // 따라서 /news/[id]는 이미 올바른 경로이므로 next-intl 미들웨어가 처리하도록 함
  // 단, locale이 명시적으로 포함된 경로(/en/news/[id], /kr/news/[id] 등)는 그대로 통과
  const newsMatch = pathname.match(/^\/(en|kr|sp|pt|jp)\/news\/([^/]+)$/);
  if (newsMatch) {
    // locale이 포함된 경로는 next-intl 미들웨어가 처리
    return intlMiddleware(request);
  }

  // locale이 없는 /news/[id] 경로는 next-intl 미들웨어가 자동으로 처리
  // localePrefix: 'as-needed' 설정으로 인해 기본 locale('en')은 URL에서 제거되지만
  // 내부적으로는 /en/news/[id]로 처리됨
  return intlMiddleware(request);
}

export const config = {
  // 모든 경로를 매칭하되, api, _next, _vercel, 정적 파일은 제외
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
