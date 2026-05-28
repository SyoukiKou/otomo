const fs = require('fs')
const path = require('path')

const SITE_URL = process.env.SITE_URL || 'https://example.com'
const APP_DIR = path.join(__dirname, '..', 'app')
const OUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml')

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let pages = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      pages = pages.concat(walk(full))
    } else if (/^page\.(?:tsx|jsx|ts|js)$/.test(entry.name)) {
      pages.push(full)
    }
  }
  return pages
}

function toUrl(filePath) {
  // filePath: /.../app/.../page.tsx
  const rel = path.relative(APP_DIR, path.dirname(filePath))
  if (!rel || rel === '') return '/'
  // skip dynamic routes with [param]
  if (rel.split(path.sep).some(p => p.startsWith('['))) return null
  return `/${rel.replace(/\\\\/g, '/')}`
}

function main() {
  if (!fs.existsSync(APP_DIR)) {
    console.error('app directory not found')
    process.exit(1)
  }
  const pages = walk(APP_DIR).map(toUrl).filter(Boolean)
  const unique = Array.from(new Set(pages))
  const now = new Date().toISOString()
  const urls = unique.map(p => `  <url>\n    <loc>${SITE_URL.replace(/\/$/, '')}${p}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`).join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
  fs.writeFileSync(OUT_PATH, xml, 'utf8')
  console.log('sitemap.xml generated at', OUT_PATH)
}

main()
