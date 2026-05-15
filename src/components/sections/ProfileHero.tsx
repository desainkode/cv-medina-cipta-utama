"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ChevronRight, Award, ShieldCheck, Users } from 'lucide-react';

export function ProfileHero() {
  const { t } = useLanguage();
  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center animate-fade-in opacity-30 scale-105"
          style={{ backgroundImage: 'url("/images/perkantoran-website.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        {/* Background Watermark */}
        <div className="absolute bottom-[-10%] right-[-5%] text-white/[0.05] font-black text-[25vw] leading-none select-none pointer-events-none z-0">
          MCU
        </div>
        
        {/* Decorative Light Effects */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#b31b2c]/10 skew-x-[-20deg] translate-x-[20%] z-0 pointer-events-none blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-[#b31b2c]/5 rounded-full pointer-events-none blur-[100px]"></div>
      </div>

      <div className="relative z-20 w-full mx-auto px-6 md:px-[80px] pt-32 md:pt-40 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-3/5">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 animate-fade-up">
            <Link href="/" className="text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
              {t('profile_breadcrumb_home')}
            </Link>
            <ChevronRight className="w-3 h-3 text-[#b31b2c]" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              {t('profile_breadcrumb_current')}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up [animation-delay:100ms]">
              <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
              <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">{t('profile_hero_tag')}</span>
            </div>
            <h1 className="text-white text-3xl md:text-[42px] lg:text-[55px] font-black leading-tight tracking-tighter mb-8 animate-fade-up [animation-delay:200ms]">
              {t('profile_hero_title')}
            </h1>
            <p className="text-white/70 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mb-10 animate-fade-up [animation-delay:300ms]">
              {t('profile_hero_subtitle')}
            </p>
            
            {/* Quick Badges */}
            <div className="flex flex-wrap gap-6 animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#b31b2c] transition-all">
                   <Award className="text-[#b31b2c] group-hover:text-white" size={20} />
                </div>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{t('profile_hero_badge1')}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#b31b2c] transition-all">
                  <ShieldCheck className="text-[#b31b2c] group-hover:text-white" size={20} />
                </div>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{t('profile_hero_badge2')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Floating Info Cards */}
        <div className="w-full lg:w-2/5 relative animate-fade-in [animation-delay:500ms]">
          <div className="relative p-10 md:p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group hover:border-[#b31b2c]/30 transition-all duration-500">
            {/* Card Decor */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#b31b2c]/10 rounded-full blur-[40px] group-hover:bg-[#b31b2c]/20 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#b31b2c] flex items-center justify-center shadow-lg shadow-red-900/40">
                  <Users className="text-white" size={28} />
                </div>
                <div>
                  <div className="text-white font-black text-2xl">50+</div>
                  <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{t('profile_hero_stats_clients')}</div>
                </div>
              </div>
              
              <div className="h-[1px] w-full bg-white/10"></div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-white font-bold text-lg mb-1">{t('profile_hero_stats_established')}</div>
                  <div className="text-[#b31b2c] font-black text-xl italic">2019</div>
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-1">{t('profile_hero_stats_projects')}</div>
                  <div className="text-[#b31b2c] font-black text-xl italic">100+</div>
                </div>
              </div>
              
              <Link href="/#kontak" className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
                {t('profile_hero_cta')}
              </Link>
            </div>
          </div>

          {/* Additional Floating Element */}
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-gradient-to-br from-[#b31b2c] to-[#7a121d] p-6 rounded-3xl shadow-2xl animate-bounce hidden sm:block z-20">
            <div className="text-white font-black text-center">
              <div className="text-2xl">100%</div>
              <div className="text-[10px] uppercase tracking-widest opacity-80">{t('profile_hero_commitment')}</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
