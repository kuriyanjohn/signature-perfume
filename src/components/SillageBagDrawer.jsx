import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShieldCheck, Gift, ArrowRight, Check } from 'lucide-react';

export default function SillageBagDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const [giftBoxOption, setGiftBoxOption] = useState(true);
  const [selectedSample, setSelectedSample] = useState('musk-sample');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckoutSubmit = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      setCheckoutComplete(false);
      onCheckout();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-[#121212] text-white flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.9)]"
            >
              {/* Drawer Header */}
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg tracking-[0.2em] text-white uppercase">SILLAGE BAG</span>
                  <span className="font-display text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-full">
                    {cartItems.reduce((a, b) => a + b.quantity, 0)} ITEMS
                  </span>
                </div>
                <button onClick={onClose} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-neutral-400 my-16">
                    <span className="font-serif italic text-xl text-[#D4AF37] mb-2">Your Sillage Bag is empty.</span>
                    <p className="font-sans text-xs max-w-xs leading-relaxed">
                      Discover our Haute Collection of precious gemstone fragrances to begin your scent journey.
                    </p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#181818] rounded-[6px] p-4 flex gap-4 items-center"
                    >
                      <div className="w-20 h-20 p-2 flex items-center justify-center shrink-0 overflow-hidden group/drawerimg cursor-pointer">
                        <img src={item.imageBox} alt={item.name} className="max-h-full max-w-full object-contain group-hover/drawerimg:scale-115 transition-transform duration-300" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm tracking-wider uppercase text-white truncate">
                          {item.name}
                        </h4>
                        <span className="font-serif italic text-xs text-[#D4AF37] block mb-1">
                          100ml EDP + 15ml Set
                        </span>
                        <span className="font-display text-sm text-white font-medium">
                          ${item.price}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center rounded-[4px] bg-[#121212]">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-neutral-400 hover:text-[#D4AF37]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-display text-xs text-white">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-neutral-400 hover:text-[#D4AF37]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-neutral-500 hover:text-red-400 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {cartItems.length > 0 && (
                  <div className="space-y-4 pt-4">
                    {/* Complimentary Sample */}
                    <div className="bg-[#181818] p-4 rounded-[6px]">
                      <div className="flex items-center gap-2 text-[#D4AF37] font-display text-[10px] tracking-widest uppercase mb-2">
                        <Gift className="w-3.5 h-3.5" />
                        <span>COMPLIMENTARY HAUTE 2ML SAMPLE INCLUDED</span>
                      </div>
                      <select
                        value={selectedSample}
                        onChange={(e) => setSelectedSample(e.target.value)}
                        className="w-full bg-[#121212] rounded-[4px] p-2 font-sans text-xs text-neutral-200 focus:outline-none"
                      >
                        <option value="musk-sample">Signature Musk (2ml Sample)</option>
                        <option value="rose-sample">Signature Rose (2ml Sample)</option>
                        <option value="oud-sample">Signature Oud (2ml Sample)</option>
                      </select>
                    </div>

                    {/* Gift Packaging Checkbox */}
                    <label className="flex items-center gap-3 p-3 bg-[#181818] rounded-[6px] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={giftBoxOption}
                        onChange={(e) => setGiftBoxOption(e.target.checked)}
                        className="accent-[#D4AF37] w-4 h-4"
                      />
                      <div className="text-xs">
                        <span className="font-display tracking-wider text-white uppercase block">
                          COMPLIMENTARY ROYAL GIFT BOX & RIBBON
                        </span>
                        <span className="text-neutral-400 text-[10px]">Gold-gilded presentation box</span>
                      </div>
                    </label>
                  </div>
                )}
              </div>

              {/* Footer Checkout */}
              {cartItems.length > 0 && (
                <div className="p-6 bg-[#0E0E0E]">
                  <div className="flex items-center justify-between mb-2 font-display text-sm uppercase">
                    <span className="text-neutral-400">SUBTOTAL</span>
                    <span className="text-white text-lg font-semibold">${subtotal}</span>
                  </div>

                  <div className="flex items-center justify-between mb-5 font-sans text-[10px] text-[#D4AF37]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> COMPLIMENTARY EXPRESS WORLDWIDE SHIPPING
                    </span>
                    <span>DUTIES INCLUDED</span>
                  </div>

                  <button
                    onClick={handleCheckoutSubmit}
                    disabled={checkoutComplete}
                    className={`w-full py-4 rounded-[2px] font-display text-xs tracking-[0.25em] font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      checkoutComplete
                        ? 'bg-green-600 text-white'
                        : 'bg-[#D4AF37] text-black hover:bg-white shadow-[0_0_25px_rgba(212,175,55,0.4)]'
                    }`}
                  >
                    {checkoutComplete ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>PREPARING HAUTE PARFUM SHIPMENT...</span>
                      </>
                    ) : (
                      <>
                        <span>PROCEED TO EXPRESS CHECKOUT</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
