"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

function TestimonialCard({ name, role, content, image, rating }: TestimonialCardProps) {
  return (
    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-[#b31b2c]/30 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(179,27,44,0.15)] overflow-hidden relative">
      {/* Subtle Glow on Hover */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#b31b2c]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-[#b31b2c] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src={image} 
            alt={name} 
            className="relative w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-[#b31b2c] transition-all duration-500 scale-100 group-hover:scale-110"
          />
        </div>
        <div>
          <h4 className="text-white font-black text-lg group-hover:text-[#b31b2c] transition-colors italic tracking-tight">{name}</h4>
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-5">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        ))}
      </div>

      <p className="text-white/70 text-sm leading-relaxed italic group-hover:text-white/90 transition-colors">
        "{content}"
      </p>
    </div>
  );
}

export function TestimoniGrid() {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: t('testi2_name'),
      role: t('testi2_role'),
      content: t('testi2_content'),
      image: "/images/bgperkantoraan.jpg",
      rating: 5
    },
    {
      name: t('testi3_name'),
      role: t('testi3_role'),
      content: t('testi3_content'),
      image: "/images/perkantoran-website.jpg",
      rating: 5
    },
    {
      name: t('testi1_name'),
      role: t('testi1_role'),
      content: t('testi1_content'),
      image: "/images/bgperkantoraan.jpg",
      rating: 5
    },
    {
      name: t('testi4_name'),
      role: t('testi4_role'),
      content: t('testi4_content'),
      image: "/images/perkantoran-website.jpg",
      rating: 5
    },
    {
      name: t('testi5_name'),
      role: t('testi5_role'),
      content: t('testi5_content'),
      image: "/images/bgperkantoraan.jpg",
      rating: 5
    },
    {
      name: t('testi6_name'),
      role: t('testi6_role'),
      content: t('testi6_content'),
      image: "/images/perkantoran-website.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <TestimonialCard key={index} {...testi} />
          ))}
        </div>
      </div>
    </section>
  );
}
