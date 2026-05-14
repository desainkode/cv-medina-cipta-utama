"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Search, PhoneCall, ClipboardCheck, Truck } from 'lucide-react';

export function AtkWorkflow() {
  const { t } = useLanguage();
  
  const steps = [
    { title: "Pilih Produk", icon: Search, desc: "Pilih produk ATK yang Anda butuhkan dari katalog kami." },
    { title: "Hubungi Admin", icon: PhoneCall, desc: "Hubungi tim sales kami via WhatsApp untuk konsultasi stok." },
    { title: "Konfirmasi", icon: ClipboardCheck, desc: "Konfirmasi pesanan dan detail pengiriman barang." },
    { title: "Pengiriman", icon: Truck, desc: "Barang dikirim ke lokasi Anda dengan cepat dan aman." }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">How to Order</span>
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">{t('atk_order_title')}</h2>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#b31b2c] group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <step.icon size={32} className="text-[#b31b2c]" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#b31b2c] text-white flex items-center justify-center font-black text-sm border-4 border-[#0d0d0d] shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{step.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed font-medium px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
