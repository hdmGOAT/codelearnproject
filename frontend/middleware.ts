import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
    const auth = request.cookies.get("jwt-auth");
    const refresh = request.cookies.get("jwt-refresh");

    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/",
};