"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Package, ShoppingCart, CheckCircle2, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function AtkServiceHero() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-32 md:pt-40 pb-16 px-6 md:px-[80px] bg-[#0a0a0a] overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center animate-fade-in opacity-20 scale-105"
          style={{ backgroundImage: 'url("/images/bgperkantoraan.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10"></div>
        
        {/* Background Watermark */}
        <div className="absolute bottom-[-10%] right-[-5%] text-white/[0.05] font-black text-[25vw] leading-none select-none pointer-events-none z-0">
          MCU
        </div>
        
        {/* Decorative Light Effects */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#b31b2c]/10 skew-x-[-20deg] translate-x-[20%] z-0 pointer-events-none blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
              <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">{t('atk_hero_tag')}</span>
            </div>
            <h1 className="text-white text-3xl md:text-[42px] lg:text-[55px] font-black leading-tight tracking-tighter mb-8">
              {t('atk_hero_title')}
            </h1>
            <p className="text-white/70 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mb-12">
              {t('atk_hero_subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-5">
              <Link 
                href="https://wa.me/6285804611938" 
                target="_blank"
                className="bg-[#b31b2c] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#b31b2c] transition-all shadow-2xl hover:-translate-y-2 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                {t('nav_consult')}
              </Link>
              <Link 
                href="#kontak" 
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all shadow-2xl hover:-translate-y-2 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#b31b2c]" />
                {t('nav_contact_us')}
              </Link>
            </div>

            {/* Quick Benefits */}
            <div className="mt-12 flex flex-wrap gap-6 text-white/50 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#b31b2c]" />
                <span>{t('atk_benefit_1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#b31b2c]" />
                <span>{t('atk_benefit_2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#b31b2c]" />
                <span>{t('atk_benefit_3')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Products */}
          <div className="w-full lg:w-1/2 relative animate-fade-in [animation-delay:300ms]">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm group">
              <img 
                src="/images/perkantoran-website.jpg" 
                alt="Office Supplies Display" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Product Cards */}
            <div className="absolute -top-10 -right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl animate-bounce shadow-2xl hidden md:block z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#b31b2c] flex items-center justify-center">
                  <ShoppingCart className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t('atk_hero_badge1')}</div>
                  <div className="text-white/50 text-[10px]">{t('atk_hero_badge1_desc')}</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl animate-pulse shadow-2xl hidden md:block z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Package className="text-[#b31b2c]" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t('atk_hero_badge2')}</div>
                  <div className="text-white/50 text-[10px]">{t('atk_hero_badge2_desc')}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
