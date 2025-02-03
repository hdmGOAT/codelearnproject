import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { middlewareRefresh } from "./lib/services/api/authService";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt-auth")?.value; // 🔐 Read token from cookies
  const { pathname } = request.nextUrl;

  console.log("🔍 Checking token:", token || "No token found");

  if (!token && pathname !== "/login" && pathname !== "/register") {
    const response = await middlewareRefresh();

    if (response.error) {
      console.error("❌ Token refresh failed:", response.error);
      return NextResponse.redirect(new URL("/login", request.url));
    }

    console.log("✅ Token refresh successful:", response);
  }

  return NextResponse.next();
}

// 🔥 Apply middleware only to protected routes
export const config = {
  matcher: ["/dashboard/:path*", "/course/:path*"], // Protect all `/dashboard` routes
};
