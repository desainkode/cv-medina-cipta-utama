"use client";

import { PenTool, BookOpen, Printer, Scissors, FolderOpen, Briefcase, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProductCategories() {
  const { t } = useLanguage();

  const categories = [
    { name: "Pena & Pensil", count: 120, icon: <PenTool size={24} />, color: "from-blue-500/20 to-transparent" },
    { name: "Buku & Kertas", count: 85, icon: <BookOpen size={24} />, color: "from-emerald-500/20 to-transparent" },
    { name: "Printer & Tinta", count: 42, icon: <Printer size={24} />, color: "from-red-500/20 to-transparent" },
    { name: "Stapler & Cutter", count: 35, icon: <Scissors size={24} />, color: "from-amber-500/20 to-transparent" },
    { name: "Arsip Dokumen", count: 38, icon: <FolderOpen size={24} />, color: "from-purple-500/20 to-transparent" },
    { name: "Peralatan Kantor", count: 64, icon: <Briefcase size={24} />, color: "from-cyan-500/20 to-transparent" }
  ];

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">Browse by</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">
            Kategori <span className="text-[#b31b2c]">Produk</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group relative bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-[2.5rem] p-10 hover:border-[#b31b2c]/40 transition-all duration-700 overflow-hidden hover:-translate-y-2 shadow-2xl"
            >
              {/* Animated Glow Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white group-hover:bg-[#b31b2c] group-hover:border-[#b31b2c] group-hover:shadow-[0_0_20px_rgba(179,27,44,0.4)] transition-all duration-500">
                    {cat.icon}
                  </div>
                  <div className="text-white/5 text-5xl font-black italic tracking-tighter group-hover:text-white/10 transition-colors duration-500">
                    0{i + 1}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-white font-black text-2xl mb-2 tracking-tight italic group-hover:text-[#b31b2c] transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <div className="w-10 h-1 bg-[#b31b2c]/20 rounded-full group-hover:w-20 group-hover:bg-[#b31b2c] transition-all duration-500"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em] mb-1">Stock Availability</span>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                      {cat.count} <span className="text-[#b31b2c]">Items</span>
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#b31b2c] group-hover:scale-110 transition-all duration-500">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>

              {/* Decorative Corner Shape */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-[5rem] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
