import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'

export async function generateMetadata({ request }: { request: Request }): Promise<Metadata> {
  const url = new URL(request.url)
  const origin = url.origin
  const canonical = `${origin}/contact`

  return {
    title: 'お問い合わせ — otomo',
    description: 'お問い合わせと相談申し込みページ。利用方法や料金についてはこちらからお問い合わせください。',
    openGraph: {
      title: 'お問い合わせ — otomo',
      description: 'お問い合わせと相談申し込みページ。利用方法や料金についてはこちらからお問い合わせください。',
      url: canonical,
      images: [
        {
          url: `${origin}/og-contact.svg`,
          width: 1200,
          height: 630,
          alt: 'otomo お問い合わせ',
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical,
    },
  }
}

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  )
}
