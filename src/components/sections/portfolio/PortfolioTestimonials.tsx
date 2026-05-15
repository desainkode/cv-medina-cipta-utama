"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

export function PortfolioTestimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testi1_name'),
      role: t('testi1_role'),
      content: t('testi1_content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop'
    },
    {
      name: t('testi2_name'),
      role: t('testi2_role'),
      content: t('testi2_content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2340&auto=format&fit=crop'
    },
    {
      name: t('testi3_name'),
      role: t('testi3_role'),
      content: t('testi3_content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-[#0d0d0d]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('portfolio_testimonial_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">
            {t('portfolio_testimonial_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 relative group hover:border-[#b31b2c]/30 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[#b31b2c]/10 group-hover:text-[#b31b2c]/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b31b2c] text-[#b31b2c]" />
                ))}
              </div>

              <p className="text-white/70 text-base italic leading-relaxed mb-8 relative z-10">
                "{testi.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#b31b2c]/30">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">{testi.name}</h4>
                  <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
