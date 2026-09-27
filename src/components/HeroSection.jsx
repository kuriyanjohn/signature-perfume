import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, Volume2, VolumeX, ArrowRight } from 'lucide-react';

export default function HeroSection({ onExplore, onSelectProduct }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

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
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  const currentSlideData = heroSlides[activeSlide];

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen bg-[#0B0B0B] text-white overflow-hidden flex items-center justify-center pt-16 pb-20 px-4 sm:px-8 md:px-12 border-b border-[#D4AF37]/15">
      
      {/* Fullscreen Atmospheric Hero Background Image Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`hero-bg-${activeSlide}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          <img
            src={currentSlideData.bgImage}
            alt={`${currentSlideData.fragranceName} backdrop`}
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08]"
          />
          {/* Subtle gradient vignette overlays for perfect text contrast & readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-[#0B0B0B]/50 to-[#0B0B0B]/80 z-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/70 z-1" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-[#0B0B0B]/60 z-1" />
        </motion.div>
      </AnimatePresence>

      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#382B12]/20 via-transparent to-transparent pointer-events-none z-1" />



      {/* Centered Content Container */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-20 py-8 md:py-16">
        
        <div className="flex flex-col items-center text-center w-full">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>HAUTE PARFUMERIE FRANÇAISE</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-[0.18em] text-white font-light leading-[1.08] mb-6 uppercase text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            SILLAGE D'ORIENT
          </h1>

          {/* Quote Description */}
          <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-neutral-200 font-light leading-relaxed mb-8 max-w-2xl text-center drop-shadow-md">
            "To bottle each Sillage d'Orient fragrance is to capture the mystery of scent within."
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
            <button
              onClick={() => onExplore('collection')}
              className="px-8 py-4 bg-[#D4AF37] text-black font-display text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 rounded-[2px] flex items-center gap-3 group cursor-pointer"
            >
              <span>DISCOVER THE COLLECTION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onExplore('collection')}
              className="px-6 py-4 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#D4AF37]/30 text-white font-display text-xs sm:text-sm tracking-[0.22em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all rounded-[2px] cursor-pointer"
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

          {/* Slide Indicator Dots (Centered Background Controls) */}
          <div className="flex items-center justify-center gap-3">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                  activeSlide === idx
                    ? 'w-10 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]'
                    : 'w-3 bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => onExplore('collection')}>
        <span className="font-display text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </div>
    </section>
  );
}
