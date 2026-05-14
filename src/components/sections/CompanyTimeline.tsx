"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { History } from 'lucide-react';

export function CompanyTimeline() {
  const { t } = useLanguage();
  
  const events = [
    { year: '2019', title: 'Founding Year', desc: 'Started as a trusted local office supplies provider in Bandung.', status: 'completed' },
    { year: '2021', title: 'Digital Transformation', desc: 'Expanded services into professional website development and IT consultation.', status: 'completed' },
    { year: '2022', title: 'Expanding Clients', desc: 'Successfully handled over 50+ corporate and government projects.', status: 'completed' },
    { year: '2023', title: 'Service Integration', desc: 'Merged digital and office solutions into a unified strategic business model.', status: 'completed' },
    { year: '2024', title: 'Market Leader', desc: 'Becoming a premier choice for local and national business digital transformation.', status: 'current' },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <History className="text-[#b31b2c] w-6 h-6" />
            <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">History</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">{t('profile_timeline_title')}</h2>
        </div>

        {/* Timeline UI */}
        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#b31b2c] via-[#b31b2c]/40 to-transparent z-0 md:-translate-x-1/2"></div>
          
          {events.map((event, i) => (
            <div key={i} className={`relative z-10 flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border-4 border-[#b31b2c] z-20 md:-translate-x-1/2 shadow-[0_0_20px_rgba(179,27,44,0.4)]"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#b31b2c]/30 transition-all duration-300 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="text-[#b31b2c] font-black text-2xl mb-2">{event.year}</div>
                  <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{event.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
