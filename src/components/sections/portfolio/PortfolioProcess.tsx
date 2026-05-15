"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageSquare, Layout, Code, FileEdit, Rocket } from 'lucide-react';

export function PortfolioProcess() {
  const { t } = useLanguage();

  const steps = [
    { 
      title: t('portfolio_process_step1_title'), 
      icon: <MessageSquare className="w-6 h-6" />, 
      desc: t('portfolio_process_step1_desc') 
    },
    { 
      title: t('portfolio_process_step2_title'), 
      icon: <Layout className="w-6 h-6" />, 
      desc: t('portfolio_process_step2_desc') 
    },
    { 
      title: t('portfolio_process_step3_title'), 
      icon: <Code className="w-6 h-6" />, 
      desc: t('portfolio_process_step3_desc') 
    },
    { 
      title: t('portfolio_process_step4_title'), 
      icon: <FileEdit className="w-6 h-6" />, 
      desc: t('portfolio_process_step4_desc') 
    },
    { 
      title: t('portfolio_process_step5_title'), 
      icon: <Rocket className="w-6 h-6" />, 
      desc: t('portfolio_process_step5_desc') 
    },
  ];

  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('portfolio_process_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">
            {t('portfolio_process_title')}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 group flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Number/Icon Indicator */}
                <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#b31b2c] group-hover:border-[#b31b2c] group-hover:shadow-[0_0_30px_rgba(179,27,44,0.3)] transition-all duration-500 transform group-hover:-translate-y-2 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-[10px] font-black text-[#b31b2c] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#b31b2c] transition-colors">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
