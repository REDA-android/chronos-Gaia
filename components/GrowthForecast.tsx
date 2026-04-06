import React from 'react';

export const GrowthForecast: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Top Section: Elegant Headline */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold">Predictive Intelligence</span>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface">Growth Forecast</h2>
        </div>
        <div className="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2 border border-outline-variant/20">
          <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <span className="font-label text-[10px] uppercase tracking-widest">Monstera Deliciosa // MK-IV</span>
        </div>
      </section>

      {/* Main Feature: Immersive S-Curve Chart */}
      <section className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden bg-surface-container-low group">
        {/* Background Texture/Image */}
        <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40">
          <img alt="Monstera Detail" className="w-full h-full object-cover scale-110 transition-transform duration-1000 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTI__ty9uFP1NLvjYAFJvIwwORxvYRJTmW7JnGK3JonUgahWomtuZTHUZI-uFa8HCjxA2Jd4YaBCQTLP_apOmyytnQkb8FZ8cUTX8h6WhOgdfZjVfd0-MzY7QBAks8uqRmb5zHTNuiVVYsnxTARm3p4JBgvtY2d5Qc07KCzvhTkKKRxoKt2OaUM2bw7A571akPkQEcO_7T8_cN8GRmQY4x0-qCT-ssGI8obdHxsLfsjF2Q03gpm8fRWQTsSaAzn_Z8hRvpsQ-bvWYF"/>
        </div>
        {/* Chart Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 z-10">
          <div className="w-full h-full relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-10">
              <div className="border-t border-on-surface w-full"></div>
              <div className="border-t border-on-surface w-full"></div>
              <div className="border-t border-on-surface w-full"></div>
              <div className="border-t border-on-surface w-full"></div>
            </div>
            {/* The Neon Path */}
            <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(184,253,75,0.4)]" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <path className="s-curve-path" d="M0,350 C150,350 250,300 400,200 C550,100 850,50 1000,50" fill="none" stroke="#b8fd4b" strokeLinecap="round" strokeWidth="4"></path>
              {/* Data Points */}
              <circle cx="0" cy="350" fill="#b8fd4b" r="6"></circle>
              <circle className="animate-pulse" cx="400" cy="200" fill="#b8fd4b" r="8"></circle>
              <circle cx="1000" cy="50" fill="#b8fd4b" r="6"></circle>
            </svg>
            {/* Dynamic Annotations */}
            <div className="absolute top-[10%] right-[5%] flex flex-col items-end">
              <span className="font-label text-primary text-4xl font-bold">+127%</span>
              <span className="font-label text-[10px] uppercase text-secondary/60">Target Velocity</span>
            </div>
          </div>
        </div>
        {/* X-Axis Labels */}
        <div className="absolute bottom-6 left-12 right-12 flex justify-between font-label text-[10px] text-secondary/40 tracking-[0.3em] uppercase">
          <span>Current Status</span>
          <span>Day 30</span>
          <span>Day 60</span>
          <span>Maturity</span>
        </div>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Insights Card */}
        <section className="lg:col-span-2 glass-card rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-center">
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="font-headline text-2xl font-bold">Gemma Predicts</h3>
                <span className="bg-primary text-on-primary text-[8px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Live Insight</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-lg italic">
                "New node emergence in 48-72 hours. Increase phosphorus slightly now for optimal leaf size."
              </p>
            </div>
          </div>
          {/* Decorative light sweep */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px]"></div>
        </section>

        {/* Stats Grid (Vertical) */}
        <section className="space-y-4">
          {/* Metric 1 */}
          <div className="bg-surface-container rounded-[2rem] p-6 flex justify-between items-center border border-outline-variant/10">
            <div>
              <p className="font-label text-[10px] uppercase text-secondary/40 mb-1">Predicted Height</p>
              <h4 className="font-headline text-3xl font-bold">142<span className="text-lg text-secondary/60 ml-1">cm</span></h4>
            </div>
            <span className="material-symbols-outlined text-primary/40">straighten</span>
          </div>
          {/* Metric 2 */}
          <div className="bg-surface-container rounded-[2rem] p-6 flex justify-between items-center border border-outline-variant/10">
            <div>
              <p className="font-label text-[10px] uppercase text-secondary/40 mb-1">Leaf Count</p>
              <h4 className="font-headline text-3xl font-bold">18<span className="text-lg text-secondary/60 ml-1">new</span></h4>
            </div>
            <span className="material-symbols-outlined text-primary/40">eco</span>
          </div>
          {/* Metric 3 */}
          <div className="bg-surface-container-high rounded-[2rem] p-6 flex justify-between items-center border border-primary/20 shadow-[0_0_30px_rgba(184,253,75,0.05)]">
            <div>
              <p className="font-label text-[10px] uppercase text-primary/60 mb-1">Bio-Confidence</p>
              <h4 className="font-headline text-3xl font-bold text-primary">98.4<span className="text-lg opacity-60 ml-1">%</span></h4>
            </div>
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
        </section>
      </div>

      {/* Time Machine Interaction */}
      <section className="mt-12 space-y-6 pb-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary/60">history_toggle_off</span>
            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-secondary">Time Machine</h3>
          </div>
          <span className="font-label text-primary font-bold">+45 Days</span>
        </div>
        <div className="relative group">
          <input className="w-full h-1.5 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary focus:outline-none" max="100" min="0" type="range" defaultValue="45"/>
          {/* Tick marks */}
          <div className="absolute -bottom-8 left-0 w-full flex justify-between px-1 pointer-events-none">
            <div className="w-0.5 h-2 bg-on-surface/10"></div>
            <div className="w-0.5 h-2 bg-on-surface/10"></div>
            <div className="w-0.5 h-2 bg-primary/40"></div>
            <div className="w-0.5 h-2 bg-on-surface/10"></div>
            <div className="w-0.5 h-2 bg-on-surface/10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
