import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { middlewareRefresh } from "./lib/services/api/authService";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt-auth");
  const refresh = request.cookies.get("jwt-refresh");

  if (!token) {
    if (refresh) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/token/refresh/`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const newToken = data.access;

        const res = NextResponse.next();
        res.cookies.set("jwt-auth", newToken, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 5, // 5 minutes
        });

        return res;
      }

      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
