import React from 'react';
import { Mail, Phone, Shield, FileText, CheckCircle, ExternalLink, Cpu, Heart } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenStandards: () => void;
  onOpenContact: () => void;
  onOpenEditors: () => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenPrivacy,
  onOpenTerms,
  onOpenStandards,
  onOpenContact,
  onOpenEditors,
  onOpenAbout,
}) => {
  return (
    <footer className="bg-[#051310] border-t border-[#5fdee7]/20 text-slate-300 pt-12 pb-8 text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Editorial Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#0b2721] border border-[#5fdee7] flex items-center justify-center shadow-[0_0_8px_rgba(95,222,231,0.4)]">
                <Cpu className="w-4 h-4 text-[#ffd700]" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">technovahubs</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              An independent daily journal of consumer electronics, artificial intelligence, cybersecurity, and smart computing hardware. Committed to peer-reviewed methodology and empirical telemetry.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#5fdee7]">
              <span>ISSN 2994-1842</span> · <span>PEER REVIEWED</span>
            </div>
          </div>

          {/* Column 2: Tech Categories */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#ffd700] mb-3">
              Research Sections
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('Consumer Electronics & Gadgets')}
                  className="hover:text-[#ffd700] transition-colors text-left"
                >
                  Consumer Electronics &amp; Gadgets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('AI & Future Tech')}
                  className="hover:text-[#ffd700] transition-colors text-left"
                >
                  Artificial Intelligence &amp; Future Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Cybersecurity & Software')}
                  className="hover:text-[#ffd700] transition-colors text-left"
                >
                  Cybersecurity &amp; Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Smart Home & Computing Hardware')}
                  className="hover:text-[#ffd700] transition-colors text-left"
                >
                  Smart Home &amp; Computing Hardware
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Editorial Standards & Compliance */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#ffd700] mb-3">
              Journal Policies
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenStandards}
                  className="hover:text-[#ffd700] transition-colors text-left"
                >
                  Editorial &amp; Testing Standards
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#ffd700] transition-colors text-left"
                >
                  Privacy Policy &amp; GDPR Notice
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#ffd700] transition-colors text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEditors}
                  className="hover:text-[#ffd700] transition-colors text-left"
                >
                  Editorial Board &amp; Telemetry Team
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-[#ffd700] transition-colors text-left"
                >
                  About technovahubs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Press Desk */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#ffd700] mb-3">
              Editorial Newsroom &amp; Inquiries
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Submit hardware for laboratory testing, research tips, or corrections directly to our senior editorial desk:
            </p>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#5fdee7]" />
                <a
                  href="mailto:sagheerofficial21dnb@gmail.com"
                  className="hover:text-[#ffd700] transition-colors break-all"
                >
                  sagheerofficial21dnb@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#5fdee7]" />
                <a
                  href="tel:03069256639"
                  className="hover:text-[#ffd700] transition-colors"
                >
                  Phone / WhatsApp: 03069256639
                </a>
              </div>
            </div>
            <div className="mt-3">
              <button
                onClick={onOpenContact}
                className="px-3 py-1.5 rounded bg-[#0b2721] border border-[#5fdee7]/40 text-[#5fdee7] hover:border-[#ffd700] hover:text-[#ffd700] btn-yellow-hover font-semibold transition-colors"
              >
                Send Encrypted Tip
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Compliance & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            © 2026 <span className="text-slate-300 font-bold">technovahubs</span>. All rights reserved. Published daily in compliance with international digital publishing ethics.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#10b981]">
              <CheckCircle className="w-3 h-3" />
              <span>GDPR &amp; CCPA Compliant</span>
            </span>
            <span className="text-slate-600">·</span>
            <span>Zero Unverified AI Hallucinations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
