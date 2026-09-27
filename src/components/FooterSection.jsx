import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-[#0B0B0B] via-[#080808] to-[#040404] text-white border-t border-[#D4AF37]/25 relative z-20 overflow-hidden">
      
      {/* Background Decorative Gold Haze */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Newsletter Dispatch Card Section */}
      <div className="py-16 px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#141414]/90 to-[#0A0A0A]/95 border border-[#D4AF37]/25 p-8 sm:p-12 md:p-14 rounded-[12px] shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-center relative overflow-hidden backdrop-blur-md">
          
          {/* Subtle Top Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>EXECUTIVE DISPATCH</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-white font-light tracking-[0.2em] uppercase mb-4 drop-shadow-md">
            A WORLD OF RARE FRAGRANCES
          </h2>
          
          <p className="font-serif italic text-base sm:text-xl text-neutral-300 max-w-xl mx-auto mb-9 font-light">
            Discover new haute collections, private stone launches, and exclusive olfactory stories from Paris.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full sm:w-2/3 px-5 py-4 bg-[#0A0A0A] border border-white/10 text-white placeholder-neutral-500 font-sans text-xs rounded-[4px] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
            />
            <button
              type="submit"
              disabled={subscribed}
              className={`w-full sm:w-1/3 px-6 py-4 font-display text-xs tracking-[0.22em] uppercase font-semibold transition-all rounded-[2px] flex items-center justify-center gap-2 cursor-pointer ${
                subscribed
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#D4AF37] text-black hover:bg-white hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]'
              }`}
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>SUBSCRIBED</span>
                </>
              ) : (
                <>
                  <span>JOIN CLUB</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>

      {/* Main Footer Brand Columns */}
      <div className="pt-12 pb-12 px-6 md:px-12 max-w-[1550px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#D4AF37]/20">
          
          {/* Brand Quote Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#D4AF37] text-[12px] font-display font-bold bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                S
              </div>
              <span className="font-display text-2xl tracking-[0.26em] text-white font-medium">
                SIGNATURE
              </span>
            </div>

            <p className="font-serif italic text-sm text-neutral-300 leading-relaxed max-w-md mb-6 font-light">
              “The power of scent lies in its unknowability. It slips into your purview, unannounced, unexpected. It fills your senses as vividly as it fills your imagination.”
            </p>

            <div className="font-display text-xs tracking-[0.35em] text-[#D4AF37] font-light flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>PARIS  |  FRANCE</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-3">
            <span className="font-display text-xs tracking-[0.28em] text-[#D4AF37] uppercase mb-3 block font-semibold">
              THE COLLECTIONS
            </span>
            <a href="#collection" className="font-display text-xs tracking-wider text-neutral-300 hover:text-[#D4AF37] transition-colors uppercase">The Gemstone Series</a>
            <a href="#collection" className="font-display text-xs tracking-wider text-neutral-300 hover:text-[#D4AF37] transition-colors uppercase">The Golden Reserve</a>
            <a href="#collection" className="font-display text-xs tracking-wider text-neutral-300 hover:text-[#D4AF37] transition-colors uppercase">Signature Oud Duo</a>
            <a href="#collection" className="font-display text-xs tracking-wider text-neutral-300 hover:text-[#D4AF37] transition-colors uppercase">Signature Musk Duo</a>
            <a href="#collection" className="font-display text-xs tracking-wider text-neutral-300 hover:text-[#D4AF37] transition-colors uppercase">Signature Rose Duo</a>
          </div>

          {/* Atelier Info Column */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-3">
            <span className="font-display text-xs tracking-[0.28em] text-[#D4AF37] uppercase mb-3 block font-semibold">
              HAUTE ATELIER & CARE
            </span>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
              Made in France by Masters of Perfumery. Inspired by sacred gemstones and imperial oriental heritage.
            </p>
            <div className="pt-3 text-xs font-serif italic text-neutral-300 bg-[#121212] px-4 py-2.5 rounded-[4px] border border-white/5 w-full">
              Concierge Care: <span className="text-[#D4AF37]">haute@sillagedorient.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-neutral-400">
          <span>© {new Date().getFullYear()} SIGNATURE by Sillage d'Orient. All Rights Reserved.</span>
          <div className="flex items-center gap-6 font-display text-[10px] tracking-widest text-neutral-400 uppercase">
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">LEGAL NOTICES</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
