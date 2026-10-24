import React from 'react';
import { X, Info, CheckCircle2, ShieldCheck, Microscope, Cpu } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-3xl w-full bg-[#081c18] border border-[#5fdee7]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-[#0b2721] border border-[#5fdee7] text-[#5fdee7]">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">About technovahubs</h2>
            <p className="text-xs font-mono text-[#5fdee7]">INDEPENDENT JOURNAL OF ENGINEERING &amp; CONSUMER HARDWARE</p>
          </div>
        </div>

        <div className="space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <p>
            Founded in 2026, <strong className="text-white">technovahubs</strong> is an independent digital journal committed to rigorous, peer-reviewed analysis of consumer electronics, artificial intelligence, cybersecurity, and smart computing hardware.
          </p>

          <p>
            In an era where technology reporting is often compromised by regurgitated marketing press releases, affiliate clickbait, and unverified AI hallucinations, technovahubs operates as an uncompromising engineering testing facility. Every article published under our masthead represents between 40 and 120 hours of physical laboratory disassembly, thermal spectroradiometric measurements, and empirical benchmark replication.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-white/10">
              <Microscope className="w-5 h-5 text-[#5fdee7] mb-2" />
              <div className="text-xs font-mono font-bold text-white uppercase">Physics &amp; Telemetry</div>
              <p className="text-[11px] text-slate-400 mt-1">Calibrated thermal chambers, high-rate oscilloscopes, and automated battery drain rigs.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-white/10">
              <ShieldCheck className="w-5 h-5 text-[#ffd700] mb-2" />
              <div className="text-xs font-mono font-bold text-white uppercase">Zero Adware Bias</div>
              <p className="text-[11px] text-slate-400 mt-1">No sponsored reviews, no corporate editorial interference, 100% reader-first integrity.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-white/10">
              <Cpu className="w-5 h-5 text-[#10b981] mb-2" />
              <div className="text-xs font-mono font-bold text-white uppercase">Deep Architecture</div>
              <p className="text-[11px] text-slate-400 mt-1">Focusing on silicon floorplans, electrochemistry, and low-level kernel mechanisms.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <h3 className="text-xs font-mono font-bold text-[#ffd700] uppercase tracking-wider mb-2">
              Official Newsroom Credentials
            </h3>
            <div className="p-3 rounded-lg bg-[#061411] border border-white/10 font-mono text-xs text-slate-300 space-y-1">
              <div>Editorial Office: technovahubs Telemetry Lab, Research Complex A</div>
              <div>Primary Wire: <a href="mailto:sagheerofficial21dnb@gmail.com" className="text-[#5fdee7] hover:underline">sagheerofficial21dnb@gmail.com</a></div>
              <div>Phone / WhatsApp Desk: <a href="tel:03069256639" className="text-[#ffd700] hover:underline">03069256639</a></div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
