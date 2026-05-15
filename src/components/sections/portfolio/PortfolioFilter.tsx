"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search } from 'lucide-react';

export function PortfolioFilter({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }: any) {
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t('portfolio_filter_all') },
    { id: 'company', label: t('portfolio_filter_company') },
    { id: 'landing', label: t('portfolio_filter_landing') },
    { id: 'shop', label: t('portfolio_filter_shop') },
    { id: 'school', label: t('portfolio_filter_school') },
    { id: 'system', label: t('portfolio_filter_system') },
    { id: 'custom', label: t('portfolio_filter_custom') },
  ];

  return (
    <div className="flex flex-col gap-8 mb-12">
      {/* Search and Filters container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Category List */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-[#b31b2c] border-[#b31b2c] text-white shadow-lg shadow-red-900/20'
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder={t('portfolio_search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-white text-sm focus:outline-none focus:border-[#b31b2c]/50 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
