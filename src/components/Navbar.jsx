import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Sparkles, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenSearch,
  currentTab,
  onNavigate,
  theme = 'dark',
  onToggleTheme
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

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
    { id: 'contact', label: 'CONTACT US' },
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
      {/* Main Header - Fixed & Visible on Scroll */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'bg-[#0B0B0B]/98 backdrop-blur-xl border-b border-[#D4AF37]/30 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.95)]'
              : 'bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-[#D4AF37]/35 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)]'
            : isDark
              ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#D4AF37]/15 py-4'
              : 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-4'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between min-h-[52px]">
          
          {/* LEFT SIDE: Brand Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none z-20 pointer-events-auto shrink-0 group"
            onClick={() => handleLinkClick('hero')}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#D4AF37] text-xs sm:text-sm font-display font-bold bg-[#D4AF37]/10 border border-[#D4AF37]/35 group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-sm">
              S
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-base sm:text-xl xl:text-2xl tracking-[0.24em] font-medium transition-colors ${
                isDark ? 'text-white group-hover:text-[#D4AF37]' : 'text-stone-900 group-hover:text-[#B38728]'
              }`}>
                SIGNATURE
              </span>
              <span className="font-serif italic text-[9px] sm:text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase -mt-1">
                by Sillage d'Orient
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: ALL Text Content, Navigation Links & Action Controls */}
          <div className="flex items-center justify-end gap-3 sm:gap-5 xl:gap-6 flex-1 z-10 ml-auto">
            
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 mr-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-display text-[10px] xl:text-[11px] tracking-[0.24em] transition-colors py-1 uppercase relative group cursor-pointer ${
                    isDark ? 'text-neutral-200 hover:text-[#D4AF37]' : 'text-stone-800 hover:text-[#B38728]'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Theme Toggle Button (Dark vs Light/White) */}
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isDark
                  ? 'bg-neutral-900/80 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                  : 'bg-white border-[#D4AF37]/40 text-stone-800 hover:bg-[#D4AF37] hover:text-black shadow-sm'
              }`}
              aria-label={isDark ? "Switch to White Light Mode" : "Switch to Dark Mode"}
              title={isDark ? "Switch to White Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isDark ? 'text-neutral-200 hover:text-[#D4AF37]' : 'text-stone-800 hover:text-[#B38728]'
              }`}
              aria-label="Search fragrances"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Shopping Bag Icon */}
            <button
              onClick={onOpenCart}
              className={`p-2 relative rounded-full transition-colors cursor-pointer ${
                isDark ? 'text-neutral-200 hover:text-[#D4AF37]' : 'text-stone-800 hover:text-[#B38728]'
              }`}
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#D4AF37] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors cursor-pointer ${
                isDark ? 'text-neutral-200 hover:text-[#D4AF37]' : 'text-stone-800 hover:text-[#B38728]'
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 flex flex-col p-6 sm:p-8 transition-all duration-300 ${
          isDark ? 'bg-black/95 text-white backdrop-blur-xl' : 'bg-stone-50/98 text-stone-900 backdrop-blur-xl'
        }`}>
          <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#D4AF37] text-xs font-display font-bold bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                S
              </div>
              <span className="font-display text-lg tracking-[0.2em] font-medium">SIGNATURE</span>
              <span className="font-serif italic text-xs text-[#D4AF37]">Sillage d'Orient</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 transition-colors ${isDark ? 'text-white hover:text-[#D4AF37]' : 'text-stone-800 hover:text-[#B38728]'}`}
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center gap-6 my-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-display text-base tracking-[0.25em] uppercase transition-colors ${
                  isDark ? 'text-neutral-200 hover:text-[#D4AF37]' : 'text-stone-800 hover:text-[#B38728]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col items-center gap-4">
            <div className="flex items-center justify-between w-full max-w-xs px-4 py-2 rounded-full border border-[#D4AF37]/30">
              <span className="font-display text-xs tracking-wider uppercase text-neutral-400">THEME</span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-display text-[10px] tracking-widest uppercase font-semibold"
              >
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? 'WHITE MODE' : 'DARK MODE'}</span>
              </button>
            </div>
            <p className="font-serif italic text-xs text-neutral-400">Paris • Haute Parfumerie</p>
          </div>
        </div>
      )}
    </>
  );
}



