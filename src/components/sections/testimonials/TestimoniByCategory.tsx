"use client";

import React, { useState } from 'react';
import { Star, Layout, ShoppingCart, FileText, Package, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Review {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export function TestimoniByCategory() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('website');

  const reviews: Record<string, Review[]> = {
    website: [
      { name: t('testi_cat_website_1_name'), role: t('testi_cat_website_1_role'), content: t('testi_cat_website_1_content'), rating: 5 },
      { name: t('testi_cat_website_2_name'), role: t('testi_cat_website_2_role'), content: t('testi_cat_website_2_content'), rating: 5 }
    ],
    atk: [
      { name: t('testi_cat_atk_1_name'), role: t('testi_cat_atk_1_role'), content: t('testi_cat_atk_1_content'), rating: 5 },
      { name: t('testi_cat_atk_2_name'), role: t('testi_cat_atk_2_role'), content: t('testi_cat_atk_2_content'), rating: 5 }
    ],
    compro: [
      { name: t('testi_cat_compro_1_name'), role: t('testi_cat_compro_1_role'), content: t('testi_cat_compro_1_content'), rating: 5 }
    ],
    landing: [
      { name: t('testi_cat_landing_1_name'), role: t('testi_cat_landing_1_role'), content: t('testi_cat_landing_1_content'), rating: 5 }
    ],
    supplier: [
      { name: t('testi_cat_supplier_1_name'), role: t('testi_cat_supplier_1_role'), content: t('testi_cat_supplier_1_content'), rating: 5 }
    ]
  };

  const categories = [
    { id: 'website', label: t('website'), icon: <Globe className="w-4 h-4" /> },
    { id: 'atk', label: t('atk'), icon: <Package className="w-4 h-4" /> },
    { id: 'compro', label: t('compro'), icon: <FileText className="w-4 h-4" /> },
    { id: 'landing', label: t('landing'), icon: <Layout className="w-4 h-4" /> },
    { id: 'supplier', label: t('supplier'), icon: <ShoppingCart className="w-4 h-4" /> },
  ];

  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-[80px]">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('testi_cat_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight italic text-center">
            {t('testi_cat_title')}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeTab === cat.id 
                  ? 'bg-[#b31b2c] border-[#b31b2c] text-white shadow-2xl shadow-red-900/40 -translate-y-1' 
                  : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {reviews[activeTab]?.map((review, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] group hover:border-[#b31b2c]/30 transition-all duration-500 hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-white font-black text-lg italic tracking-tight">{review.name}</h4>
                  <p className="text-[#b31b2c] text-[10px] font-black uppercase tracking-[0.2em]">{review.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <p className="text-white/60 italic text-sm leading-relaxed group-hover:text-white/80 transition-colors">"{review.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
