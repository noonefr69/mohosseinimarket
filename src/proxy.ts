import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const proxy = auth((req) => {
  if (!req.auth) {
    const loginUrl = new URL("/sign-in", req.url);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
});

export const config = { matcher: ["/profile/:path*"] };
