"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

export function FeaturedTestimonial() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#b31b2c]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-[80px] relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('testi_featured_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic text-center">
            {t('testi_featured_title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Large Photo/Mockup */}
          <div className="relative group animate-fade-in">
            <div className="absolute inset-0 bg-[#b31b2c] rounded-[2rem] translate-x-4 translate-y-4 -z-10 opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500"></div>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/bgperkantoraan.jpg"
                alt="Featured Client"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Badge on Image */}
              <div className="absolute bottom-8 left-8 bg-white/5 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-[#b31b2c] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div>
                  <div className="text-white font-bold text-sm">MCU Partner</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-black">{t('testi_featured_verified')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Review Details */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[2.5rem] relative animate-fade-up">
            <Quote className="absolute top-10 right-10 w-20 h-20 text-[#b31b2c]/10 pointer-events-none" />

            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed italic mb-10 font-medium">
              "{t('testi_featured_content')}"
            </p>

            <div className="flex items-center gap-6">
              <div className="h-16 w-1 bg-[#b31b2c] rounded-full"></div>
              <div>
                <h4 className="text-white text-lg md:text-xl font-black italic">{t('testi1_name')}</h4>
                <p className="text-[#b31b2c] font-black text-[10px] uppercase tracking-[0.3em]">{t('testi1_role')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
