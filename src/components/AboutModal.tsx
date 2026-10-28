import React from 'react';
import { X, Info, CheckCircle2, ShieldCheck, Microscope, Cpu, ExternalLink } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200 select-none">
      <div className="max-w-3xl w-full bg-[#081c18] border border-[#5fdee7]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors"
          aria-label="Close About Us Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-[#0b2721] border border-[#5fdee7] text-[#5fdee7]">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">About Us — technovahubs</h2>
            <p className="text-xs font-mono text-[#5fdee7]">DAILY TECH RADAR EDITION · ENGINEERING &amp; HARDWARE JOURNAL</p>
          </div>
        </div>

        <div className="space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <p>
            Welcome to <strong className="text-white">technovahubs</strong> (Daily Tech Radar Edition). Founded as an uncompromising independent technology journal, our mission is to deliver comprehensive, peer-reviewed hardware telemetry, consumer electronics reviews, artificial intelligence benchmarks, cybersecurity audits, and computing hardware teardowns.
          </p>

          <p>
            In an era overwhelmed by marketing soundbites and sponsored placements, our newsroom functions as a rigorous engineering test facility. Every research paper published on this platform represents dozens of hours of hands-on physical teardowns, micro-voltmeter current measurements, thermal imaging, and standardized empirical benchmark verification.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-white/10">
              <Microscope className="w-5 h-5 text-[#5fdee7] mb-2" />
              <div className="text-xs font-mono font-bold text-white uppercase">Physics &amp; Telemetry</div>
              <p className="text-[11px] text-slate-400 mt-1">Standardized bench testing using calibrated spectrum analyzers, power meters, and test rigs.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-white/10">
              <ShieldCheck className="w-5 h-5 text-[#ffd700] mb-2" />
              <div className="text-xs font-mono font-bold text-white uppercase">Editorial Independence</div>
              <p className="text-[11px] text-slate-400 mt-1">Zero pay-to-win placements, zero corporate sponsorship bias, 100% transparent reviews.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b2721] border border-white/10">
              <Cpu className="w-5 h-5 text-[#10b981] mb-2" />
              <div className="text-xs font-mono font-bold text-white uppercase">Deep Silicon Science</div>
              <p className="text-[11px] text-slate-400 mt-1">Low-level analysis from sub-nanometer chip nodes to battery electrochemistry.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <h3 className="text-xs font-mono font-bold text-[#ffd700] uppercase tracking-wider mb-2">
              Official Newsroom Credentials &amp; Contact
            </h3>
            <div className="p-3.5 rounded-lg bg-[#061411] border border-white/10 font-mono text-xs text-slate-300 space-y-1.5">
              <div><strong className="text-white">Publication:</strong> technovahubs (Daily Tech Radar Edition)</div>
              <div>
                <strong className="text-white">Primary Editorial Wire:</strong>{' '}
                <a href="mailto:ahmadali07121@gmail.com" className="text-[#ffd700] font-bold hover:underline">
                  ahmadali07121@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-white">Phone / WhatsApp Desk:</strong>{' '}
                <a href="tel:03069256639" className="text-[#ffd700] font-bold hover:underline">
                  03069256639
                </a>
                <a
                  href="https://wa.me/923069256639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] px-2 py-0.5 rounded bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/15 text-xs text-slate-200 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors"
          >
            Reach Editorial Bureau
          </button>
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
