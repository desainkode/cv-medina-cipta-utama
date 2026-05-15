"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, MousePointerClick, ShoppingBag, GraduationCap, LayoutPanelLeft, Code2 } from 'lucide-react';

export function WebServiceTypes() {
  const { t } = useLanguage();
  
  const types = [
    { title: t('web_type1_title'), icon: Building2, desc: t('web_type1_desc') },
    { title: t('web_type2_title'), icon: MousePointerClick, desc: t('web_type2_desc') },
    { title: t('web_type3_title'), icon: ShoppingBag, desc: t('web_type3_desc') },
    { title: t('web_type4_title'), icon: GraduationCap, desc: t('web_type4_desc') },
    { title: t('web_type5_title'), icon: LayoutPanelLeft, desc: t('web_type5_desc') },
    { title: t('web_type6_title'), icon: Code2, desc: t('web_type6_desc') }
  ];

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('web_types_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">{t('web_types_title')}</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {types.map((type, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-[#b31b2c]/5 hover:border-[#b31b2c]/30 transition-all duration-500 shadow-xl backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#b31b2c] transition-all duration-300 group-hover:scale-110 shadow-lg">
                <type.icon className="text-[#b31b2c] group-hover:text-white w-7 h-7" />
              </div>
              <h3 className="text-white font-black italic text-xl mb-3 tracking-tight group-hover:text-[#b31b2c] transition-colors">{type.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-medium">
                {type.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
