import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function EmotionalSpectrumSection({ onSelectProduct }) {
  const emotions = [
    { id: 'oud', title: 'OUD', subtitle: 'Mystic Allure', image: '/images/products/oud-set.png', color: '#D4AF37' },
    { id: 'rose', title: 'ROSE', subtitle: 'Eternal Romance', image: '/images/products/rose-set.png', color: '#E6A8A8' },
    { id: 'musk', title: 'MUSK', subtitle: 'Sensual Elegance', image: '/images/products/musk-set.png', color: '#F5E6C8' },
    { id: 'ambre', title: 'AMBRE', subtitle: 'Warm Radiance', image: '/images/products/oud-set.png', color: '#C5A059' },
    { id: 'jade', title: 'JADE', subtitle: 'Serene Majesty', image: '/images/products/musk-bottle.png', color: '#A8E6CF' },
    { id: 'diamond', title: 'DIAMOND', subtitle: 'Brilliant Perfection', image: '/images/products/musk-set.png', color: '#E2F0D9' },
  ];

  return (
    <section id="emotions" className="py-24 px-6 md:px-12 border-b border-[#D4AF37]/20 relative z-20 transition-colors duration-500 bg-[#F5F2EB] text-stone-900">
      <div className="max-w-[1550px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs sm:text-sm tracking-[0.32em] text-[#D4AF37] uppercase mb-3 block font-light flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE EMOTIONAL SPECTRUM</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.2em] uppercase text-stone-900">
            A FRAGRANCE FOR EVERY EMOTION
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-5" />
        </div>

        {/* Emotion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {emotions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => onSelectProduct(item.id)}
              className="group relative rounded-[6px] p-6 flex flex-col items-center text-center cursor-pointer border transition-all duration-400 overflow-hidden h-full justify-between bg-white border-stone-200 hover:border-[#D4AF37]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Image Container */}
              <div className="relative w-full h-[270px] p-4 flex items-center justify-center mb-6 overflow-hidden group/emoimg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 pointer-events-none rounded-full blur-xl" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[90%] max-w-[90%] object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1"
                />
              </div>

              <div className="flex flex-col items-center flex-1 justify-between">
                <div>
                  <h3 className="font-display text-xl tracking-[0.22em] uppercase font-medium group-hover:text-[#D4AF37] transition-colors mb-1 text-stone-900">
                    {item.title}
                  </h3>
                  <p className="font-serif italic text-sm text-[#D4AF37] mb-4 font-light">
                    {item.subtitle}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 font-display text-[10px] tracking-[0.25em] group-hover:text-[#D4AF37] uppercase font-medium transition-colors pb-1 mt-auto text-stone-900">
                  <span>DISCOVER SCENT</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
