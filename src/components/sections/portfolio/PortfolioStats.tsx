"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout, Users, Calendar, Award } from 'lucide-react';

export function PortfolioStats() {
  const { t } = useLanguage();

  const stats = [
    { label: t('portfolio_stats_projects'), value: '100+', icon: <Layout className="w-5 h-5" /> },
    { label: t('portfolio_stats_clients'), value: '50+', icon: <Users className="w-5 h-5" /> },
    { label: t('portfolio_stats_experience'), value: t('portfolio_stats_experience_val'), icon: <Calendar className="w-5 h-5" /> },
    { label: t('portfolio_stats_satisfaction'), value: '95%', icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <section className="py-16 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center group hover:border-[#b31b2c]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#b31b2c]/10 flex items-center justify-center text-[#b31b2c] mb-6 group-hover:bg-[#b31b2c] group-hover:text-white transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight italic">
                {stat.value}
              </h3>
              <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.3em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
