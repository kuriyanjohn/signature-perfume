import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gem, Sparkles, ArrowRight } from 'lucide-react';

export default function InspiredStonesShowcase({ onSelectProduct, theme = 'dark' }) {
  const [activeGem, setActiveGem] = useState('oud');
  const isDark = theme === 'dark';

  const gemstones = [
    {
      id: 'oud',
      name: 'IMPERIAL OUD GOLD',
      color: '#D4AF37',
      symbol: '✨',
      productId: 'oud',
      headline: 'The Jewel of Kings',
      description: 'Sought by emperors and sultans for millennia. Imperial Oud represents unyielding power, deep spiritual connection, and golden prestige.',
      image: '/images/products/oud-set.png',
      notes: 'Agarwood • Cardamom • Saffron • Royal Rose'
    },
    {
      id: 'musk',
      name: 'CRYSTAL GOLD MUSK',
      color: '#F5E6C8',
      symbol: '💎',
      productId: 'musk',
      headline: 'The Velvet Essence',
      description: 'Capturing the luminous purity of pure gold flakes suspended in crystal. A delicate balance of white florals and warm amber.',
      image: '/images/products/musk-set.png',
      notes: 'White Peach • Jasmine Sambac • Velvet Amber'
    },
    {
      id: 'rose',
      name: 'ROSE GOLD FLORENTINE',
      color: '#E6A8A8',
      symbol: '🌹',
      productId: 'rose',
      headline: 'The Moonlit Bloom',
      description: 'Infused with the essence of French Damask roses under moonlight, evoking passion, romance, and royal distinction.',
      image: '/images/products/rose-set.png',
      notes: 'Bulgarian Rose • Pink Peppercorn • Patchouli'
    }
  ];

  const currentGem = gemstones.find((g) => g.id === activeGem);

  return (
    <section id="stones" className={`py-24 px-6 md:px-12 relative z-20 border-b border-[#D4AF37]/20 overflow-hidden transition-colors duration-500 ${
      isDark
        ? 'bg-gradient-to-b from-[#0B0B0B] via-[#161410] to-[#0B0B0B] text-white'
        : 'bg-gradient-to-b from-[#FAF8F5] via-[#F4F0E8] to-[#FAF8F5] text-stone-900'
    }`}>
      
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs sm:text-sm tracking-[0.32em] text-[#D4AF37] uppercase mb-3 block font-light">
            THE ALCHEMY OF GEMSTONES & FRAGRANCE
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.2em] uppercase ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            INSPIRED BY PRECIOUS STONES
          </h2>
          <p className={`font-serif italic text-lg sm:text-xl max-w-2xl mx-auto mt-4 font-light ${
            isDark ? 'text-neutral-300' : 'text-stone-700'
          }`}>
            "For some, the power of a perfectly formed gem lies in its beguiling secret. In pure fragrance, we find a jewel in our nature."
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Gemstone Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          {gemstones.map((gem) => (
            <button
              key={gem.id}
              onClick={() => setActiveGem(gem.id)}
              className={`px-6 py-3 rounded-full font-display text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                activeGem === gem.id
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                  : isDark
                    ? 'bg-[#141414] text-neutral-300 hover:text-[#D4AF37]'
                    : 'bg-white text-stone-700 hover:text-[#B38728] border border-stone-200 shadow-sm'
              }`}
            >
              <Gem className="w-4 h-4" style={{ color: activeGem === gem.id ? '#000' : gem.color }} />
              <span>{gem.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Gemstone Card Feature Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-[8px] p-8 sm:p-12 border transition-all ${
              isDark
                ? 'bg-[#121212]/90 border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                : 'bg-white border-[#D4AF37]/30 shadow-[0_15px_35px_rgba(0,0,0,0.06)]'
            }`}
          >
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-display tracking-widest uppercase mb-4">
                <Sparkles className="w-3 h-3" />
                <span>SACRED GEMSTONE IDENTITY</span>
              </div>

              <h3 className={`font-display text-2xl sm:text-3xl lg:text-4xl tracking-[0.18em] uppercase font-light mb-2 ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                {currentGem.headline}
              </h3>
              <span className="font-serif italic text-lg text-[#D4AF37] mb-6 block">
                {currentGem.name}
              </span>

              <p className={`font-sans text-sm sm:text-base leading-relaxed mb-6 font-light ${
                isDark ? 'text-neutral-300' : 'text-stone-700'
              }`}>
                {currentGem.description}
              </p>

              <div className={`w-full p-4 rounded-[4px] mb-8 border ${
                isDark ? 'bg-[#1A1A1A] border-white/5' : 'bg-[#FAF8F5] border-stone-200'
              }`}>
                <span className="font-display text-[10px] tracking-widest text-[#D4AF37] uppercase block mb-1">
                  OLFACTORY PROFILE:
                </span>
                <span className={`font-serif italic text-sm ${
                  isDark ? 'text-white' : 'text-stone-900'
                }`}>
                  {currentGem.notes}
                </span>
              </div>

              <button
                onClick={() => onSelectProduct(currentGem.productId)}
                className="px-8 py-4 bg-[#D4AF37] text-black font-display text-xs tracking-[0.25em] font-semibold uppercase hover:bg-stone-900 hover:text-white transition-all rounded-[2px] flex items-center gap-3 cursor-pointer"
              >
                <span>EXPLORE {currentGem.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Image Display Stage (Frameless) */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div
                onClick={() => onSelectProduct(currentGem.productId)}
                className="relative w-full max-w-[400px] h-[380px] p-6 flex items-center justify-center group/gemimg cursor-pointer"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent opacity-20 group-hover/gemimg:opacity-50 group-hover/gemimg:scale-105 transition-all duration-500 pointer-events-none rounded-full blur-xl" />
                <img
                  src={currentGem.image}
                  alt={currentGem.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-500 ease-out group-hover/gemimg:scale-[1.03] group-hover/gemimg:-translate-y-1.5 animate-float"
                />
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

