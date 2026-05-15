"use client";

import React from 'react';
import { Play, User } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

interface VideoCardProps {
  name: string;
  desc: string;
  image: string;
  watchLabel: string;
}

function VideoCard({ name, desc, image, watchLabel }: VideoCardProps) {
  return (
    <div className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-black/40 transition-colors"></div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white group-hover:bg-[#b31b2c] group-hover:border-[#b31b2c] group-hover:scale-110 transition-all duration-500 shadow-2xl">
          <Play className="w-8 h-8 fill-current ml-1" />
        </button>
      </div>

      {/* Info */}
      <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-2">
          <User className="w-4 h-4 text-[#b31b2c]" />
          <span className="text-white font-black text-lg italic tracking-tight">{name}</span>
        </div>
        <p className="text-white/60 text-sm font-medium">
          {desc}
        </p>
      </div>

      {/* Glass Overlay on Hover */}
      <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
        {watchLabel}
      </div>
    </div>
  );
}

export function TestimoniVideo() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('testi_video_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic text-center">
            {t('testi_video_title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <VideoCard
            name="Ahmad Faisal"
            desc="Transformasi Digital Bisnis di Era Modern"
            image="/images/bgperkantoraan.jpg"
            watchLabel={t('testi_video_watch')}
          />
          <VideoCard
            name="Siti Nurhaliza"
            desc="Solusi ATK Cepat & Terpercaya untuk Korporasi"
            image="/images/perkantoran-website.jpg"
            watchLabel={t('testi_video_watch')}
          />
        </div>
      </div>
    </section>
  );
}
