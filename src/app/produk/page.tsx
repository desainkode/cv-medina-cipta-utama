"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductSearchFilter } from "@/components/sections/ProductSearchFilter";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ProductPromoBanner, FeaturedProductsSlider } from "@/components/sections/ProductSections";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { ProductWhyUs } from "@/components/sections/ProductWhyUs";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ProductCta } from "@/components/sections/ProductCta";
import { Footer } from "@/components/layout/Footer";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState("terbaru");

  return (
    <main className="min-h-screen bg-[#0a0a0a] antialiased selection:bg-[#b31b2c] selection:text-white">
      <Navbar />
      
      {/* 1. Hero Banner Produk */}
      <ProductHero />

      {/* 2. Search & Filter Produk */}
      <ProductSearchFilter 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* 3. Grid Katalog Produk */}
      <ProductGrid 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
      />

      {/* 4. Section Kategori Produk */}
      <ProductCategories />

      {/* 5. Produk Unggulan (Slider) */}
      <FeaturedProductsSlider />

      {/* 6. Keunggulan Layanan */}
      <ProductWhyUs />

      {/* 7. CTA Section */}
      <ProductCta />

      {/* 8. Floating WhatsApp */}
      <FloatingWhatsApp />

      <Footer />
    </main>
  );
}
