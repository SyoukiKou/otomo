import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const SITE_URL =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  'https://otomo.thehearth.jp'

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'otomo - キャリア相談サービス',
  description:
    '音楽と仕事の両立を目指すあなたへ。キャリア相談を通じて、自分の人生の選択肢を一緒に考えるサービスです。',
  generator: 'v0.app',
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  keywords: ['キャリア相談', '音楽', 'キャリア', '相談', '副業', 'ミュージシャン'],
  authors: [
    {
      name: 'otomo',
      url: SITE_URL,
    },
  ],
  openGraph: {
    title: 'otomo - キャリア相談サービス',
    description:
      '音楽と仕事の両立を目指すあなたへ。キャリア相談を通じて、自分の人生の選択肢を一緒に考えるサービスです。',
    url: SITE_URL,
    siteName: 'otomo',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'otomo - キャリア相談サービス',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'otomo - キャリア相談サービス',
    description:
      '音楽と仕事の両立を目指すあなたへ。キャリア相談を通じて、自分の人生の選択肢を一緒に考えるサービスです。',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google:
      process.env.GOOGLE_SITE_VERIFICATION ||
      's9whDho25mEaCPa_9wBK0xMU2FvJF6-v0H9bspz6C8w',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'otomo',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
