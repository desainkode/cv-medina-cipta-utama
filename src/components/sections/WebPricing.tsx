"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Zap, Rocket, Crown } from 'lucide-react';
import Link from 'next/link';

export function WebPricing() {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t('web_plan_basic'),
      price: "1.500.000",
      icon: Zap,
      features: [
        t('web_feat_pages_3'), 
        t('web_feat_responsive'), 
        t('web_feat_contact'), 
        t('web_feat_domain'), 
        t('web_feat_revision_2')
      ],
      popular: false
    },
    {
      name: t('web_plan_pro'),
      price: "3.500.000",
      icon: Rocket,
      features: [
        t('web_feat_pages_5_10'), 
        t('web_feat_design'), 
        t('web_feat_seo'), 
        t('web_feat_cms'), 
        t('web_feat_wa'), 
        t('web_feat_maps'), 
        t('web_feat_revision_5')
      ],
      popular: true
    },
    {
      name: t('web_plan_ent'),
      price: t('web_custom_price'),
      icon: Crown,
      features: [
        t('web_feat_custom'), 
        t('web_feat_request'), 
        t('web_feat_maint'), 
        t('web_feat_uiux'), 
        t('web_feat_system'), 
        t('web_feat_priority')
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('web_pricing_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">{t('web_pricing_title')}</h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-[3rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'bg-gradient-to-b from-[#b31b2c]/20 to-black border-2 border-[#b31b2c] scale-105 z-20 shadow-[0_20px_50px_rgba(179,27,44,0.2)]' : 'bg-white/[0.03] border border-white/10 z-10'}`}>
              
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b31b2c] text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full">
                  {t('web_popular_label')}
                </div>
              )}

              <div className="flex flex-col items-center text-center mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.popular ? 'bg-[#b31b2c]' : 'bg-white/5 border border-white/10'}`}>
                  <plan.icon size={28} className="text-white" />
                </div>
                <h3 className="text-white font-black italic text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-white/40 text-sm font-bold uppercase tracking-widest">Rp</span>
                  <span className="text-white text-4xl font-black">{plan.price}</span>
                  {plan.price !== t('web_custom_price') && <span className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1">NET</span>}
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-[#b31b2c] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <Link href="#" className={`w-full py-4 rounded-2xl font-black text-center transition-all ${plan.popular ? 'bg-[#b31b2c] text-white shadow-lg shadow-red-900/40 hover:bg-red-700' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {t('web_select_plan')}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
