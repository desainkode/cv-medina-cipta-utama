"use client";

import React from 'react';
import { Globe, Camera, Send, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 md:px-[80px] border-t border-white/5 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute bottom-[-10%] right-[-5%] text-white/[0.02] font-black text-[15vw] leading-none select-none pointer-events-none">
        MCU
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="font-black text-[28px] text-[#b31b2c] italic tracking-tighter leading-none">
                MCU
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white/60 text-[9px] font-bold tracking-[0.2em] uppercase leading-none mb-[2px]">
                  CV
                </span>
                <span className="text-white font-bold text-[15px] tracking-[0.08em] uppercase italic leading-none">
                  Medina Cipta Utama
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[300px]">
              {t('footer_desc')}
            </p>
            <div className="flex items-center gap-4">
              {[Globe, Camera, Send].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#b31b2c] hover:bg-[#b31b2c]/10 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">{t('footer_quick_links')}</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Tentang Kami', 'Layanan', 'Portfolio', 'Kontak'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/50 hover:text-[#b31b2c] transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#b31b2c] transition-all duration-300 group-hover:w-3"></span>
                    {link === 'Home' ? t('nav_home') : 
                     link === 'Tentang Kami' ? t('nav_about') : 
                     link === 'Layanan' ? t('nav_services') : 
                     link === 'Portfolio' ? t('nav_portfolio') : 
                     link === 'Kontak' ? t('nav_contact') : link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">{t('footer_services')}</h4>
            <ul className="flex flex-col gap-4">
              {['Pembuatan Website', 'Maintenance Website', 'Penyediaan ATK', 'Custom Hampers Kantor', 'Konsultasi IT'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                    {service === 'Pembuatan Website' ? t('srv_web_dev') :
                     service === 'Maintenance Website' ? t('srv_web_maint') :
                     service === 'Penyediaan ATK' ? t('srv_atk') :
                     service === 'Custom Hampers Kantor' ? t('srv_hampers') :
                     service === 'Konsultasi IT' ? t('srv_it_consult') : service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">{t('footer_contact')}</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-4">
                <MapPin className="text-[#b31b2c] shrink-0" size={20} />
                <span className="text-white/50 text-sm leading-relaxed">
                  {t('footer_address')}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-[#b31b2c] shrink-0" size={20} />
                <span className="text-white/50 text-sm">+62 858-0461-1938</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-[#b31b2c] shrink-0" size={20} />
                <span className="text-white/50 text-sm">info@medinaciptautama.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs text-center md:text-left">
            © {new Date().getFullYear()} CV. Medina Cipta Utama. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-white/30 hover:text-white transition-colors text-xs">Privacy Policy</Link>
            <Link href="#" className="text-white/30 hover:text-white transition-colors text-xs">Terms of Service</Link>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/50 hover:text-white transition-all duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-widest">{t('footer_back_top')}</span>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#b31b2c] group-hover:bg-[#b31b2c] transition-all duration-300">
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
