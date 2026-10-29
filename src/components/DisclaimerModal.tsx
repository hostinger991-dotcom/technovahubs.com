import React from 'react';
import { X, AlertTriangle, ShieldCheck, FileText, CheckCircle2, Scale } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-3xl w-full bg-[#081c18] border border-[#ffd700]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors cursor-pointer"
          aria-label="Close Disclaimer Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#0b2721] border border-[#ffd700] text-[#ffd700] shadow-[0_0_12px_rgba(255,215,0,0.3)]">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Editorial, Advertising &amp; Legal Disclaimer</h2>
            <p className="text-xs font-mono text-[#ffd700]">TECHNOLOGY EVALUATION, BENCHMARKING &amp; DISCLOSURE POLICIES</p>
          </div>
        </div>

        {/* Highlight Callout */}
        <div className="mb-6 p-4 rounded-xl bg-[#0b2721] border border-[#ffd700]/40 flex items-start gap-3 shadow-[0_0_15px_rgba(255,215,0,0.1)]">
          <AlertTriangle className="w-5 h-5 text-[#ffd700] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            The evaluations, telemetry data, benchmarks, and technical analyses published on <strong className="text-white">technovahubs / Daily Tech Radar</strong> are intended solely for educational, journalistic, and informational purposes. Please review the specific disclaimers below prior to implementing modifications, configuring network infrastructure, or making purchasing decisions.
          </p>
        </div>

        {/* Disclaimer Sections */}
        <div className="space-y-6 text-xs text-slate-300 font-sans leading-relaxed">
          {/* 1. Hardware Modification & Overclocking */}
          <section className="space-y-2 border-b border-white/5 pb-5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="text-[#ffd700] font-mono">01.</span>
              <span>Hardware Testing, Overclocking &amp; Teardowns</span>
            </h3>
            <p>
              Our technical guides frequently reference hardware teardowns, BIOS firmware adjustments, memory overclocking (XMP/EXPO), custom liquid cooling, delidding, and thermal modifications. While all protocols are tested under controlled laboratory conditions, performing physical disassembly or operating hardware outside manufacturer specifications carries inherent risks, including the voiding of warranties, thermal damage, or data loss.
            </p>
            <p className="text-slate-400">
              technovahubs and its editorial contributors assume no liability for hardware malfunction, electrostatic discharge (ESD) incidents, or damages resulting from the execution of technical tutorials published on this site.
            </p>
          </section>

          {/* 2. Cybersecurity & Software Configuration */}
          <section className="space-y-2 border-b border-white/5 pb-5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="text-[#ffd700] font-mono">02.</span>
              <span>Cybersecurity, Privacy Tools &amp; Network Configuration</span>
            </h3>
            <p>
              Articles regarding Virtual Private Networks (VPNs), endpoint antivirus software, password managers, and data privacy provide independent evaluation of cryptographic principles and protocols. However, no digital security software or configuration can guarantee 100% immunity from zero-day exploits, advanced persistent threats (APTs), or targeted state-level surveillance.
            </p>
            <p className="text-slate-400">
              Users must independently assess local laws, enterprise compliance requirements, and individual threat models before modifying operating system kernels, running Sysinternals scripts, or deploying travel router subnets.
            </p>
          </section>

          {/* 3. Programmatic Advertising, Affiliate Links & FTC Transparency */}
          <section className="space-y-2 border-b border-white/5 pb-5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="text-[#ffd700] font-mono">03.</span>
              <span>Programmatic Advertising (RevBid &amp; AdSense) &amp; FTC Transparency</span>
            </h3>
            <p>
              In accordance with Federal Trade Commission (FTC) guidelines and Better Ads Standards, technovahubs maintains strict division between journalistic testing and monetization. We display programmatic display and native advertisements served via certified networks including RevBid, Google AdSense, and certified Prebid supply-side platforms.
            </p>
            <p className="text-slate-400">
              Advertisements are clearly distinguished with "ADVERTISEMENT" labels and do not dictate editorial scoring, laboratory benchmark results, or hardware recommendations. We may also earn standard affiliate commissions on merchant purchases made through reviewed product links at no additional cost to our readers.
            </p>
          </section>

          {/* 4. Accuracy of Telemetry & Pricing */}
          <section className="space-y-2 border-b border-white/5 pb-5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="text-[#ffd700] font-mono">04.</span>
              <span>Pricing, Availability &amp; Firmware Changes</span>
            </h3>
            <p>
              Consumer electronics hardware specifications, firmware versions, battery chemistries, and retail prices change dynamically. While our team performs regular audits of our 20 technical papers, readers should verify real-time MSRP and warranty terms with official hardware vendors before committing to capital investments.
            </p>
          </section>

          {/* 5. Contact Desk */}
          <section className="space-y-2 pt-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="text-[#ffd700] font-mono">05.</span>
              <span>Questions, Corrections &amp; Disclosures</span>
            </h3>
            <p>
              If you identify a technical inaccuracy, firmware update delta, or wish to submit a peer-review correction, please contact our senior editorial bureau directly:
            </p>
            <div className="p-3 rounded-lg bg-[#0b2721] border border-white/10 font-mono text-xs space-y-1">
              <div>
                <span className="text-slate-400">Official Bureau Email: </span>
                <a href="mailto:ahmadali07121@gmail.com" className="text-[#ffd700] hover:underline font-bold">
                  ahmadali07121@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-400">Direct Telephone / WhatsApp: </span>
                <a href="tel:03069256639" className="text-[#ffd700] hover:underline font-bold">
                  03069256639 (+92 306 9256639)
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-mono text-slate-400">
            LAST AUDITED: OCTOBER 2026 · technovahubs LEGAL DIVISION
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/15 text-xs text-slate-200 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors"
            >
              Contact Legal Bureau
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors shadow-[0_0_12px_rgba(255,215,0,0.3)]"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
