"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, Layout, Search, Settings, Zap, Shield, Globe, MessageSquare, MapPin, Mail, Share2 } from 'lucide-react';

export function WebServiceFeatures() {
  const { t } = useLanguage();
  
  const features = [
    { title: "Responsive Mobile", icon: Smartphone },
    { title: "Desain Modern", icon: Layout },
    { title: "SEO Friendly", icon: Search },
    { title: "Admin Panel", icon: Settings },
    { title: "Fast Loading", icon: Zap },
    { title: "Keamanan Website", icon: Shield },
    { title: "Domain & Hosting", icon: Globe },
    { title: "WhatsApp Integration", icon: MessageSquare },
    { title: "Google Maps", icon: MapPin },
    { title: "Form Kontak", icon: Mail },
    { title: "Social Media Integration", icon: Share2 },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">Features</span>
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">{t('web_features_title')}</h2>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feat, i) => (
            <div key={i} className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-[#b31b2c]/10 hover:border-[#b31b2c]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <feat.icon size={20} className="text-[#b31b2c]" />
              </div>
              <span className="text-white/80 font-bold text-sm tracking-wide">{feat.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
