import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GoldDustParticles from './components/GoldDustParticles';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';

import HeroSection from './components/HeroSection';
import HauteIntroSection from './components/HauteIntroSection';
import CollectionSection from './components/CollectionSection';
import InspiredStonesShowcase from './components/InspiredStonesShowcase';
import BrandPillarsSection from './components/BrandPillarsSection';
import StoryHeritageSection from './components/StoryHeritageSection';
import QuadrantSection from './components/QuadrantSection';
import EmotionalSpectrumSection from './components/EmotionalSpectrumSection';

import ProductDetailModal from './components/ProductDetailModal';
import ScentQuizModal from './components/ScentQuizModal';
import SillageBagDrawer from './components/SillageBagDrawer';
import SearchModal from './components/SearchModal';

import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CareerPage from './pages/CareerPage';

import { FRAGRANCES } from './data/products';

function HomePage({ cartItems, setCartItems, selectedProductId, setSelectedProductId, isCartOpen, setIsCartOpen, isQuizOpen, setIsQuizOpen, isSearchOpen, setIsSearchOpen, filterPanelOpen, setFilterPanelOpen, currentTab, setCurrentTab }) {
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleOpenFilters = () => {
    setFilterPanelOpen(true);
    const element = document.getElementById('collection');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection
        onExplore={(id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
        onSelectProduct={(id) => setSelectedProductId(id)}
      />
      <HauteIntroSection />
      <CollectionSection
        onSelectProduct={(id) => setSelectedProductId(id)}
        onAddToCart={handleAddToCart}
        filterPanelOpen={filterPanelOpen}
        setFilterPanelOpen={setFilterPanelOpen}
      />
      <InspiredStonesShowcase onSelectProduct={(id) => setSelectedProductId(id)} />
      <BrandPillarsSection />
      <StoryHeritageSection />
      <QuadrantSection />
      <EmotionalSpectrumSection onSelectProduct={(id) => setSelectedProductId(id)} />
    </>
  );
}

export default function App() {
  const [cartItems, setCartItems] = useState([{ ...FRAGRANCES[0], quantity: 1 }]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('hero');

  const selectedProduct = FRAGRANCES.find((p) => p.id === selectedProductId);

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) { setCartItems((prev) => prev.filter((item) => item.id !== productId)); return; }
    setCartItems((prev) => prev.map((item) => item.id === productId ? { ...item, quantity: newQty } : item));
  };
  const handleRemoveItem = (productId) => setCartItems((prev) => prev.filter((item) => item.id !== productId));
  const handleCheckout = () => { setCartItems([]); setIsCartOpen(false); };

  return (
    <BrowserRouter>
      <div className="min-h-screen relative font-sans bg-[#FAF8F5] text-stone-900 selection:bg-[#D4AF37] selection:text-black">

        <GoldDustParticles />

        <Navbar
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          currentTab={currentTab}
          onNavigate={(id) => setCurrentTab(id)}
        />

        <main>
          <Routes>
            <Route path="/" element={
              <HomePage
                cartItems={cartItems} setCartItems={setCartItems}
                selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId}
                isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}
                isQuizOpen={isQuizOpen} setIsQuizOpen={setIsQuizOpen}
                isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}
                filterPanelOpen={filterPanelOpen} setFilterPanelOpen={setFilterPanelOpen}
                currentTab={currentTab} setCurrentTab={setCurrentTab}
              />
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareerPage />} />
          </Routes>
        </main>

        <FooterSection />

        {/* Modals */}
        {selectedProduct && (
          <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProductId(null)} onAddToCart={(p) => { setCartItems((prev) => { const ex = prev.find(i => i.id === p.id); if (ex) return prev.map(i => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i); return [...prev, { ...p, quantity: 1 }]; }); setIsCartOpen(true); }} />
        )}
        {isQuizOpen && (<ScentQuizModal onClose={() => setIsQuizOpen(false)} onSelectProduct={(id) => setSelectedProductId(id)} />)}
        <SillageBagDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={handleCheckout} />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSelectProduct={(id) => setSelectedProductId(id)} />
      </div>
    </BrowserRouter>
  );
}
