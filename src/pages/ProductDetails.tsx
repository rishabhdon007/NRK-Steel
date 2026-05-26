import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useRef } from 'react';
import { ChevronRight, Play, ArrowRight, FileText, Headphones, Ruler, Verified, Truck, SquareArrowOutUpRight, Info, ChevronLeft } from 'lucide-react';
import productData from '../data/products.json';

const Tooltip = ({ content, children }: { content: string, children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-primary text-white text-[10px] uppercase tracking-widest font-bold shadow-xl z-50 pointer-events-none text-center"
          >
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = productData.products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const techSpecsRef = useRef<HTMLDivElement>(null);

  const scrollToSpecs = () => {
    techSpecsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-black text-primary mb-4 tracking-tighter">Product Not Found</h1>
          <Link to="/products" className="text-catalog-primary hover:underline uppercase font-bold text-xs tracking-widest">Back to Catalog</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-surface text-on-surface font-body-md"
    >
      <main className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Breadcrumb */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-outline font-bold text-[10px] tracking-widest mb-6 uppercase">
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-primary">{product.title}</span>
          </div>
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-black text-primary border-l-8 border-primary pl-8 tracking-tighter uppercase"
          >
            {product.title}
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Visual Assets */}
          <div className="lg:col-span-7 space-y-8">
            {/* Carousel Section */}
            <div className="space-y-4">
              <div className="aspect-[16/9] bg-gray-200 border border-outline-variant overflow-hidden group relative shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full object-cover" 
                    src={product.images[activeImage]} 
                    alt={product.title}
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setActiveImage((activeImage - 1 + product.images.length) % product.images.length)}
                    className="bg-white/90 p-3 hover:bg-primary hover:text-white transition-all shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setActiveImage((activeImage + 1) % product.images.length)}
                    className="bg-white/90 p-3 hover:bg-primary hover:text-white transition-all shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 bg-primary text-white px-4 py-2 font-bold uppercase text-[10px] tracking-widest shadow-lg">
                  Industrial Grade: {product.specSummary?.Material || 'Primary Steel'}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-24 h-24 border-2 transition-all overflow-hidden bg-white ${activeImage === i ? 'border-primary scale-95' : 'border-outline-variant hover:border-primary opacity-60 hover:opacity-100'}`}
                  >
                    <img 
                      className="w-full h-full object-cover" 
                      src={img} 
                      alt={`Detail ${i}`}
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Prominent Video Section */}
            {product.processVideo && (
              <div className="relative bg-slate-900 border border-outline-variant overflow-hidden aspect-video group shadow-xl">
                <img 
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src={product.processVideo} 
                  alt="Process Video"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/20 group-hover:bg-transparent transition-colors">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-24 h-24 bg-white text-primary flex items-center justify-center rounded-full shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:bg-primary hover:text-white transition-all duration-500 mb-6"
                  >
                    <Play fill="currentColor" size={32} />
                  </motion.button>
                  <div className="text-center">
                    <span className="block text-white font-black tracking-[0.2em] uppercase text-sm mb-2 drop-shadow-lg">Production Showcase</span>
                    <span className="block text-white/70 font-bold uppercase text-[8px] tracking-widest px-4 py-1 border border-white/20">Watch Industrial Process</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Product Information */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="border border-outline-variant p-8 md:p-12 bg-white space-y-8 shadow-sm">
              <div>
                <h2 className="text-2xl font-black text-primary mb-4 tracking-tighter uppercase">Precision Engineering</h2>
                <p className="text-on-surface-variant font-light leading-relaxed text-lg">
                  {product.longDescription || product.shortDescription}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-8 border-y border-outline-variant py-8">
                {product.specSummary && Object.entries(product.specSummary).map(([key, value]) => (
                  <div key={key} className="group/spec">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[10px] text-outline tracking-widest uppercase block">{key}</span>
                      {product.specDescriptions && product.specDescriptions[key as keyof typeof product.specDescriptions] && (
                        <Tooltip content={product.specDescriptions[key as keyof typeof product.specDescriptions] as string}>
                          <Info size={12} className="text-outline cursor-help hover:text-primary transition-colors" />
                        </Tooltip>
                      )}
                    </div>
                    <span className="text-xl font-black text-primary tracking-tight">{String(value)}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-4">
                <button className="bg-primary text-white h-16 flex items-center justify-center font-bold uppercase tracking-widest text-[10px] hover:bg-primary-container transition-all group">
                  Inquire Now
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="border-2 border-primary text-primary h-14 flex items-center justify-center font-bold uppercase tracking-widest text-[10px] hover:bg-surface-container-low transition-all">
                    Spec Sheet <FileText size={14} className="ml-2" />
                  </button>
                  <button className="bg-surface-container-high text-primary h-14 flex items-center justify-center font-bold uppercase tracking-widest text-[10px] hover:bg-surface-container-highest transition-all">
                    Talk to Sales <Headphones size={14} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Related Variants */}
            {product.variants && (
              <div className="space-y-6">
                <h3 className="font-bold text-[10px] text-primary tracking-widest uppercase pl-4 border-l-4 border-primary">Available Variants</h3>
                <div className="grid grid-cols-1 gap-4">
                  {product.variants.map((v, i) => (
                    <div 
                      key={i} 
                      onClick={scrollToSpecs}
                      className="border border-outline-variant p-5 flex items-center justify-between hover:bg-white hover:border-primary transition-all group cursor-pointer shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <SquareArrowOutUpRight size={20} />
                        </div>
                        <span className="font-bold text-lg text-primary tracking-tight">{v.title}</span>
                      </div>
                      <ChevronRight size={16} className="text-outline group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technical Specifications Table */}
        {product.technicalSpecs && (
          <section className="mt-32" ref={techSpecsRef}>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 text-center tracking-tighter uppercase">Technical Specifications</h2>
            <div className="overflow-x-auto border border-outline-variant shadow-lg">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-8 font-bold text-[10px] tracking-widest uppercase border-r border-white/10">Property</th>
                    <th className="p-8 font-bold text-[10px] tracking-widest uppercase border-r border-white/10">Standard Value</th>
                    <th className="p-8 font-bold text-[10px] tracking-widest uppercase">Test Method</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {product.technicalSpecs.map((spec, i) => (
                    <tr key={i} className="border-b border-outline-variant hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-black text-primary text-lg">{spec.property}</td>
                      <td className="p-8 text-on-surface-variant font-light">{spec.value}</td>
                      <td className="p-8 font-bold text-[10px] tracking-widest text-outline uppercase">{spec.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Bento Feature Grid */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Ruler, title: "High Precision", desc: "Guaranteed thickness consistency across the entire length within ±0.02mm." },
            { icon: Verified, title: "Quality Grade", desc: "Every batch undergoes rigorous ultrasonic and chemical analysis." },
            { icon: Truck, title: "Global Supply", desc: "Integrated logistics network ensures timely delivery for heavy infrastructure." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 bg-slate-50 border-l-8 border-primary shadow-sm"
            >
              <feature.icon className="text-primary mb-6" size={40} strokeWidth={1} />
              <h4 className="text-2xl font-black text-primary mb-3 tracking-tighter uppercase">{feature.title}</h4>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
