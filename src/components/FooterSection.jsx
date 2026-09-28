import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, MapPin, Phone, Mail, Clock, Crown, Shield } from 'lucide-react';

export default function FooterSection({ theme = 'dark' }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const isDark = theme === 'dark';

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
    <footer id="contact" className={`border-t border-[#D4AF37]/25 relative z-20 overflow-hidden transition-colors duration-500 ${
      isDark
        ? 'bg-gradient-to-b from-[#0B0B0B] via-[#080808] to-[#040404] text-white'
        : 'bg-gradient-to-b from-[#FAF8F5] via-[#F4F0E8] to-[#EAE6DD] text-stone-900'
    }`}>
      
      {/* Background Decorative Gold Haze */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* CLASSIC HAUTE CONCIERGE & CONTACT US SECTION */}
      <div className="pt-20 pb-16 px-6 md:px-12 relative z-10 max-w-[1550px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase mb-4">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>PARISIAN HAUTE ATELIER & CONCIERGE</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-4 ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            CONTACT US
          </h2>

          <p className={`font-serif italic text-lg sm:text-xl max-w-2xl mx-auto font-light ${
            isDark ? 'text-neutral-300' : 'text-stone-700'
          }`}>
            "For private consultations, custom fragrance orders, or boutique appointments, our Parisian Concierge awaits your inquiry."
          </p>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-5" />
        </div>

        {/* Classic 3-Column Concierge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Column 1: Flagship Atelier */}
          <div className={`p-8 rounded-[8px] border transition-all flex flex-col items-center text-center group ${
            isDark
              ? 'bg-[#121212]/90 border-[#D4AF37]/25 hover:border-[#D4AF37]'
              : 'bg-white border-[#D4AF37]/35 hover:border-[#B38728] shadow-sm'
          }`}>
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-display text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mb-2">
              PARIS FLAGSHIP ATELIER
            </span>
            <p className={`font-serif italic text-base leading-relaxed mb-3 ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              12 Place Vendôme, 75001 Paris<br />Île-de-France, France
            </p>
            <span className="font-sans text-[11px] text-neutral-400 tracking-wider uppercase">
              By Private Appointment Only
            </span>
          </div>

          {/* Column 2: Direct Concierge Care */}
          <div className={`p-8 rounded-[8px] border transition-all flex flex-col items-center text-center group ${
            isDark
              ? 'bg-[#121212]/90 border-[#D4AF37]/25 hover:border-[#D4AF37]'
              : 'bg-white border-[#D4AF37]/35 hover:border-[#B38728] shadow-sm'
          }`}>
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-display text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mb-2">
              ROYAL CONCIERGE DESK
            </span>
            <p className={`font-sans text-sm font-medium tracking-widest mb-1 ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              +33 (0)1 42 68 55 00
            </p>
            <p className="font-serif italic text-xs text-[#D4AF37]">
              concierge@sillagedorient.com
            </p>
          </div>

          {/* Column 3: Atelier Salon Hours */}
          <div className={`p-8 rounded-[8px] border transition-all flex flex-col items-center text-center group ${
            isDark
              ? 'bg-[#121212]/90 border-[#D4AF37]/25 hover:border-[#D4AF37]'
              : 'bg-white border-[#D4AF37]/35 hover:border-[#B38728] shadow-sm'
          }`}>
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <span className="font-display text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mb-2">
              SALON HOURS
            </span>
            <p className={`font-sans text-xs tracking-wider leading-relaxed ${
              isDark ? 'text-neutral-300' : 'text-stone-700'
            }`}>
              Monday – Saturday: 10:00 – 19:00 CET<br />
              Sunday: Private Appointments Only
            </p>
          </div>

        </div>

        {/* Newsletter Dispatch Card */}
        <div className={`max-w-4xl mx-auto border p-8 sm:p-12 rounded-[12px] text-center relative overflow-hidden backdrop-blur-md transition-all ${
          isDark
            ? 'bg-gradient-to-b from-[#141414]/90 to-[#0A0A0A]/95 border-[#D4AF37]/25 shadow-[0_25px_60px_rgba(0,0,0,0.95)]'
            : 'bg-white border-[#D4AF37]/40 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
        }`}>
          
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>EXECUTIVE DISPATCH</span>
          </div>

          <h3 className={`font-display text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase mb-4 ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            JOIN THE PRIVILEGE CLUB
          </h3>
          
          <p className={`font-serif italic text-base max-w-xl mx-auto mb-8 font-light ${
            isDark ? 'text-neutral-300' : 'text-stone-700'
          }`}>
            Receive private invitations to confidential perfume launches, gemstone releases, and haute fragrance previews.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your private email..."
              className={`w-full sm:w-2/3 px-5 py-3.5 border font-sans text-xs rounded-[4px] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                isDark
                  ? 'bg-[#0A0A0A] border-white/10 text-white placeholder-neutral-500'
                  : 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400'
              }`}
            />
            <button
              type="submit"
              disabled={subscribed}
              className={`w-full sm:w-1/3 px-6 py-3.5 font-display text-xs tracking-[0.22em] uppercase font-semibold transition-all rounded-[2px] flex items-center justify-center gap-2 cursor-pointer ${
                subscribed
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#D4AF37] text-black hover:bg-stone-900 hover:text-white'
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
              <span className={`font-display text-2xl tracking-[0.26em] font-medium ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                SIGNATURE
              </span>
            </div>

            <p className={`font-serif italic text-sm leading-relaxed max-w-md mb-6 font-light ${
              isDark ? 'text-neutral-300' : 'text-stone-700'
            }`}>
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
            <a href="#collection" className={`font-display text-xs tracking-wider transition-colors uppercase ${
              isDark ? 'text-neutral-300 hover:text-[#D4AF37]' : 'text-stone-700 hover:text-[#B38728]'
            }`}>The Gemstone Series</a>
            <a href="#collection" className={`font-display text-xs tracking-wider transition-colors uppercase ${
              isDark ? 'text-neutral-300 hover:text-[#D4AF37]' : 'text-stone-700 hover:text-[#B38728]'
            }`}>The Golden Reserve</a>
            <a href="#collection" className={`font-display text-xs tracking-wider transition-colors uppercase ${
              isDark ? 'text-neutral-300 hover:text-[#D4AF37]' : 'text-stone-700 hover:text-[#B38728]'
            }`}>Signature Oud Duo</a>
            <a href="#collection" className={`font-display text-xs tracking-wider transition-colors uppercase ${
              isDark ? 'text-neutral-300 hover:text-[#D4AF37]' : 'text-stone-700 hover:text-[#B38728]'
            }`}>Signature Musk Duo</a>
            <a href="#collection" className={`font-display text-xs tracking-wider transition-colors uppercase ${
              isDark ? 'text-neutral-300 hover:text-[#D4AF37]' : 'text-stone-700 hover:text-[#B38728]'
            }`}>Signature Rose Duo</a>
          </div>

          {/* Atelier Info Column */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-3">
            <span className="font-display text-xs tracking-[0.28em] text-[#D4AF37] uppercase mb-3 block font-semibold">
              HAUTE ATELIER & CARE
            </span>
            <p className={`font-sans text-xs leading-relaxed font-light ${
              isDark ? 'text-neutral-400' : 'text-stone-600'
            }`}>
              Made in France by Masters of Perfumery. Inspired by sacred gemstones and imperial oriental heritage.
            </p>
            <div className={`pt-3 text-xs font-serif italic px-4 py-2.5 rounded-[4px] border border-white/5 w-full ${
              isDark ? 'bg-[#121212] text-neutral-300' : 'bg-white text-stone-800 border-stone-200'
            }`}>
              Concierge Care: <span className="text-[#D4AF37]">concierge@sillagedorient.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs ${
          isDark ? 'text-neutral-400' : 'text-stone-600'
        }`}>
          <span>© {new Date().getFullYear()} SIGNATURE by Sillage d'Orient. All Rights Reserved.</span>
          <div className="flex items-center gap-6 font-display text-[10px] tracking-widest uppercase">
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">LEGAL NOTICES</span>
          </div>
        </div>

      </div>

    </footer>
  );
}


