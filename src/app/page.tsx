import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBarSection } from '@/components/sections/TrustBarSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyChooseSection } from '@/components/sections/WhyChooseSection'
import { CoverageSection } from '@/components/sections/CoverageSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BlogSection } from '@/components/sections/BlogSection'
import { CareersSection } from '@/components/sections/CareersSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustBarSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <CoverageSection />
        <ProcessSection />
        <TestimonialsSection />
        <BlogSection />
        <CareersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}