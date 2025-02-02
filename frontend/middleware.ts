import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { refreshToken, verifyToken } from "./lib/services/api/authService";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt-auth")?.value;
  const { pathname } = request.nextUrl;

  if (token) {
    try {
      try {
        await verifyToken(token);
      } catch (e) {
        console.error("Token verification error:", e);
        return NextResponse.redirect(new URL("/login", request.url));
      }

      if (pathname === "/login" || pathname === "/signup") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    } catch (e) {
      try {
        await refreshToken();
      } catch (e) {
        console.log("🔒 Invalid Token - Redirecting to /login");
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }

  if (!token && pathname.startsWith("/dashboard")) {
    console.log("🔒 No Token - Redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
