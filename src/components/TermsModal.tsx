import React from 'react';
import { X, FileText, Scale, Shield, Mail, Phone } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-3xl w-full bg-[#081c18] border border-[#ffd700]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors cursor-pointer"
          aria-label="Close Terms Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#0b2721] border border-[#ffd700] text-[#ffd700] shadow-[0_0_12px_rgba(255,215,0,0.3)]">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Terms &amp; Conditions of Service</h2>
            <p className="text-xs font-mono text-[#ffd700]">PUBLISHER &amp; USER AGREEMENT · EFFECTIVE OCTOBER 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing, browsing, reading, or citing research published by <strong className="text-white">technovahubs</strong> (Daily Tech Radar Edition), you irrevocably agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion of these terms, please discontinue access immediately.
            </p>
          </section>

          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              2. Intellectual Property, Benchmarks &amp; Fair Use
            </h3>
            <p>
              All original technical evaluations, hardware telemetry logs, benchmark charts, infographics, and editorial prose published on technovahubs are the exclusive intellectual property of technovahubs (Copyright © 2026).
            </p>
            <p className="text-slate-400">
              Journalists, researchers, and academic institutions may quote up to 250 words or reproduce individual telemetry data points provided explicit canonical citation is given: <code className="text-[#ffd700] font-mono">"Source: technovahubs Engineering Journal"</code>. Systematic web scraping, mirrored republication, or unauthorized commercial exploitation is strictly prohibited without formal licensing.
            </p>
          </section>

          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              3. Third-Party Advertising &amp; Commercial Content
            </h3>
            <p>
              technovahubs integrates programmatic advertising provided by certified partners including RevBid, Google AdSense, and authorized supply-side platforms (SSPs). We do not control the creative content of dynamic programmatic advertisements served through third-party exchanges. Clicking on advertisements or external merchant links will redirect you to third-party domains governed by their own independent terms and privacy notices.
            </p>
          </section>

          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              4. Limitation of Engineering Liability
            </h3>
            <p>
              All hardware teardowns, BIOS firmware configurations, memory timings, thermals, and software tweaks are provided for educational and journalistic evaluation. Modifying consumer electronics outside manufacturer parameters carries inherent risks (e.g. warranty invalidation, thermal damage, data corruption). technovahubs and its editorial staff disclaim all liability for physical damage or financial loss incurred from the execution of technical guides.
            </p>
          </section>

          <section className="space-y-2 pt-1">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              5. Governing Law &amp; Legal Communications
            </h3>
            <p>
              For formal legal communications, copyright DMCA notices, or syndication inquiries, please contact our legal desk:
            </p>
            <div className="p-3.5 rounded-xl bg-[#061411] border border-white/10 font-mono text-xs space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ffd700]" />
                <span>Legal Bureau Email:</span>
                <a href="mailto:ahmadali07121@gmail.com" className="text-[#ffd700] hover:underline font-bold">
                  ahmadali07121@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffd700]" />
                <span>Phone / WhatsApp:</span>
                <a href="tel:03069256639" className="text-[#ffd700] hover:underline font-bold">
                  03069256639 (+92 306 9256639)
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors shadow-[0_0_12px_rgba(255,215,0,0.3)] cursor-pointer"
          >
            Accept Terms
          </button>
        </div>
      </div>
    </div>
  );
};
