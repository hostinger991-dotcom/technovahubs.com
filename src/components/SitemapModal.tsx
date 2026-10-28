import React from 'react';
import { X, Network, FileText, ExternalLink, BookOpen, ChevronRight, CheckCircle2, Shield, Mail, Layers } from 'lucide-react';
import { Article } from '../types/article';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDisclaimer: () => void;
  onOpenStandards: () => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
  onOpenAbout,
  onOpenContact,
  onOpenPrivacy,
  onOpenTerms,
  onOpenDisclaimer,
  onOpenStandards,
}) => {
  if (!isOpen) return null;

  // Group articles by category
  const categories = [
    'Consumer Electronics & Gadgets',
    'AI & Future Tech',
    'Cybersecurity & Software',
    'Smart Home & Computing Hardware',
  ];

  const handleArticleClick = (art: Article) => {
    onClose();
    onSelectArticle(art);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200 select-none">
      <div className="max-w-4xl w-full bg-[#081c18] border border-[#5fdee7]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors"
          aria-label="Close Sitemap Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-[#0b2721] border border-[#5fdee7] text-[#5fdee7]">
            <Network className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Interactive HTML Sitemap</h2>
            <p className="text-xs font-mono text-[#5fdee7]">
              COMPREHENSIVE DIRECTORY OF 20 TECHNICAL RESEARCH PAPERS &amp; EDITORIAL PAGES
            </p>
          </div>
        </div>

        {/* Instructions banner */}
        <div className="mb-6 p-3.5 rounded-xl bg-[#0b2721] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ffd700]" />
            <span>Click any article title or page below to open the complete long-form reading view instantly.</span>
          </div>
          <a
            href="./sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#5fdee7] hover:text-[#ffd700] font-mono transition-colors text-xs hover:underline"
          >
            <span>View Raw sitemap.xml</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Core Institutional Site Pages */}
        <div className="mb-8">
          <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-[#ffd700] mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#5fdee7]" />
            <span>Core Journal Navigation &amp; Institutional Pages</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            <button
              onClick={() => {
                onClose();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all"
            >
              <div className="text-[10px] font-mono text-[#5fdee7]">HOMEPAGE</div>
              <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5">
                Home Feed
              </div>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenAbout();
              }}
              className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all"
            >
              <div className="text-[10px] font-mono text-[#5fdee7]">COMPANY</div>
              <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5">
                About Us
              </div>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all"
            >
              <div className="text-[10px] font-mono text-[#5fdee7]">INQUIRIES</div>
              <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5">
                Contact Us
              </div>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenPrivacy();
              }}
              className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all"
            >
              <div className="text-[10px] font-mono text-[#5fdee7]">LEGAL</div>
              <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5">
                Privacy Policy
              </div>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenTerms();
              }}
              className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all"
            >
              <div className="text-[10px] font-mono text-[#5fdee7]">LEGAL</div>
              <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5">
                Terms &amp; Cond.
              </div>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenDisclaimer();
              }}
              className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all"
            >
              <div className="text-[10px] font-mono text-[#ffd700]">DISCLOSURE</div>
              <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5">
                Disclaimer
              </div>
            </button>
          </div>
        </div>

        {/* 20 Real Technical Research Papers Grouped by Category */}
        <div className="space-y-6">
          {categories.map((catName) => {
            const catArticles = articles.filter((a) => a.category === catName);
            return (
              <div key={catName} className="p-4 sm:p-5 rounded-xl bg-[#0b2721]/80 border border-white/10">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5fdee7] flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#ffd700]" />
                    <span>{catName}</span>
                  </h4>
                  <span className="text-[11px] font-mono text-[#ffd700] bg-black/40 px-2 py-0.5 rounded border border-[#ffd700]/30">
                    {catArticles.length} Research Papers
                  </span>
                </div>

                <div className="space-y-2">
                  {catArticles.map((art, index) => (
                    <div
                      key={art.id}
                      onClick={() => handleArticleClick(art)}
                      className="p-3 rounded-lg bg-[#061411]/90 border border-white/5 hover:border-[#ffd700] cursor-pointer group flex items-start justify-between gap-3 transition-all hover:bg-black/50"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                          <span className="text-[#ffd700] font-bold">#{index + 1}</span>
                          <span>·</span>
                          <span className="text-slate-300 uppercase">{art.keyword}</span>
                          <span>·</span>
                          <span>{art.wordCount} words</span>
                          <span>·</span>
                          <span>{art.readTime}</span>
                        </div>
                        <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ffd700] transition-colors leading-snug">
                          {art.title}
                        </h5>
                        <p className="text-[11px] text-slate-400 line-clamp-1 font-sans">
                          {art.subtitle}
                        </p>
                      </div>

                      <div className="shrink-0 p-1.5 rounded bg-white/5 text-slate-400 group-hover:text-[#ffd700] group-hover:bg-[#ffd700]/10 transition-colors mt-1">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Bottom Contact Line */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div>
            Need an unlisted technical test or custom paper? Email:{' '}
            <a href="mailto:ahmadali07121@gmail.com" className="text-[#ffd700] hover:underline">
              ahmadali07121@gmail.com
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors"
          >
            Close Sitemap
          </button>
        </div>
      </div>
    </div>
  );
};
