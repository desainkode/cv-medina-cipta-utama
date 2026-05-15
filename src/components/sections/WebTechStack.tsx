"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export function WebTechStack() {
  const { t } = useLanguage();
  
  const techs = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">{t('web_stack_tag')}</span>
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">{t('web_tech_title')}</h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {techs.map((tech, i) => (
            <div key={i} className="group relative flex flex-col items-center gap-4 transition-all duration-300">
              <div className="w-16 h-16 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 flex items-center justify-center p-2 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20">
                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-white/20 group-hover:text-[#b31b2c] text-[10px] font-black uppercase tracking-widest transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
