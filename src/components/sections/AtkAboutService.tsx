"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { PackageCheck, Truck, BadgePercent, ShieldCheck } from 'lucide-react';

export function AtkAboutService() {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src="/images/bgperkantoraan.jpg" alt="Office Supplies Stock" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#b31b2c]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
              <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">About Supply</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-8">
              {t('atk_about_title')}
            </h2>
            <p className="text-white/70 text-base leading-relaxed font-medium mb-10">
              Kami memahami bahwa kelancaran operasional kantor sangat bergantung pada ketersediaan perlengkapan yang berkualitas. CV Medina Cipta Utama hadir sebagai mitra strategis yang menyediakan berbagai kebutuhan ATK dengan standar kualitas terbaik untuk perusahaan, instansi, dan UMKM.
            </p>

            {/* Grid of Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: PackageCheck, text: "Produk Berkualitas" },
                { icon: BadgePercent, text: "Harga Kompetitif" },
                { icon: Truck, text: "Pengiriman Cepat" },
                { icon: ShieldCheck, text: "Supplier Terpercaya" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#b31b2c] transition-colors">
                    <item.icon size={20} className="text-[#b31b2c] group-hover:text-white" />
                  </div>
                  <span className="font-bold text-sm tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
