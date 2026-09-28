import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';

export default function HeroSection({ onExplore, onSelectProduct, theme = 'dark' }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const isDark = theme === 'dark';

  const heroSlides = [
    {
      id: 'musk',
      title: "SILLAGE\nD'ORIENT",
      tagline: "PARIS  |  FRANCE",
      quote: "To bottle each Sillage d'Orient fragrance is to capture the mystery of scent within.",
      bgImage: "/images/backgrounds/hero-musk.png",
      image: "/images/products/musk-bottle.png",
      boxImage: "/images/products/musk-set.png",
      fragranceName: "SIGNATURE MUSK",
      badge: "Sensual Elegance • 100ml + 15ml"
    },
    {
      id: 'rose',
      title: "SILLAGE\nD'ORIENT",
      tagline: "PARIS  |  FRANCE",
      quote: "Sillage d'Orient signature fragrances hold the names of precious stones and materials sought by kings and queens.",
      bgImage: "/images/backgrounds/hero-rose.png",
      image: "/images/products/rose-bottle.png",
      boxImage: "/images/products/rose-set.png",
      fragranceName: "SIGNATURE ROSE",
      badge: "Eternal Romance • 100ml + 15ml"
    },
    {
      id: 'oud',
      title: "SILLAGE\nD'ORIENT",
      tagline: "PARIS  |  FRANCE",
      quote: "To wear it, is to wield its power. A celebration of unspoken connection and rare essences.",
      bgImage: "/images/backgrounds/hero-oud.png",
      image: "/images/products/oud-set.png",
      boxImage: "/images/products/oud-set.png",
      fragranceName: "SIGNATURE OUD",
      badge: "Imperial Gold • 100ml + 15ml"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // 4 Seconds Interval
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = heroSlides[activeSlide];

  return (
    <section id="hero" className={`relative min-h-[90vh] sm:min-h-screen overflow-hidden flex items-center justify-center pt-16 pb-20 px-4 sm:px-8 md:px-12 border-b border-[#D4AF37]/20 transition-colors duration-500 ${
      isDark ? 'bg-[#0B0B0B] text-white' : 'bg-[#FAF8F5] text-stone-900'
    }`}>
      
      {/* Fullscreen Atmospheric Hero Background Image Layer - Brightened for Vivid Visibility */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`hero-bg-${activeSlide}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          <img
            src={currentSlideData.bgImage}
            alt={`${currentSlideData.fragranceName} backdrop`}
            className={`w-full h-full object-cover object-center filter transition-all duration-700 ${
              isDark ? 'brightness-[0.82] contrast-[1.05]' : 'brightness-[0.92] contrast-[1.02]'
            }`}
          />
          {/* Lightened gradient overlays to reveal the background image details clearly */}
          <div className={`absolute inset-0 z-1 ${
            isDark
              ? 'bg-gradient-to-r from-[#0B0B0B]/55 via-[#0B0B0B]/20 to-[#0B0B0B]/55'
              : 'bg-gradient-to-r from-[#FAF8F5]/60 via-[#FAF8F5]/25 to-[#FAF8F5]/60'
          }`} />
          <div className={`absolute inset-0 z-1 ${
            isDark
              ? 'bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-[#0B0B0B]/40'
              : 'bg-gradient-to-t from-[#FAF8F5]/70 via-transparent to-[#FAF8F5]/40'
          }`} />
        </motion.div>
      </AnimatePresence>

      {/* Centered Content Container */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-20 py-8 md:py-16">
        
        <div className="flex flex-col items-center text-center w-full">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>HAUTE PARFUMERIE FRANÇAISE</span>
          </div>

          {/* Main Headline */}
          <h1 className={`font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-[0.18em] font-light leading-[1.08] mb-6 uppercase text-center ${
            isDark
              ? 'text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]'
              : 'text-stone-900 drop-shadow-[0_4px_15px_rgba(255,255,255,0.9)]'
          }`}>
            SILLAGE D'ORIENT
          </h1>

          {/* Quote Description */}
          <p className={`font-serif italic text-lg sm:text-2xl md:text-3xl font-light leading-relaxed mb-8 max-w-2xl text-center backdrop-blur-[2px] py-1 px-4 rounded-full ${
            isDark ? 'text-neutral-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/30' : 'text-stone-900 bg-white/40 shadow-sm'
          }`}>
            "{currentSlideData.quote}"
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
            <button
              onClick={() => onExplore('collection')}
              className="px-8 py-4 bg-[#D4AF37] text-black font-display text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase hover:bg-stone-900 hover:text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 rounded-[2px] flex items-center gap-3 group cursor-pointer"
            >
              <span>DISCOVER THE COLLECTION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onExplore('collection')}
              className={`px-6 py-4 backdrop-blur-md border border-[#D4AF37]/40 font-display text-xs sm:text-sm tracking-[0.22em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all rounded-[2px] cursor-pointer ${
                isDark ? 'bg-[#1A1A1A]/85 text-white' : 'bg-white/85 text-stone-900 shadow-sm'
              }`}
            >
              EXPLORE SIGNATURE PARFUMS
            </button>
          </div>

          {/* Location Tagline */}
          <div className="font-display text-xs sm:text-sm tracking-[0.35em] text-[#D4AF37] font-light flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            <span>PARIS  |  FRANCE</span>
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-center gap-3">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                  activeSlide === idx
                    ? 'w-10 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]'
                    : isDark ? 'w-3 bg-neutral-600 hover:bg-neutral-400' : 'w-3 bg-stone-300 hover:bg-stone-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => onExplore('collection')}>
        <span className="font-display text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </div>
    </section>
  );
}


