"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ExternalLink, MessageCircle, Monitor, Smartphone, Tablet, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioDetailPage() {
  const { slug } = useParams();
  const { t } = useLanguage();

  // Mock data lookup (should ideally come from a central data file)
  const projects: any = {
    'tech-corp-profile': {
      title: 'Corporate Portal V2',
      client: 'PT. Teknologi Indonesia',
      category: 'Company Profile',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      about: 'Proyek ini bertujuan untuk memperbarui identitas digital PT. Teknologi Indonesia agar lebih modern dan profesional, sekaligus meningkatkan performa website di mesin pencari.',
      goal: 'Menciptakan representasi digital yang kuat untuk menarik investor dan klien korporat baru.',
      problem: 'Website lama sulit dikelola, lambat, dan tidak responsif di perangkat mobile.',
      solution: 'Membangun ulang website menggunakan Next.js dengan arsitektur modern yang mengutamakan kecepatan dan SEO.',
      features: ['SEO Optimized', 'CMS Integration', 'Multi-language', 'Client Dashboard'],
      results: ['Peningkatan trafik 40%', 'Waktu muat < 1 detik', 'User engagement naik 25%'],
      tech: ['React', 'Next.js', 'Tailwind', 'Prisma']
    },
    // Add other projects here...
  };

  const project = projects[slug as string] || projects['tech-corp-profile'];

  return (
    <main className="min-h-screen bg-[#111111] antialiased">
      <Navbar />
      
      {/* Hero Detail */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-[80px]">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/50 hover:text-[#b31b2c] transition-colors mb-12 text-sm uppercase tracking-widest font-bold">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#b31b2c]/10 border border-[#b31b2c]/20 rounded-full text-[10px] font-bold text-[#b31b2c] tracking-widest uppercase">{project.category}</span>
                <span className="text-white/30 text-xs font-bold">{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">{project.title}</h1>
              <p className="text-white/40 text-xl font-medium">{project.client}</p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <button className="px-8 py-4 bg-[#b31b2c] text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all flex items-center gap-3 shadow-xl shadow-red-900/20">
                <ExternalLink className="w-4 h-4" /> Live Preview
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
                <MessageCircle className="w-4 h-4" /> Consult Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Thumbnail */}
      <section className="container mx-auto px-6 md:px-[80px] mb-24">
        <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-video lg:aspect-[21/9]">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Content Details */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-[80px]">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* About & Mission */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-black text-white italic tracking-tighter border-l-4 border-[#b31b2c] pl-6 uppercase">{t('portfolio_detail_about_title')}</h2>
                <p className="text-white/70 text-lg leading-relaxed">{project.about}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                  <h3 className="text-white font-bold text-lg">{t('portfolio_detail_about_problem')}</h3>
                  <p className="text-white/50 leading-relaxed">{project.problem}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-white font-bold text-lg">{t('portfolio_detail_about_solution')}</h3>
                  <p className="text-white/50 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="flex flex-col gap-12">
              {/* Features */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4 text-[#b31b2c]" /> {t('portfolio_detail_about_features')}
                </h3>
                <ul className="space-y-4">
                  {project.features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b31b2c]"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">{t('portfolio_detail_tech_title')}</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t: string, i: number) => (
                    <div key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-white/80 text-xs font-bold">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery/Previews */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="container mx-auto px-6 md:px-[80px]">
          <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter mb-16 text-center">{t('portfolio_detail_gallery_title')}</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10 group overflow-hidden">
               <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3">
                   <Monitor className="w-5 h-5 text-[#b31b2c]" />
                   <span className="text-white font-bold text-xs uppercase tracking-widest">Desktop Preview</span>
                 </div>
               </div>
               <div className="rounded-xl overflow-hidden border border-white/5 aspect-video group-hover:scale-[1.02] transition-transform duration-700">
                 <img src={project.image} alt="Desktop" className="w-full h-full object-cover" />
               </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10 group overflow-hidden">
                <div className="flex items-center gap-3 mb-8">
                  <Tablet className="w-5 h-5 text-[#b31b2c]" />
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Tablet</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/5 aspect-[3/4] group-hover:scale-[1.02] transition-transform duration-700">
                  <img src={project.image} alt="Tablet" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10 group overflow-hidden">
                <div className="flex items-center gap-3 mb-8">
                  <Smartphone className="w-5 h-5 text-[#b31b2c]" />
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Mobile</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/5 aspect-[9/16] group-hover:scale-[1.02] transition-transform duration-700">
                  <img src={project.image} alt="Mobile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-6 md:px-[80px]">
          <div className="bg-gradient-to-r from-[#b31b2c] to-[#800000] rounded-[40px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
             <div className="relative z-10 flex flex-col gap-6 max-w-xl">
               <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">{t('portfolio_detail_results_title')}</h2>
               <ul className="space-y-4">
                 {project.results.map((res: string, i: number) => (
                   <li key={i} className="flex items-center gap-4 text-white text-lg font-bold">
                     <CheckCircle2 className="w-6 h-6" /> {res}
                   </li>
                 ))}
               </ul>
             </div>
             
             <div className="relative z-10">
               <button className="px-12 py-5 bg-white text-[#b31b2c] rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/90 hover:scale-105 transition-all shadow-2xl">
                 Work With Us
               </button>
             </div>

             <div className="absolute top-0 right-0 w-full h-full bg-white/5 blur-[100px] pointer-events-none"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
