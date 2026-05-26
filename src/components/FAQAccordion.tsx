import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "MATERIALS & QUALITY",
    question: "What certified steel grades are permanently in NRK inventory?",
    answer: "We maintain deep physical reserves of S235JR, S355JR (EN 10025), IS 2062 (Grade A/B), ASTM A1008 / JIS G3141 (Cold Rolled Coils), and high-seismic Fe 500D / 550D TMT Rebars. All sections and plates are 100% traceable with original mill-stamped documentation."
  },
  {
    category: "COMPLIANCE & TRACEABILITY",
    question: "Do you supply official Mill Test Certificates (MTC)?",
    answer: "Yes. Every single dispatch invoice includes an authentic Mill Test Certificate conforming precisely to standard EN 10204 3.1. These documents state exact optical spectrometry chemical analyses (C, Mn, S, P %, CE) and mechanical test limits (Yield stress, UTS, and elongation percentages)."
  },
  {
    category: "PROCESSING & CUSTOM DIMENSIONS",
    question: "What custom processing and Cut-To-Length (CTL) capacities do you support?",
    answer: "Our modern processing hubs host high-speed Cut-To-Length (CTL) and shearing machines. We can decoil and flatten high-tensile steel coils from 1.20mm up to 12.00mm thickness, maintaining strict length tolerances of ±1.5mm with certified surface flattening."
  },
  {
    category: "LOGISTICS & FREIGHT",
    question: "What are the dispatch lead times and freight service scopes?",
    answer: "Standard inventory profiles are loaded and dispatched within 24–48 hours from our central hubs. For customized profile allocations, standard lead times range from 5 to 7 business days. We provide direct container freight across Central and Western India, including critical infrastructure sites in Maharashtra, Gujarat, MP, CG, and Jharkhand."
  },
  {
    category: "COMMERCIALS & PROCUREMENTS",
    question: "How are custom corporate volume contracts managed?",
    answer: "We support scheduled inventory-holding contracts with fixed pricing options for core infrastructure developers. This ensures continuous material distribution schedules despite market volatility, backed by verified credit terms and dedicated account metallurgists."
  }
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-900 text-white p-8 md:p-16 border border-slate-800 rounded-sm relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="faq-blueprint-grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#faq-blueprint-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center md:text-left mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-secondary justify-center md:justify-start">
              <HelpCircle size={16} />
              <span className="text-[10px] font-mono tracking-widest font-black uppercase">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Client Knowledge Base
            </h2>
            <p className="text-xs text-slate-400 font-light mt-3 max-w-xl">
              Understand the metallurgical specifications, traceability standards, and logistics channels of Central India's leading steel enterprise.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-[9px] text-slate-400 border border-white/10 px-4 py-2 bg-white/5 mx-auto md:mx-0">
            <ShieldCheck size={14} className="text-secondary animate-pulse" />
            <span>MTC EN 10204 ENQUIRY ASSURED</span>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`border transition-all duration-300 ${
                  isOpen 
                    ? 'border-secondary/40 bg-white/[0.03]' 
                    : 'border-white/10 bg-white/5 hover:bg-white/[0.08]'
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 group focus:outline-none"
                >
                  <div className="space-y-1.5 flex-grow">
                    <span className="text-[9px] font-mono tracking-widest text-[#ff5500] font-black block">
                      {faq.category}
                    </span>
                    <h4 className="text-base md:text-lg font-black tracking-tight text-white group-hover:text-secondary transition-colors uppercase leading-snug">
                      {faq.question}
                    </h4>
                  </div>
                  
                  {/* Circle wrapper icon rotating */}
                  <div className={`w-10 h-10 border flex items-center justify-center rounded-xs transition-colors shrink-0 ${
                    isOpen 
                      ? 'border-secondary bg-secondary text-white' 
                      : 'border-white/20 text-slate-400 group-hover:border-white/40'
                  }`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>
                </button>

                {/* Animated expandable content pane */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="text-sm text-slate-300 font-light leading-relaxed max-w-4xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
