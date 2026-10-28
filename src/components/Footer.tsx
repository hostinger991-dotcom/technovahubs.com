import React from 'react';
import { Mail, Phone, Shield, FileText, CheckCircle, ExternalLink, Cpu, Heart, MessageSquare, Scale, Network } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDisclaimer: () => void;
  onOpenSitemap: () => void;
  onOpenStandards: () => void;
  onOpenContact: () => void;
  onOpenEditors: () => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenPrivacy,
  onOpenTerms,
  onOpenDisclaimer,
  onOpenSitemap,
  onOpenStandards,
  onOpenContact,
  onOpenEditors,
  onOpenAbout,
}) => {
  return (
    <footer className="bg-[#051310] border-t border-[#5fdee7]/20 text-slate-300 pt-12 pb-8 text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Daily Tech Radar Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0b2721] border border-[#5fdee7] flex items-center justify-center shadow-[0_0_10px_rgba(95,222,231,0.4)]">
                <Cpu className="w-4 h-4 text-[#ffd700]" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">technovahubs</span>
                <span className="block text-[10px] font-mono text-[#5fdee7] tracking-wider uppercase font-semibold">
                  Daily Tech Radar Edition
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              An independent daily journal of consumer electronics, artificial intelligence, cybersecurity, and smart computing hardware. Built with peer-reviewed laboratory methodology and standardized empirical telemetry.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#5fdee7] flex items-center gap-2">
              <span>ISSN 2994-1842</span> · <span>PEER REVIEWED</span>
            </div>
          </div>

          {/* Column 2: Tech Categories (Header Mirrors Categories) */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#ffd700] mb-3">
              Research Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('Consumer Electronics & Gadgets')}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#5fdee7]">›</span>
                  <span>Consumer Electronics &amp; Gadgets</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('AI & Future Tech')}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#5fdee7]">›</span>
                  <span>AI &amp; Future Tech</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Cybersecurity & Software')}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#5fdee7]">›</span>
                  <span>Cybersecurity &amp; Software</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Smart Home & Computing Hardware')}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#5fdee7]">›</span>
                  <span>Smart Home &amp; Computing Hardware</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-[#ffd700] transition-colors text-left text-slate-400 hover:text-white flex items-center gap-1.5 pt-1"
                >
                  <span className="text-[#ffd700]">›</span>
                  <span>View All 20 Technical Papers</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Pages (User explicitly requested: About Us, Contact Us, privacy policy, terms & condition, Disclaimer, sitemap) */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#ffd700] mb-3">
              Pages &amp; Regulatory
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5 font-medium text-white"
                >
                  <span className="text-[#5fdee7]">›</span>
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5 font-medium text-white"
                >
                  <span className="text-[#5fdee7]">›</span>
                  <span>Contact Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#5fdee7]">›</span>
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-[#5fdee7]">›</span>
                  <span>Terms &amp; Conditions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimer}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5 text-[#ffd700] font-semibold"
                >
                  <span className="text-[#ffd700]">›</span>
                  <span>Disclaimer</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSitemap}
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5 text-[#5fdee7] font-semibold"
                >
                  <Network className="w-3 h-3 text-[#5fdee7]" />
                  <span>HTML Interactive Sitemap</span>
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffd700] transition-colors text-left flex items-center gap-1.5 text-slate-400 hover:underline"
                >
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                  <span>XML Sitemap (Raw Feed)</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenStandards}
                  className="hover:text-[#ffd700] transition-colors text-left text-slate-400"
                >
                  <span>Editorial Standards &amp; Review Protocols</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Editorial Contacts */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#ffd700] mb-3">
              Editorial Newsroom &amp; Comms
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Submit hardware samples for laboratory benchmarking or reach our senior editorial bureau:
            </p>
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-[#0b2721] border border-white/10 space-y-1.5">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Direct Editorial Email:</div>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-3.5 h-3.5 text-[#5fdee7] shrink-0" />
                  <a
                    href="mailto:ahmadali07121@gmail.com"
                    className="hover:text-[#ffd700] transition-colors font-bold break-all"
                  >
                    ahmadali07121@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0b2721] border border-white/10 space-y-1.5">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Phone &amp; WhatsApp:</div>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-3.5 h-3.5 text-[#5fdee7] shrink-0" />
                  <a
                    href="tel:03069256639"
                    className="hover:text-[#ffd700] transition-colors font-bold"
                  >
                    03069256639
                  </a>
                  <a
                    href="https://wa.me/923069256639"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-[10px] px-2 py-0.5 rounded bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance Standards */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] font-mono">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">technovahubs</strong> (Daily Tech Radar Edition). All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors"
            >
              Privacy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors"
            >
              Terms
            </button>
            <span>·</span>
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-white transition-colors text-[#ffd700]"
            >
              Disclaimer
            </button>
            <span>·</span>
            <button
              onClick={onOpenSitemap}
              className="hover:text-white transition-colors text-[#5fdee7]"
            >
              Sitemap
            </button>
            <span>·</span>
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
