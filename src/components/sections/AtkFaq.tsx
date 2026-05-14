"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export function AtkFaq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "Apakah bisa pembelian grosir?", 
      a: "Tentu! Kami melayani pembelian retail maupun grosir dengan harga khusus untuk pesanan dalam jumlah besar bagi perusahaan dan instansi." 
    },
    { 
      q: "Apakah melayani pengiriman?", 
      a: "Ya, kami melayani pengiriman ke seluruh wilayah Bandung Raya secara gratis untuk pesanan dengan nominal tertentu, dan menggunakan ekspedisi untuk luar kota." 
    },
    { 
      q: "Bagaimana cara pemesanan?", 
      a: "Pemesanan dapat dilakukan dengan menghubungi admin kami melalui WhatsApp dengan menyertakan daftar produk dan jumlah yang dibutuhkan." 
    },
    { 
      q: "Apakah stok selalu tersedia?", 
      a: "Kami selalu menjaga ketersediaan stok untuk produk-produk populer. Namun, untuk kepastian stok dalam jumlah besar, silakan konfirmasi terlebih dahulu." 
    },
    { 
      q: "Apakah bisa request produk tertentu?", 
      a: "Jika produk yang Anda cari tidak ada di katalog, Anda dapat menghubungi kami untuk pengadaan khusus (*special order*)." 
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-[#b31b2c] w-6 h-6" />
            <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">FAQ</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">{t('atk_faq_title')}</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02] hover:border-[#b31b2c]/30 transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
              >
                <span className="text-white font-bold text-base md:text-lg">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-[#b31b2c] border-[#b31b2c] rotate-180' : 'bg-white/5'}`}>
                  {openIndex === i ? <Minus size={16} className="text-white" /> : <Plus size={16} className="text-white" />}
                </div>
              </button>
              
              <div className={`transition-all duration-500 overflow-hidden ${openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 pt-0 text-white/50 text-sm leading-relaxed font-medium border-t border-white/5 mt-[-1px]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
