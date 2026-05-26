import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Hammer, Scale, RefreshCw } from 'lucide-react';

type MetalShape = 'plate' | 'round' | 'square' | 'pipe';

export const MetalWeightCalculator: React.FC = () => {
  const [shape, setShape] = useState<MetalShape>('plate');
  
  // Dimensions state (in mm / m)
  const [thickness, setThickness] = useState<number>(10); // mm
  const [width, setWidth] = useState<number>(1500); // mm
  const [length, setLength] = useState<number>(6); // meters
  const [diameter, setDiameter] = useState<number>(50); // mm
  const [wallThickness, setWallThickness] = useState<number>(5); // mm
  const [quantity, setQuantity] = useState<number>(1);

  const calculateWeight = (): { kg: number, tonnes: number } => {
    let singleWeightKg = 0;
    const density = 7.85; // g/cm³ or kg/dm³ (carbon steel)

    if (shape === 'plate') {
      // Weight = thickness(mm) * width(m) * length(m) * density
      const widthM = width / 1000;
      singleWeightKg = thickness * widthM * length * density;
    } else if (shape === 'round') {
      // Weight = pi * r² * length * density
      const radiusM = diameter / 2000; // converted to meters
      singleWeightKg = Math.PI * Math.pow(radiusM, 2) * length * 7850;
    } else if (shape === 'square') {
      // Weight = width² * length * density
      const widthM = diameter / 1000; // reuse diameter as width for square bar
      singleWeightKg = Math.pow(widthM, 2) * length * 7850;
    } else if (shape === 'pipe') {
      // Weight = pi * (R² - r²) * length * density
      const outerRadiusM = diameter / 2000;
      const innerRadiusM = (diameter - 2 * wallThickness) / 2000;
      if (innerRadiusM > 0) {
        singleWeightKg = Math.PI * (Math.pow(outerRadiusM, 2) - Math.pow(innerRadiusM, 2)) * length * 7850;
      }
    }

    const totalKg = singleWeightKg * quantity;
    return {
      kg: Math.round(totalKg * 100) / 100,
      tonnes: Math.round((totalKg / 1000) * 10000) / 10000
    };
  };

  const results = calculateWeight();

  return (
    <div className="bg-slate-900 text-white p-8 md:p-12 border border-slate-800 rounded-sm shadow-2xl relative overflow-hidden">
      {/* CAD blueprint visual style grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-screen overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="calculator-blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#calculator-blueprint-grid)" />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Input Panel */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-sm">
                <Calculator className="text-white" size={20} />
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widest text-secondary block uppercase">METALLURGY MATH SUITE</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-none">Theoretical Steel Weight Estimator</h3>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-light max-w-lg mb-8 leading-relaxed">
              Calculate the precise theoretical tonnage of your structural requirements instantly. Computations use carbon steel density standard: <span className="text-secondary font-mono">7,850 kg/m³ (7.85 g/cm³)</span>.
            </p>

            {/* Shape Selectors */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {(['plate', 'round', 'square', 'pipe'] as MetalShape[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setShape(s)}
                  className={`py-3 px-1 md:px-3 text-[10px] font-bold uppercase tracking-wider text-center border transition-all ${
                    shape === s 
                      ? 'bg-secondary border-secondary text-white font-black' 
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Dynamic input fields based on shape */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Common Length */}
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                  Length (L in Meters)
                </label>
                <input 
                  type="number"
                  min="0.1"
                  step="0.05"
                  value={length}
                  onChange={(e) => setLength(Math.max(0.1, parseFloat(e.target.value) || 0))}
                  className="w-full bg-white/5 border border-white/10 p-3 font-mono font-bold text-sm text-white focus:outline-none focus:border-secondary"
                />
              </div>

              {/* Plate options */}
              {shape === 'plate' && (
                <>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                      Thickness (T in mm)
                    </label>
                    <input 
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={thickness}
                      onChange={(e) => setThickness(Math.max(0.1, parseFloat(e.target.value) || 0))}
                      className="w-full bg-white/5 border border-white/10 p-3 font-mono font-bold text-sm text-white focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                      Width (W in mm)
                    </label>
                    <input 
                      type="number"
                      min="1"
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full bg-white/5 border border-white/10 p-3 font-mono font-bold text-sm text-white focus:outline-none focus:border-secondary"
                    />
                  </div>
                </>
              )}

              {/* Round/Square options */}
              {(shape === 'round' || shape === 'square') && (
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                    {shape === 'round' ? 'Diameter (D in mm)' : 'Width/Side (W in mm)'}
                  </label>
                  <input 
                    type="number"
                    min="1"
                    value={diameter}
                    onChange={(e) => setDiameter(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full bg-white/5 border border-white/10 p-3 font-mono font-bold text-sm text-white focus:outline-none focus:border-secondary"
                  />
                </div>
              )}

              {/* Pipe options */}
              {shape === 'pipe' && (
                <>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                      Outer Diameter (OD in mm)
                    </label>
                    <input 
                      type="number"
                      min="1"
                      value={diameter}
                      onChange={(e) => setDiameter(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full bg-white/5 border border-white/10 p-3 font-mono font-bold text-sm text-white focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                      Wall Thickness (WT in mm)
                    </label>
                    <input 
                      type="number"
                      min="0.5"
                      max={diameter / 2 - 1}
                      step="0.1"
                      value={wallThickness}
                      onChange={(e) => setWallThickness(Math.max(0.5, Math.min(diameter / 2 - 1, parseFloat(e.target.value) || 0)))}
                      className="w-full bg-white/5 border border-white/10 p-3 font-mono font-bold text-sm text-white focus:outline-none focus:border-secondary"
                    />
                  </div>
                </>
              )}

              {/* Quantity */}
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                  Quantity (count)
                </label>
                <input 
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-white/5 border border-white/10 p-3 font-mono font-bold text-sm text-white focus:outline-none focus:border-secondary"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Right Output Dashboard with Blueprint Aesthetics */}
        <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-sm flex flex-col justify-between relative">
          <div className="absolute top-4 right-4 text-white/10 font-mono tracking-widest text-[8px] uppercase select-none">
            SPEC_RESULT_CALC v2.3
          </div>
          
          <div>
            <span className="text-[10px] font-mono tracking-widest text-secondary block uppercase mb-6 border-b border-white/10 pb-2">
              ESTIMATION METRICS
            </span>
            
            <div className="space-y-6">
              <div>
                <span className="text-white/40 text-[9px] uppercase tracking-widest block mb-1">TOTAL MASS IN KILOGRAMS</span>
                <span className="text-4xl md:text-5xl font-black text-white font-mono tracking-tighter block">{results.kg.toLocaleString()} <span className="text-lg text-slate-400">kg</span></span>
              </div>

              <div>
                <span className="text-white/40 text-[9px] uppercase tracking-widest block mb-1">METRIC TONNAGE WEIGHT</span>
                <span className="text-4xl md:text-5xl font-black text-secondary font-mono tracking-tighter block">{results.tonnes.toLocaleString()} <span className="text-lg text-secondary/60">MT</span></span>
              </div>
            </div>

            {/* Micro Details summary */}
            <div className="bg-black/20 p-4 border border-white/5 mt-8 space-y-2 font-mono text-[9px] text-slate-400">
              <div className="flex justify-between">
                <span>SHAPE SPEC:</span>
                <span className="text-white uppercase font-bold">{shape}</span>
              </div>
              <div className="flex justify-between">
                <span>SHAPE PARAM:</span>
                <span className="text-white font-bold">
                  {shape === 'plate' && `${thickness}mm × ${(width/1000).toFixed(2)}m × ${length}m`}
                  {(shape === 'round' || shape === 'square') && `⌀${diameter}mm × ${length}m`}
                  {shape === 'pipe' && `⌀${diameter}mm (WT:${wallThickness}mm) × ${length}m`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>TOTAL QTY:</span>
                <span className="text-white font-bold">{quantity} Pcs</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button className="w-full bg-secondary text-white py-4 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl block text-center">
              Request Delivery Quote for {results.tonnes} MT
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
