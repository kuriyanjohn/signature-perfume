import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Heart, Award, Globe, Gem } from 'lucide-react';

const values = [
  { icon: <Gem className="w-6 h-6 text-[#D4AF37]" />, title: 'Rare Craftsmanship', desc: 'Every fragrance is composed by master perfumers in Grasse, using ingredients of extraordinary provenance.' },
  { icon: <Heart className="w-6 h-6 text-[#D4AF37]" />, title: 'Emotional Connection', desc: 'We believe scent is the language of the soul — our fragrances are crafted to evoke, not just to impress.' },
  { icon: <Globe className="w-6 h-6 text-[#D4AF37]" />, title: 'French & Oriental Heritage', desc: 'A bridge between Paris haute parfumerie and the opulent warmth of the Orient — tradition fused with modernity.' },
  { icon: <Award className="w-6 h-6 text-[#D4AF37]" />, title: 'Uncompromising Quality', desc: '25%+ fragrance oil concentration in every flacon, ensuring extraordinary longevity and sillage.' },
];

const team = [
  { name: 'Isabelle Moreau', role: 'Master Perfumer, Grasse', desc: 'With 20 years at the heart of French parfumerie, Isabelle leads the composition of each Signature fragrance.' },
  { name: 'Karim Al-Rashid', role: 'Oriental Ingredient Curator', desc: 'Karim travels the Arabian Peninsula sourcing the finest ouds, resins, and precious woods for our collections.' },
  { name: 'Céline Dupont', role: 'Creative Director', desc: 'Céline shapes the visual language of Signature — from flacon design to the ceremonies of unboxing.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans">

      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center overflow-hidden bg-gradient-to-b from-[#F4F0E8] to-[#FAF8F5] border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 font-display text-[180px] font-bold text-stone-900/[0.025] flex items-center justify-center pointer-events-none select-none">
          ABOUT
        </div>
        <Link to="/" className="inline-flex items-center gap-2 text-[#D4AF37] font-display text-xs tracking-widest uppercase mb-10 hover:text-stone-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
          <span className="font-display text-[#D4AF37] text-xs tracking-[0.35em] uppercase block mb-4">Our Story</span>
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-[0.18em] uppercase mb-6 text-stone-900">
            About Signature
          </h1>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mb-8" />
          <p className="font-serif italic text-xl sm:text-2xl text-stone-700 font-light leading-relaxed">
            Born at the crossroads of French savoir-faire and Oriental splendour, Signature is a celebration of scent as art, identity, and emotion.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="font-display text-[#D4AF37] text-xs tracking-[0.35em] uppercase block mb-4">Our Mission</span>
            <h2 className="font-display text-3xl sm:text-4xl font-light tracking-[0.18em] uppercase mb-6 text-stone-900">
              Scent as Identity
            </h2>
            <div className="w-14 h-[1px] bg-[#D4AF37] mb-6" />
            <p className="font-sans text-sm leading-relaxed text-stone-600 mb-4">
              At Signature by Sillage d'Orient, we believe fragrance is the most intimate form of self-expression. A scent trail is invisible, yet unforgettable — it speaks before words, and lingers long after you've gone.
            </p>
            <p className="font-sans text-sm leading-relaxed text-stone-600">
              Our mission is to craft fragrances of extraordinary depth and longevity, inspired by the names and energies of the world's most precious gemstones and ancient materials. Each flacon is a jewel; each fragrance, a story.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#F4F0E8] rounded-[8px] p-10 border border-[#D4AF37]/20">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-[#D4AF37]" />
              <span className="font-display text-sm tracking-[0.25em] uppercase text-stone-900">Founded in Paris</span>
            </div>
            <p className="font-serif italic text-lg text-stone-700 leading-relaxed mb-6">
              "Sillage — the invisible, evocative trail left in the air when a person walks past. An unforgettable signature."
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[['12+', 'Signature Fragrances'], ['25%+', 'Oil Concentration'], ['100%', 'Made in France'], ['2015', 'Founded']].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl text-[#D4AF37] font-medium">{val}</div>
                  <div className="font-sans text-xs text-stone-500 tracking-wider uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F1E8] border-y border-[#D4AF37]/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="font-display text-[#D4AF37] text-xs tracking-[0.35em] uppercase block mb-3">What We Stand For</span>
            <h2 className="font-display text-3xl sm:text-4xl font-light tracking-[0.2em] uppercase text-stone-900">Our Values</h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-[6px] p-8 border border-stone-200 hover:border-[#D4AF37]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5">{v.icon}</div>
                <h3 className="font-display text-sm tracking-[0.18em] uppercase text-stone-900 mb-3">{v.title}</h3>
                <p className="font-sans text-xs leading-relaxed text-stone-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <span className="font-display text-[#D4AF37] text-xs tracking-[0.35em] uppercase block mb-3">The People Behind the Scent</span>
          <h2 className="font-display text-3xl sm:text-4xl font-light tracking-[0.2em] uppercase text-stone-900">Our Atelier</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-[#F4F0E8] rounded-[8px] p-8 border border-[#D4AF37]/20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-5">
                <Users className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="font-display text-base tracking-[0.18em] uppercase text-stone-900 mb-1">{member.name}</h3>
              <p className="font-serif italic text-xs text-[#D4AF37] mb-4">{member.role}</p>
              <p className="font-sans text-xs leading-relaxed text-stone-600">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
