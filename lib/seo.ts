import { headers } from 'next/headers'

export async function getRequestOrigin(): Promise<string> {
  const h = await headers()
  const forwardedProto = h.get('x-forwarded-proto')
  const forwardedHost = h.get('x-forwarded-host')
  const hostHeader = h.get('host')

  const proto = forwardedProto?.split(',')[0]?.trim() || 'https'
  const host =
    forwardedHost?.split(',')[0]?.trim() ||
    hostHeader?.split(',')[0]?.trim() ||
    new URL(process.env.SITE_URL || 'https://example.com').host

  return `${proto}://${host}`
}

export function absoluteUrl(origin: string, path: string): string {
  if (!path.startsWith('/')) {
    return `${origin}/${path}`
  }
  return `${origin}${path}`
}
