"use client";

import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function PortfolioSection() {
  const { t } = useLanguage();
  const projects = [
    {
      title: 'Company Profile Tech',
      client: 'PT Inovasi Digital',
      type: 'Corporate Website',
      tech: ['Next.js', 'Tailwind CSS'],
      image: '/images/perkantoran-website.jpg'
    },
    {
      title: 'E-Commerce ATK',
      client: 'Toko Buku Maju',
      type: 'Toko Online',
      tech: ['React', 'Node.js'],
      image: '/images/bgperkantoraan.jpg'
    },
    {
      title: 'Sistem Informasi Desa',
      client: 'Pemerintah Desa',
      type: 'Web App',
      tech: ['Laravel', 'Bootstrap'],
      image: '/images/perkantoran-website.jpg'
    }
  ];

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('portfolio_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic max-w-2xl">
            {t('portfolio_title_1')} <br />
            <span className="text-[#b31b2c]">{t('portfolio_title_2')}</span>
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden bg-[#111111] border border-white/10">
              {/* Image Container */}
              <div className="relative h-[250px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Tech Badges */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 relative z-20 bg-gradient-to-t from-[#111111] via-[#111111] to-transparent">
                <div className="text-[#b31b2c] font-bold text-xs uppercase tracking-wider mb-2">
                  {project.type}
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
                <p className="text-white/60 text-sm mb-6">{t('portfolio_client_label')}: {project.client}</p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-white text-sm font-bold group/link hover:text-[#b31b2c] transition-colors">
                  <ExternalLink size={16} />
                  <span>{t('portfolio_btn_preview')}</span>
                  <div className="w-0 h-[1px] bg-[#b31b2c] transition-all duration-300 group-hover/link:w-4"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link href="#" className="flex items-center gap-2 text-white hover:text-[#b31b2c] transition-colors group border border-white/20 px-6 py-3 rounded-full">
            <span className="font-bold text-sm uppercase tracking-wider">{t('portfolio_view_all')}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
