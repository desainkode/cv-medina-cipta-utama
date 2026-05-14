"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Target, CheckCircle2, Eye } from 'lucide-react';

export function VisionMission() {
  const { t } = useLanguage();
  return (
    <section id="visi-misi" className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden scroll-mt-32">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-[#b31b2c]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <div className="relative group p-10 md:p-16 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl hover:bg-white/[0.05] hover:border-[#b31b2c]/30 transition-all duration-500 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#b31b2c]/10 rounded-full blur-[60px] group-hover:bg-[#b31b2c]/20 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#b31b2c] to-[#7a121d] flex items-center justify-center mb-8 shadow-xl">
                <Eye className="text-white w-8 h-8" />
              </div>
              <h3 className="text-white font-black text-2xl md:text-3xl mb-6 tracking-tight italic uppercase">{t('profile_vision_title')}</h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                {t('profile_vision_desc')}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group p-10 md:p-16 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl hover:bg-white/[0.05] hover:border-[#b31b2c]/30 transition-all duration-500 overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#b31b2c]/10 rounded-full blur-[60px] group-hover:bg-[#b31b2c]/20 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#b31b2c] to-[#7a121d] flex items-center justify-center mb-8 shadow-xl">
                <Target className="text-white w-8 h-8" />
              </div>
              <h3 className="text-white font-black text-2xl md:text-3xl mb-8 tracking-tight italic uppercase">{t('profile_mission_title')}</h3>
              
              <div className="space-y-6">
                {[
                  t('profile_mission_item1'),
                  t('profile_mission_item2'),
                  t('profile_mission_item3'),
                  t('profile_mission_item4')
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-[#b31b2c] w-6 h-6 mt-1 shrink-0" />
                    <span className="text-white/80 text-base md:text-lg font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
