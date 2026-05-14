import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] antialiased selection:bg-[#800000] selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <ProductsSection />
      <StatsSection />
      <TestimonialSection />
      <ClientLogosSection />
      <BlogSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
