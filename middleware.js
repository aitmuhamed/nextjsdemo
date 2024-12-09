import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token');
  
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url)); // Redirect to login page
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Apply middleware to all dashboard routes
};
