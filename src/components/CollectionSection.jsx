import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FRAGRANCES } from '../data/products';
import { Eye, ShoppingBag, Sparkles, Box, ShieldCheck } from 'lucide-react';

export default function CollectionSection({ onSelectProduct, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [displayMode, setDisplayMode] = useState('box'); // 'box' or 'bottle'

  const categories = [
    { id: 'ALL', label: 'ALL FRAGRANCES' },
    { id: 'USER', label: 'HAUTE FEATURED (OUD, MUSK, ROSE)' },
    { id: 'Gemstone Series', label: 'GEMSTONE SERIES' },
    { id: 'Golden Reserve', label: 'GOLDEN RESERVE' }
  ];

  const filteredProducts = FRAGRANCES.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'USER') return item.userProvided;
    return item.category === selectedCategory;
  });

  return (
    <section id="collection" className="py-20 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#0B0B0B] relative z-20">
      <div className="max-w-[1550px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="font-display text-xs sm:text-sm tracking-[0.32em] text-[#D4AF37] uppercase mb-2 block font-light">
            THE SIGNATURE PARFUMS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-[0.2em] uppercase">
            DISCOVER YOUR STONE
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Filters & View Switcher Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-display text-[10px] sm:text-[11px] tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#181818] text-neutral-300 hover:text-[#D4AF37]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image View Mode Toggle (Bottle vs Full Box Set) */}
          <div className="flex items-center gap-2 bg-[#181818] p-1.5 rounded-full shrink-0">
            <span className="font-display text-[9px] tracking-widest text-neutral-400 px-2 uppercase">VIEW:</span>
            <button
              onClick={() => setDisplayMode('box')}
              className={`px-3.5 py-1.5 rounded-full font-display text-[10px] tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                displayMode === 'box'
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>BOX SET</span>
            </button>
            <button
              onClick={() => setDisplayMode('bottle')}
              className={`px-3.5 py-1.5 rounded-full font-display text-[10px] tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                displayMode === 'bottle'
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>FLACON ONLY</span>
            </button>
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {filteredProducts.map((product, idx) => {
            const currentImg = displayMode === 'bottle' ? product.imageBottle : product.imageBox;
            const alternateImg = displayMode === 'bottle' ? product.imageBox : product.imageBottle;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-gradient-to-b from-[#141414] via-[#101010] to-[#0A0A0A] rounded-[10px] p-6 flex flex-col justify-between hover:bg-[#161616] shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.18)] transition-all duration-500 overflow-hidden h-full cursor-pointer"
              >
                {/* Top Subtle Gold Accent Illuminating Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* User Provided Badge / Category Badge */}
                <div className="flex items-center justify-between mb-4 z-10">
                  <span className="font-display text-[9px] tracking-[0.25em] text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1 rounded-full uppercase">
                    {product.badge}
                  </span>
                  {product.userProvided && (
                    <span className="font-display text-[9px] tracking-widest text-[#D4AF37] flex items-center gap-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3 text-[#D4AF37]" /> HAUTE EDITION
                    </span>
                  )}
                </div>

                {/* Product Image Stage (Frameless) */}
                <div
                  onClick={() => onSelectProduct(product.id)}
                  className="relative w-full h-[330px] p-4 flex items-center justify-center my-2 group/img overflow-hidden rounded-[8px] transition-all duration-500"
                >
                  {/* Glowing Aura Halo on Mouseover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/25 via-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none rounded-full blur-2xl" />

                  {/* Primary Product Image */}
                  <img
                    src={currentImg}
                    alt={product.name}
                    className="max-h-[92%] max-w-[92%] object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                  />

                  {/* Quick Explore Scent Floating Button on Hover */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <button className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-black font-display text-[10px] tracking-[0.25em] font-semibold uppercase shadow-xl flex items-center gap-1.5 whitespace-nowrap hover:bg-white transition-all">
                      <Eye className="w-3.5 h-3.5" />
                      <span>EXPLORE SCENT</span>
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="pt-3 text-center flex flex-col items-center flex-1 justify-between z-10">
                  <div className="flex flex-col items-center">
                    <span className="font-serif italic text-xs text-[#D4AF37] mb-1">
                      {product.gemstone}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl tracking-[0.22em] text-white uppercase group-hover:text-[#D4AF37] transition-colors mb-1 font-normal">
                      {product.name}
                    </h3>
                    <p className="font-sans text-[11px] text-neutral-400 tracking-widest uppercase mb-4">
                      EAU DE PARFUM • 100 ML + 15 ML
                    </p>
                  </div>

                  <div className="w-full flex items-center justify-between pt-4 mt-auto border-t border-white/5">
                    <span className="font-display text-lg sm:text-xl tracking-wider text-white font-medium">
                      ${product.price}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="px-4.5 py-2.5 rounded-[2px] bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-display text-[10px] tracking-[0.2em] font-semibold uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>ADD TO BAG</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
