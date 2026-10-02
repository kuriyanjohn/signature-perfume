import React from 'react';
import { motion } from 'framer-motion';
import { QUADRANT_EMBLEMS } from '../data/products';
import { Shield, Flame, Crown, Diamond } from 'lucide-react';

export default function QuadrantSection() {
  const getIcon = (id) => {
    switch (id) {
      case 'power': return <Shield className="w-8 h-8 text-[#D4AF37]" />;
      case 'passion': return <Flame className="w-8 h-8 text-[#D4AF37]" />;
      case 'regal': return <Crown className="w-8 h-8 text-[#D4AF37]" />;
      case 'purity': return <Diamond className="w-8 h-8 text-[#D4AF37]" />;
      default: return <Crown className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="quadrant" className="py-20 px-6 sm:px-10 md:px-12 border-b border-[#D4AF37]/20 relative z-20 transition-colors duration-500 bg-[#FAF8F5] text-stone-900">
      <div className="max-w-[1550px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {QUADRANT_EMBLEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="pt-8 md:pt-0 lg:px-6 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all bg-white shadow-sm border border-stone-200">
                {getIcon(item.id)}
              </div>

              <h3 className="font-display text-base tracking-[0.2em] uppercase font-medium mb-1 group-hover:text-[#D4AF37] transition-colors text-stone-900">
                {item.title}
              </h3>
              <p className="font-serif italic text-sm text-[#D4AF37] mb-2 font-light">
                {item.subtitle}
              </p>
              <p className="font-sans text-xs max-w-xs leading-relaxed font-light text-stone-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
