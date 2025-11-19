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

  // locale이 없는 /news/[id] 경로를 명시적으로 처리
  // localePrefix: 'as-needed' 설정 때문에 기본 locale('en')은 URL에 포함되지 않지만
  // 파일 구조는 [locale]/news/[id]이므로 내부적으로 locale이 필요함
  // 배포 환경에서 동적 라우트가 제대로 작동하도록 rewrite 사용
  const newsMatchWithoutLocale = pathname.match(/^\/news\/([^/]+)$/);
  if (newsMatchWithoutLocale) {
    const newsId = newsMatchWithoutLocale[1];
    // rewrite를 사용하여 내부적으로 /en/news/[id]로 처리하되 URL은 변경하지 않음
    const url = request.nextUrl.clone();
    url.pathname = `/en/news/${newsId}`;
    // rewrite된 요청에 대해 next-intl 미들웨어 실행
    const rewrittenRequest = new NextRequest(url, {
      headers: request.headers,
    });
    return intlMiddleware(rewrittenRequest);
  }

  // locale이 포함된 경로는 next-intl 미들웨어가 처리
  return intlMiddleware(request);
}

export const config = {
  // 모든 경로를 매칭하되, api, _next, _vercel, 정적 파일은 제외
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
