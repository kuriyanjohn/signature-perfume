import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { FRAGRANCES } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? []
    : FRAGRANCES.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.gemstone.toLowerCase().includes(q) ||
          item.notes.top.some(n => n.toLowerCase().includes(q)) ||
          item.notes.heart.some(n => n.toLowerCase().includes(q)) ||
          item.notes.base.some(n => n.toLowerCase().includes(q))
        );
      });

  const popularSearches = ['Oud', 'Musk', 'Rose', 'Bergamot', 'Amber', 'Sapphire', 'Diamond'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-start justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="bg-[#121212] rounded-[6px] max-w-2xl w-full p-6 sm:p-8 relative shadow-[0_25px_70px_rgba(0,0,0,0.95)] text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-neutral-400 hover:text-[#D4AF37] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 text-[#D4AF37] font-display text-xs tracking-[0.28em] uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            <span>SEARCH HAUTE PARFUM ARCHIVE</span>
          </div>

          {/* Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by fragrance name, note (Oud, Rose, Bergamot)..."
              className="w-full bg-[#1A1A1A] rounded-[4px] py-4 pl-12 pr-4 font-display text-sm text-white placeholder-neutral-500 focus:outline-none"
            />
          </div>

          {/* Popular Tag Pills */}
          {query.trim() === '' && (
            <div>
              <span className="font-display text-[10px] tracking-widest text-neutral-400 uppercase block mb-3">
                POPULAR SEARCHES:
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full bg-[#181818] text-neutral-300 font-display text-xs tracking-wider uppercase hover:text-[#D4AF37] transition-all cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {query.trim() !== '' && (
            <div className="max-h-[60vh] overflow-y-auto space-y-3">
              {filtered.length === 0 ? (
                <div className="text-center py-8 text-neutral-400 font-serif italic text-sm">
                  No Haute Parfums found matching "{query}".
                </div>
              ) : (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(item.id);
                    }}
                    className="p-3 bg-[#181818] rounded-[4px] flex items-center justify-between hover:bg-[#1C1C1C] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <img src={item.imageBox} alt={item.name} className="w-12 h-12 object-contain group-hover:scale-115 transition-transform duration-300" />
                      <div>
                        <h4 className="font-display text-sm uppercase text-white group-hover:text-[#D4AF37] transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-serif italic text-xs text-neutral-400 block">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs text-[#D4AF37] font-semibold">${item.price}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
