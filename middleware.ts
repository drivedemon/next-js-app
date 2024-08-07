import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req: any) {
  // bypass route
  return NextResponse.next();

  const protectedRoutes = ['/dashboard', '/benefits', '/claims']
  const url = req.nextUrl.clone();
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (session && url.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  if (!session && protectedRoutes.includes(url.pathname)) {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// bypass route
export const config = { matcher: ["/"] }