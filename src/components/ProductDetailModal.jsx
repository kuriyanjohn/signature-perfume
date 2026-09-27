import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Star, ShieldCheck, Sparkles, Check, Heart } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  const [activeImageMode, setActiveImageMode] = useState('box');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!product) return null;

  const displayImage = activeImageMode === 'box' ? product.imageBox : product.imageBottle;

  const handleAdd = () => {
    onAddToCart(product);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="bg-[#121212] rounded-[8px] max-w-5xl w-full my-auto overflow-hidden relative shadow-[0_25px_70px_rgba(0,0,0,0.95)] text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 text-neutral-300 hover:text-[#D4AF37] transition-all cursor-pointer"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Image Showcase Column (Frameless) */}
            <div className="lg:col-span-6 bg-[#141414]/90 p-6 sm:p-10 flex flex-col justify-between items-center relative min-h-[400px]">
              
              {/* Badge */}
              <div className="w-full flex items-center justify-between z-10">
                <span className="font-display text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                  {product.badge}
                </span>
                
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 rounded-full transition-all cursor-pointer ${
                    isWishlisted ? 'text-red-500 bg-red-500/10' : 'text-neutral-400 hover:text-white bg-black/40'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Main Image Frameless with Luxury Mouseover */}
              <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center my-4 group/modalimg cursor-pointer">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/35 via-[#D4AF37]/10 to-transparent opacity-30 group-hover/modalimg:opacity-100 group-hover/modalimg:scale-125 transition-all duration-700 pointer-events-none rounded-full blur-2xl" />
                <img
                  src={displayImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out group-hover/modalimg:scale-112 group-hover/modalimg:-translate-y-3 group-hover/modalimg:rotate-1 group-hover/modalimg:drop-shadow-[0_30px_55px_rgba(212,175,55,0.45)] animate-float"
                />
              </div>

              {/* Image View Mode Switcher */}
              <div className="flex items-center gap-3 z-10 bg-black/80 p-1.5 rounded-full">
                <button
                  onClick={() => setActiveImageMode('box')}
                  className={`px-3 py-1 rounded-full font-display text-[10px] tracking-widest uppercase transition-all cursor-pointer ${
                    activeImageMode === 'box'
                      ? 'bg-[#D4AF37] text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  FULL BOX SET
                </button>
                <button
                  onClick={() => setActiveImageMode('bottle')}
                  className={`px-3 py-1 rounded-full font-display text-[10px] tracking-widest uppercase transition-all cursor-pointer ${
                    activeImageMode === 'bottle'
                      ? 'bg-[#D4AF37] text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  FLACON ONLY
                </button>
              </div>

            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
              
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#D4AF37] font-display text-xs tracking-[0.28em] uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{product.category}</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl tracking-[0.2em] text-white uppercase font-normal mb-1">
                  {product.name}
                </h2>
                
                <span className="font-serif italic text-base text-[#D4AF37] block mb-4">
                  {product.subtitle}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex items-center text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 font-sans">
                    {product.rating} ({product.reviewsCount} Master Reviews)
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
                  {product.description}
                </p>

                {/* Olfactory Notes Pyramid */}
                <div className="bg-[#181818] rounded-[6px] p-4 sm:p-5 mb-6 space-y-3">
                  <span className="font-display text-xs tracking-[0.25em] text-[#D4AF37] uppercase block pb-2">
                    OLFACTORY PYRAMID
                  </span>

                  <div className="text-xs space-y-2">
                    <div>
                      <span className="font-display text-[10px] text-neutral-400 tracking-wider uppercase block">TOP NOTES:</span>
                      <span className="font-serif italic text-white text-sm">
                        {product.notes.top.join(' • ')}
                      </span>
                    </div>

                    <div>
                      <span className="font-display text-[10px] text-neutral-400 tracking-wider uppercase block">HEART NOTES:</span>
                      <span className="font-serif italic text-white text-sm">
                        {product.notes.heart.join(' • ')}
                      </span>
                    </div>

                    <div>
                      <span className="font-display text-[10px] text-neutral-400 tracking-wider uppercase block">BASE NOTES:</span>
                      <span className="font-serif italic text-white text-sm">
                        {product.notes.base.join(' • ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-sans text-neutral-400">
                  <div className="bg-[#181818] p-3 rounded-[4px]">
                    <span className="text-[10px] text-[#D4AF37] font-display tracking-widest uppercase block mb-0.5">SILLAGE LONGEVITY</span>
                    <span className="text-white font-medium">{product.sillageRating}</span>
                  </div>
                  <div className="bg-[#181818] p-3 rounded-[4px]">
                    <span className="text-[10px] text-[#D4AF37] font-display tracking-widest uppercase block mb-0.5">IDEAL SEASON</span>
                    <span className="text-white font-medium">{product.season}</span>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-display text-2xl tracking-wider text-white font-semibold">
                      ${product.price}
                    </span>
                    <span className="font-sans text-[10px] text-neutral-400 block">
                      Includes 100ml EDP + 15ml Travel Spray Set
                    </span>
                  </div>

                  <span className="font-display text-[10px] tracking-widest text-[#D4AF37] uppercase flex items-center gap-1 bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" /> FREE EXPRESS SHIPPING
                  </span>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={addedSuccess}
                  className={`w-full py-4 rounded-[2px] font-display text-xs tracking-[0.25em] font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    addedSuccess
                      ? 'bg-green-600 text-white'
                      : 'bg-[#D4AF37] text-black hover:bg-white shadow-[0_0_25px_rgba(212,175,55,0.4)]'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO SILLAGE BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO SILLAGE BAG • ${product.price}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
