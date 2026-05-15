"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export function ClientCta() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center border border-white/10 shadow-[0_20px_50px_rgba(179,27,44,0.2)] group">
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#b31b2c] via-[#8a1320] to-[#4a0a11] opacity-95 z-0"></div>
          <div className="absolute inset-0 bg-[url('/images/bgperkantoraan.jpg')] bg-cover bg-center mix-blend-overlay opacity-20 group-hover:scale-105 transition-transform duration-1000 z-0"></div>
          
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 border border-white/20 animate-bounce">
              <PhoneCall className="text-white" size={24} />
            </div>

            <h2 className="text-white text-2xl md:text-4xl font-black leading-tight tracking-tight mb-6 max-w-3xl italic">
              {t('client_cta_title')}
            </h2>
            
            <p className="text-white/80 text-sm md:text-base font-medium mb-10 max-w-2xl leading-relaxed">
              {t('client_cta_subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="https://wa.me/6285804611938" 
                target="_blank"
                className="flex items-center justify-center gap-2 bg-white text-[#b31b2c] px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
              >
                <MessageCircle size={18} />
                <span>{t('client_cta_btn1')}</span>
              </Link>
              <Link 
                href="#" 
                className="flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all shadow-xl hover:-translate-y-1"
              >
                <span>{t('client_cta_btn2')}</span>
              </Link>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/10 blur-[60px] rounded-full"></div>
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 blur-[60px] rounded-full"></div>
        </div>

      </div>
    </section>
  );
}
