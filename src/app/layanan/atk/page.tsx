"use client";

import { Navbar } from "@/components/layout/Navbar";
import { AtkServiceHero } from "@/components/sections/AtkServiceHero";
import { AtkAboutService } from "@/components/sections/AtkAboutService";
import { AtkCategories } from "@/components/sections/AtkCategories";
import { AtkFeaturedProducts } from "@/components/sections/AtkFeaturedProducts";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { AtkWorkflow } from "@/components/sections/AtkWorkflow";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { AtkFaq } from "@/components/sections/AtkFaq";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactInfoSection } from "@/components/sections/ContactInfoSection";
import { Footer } from "@/components/layout/Footer";

export default function AtkServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] antialiased selection:bg-[#b31b2c] selection:text-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <AtkServiceHero />

      {/* 2. Tentang Layanan ATK */}
      <AtkAboutService />

      {/* 3. Kategori Produk */}
      <AtkCategories />

      {/* 4. Produk Unggulan */}
      <AtkFeaturedProducts />

      {/* 5. Keunggulan Layanan */}
      <WhyUsSection />

      {/* 6. Alur Pemesanan */}
      <AtkWorkflow />

      {/* 7. Client & Partner */}
      <ClientLogosSection />

      {/* 8. Testimoni Pelanggan */}
      <TestimonialSection />

      {/* 9. FAQ */}
      <AtkFaq />

      {/* 10. CTA Section */}
      <CtaSection />

      {/* 11. Contact Section */}
      <ContactInfoSection />

      <Footer />
    </main>
  );
}
