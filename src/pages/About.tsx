import { motion } from 'motion/react';
import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Users, 
  Calendar, 
  ChevronRight, 
  ChevronLeft,
  MapPin, 
  Play, 
  Pause, 
  CircleCheck,
  ArrowUpRight,
  X
} from 'lucide-react';

interface LeaderSpec {
  name: string;
  role: string;
  desc: string;
  image: string;
  signature: string;
  certifications: string[];
  expertise: { label: string; percentage: number }[];
}

const boardLeaders: LeaderSpec[] = [
  {
    name: "Nimesh Kothari",
    role: "Founder & Managing Director",
    desc: "With over 30 years of deep metallurgical expertise, Mr. Nimesh Kothari is the visionary builder behind NRK. His journey from an independent trader to leading a multi-state enterprise is defined by unwavering integrity and a commitment to quality.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOjvz26vdVE08YfcEL-nzCpwbWyp_YDbXmrkiNnKi-kNaB61sqCFdy6lXAYM1mLVfcRqwiWgUoLBikdeZypOgFPKX_3B3UQl4rC_KbHaD4ezNVMAAm3_CHc8f-wpmqAJLGCXrPJRYBqcv3XAduBumYAGpTeUCSe9YQMNKJJIZ3-33Kco5369goYAhkJeQAxmQEqh1QJKt_QjFy42SHk6X8Yrq2HvL4-cfH2cFRPRARDwcdYsf58FjTxiNfMy8EXFxl8YNEwXX_wX0",
    signature: "Nimesh Kothari",
    certifications: ["30+ Years Industry Leadership", "Founder Excellence Recipient"],
    expertise: [
      { label: "Global Procurement", percentage: 98 },
      { label: "Steel Distribution Strategy", percentage: 95 }
    ]
  },
  {
    name: "Nishant Kothari",
    role: "Director - Operations & Strategy",
    desc: "Nishant spearheads operational precision and logistics efficiency. He has been instrumental in modernizing NRK's automated Cut-To-Length coil solutions and central supply terminal.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgXt4iMj0xRKCs0MPm_At3gzVBoprPbA2aAQdQAo3I6E-1BbaPCCQ_Rv_MB1qNh5kq7sO_ZKbhsDrVTgKCho2yqIfnDTmLXRxLOUfS2FFQW2EeedaMBmQmoH_mw_VmdiEd-cyIW0w0McQlMfAFL73SAoK-3WBvnFxS1hLnWTBJF8eKeX5W2FOI4nytmPNT0D0B2Oto2gpbixHYkzndExqAgsNNKeOXBfMqrys8gkW-Y8ILh8T2RNRIQ_3qlM0JTML5amCnzzLUY5Q",
    signature: "Nishant Kothari",
    certifications: ["B.Tech Systems Engineering", "ISO Quality Auditor Lead"],
    expertise: [
      { label: "Supply Chain Coordination", percentage: 96 },
      { label: "CTL Plant Automation", percentage: 92 }
    ]
  },
  {
    name: "Dhaval Kothari",
    role: "Director - Finance & Digital Transformation",
    desc: "Dhaval leads the digital frontier of NRK, integrating modern ERP systems, tracking and tracing inventories from loading to final client delivery operations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQfIHTocs9BB1I41pFn68WrF_TcBt3rEUUNjMm-pUdPRdaMcYBRk62eH_TpW7nO-NgJOkA66wRTHoeJF4b53kaomi3z8hcoCmvBpwxWY1XDbGA9Zh9K4qH8F6WfjjgnXL0KaOaXwc-ejBFZDgYGRiJ20C3V_92N0_8d-ah9Nqbmx_q9yzUU5eVrRtiT7SJ5e7Bnl5nYbLK451CTOI1h7JR0on_eNRpjpW8oQYP-SbIFT065DbeMqS4YDQb0mIJmW2h9ALdRs4eGOc",
    signature: "Dhaval Kothari",
    certifications: ["CFA Candidate", "B.Sc Finance & Digital Analytics"],
    expertise: [
      { label: "Risk Management & Planning", percentage: 94 },
      { label: "Digital Inventory Systems", percentage: 95 }
    ]
  }
];

