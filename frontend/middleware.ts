import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.DJANGO_SECRET_KEY;

export function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt-auth")?.value;
  const { pathname } = request.nextUrl;

  if (token) {
    try {
      if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
      }
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log("✅ Valid Token for User:", decoded);

      if (pathname === "/login" || pathname === "/signup") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error("❌ Invalid Token:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (!token && pathname.startsWith("/dashboard")) {
    console.log("🔒 No Token - Redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
