import React, { useState } from 'react';
import { 
  X, 
  Network, 
  FileText, 
  ExternalLink, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  Shield, 
  Mail, 
  Layers, 
  Copy, 
  Check, 
  Code2, 
  Filter,
  ArrowUpRight,
  Image as ImageIcon
} from 'lucide-react';
import { Article } from '../types/article';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onSelectCategory?: (category: string) => void;
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
  onSelectCategory,
  onOpenAbout,
  onOpenContact,
  onOpenPrivacy,
  onOpenTerms,
  onOpenDisclaimer,
  onOpenStandards,
}) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'xml'>('visual');
  const [copiedXml, setCopiedXml] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'Consumer Electronics & Gadgets',
    'AI & Future Tech',
    'Cybersecurity & Software',
    'Smart Home & Computing Hardware',
  ];

  const handleArticleClick = (art: Article) => {
    onClose();
    onSelectArticle(art);
    try {
      window.history.pushState(null, '', `/article/${art.slug}`);
    } catch {
      window.location.hash = `/article/${art.slug}`;
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    onClose();
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
    const slug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    try {
      window.history.pushState(null, '', `/category/${slug}`);
    } catch {
      window.location.hash = `/category/${slug}`;
    }
  };

  const rawXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Core Institutional Endpoints -->
  <url>
    <loc>https://technovahubs.com/</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://technovahubs.com/about</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://technovahubs.com/contact</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://technovahubs.com/privacy-policy</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://technovahubs.com/terms</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://technovahubs.com/disclaimer</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://technovahubs.com/editorial-standards</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://technovahubs.com/sitemap</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- 20 Technical Research Papers with High-Res Image Telemetry -->
${articles
  .map(
    (art) => `  <url>
    <loc>https://technovahubs.com/article/${art.slug}</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://technovahubs.com${art.imageUrl}</image:loc>
      <image:title>${art.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</image:title>
      <image:caption>${art.subtitle.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</image:caption>
    </image:image>
  </url>`
  )
  .join('\n')}

  <!-- Direct High-Resolution Hardware Telemetry Images -->
${articles
  .map(
    (art) => `  <url>
    <loc>https://technovahubs.com${art.imageUrl}</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const handleCopyXml = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(rawXmlContent);
      setCopiedXml(true);
      setTimeout(() => setCopiedXml(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-4xl w-full bg-[#081c18] border border-[#ffd700]/40 rounded-2xl p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors z-20 cursor-pointer"
          aria-label="Close Sitemap Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pr-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#0b2721] border border-[#ffd700] text-[#ffd700] shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <Network className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Interactive Sitemap &amp; Deep-Link Directory</h2>
              <p className="text-xs font-mono text-[#ffd700] mt-0.5">
                COMPLETE INDEX OF 20 ARTICLES, 40 HARDWARE TELEMETRY IMAGES &amp; INSTITUTIONAL PAGES
              </p>
            </div>
          </div>

          {/* View Mode Toggle: Interactive Index vs Raw XML */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0b2721] border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('visual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'visual'
                  ? 'bg-[#ffd700] text-slate-950 shadow-[0_0_10px_rgba(255,215,0,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Index
            </button>
            <button
              onClick={() => setActiveTab('xml')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'xml'
                  ? 'bg-[#ffd700] text-slate-950 shadow-[0_0_10px_rgba(255,215,0,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Raw XML Feed</span>
            </button>
          </div>
        </div>

        {/* Instructions banner */}
        <div className="mb-6 p-3.5 rounded-xl bg-[#0b2721] border border-[#ffd700]/25 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ffd700] shrink-0" />
            <span>Click or copy any link below. All article URLs, page routes, and images open directly without 404.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#ffd700] hover:text-[#ffcc00] font-mono transition-colors text-xs hover:underline cursor-pointer"
            >
              <span>Direct /sitemap.xml</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {activeTab === 'visual' ? (
          <>
            {/* Core Institutional Site Pages */}
            <div className="mb-8">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-[#ffd700] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#ffd700]" />
                <span>Core Journal Pages &amp; Regulatory Disclosures</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    if (onSelectCategory) onSelectCategory('all');
                    window.history.pushState(null, '', '/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all cursor-pointer hover:bg-black/60 block"
                >
                  <div className="text-[10px] font-mono text-[#ffd700]">FEED</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5 flex items-center justify-between">
                    <span>Home Feed</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>

                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenAbout();
                  }}
                  className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all cursor-pointer hover:bg-black/60 block"
                >
                  <div className="text-[10px] font-mono text-[#ffd700]">ORGANIZATION</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5 flex items-center justify-between">
                    <span>About Us</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>

                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenContact();
                  }}
                  className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all cursor-pointer hover:bg-black/60 block"
                >
                  <div className="text-[10px] font-mono text-[#ffd700]">COMMUNICATION</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5 flex items-center justify-between">
                    <span>Contact Us</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>

                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenPrivacy();
                  }}
                  className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all cursor-pointer hover:bg-black/60 block"
                >
                  <div className="text-[10px] font-mono text-[#ffd700]">REGULATORY</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5 flex items-center justify-between">
                    <span>Privacy Policy</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>

                <a
                  href="/terms"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenTerms();
                  }}
                  className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all cursor-pointer hover:bg-black/60 block"
                >
                  <div className="text-[10px] font-mono text-[#ffd700]">REGULATORY</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5 flex items-center justify-between">
                    <span>Terms &amp; Cond.</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>

                <a
                  href="/disclaimer"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenDisclaimer();
                  }}
                  className="p-3 rounded-lg bg-[#061411] border border-white/10 hover:border-[#ffd700] text-left group transition-all cursor-pointer hover:bg-black/60 block"
                >
                  <div className="text-[10px] font-mono text-[#ffd700]">DISCLOSURE</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors mt-0.5 flex items-center justify-between">
                    <span>Disclaimer</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </div>
            </div>

            {/* 20 Real Technical Research Papers Grouped by Category */}
            <div className="space-y-6">
              {categories.map((catName) => {
                const catArticles = articles.filter((a) => a.category === catName);
                return (
                  <div key={catName} className="p-4 sm:p-5 rounded-xl bg-[#0b2721]/80 border border-white/10">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                      <button
                        onClick={() => handleCategoryClick(catName)}
                        className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#ffd700] hover:text-[#ffcc00] flex items-center gap-2 transition-colors cursor-pointer text-left"
                      >
                        <BookOpen className="w-4 h-4 text-[#ffd700]" />
                        <span>{catName}</span>
                        <span className="text-[10px] text-slate-400 font-normal hover:underline ml-1">
                          (Filter Feed →)
                        </span>
                      </button>
                      <span className="text-[11px] font-mono text-[#ffd700] bg-black/40 px-2.5 py-0.5 rounded border border-[#ffd700]/30 font-bold">
                        {catArticles.length} Research Papers
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {catArticles.map((art, index) => (
                        <div
                          key={art.id}
                          className="p-3 rounded-lg bg-[#061411]/90 border border-white/5 hover:border-[#ffd700] group flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:bg-black/60 text-left"
                        >
                          <a
                            href={`/article/${art.slug}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleArticleClick(art);
                            }}
                            className="space-y-1 flex-1 cursor-pointer"
                          >
                            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-400">
                              <span className="text-[#ffd700] font-bold">#{index + 1}</span>
                              <span>·</span>
                              <span className="text-slate-300 uppercase">{art.keyword}</span>
                              <span>·</span>
                              <span className="text-[#ffd700] font-semibold">{art.wordCount} words</span>
                              <span>·</span>
                              <span>{art.readTime}</span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ffd700] transition-colors leading-snug">
                              {art.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 line-clamp-1 font-sans">
                              {art.subtitle}
                            </p>
                          </a>

                          {/* Quick Action Links: Open Article & Direct Image */}
                          <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-white/5">
                            <a
                              href={art.imageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 rounded bg-black/50 text-[10px] font-mono text-slate-300 hover:text-[#ffd700] hover:border-[#ffd700]/50 border border-white/10 flex items-center gap-1 transition-colors cursor-pointer"
                              title="Open Direct 4K Image File"
                            >
                              <ImageIcon className="w-3 h-3 text-[#ffd700]" />
                              <span>View Pic</span>
                            </a>
                            <button
                              onClick={() => handleArticleClick(art)}
                              className="px-2.5 py-1 rounded bg-[#ffd700] text-slate-950 text-xs font-mono font-bold hover:bg-[#ffcc00] flex items-center gap-1 transition-colors cursor-pointer shadow-sm"
                            >
                              <span>Open Paper</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* Raw XML Sitemap Tab */
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#061411] p-3 rounded-lg border border-[#ffd700]/25">
              <div className="text-xs font-mono text-[#ffd700] font-semibold">
                <span>Standard XML Format with Google Image Sitemap Extensions</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyXml}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b2721] border border-white/10 text-xs font-mono text-slate-200 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors cursor-pointer"
                >
                  {copiedXml ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedXml ? 'XML Copied!' : 'Copy XML'}</span>
                </button>
                <a
                  href="/sitemap.xml"
                  download="sitemap.xml"
                  className="px-3 py-1.5 rounded-lg bg-[#ffd700] text-slate-950 text-xs font-mono font-bold hover:bg-[#ffcc00] transition-colors cursor-pointer"
                >
                  Download .xml
                </a>
              </div>
            </div>

            <pre className="p-4 rounded-xl bg-black/80 border border-[#ffd700]/25 text-slate-300 font-mono text-xs overflow-x-auto max-h-[500px] leading-relaxed select-all">
              <code>{rawXmlContent}</code>
            </pre>
          </div>
        )}

        {/* Modal Bottom Contact Line */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div>
            Need an unlisted technical benchmark or custom report? Email:{' '}
            <a href="mailto:ahmadali07121@gmail.com" className="text-[#ffd700] hover:underline font-bold">
              ahmadali07121@gmail.com
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors cursor-pointer"
          >
            Close Sitemap
          </button>
        </div>
      </div>
    </div>
  );
};
