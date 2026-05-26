import { motion, AnimatePresence } from 'motion/react';
import { Search, Ruler, Layers, Minus, Square, Circle, Disc, ZoomIn, ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productData from '../data/products.json';
import { MetalWeightCalculator } from '../components/MetalWeightCalculator';
import { ProductCompare } from '../components/ProductCompare';

const Lightbox = ({ images, currentIndex, onClose }: { images: string[], currentIndex: number, onClose: () => void }) => {
  const [index, setIndex] = useState(currentIndex);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        onClick={onClose}
      >
        <X size={40} />
      </button>

      <div className="relative max-w-6xl w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <button 
          className="absolute left-0 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full"
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
        >
          <ChevronLeft size={32} />
        </button>

        <motion.img 
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-h-[85vh] max-w-full object-contain"
          src={images[index]}
          referrerPolicy="no-referrer"
        />

        <button 
          className="absolute right-0 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full"
          onClick={() => setIndex((index + 1) % images.length)}
        >
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white w-8' : 'bg-white/20'}`} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="border border-outline-variant bg-white group hover:border-catalog-primary transition-all duration-300 shadow-sm hover:shadow-xl relative flex flex-col h-full overflow-hidden"
      >
        <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative cursor-pointer" onClick={() => setShowLightbox(true)}>
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: isHovered ? 1.15 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover" 
              src={images[currentIndex]} 
              alt={title}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 steel-overlay opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          {/* Hover Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm p-8 flex flex-col justify-end text-white pointer-events-none"
          >
            <h4 className="text-white font-black text-xl mb-2 tracking-tight">{title}</h4>
            <p className="text-white/80 text-xs font-light leading-relaxed">{description}</p>
          </motion.div>

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={(e) => { e.stopPropagation(); setShowLightbox(true); }}
              className="bg-white/90 hover:bg-white p-2 text-primary shadow-lg transition-transform hover:scale-110"
            >
              <ZoomIn size={16} />
            </button>
            <button 
              onClick={nextImage}
              className="bg-white/90 hover:bg-white p-2 text-primary shadow-lg transition-transform hover:scale-110"
            >
              {currentIndex + 1}/{images.length}
            </button>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="font-bold text-xl text-primary mb-2 tracking-tight">{title}</h3>
          <p className="text-outline text-sm mb-6 leading-relaxed flex-grow">{description}</p>
          <div className="flex gap-2">
            <Link 
              to={`/products/${id}`}
              className="flex-grow border-2 border-catalog-primary py-3 px-4 font-bold text-[10px] tracking-widest uppercase text-catalog-primary hover:bg-catalog-primary hover:text-white transition-all text-center flex items-center justify-center gap-2"
            >
              Details <ArrowRight size={12} />
            </Link>
            <button className="border-2 border-primary/10 bg-slate-50 py-3 px-4 font-bold text-[10px] tracking-widest uppercase text-primary hover:bg-primary hover:text-white transition-all">
              Inquire
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showLightbox && <Lightbox images={images} currentIndex={currentIndex} onClose={() => setShowLightbox(false)} />}
      </AnimatePresence>
    </>
  );
};

const SectionHeader = ({ title, range }: { title: string, range: string }) => (
  <div className="flex items-baseline gap-4 mb-8">
    <h2 className="text-2xl font-black text-primary uppercase tracking-tight">{title}</h2>
    <div className="h-px bg-slate-300 flex-grow"></div>
    <span className="font-bold text-[10px] tracking-widest text-outline uppercase">{range}</span>
  </div>
);

const StructuralCard = ({ title, description, icon: Icon, cat }: { title: string, description: string, icon: any, cat: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="border border-outline-variant bg-white group hover:border-catalog-primary transition-all duration-300 shadow-sm"
  >
    <div className="p-8 border-b border-outline-variant flex justify-between items-center bg-slate-50">
      <Icon className="text-catalog-primary" size={40} strokeWidth={1.5} />
      <span className="font-bold text-[10px] text-outline tracking-widest uppercase">{cat}</span>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl text-primary mb-2 tracking-tight">{title}</h3>
      <p className="text-outline text-sm mb-6 leading-relaxed">{description}</p>
      <button className="w-full border-2 border-catalog-primary py-3 px-4 font-bold text-[10px] tracking-widest uppercase text-catalog-primary hover:bg-catalog-primary hover:text-white transition-all">
        Inquire
      </button>
    </div>
  </motion.div>
);

const FinishingCard = ({ title, description, badge }: { title: string, description: string, badge: string }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="bg-white border border-outline-variant p-6 flex flex-col justify-between hover:border-catalog-primary transition-all duration-300 shadow-sm"
  >
    <div>
      <span className="font-bold text-[9px] tracking-[0.2em] text-catalog-primary bg-primary-fixed px-2 py-1 mb-4 inline-block uppercase">
        {badge}
      </span>
      <h3 className="font-bold text-xl text-primary mb-2 tracking-tight">{title}</h3>
      <p className="text-outline text-sm mb-6 leading-relaxed">{description}</p>
    </div>
    <button className="bg-catalog-primary text-white py-4 px-4 font-bold text-[10px] tracking-widest uppercase hover:bg-primary-container transition-all">
      Inquire
    </button>
  </motion.div>
);

export default function Products() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background pt-12"
    >
      <header className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16">
        <div className="border-l-8 border-primary pl-8">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-[10px] tracking-widest text-primary uppercase mb-4 block"
          >
            Industrial Precision
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tighter"
          >
            Product Catalog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-outline max-w-2xl font-light"
          >
            A comprehensive range of high-grade steel solutions engineered for global infrastructure and architectural integrity.
          </motion.p>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-24 pb-24">
        {/* Range 1 */}
        <section>
          <SectionHeader title="Flat & Rolled Products" range="RANGE 01" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.products.slice(0, 6).map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                images={product.images}
                title={product.title}
                description={product.shortDescription}
              />
            ))}
          </div>
        </section>

        {/* Range 2 */}
        <section>
          <SectionHeader title="Structural Sections" range="RANGE 02" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StructuralCard icon={Ruler} cat="CAT_7" title="Angles" description="Equal and unequal angle bars for transmission towers and fabrication." />
            <StructuralCard icon={Layers} cat="CAT_8" title="Joists" description="Heavy-duty structural joists for multi-story floor support systems." />
            <StructuralCard icon={Minus} cat="CAT_9" title="Flats" description="Steel flat bars for grating, industrial machinery, and fasteners." />
            <StructuralCard icon={Square} cat="CAT_10" title="Squares" description="Solid square bars for industrial gates, grills, and shafts." />
            <StructuralCard icon={Circle} cat="CAT_11" title="Rounds" description="Smooth round bars used in machining and infrastructure reinforcement." />
            <StructuralCard icon={Disc} cat="CAT_12" title="Pipes" description="Seamless and ERW pipes for fluid transport and structural usage." />
          </div>
        </section>

        {/* Range 3 */}
        <section>
          <SectionHeader title="Finishing & Purlins" range="RANGE 03" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FinishingCard badge="ENGINEERED" title="Tubes" description="Hollow structural sections (HSS) in rectangular and square formats." />
            <FinishingCard badge="FABRICATION" title="Sheets" description="Thin-gauge steel sheets for body panels and industrial enclosures." />
            <FinishingCard badge="ROOFING" title="Z-Purlins" description="Overlapping structural members for economical roof and wall support." />
            <FinishingCard badge="ROOFING" title="C-Purlins" description="Cold-formed structural channels for secondary framing systems." />
            <FinishingCard badge="CONSTRUCTION" title="Decking Sheets" description="Corrugated profiles for composite floor slabs and roof systems." />
            <FinishingCard badge="ARCHITECTURAL" title="Color Coated Sheets" description="Pre-painted galvanized steel for aesthetic and durable cladding." />
          </div>
        </section>

        {/* Technical Estimations Suite */}
        <section className="pt-8">
          <SectionHeader title="Theoretical Material Estimator" range="MATH UNIT" />
          <MetalWeightCalculator />
        </section>

        {/* Side-by-side technical specification comparison */}
        <section className="pt-8">
          <SectionHeader title="Metallurgy Decision Ledger" range="STANDARDS GRID" />
          <ProductCompare />
        </section>
      </div>
    </motion.div>
  );
}
