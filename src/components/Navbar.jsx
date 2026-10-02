import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenSearch,
  currentTab,
  onNavigate,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'collection', label: 'COLLECTION' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  const pageLinks = [
    { path: '/about', label: 'ABOUT' },
    { path: '/blog', label: 'BLOG' },
    { path: '/careers', label: 'CAREERS' },
  ];

  const handleScrollLink = (id) => {
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(id);
    }

    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-[#F8FAF6]/98 backdrop-blur-xl border-b border-[oklch(0.3_0.08_138.33_/_0.30)] py-3.5 shadow-[0_8px_25px_rgba(20,45,25,0.08)]'
            : 'bg-[#F8FAF6]/95 backdrop-blur-md border-b border-[oklch(0.3_0.08_138.33_/_0.15)] py-4'
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between min-h-[52px]">

          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer select-none z-20 shrink-0 group no-underline"
          >
            <div
              className="
                w-8 h-8 sm:w-9 sm:h-9
                rounded-full
                flex items-center justify-center
                text-[oklch(0.3_0.08_138.33)]
                text-xs sm:text-sm
                font-display font-bold
                bg-[oklch(0.3_0.08_138.33_/_0.08)]
                border border-[oklch(0.3_0.08_138.33_/_0.35)]
                group-hover:bg-[oklch(0.3_0.08_138.33)]
                group-hover:text-white
                transition-all
                shadow-sm
              "
            >
              S
            </div>

            <div className="flex flex-col">
              <span
                className="
                  font-display
                  text-base sm:text-xl xl:text-2xl
                  tracking-[0.24em]
                  font-medium
                  transition-colors
                  text-[#263326]
                  group-hover:text-[oklch(0.3_0.08_138.33)]
                "
              >
                SIGNATURE
              </span>

              <span
                className="
                  font-serif italic
                  text-[9px] sm:text-[10px]
                  tracking-[0.35em]
                  text-[oklch(0.3_0.08_138.33)]
                  uppercase
                  -mt-1
                "
              >
                by Sillage d'Orient
              </span>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center justify-end gap-3 sm:gap-5 xl:gap-6 flex-1 z-10 ml-auto">

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 mr-1">

              {scrollLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollLink(link.id)}
                  className="
                    font-display
                    text-[10px] xl:text-[11px]
                    tracking-[0.24em]
                    transition-colors
                    py-1
                    uppercase
                    relative
                    group
                    cursor-pointer
                    text-[#4F5A50]
                    hover:text-[oklch(0.3_0.08_138.33)]
                  "
                >
                  {link.label}

                  <span
                    className="
                      absolute bottom-0 left-1/2
                      -translate-x-1/2
                      w-0 h-[1px]
                      bg-[oklch(0.3_0.08_138.33)]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </button>
              ))}

              <span className="w-[1px] h-4 bg-[#D5DDD3]" />

              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-display text-[10px] xl:text-[11px] tracking-[0.24em] transition-colors py-1 uppercase relative group no-underline ${location.pathname === link.path
                      ? 'text-[oklch(0.3_0.08_138.33)]'
                      : 'text-[#4F5A50] hover:text-[oklch(0.3_0.08_138.33)]'
                    }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[oklch(0.3_0.08_138.33)] transition-all duration-300 ${location.pathname === link.path
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                      }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Search */}
            <button
              onClick={onOpenSearch}
              className="
                p-2
                rounded-full
                transition-colors
                cursor-pointer
                text-[#4F5A50]
                hover:text-[oklch(0.3_0.08_138.33)]
              "
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Cart */}
            <button
              onClick={onOpenCart}
              className="
                p-2
                relative
                rounded-full
                transition-colors
                cursor-pointer
                text-[#4F5A50]
                hover:text-[oklch(0.3_0.08_138.33)]
              "
              aria-label="Bag"
            >
              <ShoppingBag className="w-4.5 h-4.5" />

              {cartCount > 0 && (
                <span
                  className="
                    absolute -top-0.5 -right-0.5
                    bg-[oklch(0.3_0.08_138.33)]
                    text-white
                    text-[9px]
                    font-bold
                    w-4 h-4
                    rounded-full
                    flex items-center justify-center
                    animate-bounce
                  "
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="
                lg:hidden
                p-2
                transition-colors
                cursor-pointer
                text-[#4F5A50]
                hover:text-[oklch(0.3_0.08_138.33)]
              "
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="
            fixed inset-0 z-50
            flex flex-col
            p-6 sm:p-8
            bg-[#F8FAF6]/98
            text-[#263326]
            backdrop-blur-xl
          "
        >

          {/* Mobile Header */}
          <div
            className="
              flex items-center justify-between
              pb-6
              border-b
              border-[oklch(0.3_0.08_138.33_/_0.20)]
            "
          >
            <div className="flex items-center gap-2">

              <div
                className="
                  w-7 h-7
                  rounded-full
                  flex items-center justify-center
                  text-[oklch(0.3_0.08_138.33)]
                  text-xs
                  font-display font-bold
                  bg-[oklch(0.3_0.08_138.33_/_0.08)]
                  border border-[oklch(0.3_0.08_138.33_/_0.30)]
                "
              >
                S
              </div>

              <span className="font-display text-lg tracking-[0.2em] font-medium">
                SIGNATURE
              </span>

              <span
                className="
                  font-serif italic
                  text-xs
                  text-[oklch(0.3_0.08_138.33)]
                "
              >
                Sillage d'Orient
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="
                p-2
                transition-colors
                text-[#263326]
                hover:text-[oklch(0.3_0.08_138.33)]
              "
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 flex flex-col justify-center items-center gap-5 my-6">

            {scrollLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollLink(link.id)}
                className="
                  font-display
                  text-base
                  tracking-[0.25em]
                  uppercase
                  transition-colors
                  text-[#3F4A40]
                  hover:text-[oklch(0.3_0.08_138.33)]
                "
              >
                {link.label}
              </button>
            ))}

            <div
              className="
                w-24 h-[1px]
                bg-[oklch(0.3_0.08_138.33_/_0.30)]
                my-2
              "
            />

            {pageLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-base tracking-[0.25em] uppercase transition-colors no-underline ${location.pathname === link.path
                    ? 'text-[oklch(0.3_0.08_138.33)]'
                    : 'text-[#3F4A40] hover:text-[oklch(0.3_0.08_138.33)]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Footer */}
          <div
            className="
              pt-6
              border-t
              border-[oklch(0.3_0.08_138.33_/_0.20)]
              flex flex-col items-center
            "
          >
            <p className="font-serif italic text-xs text-[#899189]">
              Paris • Haute Parfumerie
            </p>
          </div>
        </div>
      )}
    </>
  );
}