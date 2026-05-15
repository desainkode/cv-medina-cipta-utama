"use client";

import React, { useEffect, useState } from 'react';
import { Users, CheckCircle, BarChart3, Calendar } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay: string;
}

function StatCard({ value, label, icon, delay }: StatCardProps) {
  return (
    <div 
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center group hover:border-[#b31b2c]/30 transition-all duration-500 hover:-translate-y-2 animate-fade-up"
      style={{ animationDelay: delay }}
    >
      <div className="w-14 h-14 rounded-2xl bg-[#b31b2c]/10 flex items-center justify-center text-[#b31b2c] mb-6 group-hover:bg-[#b31b2c] group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight italic">
        {value}
      </h3>
      <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.3em]">
        {label}
      </p>
    </div>
  );
}

export function TestimoniStats() {
  const { t } = useLanguage();
  const stats = [
    { value: "95%", label: t('testi_stats_satisfaction'), icon: <CheckCircle className="w-6 h-6" />, delay: "100ms" },
    { value: "100+", label: t('testi_stats_projects'), icon: <BarChart3 className="w-6 h-6" />, delay: "200ms" },
    { value: "50+", label: t('testi_stats_active'), icon: <Users className="w-6 h-6" />, delay: "300ms" },
    { value: t('testi_stats_years'), label: t('testi_stats_experience'), icon: <Calendar className="w-6 h-6" />, delay: "400ms" },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
