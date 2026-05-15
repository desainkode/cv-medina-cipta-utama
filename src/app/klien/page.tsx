"use client";

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClientHero } from "@/components/sections/clients/ClientHero";
import { ClientStats } from "@/components/sections/clients/ClientStats";
import { ClientLogos } from "@/components/sections/clients/ClientLogos";
import { FeaturedClient } from "@/components/sections/clients/FeaturedClient";
import { ClientCategories } from "@/components/sections/clients/ClientCategories";
import { ClientTestimonials } from "@/components/sections/clients/ClientTestimonials";
import { ClientProjects } from "@/components/sections/clients/ClientProjects";
import { ClientPartnership } from "@/components/sections/clients/ClientPartnership";
import { ClientCta } from "@/components/sections/clients/ClientCta";

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] antialiased selection:bg-[#b31b2c] selection:text-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <ClientHero />
      
      {/* 2. Statistik Klien */}
      <ClientStats />

      {/* 3. Logo Client Section */}
      <ClientLogos />

      {/* 4. Featured Client */}
      <FeaturedClient />

      {/* 5. Kategori Client */}
      <ClientCategories />

      {/* 6. Testimoni Client */}
      <ClientTestimonials />

      {/* 7. Project Bersama Client */}
      <ClientProjects />

      {/* 8. Kerja Sama & Partnership */}
      <ClientPartnership />

      {/* 9. CTA Section */}
      <ClientCta />

      <Footer />
    </main>
  );
}
