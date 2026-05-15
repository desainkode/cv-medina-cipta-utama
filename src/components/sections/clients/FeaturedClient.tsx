"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';

export function FeaturedClient() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
              <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('client_featured_tag')}</span>
            </div>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic leading-tight">
              {t('client_featured_name').split(' ')[0]} {t('client_featured_name').split(' ').slice(1).join(' ')} <span className="text-white/40">Indonesia.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Visuals */}
            <div className="relative group">
              <div className="relative z-20 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-video group-hover:-translate-y-2 transition-transform duration-700">
                <img 
                  src="/images/perkantoran-website.jpg" 
                  alt="Client Project Mockup" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 z-30 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#b31b2c] flex items-center justify-center">
                    <TrendingUp className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-black text-xl">40%</div>
                    <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{t('client_featured_growth')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#b31b2c]/10 border border-[#b31b2c]/20 rounded-full text-[10px] font-bold text-[#b31b2c] tracking-widest uppercase italic">Logistics & Supply Chain</span>
                </div>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {t('client_featured_desc')}
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b31b2c]" /> {t('client_featured_results')}
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-white font-bold text-base tracking-tight">{t('client_featured_res1_title')}</span>
                    <p className="text-white/40 text-xs leading-relaxed">{t('client_featured_res1_desc')}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-white font-bold text-base tracking-tight">{t('client_featured_res2_title')}</span>
                    <p className="text-white/40 text-xs leading-relaxed">{t('client_featured_res2_desc')}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-6">
                   <div className="flex -space-x-4">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="team" />
                       </div>
                     ))}
                   </div>
                   <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest">
                     {t('client_featured_leadership')}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
