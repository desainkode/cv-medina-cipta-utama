"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Store, GraduationCap, Landmark, ShoppingBag, Rocket } from 'lucide-react';

export function ClientCategories() {
  const { t } = useLanguage();

  const categories = [
    { title: t('client_cat_1_title'), desc: t('client_cat_1_desc'), icon: <Building2 />, count: '15+' },
    { title: t('client_cat_2_title'), desc: t('client_cat_2_desc'), icon: <Store />, count: '25+' },
    { title: t('client_cat_3_title'), desc: t('client_cat_3_desc'), icon: <GraduationCap />, count: '10+' },
    { title: t('client_cat_4_title'), desc: t('client_cat_4_desc'), icon: <Landmark />, count: '5+' },
    { title: t('client_cat_5_title'), desc: t('client_cat_5_desc'), icon: <ShoppingBag />, count: '20+' },
    { title: t('client_cat_6_title'), desc: t('client_cat_6_desc'), icon: <Rocket />, count: '12+' },
  ];

  return (
    <section className="py-16 bg-[#0d0d0d]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('client_cat_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">
            {t('client_cat_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#b31b2c]/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#b31b2c]/5 blur-3xl rounded-full group-hover:bg-[#b31b2c]/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b31b2c] group-hover:bg-[#b31b2c] group-hover:text-white transition-all duration-500">
                  {cat.icon}
                </div>
                <span className="text-white/20 font-black text-4xl italic group-hover:text-[#b31b2c]/20 transition-colors">{cat.count}</span>
              </div>

              <h3 className="text-white font-black text-xl mb-3 tracking-tight italic relative z-10">{cat.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium relative z-10">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
