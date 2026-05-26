import { useEffect, useRef, useState, ChangeEvent } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Cpu, Eye, Scale, Shield, Truck, Flame, Award, Workflow, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { TrustLedger } from '../components/TrustLedger';

const TypeWriter = ({ text, delay = 25, className = "" }: { text: string, delay?: number, className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, delay, isInView]);

  return (
    <div ref={containerRef} className={className}>
      {displayedText}
      <span className="inline-block w-1.5 h-4 bg-secondary ml-1 animate-pulse" />
    </div>
  );
};

// High-end animation preset transitions
const transitionSmooth = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: transitionSmooth 
  }
};

const staggerContainerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center px-6 md:px-12 overflow-hidden bg-primary text-white">
      {/* Background Video/Image with sophisticated styling */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-full h-full object-cover mix-blend-luminosity grayscale" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3wEe40CLAEm8Zt1BbiRLlJRy40OBe8KNqhZePalQNiDWqQ8HN4UNpCBGqEa5Pc9VxKv4wiePSZuhQ3Q68KuRo6scjB0NnleDozTXbU2dRuGdInzfuG_Jaccw0fhzrecZVVs-1MRnQASrsyOnvM8l0yqEoBlXgdBQgrhJHz1uA-ZO8uj85KWbyqBQC__nTJ2vi_ihbNVCLqtVzGJj0CLNTYO0aiXQTPyCjrtkoSHBI9640nwP16azMD6b4l0FSI2scTy14iBoXsiY"
          alt="NRK Steel Infrastructure"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        
        {/* Architectural Blueprint Line Overlay */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0">
          <div className="grid grid-cols-6 lg:grid-cols-12 h-full w-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/60 h-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-8 text-xs font-bold tracking-widest uppercase text-secondary"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          CENTRAL INDIA'S HEAVY METALLURGICAL BENCHMARK
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, ...transitionSmooth }}
          className="text-white text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 uppercase"
        >
          Steel for <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-secondary select-none">
            Iconic Structures.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, ...transitionSmooth }}
          className="text-white/70 text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-12"
        >
          Engineering massive structures with millimeter precision. Unifying supply logistics, on-premises heat treatments, and custom fabrication to construct monuments of enduring resilience.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ...transitionSmooth }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-secondary hover:bg-secondary/90 text-white px-10 py-5 font-bold tracking-widest uppercase text-xs transition-colors shadow-2xl flex items-center justify-center gap-3"
          >
            Explore Case Studies
            <ArrowRight size={16} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="border border-white/30 hover:border-white text-white px-10 py-5 font-bold tracking-widest uppercase text-xs hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            Our Process
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative vertical blueprint coordinate */}
      <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-end gap-1 font-mono text-[9px] text-white/30 tracking-widest">
        <span>NRK STEEL INFRASTRUCTURE</span>
        <span>LAT: 22.7196° N // LON: 75.8577° E</span>
      </div>
    </section>
  );
};

