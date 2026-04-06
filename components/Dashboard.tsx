import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section: Ecosystem Health */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="font-label text-primary text-xs font-bold uppercase tracking-widest">System Status // Active Monitoring</div>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface">Digital Conservatory Dashboard</h1>
          <p className="text-secondary text-lg max-w-lg opacity-80 leading-relaxed">Advanced botanical oversight for rare species. Ecosystem bio-readouts synchronized with laboratory environmental controls.</p>
        </div>
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-primary drop-shadow-[0_0_12px_rgba(184,253,75,0.6)]" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="691" strokeDashoffset="83" strokeWidth="8"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-headline font-extrabold text-on-surface">88%</span>
              <span className="font-label text-[10px] text-secondary opacity-60 uppercase tracking-widest">Ecosystem Health</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Alerts & AI Insight */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Action Required Section */}
        <div className="md:col-span-2 glass-card rounded-xl p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-headline font-bold text-on-surface">Action Required</h2>
            <span className="material-symbols-outlined text-error animate-pulse">priority_high</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border-l-4 border-error/50">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-error">water_drop</span>
                <div>
                  <p className="font-semibold text-on-surface">Hydration Alert</p>
                  <p className="text-xs text-secondary opacity-60">Fiddle Leaf Fig // Sector 4B</p>
                </div>
              </div>
              <button className="text-xs font-label uppercase tracking-widest text-error border border-error/20 px-3 py-1 rounded-full hover:bg-error hover:text-on-error transition-colors">Irrigate</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border-l-4 border-error-container/30">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-error-container">wb_sunny</span>
                <div>
                  <p className="font-semibold text-on-surface">Placement Warning</p>
                  <p className="text-xs text-secondary opacity-60">Monstera // Shadow Threshold</p>
                </div>
              </div>
              <button className="text-xs font-label uppercase tracking-widest text-secondary opacity-50 border border-outline-variant px-3 py-1 rounded-full">Dismiss</button>
            </div>
          </div>
        </div>

        {/* Gemma AI Insight Box */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          </div>
          <div className="z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Gemma AI Insight</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed mb-4">Predictive growth models indicate a <span className="text-primary font-bold">14% leaf expansion</span> for the Deliciosa cluster in the next 72 hours if lumbar humidity remains at 65%.</p>
          </div>
          <div className="pt-4 border-t border-primary/10 flex justify-between items-end z-10">
            <div>
              <div className="text-[10px] font-label uppercase tracking-widest text-secondary opacity-60">Prob. Growth</div>
              <div className="text-2xl font-headline font-bold text-primary">+12.4mm</div>
            </div>
            <span className="material-symbols-outlined text-primary">trending_up</span>
          </div>
        </div>
      </section>

      {/* My Plants Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-headline font-bold text-on-surface">My Plants</h2>
            <p className="text-xs font-label uppercase tracking-widest text-secondary opacity-60">Managed Collections</p>
          </div>
          <button className="text-secondary opacity-60 hover:opacity-100 flex items-center gap-1 transition-opacity">
            <span className="text-xs font-label uppercase tracking-widest">View All Archive</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Fiddle Leaf Fig */}
          <div className="group bg-surface-container rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-4px] cursor-pointer">
            <div className="h-48 overflow-hidden relative">
              <img alt="Fiddle Leaf Fig" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU8lBmwaLs4BMO7H15lRarD-2rZB4Swx4k4SOpuyKwsi7iv2FcApLc_VUv5aixcl-EVlw1rXZkM3vilmEGpv8xPVFbGsPNsCOk1vZj1_aNLqEo5CZ-i2a9y_fhrtM7eklJmTN39xsySA5YCzF2dN7VKYxaSjQ0x8Ep567MhC5wciDyi5NthB8jaCzMdcAucp5RUsp7639_vT0vPfvuWnqihO9h5VYw2TR3wvODToEG8g7Ob4n3RYxfJrlxSjIOipQsns_VpOysfpTo"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary/20 text-primary text-[10px] font-label uppercase tracking-widest px-2 py-0.5 rounded-full backdrop-blur-md border border-primary/20">Species: F. Lyrata</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-headline font-bold text-on-surface">Fiddle Leaf Fig</h3>
                <div className="text-right">
                  <div className="text-[10px] font-label uppercase tracking-widest text-secondary opacity-60">Health Index</div>
                  <div className="text-primary font-bold">84/100</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-label uppercase tracking-widest text-secondary opacity-80">
                    <span>Moisture Level</span>
                    <span>22% Critical</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="bg-error h-full" style={{ width: '22%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-label uppercase tracking-widest text-secondary opacity-80">
                    <span>Solar Intake</span>
                    <span>65% Optimal</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Monstera Deliciosa */}
          <div className="group bg-surface-container rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-4px] cursor-pointer">
            <div className="h-48 overflow-hidden relative">
              <img alt="Monstera Deliciosa" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8hyFL0esf6pcJ6qrZJI9SWdCHz-MVnqF97_9-i8PgnZ62LedS_XI4WkvEbW8-GhtnZ4scKFuinJsrpndiPUAQ3SuHzpOQht4rlNnflFFjwtlednjizo5AUo-6Wo91LbnNYsp18LHjWn5BMH4GpcyignmjTC-3pmuv66NpUS3Vw42JGA5VNUGg26aGYr5eMkaUixtvKLwzkm6o30EJTMkPZrFuWN1btmbRyJzPUDiZacIvX85eFHsSBbf9OwvgBd5kSvVOxbGDhP-B"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary/20 text-primary text-[10px] font-label uppercase tracking-widest px-2 py-0.5 rounded-full backdrop-blur-md border border-primary/20">Species: M. Deliciosa</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-headline font-bold text-on-surface">Monstera Deliciosa</h3>
                <div className="text-right">
                  <div className="text-[10px] font-label uppercase tracking-widest text-secondary opacity-60">Health Index</div>
                  <div className="text-primary font-bold">92/100</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-label uppercase tracking-widest text-secondary opacity-80">
                    <span>Moisture Level</span>
                    <span>74% Healthy</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-label uppercase tracking-widest text-secondary opacity-80">
                    <span>Solar Intake</span>
                    <span>40% Shadow Warning</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
