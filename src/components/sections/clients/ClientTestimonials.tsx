"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

export function ClientTestimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Bpk. Ahmad Subarjo',
      role: 'CEO, Global Logistik',
      content: 'Layanan website dan penyediaan ATK dari MCU sangat memuaskan. Respon cepat dan kualitas produk premium.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=11'
    },
    {
      name: 'Ibu Maya Indriani',
      role: 'Founder, Batik Cantik',
      content: 'Digitalisasi UMKM saya dibantu sepenuhnya oleh tim MCU. Sekarang jangkauan pasar kami jauh lebih luas.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=22'
    },
    {
      name: 'Bpk. Heru Setiawan',
      role: 'Kepala Sekolah, SMK Pelita',
      content: 'Sistem akademik yang dibangun MCU sangat user-friendly. Guru dan siswa sangat terbantu.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=33'
    }
  ];

  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('client_test_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">
            {t('client_testi_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 relative group hover:border-[#b31b2c]/30 transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-[#b31b2c]/10 group-hover:text-[#b31b2c]/20 transition-colors" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b31b2c] text-[#b31b2c]" />
                ))}
              </div>

              <p className="text-white/70 text-base italic leading-relaxed mb-10 relative z-10">
                "{testi.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#b31b2c]/30">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight italic">{testi.name}</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-black">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