const timeline = [
  {
    year: '1994',
    title: 'The Founding Vision',
    desc: "Mr. Nimesh Kothari establishes NRK as a specialized trading entity in Indore, laying down our strict trademark ethics and genuine metallurgical traceability framework.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJoCc4uffl3q5SZYwbhRMSdbz9bsDEh-movXRI7xHzM4JvUzK2XnpfVoNykgTUGKnszN5MpAajXmQV1ieLLe9zhxbM5Arr8_3EOMDY92j3CqYpfJAe_GxEZ-rupXc7eJSt8kqssilSJF-16pMItC5duQ--KmQ07eLgV0muycAKHtRAuP2a52K0og5GMR_38NP2q4LgfEttCdEHcjAeZpdf5c4YADBeO2CIADJc3RjFBybFOg3l3V4oQxaP0i406Z0QkArVWiMufxM',
    spec: "CR COILS // INDORE DEPOT START"
  },
  {
    year: '2005',
    title: 'Industrial Scaling & Beams',
    desc: 'Began massive distribution for heavier structural steel segments, extending our physical warehouse stockyards up to 50,000 sq ft.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&h=350&q=80',
    spec: "STRUCTURAL S235JR / I-BEAMS // VEHICLE TRANSPORT"
  },
  {
    year: '2012',
    title: 'Precision OES Laboratory',
    desc: "Inaugurated our optical emission spectroscopy testing lab to offer certified composition and ultimate stress testing parameters for zero-contamination trust.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPGz805GgSiLPGtIo3jWsNvUWcqtplHWAC_vOTCDEORKnB2c22fDwC35jrsDRnjJLbSLw9-zscjwF3CKpewNSf2xXOqaEXCjkQLdZhSofSlC8yiftGe1tSWOOS-Qd2XMTIyUBzDmbhNPGkTwPfdOQ1u_NpzW1xGcQGrcUe8BgJewvhZ4kUMSXbZvr9SRz3brnULD2bQzhLDDxESESPDUS4DpBwU6OPgcKybDDxZb3H6EbmsnjDschaxy3pAhnDXqrFtBMhwtnR-5g',
    spec: "OES AUDITING LAB // ISO 9001:2015 REGISTERED"
  },
  {
    year: '2026',
    title: 'Multi-State Enterprise Grid',
    desc: 'Connecting metallurgical dispatches directly across central highways. Featuring computerized CTL sheeting plants and real-time digital batch registries.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZRHOv76V25s9FOlYgo0CPQfv25ch46TUmfO0RlzWcIcBq1UsYIirm5inyLgoMh-9opuPFKdqEf_D3pW-rGH8A6W7ULw35QFXwrJCFEAMKqmsCF_G-IhjUSbYyTp0cRD9dAGAHPsYC8qngf3QbbatQL2NeogWFGRfE_BY2pyx-GBrwsZKa8-CDe-WcF6VuEpD3dibGVVeveOLIbA4YxsS9GDahlAFvS3WsIp-rBKbqZAMIFd7L32i7FZjKvlzjiiaqVWRhy4Gn2tQ',
    spec: "CTL AUTOMATION // 450k+ MT DISTRIBUTED"
  }
];

