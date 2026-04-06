import React from 'react';

export const HeatmapDiagnostic: React.FC = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden flex flex-col rounded-[2.5rem] -mt-6">
      {/* Camera Viewport (Live Feed Background) */}
      <div className="absolute inset-0 z-0">
        <img alt="Healthy Monstera Deliciosa plant leaves" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMFIK1YbAhC8VnIZCIZH6OOB6phEQeic_bc8r_gZ2Ij-Zf4zXLgGRlbWqqvIti91DCE7JkUI3WtpOCbuznQvAAkkAdXfdc_czJ-WlX5rMQR0X3jMCe1ngDTCMfvDlooiHVcu4lPV9w-ONDttvg5HGDeg1MJ5zALoX0B7rMoDwyk4FnPy6xfePQ7ldtjJSEz5T8tOJDXlnYRt7YKv2hOdQ4eOggsB77Xi5_UST3O5NZF1OM3knScrR6QLg9xBOTFK0N-1E-egohphAg"/>
        {/* Diagnostic Heatmap Overlay */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 40% 60%, rgba(255, 115, 81, 0.4) 0%, transparent 35%), radial-gradient(circle at 70% 30%, rgba(213, 61, 24, 0.3) 0%, transparent 40%)',
          mixBlendMode: 'screen'
        }}></div>
        {/* Scanner Scanning Line effect (Static placeholder for design) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1 w-full top-1/2 -translate-y-1/2"></div>
      </div>

      {/* UI Content Layer */}
      <div className="relative z-10 flex-1 flex flex-col justify-between p-6">
        {/* Top Interface Elements */}
        <div className="flex justify-between items-start">
          {/* XAI Badge */}
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-3 bg-surface-container-lowest/60 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/20 shadow-lg group">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_8px_rgba(184,253,75,0.8)]"></span>
              </span>
              <span className="font-label text-xs font-bold text-on-surface tracking-wider uppercase">Gemma XAI Scan Active</span>
            </div>
            {/* Metadata Readout */}
            <div className="mt-2 space-y-1">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-md w-fit">
                <span className="text-[10px] font-label text-secondary opacity-60 uppercase">LAT:</span>
                <span className="text-[10px] font-label text-on-surface">51.5074° N</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-md w-fit">
                <span className="text-[10px] font-label text-secondary opacity-60 uppercase">SPEC:</span>
                <span className="text-[10px] font-label text-on-surface italic">M. Deliciosa</span>
              </div>
            </div>
          </div>

          {/* Live Indicators */}
          <div className="flex flex-col items-end gap-2">
            <div className="bg-error/20 border border-error/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-error text-sm">warning</span>
              <span className="font-label text-[10px] font-bold text-error uppercase">Stress Detected</span>
            </div>
            <div className="bg-surface-container-low/40 backdrop-blur-md p-3 rounded-2xl border border-outline-variant/10">
              <div className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Confidence Score</div>
              <div className="text-xl font-headline font-extrabold text-primary">94.2%</div>
            </div>
          </div>
        </div>

        {/* Evidence Panel (Bottom Aligned Glassmorphism) */}
        <div className="w-full max-w-2xl mx-auto space-y-4">
          {/* Floating Detail Markers (Asymmetric) */}
          <div className="relative w-full h-40 hidden sm:block">
            <div className="absolute left-[15%] top-0 flex items-center gap-3">
              <div className="w-px h-16 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="bg-surface-container-high/80 backdrop-blur-md p-3 rounded-xl border border-primary/20 max-w-[180px]">
                <p className="text-[10px] font-label text-primary uppercase font-bold mb-1">Lower Petiole Analysis</p>
                <p className="text-xs text-on-surface-variant leading-tight italic">Structural softening observed. Density down 14%.</p>
              </div>
            </div>
          </div>

          {/* Main Diagnosis Card */}
          <div className="bg-surface-container-low/60 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-outline-variant/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">neurology</span>
                  </div>
                  <h2 className="font-headline text-xl font-bold text-on-surface">Human-Readable Insight</h2>
                </div>
                <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                  <span className="text-on-surface font-semibold">Turgor pressure loss</span> detected in lower petioles consistent with <span className="text-primary underline decoration-primary/30 underline-offset-4">under-watering</span>. Vascular flow shows localized obstruction near leaf base nodes.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-w-[200px]">
                <button className="group relative bg-primary text-on-primary font-headline font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(184,253,75,0.4)] transition-all active:scale-95 overflow-hidden">
                  <span className="relative z-10">Full Report</span>
                  <span className="material-symbols-outlined relative z-10 transition-transform group-hover:translate-x-1">arrow_forward</span>
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="bg-surface-container-highest/60 hover:bg-surface-container-highest border border-outline-variant/30 text-on-surface font-label font-bold text-xs uppercase tracking-widest py-3 px-8 rounded-full transition-colors">
                  Dismiss Scan
                </button>
              </div>
            </div>

            {/* Subtle Footer Data */}
            <div className="mt-8 pt-6 border-t border-outline-variant/10 flex justify-between items-center text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
              <div className="flex gap-4">
                <span>Rel Humidity: 54%</span>
                <span>Temp: 22.4°C</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">schedule</span>
                <span>Last Full Scan: 14m ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
