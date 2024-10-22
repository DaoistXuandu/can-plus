import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    if (cookies().has("set-session-canplus")) {
        if (request.nextUrl.pathname == '/pages/login' || request.nextUrl.pathname == '/pages/signUp')
            return NextResponse.redirect(new URL('/pages/customer/main', request.url))
    }
    else {
        if (request.nextUrl.pathname.startsWith('/pages/customer') || request.nextUrl.pathname.startsWith('/pages/user')) {
            return NextResponse.redirect(new URL('/pages/login', request.url))
        }
    }
    // Example: Log the request URL
    // You can check the pathname or other properties of the request
    // if (request.nextUrl.pathname === '/') {
    //     return NextResponse.redirect(new URL('/pages/login', request.url)); // Redirects /about to /
    // }

    // You can return a response, or let the request continue
    return NextResponse.next(); // Continue with the request
}