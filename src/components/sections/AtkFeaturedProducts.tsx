"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingCart, Star } from 'lucide-react';

export function AtkFeaturedProducts() {
  const { t } = useLanguage();
  
  const products = [
    { name: "Kertas HVS A4 80gsm", price: "55.000", img: "/images/bgperkantoraan.jpg", rating: 5 },
    { name: "Pena Gel Premium Black", price: "12.000", img: "/images/bgperkantoraan.jpg", rating: 4.8 },
    { name: "Ordner Folio PVC", price: "28.500", img: "/images/bgperkantoraan.jpg", rating: 4.9 },
    { name: "Tinta Printer L-Series", price: "95.000", img: "/images/bgperkantoraan.jpg", rating: 5 },
    { name: "Stapler HD-50", price: "45.000", img: "/images/bgperkantoraan.jpg", rating: 4.7 },
    { name: "Sticky Notes Neon", price: "8.500", img: "/images/bgperkantoraan.jpg", rating: 4.6 }
  ];

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">Featured</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">{t('atk_feat_title')}</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="group bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.04] hover:border-[#b31b2c]/30 transition-all duration-500 shadow-xl">
              <div className="relative aspect-square overflow-hidden bg-white/5">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-[#b31b2c] text-white p-3 rounded-2xl shadow-xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ShoppingCart size={20} />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} className={idx < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-white/20"} />
                  ))}
                  <span className="text-white/40 text-[10px] font-bold ml-2">{product.rating}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#b31b2c] transition-colors">{product.name}</h3>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Rp</span>
                    <span className="text-white text-xl font-black">{product.price}</span>
                  </div>
                  <button className="text-[#b31b2c] font-black text-[10px] uppercase tracking-widest border-b border-[#b31b2c]/0 hover:border-[#b31b2c] transition-all">
                    Order via WA
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
