import React, { useState, useMemo, useEffect } from 'react';
import { allArticles, CATEGORIES, Article, CategoryMeta } from './data/articles';
import { Header } from './components/Header';
import { ContinuousTicker } from './components/ContinuousTicker';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { EditorialStandardsModal } from './components/EditorialStandardsModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsModal } from './components/TermsModal';
import { ContactModal } from './components/ContactModal';
import { EditorsModal } from './components/EditorsModal';
import { AboutModal } from './components/AboutModal';
import { SearchModal } from './components/SearchModal';
import { GdprCookieBanner } from './components/GdprCookieBanner';
import { Footer } from './components/Footer';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Filter, 
  ChevronRight, 
  BookOpen, 
  ArrowRight, 
  Activity, 
  CheckCircle2,
  Calendar,
  Clock,
  Compass,
  Zap,
  Phone,
  Mail
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [standardsModalOpen, setStandardsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [editorsModalOpen, setEditorsModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 6;

  // Global hotkey for Search ('/' key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered Articles based on Category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') {
      return allArticles;
    }
    return allArticles.filter((art) => art.category === selectedCategory);
  }, [selectedCategory]);

  // Lead Feature Story
  const leadArticle = allArticles[0]; // best-flagship-smartphones-2026

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * articlesPerPage;
    return filteredArticles.slice(start, start + articlesPerPage);
  }, [filteredArticles, currentPage]);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleOpenTickerArticle = (articleId: string) => {
    const target = allArticles.find((a) => a.id === articleId);
    if (target) {
      setActiveArticle(target);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#081c18] text-slate-100 selection:bg-[#ffd700] selection:text-slate-950 font-sans antialiased">
      {/* 1. Header with Top Bar Contract */}
      <Header
        currentCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenEditors={() => setEditorsModalOpen(true)}
        onOpenStandards={() => setStandardsModalOpen(true)}
        onSearchClick={() => setSearchModalOpen(true)}
      />

      {/* 2. Continuous Ticker Tape directly underneath main header */}
      <ContinuousTicker onSelectArticle={handleOpenTickerArticle} />

      {/* Main Content Feed Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 space-y-12">
        {/* Curated Editorial Lead Marquee (When on Home Feed) */}
        {selectedCategory === 'all' && (
          <section className="relative rounded-2xl overflow-hidden border border-[#5fdee7]/30 bg-gradient-to-r from-[#09221c] via-[#0b2b24] to-[#081f19] p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Lead Prose */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#5fdee7]">
                  <span className="w-2 h-2 rounded-full bg-[#5fdee7] animate-pulse" />
                  <span className="font-bold uppercase tracking-wider">LABORATORY INVESTIGATION · LEAD PAPER</span>
                  <span className="text-slate-500">·</span>
                  <span>{leadArticle.publishedAt}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-[#ffd700] font-bold">{leadArticle.wordCount} Words</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {leadArticle.title}
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {leadArticle.deck}
                </p>

                {/* Lead Benchmarks Snapshot */}
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                    <div className="text-[10px] text-slate-400">Energy Density</div>
                    <div className="text-[#ffd700] font-bold text-sm">830 Wh/L</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                    <div className="text-[10px] text-slate-400">Peak HDR Luma</div>
                    <div className="text-[#5fdee7] font-bold text-sm">4,520 Nits</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-slate-400">NTN Satellite</div>
                    <div className="text-emerald-400 font-bold text-sm">3GPP Rel-17</div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActiveArticle(leadArticle)}
                    className="px-6 py-3 rounded-xl bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] btn-yellow-hover flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,215,0,0.45)]"
                  >
                    <span>Read Full Technical Teardown</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2.5 text-xs text-slate-400">
                    <img
                      src={leadArticle.author.avatar}
                      alt={leadArticle.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#5fdee7]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-white font-medium">{leadArticle.author.name}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{leadArticle.author.role}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Teardown Preview */}
              <div className="lg:col-span-5">
                <div
                  onClick={() => setActiveArticle(leadArticle)}
                  className="rounded-xl border border-white/15 bg-black/40 p-2 cursor-pointer hover:border-[#ffd700] hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] transition-all duration-300 shadow-2xl group"
                >
                  {leadArticle.imageUrl ? (
                    <div className="relative rounded-lg overflow-hidden border border-white/10 group-hover:border-[#ffd700]/70 transition-all">
                      <img
                        src={leadArticle.imageUrl}
                        alt={leadArticle.infographic.title}
                        className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                        <div className="text-[10px] font-mono text-[#5fdee7] uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>INFOGRAPHIC BLUEPRINT · 6 PANELS</span>
                          <span className="text-[#ffd700] text-[9px] px-1.5 py-0.5 rounded bg-black/50 border border-[#ffd700]/40">
                            VERIFIED 2026
                          </span>
                        </div>
                        <div className="text-base font-bold text-white group-hover:text-[#ffd700] transition-colors leading-tight">
                          {leadArticle.infographic.title}
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 pt-2 font-mono text-[9px]">
                          {leadArticle.infographic.panels.slice(0, 4).map((p, i) => (
                            <div key={i} className="px-2 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-xs">
                              <span className="text-[#5fdee7] font-semibold">{p.title}: </span>
                              <span className="text-slate-300">{p.metric}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-[10px] text-slate-300 pt-2 flex items-center gap-1 group-hover:text-white transition-colors">
                          <span>Click to open 1,280-word research &amp; interactive matrix</span>
                          <span className="text-[#ffd700] group-hover:translate-x-0.5 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-gradient-to-br from-[#06121e] to-[#040c14] rounded-lg border border-white/10 text-center space-y-2">
                      <div className="text-[10px] font-mono text-[#5fdee7] uppercase tracking-wider">
                        INFOGRAPHIC BLUEPRINT · 6 PANELS
                      </div>
                      <div className="text-base font-bold text-white group-hover:text-[#ffd700] transition-colors">
                        {leadArticle.infographic.title}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-left pt-2 font-mono text-[10px]">
                        {leadArticle.infographic.panels.slice(0, 4).map((p, i) => (
                          <div key={i} className="p-2 rounded bg-white/5 border border-white/5">
                            <div className="text-[#5fdee7] font-bold truncate">{p.title}</div>
                            <div className="text-slate-300 truncate">{p.metric}</div>
                          </div>
                        ))}
                      </div>
                      <div className="text-[10px] text-slate-400 pt-1 group-hover:text-white transition-colors">
                        Click to expand full 6-panel infographic matrix →
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Operational Telemetry Strip (Journal Facts & Peer Review) */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-[#5fdee7]/20 text-xs font-mono">
          <div className="p-3 rounded-lg bg-[#0b2721]/60 border border-white/5 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-[#5fdee7] shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">KEYWORD PAPERS</div>
              <div className="text-white font-bold text-sm">20 Real Articles</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0b2721]/60 border border-white/5 flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#ffd700] shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">TOTAL SCHOLARLY CORPUS</div>
              <div className="text-white font-bold text-sm">25,200+ Words</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0b2721]/60 border border-white/5 flex items-center gap-3">
            <Activity className="w-5 h-5 text-[#10b981] shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">LABORATORY DATA</div>
              <div className="text-white font-bold text-sm">80+ Benchmarks</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0b2721]/60 border border-white/5 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#38bdf8] shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">EDITORIAL INTEGRITY</div>
              <div className="text-white font-bold text-sm">100% Independent</div>
            </div>
          </div>
        </section>

        {/* Category Filter Tabs & Header */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {selectedCategory === 'all'
                  ? 'All Research Papers & Technical Analyses'
                  : selectedCategory}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Showing {filteredArticles.length} peer-reviewed technical articles targeting 1,200 to 1,300 words with laboratory benchmarks.
              </p>
            </div>

            {/* Segmented Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0b2721] rounded-xl border border-white/10">
              <button
                onClick={() => handleSelectCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#ffd700] text-slate-950 font-bold shadow-[0_0_12px_rgba(255,215,0,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                All Topics ({allArticles.length})
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.name)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat.name
                      ? 'bg-[#ffd700] text-slate-950 font-bold shadow-[0_0_12px_rgba(255,215,0,0.4)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.shortName} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* 3. Article Grid with SPECIAL FULL-YELLOW HOVER EFFECT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onOpenArticle={(art) => setActiveArticle(art)}
              />
            ))}
          </div>

          {/* Pagination with Yellow Hover State */}
          {totalPages > 1 && (
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs font-mono text-slate-400">
                Page <span className="text-white font-bold">{currentPage}</span> of{' '}
                <span className="text-white font-bold">{totalPages}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#0b2721] border border-white/10 text-xs font-mono text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed pagination-yellow-hover"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg text-xs font-mono font-semibold transition-all ${
                      currentPage === page
                        ? 'bg-[#ffd700] text-slate-950 font-bold shadow-[0_0_15px_rgba(255,215,0,0.5)]'
                        : 'bg-[#0b2721] border border-white/10 text-slate-300 pagination-yellow-hover'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#0b2721] border border-white/10 text-xs font-mono text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed pagination-yellow-hover"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Editorial Standards & Newsroom Contact Banner */}
        <section className="rounded-2xl p-6 sm:p-8 bg-[#0b2721]/70 border border-[#5fdee7]/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#5fdee7] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#ffd700]" />
              <span>INDEPENDENT ENGINEERING JOURNALISM</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Have Hardware Telemetry or a Security Vulnerability to Disclose?
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Our hardware engineers and cryptographic analysts accept anonymous hardware samples and vulnerability disclosures. Direct coms to our editorial desk:
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-1.5 text-[#ffd700]">
                <Mail className="w-4 h-4 text-[#5fdee7]" />
                <a href="mailto:sagheerofficial21dnb@gmail.com" className="hover:underline">
                  sagheerofficial21dnb@gmail.com
                </a>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5 text-[#ffd700]">
                <Phone className="w-4 h-4 text-[#5fdee7]" />
                <a href="tel:03069256639" className="hover:underline">
                  03069256639
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setStandardsModalOpen(true)}
              className="px-4 py-2.5 rounded-lg bg-[#061411] border border-white/15 text-xs text-slate-200 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors"
            >
              Review Testing Protocols
            </button>
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] btn-yellow-hover transition-all shadow-[0_0_15px_rgba(255,215,0,0.4)]"
            >
              Contact Desk
            </button>
          </div>
        </section>
      </main>

      {/* 4. Footer with strict adherence to requirement #3 (NO mention of ads.txt in UI) */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
        onOpenStandards={() => setStandardsModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenEditors={() => setEditorsModalOpen(true)}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      {/* 5. Interactive Long-Form Reading Modal */}
      {activeArticle && (
        <ArticleReaderModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}

      {/* 6. Compliance & Info Modals */}
      <EditorialStandardsModal
        isOpen={standardsModalOpen}
        onClose={() => setStandardsModalOpen(false)}
      />
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <EditorsModal
        isOpen={editorsModalOpen}
        onClose={() => setEditorsModalOpen(false)}
      />
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        articles={allArticles}
        onSelectArticle={(art) => setActiveArticle(art)}
      />

      {/* 7. GDPR Cookie Banner */}
      <GdprCookieBanner />
    </div>
  );
}
