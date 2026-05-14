"use client";

import { Navbar } from "@/components/layout/Navbar";
import { WebServiceHero } from "@/components/sections/WebServiceHero";
import { WebAboutService } from "@/components/sections/WebAboutService";
import { WebServiceTypes } from "@/components/sections/WebServiceTypes";
import { WebServiceFeatures } from "@/components/sections/WebServiceFeatures";
import { WebPricing } from "@/components/sections/WebPricing";
import { WebWorkflow } from "@/components/sections/WebWorkflow";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WebTechStack } from "@/components/sections/WebTechStack";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { WebFaq } from "@/components/sections/WebFaq";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";

export default function WebsiteServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] antialiased selection:bg-[#b31b2c] selection:text-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <WebServiceHero />

      {/* 2. Tentang Layanan */}
      <WebAboutService />

      {/* 3. Jenis Website */}
      <WebServiceTypes />

      {/* 4. Fitur Website */}
      <WebServiceFeatures />

      {/* 5. Paket Harga */}
      <WebPricing />

      {/* 6. Alur Pengerjaan */}
      <WebWorkflow />

      {/* 7. Portfolio */}
      <PortfolioSection />

      {/* 8. Teknologi */}
      <WebTechStack />

      {/* 9. Testimonial */}
      <TestimonialSection />

      {/* 10. FAQ */}
      <WebFaq />

      {/* 11. CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}
