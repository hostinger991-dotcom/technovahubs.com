import React, { useState } from 'react';
import { InfographicConfig } from '../types/article';
import { 
  Cpu, 
  Layers, 
  Eye, 
  BatteryCharging, 
  Zap, 
  Satellite, 
  ShieldCheck, 
  Radio, 
  Volume2, 
  Activity, 
  Maximize2, 
  CheckCircle2, 
  Terminal,
  Sparkles,
  Sliders,
  Image as ImageIcon,
  Grid
} from 'lucide-react';

interface InfographicVisualizerProps {
  infographic: InfographicConfig;
  approvedPromptText: string;
  imageUrl?: string;
  className?: string;
  compact?: boolean;
}

export const InfographicVisualizer: React.FC<InfographicVisualizerProps> = ({
  infographic,
  approvedPromptText,
  imageUrl,
  className = '',
  compact = false,
}) => {
  const [activeTab, setActiveTab] = useState<'image' | 'spec_matrix' | 'prompt'>('image');
  const [fullscreen, setFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getPanelIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-4 h-4 text-[#5fdee7]" />;
      case 1:
        return <Layers className="w-4 h-4 text-[#ffd700]" />;
      case 2:
        return <Zap className="w-4 h-4 text-[#a855f7]" />;
      case 3:
        return <BatteryCharging className="w-4 h-4 text-[#10b981]" />;
      case 4:
        return <Radio className="w-4 h-4 text-[#f97316]" />;
      case 5:
      default:
        return <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />;
    }
  };

  const renderThemePattern = () => {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pat" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#5fdee7" strokeWidth="0.5" strokeOpacity="0.4" />
            <circle cx="0" cy="0" r="1.5" fill="#ffd700" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pat)" />
      </svg>
    );
  };

  const content = (
    <div className={`relative rounded-xl border border-[#5fdee7]/30 bg-gradient-to-b ${infographic.colorScheme.bgGradient} overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] ${className}`}>
      {renderThemePattern()}

      {/* Top Banner Control Bar */}
      <div className="relative z-10 px-4 py-2.5 bg-[#081c18]/90 backdrop-blur-md border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700]" />
          <span className="text-[11px] font-mono tracking-widest text-[#5fdee7] uppercase font-bold">
            INFOGRAPHIC TELEMETRY
          </span>
        </div>

        {/* View Mode Tabs */}
        <div className="flex items-center gap-1.5 text-xs">
          {imageUrl && (
            <button
              onClick={() => setActiveTab('image')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                activeTab === 'image'
                  ? 'bg-[#ffd700] text-slate-950 font-bold shadow-[0_0_10px_rgba(255,215,0,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Real AI Infographic</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('spec_matrix')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'spec_matrix'
                ? 'bg-[#5fdee7] text-slate-950 font-bold shadow-[0_0_10px_rgba(95,222,231,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Grid className="w-3 h-3" />
            <span>6-Panel Data</span>
          </button>

          <button
            onClick={() => setActiveTab('prompt')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'prompt'
                ? 'bg-purple-500 text-white font-bold shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>AI Prompt</span>
          </button>

          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="p-1 rounded text-slate-400 hover:text-[#ffd700] hover:bg-white/5 transition-colors ml-1"
            title="Toggle Expanded View"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mode 1: Real AI Generated Realistic Infographic Image */}
      {activeTab === 'image' && imageUrl && (
        <div className="relative group overflow-hidden bg-black/60 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={infographic.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[580px] transition-transform duration-500 group-hover:scale-[1.01]"
          />
          {/* Subtle bottom gradient overlay with label */}
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-[11px] font-mono text-slate-300">
            <span className="text-[#5fdee7] font-semibold">{infographic.subtitle}</span>
            <span className="text-[#ffd700] font-bold">16:9 8K PHOTOREALISTIC RENDER</span>
          </div>
        </div>
      )}

      {/* Mode 2: Interactive 6-Panel Vector Matrix */}
      {activeTab === 'spec_matrix' && (
        <div className={`p-4 sm:p-6 relative z-10 ${compact ? 'py-4' : 'py-6'}`}>
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-slate-300 uppercase mb-2">
              TECHNICAL HARDWARE DECONSTRUCTION · 6-VECTOR MATRIX
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {infographic.title}
            </h2>
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#5fdee7] uppercase mt-1">
              {infographic.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {infographic.panels.map((panel, idx) => (
              <div
                key={idx}
                className="relative rounded-lg p-3.5 bg-black/45 backdrop-blur-md border border-white/15 hover:border-[#ffd700] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.35)] group"
              >
                <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded bg-white/5 border border-white/10 group-hover:border-[#ffd700]/50 transition-colors">
                      {getPanelIcon(idx)}
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-slate-200 group-hover:text-white uppercase">
                      {panel.title}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">
                    P-0{idx + 1}
                  </span>
                </div>

                <div className="text-sm font-extrabold text-[#ffd700] group-hover:text-[#ffcc00] tracking-tight font-mono mb-1">
                  {panel.metric}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-2 font-normal">
                  {panel.description}
                </p>

                <div className="flex items-center gap-1.5 text-[10px] text-[#5fdee7] font-mono font-medium pt-1.5 border-t border-white/5">
                  <CheckCircle2 className="w-3 h-3 text-[#5fdee7] shrink-0" />
                  <span className="truncate">{panel.techHighlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mode 3: AI Prompt Blueprint */}
      {activeTab === 'prompt' && (
        <div className="p-5 relative z-10 bg-black/60 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2 mb-3 text-[#ffd700] font-bold">
            <Terminal className="w-4 h-4" />
            <span>APPROVED GENERATION PROMPT SPECIFICATION</span>
          </div>
          <div className="p-4 rounded-lg bg-[#061210] border border-[#5fdee7]/30 text-slate-200 leading-relaxed select-all">
            {approvedPromptText}
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-400">
            <div className="p-2.5 rounded bg-white/5 border border-white/10">
              <div className="text-white font-bold mb-1">Palette Specifications:</div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: infographic.colorScheme.primary }} />
                <span>Primary: {infographic.colorScheme.primary}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: infographic.colorScheme.secondary }} />
                <span>Secondary: {infographic.colorScheme.secondary}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: infographic.colorScheme.accent }} />
                <span>Accent: {infographic.colorScheme.accent}</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-white/5 border border-white/10">
              <div className="text-white font-bold mb-1">Rendering Profile:</div>
              <div>· Model: Gemini Vision Image Generation</div>
              <div>· Composition: 6 Floating Glassmorphism Panels</div>
              <div>· Theme: {infographic.themeBackground.toUpperCase()}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-5xl">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-mono text-[#ffd700] uppercase font-bold tracking-wider">
              {infographic.title} — HIGH RESOLUTION VIEW
            </span>
            <button
              onClick={() => setFullscreen(false)}
              className="px-4 py-1.5 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors"
            >
              Close Fullscreen View
            </button>
          </div>
          {content}
        </div>
      </div>
    );
  }

  return content;
};
