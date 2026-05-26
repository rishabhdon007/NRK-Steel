import { motion } from 'motion/react';
import { Facebook, Globe, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="text-2xl font-black tracking-tighter uppercase mb-8">
              NRK STEEL
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-10 max-w-xs">
              Global leaders in precision-engineered industrial steel solutions for infrastructure, logistics, and heavy manufacturing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Globe size={16} />
              </a>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-2">Corporate</span>
            {['Company Profile', 'Sustainability', 'Privacy Policy'].map(item => (
              <a key={item} className="text-white/70 hover:text-white transition-colors text-xs font-medium" href="#">{item}</a>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-2">Resources</span>
            {['Technical Specs', 'Global Logistics', 'CAD Library'].map(item => (
              <a key={item} className="text-white/70 hover:text-white transition-colors text-xs font-medium" href="#">{item}</a>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-2">Contact</span>
            <div className="flex gap-4 items-start text-white/70 hover:text-white transition-colors text-xs">
              <MapPin size={16} className="shrink-0" />
              <span>HQ: 124 Industrial Way, Steel City, 55012</span>
            </div>
            <div className="flex gap-4 items-center text-white/70 hover:text-white transition-colors text-xs mt-2">
              <Phone size={16} className="shrink-0" />
              <span>+91 (800) NRK-STEEL</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase">
            © 2024 NRK STEEL. ALL RIGHTS RESERVED.
          </div>
          <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
            PRECISION IN STEEL <span className="w-4 h-px bg-white/20" /> STRENGTH IN DESIGN
          </div>
        </div>
      </div>
    </footer>
  );
};
