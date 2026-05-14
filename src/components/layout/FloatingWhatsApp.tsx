"use client";

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent("Halo admin CV Medina Cipta Utama, saya ingin bertanya tentang layanan/produk Anda.");
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex items-center gap-4">
      {/* Tooltip */}
      <div 
        className={`bg-white text-[#111111] px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl transition-all duration-500 pointer-events-none ${showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
      >
        Hubungi Admin
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white"></div>
      </div>

      {/* Button */}
      <button 
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-500 group animate-bounce"
      >
        <MessageCircle size={32} className="fill-white/20 group-hover:fill-white/40 transition-all" />
        
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-20"></div>
      </button>
    </div>
  );
}
