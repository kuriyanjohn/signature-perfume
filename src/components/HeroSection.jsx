import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onExplore }) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden border-b border-[#D4AF37]/20 bg-[#FAF8F5]"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/backgrounds/hero-musk.png"
          alt="Sillage d'Orient Musk"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Soft overlay to improve text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/85 via-[#FAF8F5]/35 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 min-h-[90vh] sm:min-h-screen flex items-center">
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          <div className="max-w-[560px] text-left">

            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[#D4AF37]" />

              <span className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-[#9A7428] uppercase">
                HAUTE PARFUMERIE FRANÇAISE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] font-light leading-[1.05] uppercase text-stone-900 mb-6">
              SILLAGE
              <br />
              D'ORIENT
            </h1>

            {/* Description */}
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl leading-relaxed text-stone-700 max-w-[480px] mb-8">
              To bottle each Sillage d'Orient fragrance is to capture the
              mystery of scent within.
            </p>

            {/* Location */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-[#D4AF37]/70" />

              <span className="font-display text-xs tracking-[0.35em] text-[#9A7428] uppercase">
                PARIS &nbsp;|&nbsp; FRANCE
              </span>

              <span className="w-8 h-[1px] bg-[#D4AF37]/70" />
            </div>

            {/* Explore Collection Button */}
            <button
              onClick={() => onExplore('collection')}
              className="
                group
                inline-flex
                items-center
                gap-5
                px-8
                py-4
                bg-[#D4AF37]
                text-black
                font-display
                text-xs
                sm:text-sm
                tracking-[0.25em]
                font-semibold
                uppercase
                rounded-[2px]
                shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                hover:bg-stone-900
                hover:text-white
                hover:shadow-[0_10px_35px_rgba(212,175,55,0.4)]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <span>EXPLORE COLLECTION</span>

              <ArrowRight
                className="
                  w-4 h-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}