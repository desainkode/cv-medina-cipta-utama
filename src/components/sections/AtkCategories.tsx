"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { PenTool, FileText, Briefcase, Printer, FolderOpen, Settings2 } from 'lucide-react';

export function AtkCategories() {
  const { t } = useLanguage();
  
  const categories = [
    { title: "Alat Tulis", icon: PenTool, items: ["Pena", "Pensil", "Spidol", "Penghapus"] },
    { title: "Kertas & Buku", icon: FileText, items: ["Kertas HVS", "Buku Tulis", "Sticky Notes", "Agenda"] },
    { title: "Peralatan Kantor", icon: Briefcase, items: ["Stapler", "Punch Hole", "Cutter", "Gunting"] },
    { title: "Printer & Tinta", icon: Printer, items: ["Printer", "Cartridge", "Tinta Printer", "Toner"] },
    { title: "Map & Arsip", icon: FolderOpen, items: ["Map Dokumen", "Ordner", "Binder", "File Organizer"] },
    { title: "Perlengkapan Operasional", icon: Settings2, items: ["Whiteboard", "Kalender", "Label", "Kebutuhan Lain"] }
  ];

  return (
    <section id="kategori" className="py-16 px-6 md:px-[80px] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">Categories</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">{t('atk_cat_title')}</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-[#b31b2c]/5 hover:border-[#b31b2c]/30 transition-all duration-500 shadow-xl backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#b31b2c] transition-all duration-300 group-hover:scale-110 shadow-lg">
                <cat.icon className="text-[#b31b2c] group-hover:text-white w-7 h-7" />
              </div>
               <h3 className="text-white font-black italic text-xl mb-4 tracking-tight group-hover:text-[#b31b2c] transition-colors">{cat.title}</h3>
              <ul className="grid grid-cols-2 gap-2">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="text-white/40 text-xs font-medium flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#b31b2c]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
