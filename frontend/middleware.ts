import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { middlewareRefresh } from "./lib/services/api/authService";

export default function middleware(request: NextRequest) {
  const auth = request.cookies.get("jwt-auth");
  const refresh = request.cookies.get("jwt-refresh");

  console.log("auth: ", auth, "\nrefresh: ", refresh);

  if (auth === undefined && refresh !== undefined) {
    middlewareRefresh(refresh.value);
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/",
};