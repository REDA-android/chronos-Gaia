import React from 'react';
import { CapturedImage } from '../types';
import { Clock, Eye, AlertTriangle, Leaf, Sprout, Flower, Sun, HelpCircle, Trash2, Download } from 'lucide-react';

interface TimelineProps {
  images: CapturedImage[];
  onSelect: (img: CapturedImage) => void;
  onDelete?: (imgId: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({ images, onSelect, onDelete }) => {
  const getHealthColor = (img: CapturedImage) => {
    // Priority: Explicit Metadata -> Text Analysis -> Default
    if (img.healthStatus === 'CRITICAL') return 'border-error shadow-[0_0_10px_rgba(255,113,108,0.4)]';
    if (img.healthStatus === 'STRESSED') return 'border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]';
    if (img.healthStatus === 'HEALTHY') return 'border-primary shadow-[0_0_10px_rgba(221,255,175,0.4)]';

    if (!img.analysis) return 'border-outline-variant';
    
    // Fallback legacy analysis
    const t = img.analysis.toLowerCase();
    if (t.includes('dead') || t.includes('disease') || t.includes('pest') || t.includes('rot') || t.includes('critical')) return 'border-error shadow-[0_0_10px_rgba(255,113,108,0.4)]';
    if (t.includes('wilt') || t.includes('yellow') || t.includes('dry') || t.includes('spot')) return 'border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]';
    return 'border-primary shadow-[0_0_10px_rgba(221,255,175,0.4)]';
  };

  const getStageIcon = (stage?: string) => {
    if (!stage) return null;
    const s = stage.toLowerCase();
    if (s.includes('germinat') || s.includes('seed') || s.includes('sprout')) return <Sprout size={12} className="text-primary" />;
    if (s.includes('flower') || s.includes('bloom') || s.includes('bud')) return <Flower size={12} className="text-pink-400" />;
    if (s.includes('fruit') || s.includes('harvest') || s.includes('mature')) return <Sun size={12} className="text-orange-400" />;
    if (s.includes('veg') || s.includes('leaf')) return <Leaf size={12} className="text-primary-dim" />;
    return <HelpCircle size={12} className="text-on-surface-variant" />;
  };

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-48 text-on-surface-variant border border-dashed border-outline-variant rounded-[24px]">
        <Clock className="mb-2 opacity-50" />
        <p className="font-body text-sm">No snapshots yet.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
      <div className="flex space-x-4 min-w-max px-1">
        {[...images].reverse().map((img) => (
          <div 
            key={img.id} 
            className="group relative w-36 h-24 sm:w-48 sm:h-32 rounded-[16px] overflow-hidden border-2 transition-all hover:scale-105"
          >
            <div 
              onClick={() => onSelect(img)}
              className={`w-full h-full cursor-pointer ${getHealthColor(img)}`}
            >
              <img src={img.dataUrl} alt="Snapshot" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/0 transition-colors"></div>
            </div>
            
            {/* Action Buttons */}
            <div className="absolute top-2 left-2 flex flex-col gap-1 opacity-90 transition-opacity z-20">
              {onDelete && (
                <button 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDelete(img.id); }}
                  className="bg-error/90 text-on-error p-1.5 rounded-full hover:bg-error shadow-lg backdrop-blur-sm"
                  title="Delete Frame"
                >
                  <Trash2 size={12} />
                </button>
              )}
              <a 
                href={img.dataUrl} 
                download={`gemma-snapshot-${img.id}.jpg`}
                onClick={(e) => e.stopPropagation()}
                className="bg-primary/90 text-background p-1.5 rounded-full hover:bg-primary shadow-lg backdrop-blur-sm"
                title="Download Frame"
              >
                <Download size={12} />
              </a>
            </div>

            {/* Analysis Available Indicator */}
            {img.analysis && (
               <div className="absolute top-2 right-2 bg-primary text-background rounded-full p-1 shadow-[0_0_10px_#ddffaf] animate-pulse z-10">
                 <Eye size={10} />
               </div>
            )}

            {/* Location Indicator */}
            {img.location && (
               <div className="absolute top-2 right-8 bg-surface-container-high/80 text-primary rounded-full p-1 shadow-md backdrop-blur-sm z-10" title={`Lat: ${img.location.lat.toFixed(4)}, Lng: ${img.location.lng.toFixed(4)}`}>
                 <MapPin size={10} />
               </div>
            )}

            {/* Growth Stage Icon */}
            {img.growthStage && (
              <div 
                className="absolute top-8 left-2 bg-surface-container-lowest/80 p-1 rounded-full border border-outline-variant shadow-md backdrop-blur-sm"
                title={`Stage: ${img.growthStage}`}
              >
                {getStageIcon(img.growthStage)}
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-cyber-900/80 p-2 flex justify-between items-center backdrop-blur-sm border-t border-cyber-700/50">
              <span className="text-[10px] font-mono text-gray-300">
                {new Date(img.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span className="text-[9px] text-cyber-accent/50 font-mono">ID-{img.id.slice(-4)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;