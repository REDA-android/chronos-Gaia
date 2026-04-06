import React from 'react';

export const PlantProfile: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[530px] w-full overflow-hidden rounded-3xl -mt-6">
        <img alt="Monstera Deliciosa" className="w-full h-full object-cover object-center scale-105 brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg3-MWpesuqawX1wfoVv_aLF7eefCETWVD3vrMlE8Kh5frUIgdKVM0Kw37Cld9XNh-qafxOJbLfmv4DOtdEZH8oSNNexnI0be6ypTeFmc9KnXz2cIPcqaDwk356pNxAxMr_kgznnCRY2T4Wwi62aAb9dwBDgD9kvgBybsStEggm7D8erHa-QGw6xZSih7u76iQjt5z2F9nCziVdHhb9J26XyRLa4nXJ-Xw9QmCrqCYsCcjLlOTQ-65gfnlhWZtmn_ZtcNrnNOlEPaE"/>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="max-w-7xl mx-auto">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-2 block">Specimen ID: MD-2024-X</span>
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-7xl text-on-surface tracking-tight mb-4">Monstera Deliciosa</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-surface-container-high/80 px-3 py-1 rounded-full backdrop-blur-md">
                <span className="material-symbols-outlined text-primary text-sm">potted_plant</span>
                <span className="font-label text-[10px] uppercase tracking-wider">Aroid Family</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-high/80 px-3 py-1 rounded-full backdrop-blur-md">
                <span className="material-symbols-outlined text-primary text-sm">history</span>
                <span className="font-label text-[10px] uppercase tracking-wider">Day 412 in Bio-dome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vitals Bento Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            LIVE VITALS
          </h2>
          <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Real-time sync active</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Moisture */}
          <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group hover:bg-surface-container-high transition-colors duration-300">
            <div className="flex justify-between items-start mb-8">
              <span className="material-symbols-outlined text-tertiary text-3xl">water_drop</span>
              <span className="font-label text-[10px] text-tertiary-fixed-dim bg-on-tertiary/20 px-2 py-0.5 rounded">HYDRATED</span>
            </div>
            <div className="space-y-1">
              <span className="font-label text-4xl font-bold text-on-surface">68<span className="text-lg font-light opacity-50">%</span></span>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Soil Saturation</p>
            </div>
            <div className="mt-4 w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-tertiary w-[68%] shadow-[0_0_8px_rgba(101,253,230,0.5)]"></div>
            </div>
          </div>
          {/* Sunlight */}
          <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group hover:bg-surface-container-high transition-colors duration-300">
            <div className="flex justify-between items-start mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">sunny</span>
              <span className="font-label text-[10px] text-primary-fixed-dim bg-on-primary/20 px-2 py-0.5 rounded">OPTIMAL</span>
            </div>
            <div className="space-y-1">
              <span className="font-label text-4xl font-bold text-on-surface">4200<span className="text-lg font-light opacity-50"> LUX</span></span>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Indirect Exposure</p>
            </div>
            <div className="mt-4 w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[85%] shadow-[0_0_8px_rgba(184,253,75,0.5)]"></div>
            </div>
          </div>
          {/* Temperature */}
          <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group hover:bg-surface-container-high transition-colors duration-300">
            <div className="flex justify-between items-start mb-8">
              <span className="material-symbols-outlined text-error-dim text-3xl">thermostat</span>
              <span className="font-label text-[10px] text-error-container bg-error-dim/20 px-2 py-0.5 rounded">STABLE</span>
            </div>
            <div className="space-y-1">
              <span className="font-label text-4xl font-bold text-on-surface">24<span className="text-lg font-light opacity-50">°C</span></span>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Ambient Climate</p>
            </div>
            <div className="mt-4 w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-error w-[72%] shadow-[0_0_8px_rgba(213,61,24,0.5)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemma AI Analysis */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 rounded-2xl border border-outline-variant/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-headline font-bold text-2xl text-primary">Gemma AI Growth Analysis</h3>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Predictive bio-modeling v4.2</p>
            </div>
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 mb-4 relative">
            {/* S-Curve Graph Simulation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-[1px] bg-outline-variant"></div>
              <div className="absolute w-[1px] h-full bg-outline-variant left-1/4"></div>
              <div className="absolute w-[1px] h-full bg-outline-variant left-2/4"></div>
              <div className="absolute w-[1px] h-full bg-outline-variant left-3/4"></div>
            </div>
            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path className="drop-shadow-[0_0_10px_rgba(184,253,75,0.8)]" d="M0,90 Q20,90 40,50 T80,10 T100,0" fill="none" stroke="#b8fd4b" strokeWidth="2"></path>
              <circle cx="80" cy="10" fill="#b8fd4b" r="1.5"></circle>
            </svg>
            {/* Axis Labels */}
            <div className="absolute -bottom-6 w-full flex justify-between font-label text-[8px] text-on-surface-variant tracking-widest">
              <span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 border-t border-outline-variant/20 pt-6">
            <div>
              <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Est. Height</p>
              <p className="font-label text-lg font-bold text-on-surface">142.4 cm</p>
            </div>
            <div>
              <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Leaf Density</p>
              <p className="font-label text-lg font-bold text-on-surface">High (+12%)</p>
            </div>
            <div>
              <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Growth Rate</p>
              <p className="font-label text-lg font-bold text-primary">0.8cm/day</p>
            </div>
            <div>
              <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Confidence</p>
              <p className="font-label text-lg font-bold text-on-surface">98.2%</p>
            </div>
          </div>
        </div>
        <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/10">
          <h3 className="font-headline font-bold text-xl mb-6">Leaf Production</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-label text-xs font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">01</div>
              <div>
                <p className="text-sm font-medium">New Node Emergence</p>
                <p className="font-label text-[10px] text-on-surface-variant uppercase">Nov 12 // Terminal Branch</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-label text-xs font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">02</div>
              <div>
                <p className="text-sm font-medium">Fenestration Maturity</p>
                <p className="font-label text-[10px] text-on-surface-variant uppercase">Oct 28 // Primary Leaf</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-label text-xs font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">03</div>
              <div>
                <p className="text-sm font-medium">Unfurling Cycle</p>
                <p className="font-label text-[10px] text-on-surface-variant uppercase">Oct 14 // Secondary Node</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-label text-xs font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">04</div>
              <div>
                <p className="text-sm font-medium">Dormancy Period</p>
                <p className="font-label text-[10px] text-on-surface-variant uppercase">Sept 20 // Climate Shift</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-3 border border-outline-variant/30 rounded-lg font-label text-[10px] uppercase tracking-widest hover:bg-surface-container-high transition-colors">
            View Full History
          </button>
        </div>
      </section>

      {/* Care Tips (Technical Journal) */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="w-1 h-6 bg-secondary rounded-full"></span>
            CARE LOGS & PROTOCOLS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-6 rounded-lg border-l-2 border-primary/40">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-label text-[9px] text-primary uppercase tracking-[0.2em]">Log #884</span>
              <span className="w-1 h-1 bg-outline rounded-full"></span>
              <span className="font-label text-[9px] text-on-surface-variant uppercase">Critical</span>
            </div>
            <h4 className="font-headline font-bold text-lg mb-2">Aerial Root Hydration</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">Aerial roots are becoming brittle. Mist with nutrient-rich solution 3x weekly to maintain turgor pressure. Do not prune unless necrosed.</p>
            <div className="flex gap-2">
              <span className="font-label text-[8px] bg-surface-container-highest px-2 py-0.5 rounded text-secondary">HUMIDITY</span>
              <span className="font-label text-[8px] bg-surface-container-highest px-2 py-0.5 rounded text-secondary">ROOTCARE</span>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg border-l-2 border-outline-variant/40">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-label text-[9px] text-primary uppercase tracking-[0.2em]">Log #891</span>
              <span className="w-1 h-1 bg-outline rounded-full"></span>
              <span className="font-label text-[9px] text-on-surface-variant uppercase">Routine</span>
            </div>
            <h4 className="font-headline font-bold text-lg mb-2">Dust Management</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">Large leaf surfaces are accumulating static dust. Clean with distilled water and microfiber to maximize photosynthesis efficiency by 15%.</p>
            <div className="flex gap-2">
              <span className="font-label text-[8px] bg-surface-container-highest px-2 py-0.5 rounded text-secondary">MAINTENANCE</span>
              <span className="font-label text-[8px] bg-surface-container-highest px-2 py-0.5 rounded text-secondary">ENERGY</span>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg border-l-2 border-outline-variant/40">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-label text-[9px] text-primary uppercase tracking-[0.2em]">Log #902</span>
              <span className="w-1 h-1 bg-outline rounded-full"></span>
              <span className="font-label text-[9px] text-on-surface-variant uppercase">Protocol</span>
            </div>
            <h4 className="font-headline font-bold text-lg mb-2">Substrate Re-aeration</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">Gently probe upper 2 inches of soil with a wooden dowel to prevent compaction and allow oxygen flow to the primary root mass.</p>
            <div className="flex gap-2">
              <span className="font-label text-[8px] bg-surface-container-highest px-2 py-0.5 rounded text-secondary">SOIL</span>
              <span className="font-label text-[8px] bg-surface-container-highest px-2 py-0.5 rounded text-secondary">OXYGEN</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
