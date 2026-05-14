"use client";

import { BadgeDollarSign, Zap, Paintbrush, Gem, Headset, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhyUsSection() {
  const { t } = useLanguage();
  const features = [
    {
      icon: BadgeDollarSign,
      title: t('whyus_feat1_title'),
      description: t('whyus_feat1_desc')
    },
    {
      icon: Zap,
      title: t('whyus_feat2_title'),
      description: t('whyus_feat2_desc')
    },
    {
      icon: Paintbrush,
      title: t('whyus_feat3_title'),
      description: t('whyus_feat3_desc')
    },
    {
      icon: Gem,
      title: t('whyus_feat4_title'),
      description: t('whyus_feat4_desc')
    },
    {
      icon: Headset,
      title: t('whyus_feat5_title'),
      description: t('whyus_feat5_desc')
    },
    {
      icon: ShieldCheck,
      title: t('whyus_feat6_title'),
      description: t('whyus_feat6_desc')
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-bold text-sm tracking-widest uppercase">{t('whyus_tag')}</span>
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            {t('whyus_title')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#b31b2c]/50 hover:bg-[#b31b2c]/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#b31b2c] transition-all duration-300">
                <feature.icon className="text-[#b31b2c] group-hover:text-white w-7 h-7 transition-colors" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
