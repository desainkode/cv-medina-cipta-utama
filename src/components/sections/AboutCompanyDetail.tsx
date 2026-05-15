"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Award, ShieldCheck, Users } from 'lucide-react';

export function AboutCompanyDetail() {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Column - Visuals */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-[200px] md:h-[300px] border border-white/10 shadow-2xl">
                <img src="/images/perkantoran-website.jpg" alt="Office Workspace" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="rounded-3xl overflow-hidden h-[200px] md:h-[300px] border border-white/10 shadow-2xl mt-12">
                <img src="/images/bgperkantoraan.jpg" alt="Meeting Room" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            
            {/* Stats Grid inside About */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl group hover:bg-[#b31b2c]/10 transition-colors">
                <div className="text-white font-black text-3xl mb-1">2019</div>
                <div className="text-[#b31b2c] text-xs font-bold uppercase tracking-widest">{t('about_timeline_item1_title')}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl group hover:bg-[#b31b2c]/10 transition-colors">
                <div className="text-white font-black text-3xl mb-1">50+</div>
                <div className="text-[#b31b2c] text-xs font-bold uppercase tracking-widest">{t('stats_client')}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
                <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">{t('profile_hero_title')}</span>
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-8">
                {t('profile_about_title')}
              </h2>
              <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed font-medium">
                  {t('profile_about_desc')}
                </p>
              </div>
            </div>

            {/* List of focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Target, text: t('services_web_title') },
                { icon: Award, text: t('services_atk_title') },
                { icon: ShieldCheck, text: t('about_focus_3') },
                { icon: Users, text: t('about_focus_4') }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#b31b2c] transition-colors">
                    <item.icon size={20} className="text-[#b31b2c] group-hover:text-white" />
                  </div>
                  <span className="font-bold text-sm tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
