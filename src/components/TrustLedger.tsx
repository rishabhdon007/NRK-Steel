import React from 'react';
import { motion } from 'motion/react';
import { Network, Activity, ShieldCheck, Flame } from 'lucide-react';

interface Partner {
  name: string;
  sub: string;
  icon: React.ComponentType<{ className?: string, size?: number }>;
}

const partners: Partner[] = [
  { name: "L&T INFRASTRUCTURE", sub: "Heavy Civils", icon: ShieldCheck },
  { name: "TATA PROJECT HUB", sub: "Metallurgical", icon: Flame },
  { name: "JINDAL SYSTEMS", sub: "Structural Pipes", icon: Network },
  { name: "RELIANCE POWER", sub: "Fossil & Hydro", icon: Activity },
  { name: "ADANI LOGISTICS", sub: "Seaports & Terminals", icon: ShieldCheck },
  { name: "NHAI PROJECTS", sub: "Highways Authority", icon: Network },
  { name: "BHEL CONSTRUCTS", sub: "Heavy Equipments", icon: Flame },
  { name: "GMR INFRA DECK", sub: "Aerodrome Civils", icon: Activity }
];

// Double the items to make the list perfectly seamless
const marqueeItems = [...partners, ...partners];

export const TrustLedger: React.FC = () => {
  return (
    <div className="bg-slate-50 border-y border-slate-200/60 py-12 relative overflow-hidden select-none">
      
      {/* CAD technical outline label */}
      <div className="absolute top-3 left-6 md:left-12 font-mono text-[8px] text-slate-400 tracking-[0.25em] flex items-center gap-1.5 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
        Client Affiliations & Key Accounts
      </div>
      <div className="absolute top-3 right-6 md:right-12 font-mono text-[8px] text-slate-400 tracking-[0.25em] hidden sm:block">
        ESTABLISHED 1994 // ACCREDITED GRADE
      </div>

      <div className="max-w-[1440px] mx-auto px-6 mb-6 mt-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-[10px] font-mono tracking-[0.3em] font-black uppercase text-secondary">
            TRUSTED PARTNER LEDGER
          </h3>
          <p className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight leading-none mt-1">
            Anchoring India's Key Infrastructure
          </p>
        </div>
        <p className="text-[10px] text-slate-400 font-mono tracking-wide max-w-sm md:text-right leading-relaxed">
          Material supplies deployed inside high-tension suspension spans, seismic-grade concrete foundations, and heavy logistical distribution centers.
        </p>
      </div>

      {/* Outer marquee viewport Container */}
      <div className="relative w-full overflow-hidden bg-white py-6 border-y border-slate-100 flex items-center">
        {/* Soft fading gradient dividers on left and right for high-end aesthetic overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <motion.div
          className="flex gap-12 select-none whitespace-nowrap"
          animate={{ x: [0, -1400] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear"
          }}
          style={{ width: "max-content" }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-8 py-3 bg-slate-50 border border-slate-100/85 hover:border-secondary hover:bg-white hover:shadow-sm transition-all duration-300 group rounded-xs cursor-pointer shrink-0"
            >
              <div className="w-10 h-10 bg-white border border-slate-200 group-hover:bg-primary group-hover:border-primary rounded-xs flex items-center justify-center transition-all duration-300">
                <item.icon className="text-secondary group-hover:text-white transition-colors duration-300" size={18} strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col">
                <span className="font-sans font-black text-xs md:text-sm text-primary tracking-tighter group-hover:text-secondary transition-colors uppercase leading-none duration-300">
                  {item.name}
                </span>
                <span className="font-mono text-[8px] tracking-wide text-slate-400 uppercase mt-1 leading-none">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>


    </div>
  );
};
