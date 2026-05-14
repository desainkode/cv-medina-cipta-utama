"use client";

import { Calendar, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function BlogSection() {
  const { t, language } = useLanguage();
  const articles = [
    {
      title: '5 Tips Memilih Website Company Profile yang Tepat untuk Bisnis Anda',
      category: 'Tips Website',
      date: '12 Mei 2024',
      author: 'Admin',
      image: '/images/perkantoran-website.jpg'
    },
    {
      title: 'Rekomendasi ATK Wajib untuk Meningkatkan Produktivitas Kantor',
      category: 'Rekomendasi ATK',
      date: '08 Mei 2024',
      author: 'Tim Editorial',
      image: '/images/bgperkantoraan.jpg'
    },
    {
      title: 'Transformasi Digital: Mengapa UMKM Harus Go Online Sekarang?',
      category: 'Digital Bisnis',
      date: '02 Mei 2024',
      author: 'Admin',
      image: '/images/perkantoran-website.jpg'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#b31b2c] font-bold text-sm tracking-widest uppercase">{t('blog_tag')}</span>
              <div className="w-12 h-[2px] bg-[#b31b2c]"></div>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {t('blog_title_1')} <br />
              <span className="text-white/60">{t('blog_title_2')}</span>
            </h2>
          </div>
          <Link href="#" className="hidden md:flex items-center gap-2 text-white hover:text-[#b31b2c] transition-colors group">
            <span className="font-bold text-sm uppercase tracking-wider">{t('blog_view_all')}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-[#b31b2c]/30 transition-all duration-300 flex flex-col h-full">
              
              {/* Thumbnail */}
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#b31b2c] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-white/50 text-xs font-medium uppercase tracking-wider mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <h3 className="text-white font-bold text-lg leading-snug mb-6 group-hover:text-[#b31b2c] transition-colors line-clamp-3">
                  {article.title}
                </h3>
                
                <div className="mt-auto">
                  <Link href="#" className="inline-flex items-center gap-2 text-white/80 text-sm font-bold group/btn hover:text-white transition-colors">
                    <span>{t('blog_read_more')}</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
