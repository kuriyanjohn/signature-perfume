import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingBag,
  Star,
  ShieldCheck,
  Sparkles,
  Check,
  Heart,
} from 'lucide-react';

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
}) {
  const [activeImageMode, setActiveImageMode] = useState('box');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!product) return null;

  const displayImage =
    activeImageMode === 'box'
      ? product.imageBox
      : product.imageBottle;

  const handleAdd = () => {
    onAddToCart(product);
    setAddedSuccess(true);

    setTimeout(() => {
      setAddedSuccess(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[oklch(0.12_0.03_138.33_/_0.55)] backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 10 }}
          transition={{ duration: 0.3 }}
          className="
            bg-[#F8FAF6]
            rounded-[10px]
            max-w-5xl
            w-full
            my-auto
            overflow-hidden
            relative
            shadow-[0_25px_70px_rgba(20,45,25,0.25)]
            text-[#263326]
            border
            border-[oklch(0.3_0.08_138.33_/_0.25)]
          "
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute
              top-4
              right-4
              z-30
              p-2.5
              rounded-full
              bg-white/90
              border
              border-[oklch(0.3_0.08_138.33_/_0.20)]
              text-[#667066]
              hover:text-[oklch(0.3_0.08_138.33)]
              hover:bg-[oklch(0.94_0.03_138.33)]
              transition-all
              cursor-pointer
              shadow-sm
            "
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* IMAGE SHOWCASE */}

            <div
              className="
                lg:col-span-6
                bg-gradient-to-b
                from-[#F1F5ED]
                via-[#F8FAF6]
                to-[#E9F0E5]
                p-6
                sm:p-10
                flex
                flex-col
                justify-between
                items-center
                relative
                min-h-[400px]
                border-b
                lg:border-b-0
                lg:border-r
                border-[oklch(0.3_0.08_138.33_/_0.18)]
              "
            >

              {/* Green Glow */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className="
                    absolute
                    w-72
                    h-72
                    bg-[oklch(0.3_0.08_138.33_/_0.12)]
                    rounded-full
                    blur-3xl
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                />
              </div>

              {/* Badge + Wishlist */}
              <div className="w-full flex items-center justify-between z-10">

                <span
                  className="
                    font-display
                    text-[9px]
                    tracking-[0.25em]
                    text-[oklch(0.3_0.08_138.33)]
                    uppercase
                    bg-[oklch(0.3_0.08_138.33_/_0.08)]
                    border
                    border-[oklch(0.3_0.08_138.33_/_0.20)]
                    px-3
                    py-1
                    rounded-full
                  "
                >
                  {product.badge}
                </span>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`
                    p-2
                    rounded-full
                    transition-all
                    cursor-pointer
                    border
                    ${isWishlisted
                      ? 'text-red-500 bg-red-50 border-red-200'
                      : 'text-[#7A8378] hover:text-[oklch(0.3_0.08_138.33)] bg-white/80 border-[oklch(0.3_0.08_138.33_/_0.20)]'
                    }
                  `}
                >
                  <Heart
                    className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''
                      }`}
                  />
                </button>
              </div>

              {/* Product Image */}
              <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center my-4 group/modalimg cursor-pointer z-10">

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
                    from-[oklch(0.3_0.08_138.33_/_0.25)]
                    via-[oklch(0.3_0.08_138.33_/_0.08)]
                    to-transparent
                    opacity-40
                    group-hover/modalimg:opacity-80
                    group-hover/modalimg:scale-125
                    transition-all
                    duration-700
                    pointer-events-none
                    rounded-full
                    blur-2xl
                  "
                />

                <img
                  src={displayImage}
                  alt={product.name}
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                    filter
                    drop-shadow-[0_20px_30px_rgba(30,50,30,0.25)]
                    transition-all
                    duration-700
                    ease-out
                    group-hover/modalimg:scale-105
                    group-hover/modalimg:-translate-y-3
                    group-hover/modalimg:rotate-1
                    group-hover/modalimg:drop-shadow-[0_30px_50px_rgba(45,75,45,0.35)]
                    animate-float
                  "
                />
              </div>

              {/* Image Switcher */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  z-10
                  bg-white/90
                  p-1.5
                  rounded-full
                  border
                  border-[oklch(0.3_0.08_138.33_/_0.20)]
                  shadow-sm
                "
              >

                <button
                  onClick={() => setActiveImageMode('box')}
                  className={`
                    px-3
                    py-1.5
                    rounded-full
                    font-display
                    text-[10px]
                    tracking-widest
                    uppercase
                    transition-all
                    cursor-pointer
                    ${activeImageMode === 'box'
                      ? 'bg-[oklch(0.3_0.08_138.33)] text-white font-bold shadow-sm'
                      : 'text-[#697269] hover:text-[oklch(0.3_0.08_138.33)]'
                    }
                  `}
                >
                  FULL BOX SET
                </button>

                <button
                  onClick={() => setActiveImageMode('bottle')}
                  className={`
                    px-3
                    py-1.5
                    rounded-full
                    font-display
                    text-[10px]
                    tracking-widest
                    uppercase
                    transition-all
                    cursor-pointer
                    ${activeImageMode === 'bottle'
                      ? 'bg-[oklch(0.3_0.08_138.33)] text-white font-bold shadow-sm'
                      : 'text-[#697269] hover:text-[oklch(0.3_0.08_138.33)]'
                    }
                  `}
                >
                  FLACON ONLY
                </button>

              </div>
            </div>

            {/* DETAILS */}

            <div
              className="
                lg:col-span-6
                p-6
                sm:p-10
                flex
                flex-col
                justify-between
                max-h-[85vh]
                overflow-y-auto
                bg-white
              "
            >

              <div>

                {/* Category */}
                <div className="flex items-center gap-2 mb-2 text-[oklch(0.3_0.08_138.33)] font-display text-xs tracking-[0.28em] uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{product.category}</span>
                </div>

                {/* Product Name */}
                <h2
                  className="
                    font-display
                    text-2xl
                    sm:text-3xl
                    tracking-[0.2em]
                    text-[#263326]
                    uppercase
                    font-normal
                    mb-1
                  "
                >
                  {product.name}
                </h2>

                {/* Subtitle */}
                <span className="font-serif italic text-base text-[oklch(0.3_0.08_138.33)] block mb-4">
                  {product.subtitle}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-5">

                  <div className="flex items-center text-[oklch(0.3_0.08_138.33)]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-current"
                      />
                    ))}
                  </div>

                  <span className="text-xs text-[#7A8378] font-sans">
                    {product.rating} ({product.reviewsCount} Master Reviews)
                  </span>

                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#5D675E] leading-relaxed font-light mb-6">
                  {product.description}
                </p>

                {/* Olfactory Pyramid */}
                <div
                  className="
                    bg-[#F1F5ED]
                    rounded-[6px]
                    p-4
                    sm:p-5
                    mb-6
                    space-y-3
                    border
                    border-[oklch(0.3_0.08_138.33_/_0.15)]
                  "
                >

                  <span
                    className="
                      font-display
                      text-xs
                      tracking-[0.25em]
                      text-[oklch(0.3_0.08_138.33)]
                      uppercase
                      block
                      pb-2
                    "
                  >
                    OLFACTORY PYRAMID
                  </span>

                  <div className="text-xs space-y-2">

                    <div>
                      <span className="font-display text-[10px] text-[#7A8378] tracking-wider uppercase block">
                        TOP NOTES:
                      </span>

                      <span className="font-serif italic text-[#263326] text-sm">
                        {product.notes.top.join(' • ')}
                      </span>
                    </div>

                    <div>
                      <span className="font-display text-[10px] text-[#7A8378] tracking-wider uppercase block">
                        HEART NOTES:
                      </span>

                      <span className="font-serif italic text-[#263326] text-sm">
                        {product.notes.heart.join(' • ')}
                      </span>
                    </div>

                    <div>
                      <span className="font-display text-[10px] text-[#7A8378] tracking-wider uppercase block">
                        BASE NOTES:
                      </span>

                      <span className="font-serif italic text-[#263326] text-sm">
                        {product.notes.base.join(' • ')}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-sans text-[#697269]">

                  <div
                    className="
                      bg-[#F7F9F5]
                      p-3
                      rounded-[4px]
                      border
                      border-[oklch(0.3_0.08_138.33_/_0.15)]
                    "
                  >
                    <span className="text-[10px] text-[oklch(0.3_0.08_138.33)] font-display tracking-widest uppercase block mb-0.5">
                      SILLAGE LONGEVITY
                    </span>

                    <span className="text-[#263326] font-medium">
                      {product.sillageRating}
                    </span>
                  </div>

                  <div
                    className="
                      bg-[#F7F9F5]
                      p-3
                      rounded-[4px]
                      border
                      border-[oklch(0.3_0.08_138.33_/_0.15)]
                    "
                  >
                    <span className="text-[10px] text-[oklch(0.3_0.08_138.33)] font-display tracking-widest uppercase block mb-0.5">
                      IDEAL SEASON
                    </span>

                    <span className="text-[#263326] font-medium">
                      {product.season}
                    </span>
                  </div>

                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-[oklch(0.3_0.08_138.33_/_0.15)]">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">

                  <div>
                    <span className="font-display text-2xl tracking-wider text-[#263326] font-semibold">
                      ${product.price}
                    </span>

                    <span className="font-sans text-[10px] text-[#899189] block">
                      Includes 100ml EDP + 15ml Travel Spray Set
                    </span>
                  </div>

                  <span
                    className="
                      font-display
                      text-[10px]
                      tracking-widest
                      text-[oklch(0.3_0.08_138.33)]
                      uppercase
                      flex
                      items-center
                      gap-1
                      bg-[oklch(0.3_0.08_138.33_/_0.08)]
                      px-3
                      py-1
                      rounded-full
                      w-fit
                    "
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    FREE EXPRESS SHIPPING
                  </span>

                </div>

                {/* Add To Cart */}
                <button
                  onClick={handleAdd}
                  disabled={addedSuccess}
                  className={`
                    w-full
                    py-4
                    rounded-[2px]
                    font-display
                    text-xs
                    tracking-[0.25em]
                    font-semibold
                    uppercase
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    gap-2
                    cursor-pointer

                    ${addedSuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[oklch(0.3_0.08_138.33)] text-white hover:bg-[oklch(0.24_0.07_138.33)] shadow-[0_0_25px_oklch(0.3_0.08_138.33_/_0.25)]'
                    }
                  `}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO SILLAGE BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>
                        ADD TO SILLAGE BAG • ${product.price}
                      </span>
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