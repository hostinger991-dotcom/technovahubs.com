import React, { useState, useEffect } from 'react';
import { Shield, Check, X, Sliders, ChevronDown, ChevronUp } from 'lucide-react';

export const GdprCookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('technovahubs_gdpr_consent');
    if (!consent) {
      // Delay slightly for smooth page entrance
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'technovahubs_gdpr_consent',
      JSON.stringify({ necessary: true, analytics: true, marketing: true, timestamp: Date.now() })
    );
    setShowBanner(false);
  };

  const handleDeclineNonEssential = () => {
    localStorage.setItem(
      'technovahubs_gdpr_consent',
      JSON.stringify({ necessary: true, analytics: false, marketing: false, timestamp: Date.now() })
    );
    setShowBanner(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      'technovahubs_gdpr_consent',
      JSON.stringify({
        necessary: true,
        analytics: analyticsCookies,
        marketing: marketingCookies,
        timestamp: Date.now(),
      })
    );
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#081c18]/95 backdrop-blur-xl border border-[#5fdee7]/40 rounded-2xl p-5 shadow-[0_15px_50px_rgba(0,0,0,0.85)] text-slate-200">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg bg-[#0b2721] border border-[#5fdee7] text-[#ffd700] shrink-0 mt-0.5">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span>GDPR Privacy &amp; Consent Transparency</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                EU ePrivacy Directive
              </span>
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              technovahubs uses essential cryptographic session cookies to remember your display preferences and secure laboratory reader state. We respect your right to decline non-essential telemetry.
            </p>
          </div>
        </div>

        {/* Customization Drawer */}
        {showCustomize && (
          <div className="my-3 p-3 rounded-xl bg-[#061411] border border-white/10 space-y-2.5 text-xs font-mono">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div>
                <div className="font-bold text-white">Strictly Necessary (Required)</div>
                <div className="text-[10px] text-slate-400">Core session security and reader cache.</div>
              </div>
              <span className="text-emerald-400 font-semibold">Active</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div>
                <div className="font-bold text-white">Performance Telemetry (Anonymous)</div>
                <div className="text-[10px] text-slate-400">Aggregated server load and page response metrics.</div>
              </div>
              <input
                type="checkbox"
                checked={analyticsCookies}
                onChange={(e) => setAnalyticsCookies(e.target.checked)}
                className="accent-[#ffd700] w-4 h-4 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-white">Marketing &amp; Ad Attribution</div>
                <div className="text-[10px] text-slate-400">Ad network compliance and publisher metrics.</div>
              </div>
              <input
                type="checkbox"
                checked={marketingCookies}
                onChange={(e) => setMarketingCookies(e.target.checked)}
                className="accent-[#ffd700] w-4 h-4 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Consent Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
          <button
            onClick={() => setShowCustomize(!showCustomize)}
            className="text-[11px] font-mono text-[#5fdee7] hover:text-[#ffd700] flex items-center gap-1 transition-colors"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{showCustomize ? 'Hide Settings' : 'Customize Preferences'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDeclineNonEssential}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors font-medium"
            >
              Essential Only
            </button>
            {showCustomize ? (
              <button
                onClick={handleSaveCustom}
                className="px-4 py-1.5 rounded-lg bg-[#5fdee7] text-slate-950 font-bold hover:bg-[#4ecad3] transition-colors"
              >
                Save Preferences
              </button>
            ) : (
              <button
                onClick={handleAcceptAll}
                className="px-4 py-1.5 rounded-lg bg-[#ffd700] text-slate-950 font-bold hover:bg-[#ffcc00] transition-colors shadow-[0_0_12px_rgba(255,215,0,0.4)]"
              >
                Accept All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
