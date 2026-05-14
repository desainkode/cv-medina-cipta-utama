"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingCart, Star, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';

export function ProductPromoBanner() {
  const { t } = useLanguage();
  return (
    <section className="py-12 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center border border-white/10 shadow-[0_20px_50px_rgba(179,27,44,0.15)] group">
          {/* Background Visuals */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#b31b2c] via-[#8a1320] to-[#4a0a11] opacity-90 z-0"></div>
          <div className="absolute inset-0 bg-[url('/images/bgperkantoraan.jpg')] bg-cover bg-center mix-blend-overlay opacity-20 group-hover:scale-105 transition-transform duration-700 z-0"></div>
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <div className="w-12 h-[1px] bg-white/40"></div>
              <span className="text-white font-black text-[10px] tracking-[0.4em] uppercase italic">Special Offer</span>
              <div className="w-12 h-[1px] bg-white/40"></div>
            </div>
            
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter mb-6 max-w-3xl animate-fade-up [animation-delay:100ms]">
              Paket Hemat ATK Perusahaan
            </h2>
            
            <p className="text-white/80 text-sm md:text-base lg:text-lg font-medium mb-10 max-w-2xl animate-fade-up [animation-delay:200ms]">
              Dapatkan harga grosir dan pengiriman gratis untuk pemenuhan kebutuhan ATK kantor Anda setiap bulan. Solusi praktis untuk operasional bisnis yang lebih efisien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-up [animation-delay:300ms]">
              <Link 
                href="#" 
                className="flex items-center justify-center gap-2 bg-white text-[#b31b2c] px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
              >
                Cek Penawaran
              </Link>
              <Link 
                href="#" 
                className="flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all hover:-translate-y-1"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProductsSlider() {
  const { t } = useLanguage();
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const featured = [
    { name: "Pena Gel Premium Black", price: 12000, img: "/images/bgperkantoraan.jpg", rating: 5 },
    { name: "Printer Ink Tank L3210", price: 2450000, img: "/images/perkantoran-website.jpg", rating: 4.8 },
    { name: "Kertas HVS A4 80gsm", price: 55000, img: "/images/bgperkantoraan.jpg", rating: 4.9 },
    { name: "Ordner Folio PVC Blue", price: 28500, img: "/images/perkantoran-website.jpg", rating: 4.7 },
    { name: "Sticky Notes Combo Pack", price: 22500, img: "/images/bgperkantoraan.jpg", rating: 4.6 },
    { name: "Tinta Printer Black 003", price: 95000, img: "/images/perkantoran-website.jpg", rating: 5 }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const dotIndex = Math.round((scrollLeft / maxScroll) * (featured.length - 1));
    setActiveDot(dotIndex);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const targetScroll = (index / (featured.length - 1)) * maxScroll;
    
    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    setActiveDot(index);
  };

  return (
    <section className="py-12 bg-[#0a0a0a] overflow-hidden relative border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b31b2c]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-[80px] mb-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">Produk Unggulan</span>
            <div className="w-12 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic animate-fade-up">
            Produk <span className="text-[#b31b2c]">Unggulan</span>
          </h2>
        </div>
      </div>

      {/* Horizontal Slider Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-[80px] relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-8 pb-12"
          style={{ scrollBehavior: 'smooth' }}
        >
          {featured.map((product, i) => (
            <div 
              key={i} 
              className="min-w-[85%] sm:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] snap-start bg-[#0d0d0d] border border-white/5 rounded-[3rem] overflow-hidden hover:border-[#b31b2c]/40 transition-all duration-500 group shadow-xl"
            >
              {/* Photo Section */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60"></div>
                
                {/* Badge Best Seller */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-[#b31b2c] text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-2xl flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                    Best Seller
                  </div>
                </div>

                {/* Add to Cart Floating Button */}
                <button className="absolute bottom-6 right-6 w-14 h-14 rounded-2xl bg-white text-[#b31b2c] flex items-center justify-center shadow-2xl transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#b31b2c] hover:text-white">
                  <ShoppingCart size={22} />
                </button>
              </div>

              {/* Info Section */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} className={idx < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-white/10"} />
                  ))}
                  <span className="text-white/30 text-[10px] font-bold ml-2 uppercase tracking-widest">{product.rating} Rating</span>
                </div>

                <h3 className="text-white font-bold text-xl group-hover:text-[#b31b2c] transition-colors leading-tight italic line-clamp-1">
                  {product.name}
                </h3>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/30 text-xs font-bold">Rp</span>
                    <span className="text-white text-2xl font-black tracking-tight">{product.price.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="text-[#b31b2c] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Detail Produk
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Dots */}
        <div className="flex justify-center items-center gap-4 mt-6">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all duration-500 rounded-full h-1.5 ${activeDot === i ? 'w-12 bg-[#b31b2c]' : 'w-3 bg-white/10 hover:bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        /* Extra safety for other potential browsers */
        .no-scrollbar::-webkit-scrollbar-track {
          background: transparent !important;
        }
        .no-scrollbar::-webkit-scrollbar-thumb {
          background: transparent !important;
        }
      `}</style>
    </section>
  );
}
