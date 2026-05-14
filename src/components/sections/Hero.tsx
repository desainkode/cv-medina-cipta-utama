"use client";

import { ChevronRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#222222]">
      {/* Background Image - Desaturated Rig */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-overlay opacity-55 animate-fade-in"
        style={{ backgroundImage: 'url("/images/bgperkantoraan.jpg")' }}
      ></div>

      {/* Giant Solid Red "MCU" Watermark */}
      <div 
        className="absolute top-1/2 right-[-10%] md:right-[-5%] -translate-y-1/2 text-[#b31b2c]/60 font-black leading-none select-none z-0 animate-fade-in [animation-delay:300ms]" 
        style={{ fontSize: 'max(95vh, 500px)', letterSpacing: '-0.08em' }}
      >
        MCU
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full h-full mx-auto px-6 md:px-[80px] flex flex-col justify-start pt-[28vh] md:pt-[32vh]">
        
        {/* Left Content */}
        <div className="max-w-5xl">
          <h1 className="text-white text-3xl md:text-[42px] lg:text-[55px] font-bold leading-[1.1] tracking-tight mb-5 md:mb-6 animate-fade-up [animation-delay:100ms] max-w-[600px]">
            <span className="block">{t('hero_title_1')}</span>
            <span className="text-white/60">{t('hero_title_2')}</span>
          </h1>
          <p className="text-white/90 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-[550px] animate-fade-up [animation-delay:300ms]">
            {t('hero_subtitle')}
          </p>
        </div>

        {/* Floating Cards (Bottom Left) */}
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-[80px] flex flex-col sm:flex-row gap-4 md:gap-5 z-30">
          {/* Card 1 */}
          <div className="bg-white w-[180px] md:w-[220px] h-[110px] md:h-[130px] flex flex-col relative shadow-2xl cursor-pointer group animate-fade-up [animation-delay:500ms] hover:-translate-y-2 transition-transform duration-500">
            <div className="p-4 md:p-5 flex flex-col gap-1 bg-white h-[70px] md:h-[80px] z-10">
              <span className="text-[#111111] font-bold text-[15px] md:text-base tracking-tight group-hover:text-[#b31b2c] transition-colors duration-300">{t('hero_card_website')}</span>
              <span className="text-[#888888] font-medium text-[11px] md:text-xs">01</span>
            </div>
            <div className="h-[40px] md:h-[50px] w-full overflow-hidden relative bg-gray-200">
              <img src="/images/perkantoran-website.jpg" alt="website" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
            </div>
            {/* Arrow Button */}
            <div className="absolute bottom-4 md:bottom-5 right-4 md:right-5 w-[28px] md:w-[32px] h-[28px] md:h-[32px] rounded-full bg-[#353f4d] flex items-center justify-center text-white shadow-md group-hover:bg-[#b31b2c] transition-all duration-300 z-20 group-hover:shadow-[0_5px_15px_rgba(179,27,44,0.4)]">
              <ChevronRight className="w-3 md:w-[14px] h-3 md:h-[14px] group-hover:translate-x-[2px] transition-transform duration-300" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white w-[180px] md:w-[220px] h-[110px] md:h-[130px] flex flex-col relative shadow-2xl cursor-pointer group animate-fade-up [animation-delay:600ms] hover:-translate-y-2 transition-transform duration-500">
            <div className="p-4 md:p-5 flex flex-col gap-1 bg-white h-[70px] md:h-[80px] z-10">
              <span className="text-[#111111] font-bold text-[15px] md:text-base tracking-tight group-hover:text-[#b31b2c] transition-colors duration-300">{t('hero_card_atk')}</span>
              <span className="text-[#888888] font-medium text-[11px] md:text-xs">02</span>
            </div>
            <div className="h-[40px] md:h-[50px] w-full overflow-hidden relative bg-gray-200">
              <img src="/images/bgperkantoraan.jpg" alt="atk" className="w-full h-full object-cover opacity-80 grayscale group-hover:scale-110 transition-transform duration-700" />
            </div>
            {/* Arrow Button */}
            <div className="absolute bottom-4 md:bottom-5 right-4 md:right-5 w-[28px] md:w-[32px] h-[28px] md:h-[32px] rounded-full bg-[#353f4d] flex items-center justify-center text-white shadow-md group-hover:bg-[#b31b2c] transition-all duration-300 z-20 group-hover:shadow-[0_5px_15px_rgba(179,27,44,0.4)]">
              <ChevronRight className="w-3 md:w-[14px] h-3 md:h-[14px] group-hover:translate-x-[2px] transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Right Column - Showcase Image */}
        <div className="absolute bottom-12 md:bottom-20 right-[-15%] md:right-[-8%] lg:right-[5%] w-[95%] md:w-[70%] max-w-[600px] h-[45vh] md:h-[55vh] z-20 pointer-events-none animate-slide-right [animation-delay:400ms]">
          <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
            <img 
              src="/images/perkantoran-website.jpg" 
              alt="Website & Office Showcase" 
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>


    </div>
  );
}
