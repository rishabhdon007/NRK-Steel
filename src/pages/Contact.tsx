import { motion } from 'motion/react';
import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Download, ArrowRight, Handshake, Briefcase, Newspaper, Send, Play, Pause } from 'lucide-react';

export default function Contact() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log(err));
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-surface text-on-surface"
    >
      {/* Immersive Video Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 overflow-hidden bg-primary text-white select-none pt-20">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-35 transition-opacity duration-1000 saturate-[0.8] mix-blend-luminosity grayscale"
            poster="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-welder-working-factory-scene-42222-large.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Overlays to isolate contrast for supreme readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
          
          {/* Architectural Blueprint Line Overlay */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0">
            <div className="grid grid-cols-6 lg:grid-cols-12 h-full w-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white/60 h-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-8 text-xs font-bold tracking-widest uppercase text-secondary"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Instant Support & Consulting
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 uppercase"
          >
            Connect <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-secondary select-none">
              With Us.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-12"
          >
            Ready for your next project? Get in touch with our certified engineers and representative managers for complete transparency, precise pricing, and reliable steel supply.
          </motion.p>
        </div>

        {/* Play/Pause Ambient Loop Button */}
        <button
          onClick={toggleVideoPlay}
          className="absolute bottom-12 right-12 z-20 bg-black/65 backdrop-blur-md hover:bg-slate-900 border border-white/10 px-3 py-1.5 text-white font-mono text-[8.5px] uppercase tracking-wider rounded-md flex items-center gap-1.5 transition-all outline-none cursor-pointer"
          title={isVideoPlaying ? "Pause ambient video loop" : "Play ambient video loop"}
        >
          {isVideoPlaying ? (
            <>
              <Pause size={10} className="fill-white" />
              <span>PAUSE AMBIENT LOOP</span>
            </>
          ) : (
            <>
              <Play size={10} className="fill-white" />
              <span>PLAY AMBIENT LOOP</span>
            </>
          )}
        </button>
      </section>

      {/* Main Contact Content */}
      <section className="max-w-[1440px] mx-auto px-8 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        {/* Technical Inquiry Form */}
        <div className="lg:col-span-7 bg-slate-50 p-12 md:p-20 shadow-sm">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tighter text-primary mb-4 uppercase">Technical Inquiry</h2>
            <p className="text-slate-500 font-light">Provide your project specifications below for a detailed structural consultation.</p>
          </div>
          <form className="space-y-10" onClick={(e) => e.preventDefault()}>
            <div className="space-y-8">
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Full Name</label>
                <input 
                  className="w-full bg-transparent border-0 border-b-2 border-slate-200 focus:border-primary focus:ring-0 px-0 py-4 transition-all outline-none text-xl font-medium" 
                  placeholder="e.g. Johnathan Doe" 
                  type="text"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Work Email</label>
                <input 
                  className="w-full bg-transparent border-0 border-b-2 border-slate-200 focus:border-primary focus:ring-0 px-0 py-4 transition-all outline-none text-xl font-medium" 
                  placeholder="j.doe@enterprise.com" 
                  type="email"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold tracking-widest uppercase text-primary">Project Brief & Requirements</label>
                <textarea 
                  className="w-full bg-transparent border-0 border-b-2 border-slate-200 focus:border-primary focus:ring-0 px-0 py-4 transition-all outline-none resize-none text-xl font-medium" 
                  placeholder="Briefly describe your requirements..." 
                  rows={4}
                ></textarea>
              </div>
              <button 
                className="w-full bg-primary text-white font-black uppercase tracking-[0.2em] text-[10px] py-6 hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                Submit Technical Request
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>

        {/* Global HQ Info */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-16">
          <div className="space-y-12 bg-white p-10 shadow-sm border-l-8 border-primary">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-6 block">Global Headquarters</span>
              <h3 className="text-3xl font-black text-primary mb-4 leading-tight tracking-tighter uppercase">NRK STEEL TOWER</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                Industrial Zone B-12, Hub Parkway<br/>
                Chennai, Tamil Nadu 600032<br/>
                India
              </p>
            </div>
            <div className="space-y-8 border-t border-slate-100 pt-8">
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1" size={20} />
                <div>
                  <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Direct Lines</span>
                  <p className="text-primary text-xl font-black tracking-tight">+91 44 2836 1000</p>
                  <p className="text-primary text-xl font-black tracking-tight">+91 44 2836 2000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                  <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Electronic Inquiries</span>
                  <p className="text-slate-700 text-lg font-bold">support@nrkiron.com</p>
                  <p className="text-slate-700 text-lg font-bold">sales@nrkiron.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-square w-full relative bg-slate-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
            <img 
              alt="Industrial City Map" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeBJmMkijBUZrdFL_RQjftiPOGBkNtK9o6HS6jGE5RLQpvh6oU8mY9WrhENpcEM3O-HwHEcab7QgaeGtNfA1kkPbJRkQ0PSsKmvRvsg5A9xCZlAniGFz3UDADUw4ryXrSU_4MkCVI6neHqb96E1LoYZcf9qnYXVLBm9bALZ9wnkL-FvsAGkrzStu-SQ_DCljTAni_238ZXnlrqkd5MamKJ_zkHSDgfp_NykEuYUat7gsIXAIrgG6IJWyXKXCr6ic3BK88TMLoXR0A"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center shadow-2xl">
                <MapPin size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="bg-primary text-white py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <motion.div 
              whileHover={{ rotate: 0 }}
              initial={{ rotate: -3 }}
              className="bg-white p-4 shadow-2xl relative z-20 max-w-md transition-transform"
            >
              <img 
                alt="Product Catalog" 
                className="w-full aspect-[3/4] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEiQc7C2BYvTlx2mhDB5HI54A65ek5mfWL88i_7g7YqLV3OkbIwgEcoxS7H_CiyWn2Kjj018D5HgqQ1uB3DGgTDzYRwPD8zkSoReL-Qr-AxtpbEidAfucgZ-agNd_PSbgRjhDLebXK6jcGNijIUncqWjUJe6QBVtmkLv3TNa04hiRfychogoLNVuEMUE7yRP9JjEA8YsUG63xoJ60pBpNkXdli1X81gJZ4Xe3wuQkrfEzFSzveLOzeFq5rHSA1AL5i6vzSxF1pVWQ"
              />
              <div className="mt-4 p-4 border-t border-slate-100 flex justify-between items-center text-slate-900">
                <span className="font-black text-sm tracking-tighter">PRODUCT CATALOG 2024</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">48 Pages</span>
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-white/10 transform translate-x-12 translate-y-12 z-10"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-12">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/60">Documentation</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              ENGINEERING<br/>EXCELLENCE
            </h2>
            <p className="text-white/70 text-xl leading-relaxed max-w-lg font-light">
              Download our comprehensive catalog featuring full technical specifications of our structural beams, reinforcing bars, and industrial fabrication capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-white text-primary px-10 py-6 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-slate-100 transition-all group shadow-xl">
                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                Download PDF (12.4 MB)
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-6 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-white/10 transition-all shadow-xl">
                View Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Channels */}
      <section className="max-w-[1440px] mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Handshake, title: "Vendor Relations", desc: "Apply to join our elite supply chain network of global raw material providers." },
            { icon: Briefcase, title: "Career Hub", desc: "Join the architects of tomorrow. Explore engineering and operation roles." },
            { icon: Newspaper, title: "Media Inquiry", desc: "Official press kits, branding assets, and corporate communication requests." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-12 flex flex-col justify-between aspect-square group hover:bg-primary transition-all duration-500 shadow-sm"
            >
              <item.icon className="text-primary group-hover:text-white transition-colors" size={48} strokeWidth={1} />
              <div>
                <h4 className="text-3xl font-black mb-4 group-hover:text-white transition-colors tracking-tighter uppercase whitespace-pre-line">{item.title}</h4>
                <p className="text-slate-500 group-hover:text-white/70 transition-colors font-light leading-relaxed">{item.desc}</p>
                <a className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white mt-10 flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  Contact Dept <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
