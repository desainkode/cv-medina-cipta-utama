"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Briefcase, Zap, Heart, Star, Users } from 'lucide-react';

export function CoreValues() {
  const { t } = useLanguage();
  const values = [
    { title: t('profile_val1_title'), desc: t('profile_val1_desc'), icon: Briefcase },
    { title: t('profile_val2_title'), desc: t('profile_val2_desc'), icon: Shield },
    { title: t('profile_val3_title'), desc: t('profile_val3_desc'), icon: Zap },
    { title: t('profile_val4_title'), desc: t('profile_val4_desc'), icon: Heart },
    { title: t('profile_val5_title'), desc: t('profile_val5_desc'), icon: Star },
    { title: t('profile_val6_title'), desc: t('profile_val6_desc'), icon: Users },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">{t('profile_val_tag')}</span>
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">{t('profile_values_title')}</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((val, i) => (
            <div key={i} className="group p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-[#b31b2c]/5 hover:border-[#b31b2c]/30 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#b31b2c] transition-all duration-300">
                <val.icon className="text-[#b31b2c] group-hover:text-white w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-white font-black text-xl mb-4 tracking-tight uppercase">{val.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-medium">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
