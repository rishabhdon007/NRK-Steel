import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, CheckCircle2, Sliders, FileText } from 'lucide-react';

interface CompareTechItem {
  id: string;
  title: string;
  grade: string;
  thicknessSize: string;
  standard: string;
  yieldStrength: string;
  weldability: string;
  corrosion: string;
  application: string;
}

const compareData: CompareTechItem[] = [
  {
    id: "cold-rolled-coils",
    title: "Cold Rolled Coils",
    grade: "Semi Hard / Commercial",
    thicknessSize: "0.30mm - 4.00mm",
    standard: "ASTM A1008 / JIS G3141",
    yieldStrength: "240 - 320 MPa",
    weldability: "Excellent (Standard arc/spot)",
    corrosion: "Requires protective coating",
    application: "Automotive, appliance enclosures"
  },
  {
    id: "tmt-rebars",
    title: "TMT Rebars",
    grade: "Fe 500D / Fe 550D / 600",
    thicknessSize: "8mm - 32mm Diameter",
    standard: "IS 1786 / High-Seismic",
    yieldStrength: "500 - 550 MPa",
    weldability: "Superb (Thermal hardened)",
    corrosion: "Moderate anti-corrosive layer",
    application: "Reinforced concrete, foundations"
  },
  {
    id: "structural-beams",
    title: "Structural Beams",
    grade: "S235JR / S355JR / IS 2062",
    thicknessSize: "100mm - 1000mm Profile",
    standard: "EN 10025 / IS 2062",
    yieldStrength: "235 - 355 MPa",
    weldability: "Outstanding (Structural welds)",
    corrosion: "Needs primer/galvanization",
    application: "Skyscrapers, bridges, industrial frame"
  },
  {
    id: "ms-plates",
    title: "MS Plates",
    grade: "Grade A / B / S275",
    thicknessSize: "5.00mm - 150.00mm",
    standard: "IS 2062 / EN 10025",
    yieldStrength: "250 - 275 MPa",
    weldability: "Excellent (Heavy duty welds)",
    corrosion: "Standard (Heavy scale rating)",
    application: "Shipbuilding, pressure vessels, tanks"
  }
];

export const ProductCompare: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(["cold-rolled-coils", "ms-plates"]);

  const toggleProduct = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter(item => item !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const selectedProducts = compareData.filter(p => selectedIds.includes(p.id));

  return (
    <div className="bg-white border border-slate-200/80 p-8 md:p-12 rounded-sm shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2 text-secondary">
            <Sliders size={16} />
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold">DECISION PARITY GRID</span>
          </div>
          <h3 className="text-2xl font-black uppercase text-primary tracking-tight">Technical Comparison Ledger</h3>
          <p className="text-xs text-slate-500 font-light mt-1">
            Toggle up to 3 products to evaluate metallurgical variables, chemical tolerances, and engineering performance values.
          </p>
        </div>

        {/* Selection Toggles */}
        <div className="flex flex-wrap gap-2">
          {compareData.map((prod) => {
            const isActive = selectedIds.includes(prod.id);
            return (
              <button
                key={prod.id}
                onClick={() => toggleProduct(prod.id)}
                className={`py-2 px-4 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-primary border-primary text-white shadow-md' 
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {isActive && <CheckCircle2 size={12} className="text-secondary" />}
                {prod.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Side-by-side Table Deck */}
      <div className="overflow-x-auto border border-slate-100">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200/60">
              <th className="p-5 font-mono text-[10px] uppercase text-slate-400 font-bold w-1/4">Engineering Property</th>
              {selectedProducts.map((p) => (
                <th key={p.id} className="p-5 font-black text-primary text-lg border-l border-slate-200/60">
                  {p.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            <tr>
              <td className="p-5 font-bold text-[10px] tracking-widest text-slate-400 uppercase">Primary Grade</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="p-5 text-sm font-semibold text-slate-700 border-l border-slate-200/60">
                  {p.grade}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-5 font-bold text-[10px] tracking-widest text-slate-400 uppercase">Available Gauge Range</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="p-5 text-sm text-slate-600 font-mono border-l border-slate-200/60 font-bold">
                  {p.thicknessSize}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-5 font-bold text-[10px] tracking-widest text-slate-400 uppercase">Regulatory Standard</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="p-5 text-sm text-slate-600 font-mono border-l border-slate-200/60">
                  {p.standard}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-5 font-bold text-[10px] tracking-widest text-slate-400 uppercase font-mono">Yield Tensile Strength</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="p-5 text-base font-black text-secondary font-mono border-l border-slate-200/60">
                  {p.yieldStrength}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-5 font-bold text-[10px] tracking-widest text-slate-400 uppercase">Weldability Tolerance</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="p-5 text-sm text-slate-600 border-l border-slate-200/60">
                  {p.weldability}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-5 font-bold text-[10px] tracking-widest text-slate-400 uppercase">Corrosion Resilience</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="p-5 text-sm text-slate-600 border-l border-slate-200/60 font-light">
                  {p.corrosion}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-5 font-bold text-[10px] tracking-widest text-slate-400 uppercase">Dominant Applications</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="p-5 text-xs text-slate-600 border-l border-slate-200/60 leading-relaxed font-light">
                  {p.application}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
