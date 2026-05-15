"use client";

import { ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProductsSection() {
  const { t, language } = useLanguage();
  const products = [
    {
      name: language === 'id' ? 'Kertas HVS A4 80gsm' : 'HVS A4 Paper 80gsm',
      category: t('prod_cat_paper'),
      price: 'Rp 55.000',
      image: '/images/bgperkantoraan.jpg'
    },
    {
      name: language === 'id' ? 'Printer InkJet Pro 100' : 'InkJet Pro 100 Printer',
      category: t('prod_cat_printer'),
      price: 'Rp 2.500.000',
      image: '/images/perkantoran-website.jpg'
    },
    {
      name: language === 'id' ? 'Buku Catatan Eksekutif' : 'Executive Notebook',
      category: t('prod_cat_paper'),
      price: 'Rp 45.000',
      image: '/images/bgperkantoraan.jpg'
    },
    {
      name: language === 'id' ? 'Pena Gel Premium Set' : 'Premium Gel Pen Set',
      category: t('prod_cat_stationary'),
      price: 'Rp 35.000',
      image: '/images/perkantoran-website.jpg'
    }
  ];

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('products_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic max-w-2xl">
            {t('products_title_1')} <br />
            <span className="text-[#b31b2c]">{t('products_title_2')}</span>
          </h2>
        </div>
 
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#b31b2c]/30 hover:-translate-y-2 transition-all duration-300">
              {/* Product Image */}
              <div className="relative h-48 w-full overflow-hidden bg-white/5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay CTA */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <button className="bg-[#b31b2c] text-white p-3 rounded-full hover:bg-red-700 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
 
              {/* Product Info */}
              <div className="p-5">
                <div className="text-[#b31b2c]/80 text-xs font-bold uppercase tracking-wider mb-2">
                  {product.category}
                </div>
                <h3 className="text-white font-bold text-lg mb-1 truncate">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-white font-bold">{product.price}</div>
                  <button className="text-xs font-bold px-3 py-1.5 bg-green-600/20 text-green-500 rounded-lg border border-green-600/20 hover:bg-green-600 hover:text-white transition-colors">
                    {t('products_btn_order')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link href="#" className="flex items-center gap-2 text-white hover:text-[#b31b2c] transition-colors group border border-white/20 px-6 py-3 rounded-full">
            <span className="font-bold text-sm uppercase tracking-wider">{t('products_view_all')}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
