"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t('nav_home'), hasDropdown: false, href: '/' },
    { 
      label: t('nav_about'), 
      hasDropdown: true, 
      children: [
        { label: t('nav_about_company'), href: '/profil' },
        { label: t('nav_about_vision'), href: '/profil#visi-misi' }
      ] 
    },
    { label: t('nav_services'), hasDropdown: true, children: [{ label: t('nav_services_web'), href: '/layanan/website' }, { label: t('nav_services_atk'), href: '/layanan/atk' }] },
    { label: t('nav_products'), hasDropdown: false, href: '/produk' },
    { label: t('nav_portfolio'), hasDropdown: false, href: '/portfolio' },
    { label: t('nav_clients'), hasDropdown: false, href: '/klien' },
    { label: t('nav_testimonials'), hasDropdown: false, href: '/testimoni' },
    { label: t('nav_blog'), hasDropdown: false, href: '/#blog' },
    { label: t('nav_contact'), hasDropdown: false, href: '/#kontak' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-[80px] transition-all duration-500 animate-fade-in ${
        isScrolled ? 'pt-3 pb-3 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'pt-6 bg-transparent border-transparent'
      }`}
    >
      {/* Top Row */}
      <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'pb-2' : 'pb-4'}`}>
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
          <div className="font-black text-[24px] md:text-[28px] text-[#b31b2c] italic tracking-tighter leading-none group-hover:text-red-500 transition-colors">
            MCU
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-white/60 text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase leading-none mb-[2px] group-hover:text-white/80 transition-colors">
              CV
            </span>
            <span className="text-white font-bold text-[13px] md:text-[15px] tracking-[0.08em] uppercase italic leading-none group-hover:text-gray-200 transition-colors">
              Medina Cipta Utama
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:+6285804611938" className="text-white text-xs hover:text-white/80 transition-colors tracking-wide">
            +62 858-0461-1938
          </a>
          <div className="relative group ml-2">
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-transparent text-white text-xs hover:bg-white/20 hover:border-white/80 transition-all duration-300">
              {t('nav_help')}
              <ChevronDown className="w-3 h-3 opacity-80 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            {/* Dropdown Menu - Ultra Glassmorphism */}
            <div className="absolute right-0 top-[calc(100%+8px)] w-[190px] bg-white/80 backdrop-blur-xl border border-white/30 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 transform translate-y-3 group-hover:translate-y-0 overflow-hidden flex flex-col z-50">
              <Link href="#" className="px-5 py-3.5 text-gray-800 hover:text-[#b31b2c] hover:bg-black/5 transition-all text-[13px] border-b border-black/5 relative group/item">
                <span className="relative z-10 font-medium">{t('nav_consult')}</span>
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#b31b2c]/10 to-transparent transition-all duration-300 group-hover/item:w-full z-0 opacity-100"></div>
              </Link>
              <Link href="#" className="px-5 py-3.5 text-gray-800 hover:text-[#b31b2c] hover:bg-black/5 transition-all text-[13px] relative group/item">
                <span className="relative z-10 font-medium">{t('nav_contact_us')}</span>
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#b31b2c]/10 to-transparent transition-all duration-300 group-hover/item:w-full z-0 opacity-100"></div>
              </Link>
            </div>
          </div>
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 bg-transparent text-white text-xs hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-medium uppercase"
          >
            {language === 'id' ? 'ID' : 'EN'}
          </button>
        </div>
      </div>

      {/* Bottom Row - Menu */}
      <div className="hidden lg:flex w-full">
        {menuItems.map((item, index) => (
          <div key={index} className={`flex-1 border-t border-white/20 pb-2 pr-2 xl:pr-4 group/menu transition-all duration-500 relative ${isScrolled ? 'pt-2' : 'pt-3'}`}>
            <Link
              href={item.href || "#"}
              className="group flex items-center justify-between text-white hover:text-white/70 transition-colors duration-300 text-[11px] xl:text-[13px] font-normal"
            >
              <span className="relative whitespace-nowrap">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
              {item.hasDropdown && <ChevronDown className="w-[12px] h-[12px] opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300 ml-1" />}
            </Link>

            {/* Dropdown for Main Menu Items */}
            {item.hasDropdown && item.children && (
              <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-400 transform translate-y-3 group-hover/menu:translate-y-0 z-[60]">
                <div className="min-w-[200px] bg-white/80 backdrop-blur-xl border border-white/30 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col">
                  {item.children.map((child: any, idx: number) => (
                    <Link 
                      key={idx} 
                      href={child.href || "#"} 
                      className="block px-5 py-3.5 text-gray-800 hover:text-[#b31b2c] hover:bg-black/5 transition-all text-[13px] border-b border-black/5 last:border-0 relative group/item"
                    >
                      <span className="relative z-10 font-medium">{child.label}</span>
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#b31b2c]/10 to-transparent transition-all duration-300 group-hover/item:w-full z-0 opacity-100"></div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
