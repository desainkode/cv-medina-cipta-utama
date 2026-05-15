"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { TestimoniHero } from '@/components/sections/testimonials/TestimoniHero';
import { TestimoniStats } from '@/components/sections/testimonials/TestimoniStats';
import { FeaturedTestimonial } from '@/components/sections/testimonials/FeaturedTestimonial';
import { TestimoniGrid } from '@/components/sections/testimonials/TestimoniGrid';
import { TestimoniVideo } from '@/components/sections/testimonials/TestimoniVideo';
import { TestimoniByCategory } from '@/components/sections/testimonials/TestimoniByCategory';
import { TestimoniRatingSummary } from '@/components/sections/testimonials/TestimoniRatingSummary';
import { TestimoniLogos } from '@/components/sections/testimonials/TestimoniLogos';
import { TestimoniCta } from '@/components/sections/testimonials/TestimoniCta';

export default function TestimoniPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] antialiased selection:bg-[#b31b2c] selection:text-white">
      <Navbar />

      {/* 1. Hero Section */}
      <TestimoniHero />

      {/* 2. Statistik Kepuasan Client */}
      <TestimoniStats />

      {/* 3. Featured Testimonial */}
      <FeaturedTestimonial />

      {/* 4. Grid Testimoni Client */}
      <TestimoniGrid />

      {/* 5. Video Testimoni */}
      <TestimoniVideo />

      {/* 6. Review Berdasarkan Layanan */}
      <TestimoniByCategory />

      {/* 7. Rating & Review Summary */}
      <TestimoniRatingSummary />

      {/* 8. Client Logos - Infinite Slider */}
      <TestimoniLogos />

      {/* 9. CTA Section */}
      <TestimoniCta />

      <Footer />
    </main>
  );
}
