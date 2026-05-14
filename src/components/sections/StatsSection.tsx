"use client";

import { Globe2, Briefcase, Users2, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function StatsSection() {
  const { t } = useLanguage();
  // A simple counter effect can be added here, for now we will render the static numbers with a premium look
  const stats = [
    { label: t('stats_web'), value: '100+', icon: Globe2 },
    { label: t('stats_atk'), value: '500+', icon: Briefcase },
    { label: t('stats_client'), value: '50+', icon: Users2 },
    { label: t('stats_exp'), value: '5+', icon: Trophy },
  ];

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#b31b2c]/5 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:bg-white/[0.05] hover:border-[#b31b2c]/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-[#b31b2c]/20 text-[#b31b2c] flex items-center justify-center mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-white text-3xl md:text-4xl font-black mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm md:text-base font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
