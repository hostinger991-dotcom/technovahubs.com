import React from 'react';
import { X, FileText, Scale } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Terms &amp; Conditions of Publication</h2>
            <p className="text-xs font-mono text-[#5fdee7]">EFFECTIVE: OCTOBER 24, 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing, browsing, or citing research published by <strong className="text-white">technovahubs</strong>, you agree to be bound by these Terms of Service. If you disagree with any portion of these terms, your sole remedy is to cease using this journal.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              2. Intellectual Property &amp; Citation Guidelines
            </h3>
            <p>
              All original technical articles, hardware telemetry logs, benchmark datasets, and visual infographics are the intellectual property of technovahubs (Copyright © 2026).
            </p>
            <p>
              Academic institutions, researchers, and journalists are permitted to quote up to 250 words or cite data tables provided explicit canonical attribution is given: <code className="text-[#5fdee7] font-mono">"Source: technovahubs Engineering Journal (2026)"</code>. Mass automated scraping or unauthorized commercial re-hosting of full articles without written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              3. Limitation of Engineering Liability
            </h3>
            <p>
              While our laboratory performs rigorous testing on commercial hardware and software, articles are published for educational, journalistic, and informational purposes. Modifying hardware (e.g. delidding processors, flashing third-party travel router firmware, or modifying Windows registry keys) carries inherent risks of hardware damage or voided manufacturer warranties. technovahubs assumes no legal liability for personal hardware damages resulting from reader actions.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              4. Legal Jurisdiction &amp; Inquiries
            </h3>
            <p>
              For legal communications or licensing inquiries, contact our legal desk:
            </p>
            <div className="p-3 rounded-lg bg-[#0b2721] border border-white/10 font-mono text-xs text-[#5fdee7]">
              <div>Email: ahmadali07121@gmail.com</div>
              <div>Telephone / WhatsApp: 03069256639 (+92 306 9256639)</div>
            </div>
          </section>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors"
          >
            Accept Terms
          </button>
        </div>
      </div>
    </div>
  );
};
