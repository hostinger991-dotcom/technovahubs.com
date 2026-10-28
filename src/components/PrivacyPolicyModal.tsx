import React from 'react';
import { X, Lock, CheckCircle2, Shield } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Privacy Policy &amp; GDPR Compliance</h2>
            <p className="text-xs font-mono text-[#5fdee7]">LAST REVISED: OCTOBER 24, 2026 · VERSION 4.2</p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              1. Our Data Privacy Pledge
            </h3>
            <p>
              technovahubs respects your fundamental right to digital privacy. As a publication dedicated to cybersecurity and technological freedom, we minimize telemetry collection and do not sell, rent, or trade reader personal data to commercial data brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              2. Information We Collect
            </h3>
            <p>
              We collect only the bare minimum technical data required to securely serve articles, prevent denial-of-service attacks, and comply with international publishing standards:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-slate-400">
              <li>Anonymized HTTP server logs (IP address hashed with daily salt, requested URI, browser user-agent).</li>
              <li>Local browser storage preferences (reading font size, bookmark states, GDPR cookie consent choices).</li>
              <li>Voluntarily submitted contact inquiries (name, email address, message body).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              3. European GDPR &amp; California CCPA Rights
            </h3>
            <p>
              Under the European General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you maintain the legal right to:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-slate-400">
              <li>Request an export of all personal data associated with your profile.</li>
              <li>Demand immediate, permanent erasure of any submitted records ("Right to be Forgotten").</li>
              <li>Opt-out of non-essential analytics and targeted advertising cookies at any time.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              4. Data Protection Officer (DPO) Contact
            </h3>
            <p>
              For privacy-related inquiries, legal erasure requests, or data audits, contact our designated privacy officer:
            </p>
            <div className="p-3 rounded-lg bg-[#0b2721] border border-white/10 font-mono text-xs text-[#5fdee7]">
              <div>Email: ahmadali07121@gmail.com</div>
              <div>Telephone / WhatsApp: 03069256639 (+92 306 9256639)</div>
              <div>Address: technovahubs (Daily Tech Radar) Editorial Newsroom</div>
            </div>
          </section>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors"
          >
            Close Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
};
