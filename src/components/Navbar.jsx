import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Sparkles, Menu, X, Gem } from 'lucide-react';

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenQuiz,
  currentTab,
  onNavigate
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'collection', label: 'COLLECTION' },
    { id: 'stones', label: 'PRECIOUS STONES' },
    { id: 'story', label: 'OUR HERITAGE' },
    { id: 'emotions', label: 'EMOTIONAL SPECTRUM' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#D4AF37]/25 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
            : 'bg-[#0B0B0B]/90 backdrop-blur-sm border-b border-[#D4AF37]/15 py-4'
        }`}
      >
        <div className="max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between relative min-h-[52px]">
          
          {/* Left Navigation Links (Desktop) & Mobile Menu Toggle */}
          <div className="flex items-center gap-7 xl:gap-9 flex-1 justify-start z-10">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#E5E5E5] hover:text-[#D4AF37] transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="font-display text-[11px] xl:text-[12px] tracking-[0.28em] text-[#E5E5E5] hover:text-[#D4AF37] transition-colors py-1 uppercase relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>
          </div>

          {/* Center Brand Logo - 100% Dead-Centered on ALL Screens */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer select-none z-20 pointer-events-auto"
            onClick={() => handleLinkClick('hero')}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[#D4AF37] text-[11px] font-display font-bold bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                S
              </div>
              <span className="font-display text-lg sm:text-2xl md:text-2xl tracking-[0.26em] text-white font-medium">
                SIGNATURE
              </span>
            </div>
            <span className="font-serif italic text-[10px] sm:text-[11px] tracking-[0.35em] text-[#D4AF37] uppercase -mt-0.5">
              by Sillage d'Orient
            </span>
          </div>

          {/* Right Navigation & Actions */}
          <div className="flex items-center justify-end gap-4 sm:gap-6 flex-1 z-10">
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8 mr-2">
              {navLinks.slice(3).map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="font-display text-[11px] xl:text-[12px] tracking-[0.28em] text-[#E5E5E5] hover:text-[#D4AF37] transition-colors py-1 uppercase relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Gem Quiz Button */}
            <button
              onClick={onOpenQuiz}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all text-[10px] xl:text-[11px] tracking-[0.2em] font-display uppercase cursor-pointer"
              title="Find Your Stone Quiz"
            >
              <Gem className="w-3.5 h-3.5" />
              <span>FIND YOUR STONE</span>
            </button>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="text-[#E5E5E5] hover:text-[#D4AF37] transition-colors p-1.5 cursor-pointer"
              aria-label="Search fragrances"
            >
              <Search className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </button>

            {/* Shopping Bag Icon */}
            <button
              onClick={onOpenCart}
              className="text-[#E5E5E5] hover:text-[#D4AF37] transition-colors p-1.5 relative cursor-pointer"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-8 transition-all duration-300">
          <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg tracking-[0.2em] text-white">SIGNATURE</span>
              <span className="font-serif italic text-xs text-[#D4AF37]">Sillage d'Orient</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37]">
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center gap-7 my-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="font-display text-base tracking-[0.3em] text-[#E5E5E5] hover:text-[#D4AF37] uppercase transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col items-center gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full py-3 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-display text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2"
            >
              <Gem className="w-4 h-4" />
              <span>FIND YOUR STONE QUIZ</span>
            </button>
            <p className="font-serif italic text-xs text-neutral-400">Paris • Haute Parfumerie</p>
          </div>
        </div>
      )}
    </>
  );
}
