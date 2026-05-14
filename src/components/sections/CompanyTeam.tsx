"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Link as LinkIcon } from 'lucide-react';

export function CompanyTeam() {
  const { t } = useLanguage();
  
  const team = [
    { name: 'Ahmad Faisal', role: 'Chief Executive Officer', image: '/images/perkantoran-website.jpg' },
    { name: 'Sarah Amanda', role: 'Operations Manager', image: '/images/bgperkantoraan.jpg' },
    { name: 'Rizky Putra', role: 'Head of Digital', image: '/images/perkantoran-website.jpg' },
    { name: 'Diana Putri', role: 'Client Relations', image: '/images/bgperkantoraan.jpg' },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">Executive</span>
            <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">{t('profile_team_title')}</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 border-2 border-white/10 group-hover:border-[#b31b2c]/50 transition-colors duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {/* Overlay with Socials */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#b31b2c] transition-colors">
                    <LinkIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#b31b2c] transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <h3 className="text-white font-black text-xl mb-1 tracking-tight">{member.name}</h3>
              <p className="text-[#b31b2c] text-xs font-bold uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