export default function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedLeader, setSelectedLeader] = useState<LeaderSpec | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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
      className="bg-white text-slate-800 font-sans overflow-x-hidden min-h-screen"
    >
      
      {/* 1. IMMERSIVE HERO SECTION WITH BACKGROUND VIDEO LOOP */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 overflow-hidden bg-primary text-white select-none pt-20">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000 saturate-[0.8] mix-blend-luminosity grayscale"
            poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-metal-cutting-machine-in-action-with-sparkles-42220-large.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Overlays to isolate contrast for top-tier readability */}
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

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-8 text-xs font-bold tracking-widest uppercase text-secondary"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Decades of Steel Mastery
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 uppercase"
          >
            Built on <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-secondary select-none">
              Solid Trust.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-12"
          >
            Since 1994, NRK Steel has been a reliable partner for India's major infrastructure. We supply heavy metals with absolute honesty, accurate chemical testing, and direct logistics.
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

      {/* 2. VISION & MISSION CAROUSEL SECTION (40% Static Text, 60% Auto-scrollable Carousel with Number Progress) */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 40% Static Column: Strategic Framing Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-secondary tracking-widest font-extrabold uppercase bg-secondary/5 border border-secondary/15 px-3 py-1 rounded inline-block">
                  Corporate Pillars
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
                  Core Legacy &<br />
                  <span className="text-secondary select-none">Our Standards.</span>
                </h2>
                <div className="w-16 h-1 bg-secondary mt-2" />
              </div>
              
              <p className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
                Since 1994, NRK Steel has served as a critical supplier for India's major infrastructure projects. We believe premium metals and exact chemical testing are the true baseline for public safety and structural resilience.
              </p>

              <div className="space-y-5 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5 font-mono text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">Traceable Raw Materials</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Absolute assurance of chemical authenticity direct from verified manufacturers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 font-mono text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">On-Time Pipeline Dispatch</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Expedited warehouse coordination designed to match tight engineering milestones.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 60% Column: Auto-scrollable Slides showing Text, Number Progress & Images */}
            <div className="lg:col-span-7 relative">
              <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 shadow-lg">
                <div 
                  className="flex transition-transform duration-700 ease-in-out" 
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {/* Slide 1: Vision Card */}
                  <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                    {/* Text Content with Number Progress */}
                    <div className="p-8 flex flex-col justify-between bg-white border-r border-slate-100">
                      <div className="space-y-5">
                        <div className="w-10 h-10 rounded-md bg-secondary/5 border border-secondary/15 flex items-center justify-center text-secondary">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <span className="font-mono text-[8.5px] text-secondary tracking-widest font-bold uppercase block mb-1">STRATEGIC HORIZON</span>
                          <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">Our Vision</h3>
                        </div>
                        <p className="text-xs text-slate-600 font-light leading-relaxed">
                          To serve as India’s gateway for traceable metals, driving safety standards through transparent chemical sourcing and computerized leveling.
                        </p>
                      </div>

                      {/* Number Progress for Vision */}
                      <div className="space-y-4 pt-6 mt-6 border-t border-slate-100">
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[9px] font-mono">
                            <span className="text-slate-500 uppercase">Material Traceability</span>
                            <span className="text-slate-900 font-bold">100%</span>
                          </div>
                          <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-full rounded-full" />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[9px] font-mono">
                            <span className="text-slate-500 uppercase">Quality Integrity Level</span>
                            <span className="text-slate-900 font-bold font-sans">99.8%</span>
                          </div>
                          <div className="h-1 bg-slate-100 tracking-wide rounded-full overflow-hidden">
                            <div className="h-full bg-secondary rounded-full" style={{ width: '99.8%' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Industrial Vision Image */}
                    <div className="relative h-48 md:h-auto bg-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&h=800&q=80" 
                        alt="Our Vision" 
                        className="w-full h-full object-cover saturate-[0.85] hover:scale-[1.03] transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Decorative Overlay Label */}
                      <div className="absolute top-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-white/10 p-4 rounded-xl text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                          <span className="font-mono text-[8px] text-secondary tracking-widest font-extrabold uppercase">ISO CERTIFIED Standard</span>
                        </div>
                        <p className="text-[10px] text-white/90 font-light leading-snug">
                          Operating rigid processes for continuous carbon & alloy structural integrity.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2: Mission Card */}
                  <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                    {/* Text Content with Number Progress */}
                    <div className="p-8 flex flex-col justify-between bg-white border-r border-slate-100">
                      <div className="space-y-5">
                        <div className="w-10 h-10 rounded-md bg-primary/5 border border-primary/15 flex items-center justify-center text-primary">
                          <Cpu size={20} />
                        </div>
                        <div>
                          <span className="font-mono text-[8.5px] text-primary tracking-widest font-bold uppercase block mb-1">OPERATIONAL CORE</span>
                          <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">Our Mission</h3>
                        </div>
                        <p className="text-xs text-slate-600 font-light leading-relaxed">
                          To avoid gauge deformation through 100% optical emission spectroscopy testing and flat leveling, while routing custom orders faster than 48 hours.
                        </p>
                      </div>

                      {/* Number Progress for Mission */}
                      <div className="space-y-4 pt-6 mt-6 border-t border-slate-100">
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[9px] font-mono">
                            <span className="text-slate-500 uppercase">Spectroscopy Audits</span>
                            <span className="text-primary font-bold">100%</span>
                          </div>
                          <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-full rounded-full" />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[9px] font-mono">
                            <span className="text-slate-500 uppercase">On-Time dispatch</span>
                            <span className="text-primary font-bold">98.5%</span>
                          </div>
                          <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: '98.5%' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Industrial Mission Image */}
                    <div className="relative h-48 md:h-auto bg-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1200&h=800&q=80" 
                        alt="Our Mission" 
                        className="w-full h-full object-cover saturate-[0.85] hover:scale-[1.03] transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Decorative Overlay Label */}
                      <div className="absolute top-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-white/10 p-4 rounded-xl text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-450 animate-pulse" />
                          <span className="font-mono text-[8px] text-sky-400 tracking-widest font-extrabold uppercase">TECHNICAL EXCELLENCE</span>
                        </div>
                        <p className="text-[10px] text-white/90 font-light leading-snug">
                          Precise flat decoiling operations to avoid gauge errors.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3: Growth Milestone Card */}
                  <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                    {/* Text Content with Number Progress */}
                    <div className="p-8 flex flex-col justify-between bg-white border-r border-slate-100">
                      <div className="space-y-5">
                        <div className="w-10 h-10 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                          <Users size={20} />
                        </div>
                        <div>
                          <span className="font-mono text-[8.5px] text-slate-500 tracking-widest font-bold uppercase block mb-1">GLOBAL REACH</span>
                          <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">Our Footprint</h3>
                        </div>
                        <p className="text-xs text-slate-600 font-light leading-relaxed">
                          Over 150,000 tons of heavy steel structured components processed and secured across multiple active metropolitan centers.
                        </p>
                      </div>

                      {/* Number Progress for Reach */}
                      <div className="space-y-4 pt-6 mt-6 border-t border-slate-100">
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[9px] font-mono">
                            <span className="text-slate-500 uppercase">Defect-free rate</span>
                            <span className="text-slate-900 font-bold">100%</span>
                          </div>
                          <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-full rounded-full" />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[9px] font-mono">
                            <span className="text-slate-500 uppercase">Customer Retention Rate</span>
                            <span className="text-slate-900 font-bold font-sans">98.0%</span>
                          </div>
                          <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary rounded-full" style={{ width: '98%' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Industrial Footprint Image */}
                    <div className="relative h-48 md:h-auto bg-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&h=800&q=80" 
                        alt="Our Footprint" 
                        className="w-full h-full object-cover saturate-[0.85] hover:scale-[1.03] transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Decorative Overlay Label */}
                      <div className="absolute top-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-white/10 p-4 rounded-xl text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                          <span className="font-mono text-[8px] text-secondary tracking-widest font-extrabold uppercase">ESTABLISHED CAPACITY</span>
                        </div>
                        <p className="text-[10px] text-white/90 font-light leading-snug">
                          Powering robust real-estate, aerospace, and energy infrastructure grids.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Carousel Controls */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                  {/* Dot indicators */}
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setActiveSlide(0)}
                      className={`h-1.5 transition-all duration-305 rounded-full cursor-pointer ${activeSlide === 0 ? 'w-6 bg-secondary' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`}
                      title="Strategic Horizon Vision"
                    />
                    <button
                      onClick={() => setActiveSlide(1)}
                      className={`h-1.5 transition-all duration-305 rounded-full cursor-pointer ${activeSlide === 1 ? 'w-6 bg-primary' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`}
                      title="Operational Core Mission"
                    />
                    <button
                      onClick={() => setActiveSlide(2)}
                      className={`h-1.5 transition-all duration-305 rounded-full cursor-pointer ${activeSlide === 2 ? 'w-6 bg-slate-700' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`}
                      title="Global Reach Footprint"
                    />
                  </div>

                  {/* Arrow controls */}
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1))}
                      className="w-7 h-7 rounded-full border border-slate-200 bg-white/95 hover:bg-white text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                      title="Previous Slide"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <button
                      onClick={() => setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1))}
                      className="w-7 h-7 rounded-full border border-slate-200 bg-white/95 hover:bg-white text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                      title="Next Slide"
                    >
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. TIMELINE LEDGER */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-screen-xl mx-auto">
          
          <div className="text-center mb-16 space-y-2">
            <span className="font-mono text-[9px] text-secondary tracking-widest font-extrabold uppercase block font-sans">ESTD 1994 // STEADY PROGRESS</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">Corporate Timeline Ledger</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-200 select-none">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.year}
                  className={`flex flex-col md:flex-row items-stretch timeline-block ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Space filler / timeline context side */}
                  <div className="w-full md:w-1/2 flex items-center px-4 md:px-12 text-left md:text-right">
                    <div className={`space-y-2 w-full ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="font-mono text-3xl md:text-5xl font-black text-primary block leading-none">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-light leading-relaxed max-w-lg mx-auto md:ml-auto md:mr-0">
                        {item.desc}
                      </p>
                      <span className="inline-block font-mono text-[8px] text-slate-400 bg-white border border-slate-200/70 px-2.5 py-1 rounded-sm">
                        {item.spec}
                      </span>
                    </div>
                  </div>

                  {/* Bullet center marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <span className="w-4.5 h-4.5 rounded-full bg-secondary border-4 border-white shadow-sm ring-4 ring-[#ff5500]/15" />
                  </div>

                  {/* Visual Image representing the milestone */}
                  <div className="w-full md:w-1/2 px-4 md:px-12 mt-6 md:mt-0 flex items-center shrink-0">
                    <div className="relative aspect-video w-full rounded-md overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover saturate-[0.8] hover:scale-[1.03] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto">
          
          <div className="text-center mb-16 space-y-2">
            <span className="font-mono text-[9px] text-secondary tracking-widest font-bold uppercase block">GOVERNANCE LEADERS</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">Background of the Board</h2>
            <p className="text-xs text-slate-500 font-light max-w-xl mx-auto mt-2">
              Our active partners oversee our metallurgy trading systems and warehouse operations directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {boardLeaders.map((ldr) => (
              <div 
                key={ldr.name}
                onClick={() => setSelectedLeader(ldr)}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-5">
                  {/* Grayscale hover photo switch */}
                  <div className="relative aspect-square w-full bg-slate-150 rounded-lg overflow-hidden border border-slate-200">
                    <img 
                      src={ldr.image} 
                      alt={ldr.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] text-primary tracking-widest font-black uppercase block">
                      {ldr.role}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-secondary transition-colors">
                      {ldr.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-3">
                      {ldr.desc}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200/80 pt-4 mt-6 flex justify-between items-center text-[9px] font-mono">
                  <span className="text-slate-400 group-hover:text-secondary font-bold transition-colors">VIEW FULL PROFILE //</span>
                  <ArrowUpRight size={13} className="text-slate-400 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Leader Detailed Profile Modal */}
          {selectedLeader && (
            <div 
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md"
              onClick={() => setSelectedLeader(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white border border-slate-200 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col text-left"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                  title="Close profile details"
                >
                  <X size={16} />
                </button>

                <div className="overflow-y-auto p-6 md:p-10 space-y-8">
                  {/* Top layout: image and principal info */}
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-2/5 aspect-square md:aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shrink-0">
                      <img 
                        src={selectedLeader.image} 
                        alt={selectedLeader.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-4">
                      <span className="font-mono text-[9px] text-primary tracking-widest font-black uppercase bg-primary-container/10 px-2.5 py-1 rounded inline-block">
                        {selectedLeader.role}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                        {selectedLeader.name}
                      </h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">
                        {selectedLeader.desc}
                      </p>
                    </div>
                  </div>

                  {/* Section layout: Certificates & Expertise percentages */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200/70">
                    {/* Expertise Levels */}
                    <div className="space-y-4">
                      <h4 className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider">Expertise Levels</h4>
                      <div className="space-y-4">
                        {selectedLeader.expertise.map((exp) => (
                          <div key={exp.label} className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] font-mono">
                              <span className="text-slate-600">{exp.label}</span>
                              <span className="font-bold text-slate-900">{exp.percentage}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-secondary rounded-full" 
                                style={{ width: `${exp.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications Checklist */}
                    <div className="space-y-4">
                      <h4 className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider font-sans">Endorsements & Certificates</h4>
                      <div className="space-y-2.5">
                        {selectedLeader.certifications.map((cert) => (
                          <div key={cert} className="flex items-center gap-2.5 font-mono text-[10px] text-slate-600">
                            <CircleCheck size={13} className="text-secondary shrink-0" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Official Record Footer Area */}
                  <div className="border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50/70 p-5 rounded-xl border-dashed">
                    <div className="space-y-1">
                      <span className="font-mono text-[8px] text-slate-400 uppercase block">RECORD CLASSIFICATION</span>
                      <span className="font-mono text-[9px] font-bold text-slate-600 uppercase">OFFICIAL CABINET RECORD // NRK BOARD</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[8.5px] text-slate-400 block mb-1">AUTHORIZED SIGNATURE</span>
                      <span className="font-mono text-xl font-bold italic text-slate-800 tracking-wider">
                        "{selectedLeader.signature}"
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Close Drawer Action for utility */}
                <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-end">
                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-[9px] uppercase tracking-wider rounded transition-colors cursor-pointer"
                  >
                    Close Profile Details
                  </button>
                </div>
              </motion.div>
            </div>
          )}

        </div>
      </section>

      {/* Enhanced Immersive Consultation Banner */}
      <section className="py-28 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden select-none border-t border-white/10">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80" 
            alt="Industrial steel refinery with golden warm sparks" 
            className="w-full h-full object-cover opacity-35 scale-105 hover:scale-100 transition-all duration-1000 saturate-[1.2] brightness-90"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered Premium Overlays for outstanding readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-secondary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
          
          {/* Elegant Blueprint Grid Lines */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0">
            <div className="grid grid-cols-6 lg:grid-cols-12 h-full w-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white h-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full mx-auto text-[9px] font-mono tracking-[0.25em] font-extrabold uppercase text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
            DIRECT PIPELINE PROCUREMENT
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] max-w-3xl mx-auto">
            Secure Your <br className="sm:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-secondary select-none">
              Grid Supply Today
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Consolidated steel supply lanes connected from central warehouses to client infrastructure with complete certification. Ensure unbending yield strengths for your projects.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-mono font-bold text-[10px] uppercase tracking-[0.2em] rounded-md hover:bg-white hover:text-slate-950 transition-all shadow-lg hover:shadow-secondary/20 hover:scale-105"
            >
              Contact Representative
              <ArrowUpRight size={14} className="stroke-[2.5px]" />
            </a>
            <a 
              href="/products" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white text-white font-mono font-bold text-[10px] uppercase tracking-[0.2em] rounded-md hover:bg-white/5 transition-all"
            >
              Examine Spec Sheets
            </a>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
