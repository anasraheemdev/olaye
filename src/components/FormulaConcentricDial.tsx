import React, { useState } from 'react';
import type { DosageRecommendation } from '../data/products';

interface FormulaConcentricDialProps {
  dosages: DosageRecommendation[];
}

export const FormulaConcentricDial: React.FC<FormulaConcentricDialProps> = ({ dosages }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeDosage = dosages[selectedIndex] || dosages[0];

  // Ring calculations for concentric dials
  const rings = [
    { radius: 42, circumference: 2 * Math.PI * 42, level: 1, label: 'Base Cleansing' },
    { radius: 64, circumference: 2 * Math.PI * 64, level: 2, label: 'Micro-Fiber Infusion' },
    { radius: 86, circumference: 2 * Math.PI * 86, level: 3, label: 'Lipid Shield' },
    { radius: 108, circumference: 2 * Math.PI * 108, level: 4, label: 'Full Scalp Ceremony' },
  ];

  return (
    <div className="w-full bg-surface-container-lowest/80 border border-primary/20 rounded-lg p-space-md md:p-space-lg backdrop-blur-xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-sm border-b border-primary/15 mb-space-md gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.24em]">
            Formula Concentric Dial
          </span>
        </div>
        <span className="font-label-caps text-label-caps uppercase text-outline tracking-widest">
          Sensory Dosage Calibration
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
        {/* Left: Interactive Concentric Dial SVG */}
        <div className="md:col-span-5 flex flex-col items-center justify-center relative py-2">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />

            {/* SVG Concentric Rings */}
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 240 240">
              {/* Center point */}
              <circle cx="120" cy="120" r="14" fill="#1c1b1b" stroke="#c9a24b" strokeWidth="1.5" />
              <circle cx="120" cy="120" r="4" fill="#ebc166" />

              {/* Ticks & Rings */}
              {rings.map((ring, idx) => {
                const isActive = (activeDosage.value / 1.5) >= idx + 1;
                return (
                  <g key={ring.radius}>
                    {/* Background track */}
                    <circle
                      cx="120"
                      cy="120"
                      r={ring.radius}
                      fill="none"
                      stroke="#2a2a2a"
                      strokeWidth="1.5"
                      strokeDasharray="2 6"
                    />
                    {/* Active highlighted arc */}
                    <circle
                      cx="120"
                      cy="120"
                      r={ring.radius}
                      fill="none"
                      stroke={isActive ? '#ebc166' : 'rgba(235, 193, 102, 0.15)'}
                      strokeWidth={isActive ? '2.5' : '1'}
                      strokeDasharray={ring.circumference}
                      strokeDashoffset={
                        isActive ? ring.circumference * (1 - (0.25 * (idx + 1))) : ring.circumference
                      }
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-out"
                    />
                  </g>
                );
              })}

              {/* Ray indicators */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 120 + 24 * Math.cos(rad);
                const y1 = 120 + 24 * Math.sin(rad);
                const x2 = 120 + 115 * Math.cos(rad);
                const y2 = 120 + 115 * Math.sin(rad);
                return (
                  <line
                    key={angle}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(235, 193, 102, 0.08)"
                    strokeWidth="0.75"
                  />
                );
              })}
            </svg>

            {/* Center Measurement Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="font-headline-md text-headline-md text-primary font-normal leading-none">
                {activeDosage.value}
              </span>
              <span className="font-label-caps text-[9px] uppercase tracking-widest text-on-surface-variant mt-1">
                {activeDosage.measureType}
              </span>
            </div>
          </div>

          <div className="text-center mt-2">
            <span className="font-label-caps text-[10px] text-outline uppercase tracking-[0.2em]">
              Botanical Pipette Precision
            </span>
          </div>
        </div>

        {/* Right: Hair Density / Ritual Selector */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-3">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.16em]">
            Select Your Hair Density &amp; Need:
          </span>

          <div className="space-y-2">
            {dosages.map((dosage, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={dosage.hairType}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left p-space-sm rounded border transition-all duration-300 flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-surface-container-high/90 border-primary shadow-[0_0_16px_rgba(201,162,75,0.2)]'
                      : 'bg-surface-container-low/40 border-outline/20 hover:border-primary/40 hover:bg-surface-container-low'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border transition-all ${
                          isSelected
                            ? 'bg-primary border-primary'
                            : 'border-outline/40'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest" />}
                      </span>
                      <span className={`font-title-md text-[14px] ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                        {dosage.hairType}
                      </span>
                    </div>
                    <p className="font-body-sm text-[12px] text-on-surface-variant pl-5 leading-relaxed">
                      {dosage.ritualNote}
                    </p>
                  </div>

                  <span className="shrink-0 font-label-caps text-label-caps uppercase tracking-wider text-primary px-2.5 py-1 bg-surface-container-highest rounded border border-primary/20">
                    {dosage.dosage}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-2.5 bg-surface-container/60 rounded border border-secondary-container/40 flex items-center gap-2.5 mt-1">
            <span className="material-symbols-outlined text-secondary text-[18px]">eco</span>
            <p className="font-body-sm text-[12px] text-on-surface-variant leading-snug">
              Every drop is 100% active botanical concentrate. Never dilute prior to warming between hands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
