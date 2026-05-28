import type { Metadata } from 'next'
import { ServiceSection } from '@/components/service-section'

export async function generateMetadata({ request }: { request: Request }): Promise<Metadata> {
  const url = new URL(request.url)
  const origin = url.origin
  const canonical = `${origin}/service`

  return {
    title: 'サービス — otomo',
    description: 'otomo の提供するキャリア相談サービスの内容と料金、流れについてご紹介します。',
    openGraph: {
      title: 'サービス — otomo',
      description: 'otomo の提供するキャリア相談サービスの内容と料金、流れについてご紹介します。',
      url: canonical,
      images: [
        {
          url: `${origin}/og-service.svg`,
          width: 1200,
          height: 630,
          alt: 'otomo サービス',
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical,
    },
  }
}

export default function ServicePage() {
  return (
    <main>
      <ServiceSection />
    </main>
  )
}
