import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { middlewareRefresh } from "./lib/services/api/authService";

export default async function middleware(request: NextRequest) {
  let auth = request.cookies.get("jwt-auth");
  const refresh = request.cookies.get("jwt-refresh");

  console.log("auth: ", auth, "\nrefresh: ", refresh);

  if (auth === undefined && refresh !== undefined) {
    const response = await middlewareRefresh(refresh.value);
    if (response.ok) {
      auth = request.cookies.get("jwt-auth");
    } else {
      console.error("error refreshing token: ", response);
    }
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/",
};