import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductShowcase } from "@/components/product-showcase"
import { HowItWorks } from "@/components/how-it-works"
import { TechnologyOverview } from "@/components/technology-overview"
import { SensorDisplay } from "@/components/sensor-display"
import { StatsSection } from "@/components/stats-section"
import { ComparisonSection } from "@/components/comparison-section"
import { Testimonials } from "@/components/testimonials"
import { LatestGuides } from "@/components/latest-guides"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <HowItWorks />
      <TechnologyOverview />
      <SensorDisplay />
      <StatsSection />
      <ComparisonSection />
      <Testimonials />
      <LatestGuides />
      <CTASection />
      <Footer />
    </main>
  )
}
