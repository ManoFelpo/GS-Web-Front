import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/profissional/:path*",
    "/empresa/:path*",
    "/marketplace/:path*",
    "/desafios/:path*",
    "/gamification/:path*",
    "/trilhas/:path*",
    "/sustentabilidade/:path*",
    "/portfolio/:path*",
  ],
}
