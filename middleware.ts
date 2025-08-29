import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { languages, defaultLanguage } from "./lib/i18n";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  console.log(pathname, "pathname");

  // ✅ jika root "/" arahkan ke default locale (misalnya /en)
  // if (pathname === "/") {
  //   return NextResponse.redirect(
  //     new URL(`/${defaultLanguage || "en"}`, request.url)
  //   );
  // }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  console.log(pathnameIsMissingLocale, "pathnameIsMissingLocale");

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

function getLocale(request: NextRequest): string {
  // Check cookie
  const cookieLocale = request.cookies.get("i18next")?.value;
  if (cookieLocale && languages.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const preferredLanguage = acceptLanguage
      .split(",")[0]
      .split("-")[0]
      .toLowerCase();

    if (languages.includes(preferredLanguage as any)) {
      return preferredLanguage;
    }
  }

  return defaultLanguage;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next (Next.js internals)
     * - static files (images, fonts, etc.)
     */
    "/((?!api|_next|favicon.ico|robots.txt|sitemap.xml)(?!.*\\.).*)",
  ],
};
