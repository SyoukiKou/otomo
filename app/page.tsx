import type { Metadata } from 'next'
import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { ServiceSection } from "@/components/service-section"
import { WhyPaySection } from "@/components/why-pay-section"
import { ProfileSection } from "@/components/profile-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection, faqs } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }
  return (
    <main>
      <Header />
      <HeroSection />
      <PainPointsSection />
      <ServiceSection />
      <WhyPaySection />
      <ProfileSection />
      <ContactSection />
      <FAQSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Footer />
    </main>
  )
}

export async function generateMetadata({ request }: { request: Request }): Promise<Metadata> {
  const url = new URL(request.url)
  const origin = url.origin
  const canonical = origin + url.pathname.replace(/\/$/, '') || origin + '/'

  return {
    title: 'otomo — 音楽と仕事の両立を支援するキャリア相談',
    description:
      '音楽と仕事の両立を目指すあなたへ。経験豊富なキャリアアドバイザーが、実践的な行動プランを一緒に作ります。',
    openGraph: {
      title: 'otomo — 音楽と仕事の両立を支援するキャリア相談',
      description:
        '音楽と仕事の両立を目指すあなたへ。経験豊富なキャリアアドバイザーが、実践的な行動プランを一緒に作ります。',
      url: canonical,
      images: [
        {
          url: `${origin}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'otomo — キャリア相談サービス',
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical,
    },
  }
}
