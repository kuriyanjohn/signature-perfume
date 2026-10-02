import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FRAGRANCES } from '../data/products';
import {
  Eye,
  ShoppingBag,
  ShieldCheck,
  SlidersHorizontal,
  Filter,
  X,
  RefreshCw
} from 'lucide-react';

export default function CollectionSection({
  onSelectProduct,
  onAddToCart,
  filterPanelOpen,
  setFilterPanelOpen
}) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedNote, setSelectedNote] = useState('ALL');
  const [selectedPrice, setSelectedPrice] = useState('ALL');
  const [sortBy, setSortBy] = useState('DEFAULT');
  const [localFilterOpen, setLocalFilterOpen] = useState(false);

  const showFilterPanel =
    filterPanelOpen !== undefined ? filterPanelOpen : localFilterOpen;

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

  const filteredProducts = FRAGRANCES
    .filter((item) => {
      // Category filter
      if (selectedCategory !== 'ALL') {
        if (
          selectedCategory === 'USER' &&
          !item.userProvided
        ) {
          return false;
        }

        if (
          selectedCategory !== 'USER' &&
          item.category !== selectedCategory
        ) {
          return false;
        }
      }

      // Scent note filter
      if (selectedNote !== 'ALL') {
        const notesString = [
          ...(item.notes?.top || []),
          ...(item.notes?.heart || []),
          ...(item.notes?.base || []),
          item.description,
          item.gemstone,
          item.subtitle
        ]
          .join(' ')
          .toLowerCase();

        if (!notesString.includes(selectedNote.toLowerCase())) {
          return false;
        }
      }

      // Price filter
      if (selectedPrice !== 'ALL') {
        if (
          selectedPrice === 'UNDER_320' &&
          item.price >= 320
        ) {
          return false;
        }

        if (
          selectedPrice === '320_340' &&
          (item.price < 320 || item.price > 340)
        ) {
          return false;
        }

        if (
          selectedPrice === 'ABOVE_340' &&
          item.price <= 340
        ) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'PRICE_LOW') {
        return a.price - b.price;
      }

      if (sortBy === 'PRICE_HIGH') {
        return b.price - a.price;
      }

      if (sortBy === 'RATING') {
        return b.rating - a.rating;
      }

      return 0;
    });

  return (
    <section
      id="collection"
      className="
        relative
        z-20
        bg-[#FAF8F5]
        text-stone-900
        px-4
        py-20
        sm:px-8
        sm:py-24
        md:px-12
      "
    >
      <div className="mx-auto max-w-[1550px]">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span
            className="
              mb-2
              block
              font-display
              text-xs
              font-light
              uppercase
              tracking-[0.32em]
              text-[#D4AF37]
              sm:text-sm
            "
          >
            THE SIGNATURE PARFUMS
          </span>

          <h2
            className="
              font-display
              text-3xl
              font-light
              uppercase
              tracking-[0.2em]
              text-stone-900
              sm:text-4xl
              md:text-5xl
            "
          >
            DISCOVER YOUR STONE
          </h2>

          <div className="mx-auto mt-4 h-px w-20 bg-[#D4AF37]" />
        </div>

        {/* Filters & Sorting */}
        <div
          className="
            mb-8
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-b
            border-[#D4AF37]/20
            pb-4
            sm:flex-row
          "
        >
          {/* Filter Button */}
          <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
            <button
              onClick={toggleFilterPanel}
              className={`
                flex
                items-center
                gap-2.5
                rounded-full
                px-5
                py-2.5
                font-display
                text-xs
                uppercase
                tracking-[0.2em]
                transition-all
                cursor-pointer
                ${showFilterPanel || activeFiltersCount > 0
                  ? 'bg-[#D4AF37] font-semibold text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'border border-[#D4AF37]/40 bg-white text-[#967117] shadow-sm hover:bg-[#D4AF37] hover:text-black'
                }
              `}
            >
              <SlidersHorizontal className="h-4 w-4" />

              <span>PRODUCT FILTERS</span>

              {activeFiltersCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Product Count */}
            <span className="font-serif text-xs italic text-stone-600 sm:text-sm">
              Showing {filteredProducts.length} of {FRAGRANCES.length} Parfums
            </span>
          </div>

          {/* Sorting */}
          <div className="flex items-center gap-2">
            <span
              className="
                font-display
                text-[10px]
                uppercase
                tracking-widest
                text-stone-600
              "
            >
              SORT:
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                cursor-pointer
                rounded-full
                border
                border-[#D4AF37]/40
                bg-white
                px-4
                py-2
                font-display
                text-[10px]
                uppercase
                tracking-wider
                text-stone-900
                shadow-sm
                outline-none
              "
            >
              <option value="DEFAULT">FEATURED</option>
              <option value="PRICE_LOW">
                PRICE: LOW TO HIGH
              </option>
              <option value="PRICE_HIGH">
                PRICE: HIGH TO LOW
              </option>
              <option value="RATING">
                HIGHEST RATED
              </option>
            </select>
          </div>
        </div>

        {/* Filter Drawer */}
        <AnimatePresence>
          {showFilterPanel && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0
              }}
              animate={{
                opacity: 1,
                height: 'auto'
              }}
              exit={{
                opacity: 0,
                height: 0
              }}
              className="
                mb-10
                overflow-hidden
                rounded-[10px]
                border
                border-[#D4AF37]/40
                bg-white
                p-6
                shadow-md
              "
            >
              {/* Filter Header */}
              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#D4AF37]/20
                  pb-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    font-display
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#D4AF37]
                  "
                >
                  <Filter className="h-4 w-4" />

                  <span>
                    FILTER COLLECTION BY ATTRIBUTES
                  </span>
                </div>

                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetAllFilters}
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-1
                      font-display
                      text-xs
                      uppercase
                      tracking-widest
                      text-[#D4AF37]
                      hover:underline
                    "
                  >
                    <RefreshCw className="h-3 w-3" />

                    <span>RESET ALL FILTERS</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                {/* Category */}
                <div>
                  <span
                    className="
                      mb-3
                      block
                      font-display
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-widest
                      text-stone-700
                    "
                  >
                    COLLECTION CATEGORY:
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() =>
                          setSelectedCategory(cat.id)
                        }
                        className={`
                          cursor-pointer
                          rounded-full
                          border
                          px-3
                          py-1.5
                          font-display
                          text-[10px]
                          uppercase
                          tracking-wider
                          transition-all
                          ${selectedCategory === cat.id
                            ? 'border-[#D4AF37] bg-[#D4AF37] font-semibold text-black'
                            : 'border-stone-200 bg-stone-100 text-stone-700 hover:text-[#B38728]'
                          }
                        `}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <span
                    className="
                      mb-3
                      block
                      font-display
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-widest
                      text-stone-700
                    "
                  >
                    KEY OLFACTORY NOTES:
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {notesList.map((note) => (
                      <button
                        key={note.id}
                        onClick={() =>
                          setSelectedNote(note.id)
                        }
                        className={`
                          cursor-pointer
                          rounded-full
                          border
                          px-3
                          py-1.5
                          font-display
                          text-[10px]
                          uppercase
                          tracking-wider
                          transition-all
                          ${selectedNote === note.id
                            ? 'border-[#D4AF37] bg-[#D4AF37] font-semibold text-black'
                            : 'border-stone-200 bg-stone-100 text-stone-700 hover:text-[#B38728]'
                          }
                        `}
                      >
                        {note.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <span
                    className="
                      mb-3
                      block
                      font-display
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-widest
                      text-stone-700
                    "
                  >
                    PRICE RANGE:
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((price) => (
                      <button
                        key={price.id}
                        onClick={() =>
                          setSelectedPrice(price.id)
                        }
                        className={`
                          cursor-pointer
                          rounded-full
                          border
                          px-3
                          py-1.5
                          font-display
                          text-[10px]
                          uppercase
                          tracking-wider
                          transition-all
                          ${selectedPrice === price.id
                            ? 'border-[#D4AF37] bg-[#D4AF37] font-semibold text-black'
                            : 'border-stone-200 bg-stone-100 text-stone-700 hover:text-[#B38728]'
                          }
                        `}
                      >
                        {price.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {activeFiltersCount > 0 && (
                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    border-t
                    border-[#D4AF37]/20
                    pt-4
                  "
                >
                  <span
                    className="
                      font-display
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-stone-400
                    "
                  >
                    ACTIVE FILTERS:
                  </span>

                  {selectedCategory !== 'ALL' && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-[#D4AF37]/40
                        bg-[#D4AF37]/15
                        px-3
                        py-1
                        font-display
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-[#D4AF37]
                      "
                    >
                      Category: {selectedCategory}

                      <X
                        className="h-3 w-3 cursor-pointer hover:text-stone-900"
                        onClick={() =>
                          setSelectedCategory('ALL')
                        }
                      />
                    </span>
                  )}

                  {selectedNote !== 'ALL' && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-[#D4AF37]/40
                        bg-[#D4AF37]/15
                        px-3
                        py-1
                        font-display
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-[#D4AF37]
                      "
                    >
                      Note: {selectedNote}

                      <X
                        className="h-3 w-3 cursor-pointer hover:text-stone-900"
                        onClick={() =>
                          setSelectedNote('ALL')
                        }
                      />
                    </span>
                  )}

                  {selectedPrice !== 'ALL' && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-[#D4AF37]/40
                        bg-[#D4AF37]/15
                        px-3
                        py-1
                        font-display
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-[#D4AF37]
                      "
                    >
                      Price: {selectedPrice}

                      <X
                        className="h-3 w-3 cursor-pointer hover:text-stone-900"
                        onClick={() =>
                          setSelectedPrice('ALL')
                        }
                      />
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <div
            className="
              my-6
              rounded-[10px]
              border
              border-[#D4AF37]/20
              bg-white
              py-20
              text-center
            "
          >
            <Filter className="mx-auto mb-4 h-10 w-10 text-[#D4AF37] opacity-60" />

            <h3
              className="
                mb-2
                font-display
                text-xl
                uppercase
                tracking-widest
                text-stone-900
              "
            >
              NO MATCHING FRAGRANCES FOUND
            </h3>

            <p className="mb-6 font-serif italic text-stone-500">
              Try adjusting your filter selection or clear
              filters to view the full collection.
            </p>

            <button
              onClick={resetAllFilters}
              className="
                rounded-[2px]
                bg-[#D4AF37]
                px-6
                py-3
                font-display
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-black
              "
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              items-stretch
              gap-8
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-10
            "
          >
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06
                }}
                className="
                  group
                  relative
                  flex
                  h-full
                  cursor-pointer
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[12px]
                  bg-[#FAF8F5]
                  p-6
                  transition-all
                  duration-500
                  hover:shadow-[0_18px_40px_rgba(212,175,55,0.18)]
                "
              >
                {/* Hover Gold Line */}
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[2px]
                    bg-gradient-to-r
                    from-transparent
                    via-[#D4AF37]
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Badges */}
                <div className="z-10 mb-4 flex items-center justify-between">
                  <span
                    className="
                      rounded-full
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/10
                      px-3
                      py-1
                      font-display
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-[#D4AF37]
                    "
                  >
                    {product.badge}
                  </span>

                  {product.userProvided && (
                    <span
                      className="
                        flex
                        items-center
                        gap-1
                        rounded-full
                        border
                        border-[#D4AF37]/20
                        bg-[#D4AF37]/10
                        px-2.5
                        py-0.5
                        font-display
                        text-[9px]
                        tracking-widest
                        text-[#D4AF37]
                      "
                    >
                      <ShieldCheck className="h-3 w-3" />
                      HAUTE EDITION
                    </span>
                  )}
                </div>

                {/* Product Image */}
                <div
                  onClick={() =>
                    onSelectProduct(product.id)
                  }
                  className="
                    group/img
                    relative
                    my-2
                    flex
                    h-[320px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[8px]
                    p-4
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
                      from-[#D4AF37]/25
                      via-[#D4AF37]/5
                      to-transparent
                      opacity-0
                      blur-2xl
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:opacity-100
                    "
                  />

                  <img
                    src={product.imageBox}
                    alt={product.name}
                    className="
                      max-h-[92%]
                      max-w-[92%]
                      object-contain
                      drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]
                      transition-all
                      duration-500
                      ease-out
                      group-hover:-translate-y-2
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-4
                      left-1/2
                      z-20
                      -translate-x-1/2
                      translate-y-3
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                  </div>
                </div>

                {/* Product Information */}
                <div
                  className="
                    z-10
                    flex
                    flex-1
                    flex-col
                    items-center
                    justify-between
                    pt-3
                    text-center
                  "
                >
                  <div className="flex flex-col items-center">
                    <span className="mb-1 font-serif text-xs italic text-[#D4AF37]">
                      {product.gemstone}
                    </span>

                    <h3
                      className="
                        mb-1
                        font-display
                        text-lg
                        font-normal
                        uppercase
                        tracking-[0.22em]
                        text-stone-900
                        transition-colors
                        group-hover:text-[#D4AF37]
                        sm:text-xl
                      "
                    >
                      {product.name}
                    </h3>

                    <p
                      className="
                        mb-4
                        font-sans
                        text-[11px]
                        uppercase
                        tracking-widest
                        text-stone-500
                      "
                    >
                      EAU DE PARFUM • 100 ML + 15 ML
                    </p>
                  </div>

                  {/* Price + Add To Bag */}
                  <div
                    className="
                      mt-auto
                      flex
                      w-full
                      items-center
                      justify-between
                      border-t
                      border-[#D4AF37]/15
                      pt-4
                    "
                  >


                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="
                        flex
                        cursor-pointer
                        items-center
                        gap-2
                        rounded-[2px]
                        border
                        border-[#D4AF37]/30
                        bg-[#D4AF37]/10
                        px-4
                        py-2.5
                        font-display
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#D4AF37]
                        transition-all
                        duration-300
                        hover:bg-[#D4AF37]
                        hover:text-black
                      "
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>ADD TO BAG</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}