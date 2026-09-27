import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Gem, ArrowRight, RefreshCw, CheckCircle } from 'lucide-react';
import { FRAGRANCES } from '../data/products';

export default function ScentQuizModal({ onClose, onSelectProduct }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    aura: '',
    family: '',
    occasion: ''
  });
  const [recommendation, setRecommendation] = useState(null);

  const stepsData = [
    {
      id: 1,
      question: 'What aura or presence do you wish to command?',
      key: 'aura',
      options: [
        { label: 'Royal Distinction & Mystic Power', val: 'power', match: 'oud' },
        { label: 'Sensual Elegance & Velvet Pureness', val: 'elegance', match: 'musk' },
        { label: 'Eternal Romance & Passionate Grace', val: 'romance', match: 'rose' },
        { label: 'Warm Sunlit Radiance & Opulence', val: 'radiance', match: 'ambre' }
      ]
    },
    {
      id: 2,
      question: 'Which olfactory notes awaken your senses?',
      key: 'family',
      options: [
        { label: 'Rare Agarwood, Cardamom & Saffron', val: 'wood', match: 'oud' },
        { label: 'White Peach, Jasmine Sambac & Soft Musk', val: 'musk', match: 'musk' },
        { label: 'Damask Rose, Peppercorn & Patchouli', val: 'rose', match: 'rose' },
        { label: 'Golden Baltic Amber & Madagascar Vanilla', val: 'amber', match: 'ambre' }
      ]
    },
    {
      id: 3,
      question: 'For which occasions do you seek your signature?',
      key: 'occasion',
      options: [
        { label: 'Grand Balls, Black-Tie Galas & Evening Rituals', val: 'gala', match: 'oud' },
        { label: 'Daily Haute Signature Aura', val: 'daily', match: 'musk' },
        { label: 'Intimate Moonlight Encounters & Romance', val: 'romance', match: 'rose' }
      ]
    }
  ];

  const handleSelectOption = (key, val, matchProduct) => {
    const updatedAnswers = { ...answers, [key]: val };
    setAnswers(updatedAnswers);

    if (step < 3) {
      setStep(step + 1);
    } else {
      // Calculate match
      const matchedItem = FRAGRANCES.find((p) => p.id === matchProduct) || FRAGRANCES[0];
      setRecommendation(matchedItem);
    }
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ aura: '', family: '', occasion: '' });
    setRecommendation(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#121212] rounded-[8px] p-8 sm:p-12 max-w-2xl w-full relative shadow-[0_25px_70px_rgba(0,0,0,0.95)] text-center text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-[#D4AF37] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!recommendation ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-display tracking-widest uppercase mb-4">
              <Gem className="w-3.5 h-3.5" />
              <span>STEP {step} OF 3 • FIND YOUR GEMSTONE MATCH</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl tracking-[0.18em] uppercase text-white font-light mb-8">
              {stepsData[step - 1].question}
            </h2>

            <div className="space-y-3 mb-8">
              {stepsData[step - 1].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(stepsData[step - 1].key, option.val, option.match)}
                  className="w-full py-4 px-6 rounded-[4px] bg-[#1A1A1A] text-left font-display text-xs tracking-wider uppercase text-neutral-200 hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span>{option.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
              <div
                className="bg-[#D4AF37] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-[#D4AF37] mb-4 animate-bounce" />
            
            <span className="font-display text-xs tracking-[0.3em] text-[#D4AF37] uppercase mb-2">
              YOUR BESPOKE GEMSTONE FRAGRANCE MATCH
            </span>

            <h2 className="font-display text-3xl sm:text-4xl tracking-[0.2em] text-white uppercase font-light mb-2">
              {recommendation.name}
            </h2>
            <p className="font-serif italic text-lg text-[#D4AF37] mb-6">
              "{recommendation.subtitle}"
            </p>

            <div className="relative w-full max-w-[280px] h-[260px] p-4 flex items-center justify-center mb-6 group/quizimg cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/30 via-transparent to-transparent opacity-0 group-hover/quizimg:opacity-100 group-hover/quizimg:scale-125 transition-all duration-700 pointer-events-none rounded-full blur-xl" />
              <img
                src={recommendation.imageBox}
                alt={recommendation.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out group-hover/quizimg:scale-112 group-hover/quizimg:-translate-y-3 group-hover/quizimg:drop-shadow-[0_25px_45px_rgba(212,175,55,0.45)]"
              />
            </div>

            <p className="font-sans text-xs text-neutral-300 max-w-md leading-relaxed mb-8">
              {recommendation.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  onClose();
                  onSelectProduct(recommendation.id);
                }}
                className="px-8 py-4 bg-[#D4AF37] text-black font-display text-xs tracking-[0.25em] font-semibold uppercase hover:bg-white transition-all rounded-[2px] cursor-pointer"
              >
                VIEW YOUR MATCH SPECIFICATIONS
              </button>

              <button
                onClick={handleReset}
                className="p-4 bg-[#1A1A1A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-[4px] cursor-pointer transition-all"
                title="Retake Quiz"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
