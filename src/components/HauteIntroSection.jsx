import React from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

export default function HauteIntroSection({ theme = 'dark' }) {
  const isDark = theme === 'dark';

  return (
    <section className={`min-h-[75vh] py-20 px-6 md:px-12 text-center relative z-20 flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${
      isDark
        ? 'bg-gradient-to-b from-[#0B0B0B] via-[#121110] to-[#0B0B0B] text-white'
        : 'bg-gradient-to-b from-[#FAF8F5] via-[#F4F0E8] to-[#FAF8F5] text-stone-900'
    }`}>
      
      {/* Background Subtle Monogram Watermark */}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[220px] font-bold pointer-events-none select-none ${
        isDark ? 'text-white/[0.015]' : 'text-stone-900/[0.03]'
      }`}>
        SIG
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Emblem Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-[#D4AF37] mb-6 bg-[#D4AF37]/5 border border-[#D4AF37]/25 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
        >
          <Gem className="w-5 h-5" />
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[#D4AF37] text-xs sm:text-sm tracking-[0.32em] uppercase mb-3 font-light"
        >
          HAUTE PARFUMERIE FRANÇAISE
        </motion.span>

        {/* Main Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`font-display text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.2em] mb-6 uppercase text-center ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}
        >
          THE SIGNATURE COLLECTION
        </motion.h2>

        {/* Gold Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />

        {/* Body Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`font-serif text-lg sm:text-2xl md:text-3xl leading-relaxed max-w-3xl mb-9 font-light italic text-center ${
            isDark ? 'text-neutral-200' : 'text-stone-700'
          }`}
        >
          Sillage d'Orient signature fragrances hold the names of precious stones and materials sought by kings and queens since the dawn of time. A celebration of unspoken connection and rare essences, crafted in France by masters of the perfuming craft.
        </motion.p>

        {/* Quote Badge */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-xs sm:text-sm md:text-base text-[#D4AF37] font-medium tracking-[0.3em] uppercase border-y border-[#D4AF37]/30 py-3.5 px-8 inline-block"
        >
          “To wear it, is to wield its power.”
        </motion.p>

      </div>
    </section>
  );
}

