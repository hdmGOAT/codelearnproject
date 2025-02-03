import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  middlewareRefresh,
  middlewareVerify,
} from "./lib/services/api/authService";

export default async function middleware(request: NextRequest) {
  let auth = request.cookies.get("jwt-auth");
  const refresh = request.cookies.get("jwt-refresh");

  console.log("auth: ", auth, "\nrefresh: ", refresh);

  if (auth === undefined) {
    if (refresh !== undefined) {
      const newAuth = await middlewareRefresh(refresh.value);
      if (newAuth) {
        const response = NextResponse.next();
        response.cookies.set("jwt-auth", newAuth, {
          httpOnly: true,
          sameSite: "lax",
          secure: true,
          maxAge: 60 * 5,
        });
        return response;
      } else {
        console.error("error refreshing token: ", newAuth);
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } else {
      //refresh is expired log in again is required
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (auth !== undefined) {
    const response = await middlewareVerify(auth.value);
    if (!response) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/courses/:path*"],
};