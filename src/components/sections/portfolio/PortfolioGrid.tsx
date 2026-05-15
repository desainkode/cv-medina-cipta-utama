"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, ArrowUpRight, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  year: string;
  tech: string[];
}

interface PortfolioGridProps {
  activeCategory: string;
  searchQuery: string;
}

export function PortfolioGrid({ activeCategory, searchQuery }: PortfolioGridProps) {
  const { t } = useLanguage();

  // Mock Data Portfolio
  const projects = useMemo<Project[]>(() => [
    {
      id: 1,
      slug: 'tech-corp-profile',
      title: t('port_project1_title'),
      client: t('port_project1_client'),
      category: 'company',
      image: '/images/atk-port-1.png',
      year: '2024',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      id: 2,
      slug: 'edu-smart-system',
      title: t('port_project2_title'),
      client: t('port_project2_client'),
      category: 'school',
      image: '/images/atk-port-2.png',
      year: '2023',
      tech: ['Laravel', 'React', 'MySQL']
    },
    {
      id: 3,
      slug: 'fashion-store-online',
      title: t('port_project3_title'),
      client: t('port_project3_client'),
      category: 'shop',
      image: '/images/atk-port-featured.png',
      year: '2024',
      tech: ['Next.js', 'Stripe', 'Node.js']
    },
    {
      id: 4,
      slug: 'creative-landing-page',
      title: t('port_project4_title'),
      client: t('port_project4_client'),
      category: 'landing',
      image: '/images/atk-port-1.png',
      year: '2023',
      tech: ['React', 'Three.js', 'GSAP']
    },
    {
      id: 5,
      slug: 'custom-erp-system',
      title: t('port_project5_title'),
      client: t('port_project5_client'),
      category: 'system',
      image: '/images/atk-port-2.png',
      year: '2024',
      tech: ['PHP', 'Vue.js', 'PostgreSQL']
    },
    {
      id: 6,
      slug: 'b2b-procurement-web',
      title: t('port_project6_title'),
      client: t('port_project6_client'),
      category: 'custom',
      image: '/images/atk-port-featured.png',
      year: '2024',
      tech: ['Next.js', 'TypeScript', 'Prisma']
    },
  ], [t]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           project.client.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section className="pb-24 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-[#b31b2c]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <Link 
                    href={`/portfolio/${project.slug}`}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#b31b2c] hover:border-[#b31b2c] transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#b31b2c] hover:border-[#b31b2c] transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0 delay-75">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white tracking-widest uppercase">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b31b2c]"></span>
                  <span className="text-[#b31b2c] text-[10px] font-bold tracking-widest uppercase">
                    {t(`portfolio_cat_${project.category}` as any)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#b31b2c] transition-colors">{project.title}</h3>
                <p className="text-white/40 text-sm mb-6">{project.client}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((techName, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-white/60 font-medium">
                      {techName}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/portfolio/${project.slug}`}
                  className="mt-8 flex items-center justify-between group/link border-t border-white/5 pt-6"
                >
                  <span className="text-white text-xs font-bold uppercase tracking-widest group-hover/link:text-[#b31b2c] transition-colors">{t('portfolio_btn_detail')}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover/link:bg-[#b31b2c] transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
