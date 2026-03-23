import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy middleware for multi-site folder structure.
 * 
 * Logic:
 * - The first path segment is considered the 'website'.
 * - Any path with more segments (/[website]/[route]) is an 'inside route'.
 * - Root-relative links (e.g. /product) are automatically redirected to include 
 *   the current website's prefix based on host or referer context.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const referer = request.headers.get('referer') || '';

  // 1. Skip internal next.js files, API routes, and files with extensions (images, css, etc.)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Split path into segments (filter removes empty strings from leading/trailing slashes)
  const pathParts = pathname.split('/').filter(Boolean);

  // 2. Identify the intended Website context
  let website = '';

  // Strategy A: Host-based context (Subdomains)
  // e.g. gyn-health.localhost:3000 -> website = 'gyn-health'
  const hostParts = hostname.split('.');
  if (hostParts.length > 1 && hostParts[0] !== 'localhost' && hostParts[0] !== 'www') {
    website = hostParts[0].toLowerCase();
  }

  // Strategy B: Referer-based context (Subfolder tracking for localhost/single domain)
  // If we're on the same domain, look at the page we just came from to identify the website.
  if (!website && referer.includes(hostname)) {
    try {
      const refererUrl = new URL(referer);
      const refererParts = refererUrl.pathname.split('/').filter(Boolean);
      if (refererParts.length > 0) {
        // The first segment of the referer path is the website
        website = refererParts[0];
      }
    } catch (e) {
      // Ignore invalid URL parsing
    }
  }

  // 3. Handle Routing Rules
  if (website) {
    // Rule: The first segment should be the website name.
    // Check if the current pathname already starts with the identified website.
    const isAlreadyPrefixed = pathParts.length > 0 && pathParts[0] === website;

    if (!isAlreadyPrefixed) {
      // If not prefixed, this is a root-relative path that needs to be scoped to the website.
      // e.g. /gyn-visuals becomes /gyn-health/gyn-visuals
      const targetPath = `/${website}${pathname === '/' ? '' : pathname}`;

      // console.log(`[Multi-Site Proxy] Scoping ${pathname} to website: ${website} -> ${targetPath}`);
      return NextResponse.redirect(new URL(targetPath, request.url));
    }
  }

  return NextResponse.next();
}

/**
 * Configure matching rules to run on all routes except static assets
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
