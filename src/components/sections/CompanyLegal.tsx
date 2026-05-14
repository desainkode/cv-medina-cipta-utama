"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, MapPin, Building, ShieldCheck } from 'lucide-react';

export function CompanyLegal() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 px-6 md:px-[80px] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-[#b31b2c] w-6 h-6" />
              <span className="text-[#b31b2c] font-black text-xs tracking-[0.4em] uppercase">Legality</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-8">
              {t('profile_legal_title')}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              CV Medina Cipta Utama adalah badan usaha resmi yang terdaftar dan memenuhi seluruh persyaratan hukum yang berlaku di Indonesia.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Nama Perusahaan</div>
                <div className="text-white font-bold text-lg">CV. Medina Cipta Utama</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">NIB</div>
                <div className="text-white font-bold text-lg">1234567890123 (Placeholder)</div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-4">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#b31b2c]/20 flex items-center justify-center shrink-0">
                <MapPin className="text-[#b31b2c] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Alamat Kantor</h4>
                <p className="text-white/60 text-sm leading-relaxed">{t('footer_address')}</p>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#b31b2c]/20 flex items-center justify-center shrink-0">
                <Building className="text-[#b31b2c] w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Status Usaha</h4>
                <p className="text-white/60 text-sm leading-relaxed">Aktif & Terdaftar Resmi</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
