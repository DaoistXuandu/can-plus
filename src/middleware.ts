import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // Example: Log the request URL
    // You can check the pathname or other properties of the request
    // if (request.nextUrl.pathname === '/') {
    //     return NextResponse.redirect(new URL('/pages/login', request.url)); // Redirects /about to /
    // }

    // You can return a response, or let the request continue
    return NextResponse.next(); // Continue with the request
}