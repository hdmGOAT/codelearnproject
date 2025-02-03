import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  middlewareRefresh,
  middlewareVerify,
} from "./lib/services/api/authService";
import { createSignedToken, verifySignedToken } from "./lib/utils/TokenUtils";

//These are where login will be required

export default async function middleware(request: NextRequest) {
  let auth = request.cookies.get("jwt-auth");
  const refresh = request.cookies.get("jwt-refresh");
  const verified = request.cookies.get("jwt-verified");

  console.log("auth: ", auth, "\nrefresh: ", refresh, "\nverified: ", verified);

  if (verified && (await verifySignedToken(verified.value))) {
    return NextResponse.next();
  }

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

  const isValid = await middlewareVerify(auth.value);
  if (!isValid) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const response = NextResponse.next();
  response.cookies.set(
    "jwt-verified",
    await createSignedToken({ timestamp: Date.now() }),
    {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      maxAge: 60 * 5,
    }
  );
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/courses/:path*"],
};