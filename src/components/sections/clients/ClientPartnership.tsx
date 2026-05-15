"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Zap, HeartHandshake, Headphones } from 'lucide-react';

export function ClientPartnership() {
  const { t } = useLanguage();

  const features = [
    { title: t('client_part_feat1'), icon: <ShieldCheck className="text-[#b31b2c]" /> },
    { title: t('client_part_feat2'), icon: <Zap className="text-[#b31b2c]" /> },
    { title: t('client_part_feat3'), icon: <HeartHandshake className="text-[#b31b2c]" /> },
    { title: t('client_part_feat4'), icon: <Headphones className="text-[#b31b2c]" /> },
  ];

  return (
    <section className="py-16 bg-[#111111] overflow-hidden">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
                <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('client_part_tag')}</span>
              </div>
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic mb-8">
                {t('client_partnership_title')}
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-xl font-medium">
                {t('client_partnership_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#b31b2c]/10 flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <span className="text-white font-bold text-sm tracking-tight">{f.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
                <img src="/images/bgperkantoraan.jpg" alt="Partnership Meeting" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#b31b2c]/40 via-transparent to-transparent"></div>
             </div>
             <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#b31b2c]/20 rounded-[3rem] -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
