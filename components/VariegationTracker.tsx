import React from 'react';

export const VariegationTracker: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Specimen ID Header */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Specimen Analysis Active</span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
              Specimen ID: MD-2024-VAR-X
            </h1>
            <p className="text-secondary-fixed/60 font-medium mt-1">(Monstera Thai Constellation)</p>
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-2 bg-surface-container-high rounded-xl border border-outline-variant/20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-label text-xs">LIVE SENSOR FEED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Variegation Balance Gauge */}
        <div className="col-span-12 lg:col-span-5 glass-card rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <span className="material-symbols-outlined text-9xl">blur_circular</span>
          </div>
          <h3 className="font-label text-xs uppercase tracking-widest text-secondary-fixed/40 mb-8 self-start">Variegation Balance</h3>
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* SVG Gauge */}
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-primary transition-all duration-1000" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="691" strokeDashoffset="400" strokeWidth="12"></circle>
              <circle className="text-on-surface/10" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="2 10" strokeWidth="2"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-5xl font-headline font-bold text-on-surface">42%</span>
              <span className="font-label text-[10px] text-primary mt-1">ALBO RATIO</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 w-full mt-10">
            <div className="text-center">
              <div className="text-2xl font-headline font-bold text-on-surface">58%</div>
              <div className="text-[10px] font-label text-secondary-fixed/40 uppercase tracking-tighter">Chlorophyll</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-headline font-bold text-primary">Stable</div>
              <div className="text-[10px] font-label text-secondary-fixed/40 uppercase tracking-tighter">Growth Mode</div>
            </div>
          </div>
        </div>

        {/* Stability Alert & Specimen Image */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          {/* Glowing Alert */}
          <div className="bg-error-container/10 border border-error/20 rounded-[2rem] p-6 flex items-start gap-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-error/5 to-transparent"></div>
            <div className="w-12 h-12 rounded-2xl bg-error/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-error">warning</span>
            </div>
            <div className="relative z-10">
              <h4 className="font-headline font-bold text-error text-lg">Potential Reversion Detected in Sector 4</h4>
              <p className="text-on-surface/80 text-sm mt-1 leading-relaxed">
                Chlorophyll synthesis is exceeding projected variance markers. <br/>
                <span className="font-semibold text-on-surface">Suggested action:</span> Increase 450nm light intensity by 15% to suppress nodal density.
              </p>
            </div>
          </div>

          {/* Specimen Close-up Card */}
          <div className="glass-card rounded-[2.5rem] h-[340px] relative overflow-hidden group">
            <img alt="Monstera Thai Constellation Specimen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI7F1iG7mWfnJWTrQfb8GyTASZpn98DDReNNWUPlclcfTstvqGAkGOi2GniB_VZ6xbgwrLPWXD1HYju4z8vcn0ZpdlMYjcIHvQSy-qd5btkVRj_Tzi2sq-X-toTuY95MH7oKPa26_mVRbL5vTXbnqs4-IXnQrszJh_ti27dC4KlyB0oPdSFIQkdeERjt8zHi9xA1iTa2CG0IZpm7k-rtCTTm-V5ztrPkT-i2KUXH7Vyr83aDYzv16kpCVvkaAbv23lkHSS4hUKNU0b"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#b8fd4b]"></span>
                <span className="font-label text-[10px] text-on-surface tracking-widest">MACRO SCAN // CAM-04</span>
              </div>
              <p className="font-headline text-xl font-bold">Node 07 Analysis</p>
            </div>
            <div className="absolute top-6 right-8 flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-sm">fullscreen</span>
              </button>
            </div>
          </div>
        </div>

        {/* Genetic History Timeline */}
        <div className="col-span-12 glass-card rounded-[2.5rem] p-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="font-headline text-2xl font-bold">Genetic Lineage</h3>
              <p className="text-secondary-fixed/40 text-sm">Full propagation and mutation history records</p>
            </div>
            <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold text-sm shadow-[0_0_20px_rgba(184,253,75,0.3)] hover:opacity-90 transition-all">
              Export Genomic Data
            </button>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-outline-variant/30"></div>
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/50 flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-primary text-sm">genetics</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <span className="font-label text-xs text-secondary-fixed/40">MAR 12, 2024</span>
                    <h5 className="font-bold text-on-surface mt-1">Current Specimen</h5>
                  </div>
                  <div className="col-span-3 glass-card rounded-2xl p-5 border-l-4 border-primary">
                    <p className="text-sm text-on-surface/70 leading-relaxed italic">
                      "Nodal propagation successful. Primary meristem showing 42% variegation stability. Transferred to Alpha-Tank for intensive monitoring."
                    </p>
                    <div className="flex gap-4 mt-4">
                      <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-label text-primary">TAG: GEN-04</span>
                      <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-label text-secondary-fixed">STABILITY: HIGH</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/50 flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-secondary-fixed text-sm">content_cut</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <span className="font-label text-xs text-secondary-fixed/40">JAN 28, 2024</span>
                    <h5 className="font-bold text-on-surface mt-1">Nodal Sectioning</h5>
                  </div>
                  <div className="col-span-3 p-2">
                    <p className="text-sm text-on-surface/50">Mother plant (MD-2022-MTHR) sectioned into 4 viable nodes. Sector 4 chosen for high-contrast chimera potential.</p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/50 flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-secondary-fixed text-sm">history_edu</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <span className="font-label text-xs text-secondary-fixed/40">AUG 15, 2022</span>
                    <h5 className="font-bold text-on-surface mt-1">Acquisition</h5>
                  </div>
                  <div className="col-span-3 p-2">
                    <p className="text-sm text-on-surface/50">Origin: Thailand Rare Conservatory. Genetic batch TC-990-ALPHA. Baseline variegation noted at 35%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
