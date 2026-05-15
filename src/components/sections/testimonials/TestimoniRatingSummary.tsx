"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function TestimoniRatingSummary() {
  const { t } = useLanguage();
  const ratings = [
    { stars: 5, count: 85, percentage: 85 },
    { stars: 4, count: 12, percentage: 12 },
    { stars: 3, count: 3, percentage: 3 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-[80px]">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#b31b2c]/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Overall Score */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
                <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('testi_rating_tag')}</span>
                <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
              </div>
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black mb-8 italic tracking-tight">{t('testi_rating_title')}</h2>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black text-white italic tracking-tighter">4.9</div>
                <div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <div className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px]">{t('testi_rating_based')}</div>
                </div>
              </div>
              <p className="text-white/60 max-w-sm text-sm md:text-base leading-relaxed">
                {t('testi_rating_desc')}
              </p>
            </div>

            {/* Right: Progress Bars */}
            <div className="space-y-6 w-full">
              {ratings.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-6">
                  <div className="flex items-center gap-2 w-16">
                    <span className="text-white font-black text-sm">{rating.stars}</span>
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#b31b2c] rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(179,27,44,0.5)]"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-white/40 text-[10px] font-black">{rating.count}%</span>
                  </div>
                </div>
              ))}
              
              <div className="pt-8 grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#b31b2c]/30 transition-colors">
                  <div className="text-[#b31b2c] font-black text-2xl italic mb-1">98%</div>
                  <div className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em]">{t('testi_rating_service_satisfaction')}</div>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#b31b2c]/30 transition-colors">
                  <div className="text-[#b31b2c] font-black text-2xl italic mb-1">100%</div>
                  <div className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em]">{t('testi_rating_fast_response')}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
