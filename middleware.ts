import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['fr', 'en']
const defaultLocale = 'fr'

// Fonction pour obtenir la langue préférée du navigateur
function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  
  try {
    return match(languages, locales, defaultLocale)
  } catch {
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Vérifier si le chemin a déjà une locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Ignorer les chemins d'API et fichiers statiques
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.includes('.')
  ) {
    return
  }

  if (pathnameHasLocale) return

  // Rediriger vers la locale appropriée
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|admin|api|favicon.ico).*)'],
}
