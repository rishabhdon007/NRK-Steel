import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Sliders, Activity, Compass, Eye, Award } from 'lucide-react';

interface LabTestType {
  id: string;
  name: string;
  machine: string;
  param: string;
  desc: string;
  metricLabel: string;
  metricValue: string;
  procedure: string;
}

const labTests: LabTestType[] = [
  {
    id: 'chem',
    name: 'Chemical Spectrography Analysis',
    machine: 'Thermo Scientific OES Spectrometer',
    param: 'Carbon Equivalent, Sulfur, & Phos Limits',
    desc: 'Using high-frequency sparkle optical emission, we analyze the metallurgical matrix down to part-per-million (PPM) values, ensuring exact compliant alloying indexes that match EN and ASTM protocols.',
    metricLabel: 'Chemical Composition Variance',
    metricValue: '±0.005% Tolerable Peak',
    procedure: 'Core elements are vaporized under argon protection to determine wavelength signature emissions.'
  },
  {
    id: 'uts',
    name: 'Ultimate Tensile Strength (UTS)',
    machine: 'Blue Star 1000kN Universal Testing Machine',
    param: 'Yield Stress & Elastic Modulus Validation',
    desc: 'Each production run undergoes heavy hydraulic tensile strain. We measure the peak yield limit to ensure the strength ratio satisfies seismic ductility factors for high-stress bridge & sky-rise frameworks.',
    metricLabel: 'Minimum Yield Limit',
    metricValue: '550 N/mm² Guaranteed',
    procedure: 'Material specimen is clamped and pulled to destruction while charting stress/strain curves.'
  },
  {
    id: 'ultrasonic',
    name: 'Ultrasonic Scanning (Non-Destructive)',
    machine: 'Olympus Epoch 650 Digital Defect Detector',
    param: 'Internal Microfracture & Lamination scan',
    desc: 'Ensuring structural cores are perfectly dense and solid. High-frequency acoustic waves scan the inner volume of heavy plates and structural sections to guarantee zero air bubbles or interior cracks.',
    metricLabel: 'Scanning Resolution',
    metricValue: 'Class A Zero-Defect rating',
    procedure: 'A physical transducer sweeps the steel surface with ultrasonic couplant for immediate echo mapping.'
  },
  {
    id: 'bend',
    name: '180° Cold Bend & Re-Bend',
    machine: 'Heavy Mandrel Pre-stressed Pressing Unit',
    param: 'Deformation Resilience & Elongation Threshold',
    desc: 'TMT bars and structural joints are bent double over specialized mandrels, then re-bent after thermal water boiling. This confirms no hair fractures develop at tension borders during high deformation.',
    metricLabel: 'Admissible Angle Limit',
    metricValue: '180 Degrees without Shear',
    procedure: 'Mandrel deformation at absolute cold state, followed by heat aging and reverse stress testing.'
  }
];

export const QualityStandards: React.FC = () => {
  const [activeTest, setActiveTest] = useState<string>('chem');
  const selectedTest = labTests.find(t => t.id === activeTest) || labTests[0];

  return (
    <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 shadow-sm rounded-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Navigation Links & Badges */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 text-primary">
              <ShieldCheck size={28} className="text-primary" />
              <span className="text-[10px] font-mono tracking-widest font-bold uppercase">QA/QC METALLURGY PROTOCOL</span>
            </div>
            
            <h3 className="text-3xl font-black text-primary tracking-tighter uppercase mb-6 leading-none">
              ISO 9001:2015 <br /> Quality Testing Suite
            </h3>
            
            <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">
              We anchor structural reliability by subjecting every batch to intense multi-variable tests in our central testing laboratory before issuing formal inspection certificates.
            </p>

            {/* Test Selection Tabs */}
            <div className="space-y-3">
              {labTests.map((t) => {
                const isActive = activeTest === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTest(t.id)}
                    className={`w-full text-left p-4 border transition-all flex items-center justify-between group rounded-xs ${
                      isActive 
                        ? 'bg-primary text-white border-primary shadow-lg' 
                        : 'bg-white text-slate-700 border-slate-200/60 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wide">{t.name}</span>
                    <Activity size={14} className={isActive ? 'text-secondary animate-pulse' : 'text-slate-400 group-hover:translate-x-1 transition-transform'} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center gap-4">
            <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-primary font-black text-xs font-mono">
              OK
            </div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              100% Traceable Heat Certificate Issued (MTC EN 10204 3.1)
            </p>
          </div>
        </div>

        {/* Right Side: Active Test Detail Panel */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 p-8 md:p-10 rounded-sm relative flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTest}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest block mb-1">DEPLOYED MACHINERY</span>
                <span className="text-lg font-bold text-slate-800 tracking-tight block uppercase">{selectedTest.machine}</span>
              </div>

              <div className="w-16 h-1 bg-secondary" />

              <div>
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest block mb-2">TARGET MEASURE</span>
                <h4 className="text-2xl font-black text-primary uppercase tracking-tight">{selectedTest.param}</h4>
                <p className="text-slate-500 font-light text-sm mt-4 leading-relaxed">
                  {selectedTest.desc}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-xs space-y-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block border-b border-slate-200/60 pb-1">
                  Active Lab Diagnostic Metric
                </span>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-500 uppercase">{selectedTest.metricLabel}</span>
                  <span className="text-lg font-black font-mono text-secondary">{selectedTest.metricValue}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest block mb-2">PROCEDURAL REGIMEN</span>
                <p className="text-xs text-slate-600 font-light italic leading-relaxed">
                  "{selectedTest.procedure}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
