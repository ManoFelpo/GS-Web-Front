"use client"
import HeroSection from "@/components/hero-section"
import CtaButtons from "@/components/cta-buttons"
import FeaturesPreview from "@/components/features-preview"
import Footer from "@/components/footer"
import SkillProfileDemo from "@/components/skill-profile-demo"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SkillProfileDemo />
      <CtaButtons />
      <FeaturesPreview />
      <Footer />
    </main>
  )
}
