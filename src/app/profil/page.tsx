"use client";

import { Navbar } from "@/components/layout/Navbar";
import { ProfileHero } from "@/components/sections/ProfileHero";
import { AboutCompanyDetail } from "@/components/sections/AboutCompanyDetail";
import { VisionMission } from "@/components/sections/VisionMission";
import { CoreValues } from "@/components/sections/CoreValues";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { CompanyTimeline } from "@/components/sections/CompanyTimeline";
import { CompanyTeam } from "@/components/sections/CompanyTeam";
import { CompanyLegal } from "@/components/sections/CompanyLegal";
import { StatsSection } from "@/components/sections/StatsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] antialiased selection:bg-[#b31b2c] selection:text-white">
      <Navbar />
      
      {/* 1. Hero Banner */}
      <ProfileHero />

      {/* 2. Tentang Perusahaan */}
      <AboutCompanyDetail />

      {/* 3. Visi & Misi */}
      <VisionMission />

      {/* 4. Nilai Perusahaan */}
      <CoreValues />

      {/* 5. Kenapa Memilih Kami */}
      <WhyUsSection />

      {/* 6. Timeline Perusahaan */}
      <CompanyTimeline />

      {/* 7. Tim Perusahaan */}
      <CompanyTeam />

      {/* 8. Legalitas Perusahaan */}
      <CompanyLegal />

      {/* 9. Statistik */}
      <StatsSection />

      {/* 10. CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}
