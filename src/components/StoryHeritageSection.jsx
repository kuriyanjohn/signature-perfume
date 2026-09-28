import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, History } from 'lucide-react';

export default function StoryHeritageSection({ theme = 'dark' }) {
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <>
      <section id="story" className={`w-full border-b border-[#D4AF37]/20 overflow-hidden relative z-20 transition-colors duration-500 ${
        isDark ? 'bg-[#0B0B0B] text-white' : 'bg-[#FAF8F5] text-stone-900'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[550px]">
          
          {/* Left Column: Visual Showcase */}
          <div className={`relative flex items-center justify-center p-8 sm:p-12 min-h-[400px] lg:min-h-full overflow-hidden ${
            isDark ? 'bg-[#141414]/60' : 'bg-[#F4F0E8]'
          }`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent pointer-events-none" />

            <div className="relative w-full max-w-[420px] h-[380px] sm:h-[440px] flex items-center justify-center group/storyimg cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/35 via-[#D4AF37]/10 to-transparent opacity-30 group-hover/storyimg:opacity-100 group-hover/storyimg:scale-125 transition-all duration-700 pointer-events-none rounded-full blur-2xl" />
              <img
                src="/images/products/rose-set.png"
                alt="Signature Heritage Perfume Set"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-700 ease-out group-hover/storyimg:scale-115 group-hover/storyimg:-translate-y-4"
              />
            </div>
          </div>

          {/* Right Column: Story Content */}
          <div className={`flex flex-col justify-center items-center text-center p-8 sm:p-14 lg:p-20 ${
            isDark
              ? 'bg-gradient-to-br from-[#121110] to-[#0B0B0B]'
              : 'bg-gradient-to-br from-[#FFFFFF] to-[#FAF8F5]'
          }`}>
            <div className="max-w-md flex flex-col items-center">
              
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#D4AF37] mb-6 bg-[#D4AF37]/5">
                <Sparkles className="w-4 h-4" />
              </div>

              <span className="font-display text-xs tracking-[0.3em] text-[#D4AF37] uppercase mb-3">
                PARISIAN KNOW-HOW & ORIENTAL SOUL
              </span>

              <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] uppercase font-normal mb-6 leading-tight ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                A HERITAGE OF<br />SOPHISTICATION
              </h2>

              <div className="w-16 h-[1px] bg-[#D4AF37] mb-6" />

              <p className={`font-serif italic text-base sm:text-lg leading-relaxed mb-8 font-light ${
                isDark ? 'text-neutral-300' : 'text-stone-700'
              }`}>
                Sillage d'Orient is born from the meeting of French savoir-faire and the richness of Oriental inspiration. Each fragrance is a jewel, crafted with the finest ingredients by masters of perfumery in France.
              </p>

              <button
                onClick={() => setStoryModalOpen(true)}
                className={`font-display text-xs tracking-[0.25em] uppercase text-[#D4AF37] transition-colors font-medium border-b border-[#D4AF37] pb-1 cursor-pointer ${
                  isDark ? 'hover:text-white' : 'hover:text-stone-900'
                }`}
              >
                READ THE STORY
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* Story Modal */}
      <AnimatePresence>
        {storyModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`rounded-[8px] p-8 sm:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-left ${
                isDark ? 'bg-[#141414] text-white' : 'bg-white text-stone-900 border border-stone-200'
              }`}
            >
              <button
                onClick={() => setStoryModalOpen(false)}
                className={`absolute top-6 right-6 transition-colors ${
                  isDark ? 'text-neutral-400 hover:text-[#D4AF37]' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2 text-[#D4AF37] font-display text-xs tracking-[0.3em] uppercase mb-2">
                <History className="w-4 h-4" />
                <span>THE ARCHIVES</span>
              </div>

              <h2 className={`font-display text-2xl sm:text-3xl tracking-[0.2em] uppercase mb-4 ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                THE SILLAGE D'ORIENT STORY
              </h2>

              <div className="w-20 h-[1px] bg-[#D4AF37] mb-6" />

              <div className={`space-y-4 font-sans text-sm leading-relaxed font-light ${
                isDark ? 'text-neutral-300' : 'text-stone-700'
              }`}>
                <p>
                  Rooted in Grasse and Paris, Sillage d'Orient was conceived as a bridge between two historic perfumery traditions: the timeless romance of French Haute Parfumerie and the opulent, resinous warmth of Oriental incense and precious wood oils.
                </p>
                <p>
                  Every flacon is crowned with heavy gold accents, encapsulating pure Eau de Parfum formulations created with 25%+ fragrance oil concentrations for extraordinary longevity and sillage.
                </p>
                <p className="font-serif italic text-base text-[#D4AF37] pt-2">
                  "Sillage" refers to the evocative scent trail left in the air when a person walks past — an invisible, unforgettable signature.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex justify-end">
                <button
                  onClick={() => setStoryModalOpen(false)}
                  className="px-6 py-2.5 bg-[#D4AF37] text-black font-display text-xs tracking-[0.2em] uppercase font-semibold rounded-[2px]"
                >
                  CLOSE STORY
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

