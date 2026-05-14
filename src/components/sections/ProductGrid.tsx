"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingCart, Eye, SearchX } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

interface ProductGridProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  sortBy: string;
}

export function ProductGrid({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy
}: ProductGridProps) {
  const { t } = useLanguage();

  const allProducts = [
    { id: 1, name: "Pena Gel Premium Black", price: 12000, cat: "Alat Tulis", rating: 4.8, img: "/images/bgperkantoraan.jpg", badge: "New", stock: "In Stock" },
    { id: 2, name: "Buku Tulis Hardcover A5", price: 35000, cat: "Kertas & Buku", rating: 4.9, img: "/images/perkantoran-website.jpg", badge: "Best Seller", stock: "In Stock" },
    { id: 3, name: "Kertas HVS A4 80gsm", price: 55000, cat: "Kertas & Buku", rating: 5, img: "/images/bgperkantoraan.jpg", badge: null, stock: "Limited" },
    { id: 4, name: "Printer Ink Tank L3210", price: 2450000, cat: "Printer & Tinta", rating: 4.7, img: "/images/perkantoran-website.jpg", badge: "Promo", stock: "In Stock" },
    { id: 5, name: "Stapler Heavy Duty", price: 145000, cat: "Peralatan Kantor", rating: 4.8, img: "/images/bgperkantoraan.jpg", badge: null, stock: "In Stock" },
    { id: 6, name: "Map Dokumen PVC", price: 15000, cat: "Arsip Dokumen", rating: 4.6, img: "/images/perkantoran-website.jpg", badge: null, stock: "Out of Stock" },
    { id: 7, name: "Sticky Notes Combo", price: 22500, cat: "Alat Tulis", rating: 4.5, img: "/images/bgperkantoraan.jpg", badge: null, stock: "In Stock" },
    { id: 8, name: "Tinta Printer Black", price: 95000, cat: "Printer & Tinta", rating: 5, img: "/images/perkantoran-website.jpg", badge: "Best Seller", stock: "In Stock" },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.cat.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "Semua") {
      result = result.filter(p => p.cat === selectedCategory);
    }

    result.sort((a, b) => {
      if (sortBy === "murah") return a.price - b.price;
      if (sortBy === "mahal") return b.price - a.price;
      if (sortBy === "populer") return b.rating - a.rating;
      return b.id - a.id;
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Halo admin, saya ingin menanyakan produk ini: ${productName}`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <section className="pt-8 pb-16 px-6 md:px-[80px] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-white/[0.04] hover:border-[#b31b2c]/30 transition-all duration-500 shadow-xl relative flex flex-col hover:-translate-y-1.5"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-20 bg-[#b31b2c] text-white text-[8px] font-black uppercase tracking-[0.1em] px-3 py-1 rounded-full shadow-lg">
                    {product.badge}
                  </div>
                )}

                {/* Photo Section */}
                <div className="relative aspect-square overflow-hidden bg-white/5">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="w-10 h-10 rounded-xl bg-white text-[#111111] flex items-center justify-center hover:bg-[#b31b2c] hover:text-white transition-all transform translate-y-8 group-hover:translate-y-0 duration-300">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/20 text-[9px] font-black uppercase tracking-widest">{product.cat}</span>
                    <span className={`text-[8px] font-bold uppercase tracking-widest ${product.stock === 'Out of Stock' ? 'text-red-500' : product.stock === 'Limited' ? 'text-yellow-500' : 'text-green-500'}`}>
                      • {product.stock}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-bold text-base mb-3 group-hover:text-[#b31b2c] transition-colors line-clamp-2 h-[2.8rem] leading-tight">
                    {product.name}
                  </h3>

                  <div className="mt-auto">
                    <div className="flex items-baseline gap-1 mb-5">
                      <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Rp</span>
                      <span className="text-white text-xl font-black tracking-tight">{product.price.toLocaleString('id-ID')}</span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Link href="#" className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest text-center hover:bg-white/10 transition-all">
                        Detail Produk
                      </Link>
                      <button 
                        onClick={() => handleWhatsApp(product.name)}
                        className="w-full bg-[#b31b2c] text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-[#b31b2c] transition-all shadow-lg"
                      >
                        <ShoppingCart size={14} />
                        Pesan via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center py-32 bg-white/[0.02] rounded-[4rem] border border-white/5 border-dashed">
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8">
              <SearchX className="text-white/20 w-12 h-12" />
            </div>
            <h3 className="text-white font-black text-2xl mb-3 italic tracking-tight">Produk tidak ditemukan</h3>
            <p className="text-white/40 text-base font-medium">Coba kata kunci lain atau reset filter pencarian Anda.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("Semua"); }}
              className="mt-10 text-[#b31b2c] font-black text-xs uppercase tracking-widest border border-[#b31b2c]/30 px-10 py-5 rounded-2xl hover:bg-[#b31b2c] hover:text-white transition-all shadow-xl"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
