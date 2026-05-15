"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, Smartphone, Tablet, CheckCircle2, ArrowRight } from 'lucide-react';

export function FeaturedProject() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-[#0d0d0d] relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] bg-[#b31b2c]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
              <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('portfolio_featured_tag')}</span>
            </div>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic leading-tight">
              {t('portfolio_featured_title').split('Case Study')[0]} <span className="text-white/40">{t('portfolio_featured_subtitle').split('Case Study')[1] || 'Case Study.'}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Device Mockups */}
            <div className="relative group">
              {/* Main Desktop Mockup */}
              <div className="relative z-20 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-video group-hover:-translate-y-2 transition-transform duration-700">
                <img 
                  src="/images/atk-port-featured.png" 
                  alt="Desktop Mockup" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Tablet Mockup */}
              <div className="absolute -bottom-6 -right-6 z-30 w-[30%] aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 hidden md:block group-hover:-translate-y-4 transition-transform duration-700 delay-100">
                <img 
                  src="/images/atk-port-1.png" 
                  alt="Tablet Mockup" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Glass Card */}
              <div className="absolute -top-6 -left-6 z-10 w-32 h-32 bg-[#b31b2c]/5 backdrop-blur-3xl border border-white/10 rounded-2xl hidden lg:block animate-pulse"></div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-[#b31b2c]/10 border border-[#b31b2c]/20 rounded-full text-[10px] font-bold text-[#b31b2c] tracking-widest uppercase">{t('portfolio_cat_company')}</div>
                  <div className="text-white/30 text-xs font-bold">{t('portfolio_featured_client')}</div>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{t('portfolio_featured_proj_name')}</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  {t('portfolio_featured_proj_desc')}
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-white font-bold text-xl mb-1">450ms</span>
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">Load Time</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-white font-bold text-xl mb-1">100%</span>
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">Responsive</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-white font-bold text-xl mb-1">A+</span>
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">SEO Score</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b31b2c]" /> {t('portfolio_featured_features')}
                </h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    t('portfolio_featured_feat1'),
                    t('portfolio_featured_feat2'),
                    t('portfolio_featured_feat3'),
                    t('portfolio_featured_feat4')
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <span className="text-white/50 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button className="flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest hover:text-[#b31b2c] transition-colors group">
                  {t('portfolio_featured_btn')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
