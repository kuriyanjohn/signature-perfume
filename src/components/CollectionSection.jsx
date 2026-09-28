import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FRAGRANCES } from '../data/products';
import { Eye, ShoppingBag, ShieldCheck, SlidersHorizontal, Filter, X, RefreshCw } from 'lucide-react';

export default function CollectionSection({ onSelectProduct, onAddToCart, theme = 'dark', filterPanelOpen, setFilterPanelOpen }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedNote, setSelectedNote] = useState('ALL');
  const [selectedPrice, setSelectedPrice] = useState('ALL');
  const [sortBy, setSortBy] = useState('DEFAULT');
  const [localFilterOpen, setLocalFilterOpen] = useState(false);

  const isDark = theme === 'dark';
  const showFilterPanel = filterPanelOpen !== undefined ? filterPanelOpen : localFilterOpen;
  const toggleFilterPanel = () => {
    if (setFilterPanelOpen) {
      setFilterPanelOpen(!filterPanelOpen);
    } else {
      setLocalFilterOpen(!localFilterOpen);
    }
  };

  const categories = [
    { id: 'ALL', label: 'ALL FRAGRANCES' },
    { id: 'USER', label: 'HAUTE FEATURED' },
    { id: 'Gemstone Series', label: 'GEMSTONE SERIES' },
    { id: 'Golden Reserve', label: 'GOLDEN RESERVE' }
  ];

  const notesList = [
    { id: 'ALL', label: 'ALL SCENT NOTES' },
    { id: 'Oud', label: 'AGARWOOD / OUD' },
    { id: 'Musk', label: 'WHITE MUSK' },
    { id: 'Rose', label: 'ROYAL ROSE' },
    { id: 'Amber', label: 'GOLDEN AMBER' },
    { id: 'Bergamot', label: 'CITRUS & BERGAMOT' },
    { id: 'Sandalwood', label: 'SANDALWOOD & CEDAR' }
  ];

  const priceRanges = [
    { id: 'ALL', label: 'ALL PRICES' },
    { id: 'UNDER_320', label: 'UNDER $320' },
    { id: '320_340', label: '$320 - $340' },
    { id: 'ABOVE_340', label: 'ABOVE $340' }
  ];

  // Calculate active filter count
  let activeFiltersCount = 0;
  if (selectedCategory !== 'ALL') activeFiltersCount++;
  if (selectedNote !== 'ALL') activeFiltersCount++;
  if (selectedPrice !== 'ALL') activeFiltersCount++;

  const resetAllFilters = () => {
    setSelectedCategory('ALL');
    setSelectedNote('ALL');
    setSelectedPrice('ALL');
    setSortBy('DEFAULT');
  };

  // Filter logic
  const filteredProducts = FRAGRANCES.filter((item) => {
    if (selectedCategory !== 'ALL') {
      if (selectedCategory === 'USER' && !item.userProvided) return false;
      if (selectedCategory !== 'USER' && item.category !== selectedCategory) return false;
    }
    if (selectedNote !== 'ALL') {
      const notesString = [
        ...(item.notes?.top || []),
        ...(item.notes?.heart || []),
        ...(item.notes?.base || []),
        item.description,
        item.gemstone,
        item.subtitle
      ].join(' ').toLowerCase();
      if (!notesString.includes(selectedNote.toLowerCase())) return false;
    }
    if (selectedPrice !== 'ALL') {
      if (selectedPrice === 'UNDER_320' && item.price >= 320) return false;
      if (selectedPrice === '320_340' && (item.price < 320 || item.price > 340)) return false;
      if (selectedPrice === 'ABOVE_340' && item.price <= 340) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'PRICE_LOW') return a.price - b.price;
    if (sortBy === 'PRICE_HIGH') return b.price - a.price;
    if (sortBy === 'RATING') return b.rating - a.rating;
    return 0;
  });

  return (
    <section id="collection" className={`py-20 sm:py-24 px-4 sm:px-8 md:px-12 relative z-20 transition-colors duration-500 ${
      isDark ? 'bg-[#0B0B0B] text-white' : 'bg-[#FAF8F5] text-stone-900'
    }`}>
      <div className="max-w-[1550px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="font-display text-xs sm:text-sm tracking-[0.32em] text-[#D4AF37] uppercase mb-2 block font-light">
            THE SIGNATURE PARFUMS
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.2em] uppercase ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            DISCOVER YOUR STONE
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Filters Trigger & Sorting Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D4AF37]/20">
          
          {/* Left: Product Filter Toggle Button with Icon */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={toggleFilterPanel}
              className={`px-5 py-2.5 rounded-full font-display text-xs tracking-[0.2em] uppercase flex items-center gap-2.5 transition-all cursor-pointer ${
                showFilterPanel || activeFiltersCount > 0
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : isDark
                    ? 'bg-[#181818] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                    : 'bg-white border border-[#D4AF37]/40 text-[#967117] hover:bg-[#D4AF37] hover:text-black shadow-sm'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>PRODUCT FILTERS</span>
              {activeFiltersCount > 0 && (
                <span className="bg-black text-white rounded-full w-5 h-5 text-[10px] flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Products count indicator */}
            <span className={`font-serif italic text-xs sm:text-sm ${
              isDark ? 'text-neutral-400' : 'text-stone-600'
            }`}>
              Showing {filteredProducts.length} of {FRAGRANCES.length} Parfums
            </span>
          </div>

          {/* Right: Sorting */}
          <div className="flex items-center gap-2">
            <span className={`font-display text-[10px] tracking-widest uppercase ${
              isDark ? 'text-neutral-400' : 'text-stone-600'
            }`}>SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-2 rounded-full font-display text-[10px] tracking-wider uppercase border cursor-pointer outline-none transition-colors ${
                isDark
                  ? 'bg-[#181818] border-[#D4AF37]/30 text-white'
                  : 'bg-white border-[#D4AF37]/40 text-stone-900 shadow-sm'
              }`}
            >
              <option value="DEFAULT" className={isDark ? 'bg-[#181818] text-white' : 'bg-white text-stone-900'}>FEATURED</option>
              <option value="PRICE_LOW" className={isDark ? 'bg-[#181818] text-white' : 'bg-white text-stone-900'}>PRICE: LOW TO HIGH</option>
              <option value="PRICE_HIGH" className={isDark ? 'bg-[#181818] text-white' : 'bg-white text-stone-900'}>PRICE: HIGH TO LOW</option>
              <option value="RATING" className={isDark ? 'bg-[#181818] text-white' : 'bg-white text-stone-900'}>HIGHEST RATED</option>
            </select>
          </div>

        </div>

        {/* Expandable Product Filter Drawer Panel */}
        <AnimatePresence>
          {showFilterPanel && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`rounded-[10px] p-6 mb-10 border transition-all overflow-hidden ${
                isDark
                  ? 'bg-[#121212] border-[#D4AF37]/30 shadow-[0_15px_35px_rgba(0,0,0,0.7)]'
                  : 'bg-white border-[#D4AF37]/40 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D4AF37]/20">
                <div className="flex items-center gap-2 text-[#D4AF37] font-display text-xs tracking-[0.25em] uppercase font-medium">
                  <Filter className="w-4 h-4" />
                  <span>FILTER COLLECTION BY ATTRIBUTES</span>
                </div>

                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetAllFilters}
                    className="text-xs font-display tracking-widest text-[#D4AF37] hover:underline flex items-center gap-1 uppercase cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>RESET ALL FILTERS</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Filter 1: Category */}
                <div>
                  <span className={`font-display text-[10px] tracking-widest uppercase block mb-3 font-semibold ${
                    isDark ? 'text-neutral-300' : 'text-stone-700'
                  }`}>
                    COLLECTION CATEGORY:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-full font-display text-[10px] tracking-wider uppercase transition-all cursor-pointer ${
                          selectedCategory === cat.id
                            ? 'bg-[#D4AF37] text-black font-semibold'
                            : isDark
                              ? 'bg-[#1A1A1A] text-neutral-300 hover:text-[#D4AF37] border border-white/5'
                              : 'bg-stone-100 text-stone-700 hover:text-[#B38728] border border-stone-200'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter 2: Scent Notes */}
                <div>
                  <span className={`font-display text-[10px] tracking-widest uppercase block mb-3 font-semibold ${
                    isDark ? 'text-neutral-300' : 'text-stone-700'
                  }`}>
                    KEY OLFACTORY NOTES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {notesList.map((note) => (
                      <button
                        key={note.id}
                        onClick={() => setSelectedNote(note.id)}
                        className={`px-3 py-1.5 rounded-full font-display text-[10px] tracking-wider uppercase transition-all cursor-pointer ${
                          selectedNote === note.id
                            ? 'bg-[#D4AF37] text-black font-semibold'
                            : isDark
                              ? 'bg-[#1A1A1A] text-neutral-300 hover:text-[#D4AF37] border border-white/5'
                              : 'bg-stone-100 text-stone-700 hover:text-[#B38728] border border-stone-200'
                        }`}
                      >
                        {note.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter 3: Price Range */}
                <div>
                  <span className={`font-display text-[10px] tracking-widest uppercase block mb-3 font-semibold ${
                    isDark ? 'text-neutral-300' : 'text-stone-700'
                  }`}>
                    PRICE RANGE:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((price) => (
                      <button
                        key={price.id}
                        onClick={() => setSelectedPrice(price.id)}
                        className={`px-3 py-1.5 rounded-full font-display text-[10px] tracking-wider uppercase transition-all cursor-pointer ${
                          selectedPrice === price.id
                            ? 'bg-[#D4AF37] text-black font-semibold'
                            : isDark
                              ? 'bg-[#1A1A1A] text-neutral-300 hover:text-[#D4AF37] border border-white/5'
                              : 'bg-stone-100 text-stone-700 hover:text-[#B38728] border border-stone-200'
                        }`}
                      >
                        {price.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Active Filter Tags */}
              {activeFiltersCount > 0 && (
                <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex flex-wrap items-center gap-2">
                  <span className="font-display text-[10px] tracking-wider uppercase text-neutral-400">ACTIVE FILTERS:</span>
                  {selectedCategory !== 'ALL' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] font-display text-[10px] tracking-wider uppercase">
                      Category: {selectedCategory}
                      <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedCategory('ALL')} />
                    </span>
                  )}
                  {selectedNote !== 'ALL' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] font-display text-[10px] tracking-wider uppercase">
                      Note: {selectedNote}
                      <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedNote('ALL')} />
                    </span>
                  )}
                  {selectedPrice !== 'ALL' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] font-display text-[10px] tracking-wider uppercase">
                      Price: {selectedPrice}
                      <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedPrice('ALL')} />
                    </span>
                  )}
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Cards Grid - Background Same as Website's Section Color */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#121212]/50 rounded-[10px] border border-[#D4AF37]/20 my-6">
            <Filter className="w-10 h-10 text-[#D4AF37] mx-auto mb-4 opacity-60" />
            <h3 className="font-display text-xl tracking-widest uppercase text-white mb-2">NO MATCHING FRAGRANCES FOUND</h3>
            <p className="font-serif italic text-neutral-400 mb-6">Try adjusting your filter selection or clear filters to view the full collection.</p>
            <button
              onClick={resetAllFilters}
              className="px-6 py-3 bg-[#D4AF37] text-black font-display text-xs tracking-widest uppercase font-semibold rounded-[2px]"
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {filteredProducts.map((product, idx) => {
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className={`group relative rounded-[12px] p-6 flex flex-col justify-between transition-all duration-500 overflow-hidden h-full cursor-pointer ${
                    isDark
                      ? 'bg-[#0B0B0B] hover:shadow-[0_20px_50px_rgba(212,175,55,0.22)]'
                      : 'bg-[#FAF8F5] hover:shadow-[0_18px_40px_rgba(212,175,55,0.18)]'
                  }`}
                >
                  {/* Top Gold Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badges */}
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
                    className="relative w-full h-[320px] p-4 flex items-center justify-center my-2 group/img overflow-hidden rounded-[8px] transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/25 via-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none rounded-full blur-2xl" />

                    <img
                      src={product.imageBox}
                      alt={product.name}
                      className="max-h-[92%] max-w-[92%] object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                    />

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      <button className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-black font-display text-[10px] tracking-[0.25em] font-semibold uppercase shadow-xl flex items-center gap-1.5 whitespace-nowrap hover:bg-stone-900 hover:text-white transition-all">
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
                      <h3 className={`font-display text-lg sm:text-xl tracking-[0.22em] uppercase group-hover:text-[#D4AF37] transition-colors mb-1 font-normal ${
                        isDark ? 'text-white' : 'text-stone-900'
                      }`}>
                        {product.name}
                      </h3>
                      <p className={`font-sans text-[11px] tracking-widest uppercase mb-4 ${
                        isDark ? 'text-neutral-400' : 'text-stone-500'
                      }`}>
                        EAU DE PARFUM • 100 ML + 15 ML
                      </p>
                    </div>

                    <div className="w-full flex items-center justify-between pt-4 mt-auto border-t border-[#D4AF37]/15">
                      <span className={`font-display text-lg sm:text-xl tracking-wider font-medium ${
                        isDark ? 'text-white' : 'text-stone-900'
                      }`}>
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
        )}

      </div>
    </section>
  );
}


