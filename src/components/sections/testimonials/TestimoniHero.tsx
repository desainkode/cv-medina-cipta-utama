"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function TestimoniHero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center animate-fade-in opacity-40 scale-105"
          style={{ backgroundImage: 'url("/images/perkantoran-website.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10"></div>

        {/* Decorative Geometric Shapes */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#b31b2c]/10 skew-x-[-15deg] translate-x-[10%] z-0 pointer-events-none blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[120%] bg-[#b31b2c]/5 skew-x-[-25deg] translate-x-[20%] z-0 pointer-events-none"></div>

        {/* Watermark */}
        <div className="absolute bottom-[-10%] right-[-5%] text-white/[0.03] font-black text-[25vw] leading-none select-none pointer-events-none z-0">
          MCU
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6 md:px-[80px] pt-32 md:pt-40">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-3 mb-8 animate-fade-up">
          <Link href="/" className="text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.3em]">
            {t('testi_breadcrumb_home')}
          </Link>
          <div className="w-4 h-[1px] bg-[#b31b2c]"></div>
          <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
            {t('testi_breadcrumb_current')}
          </span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-white text-3xl md:text-[42px] lg:text-[55px] font-black leading-[1.1] tracking-tighter mb-6 animate-fade-up [animation-delay:100ms]">
            {t('testi_hero_title_1')} <br />
            <span className="text-[#b31b2c]">{t('testi_hero_title_2')}</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mb-10 animate-fade-up [animation-delay:200ms]">
            {t('testi_hero_subtitle')}
          </p>

          <div className="flex flex-wrap gap-5 animate-fade-up [animation-delay:300ms]">
            <Link
              href="https://wa.me/6285804611938"
              target="_blank"
              className="bg-[#b31b2c] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#b31b2c] transition-all shadow-2xl hover:-translate-y-2 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              {t('testi_cta_1')}
            </Link>
            <Link
              href="#kontak"
              className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all shadow-2xl hover:-translate-y-2 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#b31b2c]" />
              {t('testi_cta_2')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
