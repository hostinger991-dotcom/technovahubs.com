import React from 'react';
import { X, ShieldCheck, CheckCircle2, Award, Scale, HelpCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditorialStandardsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-3xl w-full bg-[#081c18] border border-[#5fdee7]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-[#0b2721] border border-[#5fdee7] text-[#5fdee7]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Editorial &amp; Testing Standards</h2>
            <p className="text-xs font-mono text-[#5fdee7]">PEER-REVIEWED RIGOR &amp; INDEPENDENT HARDWARE TELEMETRY</p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              1. Absolute Editorial Independence
            </h3>
            <p>
              At <strong className="text-white">technovahubs</strong>, our primary allegiance is to truth, empirical accuracy, and our readership. We strictly refuse paid editorial sponsorships, sponsored reviews, or pre-publication review copies that demand editorial approval or favorable scores.
            </p>
            <p>
              Hardware provided by manufacturers for evaluation undergoes identical teardown, thermal imaging, and stress-testing protocols as units purchased anonymously at retail. Manufacturers are never permitted to view reviews prior to public publication.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              2. Standardized Laboratory Benchmarking Methodology
            </h3>
            <p>
              Every benchmark published in our journal is reproducible. Testing procedures adhere to recognized engineering standards:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-slate-400">
              <li>Acoustic measurements: Conducted in calibrated anechoic chambers utilizing Brüel &amp; Kjær Type 5128 HATS simulators in accordance with ITU-T P.863.</li>
              <li>Thermal &amp; Power: Logged with Keithley 2450 SourceMeters and calibrated FLIR thermal imaging arrays under constant 22.0°C ± 0.5°C ambient conditions.</li>
              <li>Optical Telemetry: Verified with Konica Minolta CS-2000 spectroradiometers and 16-stop dynamic range illumination charts.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              3. Transparent Corrections &amp; Peer Review Policy
            </h3>
            <p>
              If an empirical error or inaccurate specification is identified in any published article, our editorial team commits to issuing a prominent, dated correction note at the top of the article within 24 hours. We welcome peer feedback from academic researchers and industry engineers.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-[#ffd700] uppercase tracking-wider">
              4. Contact the Review Board
            </h3>
            <p>
              To report technical inaccuracies or submit laboratory data for review, contact our senior standards desk:
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
            I Understand &amp; Agree
          </button>
        </div>
      </div>
    </div>
  );
};
