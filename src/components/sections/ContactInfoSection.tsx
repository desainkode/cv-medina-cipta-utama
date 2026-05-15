"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactInfoSection() {
  const { t } = useLanguage();
  
  const contacts = [
    { icon: Phone, label: t('contact_label_wa'), value: "+62 812-3456-7890", link: "https://wa.me/6281234567890" },
    { icon: Mail, label: t('contact_label_email'), value: "info@medinaciptautama.com", link: "mailto:info@medinaciptautama.com" },
    { icon: MapPin, label: t('contact_label_location'), value: t('footer_address'), link: "#" },
    { icon: Clock, label: t('contact_label_hours'), value: t('contact_value_hours'), link: null }
  ];

  return (
    <section id="kontak" className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">{t('contact_tag')}</span>
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">{t('nav_contact')}</h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((item, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-[#b31b2c]/5 hover:border-[#b31b2c]/30 transition-all duration-500 shadow-xl backdrop-blur-sm text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#b31b2c] transition-all duration-300 group-hover:scale-110 shadow-lg">
                <item.icon className="text-[#b31b2c] group-hover:text-white w-7 h-7" />
              </div>
              <h3 className="text-white/40 font-black text-[10px] uppercase tracking-widest mb-2">{item.label}</h3>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-base hover:text-[#b31b2c] transition-colors block leading-relaxed">
                  {item.value}
                </a>
              ) : (
                <span className="text-white font-bold text-base block leading-relaxed">{item.value}</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
