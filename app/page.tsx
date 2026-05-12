import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { ServiceSection } from "@/components/service-section"
import { WhyPaySection } from "@/components/why-pay-section"
import { ProfileSection } from "@/components/profile-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
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
      <Footer />
    </main>
  )
}
