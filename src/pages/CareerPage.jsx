import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Briefcase, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const openings = [
  {
    id: 1,
    title: 'Senior Perfumer',
    department: 'Creative Atelier',
    location: 'Grasse, France',
    type: 'Full-Time',
    desc: 'We are seeking a visionary perfumer with 8+ years of experience in fine fragrance to join our Grasse atelier and lead the development of our next Signature collection.',
    requirements: ['8+ years of fine fragrance experience', 'Mastery of natural and synthetic accords', 'Fluency in French and English', 'Experience with oriental and woody compositions'],
  },
  {
    id: 2,
    title: 'Luxury Brand Manager',
    department: 'Marketing',
    location: 'Paris, France',
    type: 'Full-Time',
    desc: 'Lead the global brand strategy for Signature by Sillage d\'Orient, managing campaigns, partnerships, and high-net-worth client experiences.',
    requirements: ['5+ years in luxury brand management', 'Proven experience with premium fragrance or fashion houses', 'Strong network in the French luxury industry', 'Bilingual French/English'],
  },
  {
    id: 3,
    title: 'E-Commerce & Digital Director',
    department: 'Digital',
    location: 'Paris, France (Hybrid)',
    type: 'Full-Time',
    desc: 'Own the digital commerce strategy across all channels, elevating the online luxury experience to mirror the in-store atelier visit.',
    requirements: ['7+ years in luxury e-commerce', 'Deep knowledge of Shopify, Klaviyo, and luxury CX', 'Experience in conversion-focused UX design', 'Passion for fragrance and artisan brands'],
  },
  {
    id: 4,
    title: 'Concierge & Client Relations',
    department: 'Client Experience',
    location: 'Paris, France',
    type: 'Full-Time',
    desc: 'Serve as the first point of contact for our most discerning clientele, managing bespoke orders, appointments at Place Vendôme, and VIP fragrance consultations.',
    requirements: ['3+ years in luxury hospitality or client relations', 'Fluent in 3+ languages', 'Discreet, impeccable presentation', 'Genuine passion for the art of perfumery'],
  },
  {
    id: 5,
    title: 'Fragrance Content Creator',
    department: 'Marketing',
    location: 'Remote',
    type: 'Freelance',
    desc: 'Create compelling editorial content — long-form articles, social scripts, and product stories — that embodies the elegance and depth of the Signature brand.',
    requirements: ['Proven luxury content portfolio', 'Knowledge of fragrance terminology and culture', 'Ability to write in French and English', 'Eye for premium visual storytelling'],
  },
];

const perks = [
  ['🌹', 'Annual Fragrance Allowance', 'A personal selection of Signature fragrances for yourself and loved ones.'],
  ['✈️', 'Atelier Travel', 'Trips to Grasse and Paris for creative immersion programs.'],
  ['📚', 'Perfumery Education', 'Access to the École Supérieure du Parfum and leading industry masterclasses.'],
  ['🏛️', 'Place Vendôme Events', 'Invitations to exclusive private launches, previews, and cultural evenings.'],
];

function JobCard({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="bg-white rounded-[8px] border border-stone-200 hover:border-[#D4AF37]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all overflow-hidden">
      <div className="p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer" onClick={() => setOpen(!open)}>
        <div>
          <span className="font-display text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full mb-3 inline-block">
            {job.department}
          </span>
          <h3 className="font-display text-base tracking-[0.15em] uppercase text-stone-900 mb-2">{job.title}</h3>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 font-sans">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.type}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[#D4AF37]">{open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</span>
        </div>
      </div>
      {open && (
        <div className="px-7 pb-7 border-t border-stone-100">
          <p className="font-sans text-sm text-stone-600 leading-relaxed mt-5 mb-5">{job.desc}</p>
          <h4 className="font-display text-xs tracking-[0.25em] uppercase text-stone-900 mb-3">Requirements</h4>
          <ul className="space-y-2 mb-6">
            {job.requirements.map(r => (
              <li key={r} className="flex items-start gap-2 font-sans text-xs text-stone-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-display text-xs tracking-[0.22em] uppercase font-semibold rounded-[2px] hover:bg-stone-900 hover:text-white transition-all cursor-pointer">
            Apply for This Role <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans">

      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center overflow-hidden bg-gradient-to-b from-[#F4F0E8] to-[#FAF8F5] border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 font-display text-[150px] font-bold text-stone-900/[0.025] flex items-center justify-center pointer-events-none select-none">
          CAREERS
        </div>
        <Link to="/" className="inline-flex items-center gap-2 text-[#D4AF37] font-display text-xs tracking-widest uppercase mb-10 hover:text-stone-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
          <span className="font-display text-[#D4AF37] text-xs tracking-[0.35em] uppercase block mb-4">Join Our Atelier</span>
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-[0.18em] uppercase mb-6 text-stone-900">
            Careers
          </h1>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mb-8" />
          <p className="font-serif italic text-xl sm:text-2xl text-stone-700 font-light leading-relaxed">
            We are building the future of French Oriental parfumerie. If you believe craft, beauty, and excellence are worth pursuing — we would love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Perks */}
      <section className="py-16 px-6 md:px-12 border-b border-[#D4AF37]/15 bg-[#F5F1E8]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display text-2xl font-light tracking-[0.2em] uppercase text-stone-900 text-center mb-10">Why Work With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(([emoji, title, desc]) => (
              <div key={title} className="bg-white rounded-[8px] p-6 border border-stone-200 text-center hover:border-[#D4AF37]/40 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-display text-xs tracking-[0.2em] uppercase text-stone-900 mb-2">{title}</h3>
                <p className="font-sans text-xs text-stone-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Briefcase className="w-6 h-6 text-[#D4AF37]" />
          <div>
            <span className="font-display text-[#D4AF37] text-xs tracking-[0.35em] uppercase block">Currently Hiring</span>
            <h2 className="font-display text-2xl font-light tracking-[0.18em] uppercase text-stone-900">Open Positions</h2>
          </div>
        </div>
        <div className="space-y-5">
          {openings.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F1E8] border-t border-[#D4AF37]/20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase text-stone-900 mb-4">
            Don't See Your Role?
          </h2>
          <p className="font-serif italic text-stone-600 mb-8 text-lg">Send us your portfolio and a letter. If your passion for luxury perfumery is exceptional, we'll make room.</p>
          <a href="mailto:careers@sillagedorient.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-black font-display text-xs tracking-[0.25em] uppercase font-semibold rounded-[2px] hover:bg-stone-900 hover:text-white transition-all">
            Send a General Application <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}
