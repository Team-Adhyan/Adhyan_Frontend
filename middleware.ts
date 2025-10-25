import { NextResponse, type NextRequest } from "next/server";

// Middleware function
export function middleware(request: NextRequest) {
  // Example: You can add authentication, logging, or redirects here
  console.log("Middleware hit:", request.url);

  // Allow request to continue
  return NextResponse.next();
}

// Config for middleware
export const config = {
  runtime: "nodejs", // Use Node.js runtime to avoid Edge eval errors
  matcher: [
    // Apply middleware to all routes except these
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ],
};
