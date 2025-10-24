
import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Add your custom middleware logic here (authentication, redirects, etc.)
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ]
}
