"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Filter, ChevronDown, LayoutGrid, SlidersHorizontal, LayoutList } from 'lucide-react';
import { useState } from 'react';

interface ProductSearchFilterProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
}

export function ProductSearchFilter({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  sortBy,
  setSortBy
}: ProductSearchFilterProps) {
  const { t } = useLanguage();
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const categories = [
    { id: 'all', label: t('prod_cat_all') },
    { id: 'stationary', label: t('prod_cat_stationary') }, 
    { id: 'paper', label: t('prod_cat_paper') }, 
    { id: 'printer', label: t('prod_cat_printer') }, 
    { id: 'office', label: t('prod_cat_office') }, 
    { id: 'archive', label: t('prod_cat_archive') }, 
    { id: 'ops', label: t('prod_cat_ops') }
  ];

  const sortOptions = [
    { label: t('prod_sort_newest'), value: "terbaru" },
    { label: t('prod_sort_popular'), value: "populer" },
    { label: t('prod_sort_lowest'), value: "murah" },
    { label: t('prod_sort_highest'), value: "mahal" }
  ];

  const currentCategoryLabel = categories.find(c => c.id === selectedCategory)?.label || t('prod_cat_all');

  return (
    <div className="relative z-40 px-6 md:px-[80px] py-5 bg-transparent transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          
          {/* Search Box */}
          <div className="relative w-full lg:flex-1 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#b31b2c] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder={t('prod_search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111111] border border-white/10 text-white pl-14 pr-6 py-3.5 rounded-xl focus:outline-none focus:border-[#b31b2c]/50 transition-all placeholder:text-white/20 font-medium text-sm shadow-2xl"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            {/* Custom Category Dropdown */}
            <div className="relative flex-1 sm:flex-none min-w-[180px]">
              <button 
                onClick={() => { setIsCatOpen(!isCatOpen); setIsSortOpen(false); }}
                className={`w-full flex items-center justify-between gap-3 bg-[#111111] border border-white/10 text-white pl-10 pr-5 py-3.5 rounded-xl hover:bg-white/5 transition-all text-left group shadow-2xl ${isCatOpen ? 'border-[#b31b2c]/50' : ''}`}
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b31b2c]">
                  <LayoutGrid size={16} />
                </div>
                <span className="font-bold text-[10px] uppercase tracking-wider truncate">{currentCategoryLabel}</span>
                <ChevronDown size={14} className={`text-white/20 transition-transform duration-300 ${isCatOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCatOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsCatOpen(false)}></div>
                  <div className="absolute top-full mt-2 left-0 w-full min-w-[200px] bg-[#111111] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in">
                    {categories.map((cat) => (
                      <button 
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.id); setIsCatOpen(false); }}
                        className={`w-full text-left px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider transition-all hover:bg-[#b31b2c]/20 ${selectedCategory === cat.id ? 'text-[#b31b2c] bg-[#b31b2c]/10' : 'text-white/60'}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Custom Sort Dropdown */}
            <div className="relative flex-1 sm:flex-none min-w-[180px]">
              <button 
                onClick={() => { setIsSortOpen(!isSortOpen); setIsCatOpen(false); }}
                className={`w-full flex items-center justify-between gap-3 bg-[#111111] border border-white/10 text-white pl-10 pr-5 py-3.5 rounded-xl hover:bg-white/5 transition-all text-left group shadow-2xl ${isSortOpen ? 'border-[#b31b2c]/50' : ''}`}
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b31b2c]">
                  <Filter size={16} />
                </div>
                <span className="font-bold text-[10px] uppercase tracking-wider truncate">
                  {sortOptions.find(o => o.value === sortBy)?.label}
                </span>
                <ChevronDown size={14} className={`text-white/20 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSortOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsSortOpen(false)}></div>
                  <div className="absolute top-full mt-2 right-0 w-full min-w-[200px] bg-[#111111] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in">
                    {sortOptions.map((opt) => (
                      <button 
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setIsSortOpen(false); }}
                        className={`w-full text-left px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider transition-all hover:bg-[#b31b2c]/20 ${sortBy === opt.value ? 'text-[#b31b2c] bg-[#b31b2c]/10' : 'text-white/60'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* View Mode */}
            <div className="hidden sm:flex items-center bg-[#111111] border border-white/10 p-1 rounded-xl gap-1 shadow-2xl">
              <button className="p-2.5 bg-[#b31b2c] text-white rounded-lg shadow-lg transition-all">
                <LayoutGrid size={16} />
              </button>
              <button className="p-2.5 text-white/20 hover:text-white transition-all">
                <LayoutList size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
