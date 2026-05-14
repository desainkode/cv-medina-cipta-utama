"use client";

import { Globe, BookOpen, MonitorPlay, ShoppingCart, Pencil, FileText, ArrowRight, Printer, Building2 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function ServicesSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('services_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic max-w-2xl">
            {t('services_title_1')} <br className="hidden md:block" />
            <span className="text-[#b31b2c]">{t('services_title_2')}</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1 - Website */}
          <div className="group relative bg-[#111111] rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#b31b2c]/10 blur-[100px] rounded-full group-hover:bg-[#b31b2c]/20 transition-all duration-700"></div>
            
            <div className="p-10 md:p-12 relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#b31b2c] group-hover:border-[#b31b2c]">
                <Globe className="text-white w-8 h-8" />
              </div>
              
              <h3 className="text-white text-xl font-black italic mb-4 tracking-tight">{t('services_web_title')}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                {t('services_web_desc')}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10 mt-auto">
                {[
                  { icon: Building2, text: t('services_web_item1') },
                  { icon: MonitorPlay, text: t('services_web_item2') },
                  { icon: ShoppingCart, text: t('services_web_item3') },
                  { icon: FileText, text: t('services_web_item4') }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-[#b31b2c]" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>

              <Link href="#" className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-white text-black font-bold group/btn hover:bg-gray-200 transition-colors">
                <span>{t('services_web_btn')}</span>
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover/btn:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2 - ATK */}
          <div className="group relative bg-[#111111] rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
            
            <div className="p-10 md:p-12 relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-600 group-hover:border-blue-600">
                <BookOpen className="text-white w-8 h-8" />
              </div>
              
              <h3 className="text-white text-xl font-black italic mb-4 tracking-tight">{t('services_atk_title')}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                {t('services_atk_desc')}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10 mt-auto">
                {[
                  { icon: FileText, text: t('services_atk_item1') },
                  { icon: Pencil, text: t('services_atk_item2') },
                  { icon: Printer, text: t('services_atk_item3') },
                  { icon: BookOpen, text: t('services_atk_item4') }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-blue-500" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>

              <Link href="#" className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-white text-black font-bold group/btn hover:bg-gray-200 transition-colors">
                <span>{t('services_atk_btn')}</span>
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white group-hover/btn:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


