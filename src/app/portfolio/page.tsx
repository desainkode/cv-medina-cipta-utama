"use client";

import React, { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioHero } from "@/components/sections/portfolio/PortfolioHero";
import { PortfolioStats } from "@/components/sections/portfolio/PortfolioStats";
import { PortfolioFilter } from "@/components/sections/portfolio/PortfolioFilter";
import { PortfolioGrid } from "@/components/sections/portfolio/PortfolioGrid";
import { FeaturedProject } from "@/components/sections/portfolio/FeaturedProject";
import { PortfolioProcess } from "@/components/sections/portfolio/PortfolioProcess";
import { PortfolioTestimonials } from "@/components/sections/portfolio/PortfolioTestimonials";
import { PortfolioClients } from "@/components/sections/portfolio/PortfolioClients";
import { PortfolioCta } from "@/components/sections/portfolio/PortfolioCta";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-[#111111] antialiased selection:bg-[#800000] selection:text-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <PortfolioHero />
      
      {/* 2. Statistik Portfolio */}
      <PortfolioStats />
      
      <section className="py-16 bg-[#111111]">
        <div className="container mx-auto px-6 md:px-[80px]">
          {/* 3. Filter Portfolio */}
          <PortfolioFilter 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
          
          {/* 4. Grid Portfolio */}
          <PortfolioGrid 
            activeCategory={activeCategory} 
            searchQuery={searchQuery} 
          />
        </div>
      </section>

      {/* 5. Featured Project */}
      <FeaturedProject />

      {/* 9. Proses Pengerjaan Project (Moved up for better flow) */}
      <PortfolioProcess />

      {/* 7. Testimoni Client */}
      <PortfolioTestimonials />

      {/* 8. Client & Partner */}
      <PortfolioClients />

      {/* 10. CTA Section */}
      <PortfolioCta />

      <Footer />
    </main>
  );
}
