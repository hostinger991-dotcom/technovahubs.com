import React from 'react';
import { X, Lock, CheckCircle2, Shield, ExternalLink, Mail, Phone } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-4xl w-full bg-[#081c18] border border-[#ffd700]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors cursor-pointer"
          aria-label="Close Privacy Policy"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#0b2721] border border-[#ffd700] text-[#ffd700] shadow-[0_0_12px_rgba(255,215,0,0.3)]">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Privacy Policy &amp; Advertising Disclosures</h2>
            <p className="text-xs font-mono text-[#ffd700]">
              COMPLIANT WITH GDPR, CCPA/CPRA, REVBID &amp; GOOGLE ADSENSE STANDARDS · UPDATED 2026
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {/* Section 1 */}
          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2">
              <span>01. Introduction &amp; Editorial Privacy Pledge</span>
            </h3>
            <p>
              Welcome to <strong className="text-white">technovahubs</strong> ("we", "our", or "the Journal"), accessible at technovahubs.com. As an independent daily publication dedicated to consumer electronics, artificial intelligence, cybersecurity, and smart computing hardware, we respect your digital privacy. This policy governs data handling practices across our publication, research databases, and authorized programmatic advertising integrations.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2">
              <span>02. Programmatic Advertising, RevBid &amp; Ad Partner Disclosures</span>
            </h3>
            <p>
              technovahubs partners with authorized third-party ad networks, supply-side platforms (SSPs), and ad exchanges—including <strong className="text-white">RevBid (revbid.net)</strong>, <strong className="text-white">Google AdSense / Google Ad Manager</strong>, and their certified Prebid header bidding partners (such as PubMatic, Rubicon Project / Magnite, OpenX, Index Exchange, Criteo, Sovrn, TripleLift, 33Across, AdYouLike, and others listed in our authorized ads.txt record).
            </p>
            <p>
              These advertising partners may use cookies, web beacons, JavaScript, or similar tracking technologies to measure advertising campaign efficacy and personalize advertisements displayed to you based on your browsing behavior across different websites.
            </p>
            <div className="p-3.5 rounded-xl bg-[#061411] border border-[#ffd700]/25 text-xs text-slate-300 space-y-1.5 font-mono">
              <div className="text-[#ffd700] font-bold">Google DoubleClick DART Cookies:</div>
              <p className="font-sans text-slate-300">
                Google, as a third-party vendor, uses cookies to serve ads on technovahubs. Google’s use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2">
              <span>03. User Opt-Out Mechanisms &amp; Advertising Choices</span>
            </h3>
            <p>
              You have the right to control personalized advertising cookies. You can opt out of interest-based advertising from participating ad networks via the following industry portals:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-slate-300">
              <li>
                <strong>Digital Advertising Alliance (DAA):</strong>{' '}
                <a
                  href="https://optout.aboutads.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffd700] hover:underline inline-flex items-center gap-1 font-mono"
                >
                  optout.aboutads.info <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <strong>Network Advertising Initiative (NAI):</strong>{' '}
                <a
                  href="https://optout.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffd700] hover:underline inline-flex items-center gap-1 font-mono"
                >
                  optout.networkadvertising.org <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <strong>European Interactive Digital Advertising Alliance (EDAA):</strong>{' '}
                <a
                  href="https://www.youronlinechoices.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffd700] hover:underline inline-flex items-center gap-1 font-mono"
                >
                  youronlinechoices.com <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2">
              <span>04. European Union GDPR &amp; UK Data Protection Rights</span>
            </h3>
            <p>
              Under the General Data Protection Regulation (EU) 2016/679 and UK Data Protection Act, visitors from the European Economic Area (EEA) and United Kingdom are entitled to explicit data subject rights:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-slate-400">
              <li>Right of access: Request copies of any stored personal information.</li>
              <li>Right to rectification: Request corrections to inaccurate technical records.</li>
              <li>Right to erasure: Demand deletion under the "Right to be Forgotten".</li>
              <li>Right to restrict processing: Limit how telemetry records are utilized.</li>
              <li>Right to data portability: Obtain an electronic structured copy of data.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2">
              <span>05. California Consumer Privacy Act (CCPA / CPRA)</span>
            </h3>
            <p>
              California residents possess specific rights regarding their personal information under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
            </p>
            <p className="font-semibold text-white">
              Notice of Right to Opt-Out: We do NOT sell your personal identifying information for direct monetary compensation. However, programmatic ad exchanges may involve the "sharing" of pseudonymous identifiers for personalized ads. You can opt out at any time using our GDPR/CCPA Consent Preferences banner or the industry links above.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2">
              <span>06. Log Files &amp; Technical Telemetry</span>
            </h3>
            <p>
              technovahubs follows standardized log file procedures. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and number of clicks. These are not linked to any information that is personally identifiable.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-2 border-b border-white/5 pb-4">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2">
              <span>07. Children’s Online Privacy Protection Act (COPPA)</span>
            </h3>
            <p>
              technovahubs does not knowingly collect any Personal Identifiable Information from children under the age of 13. If a parent or guardian believes that technovahubs has in its database personal information of a child under age 13, please contact us immediately for immediate removal.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-2 pt-1">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2">
              <span>08. Data Protection Officer (DPO) &amp; Publisher Contact</span>
            </h3>
            <p>
              For privacy requests, GDPR data erasure demands, or programmatic advertising compliance inquiries, please contact our Data Protection Officer directly:
            </p>
            <div className="p-3.5 rounded-xl bg-[#061411] border border-white/10 font-mono text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ffd700]" />
                <span>Official Editorial &amp; DPO Email:</span>
                <a href="mailto:ahmadali07121@gmail.com" className="text-[#ffd700] hover:underline font-bold">
                  ahmadali07121@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffd700]" />
                <span>Direct Legal Bureau Telephone:</span>
                <a href="tel:03069256639" className="text-[#ffd700] hover:underline font-bold">
                  03069256639 (+92 306 9256639)
                </a>
              </div>
              <div>
                <span className="text-slate-400">Publisher:</span> technovahubs (Daily Tech Radar Edition) Newsroom
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">
            REV-ID: REVBID-AD-COMPLIANCE-OCT2026
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors shadow-[0_0_12px_rgba(255,215,0,0.3)] cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