const ImpactStats = () => {
  const stats = [
    { value: '500+', label: 'Projects Delivered', desc: 'Commercial skylines and expressway flyovers across India.', icon: Workflow, progressLabel: 'Infrastructural Reach', progressVal: 'Over 500 Cities' },
    { value: '12M', label: 'Tons Supplied', desc: 'Premium-grade structural metal and alloyed dispatches.', icon: Scale, progressLabel: 'Dispatch Integrity', progressVal: '99.98% Standard Accuracy' },
    { value: '100%', label: 'Quality Control', desc: 'Complying strictly to rigorous global test regulations.', icon: Shield, progressLabel: 'Compliance Threshold', progressVal: 'ASTM / EN Sourced Audited' },
    { value: '15yr', label: 'Industry Leadership', desc: 'Trusted by Central Government and international firms.', icon: Award, progressLabel: 'Corporate Experience', progressVal: 'Established Since 2011' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === stats.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [stats.length]);

  return (
    <section className="py-28 px-6 md:px-12 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blueprint Geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 border-r border-t border-slate-200/50 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 40% Static Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="text-secondary font-mono text-[9px] tracking-[0.25em] font-extrabold uppercase bg-secondary/5 border border-secondary/15 px-3 py-1 rounded inline-block">
                Surgical Precision & Scale
              </span>
              <h2 className="text-slate-900 text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                Our Impact <br className="hidden md:inline" />
                <span className="text-secondary">in Numbers.</span>
              </h2>
              <div className="w-16 h-1 bg-secondary mt-2" />
            </div>
            
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Defining the infrastructure skyline of Central India through an unwavering commitment to structural integrity, advanced metallurgical research, and unmatched processing capabilities.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="bg-white border border-slate-150 px-3 py-1.5 rounded-full text-[10px] font-mono text-slate-500 flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                ISO 9001:2015 Approved
              </span>
              <span className="bg-white border border-slate-150 px-3 py-1.5 rounded-full text-[10px] font-mono text-slate-500 flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-slate-705 bg-slate-800" />
                Spector Audited Logistics
              </span>
            </div>
          </div>

          {/* Right 60% Auto-scrollable Carousel with Progress */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 p-8 md:p-12 shadow-xl">
              
              {/* Carousel Indicator & Progress at Top */}
              <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-bold text-secondary">0{activeIndex + 1}</span>
                  <span className="text-slate-300">/</span>
                  <span className="font-mono text-xs text-slate-400">0{stats.length}</span>
                </div>
                
                {/* Visual Slide Line Progress Bar */}
                <div className="flex-1 max-w-[180px] h-1.5 bg-slate-100 rounded-full mx-6 overflow-hidden relative">
                  <div 
                    className="h-full bg-secondary rounded-full transition-all duration-500"
                    style={{ width: `${((activeIndex + 1) / stats.length) * 100}%` }}
                  />
                </div>

                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                  AUTOPLAY ACTIVE
                </div>
              </div>

              {/* Slider View Track */}
              <div className="relative h-[250px] overflow-hidden">
                <div 
                  className="flex h-full transition-transform duration-700 ease-in-out" 
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {stats.map((stat, i) => (
                    <div key={i} className="w-full h-full shrink-0 flex flex-col justify-between text-left">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            {/* Super bold massive key metric number */}
                            <div className="text-6xl md:text-7xl font-black text-primary tracking-tighter leading-none select-none">
                              {stat.value}
                            </div>
                            <div className="text-sm font-bold tracking-tight text-slate-850 mt-2 uppercase font-sans">
                              {stat.label}
                            </div>
                          </div>

                          <div className="w-12 h-12 bg-slate-50 border border-slate-150 rounded-lg flex items-center justify-center text-secondary shadow-sm">
                            <stat.icon size={22} className="stroke-[2px]" />
                          </div>
                        </div>

                        <p className="text-slate-500 text-sm font-light leading-relaxed max-w-lg">
                          {stat.desc}
                        </p>
                      </div>

                      {/* Individual slide number progress detail */}
                      <div className="bg-slate-50/70 border border-slate-200/60 p-4 rounded-xl flex items-center justify-between font-mono text-[10px] text-slate-500 border-dashed">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>{stat.progressLabel}:</span>
                        </div>
                        <span className="font-bold text-slate-800 uppercase">{stat.progressVal}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Carousel Navigation Controls */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
                {/* Manual Bullets */}
                <div className="flex gap-2">
                  {stats.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${activeIndex === i ? 'w-8 bg-secondary' : 'w-2 bg-slate-200 hover:bg-slate-350'}`}
                      title={`Go to statistic step ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Left / Right Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveIndex((prev) => (prev === 0 ? stats.length - 1 : prev - 1))}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                    title="Previous stat"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActiveIndex((prev) => (prev === stats.length - 1 ? 0 : prev + 1))}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                    title="Next stat"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const WhatWeOffer = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const services = [
    {
      id: "ctl",
      title: "CTL Machine",
      icon: Cpu,
      desc: "Advanced Cut-to-Length technology for precision dimensioning of steel coils to exact project specifications.",
      longDesc: "Our automated Cut-To-Length (CTL) processing line handles heavy-duty steel coils with unmatched precision. This facility allows us to transform raw industrial coils into flat, perfectly dimensioned sheets that meet the most stringent engineering tolerances. By maintaining this capability on-premises, we eliminate third-party processing delays and ensure every sheet used in your structure is verified for flatness and surface integrity.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHXcby_K3v358skZM66f7e70RjhYwxjzpycx9ao-QQm9k703Rw-ZkAaPXO7FppRrbZ9wKeqAeYr2vyvtYYuKosfgZu95PLVF16BxVLnK22bGeAmnY6laZ4xgij-_3ecKrbbQcSFbPQSTR4NmrX4W_21TdMRMAJMUQ5QvLHN112BmbBRuin-vPaO6MZ9x7UZ43EbzB120gTvcgyagNTwLNG_FCsPQhpEnZMQvnKB5Nmqq8UyFAYe7LuE6Q8lq7uUizwNtT48DHoVBY",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArbq5EyjIxdoPoVmD5IUKGhR8zYExBROha8D_ElQmZ4W5-CXiwq-loGEC16v5iz4e1PqffduOQJERuUK2iCqwyPPdqrK0cAVWVyhlufg3tIH0vNPukUwNqwPsviSLB4boERe8vFwqagQVJig7ThmK2FfjjZo-s31kyzb5DW8dKrg0fq2n8tzBQCiyEScuEYpiWagg6kqMWdOyby0K-FPJg6LHwN_KLj669G5VsFg1J1go4lVh5fXaY2kj0PPEvyKoHd1N-lqVA7jg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3321KsELsf99CditODtQy3TzKRTL0wumUe4v-7TWBXq4EpXV-Mt8erPSOq_WJi8xk3YIbytBsShgNfwWM8pjWGfBprWDBAucngsf3ZY7f2bEONbRjorUSSn0jpwo9vPZy71Ojz-bqKQrYWfMgHP33URDI0LcCQt0ccghoGkSNlLX0OZt4fXaubUnBTqhhckizyAZfyor0a9RBht-RwzO6LpW-4gt5KV-Dx0bxDf6px4N0Cpaum-mNc3sYY6PFWy5yHHmL8pKpvU"
      ]
    },
    {
      id: "cranes",
      title: "Heavy-Duty Cranes",
      icon: Scale,
      desc: "Equipped with 10–30 ton capacity overhead cranes ensuring safe and efficient handling of massive structural components.",
      longDesc: "Logistics at scale requires serious lifting power. Our facility is equipped with a network of high-capacity overhead cranes, ranging from 10 to 30 tons. This allows us to handle extraordinary lengths of beams, massive plates, and bundles of rebar with surgical precision. Safety is our primary metric, and our crane infrastructure is regularly certified to ensure that loading and unloading operations are seamless, protecting both the material and the operators.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuByHaAFfUw_H7CSNPNaZq3J-ChORBJM0wR2wQ7bWKKq8-A5wN_MPqlIPE32nVHSuAtN-Jfkjr8HtBRMlbvdJkdtek3QljneGTXl-ehaTbVpMEl0Sc4sJ_6t8bOwxx8px-lSvdqJUX4hzoaWA5oKmsKyA5mypEwsP3ug_HrMebXsx4NDuIeejexOPt-WDInaIx2NrkHN3O_oO5TyqXg1Ohbnw4jUWPQ2yP7o4AeY62O--BtgumVzKNAwif1thSkMBKZDjbsNnevQAqE",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDCEIuEPXR0rjZ2no1xJJ2vrRZ1y4DMhL5erJjVmN_Vy7iktj0oLtqP3wQS3VYQfNkyz_1QGRfkaNvblQpGtUJXQTDA8Dgniz9fpCatKu4DoRWcDvig6i3WI95U-19R9pAJ-C0ov_TevfLQBobsc0Ylu-HusczCgQ9OFG8Kj0aGLQ_NpQq_GuS_ctXjjIB1a8oiFwv8OTghdy6Yj9maf9pw-fVJ5Okme-LXMUni6UHZAF2uwE-i70LoNMC1WbRpvNKdXQDPs2bGGfU",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuChByvHksJ_eFI7ePDtWk8iVVldIJqu19Gl3fAmVUHM13IJ-WSZf3eEYbbbOLE3UBUAmXsZTOrIVPRDgZaoNgev-oRa-B0pMCjfcPnizG38QnQagOsMvlnrYJxM8_7-5Pi-0CokAeQN-GqONl3Kd72hIrwrridz3801kl_lH3TavuQYBe-pjg5IAtUZrsC664eDLuv1cUh4xz73zR2CEMYv0DmSQqno6sA-_VazUpCLNBWoSdNNuUE-IDW4hGghPE7N6I6ZWKvdRFU"
      ]
    },
    {
      id: "annealing",
      title: "Annealing Furnaces",
      icon: Flame,
      desc: "Specialized heat treatment facilities for softening materials, improving ductility, and relieving internal stresses.",
      longDesc: "To survive the stresses of complex engineering, steel often requires controlled thermal adjustment. Our industrial annealing furnaces provide precise heat treatment cycles designed to relieve internal stresses accumulated during manufacturing. This process improves the ductility and machinability of the steel, making it ideal for high-vibration environments or intricate architectural shapes where material resilience is non-negotiable.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLr6zFWvQtXmPElVP6D5CI9NI_rjPxVcScqCYxVyc79rKospxkWmKyq7NMKebOSF04YwTcXJH89RpMWqinWeUqOb5REGDvGrXcFew7RTfz1Jw9pLzx3v4HUir-IYi19cG1QtMehX-UN6W1Hh0YxfTw7y3r9l-xXwS9Xq7mOlyM-Bqa24F53hDL_HNVpHZC6yuOLqf5qH5phGo2x3jr6xP0ZBc15apvLmnDgeTBVclSfi2leo9eiqnJol236sKOHxqonLERg97uzNM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDI89zUUBj-J2uIKHoxZRQonajdNS3PeI07XWgKUdsZdPRVjzeK3l8hWGMAkD8e_2bqKItGzXviK_qy622ik7VWXJ5WXQLrTUsleSNSkK3JyG1k8kOLs3_TXl7v0MRFA19sCnaQz2kjzd2-O6N-v5W3D4RzZEE_Z-LaobySgNKNQmnulrhcvRpJU5_sVUrWp5juGBZooEb2cVCueFCiqO9RMKB2G_HX4hUI6ws-ZnWY2oBZ_sPFkiig-OBTRNlobU74NL2sBKyTNF4",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3wEe40CLAEm8Zt1BbiRLlJRy40OBe8KNqhZePalQNiDWqQ8HN4UNpCBGqEa5Pc9VxKv4wiePSZuhQ3Q68KuRo6scjB0NnleDozTXbU2dRuGdInzfuG_Jaccw0fhzrecZVVs-1MRnQASrsyOnvM8l0yqEoBlXgdBQgrhJHz1uA-ZO8uj85KWbyqBQC__nTJ2vi_ihbNVCLqtVzGJj0CLNTYO0aiXQTPyCjrtkoSHBI9640nwP16azMD6b4l0FSI2scTy14iBoXsiY"
      ]
    },
    {
      id: "weighing",
      title: "Weighing Infrastructure",
      icon: Scale,
      desc: "High-precision industrial weighing scales ensuring accurate load measurement and strict compliance for every dispatch.",
      longDesc: "Accuracy is the bedrock of industrial trust. Our weighbridge infrastructure utilizes high-precision sensors calibrated to global standards. Every truckload leaving our facility is weighed twice to ensure that dispatch quantities exactly match the project specifications. This level of transparency prevents onsite shortages and ensures that project managers have precise data for inventory and structural loading calculations.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9ZSU9hEuVFJhR8Jy-0LlZzjaH3FcTdo5SWA3-0iHOpecj_CDKGmsgAf_KY1CVIZkYSh6E7TT_jpirPKt9XJ27AWwoMJh2GQYDXPTp5Zw_68Rm_q7M9gQfvymBuP7bFWgTebDiv6mMyn3lzPqNoPGPJwVho6SXv2kjXYWE088_un-2bJce9eAbvsNpTLvkn4HQPMkoDm6dwmMGuXfUVrAAAuW66zVoKITbHihO0D-xp7JdXrdZVV-v025nYz1_wv-oWVvjW26xUWA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3wEe40CLAEm8Zt1BbiRLlJRy40OBe8KNqhZePalQNiDWqQ8HN4UNpCBGqEa5Pc9VxKv4wiePSZuhQ3Q68KuRo6scjB0NnleDozTXbU2dRuGdInzfuG_Jaccw0fhzrecZVVs-1MRnQASrsyOnvM8l0yqEoBlXgdBQgrhJHz1uA-ZO8uj85KWbyqBQC__nTJ2vi_ihbNVCLqtVzGJj0CLNTYO0aiXQTPyCjrtkoSHBI9640nwP16azMD6b4l0FSI2scTy14iBoXsiY",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArF93X2EDCPZndIhTh2pjSn_pxhRNdWQzmJoh-0bQkhlkwYaWDqv8FUgjzz5amjmc3HsOUrCtAAQTP8_ObpKgEHxiE8E8nl5CZOM3lWDHHlgtqhad2VqsnLDUisdbiBfTh7X0-JYRQMwi6Wabx3HSLtIG8r7Z61VfnsDtZMFNriHJY92HX60tjCt-RgNkSCHiOpO8LQbw_2vssXl4DHGxS_-jF7LGMao07sJuSP2WbDB2gUxh1Df1bdxJ9Be20bqIDRov8ihhu5Kg"
      ]
    },
    {
      id: "logistics",
      title: "Doorstep Logistics",
      icon: Truck,
      desc: "Reliable 10–15 ton capacity transportation fleet providing seamless last-mile delivery directly to your project site.",
      longDesc: "The project doesn't wait for independent transporters. We maintain our own fleet of 10–15 ton vehicles dedicated to last-mile delivery. By owning the logistics chain, we can guarantee delivery windows and handle the materials with the same care from our yard to your doorstep. This vertically integrated approach significantly reduces traditional supply chain bottlenecks and ensures your crew is never left waiting for critical structural elements.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAmPbrsdiKO4gFwW9FFQ1jGxmYkC9OQgqLQh221twnaBKvo_qWubPPayQsWtdZOuDp-wTErDBA9FzTkz4OxcoASJ7YIxxsaVvGOzjK7jmf_Ngq3Ih0d5RKKLrmQ-LQuDXflDFtFOc892Bfrz5OQCQ6wHvsozmA76Xhpdw7gT79AcSlUapFEZKEadWyVnVbYx5mTzrbQnyXzcgv5mPMfVlsmtjlROSTIGRhDQMdi0__O8YVtpdB21XCevoc3jE25Y3fg3LkaTde0OOU",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3wEe40CLAEm8Zt1BbiRLlJRy40OBe8KNqhZePalQNiDWqQ8HN4UNpCBGqEa5Pc9VxKv4wiePSZuhQ3Q68KuRo6scjB0NnleDozTXbU2dRuGdInzfuG_Jaccw0fhzrecZVVs-1MRnQASrsyOnvM8l0yqEoBlXgdBQgrhJHz1uA-ZO8uj85KWbyqBQC__nTJ2vi_ihbNVCLqtVzGJj0CLNTYO0aiXQTPyCjrtkoSHBI9640nwP16azMD6b4l0FSI2scTy14iBoXsiY",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDI89zUUBj-J2uIKHoxZRQonajdNS3PeI07XWgKUdsZdPRVjzeK3l8hWGMAkD8e_2bqKItGzXviK_qy622ik7VWXJ5WXQLrTUsleSNSkK3JyG1k8kOLs3_TXl7v0MRFA19sCnaQz2kjzd2-O6N-v5W3D4RzZEE_Z-LaobySgNKNQmnulrhcvRpJU5_sVUrWp5juGBZooEb2cVCueFCiqO9RMKB2G_HX4hUI6ws-ZnWY2oBZ_sPFkiig-OBTRNlobU74NL2sBKyTNF4"
      ]
    },
    {
      id: "office",
      title: "Advanced Planning Hub",
      icon: Eye,
      desc: "A sophisticated corporate hub designed for technical consultations, design collaboration, and project management.",
      longDesc: "Great infrastructure starts with great planning. Our modern corporate office serves as the bridge between engineering theory and structural reality. Here, our technical consultants work alongside client engineers to optimize material cross-sections, plan delivery phases, and manage the complex documentation required for international scale projects. It is a space designed for clarity, data-driven decisions, and the long-term partnerships that build skylines.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArF93X2EDCPZndIhTh2pjSn_pxhRNdWQzmJoh-0bQkhlkwYaWDqv8FUgjzz5amjmc3HsOUrCtAAQTP8_ObpKgEHxiE8E8nl5CZOM3lWDHHlgtqhad2VqsnLDUisdbiBfTh7X0-JYRQMwi6Wabx3HSLtIG8r7Z61VfnsDtZMFNriHJY92HX60tjCt-RgNkSCHiOpO8LQbw_2vssXl4DHGxS_-jF7LGMao07sJuSP2WbDB2gUxh1Df1bdxJ9Be20bqIDRov8ihhu5Kg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3321KsELsf99CditODtQy3TzKRTL0wumUe4v-7TWBXq4EpXV-Mt8erPSOq_WJi8xk3YIbytBsShgNfwWM8pjWGfBprWDBAucngsf3ZY7f2bEONbRjorUSSn0jpwo9vPZy71Ojz-bqKQrYWfMgHP33URDI0LcCQt0ccghoGkSNlLX0OZt4fXaubUnBTqhhckizyAZfyor0a9RBht-RwzO6LpW-4gt5KV-Dx0bxDf6px4N0Cpaum-mNc3sYY6PFWy5yHHmL8pKpvU",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDI89zUUBj-J2uIKHoxZRQonajdNS3PeI07XWgKUdsZdPRVjzeK3l8hWGMAkD8e_2bqKItGzXviK_qy622ik7VWXJ5WXQLrTUsleSNSkK3JyG1k8kOLs3_TXl7v0MRFA19sCnaQz2kjzd2-O6N-v5W3D4RzZEE_Z-LaobySgNKNQmnulrhcvRpJU5_sVUrWp5juGBZooEb2cVCueFCiqO9RMKB2G_HX4hUI6ws-ZnWY2oBZ_sPFkiig-OBTRNlobU74NL2sBKyTNF4"
      ]
    }
  ];

  const selectedItem = services.find(s => s.id === selectedId);

  useEffect(() => {
    let interval: number;
    if (selectedId && selectedItem) {
      interval = window.setInterval(() => {
        setActiveImgIndex((prev) => (prev + 1) % selectedItem.images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [selectedId, selectedItem]);

  return (
    <section className="py-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Animated Badge & Heading Grid */}
        <div className="mb-20 flex flex-col md:flex-row gap-12 items-start md:items-end justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transitionSmooth}
            className="flex-1"
          >
            <span className="text-secondary font-bold text-xs tracking-widest uppercase block mb-3">On-Premises Capabilities</span>
            <h2 className="text-primary text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">What We Offer</h2>
            <div className="w-24 h-1.5 bg-secondary mt-6" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transitionSmooth}
            className="relative group p-2 border border-slate-100 bg-slate-50 overflow-hidden rounded-sm"
          >
            <div className="w-40 h-24 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArbq5EyjIxdoPoVmD5IUKGhR8zYExBROha8D_ElQmZ4W5-CXiwq-loGEC16v5iz4e1PqffduOQJERuUK2iCqwyPPdqrK0cAVWVyhlufg3tIH0vNPukUwNqwPsviSLB4boERe8vFwqagQVJig7ThmK2FfjjZo-s31kyzb5DW8dKrg0fq2n8tzBQCiyEScuEYpiWagg6kqMWdOyby0K-FPJg6LHwN_KLj669G5VsFg1J1go4lVh5fXaY2kj0PPEvyKoHd1N-lqVA7jg" 
                alt="NRK Excellence"
                className="w-full h-full object-cover text-xs"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[9px] font-mono text-slate-400 absolute bottom-3 right-4 tracking-wider">QC // DEPT. 08</span>
          </motion.div>
        </div>

        {/* Content Stagger Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariant}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={fadeInUpVariant}
              layoutId={`card-${service.id}`}
              onClick={() => {
                setSelectedId(service.id);
                setActiveImgIndex(0);
              }}
              whileHover={{ y: -8 }}
              className="group bg-slate-50 border border-slate-200/60 overflow-hidden cursor-pointer relative shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-200">
                <motion.img 
                  layoutId={`img-${service.id}-0`}
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  src={service.images[0]} 
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech Service Floating Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-primary/95 text-secondary flex items-center justify-center border border-white/10 shadow-lg">
                  <service.icon size={16} />
                </div>
              </div>

              <div className="p-10 relative">
                <div className="w-10 h-1 bg-slate-200 group-hover:bg-secondary group-hover:w-20 mb-6 transition-all duration-300" />
                <motion.h3 
                  layoutId={`title-${service.id}`}
                  className="text-2xl font-black tracking-tight text-primary mb-3 uppercase"
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  layoutId={`desc-${service.id}`}
                  className="text-slate-500 font-light text-sm leading-relaxed"
                >
                  {service.desc}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mt-6 flex items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  Learn Detail Parameters <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-primary/90 backdrop-blur-3xl"
            />
            
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="bg-white w-full max-w-6xl overflow-hidden relative z-10 shadow-2xl origin-center border border-slate-100"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-primary text-white hover:bg-secondary hover:text-white transition-colors flex items-center justify-center rounded-sm"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-full min-h-[400px] lg:min-h-[600px] relative overflow-hidden bg-slate-950 group">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeImgIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                      src={selectedItem.images[activeImgIndex]}
                      alt={`${selectedItem.title} view ${activeImgIndex + 1}`}
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent pointer-events-none" />
                  
                  {/* Thumbnails */}
                  <div className="absolute bottom-8 left-8 right-8 flex items-center justify-center gap-4 z-10">
                    {selectedItem.images.map((img, idx) => (
                      <button 
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImgIndex(idx);
                        }}
                        className={`relative w-16 h-16 border transition-all overflow-hidden bg-zinc-800 ${activeImgIndex === idx ? 'border-secondary scale-110 shadow-xl' : 'border-white/20 opacity-50 hover:opacity-100'}`}
                      >
                        <img src={img} className="w-full h-full object-cover" alt="thumb" referrerPolicy="no-referrer" />
                        {activeImgIndex === idx && (
                          <motion.div 
                            layoutId="thumb-active" 
                            className="absolute inset-0 border-2 border-secondary/40"
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImgIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-secondary text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImgIndex((prev) => (prev + 1) % selectedItem.images.length);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-secondary text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, ...transitionSmooth }}
                  >
                    <span className="text-secondary font-bold text-[10px] tracking-[0.4em] uppercase block mb-6">Capability Parameters</span>
                    <motion.h3 
                      layoutId={`title-${selectedId}`}
                      className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-8 uppercase"
                    >
                      {selectedItem.title}
                    </motion.h3>
                    <motion.p 
                      layoutId={`desc-${selectedId}`}
                      className="text-lg text-primary/80 font-medium mb-8 leading-tight"
                    >
                      {selectedItem.desc}
                    </motion.p>
                    <div className="w-12 h-1 bg-secondary/80 mb-10" />
                    
                    <TypeWriter 
                      text={selectedItem.longDesc} 
                      className="text-slate-600 font-light text-base leading-relaxed mb-12 min-h-[140px]"
                    />
                    
                    <motion.button 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-primary hover:bg-secondary text-white h-16 px-12 font-bold uppercase text-[10px] tracking-widest transition-all flex items-center gap-4 group rounded-sm"
                    >
                      Get Specification Sheet 
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectShowcase = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 bg-slate-50 relative">
      <div className="max-w-screen-2xl mx-auto p-1 border-r border-b border-dashed border-slate-300/40">
        
        {/* Animated Headline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transitionSmooth}
          >
            <span className="text-secondary font-bold text-xs tracking-widest uppercase block mb-3">Industrial Visual Architecture</span>
            <h2 className="text-primary text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase mb-6">Project-Centric Excellence</h2>
            <div className="w-24 h-1.5 bg-secondary" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...transitionSmooth }}
            className="max-w-md md:text-right"
          >
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
              A curated selection of monumental, large-scale infrastructure and processing landmarks powered by NRK Steel.
            </p>
          </motion.div>
        </div>

        {/* Asymmetrical Grid holding monumental projects */}
        <motion.div 
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:grid-rows-2 h-auto lg:h-[1100px]"
        >
          
          {/* Main Major Card */}
          <motion.div 
            variants={fadeInUpVariant}
            onMouseEnter={() => setHoveredIdx(0)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-primary cursor-pointer"
          >
            <img 
              alt="Zenith Trade Tower" 
              className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM3321KsELsf99CditODtQy3TzKRTL0wumUe4v-7TWBXq4EpXV-Mt8erPSOq_WJi8xk3YIbytBsShgNfwWM8pjWGfBprWDBAucngsf3ZY7f2bEONbRjorUSSn0jpwo9vPZy71Ojz-bqKQrYWfMgHP33URDI0LcCQt0ccghoGkSNlLX0OZt4fXaubUnBTqhhckizyAZfyor0a9RBht-RwzO6LpW-4gt5KV-Dx0bxDf6px4N0Cpaum-mNc3sYY6PFWy5yHHmL8pKpvU"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-90 group-hover:via-primary/50 transition-all" />
            
            <div className="absolute bottom-0 left-0 p-12 text-white z-10">
              <span className="bg-secondary/95 text-white text-[10px] font-bold tracking-widest uppercase mb-4 px-3 py-1 inline-block">Infrastructure Accent</span>
              <h3 className="text-4xl font-black tracking-tight mb-4 uppercase leading-none">The Zenith Trade Tower</h3>
              <p className="max-w-md text-white/70 font-light text-sm leading-relaxed mb-8">
                Supplying 4,500 metric tons of high-tensile structural steel framework for the tallest commercial landmark hub in regional history.
              </p>
              <button className="inline-flex items-center gap-2 text-secondary font-bold uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                View Engineering Blueprint <ArrowRight size={16} />
              </button>
            </div>

            {/* Hover Specs Card pop-up */}
            <AnimatePresence>
              {hoveredIdx === 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-6 right-6 z-30 p-5 bg-primary/95 backdrop-blur-md border border-white/20 text-white rounded-sm shadow-2xl w-72 font-mono text-[10px] pointer-events-none"
                >
                  <div className="flex items-center gap-1.5 text-secondary font-black mb-3 border-b border-white/10 pb-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                    <span>METRIC SPECS SITE // 01</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">LOCATION:</span>
                      <span className="text-white font-bold text-right uppercase">Indore, MP</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">SUPPLY QUANTITY:</span>
                      <span className="text-white font-bold text-right uppercase">4,500 Metric Tons</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">STEEL GRADE:</span>
                      <span className="text-white font-bold text-right uppercase">CTL E350 BR (High Tensile)</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">FLAT TOLERANCE:</span>
                      <span className="text-white font-bold text-right uppercase">&lt;0.2mm Flatness</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">DEPLOYMENT TIME:</span>
                      <span className="text-white font-bold text-right uppercase">120 Days</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Horizontal Card 2 */}
          <motion.div 
            variants={fadeInUpVariant}
            onMouseEnter={() => setHoveredIdx(1)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="md:col-span-2 relative group overflow-hidden bg-slate-200 min-h-[300px] cursor-pointer"
          >
            <img 
              alt="Expressway Grid" 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChByvHksJ_eFI7ePDtWk8iVVldIJqu19Gl3fAmVUHM13IJ-WSZf3eEYbbbOLE3UBUAmXsZTOrIVPRDgZaoNgev-oRa-B0pMCjfcPnizG38QnQagOsMvlnrYJxM8_7-5Pi-0CokAeQN-GqONl3Kd72hIrwrridz3801kl_lH3TavuQYBe-pjg5IAtUZrsC664eDLuv1cUh4xz73zR2CEMYv0DmSQqno6sA-_VazUpCLNBWoSdNNuUE-IDW4hGghPE7N6I6ZWKvdRFU"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-10 text-white z-10">
              <span className="text-secondary text-[9px] font-bold tracking-widest uppercase block mb-1">LOGISTICS CAPACITY</span>
              <h3 className="text-2xl font-black tracking-tight uppercase">Grand Expressway Flyovers</h3>
              <p className="text-xs text-white/70 mt-1 leading-relaxed max-w-sm">Providing robust girder fabrication for rapid long-span state corridor connections.</p>
            </div>

            {/* Hover Specs Card pop-up */}
            <AnimatePresence>
              {hoveredIdx === 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-6 right-6 z-30 p-5 bg-primary/95 backdrop-blur-md border border-white/20 text-white rounded-sm shadow-2xl w-72 font-mono text-[10px] pointer-events-none"
                >
                  <div className="flex items-center gap-1.5 text-secondary font-black mb-3 border-b border-white/10 pb-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                    <span>METRIC SPECS SITE // 02</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">LOCATION:</span>
                      <span className="text-white font-bold text-right uppercase">Bhopal Sector</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">SUPPLY QUANTITY:</span>
                      <span className="text-white font-bold text-right uppercase">2,500 Metric Tons</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">PRODUCT TYPE:</span>
                      <span className="text-white font-bold text-right uppercase">Girder Plates</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">STRESS COMP:</span>
                      <span className="text-white font-bold text-right uppercase">High-Vibration (Grade E250)</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">TENSION YIELD:</span>
                      <span className="text-white font-bold text-right uppercase">350 MPa</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Square 1 */}
          <motion.div 
            variants={fadeInUpVariant}
            onMouseEnter={() => setHoveredIdx(2)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="relative group overflow-hidden bg-slate-100 min-h-[300px] cursor-pointer"
          >
            <img 
              alt="Industrial Pipes" 
              className="w-full h-full object-cover grayscale opacity-95 group-hover:scale-105 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArbq5EyjIxdoPoVmD5IUKGhR8zYExBROha8D_ElQmZ4W5-CXiwq-loGEC16v5iz4e1PqffduOQJERuUK2iCqwyPPdqrK0cAVWVyhlufg3tIH0vNPukUwNqwPsviSLB4boERe8vFwqagQVJig7ThmK2FfjjZo-s31kyzb5DW8dKrg0fq2n8tzBQCiyEScuEYpiWagg6kqMWdOyby0K-FPJg6LHwN_KLj669G5VsFg1J1go4lVh5fXaY2kj0PPEvyKoHd1N-lqVA7jg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-8 text-white z-10">
              <h3 className="text-xl font-black tracking-tight uppercase mb-1">Industrial Hub Alpha</h3>
              <p className="text-[10px] font-bold tracking-widest uppercase text-secondary">Specialized Alloys & Coils</p>
            </div>

            {/* Hover Specs Card pop-up */}
            <AnimatePresence>
              {hoveredIdx === 2 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-6 right-6 z-30 p-5 bg-primary/95 backdrop-blur-md border border-white/20 text-white rounded-sm shadow-2xl w-64 font-mono text-[10px] pointer-events-none"
                >
                  <div className="flex items-center gap-1.5 text-secondary font-black mb-3 border-b border-white/10 pb-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                    <span>METRIC SPECS SITE // 03</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">LOCATION:</span>
                      <span className="text-white font-bold text-right uppercase">Pithampur Phase-III</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">SUPPLY QUANTITY:</span>
                      <span className="text-white font-bold text-right uppercase">1,200 Metric Tons</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">SPEC TYPE:</span>
                      <span className="text-white font-bold text-right uppercase">Cold Rolled Alloys & Coils</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">PROCESSING:</span>
                      <span className="text-white font-bold text-right uppercase">Custom Cut-to-Length</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">FRICTION COEFF:</span>
                      <span className="text-white font-bold text-right uppercase">0.15</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Square 2 */}
          <motion.div 
            variants={fadeInUpVariant}
            onMouseEnter={() => setHoveredIdx(3)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="relative group overflow-hidden bg-slate-300 min-h-[300px] cursor-pointer"
          >
            <img 
              alt="Construction Core" 
              className="w-full h-full object-cover grayscale opacity-55 group-hover:scale-105 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCEIuEPXR0rjZ2no1xJJ2vrRZ1y4DMhL5erJjVmN_Vy7iktj0oLtqP3wQS3VYQfNkyz_1QGRfkaNvblQpGtUJXQTDA8Dgniz9fpCatKu4DoRWcDvig6i3WI95U-19R9pAJ-C0ov_TevfLQBobsc0Ylu-HusczCgQ9OFG8Kj0aGLQ_NpQq_GuS_ctXjjIB1a8oiFwv8OTghdy6Yj9maf9pw-fVJ5Okme-LXMUni6UHZAF2uwE-i70LoNMC1WbRpvNKdXQDPs2bGGfU"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10">
              <div className="p-6 border border-white/20 backdrop-blur-md bg-primary/80 text-white w-full rounded-sm">
                <span className="text-[8px] font-bold tracking-[0.2em] text-secondary uppercase block mb-1">SUBWAY NETWORKS</span>
                <h3 className="text-lg font-black tracking-tight uppercase">Metro Infrastructure Ext.</h3>
                <div className="mt-3 w-8 h-1 bg-secondary mx-auto"></div>
              </div>
            </div>

            {/* Hover Specs Card pop-up */}
            <AnimatePresence>
              {hoveredIdx === 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-6 right-6 z-30 p-5 bg-primary/95 backdrop-blur-md border border-white/20 text-white rounded-sm shadow-2xl w-72 font-mono text-[10px] pointer-events-none"
                >
                  <div className="flex items-center gap-1.5 text-secondary font-black mb-3 border-b border-white/10 pb-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                    <span>METRIC SPECS SITE // 04</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">LOCATION:</span>
                      <span className="text-white font-bold text-right uppercase">Jabalpur-Bhopal Corridor</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">SUPPLY QUANTITY:</span>
                      <span className="text-white font-bold text-right uppercase">3,100 Metric Tons</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">COATING DEGREE:</span>
                      <span className="text-white font-bold text-right uppercase">L3 Anti-corrosive Powder</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">STRUCT FRAME:</span>
                      <span className="text-white font-bold text-right uppercase">Heavy Girder Structures</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/55">WARRANTY CAP:</span>
                      <span className="text-white font-bold text-right uppercase">20 Years Structural Warranty</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};



const IndustryVision = () => {
  return (
    <section className="py-32 bg-primary text-white overflow-hidden relative">
      {/* Visual background blueprint grid */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transitionSmooth}
          className="relative"
        >
          {/* Large aesthetic watermark */}
          <div className="absolute -top-32 -left-20 text-[20rem] font-black text-white/5 select-none leading-none pointer-events-none">
            01
          </div>
          
          <span className="text-secondary font-bold text-xs tracking-widest uppercase block mb-3">Foundry Leadership</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-8 uppercase">
            Architecture of <span className="text-secondary">NRK STEEL.</span>
          </h2>
          
          <div className="space-y-8 text-white/70 text-lg leading-relaxed font-light">
            <p>
              We don't just supply raw metals; we engineer and deliver the foundational skeleton that structural design limits rely upon. Our corporate legacy has transitioned Central India from a regional fabrication market into a production nucleus.
            </p>
            <p>
              By aligning smart logistics hubs with the highest grade chemical structures of structural steel plates, sheets, and coils, we satisfy strict parameters of security and durability.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest text-[#afcbd8] uppercase">Managing Director</span>
              <span className="text-2xl font-bold tracking-tighter mt-1 text-white">Rajesh K. Agrawal</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <p className="text-xs italic text-white/50 max-w-xs leading-relaxed">
              "Quality is not a series of checks; it is an executive habit embedded in every dispatch departing our warehouses daily."
            </p>
          </div>
        </motion.div>

        {/* Sophisticated parallax card frame */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, ...transitionSmooth }}
          className="relative h-[550px] group"
        >
          <div className="absolute inset-0 bg-secondary border border-white/10 z-0 translate-x-6 translate-y-6 group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-700 rounded-sm"></div>
          <img 
            alt="Steel Refinery" 
            className="absolute inset-0 w-full h-full object-cover z-10 grayscale brightness-90 hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI89zUUBj-J2uIKHoxZRQonajdNS3PeI07XWgKUdsZdPRVjzeK3l8hWGMAkD8e_2bqKItGzXviK_qy622ik7VWXJ5WXQLrTUsleSNSkK3JyG1k8kOLs3_TXl7v0MRFA19sCnaQz2kjzd2-O6N-v5W3D4RzZEE_Z-LaobySgNKNQmnulrhcvRpJU5_sVUrWp5juGBZooEb2cVCueFCiqO9RMKB2G_HX4hUI6ws-ZnWY2oBZ_sPFkiig-OBTRNlobU74NL2sBKyTNF4"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const MinimalCTA = () => {
  return (
    <section className="py-28 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden select-none border-t border-white/10">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80" 
          alt="Refined industrial metallurgy foundry" 
          className="w-full h-full object-cover opacity-35 scale-105 hover:scale-100 transition-all duration-1000 saturate-[1.10]"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered Gradients to maintain excellent readable contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-secondary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
        
        {/* Architectural Blueprint Lines Grid */}
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
          LAUNCH SECURE DESIGN
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] max-w-3xl mx-auto">
          Start Your <br className="sm:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-secondary select-none">
            Monument Today
          </span>
        </h2>
        
        <p className="text-sm md:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
          Connect directly with our industrial technical consultants to specify material grades, download certificates, or schedule long-term volume allocations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a 
            href="/products"
            className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-white hover:text-slate-950 text-white font-mono font-bold text-[10px] uppercase tracking-[0.2em] rounded-md transition-all shadow-lg hover:shadow-secondary/20 hover:scale-105 flex items-center justify-center gap-2"
          >
            Examine Spec Sheets
            <ArrowRight size={13} />
          </a>
          <a 
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white text-white font-mono font-bold text-[10px] uppercase tracking-[0.2em] rounded-md hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            Contact HQ Offices
          </a>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-on-background font-body overflow-x-hidden"
    >
      <Hero />
      <ImpactStats />
      <TrustLedger />
      <WhatWeOffer />
      <ProjectShowcase />
      <IndustryVision />
      <MinimalCTA />
    </motion.div>
  );
}
