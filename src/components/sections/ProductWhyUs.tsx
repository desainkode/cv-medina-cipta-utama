"use client";

import { CheckCircle2, DollarSign, Package, Zap, ShieldCheck, Truck } from 'lucide-react';

export function ProductWhyUs() {
  const reasons = [
    { title: "Produk Berkualitas", desc: "Hanya menyediakan ATK dari brand ternama dan terjamin mutunya.", icon: <CheckCircle2 className="text-[#b31b2c]" size={32} /> },
    { title: "Harga Kompetitif", desc: "Penawaran harga terbaik untuk kebutuhan grosir maupun retail.", icon: <DollarSign className="text-[#b31b2c]" size={32} /> },
    { title: "Stok Lengkap", desc: "Ketersediaan barang yang selalu terjaga untuk kelancaran kantor Anda.", icon: <Package className="text-[#b31b2c]" size={32} /> },
    { title: "Pelayanan Cepat", desc: "Respon admin yang sigap membantu setiap pesanan dan pertanyaan.", icon: <Zap className="text-[#b31b2c]" size={32} /> },
    { title: "Supplier Terpercaya", desc: "Berpengalaman bertahun-tahun melayani berbagai instansi.", icon: <ShieldCheck className="text-[#b31b2c]" size={32} /> },
    { title: "Pengiriman Tepat Waktu", desc: "Sistem logistik yang handal memastikan pesanan sampai sesuai jadwal.", icon: <Truck className="text-[#b31b2c]" size={32} /> }
  ];

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">Our Values</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic">
            Kenapa Memilih <span className="text-[#b31b2c]">Kami?</span>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {reasons.map((reason, i) => (
          <div 
            key={i}
            className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#b31b2c]/30 transition-all duration-500 shadow-xl"
          >
            <div className="mb-6 w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              {reason.icon}
            </div>
            <h3 className="text-white font-bold text-lg mb-3 italic tracking-tight group-hover:text-[#b31b2c] transition-colors">
              {reason.title}
            </h3>
            <p className="text-white/40 text-xs leading-relaxed">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
