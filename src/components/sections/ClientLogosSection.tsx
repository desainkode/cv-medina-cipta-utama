"use client";

import { Hexagon, Triangle, Circle, Square, Diamond, Octagon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ClientLogosSection() {
  const { t } = useLanguage();
  const clients = [
    { name: 'TechCorp', icon: Hexagon },
    { name: 'BuildGroup', icon: Triangle },
    { name: 'GlobalNet', icon: Circle },
    { name: 'DataSys', icon: Square },
    { name: 'InnoVate', icon: Diamond },
    { name: 'NextGen', icon: Octagon },
  ];

  return (
    <section className="py-8 md:py-10 px-6 md:px-[80px] bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-10">
          {t('clients_header')}
        </p>
        
        {/* Simple Grid since we don't have infinite marquee css set up yet, this still looks premium */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-[#b31b2c] transition-all duration-500 cursor-pointer"
            >
              <client.icon size={28} className="text-current" />
              <span className="text-white font-bold text-lg tracking-tight">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
