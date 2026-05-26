import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronRight, Download, MessageSquare, MapPin, ArrowUpRight, Play, Pause, Users, Briefcase, Eye } from 'lucide-react';

// Simplified Gallery categories
const categories = [
  "All Photos",
  "Projects",
  "Workplace & Team",
  "Operations"
];

const galleryItems = [
  // PROJECTS
  {
    id: 1,
    title: "High-Tension Steel Coil Storage Hub",
    category: "Projects",
    location: "Mumbai, Maharashtra",
    desc: "A custom heavy-gauge coil warehouse system optimized to house over 12,000 tons of structural materials safely.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHXcby_K3v358skZM66f7e70RjhYwxjzpycx9ao-QQm9k703Rw-ZkAaPXO7FppRrbZ9wKeqAeYr2vyvtYYuKosfgZu95PLVF16BxVLnK22bGeAmnY6laZ4xgij-_3ecKrbbQcSFbPQSTR4NmrX4W_21TdMRMAJMUQ5QvLHN112BmbBRuin-vPaO6MZ9x7UZ43EbzB120gTvcgyagNTwLNG_FCsPQhpEnZMQvnKB5Nmqq8UyFAYe7LuE6Q8lq7uUizwNtT48DHoVBY"
  },
  {
    id: 2,
    title: "Automated Cut-To-Length Processing Facility",
    category: "Projects",
    location: "Indore, Madhya Pradesh",
    desc: "Integrating computerized CTL steel-coil technology to ensure supreme flatness and exact millimeter sizing standards.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArbq5EyjIxdoPoVmD5IUKGhR8zYExBROha8D_ElQmZ4W5-CXiwq-loGEC16v5iz4e1PqffduOQJERuUK2iCqwyPPdqrK0cAVWVyhlufg3tIH0vNPukUwNqwPsviSLB4boERe8vFwqagQVJig7ThmK2FfjjZo-s31kyzb5DW8dKrg0fq2n8tzBQCiyEScuEYpiWagg6kqMWdOyby0K-FPJg6LHwN_KLj669G5VsFg1J1go4lVh5fXaY2kj0PPEvyKoHd1N-lqVA7jg"
  },
  {
    id: 3,
    title: "Expressway Bridge Span Fabrication",
    category: "Projects",
    location: "Narmada River Expressway, MP",
    desc: "High-yield structural steel support system tested for massive static load limits and absolute seismic-grade toughness.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3321KsELsf99CditODtQy3TzKRTL0wumUe4v-7TWBXq4EpXV-Mt8erPSOq_WJi8xk3YIbytBsShgNfwWM8pjWGfBprWDBAucngsf3ZY7f2bEONbRjorUSSn0jpwo9vPZy71Ojz-bqKQrYWfMgHP33URDI0LcCQt0ccghoGkSNlLX0OZt4fXaubUnBTqhhckizyAZfyor0a9RBht-RwzO6LpW-4gt5KV-Dx0bxDf6px4N0Cpaum-mNc3sYY6PFWy5yHHmL8pKpvU"
  },
  {
    id: 4,
    title: "Heavy-Load Material Distribution Yard",
    category: "Projects",
    location: "Nagpur Multi-Modal Logistics Hub",
    desc: "Seamless material handling structure facilitating swift loading, trailer audits, and safe bulk transport.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCEIuEPXR0rjZ2no1xJJ2vrRZ1y4DMhL5erJjVmN_Vy7iktj0oLtqP3wQS3VYQfNkyz_1QGRfkaNvblQpGtUJXQTDA8Dgniz9fpCatKu4DoRWcDvig6i3WI95U-19R9pAJ-C0ov_TevfLQBobsc0Ylu-HusczCgQ9OFG8Kj0aGLQ_NpQq_GuS_ctXjjIB1a8oiFwv8OTghdy6Yj9maf9pw-fVJ5Okme-LXMUni6UHZAF2uwE-i70LoNMC1WbRpvNKdXQDPs2bGGfU"
  },
  // COMPANY & EMPLOYEES
  {
    id: 5,
    title: "Engineering & Technical Board Review",
    category: "Workplace & Team",
    location: "Corporate Office, Indore",
    desc: "Our structural engineering supervisors evaluating real-time mill mechanical feedback reports and material compliance logs.",
    img: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Field Dispatch & Safety Meeting",
    category: "Workplace & Team",
    location: "Main Dispatch Stockyard",
    desc: "Heavy machinery loaders and handling supervisors carrying out a routine pre-shift checklist to protect workforce safety.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Dedicated Dispatch Planning Crew",
    category: "Workplace & Team",
    location: "Logistics Terminal, MP",
    desc: "Coordinating trailer movement tracking and dispatch schedules to maintain our strict 48-hour container exit guarantee.",
    img: "https://images.unsplash.com/photo-1513829096999-4978602297af?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Metallurgy Quality Validation",
    category: "Operations",
    location: "Chemical & Testing Lab",
    desc: "Testing technician carrying out optical emission spectroscopy audits to verify precise alloying composition ratios before dispatch.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Structural Inventory Coordination",
    category: "Operations",
    location: "HQ Dispatch Deck",
    desc: "Our inventory management employees implementing the real-time RFID batch trackers across shipping yards.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  }
];

const events = [
  {
    id: 1,
    date: "May 20, 2026",
    title: "Successfully Finalized 500MT Structural Beam Dispatch",
    category: "Live Operations",
    desc: "Completed rapid overnight dispatch cycles of dense high-tensile structural beams for the Golden Quadrilateral highway phase, exceeding client schedule milestones.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByHaAFfUw_H7CSNPNaZq3J-ChORBJM0wR2wQ7bWKKq8-A5wN_MPqlIPE32nVHSuAtN-Jfkjr8HtBRMlbvdJkdtek3QljneGTXl-ehaTbVpMEl0Sc4sJ_6t8bOwxx8px-lSvdqJUX4hzoaWA5oKmsKyA5mypEwsP3ug_HrMebXsx4NDuIeejexOPt-WDInaIx2NrkHN3O_oO5TyqXg1Ohbnw4jUWPQ2yP7o4AeY62O--BtgumVzKNAwif1thSkMBKZDjbsNnevQAqE"
  },
  {
    id: 2,
    date: "April 15, 2026",
    title: "Automated Cut-to-Length Line Commemoration",
    category: "Milestones",
    desc: "Inaugurated our second fully automated processing system. Valued local contractors and architects joined the technical walkthrough illustrating gauge parameters.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLr6zFWvQtXmPElVP6D5CI9NI_rjPxVcScqCYxVyc79rKospxkWmKyq7NMKebOSF04YwTcXJH89RpMWqinWeUqOb5REGDvGrXcFew7RTfz1Jw9pLzx3v4HUir-IYi19cG1QtMehX-UN6W1Hh0YxfTw7y3r9l-xXwS9Xq7mOlyM-Bqa24F53hDL_HNVpHZC6yuOLqf5qH5phGo2x3jr6xP0ZBc15apvLmnDgeTBVclSfi2leo9eiqnJol236sKOHxqonLERg97uzNM"
  },
  {
    id: 3,
    date: "March 10, 2026",
    title: "Heavy Metallurgy Sourcing Compliance Seminar",
    category: "Internal Seminars",
    desc: "Conducted physical safety training and trace audits. Quality inspectors walked our processing team through advanced chemical composition guidelines.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9ZSU9hEuVFJhR8Jy-0LlZzjaH3FcTdo5SWA3-0iHOpecj_CDKGmsgAf_KY1CVIZkYSh6E7TT_jpirPKt9XJ27AWwoMJh2GQYDXPTp5Zw_68Rm_q7M9gQfvymBuP7bFWgTebDiv6mMyn3lzPqNoPGPJwVho6SXv2kjXYWE088_un-2bJce9eAbvsNpTLvkn4HQPMkoDm6dwmMGuXfUVrAAAuW66zVoKITbHihO0D-xp7JdXrdZVV-v025nYz1_wv-oWVvjW26xUWA"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Filter logic
  const filteredItems = activeCategory === "All Photos"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Play/Pause Background Video control
  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Video play request interrupted", err));
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 min-h-screen pt-20"
    >
      {/* Immersive Background Video Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 overflow-hidden bg-primary text-white select-none">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-35 transition-opacity duration-1000 saturate-[0.80] mix-blend-luminosity grayscale"
            poster="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-metal-cutting-machine-in-action-with-sparkles-42220-large.mp4" 
              type="video/mp4" 
            />
            {/* Fallback to welder if primary gets rate-limited */}
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-welder-working-with-sparks-flying-around-310-large.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Seamless overlays to isolate readability and contrast */}
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
        <div className="relative z-10 max-w-5xl pt-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-8 text-xs font-bold tracking-widest uppercase text-secondary"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Vivid Tour of Excellence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 uppercase"
          >
            Inside <br className="hidden md:inline"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-secondary select-none">
              Our Operations.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-12"
          >
            See our high-capacity stockyards, automatic metal-cutting machinery, and the passionate team behind every shipment. Real places, real people, real steel.
          </motion.p>
        </div>

        {/* Pause/Play Ambient Loop Control Button for user convenience */}
        <button
          onClick={toggleVideoPlay}
          className="absolute bottom-12 right-12 z-20 bg-black/65 backdrop-blur-md hover:bg-slate-900 border border-white/15 px-3 py-2 text-white font-mono text-[9.5px] uppercase tracking-wider rounded-md flex items-center gap-1.5 transition-all outline-none"
          title={isVideoPlaying ? "Pause ambient background video" : "Play ambient background video"}
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

      {/* Simple Gallery Workspace & Photo Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto">
          
          {/* Header & Simple Category Filters */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12 pb-6 border-b border-slate-200/60">
            <div>
              <span className="text-primary font-mono text-[9px] tracking-widest font-extrabold uppercase block mb-1">CRAFTED PHOTO STREAM</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">Company Gallery</h2>
            </div>

            {/* Category selection tags bar - touch height compliant */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4.5 py-3 font-mono font-bold text-[10px] uppercase tracking-wider transition-all duration-200 border rounded-md cursor-pointer ${
                    activeCategory === cat 
                      ? 'bg-slate-950 border-slate-950 text-white shadow-sm' 
                      : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Core Grid of items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="bg-slate-50 border border-slate-200/60 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-300 group"
                >
                  <div>
                    {/* Visual Preview Container */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200/40">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white font-mono text-[8px] tracking-widest px-2.5 py-1 uppercase rounded-xs font-bold">
                        {item.category}
                      </span>
                    </div>

                    {/* Meta & Description */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                        <MapPin size={11} className="text-primary" />
                        <span>{item.location}</span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-slate-450 text-[10px] font-mono uppercase tracking-wider group-hover:text-slate-700 transition-colors">
                      <Eye size={12} />
                      <span>Inspected Archive Record</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Corporate Events Timeline Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-screen-xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-primary font-mono text-[9px] tracking-widest font-extrabold uppercase block mb-1">LATEST DEVELOPMENTS</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">Recent Company Events</h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm font-light">
              Follow our latest physical dispatches, processing plant system inaugurations, and compliance seminars.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-white border border-slate-200/80 rounded-lg overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Event Header Banner */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100">
                    <img 
                      src={event.img} 
                      alt={event.title} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-800 font-mono text-[8px] font-bold tracking-widest px-2.5 py-1.5 uppercase rounded-xs border border-slate-200/40">
                      {event.category}
                    </span>
                  </div>

                  {/* Text Specifications */}
                  <div className="p-6 md:p-8 space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                      <Calendar size={12} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-0 border-t border-slate-100/60 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">EVENT COMPLETED</span>
                  <ChevronRight size={14} className="text-slate-400" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Enhanced Immersive Dispatch Inquiry Callout */}
      <section className="py-28 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden select-none border-t border-white/10">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80" 
            alt="Intense electric steel welding spark glow" 
            className="w-full h-full object-cover opacity-30 scale-105 hover:scale-100 transition-all duration-1000 saturate-[1.10]"
            referrerPolicy="no-referrer"
          />
          {/* Gradients to keep contrast supreme and text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-secondary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
          
          {/* Corporate Blueprint Lines */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0">
            <div className="grid grid-cols-6 lg:grid-cols-12 h-full w-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white h-full" />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full mx-auto text-[9px] font-mono tracking-[0.25em] font-extrabold uppercase text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
            PARTNERSHIP PIPELINE
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] max-w-3xl mx-auto">
            Scale Your Project <br className="sm:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-secondary select-none">
              With Precision
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Consult with our metallurgy experts to access the comprehensive technical specs catalog and schedule high-integrity structural dispatch blocks.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-white hover:text-slate-950 text-white font-mono font-bold text-[10px] uppercase tracking-[0.2em] rounded-md transition-all shadow-lg hover:shadow-secondary/20 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer">
              <Download size={14} className="stroke-[2.5px]" />
              Download Technical Spec Sheet
            </button>
            <a 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white text-white font-mono font-bold text-[10px] uppercase tracking-[0.2em] rounded-md hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={14} />
              Inquire Now
              <ArrowUpRight size={13} className="text-white/60" />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
