import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_PILLARS } from '../data/products';
import { FlaskConical, Gem, Gift, Sparkles } from 'lucide-react';

export default function BrandPillarsSection() {
  const getIcon = (name) => {
    switch (name) {
      case 'FlaskConical': return <FlaskConical className="w-7 h-7 text-[#D4AF37]" />;
      case 'Gem': return <Gem className="w-7 h-7 text-[#D4AF37]" />;
      case 'Gift': return <Gift className="w-7 h-7 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-[#D4AF37]" />;
      default: return <Sparkles className="w-7 h-7 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 border-b border-[#D4AF37]/20 relative z-20 transition-colors duration-500 bg-[#F5F2EB] text-stone-900">
      <div className="max-w-[1550px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-[6px] p-8 flex flex-col items-start border transition-all group bg-white border-stone-200 hover:border-[#D4AF37]/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all">
                {getIcon(pillar.icon)}
              </div>

              <h3 className="font-display text-base tracking-[0.2em] uppercase font-medium mb-1 group-hover:text-[#D4AF37] transition-colors text-stone-900">
                {pillar.title}
              </h3>
              <span className="font-serif italic text-xs text-[#D4AF37] mb-3 block">
                {pillar.subtitle}
              </span>
              <p className="font-sans text-xs leading-relaxed font-light text-stone-600">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
