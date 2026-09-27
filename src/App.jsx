import React, { useState } from 'react';
import GoldDustParticles from './components/GoldDustParticles';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HauteIntroSection from './components/HauteIntroSection';
import CollectionSection from './components/CollectionSection';
import InspiredStonesShowcase from './components/InspiredStonesShowcase';
import BrandPillarsSection from './components/BrandPillarsSection';
import StoryHeritageSection from './components/StoryHeritageSection';
import QuadrantSection from './components/QuadrantSection';
import EmotionalSpectrumSection from './components/EmotionalSpectrumSection';
import FooterSection from './components/FooterSection';

import ProductDetailModal from './components/ProductDetailModal';
import ScentQuizModal from './components/ScentQuizModal';
import SillageBagDrawer from './components/SillageBagDrawer';
import SearchModal from './components/SearchModal';

import { FRAGRANCES } from './data/products';

export default function App() {
  const [cartItems, setCartItems] = useState([
    { ...FRAGRANCES[0], quantity: 1 } // Pre-add Signature Oud for immediate luxury bag experience
  ]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('hero');

  const selectedProduct = FRAGRANCES.find((p) => p.id === selectedProductId);

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleNavigate = (id) => {
    setCurrentTab(id);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black relative font-sans p-3 sm:p-6 md:p-8 lg:p-12 xl:p-14">
      
      {/* Canvas Particle Gold Dust Background Effect */}
      <GoldDustParticles />

      {/* Main Framed Website Wrapper with Side Borders */}
      <div className="relative min-h-screen max-w-[1700px] mx-auto bg-[#0B0B0B] border border-[#D4AF37]/25 rounded-[6px] shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Luxury Gold Corner Frame Accents */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37] z-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37] z-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37] z-50 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37] z-50 pointer-events-none" />

        {/* Main Navigation Bar */}
        <Navbar
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          currentTab={currentTab}
          onNavigate={handleNavigate}
        />

        {/* Hero Section */}
        <HeroSection
          onExplore={(id) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* Haute Parfumerie Intro Section */}
        <HauteIntroSection />

        {/* Collection Grid & Box/Bottle Switcher */}
        <CollectionSection
          onSelectProduct={(id) => setSelectedProductId(id)}
          onAddToCart={handleAddToCart}
        />

        {/* Inspired by Precious Stones Showcase */}
        <InspiredStonesShowcase
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* 4 Pillars of Brand Craftsmanship */}
        <BrandPillarsSection />

        {/* Heritage & Story */}
        <StoryHeritageSection />

        {/* Royal Quadrant Emblems */}
        <QuadrantSection />

        {/* Emotional Spectrum Section */}
        <EmotionalSpectrumSection
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* Footer Section */}
        <FooterSection />
      </div>

      {/* Product Detail Overlay Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProductId(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Find Your Stone Scent Quiz Modal */}
      {isQuizOpen && (
        <ScentQuizModal
          onClose={() => setIsQuizOpen(false)}
          onSelectProduct={(id) => setSelectedProductId(id)}
        />
      )}

      {/* Sillage Bag Drawer */}
      <SillageBagDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(id) => setSelectedProductId(id)}
      />

    </div>
  );
}
