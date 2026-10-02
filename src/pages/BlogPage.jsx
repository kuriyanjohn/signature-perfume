import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    category: 'Fragrance Guide',
    title: 'The Art of Layering Fragrances: A Masterclass',
    excerpt: 'Discover how master perfumers combine scents to create entirely new olfactory dimensions — and how you can do it at home.',
    date: 'September 28, 2026',
    readTime: '6 min read',
    image: '/images/products/oud-set.png',
  },
  {
    id: 2,
    category: 'Heritage',
    title: 'Grasse: The Birthplace of Modern Perfumery',
    excerpt: 'A journey through the hills of Provence, where generations of master noses have cultivated the finest floral essences in the world.',
    date: 'September 15, 2026',
    readTime: '8 min read',
    image: '/images/products/rose-set.png',
  },
  {
    id: 3,
    category: 'Ingredients',
    title: 'Oud — The Liquid Gold of the Orient',
    excerpt: 'From the infected heartwood of the agarwood tree comes the rarest, most prized ingredient in all of perfumery. We explore its history.',
    date: 'September 3, 2026',
    readTime: '5 min read',
    image: '/images/products/musk-set.png',
  },
  {
    id: 4,
    category: 'Lifestyle',
    title: 'How to Choose Your Signature Scent',
    excerpt: 'Your fragrance is your invisible signature. Our guide helps you navigate notes, accords, and concentrations to find your perfect match.',
    date: 'August 20, 2026',
    readTime: '7 min read',
    image: '/images/products/musk-bottle.png',
  },
  {
    id: 5,
    category: 'Behind the Scenes',
    title: 'Inside the Sillage d\'Orient Atelier',
    excerpt: 'A rare look inside our Parisian studio — from the raw materials vault to the final presentation of a completed flacon.',
    date: 'August 10, 2026',
    readTime: '4 min read',
    image: '/images/products/oud-set.png',
  },
  {
    id: 6,
    category: 'Gemstones',
    title: 'The Precious Stones That Inspired Our Collection',
    excerpt: 'Each Signature fragrance carries the soul of a gemstone. We reveal the stories, energies, and allure behind our inspirations.',
    date: 'July 29, 2026',
    readTime: '6 min read',
    image: '/images/products/rose-set.png',
  },
];

const categories = ['All', 'Fragrance Guide', 'Heritage', 'Ingredients', 'Lifestyle', 'Behind the Scenes', 'Gemstones'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans">

      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center overflow-hidden bg-gradient-to-b from-[#F4F0E8] to-[#FAF8F5] border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 font-display text-[180px] font-bold text-stone-900/[0.025] flex items-center justify-center pointer-events-none select-none">
          BLOG
        </div>
        <Link to="/" className="inline-flex items-center gap-2 text-[#D4AF37] font-display text-xs tracking-widest uppercase mb-10 hover:text-stone-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
          <span className="font-display text-[#D4AF37] text-xs tracking-[0.35em] uppercase block mb-4">The Atelier Journal</span>
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-[0.18em] uppercase mb-6 text-stone-900">
            Our Blog
          </h1>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mb-8" />
          <p className="font-serif italic text-xl sm:text-2xl text-stone-700 font-light leading-relaxed">
            Stories of scent, craftsmanship, and the pursuit of olfactory perfection — from our Parisian atelier to you.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 md:px-12 border-b border-[#D4AF37]/15 bg-white sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`font-display text-[10px] tracking-[0.22em] uppercase px-4 py-2 rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                  : 'bg-transparent text-stone-600 border-stone-300 hover:border-[#D4AF37] hover:text-stone-900'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, idx) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-[8px] border border-stone-200 overflow-hidden group hover:border-[#D4AF37]/40 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)] transition-all cursor-pointer">
              <div className="relative h-52 overflow-hidden bg-[#F5F1E8] flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-all" />
                <img src={post.image} alt={post.title} className="h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-sans text-[10px] text-stone-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-base tracking-[0.12em] uppercase text-stone-900 mb-3 leading-snug group-hover:text-[#B38728] transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-xs leading-relaxed text-stone-500 mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] text-stone-400">{post.date}</span>
                  <span className="inline-flex items-center gap-1.5 font-display text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] group-hover:text-stone-900 transition-colors">
                    Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F1E8] border-t border-[#D4AF37]/20 text-center">
        <div className="max-w-2xl mx-auto">
          <BookOpen className="w-8 h-8 text-[#D4AF37] mx-auto mb-5" />
          <h2 className="font-display text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase text-stone-900 mb-4">
            Never Miss a Story
          </h2>
          <p className="font-serif italic text-stone-600 mb-8 text-lg">Subscribe to the Atelier Journal for weekly stories, fragrance guides, and exclusive previews.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address..." className="flex-1 px-5 py-3.5 border border-stone-300 font-sans text-xs rounded-[4px] focus:outline-none focus:border-[#D4AF37] bg-white text-stone-900 placeholder-stone-400" />
            <button className="px-6 py-3.5 bg-[#D4AF37] text-black font-display text-xs tracking-[0.22em] uppercase font-semibold rounded-[2px] hover:bg-stone-900 hover:text-white transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
