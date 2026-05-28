import type { Metadata } from 'next'
import { FAQSection, faqs } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'よくあるご質問 — otomo',
  description: 'otomo のよくあるご質問一覧。相談内容、支払い、キャンセルなどに関するFAQ。',
  openGraph: {
    title: 'よくあるご質問 — otomo',
    description: 'otomo のよくあるご質問一覧。相談内容、支払い、キャンセルなどに関するFAQ。',
    url: `${process.env.SITE_URL || 'https://example.com'}/faq`,
    images: [
      {
        url: `${process.env.SITE_URL || 'https://example.com'}/og-faq.svg`,
        width: 1200,
        height: 630,
        alt: 'otomo FAQ',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.SITE_URL || 'https://example.com'}/faq`,
  },
}

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: process.env.SITE_URL || 'https://example.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQ',
        item: `${process.env.SITE_URL || 'https://example.com'}/faq`,
      },
    ],
  }

  return (
    <main>
      <FAQSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </main>
  )
}
