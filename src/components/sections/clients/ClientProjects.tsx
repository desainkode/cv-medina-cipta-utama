"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function ClientProjects() {
  const { t } = useLanguage();

  const projects = [
    { title: 'Corporate Web V2', client: 'PT. Global Logistik', image: '/images/atk-port-featured.png', year: '2024' },
    { title: 'Academic System', client: 'SMK Pelita Harapan', image: '/images/atk-port-1.png', year: '2023' },
    { title: 'MSME E-Commerce', client: 'Batik Cantik', image: '/images/atk-port-2.png', year: '2024' },
  ];

  return (
    <section className="py-16 bg-[#0d0d0d]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('client_proj_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">
            {t('client_project_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-[#1a1a1a] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#b31b2c]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href="/portfolio" className="w-12 h-12 rounded-full bg-[#b31b2c] text-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-black text-xl italic tracking-tight group-hover:text-[#b31b2c] transition-colors">{project.title}</h3>
                  <span className="text-white/20 font-black text-xs">{project.year}</span>
                </div>
                <p className="text-white/40 text-sm font-medium mb-6">{project.client}</p>
                <Link href="/portfolio" className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-[#b31b2c] transition-colors">
                  {t('client_btn_detail')} <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
