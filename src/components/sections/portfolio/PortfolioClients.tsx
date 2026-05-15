"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function PortfolioClients() {
  const { t } = useLanguage();

  const clients = [
    { name: 'Company One', logo: 'https://via.placeholder.com/150x50/1a1a1a/ffffff?text=CLIENT+1' },
    { name: 'School A', logo: 'https://via.placeholder.com/150x50/1a1a1a/ffffff?text=CLIENT+2' },
    { name: 'Instansi B', logo: 'https://via.placeholder.com/150x50/1a1a1a/ffffff?text=CLIENT+3' },
    { name: 'UMKM C', logo: 'https://via.placeholder.com/150x50/1a1a1a/ffffff?text=CLIENT+4' },
    { name: 'Project D', logo: 'https://via.placeholder.com/150x50/1a1a1a/ffffff?text=CLIENT+5' },
    { name: 'Agency E', logo: 'https://via.placeholder.com/150x50/1a1a1a/ffffff?text=CLIENT+6' },
  ];

  return (
    <section className="py-16 bg-[#111111] overflow-hidden">
      <div className="container mx-auto px-6 md:px-[80px] mb-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">Trust</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl font-black tracking-tight italic">
            {t('portfolio_clients_title')}
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-scroll whitespace-nowrap py-10">
          {[...clients, ...clients].map((client, idx) => (
            <div 
              key={idx} 
              className="mx-8 md:mx-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center min-w-[150px]"
            >
              <img src={client.logo} alt={client.name} className="h-8 md:h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
