import type { Metadata } from 'next'
import { FAQSection, faqs } from '@/components/faq-section'
import { absoluteUrl, getRequestOrigin } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getRequestOrigin()
  const canonical = absoluteUrl(origin, '/faq')

  return {
    title: 'よくあるご質問 — otomo',
    description: 'otomo のよくあるご質問一覧。相談内容、支払い、キャンセルなどに関するFAQ。',
    openGraph: {
      title: 'よくあるご質問 — otomo',
      description: 'otomo のよくあるご質問一覧。相談内容、支払い、キャンセルなどに関するFAQ。',
      url: canonical,
      images: [
        {
          url: absoluteUrl(origin, '/og-faq.svg'),
          width: 1200,
          height: 630,
          alt: 'otomo FAQ',
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical,
    },
  }
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

  const origin = (process.env.SITE_URL || 'https://example.com').replace(/\/$/, '')
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: origin,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQ',
        item: absoluteUrl(origin, '/faq'),
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
