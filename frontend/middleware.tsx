import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt-auth")?.value; // 🔐 Read token from cookies
  const { pathname } = request.nextUrl;

  console.log("🔍 Checking token:", token || "No token found");

  if (!token && pathname.startsWith("/dashboard")) {
    console.log("🔒 No Token - Redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// 🔥 Apply middleware only to protected routes
export const config = {
  matcher: ["/dashboard/:path*"], // Protect all `/dashboard` routes
};
