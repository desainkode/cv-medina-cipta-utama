"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function TestimonialSection() {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: t('testi1_name'),
      role: t('testi1_role'),
      content: t('testi1_content'),
      rating: 5,
      image: '/images/bgperkantoraan.jpg'
    },
    {
      name: t('testi2_name'),
      role: t('testi2_role'),
      content: t('testi2_content'),
      rating: 5,
      image: '/images/perkantoran-website.jpg'
    },
    {
      name: t('testi3_name'),
      role: t('testi3_role'),
      content: t('testi3_content'),
      rating: 5,
      image: '/images/bgperkantoraan.jpg'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 px-6 md:px-[80px] bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
            <span className="text-[#b31b2c] font-black text-[10px] tracking-[0.3em] uppercase italic">{t('testimonial_tag')}</span>
            <div className="w-8 h-[1.5px] bg-[#b31b2c]"></div>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight italic max-w-2xl">
            {t('testimonial_title')}
          </h2>
        </div>

        {/* Testimonial Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          
          <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-white/10 relative">
            <Quote className="absolute top-8 left-8 text-white/5 w-24 h-24 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#b31b2c]"
                />
                <div className="text-left">
                  <div className="text-white font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-[#b31b2c] text-sm">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#b31b2c] hover:border-[#b31b2c] transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? 'bg-[#b31b2c] w-8' : 'bg-white/20'}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#b31b2c] hover:border-[#b31b2c] transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
