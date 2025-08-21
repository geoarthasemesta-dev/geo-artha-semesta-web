import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl;
  console.log(pathname, "pathname");

  if (pathname == "/") {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }
  return NextResponse.next();
}
