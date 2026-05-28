import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'お問い合わせ — otomo',
  description: 'お問い合わせと相談申し込みページ。利用方法や料金についてはこちらからお問い合わせください。',
  openGraph: {
    title: 'お問い合わせ — otomo',
    description: 'お問い合わせと相談申し込みページ。利用方法や料金についてはこちらからお問い合わせください。',
    url: `${process.env.SITE_URL || 'https://example.com'}/contact`,
    images: [
      {
        url: `${process.env.SITE_URL || 'https://example.com'}/og-contact.svg`,
        width: 1200,
        height: 630,
        alt: 'otomo お問い合わせ',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.SITE_URL || 'https://example.com'}/contact`,
  },
}

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  )
}
