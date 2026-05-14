"use client";

import { Monitor, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      {/* Giant Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] font-black text-[15vw] leading-none select-none pointer-events-none z-0 tracking-tighter">
        ABOUT
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#b31b2c]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#b31b2c]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Column - Artistic Image Layout */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Main Image Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-[#1a1a1a]">
              <img 
                src="/images/perkantoran-website.jpg" 
                alt="Medina Cipta Utama" 
                className="w-full h-[450px] md:h-[550px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b31b2c]/20 via-transparent to-transparent"></div>
            </div>

            {/* Decorative Back Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#b31b2c]/30 rounded-[2.5rem] -z-10 group-hover:top-[-12px] group-hover:left-[-12px] transition-all duration-500"></div>
            
            {/* Experience Floating Plate */}
            <div className="absolute -bottom-10 right-[-5%] md:right-10 z-20 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center min-w-[140px] animate-fade-up">
              <div className="text-[#b31b2c] font-black text-4xl leading-none mb-2 tracking-tighter">5+</div>
              <div className="text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-80">{t('about_exp_label')}</div>
              {/* Subtle line */}
              <div className="w-8 h-[1px] bg-[#b31b2c] mt-3"></div>
            </div>
          </div>

          {/* Right Column - Premium Typography & Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
                <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('about_tag')}</span>
              </div>
              
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic mb-8">
                {t('about_title_1')} <br />
                <span className="text-[#b31b2c]">
                  {t('about_title_2')}
                </span>
              </h2>
              
              <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-xl font-medium">
                <strong className="text-white font-bold border-b-2 border-[#b31b2c]/30 pb-1">CV Medina Cipta Utama</strong> {t('about_desc').replace('CV Medina Cipta Utama', '')}
              </p>
            </div>

            {/* Feature Cards - High End Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-[#b31b2c]/40 transition-all duration-500 group/card">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#b31b2c] to-[#4a0a11] flex items-center justify-center mb-6 shadow-lg shadow-[#b31b2c]/20 group-hover/card:scale-110 transition-transform">
                  <Monitor className="text-white w-7 h-7" />
                </div>
                <h3 className="text-white font-black text-xl mb-3 tracking-tight">{t('about_feat_web_title')}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-medium">
                  {t('about_feat_web_desc')}
                </p>
              </div>

              <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-[#b31b2c]/40 transition-all duration-500 group/card">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover/card:scale-110 transition-transform">
                  <BookOpen className="text-[#b31b2c] w-7 h-7" />
                </div>
                <h3 className="text-white font-black text-xl mb-3 tracking-tight">{t('about_feat_atk_title')}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-medium">
                  {t('about_feat_atk_desc')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
