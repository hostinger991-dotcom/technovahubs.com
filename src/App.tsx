import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { allArticles, CATEGORIES, Article, CategoryMeta } from './data/articles';
import { Header } from './components/Header';
import { ContinuousTicker } from './components/ContinuousTicker';
import { ArticleCard } from './components/ArticleCard';
import { AdSlot } from './components/AdSlot';
import { getSafeImageUrl, handleImageError } from './utils/imageHelper';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { EditorialStandardsModal } from './components/EditorialStandardsModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsModal } from './components/TermsModal';
import { DisclaimerModal } from './components/DisclaimerModal';
import { SitemapModal } from './components/SitemapModal';
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
  Mail,
  Flame,
  TrendingUp,
  Radio,
  AlertCircle
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [standardsModalOpen, setStandardsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [disclaimerModalOpen, setDisclaimerModalOpen] = useState(false);
  const [sitemapModalOpen, setSitemapModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [editorsModalOpen, setEditorsModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [notFoundAlert, setNotFoundAlert] = useState<string | null>(null);
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

  // Centralized URL routing for direct sitemap links, browser back/forward, and deep links
  const syncRouteFromLocation = useCallback(() => {
    // 1. Get raw pathname, hash, and search
    const pathname = decodeURIComponent(window.location.pathname).replace(/\/+$/, '') || '/';
    const hash = decodeURIComponent(window.location.hash).replace(/^#\/?/, '').replace(/\/+$/, '');
    const searchParams = new URLSearchParams(window.location.search);
    const queryRoute = searchParams.get('p') || searchParams.get('route') || searchParams.get('article') || '';

    // Determine normalized clean path
    let cleanPath = (queryRoute || (pathname !== '/' ? pathname : '') || hash).trim();
    if (!cleanPath.startsWith('/') && !cleanPath.startsWith('http')) {
      cleanPath = '/' + cleanPath;
    }

    const lower = cleanPath.toLowerCase();

    // Check Institutional & Regulatory Pages from Sitemap
    if (lower === '/about' || lower === '/about-us') {
      setAboutModalOpen(true);
      setActiveArticle(null);
      setNotFoundAlert(null);
      document.title = 'About Us — technovahubs Engineering Journal';
      return;
    }

    if (lower === '/contact' || lower === '/contact-us') {
      setContactModalOpen(true);
      setActiveArticle(null);
      setNotFoundAlert(null);
      document.title = 'Contact Newsroom & Bureau — technovahubs';
      return;
    }

    if (lower === '/privacy' || lower === '/privacy-policy') {
      setPrivacyModalOpen(true);
      setActiveArticle(null);
      setNotFoundAlert(null);
      document.title = 'Privacy Policy & Advertising Disclosures — technovahubs';
      return;
    }

    if (lower === '/terms' || lower === '/terms-and-conditions' || lower === '/terms-of-service') {
      setTermsModalOpen(true);
      setActiveArticle(null);
      setNotFoundAlert(null);
      document.title = 'Terms & Conditions of Service — technovahubs';
      return;
    }

    if (lower === '/disclaimer') {
      setDisclaimerModalOpen(true);
      setActiveArticle(null);
      setNotFoundAlert(null);
      document.title = 'Editorial & Advertising Disclaimer — technovahubs';
      return;
    }

    if (lower === '/editorial-standards' || lower === '/standards') {
      setStandardsModalOpen(true);
      setActiveArticle(null);
      setNotFoundAlert(null);
      document.title = 'Editorial Standards & Testing Protocols — technovahubs';
      return;
    }

    if (lower === '/sitemap' || lower === '/sitemap.html') {
      setSitemapModalOpen(true);
      setActiveArticle(null);
      setNotFoundAlert(null);
      document.title = 'Interactive HTML Sitemap & Index — technovahubs';
      return;
    }

    if (lower === '/editors') {
      setEditorsModalOpen(true);
      setActiveArticle(null);
      setNotFoundAlert(null);
      document.title = 'Editorial Board & Peer Reviewers — technovahubs';
      return;
    }

    // Check Category Route: /category/:categorySlug
    if (lower.startsWith('/category/')) {
      const catSlug = lower.replace('/category/', '').trim();
      const matchedCat = CATEGORIES.find(
        (c) =>
          c.id.toLowerCase() === catSlug ||
          c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === catSlug ||
          c.name.toLowerCase().includes(catSlug)
      );
      if (matchedCat) {
        setSelectedCategory(matchedCat.name);
        setActiveArticle(null);
        setNotFoundAlert(null);
        document.title = `${matchedCat.name} — technovahubs`;
        return;
      }
    }

    // Check Article Route: /article/:slug or /:slug
    let articleSlug = '';
    if (lower.startsWith('/article/')) {
      articleSlug = lower.replace('/article/', '').trim();
    } else if (cleanPath !== '/' && !cleanPath.includes('/')) {
      articleSlug = cleanPath.replace('/', '').trim();
    }

    if (articleSlug) {
      const found = allArticles.find(
        (a) =>
          a.slug.toLowerCase() === articleSlug ||
          a.id.toLowerCase() === articleSlug ||
          a.id.toLowerCase() === `art-${articleSlug}`
      );
      if (found) {
        setActiveArticle(found);
        setNotFoundAlert(null);
        document.title = `${found.title} — technovahubs`;
        return;
      } else {
        // Unknown article slug
        setNotFoundAlert(`Requested research paper "/${articleSlug}" was not found. Here are the 20 verified papers.`);
        setActiveArticle(null);
      }
    }

    // Default clean home feed
    if (pathname === '/' && !hash && !queryRoute) {
      setActiveArticle(null);
      setNotFoundAlert(null);
      document.title = 'technovahubs — Engineering & Consumer Tech Journal';
    }
  }, []);

  useEffect(() => {
    syncRouteFromLocation();
    window.addEventListener('popstate', syncRouteFromLocation);
    window.addEventListener('hashchange', syncRouteFromLocation);
    return () => {
      window.removeEventListener('popstate', syncRouteFromLocation);
      window.removeEventListener('hashchange', syncRouteFromLocation);
    };
  }, [syncRouteFromLocation]);

  // Navigate & open article with real URL matching sitemap.xml
  const handleOpenArticle = (article: Article) => {
    setActiveArticle(article);
    setNotFoundAlert(null);
    document.title = `${article.title} — technovahubs`;
    try {
      window.history.pushState(null, '', `/article/${article.slug}`);
    } catch {
      window.location.hash = `/article/${article.slug}`;
    }
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    document.title = 'technovahubs — Engineering & Consumer Tech Journal';
    try {
      window.history.pushState(null, '', '/');
    } catch {
      window.location.hash = '';
    }
  };

  const openPageModal = (path: string, openSetter: (v: boolean) => void, title: string) => {
    openSetter(true);
    setNotFoundAlert(null);
    document.title = `${title} — technovahubs`;
    try {
      window.history.pushState(null, '', path);
    } catch {
      window.location.hash = path;
    }
  };

  const closePageModal = (closeSetter: (v: boolean) => void) => {
    closeSetter(false);
    document.title = 'technovahubs — Engineering & Consumer Tech Journal';
    try {
      window.history.pushState(null, '', '/');
    } catch {
      window.location.hash = '';
    }
  };

  // Filtered Articles based on Category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') {
      return allArticles;
    }
    return allArticles.filter((art) => art.category === selectedCategory);
  }, [selectedCategory]);

  // Lead Feature Story
  const leadArticle = allArticles[0]; // best-flagship-smartphones-2026
  
  // Trending Spotlight Stories (Daily Tech Radar Style)
  const trendingArticles = useMemo(() => {
    return [allArticles[1], allArticles[2], allArticles[5], allArticles[10]];
  }, []);

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * articlesPerPage;
    return filteredArticles.slice(start, start + articlesPerPage);
  }, [filteredArticles, currentPage]);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    setNotFoundAlert(null);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleOpenTickerArticle = (articleId: string) => {
    const target = allArticles.find((a) => a.id === articleId || a.slug === articleId);
    if (target) {
      handleOpenArticle(target);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#081c18] text-slate-100 selection:bg-[#ffd700] selection:text-slate-950 font-sans antialiased">
      {/* 1. Header with Top Bar Contract & Direct Categories */}
      <Header
        currentCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        onOpenAbout={() => openPageModal('/about', setAboutModalOpen, 'About Us')}
        onOpenContact={() => openPageModal('/contact', setContactModalOpen, 'Contact Us')}
        onOpenEditors={() => openPageModal('/editors', setEditorsModalOpen, 'Editorial Board')}
        onOpenStandards={() => openPageModal('/editorial-standards', setStandardsModalOpen, 'Editorial Standards')}
        onOpenSitemap={() => openPageModal('/sitemap', setSitemapModalOpen, 'HTML Sitemap')}
        onSearchClick={() => setSearchModalOpen(true)}
      />

      {/* 2. Continuous Ticker Tape directly underneath main header */}
      <ContinuousTicker onSelectArticle={handleOpenTickerArticle} />

      {/* Not Found Safe Fallback Alert (If invalid URL pasted) */}
      {notFoundAlert && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 w-full">
          <div className="p-4 rounded-xl bg-[#0b2721] border border-[#ffd700] text-slate-200 flex items-center justify-between gap-4 shadow-[0_0_20px_rgba(255,215,0,0.25)]">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-[#ffd700] shrink-0" />
              <div className="text-xs font-mono">
                <span className="font-bold text-[#ffd700] uppercase">Notice: </span>
                <span>{notFoundAlert}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-[#ffd700] text-slate-950 text-xs font-mono font-bold hover:bg-[#ffcc00] transition-colors cursor-pointer"
              >
                Search Papers
              </button>
              <button
                onClick={() => {
                  setNotFoundAlert(null);
                  try { window.history.pushState(null, '', '/'); } catch {}
                }}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono hover:bg-white/20 transition-colors cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Top Header Leaderboard Ad Unit (IAB 728x90 compliant for RevBid & AdSense) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 w-full">
        <AdSlot slotId="header-leaderboard" format="leaderboard" />
      </div>

      {/* Main Content Feed Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-4 space-y-10">
        {/* Curated Editorial Lead Marquee (When on Home Feed) */}
        {selectedCategory === 'all' && (
          <section className="relative rounded-2xl overflow-hidden border border-[#ffd700]/30 bg-gradient-to-r from-[#09221c] via-[#0b2b24] to-[#081f19] p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Lead Prose */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#ffd700]">
                  <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse" />
                  <span className="font-bold uppercase tracking-wider">DAILY TECH RADAR · LEAD INVESTIGATION</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-300">{leadArticle.publishedAt}</span>
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
                  <div className="p-2.5 rounded-lg bg-black/40 border border-[#ffd700]/25">
                    <div className="text-[10px] text-slate-400">Energy Density</div>
                    <div className="text-[#ffd700] font-bold text-sm">830 Wh/L</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-[#ffd700]/25">
                    <div className="text-[10px] text-slate-400">Peak HDR Luma</div>
                    <div className="text-[#ffd700] font-bold text-sm">4,520 Nits</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-[#ffd700]/25 col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-slate-400">Sustained FPS</div>
                    <div className="text-emerald-400 font-bold text-sm">119.8 FPS</div>
                  </div>
                </div>

                {/* Action CTA with Yellow Hover Micro-Interaction */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleOpenArticle(leadArticle)}
                    className="px-6 py-3 rounded-xl bg-[#ffd700] text-slate-950 font-bold text-sm hover:bg-[#ffcc00] transition-all flex items-center gap-2 btn-yellow-hover shadow-[0_0_20px_rgba(255,215,0,0.4)] cursor-pointer"
                  >
                    <span>Read Full 1,260-Word Paper</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-[#ffd700]" />
                    <span>Peer-Reviewed Hardware Telemetry</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Teardown Preview */}
              <div className="lg:col-span-5">
                <div
                  onClick={() => handleOpenArticle(leadArticle)}
                  className="rounded-xl border border-white/15 bg-black/40 p-2 cursor-pointer hover:border-[#ffd700] hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] transition-all duration-300 shadow-2xl group"
                >
                  {leadArticle.imageUrl ? (
                    <div className="relative rounded-lg overflow-hidden border border-white/10 group-hover:border-[#ffd700]/70 transition-all bg-[#061411]">
                      <img
                        src={getSafeImageUrl(leadArticle.imageUrl)}
                        alt={leadArticle.infographic.title}
                        className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500 block"
                        loading="eager"
                        decoding="async"
                        onError={(e) => handleImageError(e, leadArticle.imageUrl)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                        <div className="text-[10px] font-mono text-[#ffd700] uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>INFOGRAPHIC BLUEPRINT · 6 PANELS</span>
                          <span className="text-[#ffd700] text-[9px] px-1.5 py-0.5 rounded bg-black/60 border border-[#ffd700]/50 font-bold">
                            VERIFIED 2026
                          </span>
                        </div>
                        <div className="text-base font-bold text-white group-hover:text-[#ffd700] transition-colors leading-tight">
                          {leadArticle.infographic.title}
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 pt-2 font-mono text-[9px]">
                          {leadArticle.infographic.panels.slice(0, 4).map((p, i) => (
                            <div key={i} className="px-2 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-xs">
                              <span className="text-[#ffd700] font-semibold">{p.title}: </span>
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
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Daily Tech Radar Trending Quick-Bar */}
        {selectedCategory === 'all' && (
          <section className="p-4 rounded-xl bg-[#0b2721]/60 border border-[#ffd700]/20">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ffd700] uppercase tracking-wider mb-3">
              <Flame className="w-4 h-4 text-[#ffd700]" />
              <span>Trending on Daily Tech Radar</span>
              <span className="text-slate-400 font-normal">| Verified Laboratory Hot Topics</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {trendingArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleOpenArticle(art)}
                  className="p-3 rounded-lg bg-[#061411] border border-white/5 hover:border-[#ffd700] cursor-pointer group transition-all"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#ffd700] mb-1">
                    <span className="uppercase">{art.category.split('&')[0]}</span>
                    <span className="text-slate-300">{art.readTime}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-[#ffd700] transition-colors line-clamp-2">
                    {art.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Mid-Feed In-Feed Programmatic Ad Unit */}
        <AdSlot slotId="feed-mid-placement" format="in-feed" />

        {/* Operational Telemetry Strip (Journal Facts & Peer Review) */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-[#ffd700]/20 text-xs font-mono">
          <div className="p-3 rounded-lg bg-[#0b2721]/60 border border-white/5 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-[#ffd700] shrink-0" />
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
            <Activity className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">LABORATORY DATA</div>
              <div className="text-white font-bold text-sm">80+ Benchmarks</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0b2721]/60 border border-white/5 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#ffd700] shrink-0" />
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
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#ffd700] text-slate-950 font-bold shadow-[0_0_12px_rgba(255,215,0,0.5)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                All Topics ({allArticles.length})
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.name)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat.name
                      ? 'bg-[#ffd700] text-slate-950 font-bold shadow-[0_0_12px_rgba(255,215,0,0.5)]'
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
            {paginatedArticles.map((article, idx) => (
              <ArticleCard
                key={article.id}
                article={article}
                priority={idx < 4}
                onOpenArticle={(art) => handleOpenArticle(art)}
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
                  className="px-3 py-1.5 rounded-lg bg-[#0b2721] border border-white/10 text-xs font-mono text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed pagination-yellow-hover cursor-pointer"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
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
                  className="px-3 py-1.5 rounded-lg bg-[#0b2721] border border-white/10 text-xs font-mono text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed pagination-yellow-hover cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Bottom Leaderboard Anchor Slot */}
        <AdSlot slotId="footer-anchor-leaderboard" format="leaderboard" />

        {/* Editorial Standards & Newsroom Contact Banner */}
        <section className="rounded-2xl p-6 sm:p-8 bg-[#0b2721]/70 border border-[#ffd700]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffd700] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#ffd700]" />
              <span>INDEPENDENT ENGINEERING JOURNALISM · DAILY TECH RADAR</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Have Hardware Telemetry or a Security Vulnerability to Disclose?
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Our hardware engineers and cryptographic analysts accept anonymous hardware samples and vulnerability disclosures. Direct communications to our senior editorial desk:
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-1.5 text-[#ffd700]">
                <Mail className="w-4 h-4 text-[#ffd700]" />
                <a href="mailto:ahmadali07121@gmail.com" className="hover:underline font-bold">
                  ahmadali07121@gmail.com
                </a>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5 text-[#ffd700]">
                <Phone className="w-4 h-4 text-[#ffd700]" />
                <a href="tel:03069256639" className="hover:underline font-bold">
                  03069256639
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openPageModal('/editorial-standards', setStandardsModalOpen, 'Editorial Standards')}
              className="px-4 py-2.5 rounded-lg bg-[#061411] border border-white/15 text-xs text-slate-200 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors cursor-pointer"
            >
              Review Testing Protocols
            </button>
            <button
              onClick={() => openPageModal('/contact', setContactModalOpen, 'Contact Us')}
              className="px-5 py-2.5 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] btn-yellow-hover transition-all shadow-[0_0_15px_rgba(255,215,0,0.4)] cursor-pointer"
            >
              Contact Desk
            </button>
          </div>
        </section>
      </main>

      {/* 4. Footer with explicit display of required pages (NO mention of ads.txt in UI) */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenPrivacy={() => openPageModal('/privacy-policy', setPrivacyModalOpen, 'Privacy Policy')}
        onOpenTerms={() => openPageModal('/terms', setTermsModalOpen, 'Terms & Conditions')}
        onOpenDisclaimer={() => openPageModal('/disclaimer', setDisclaimerModalOpen, 'Disclaimer')}
        onOpenSitemap={() => openPageModal('/sitemap', setSitemapModalOpen, 'HTML Sitemap')}
        onOpenStandards={() => openPageModal('/editorial-standards', setStandardsModalOpen, 'Editorial Standards')}
        onOpenContact={() => openPageModal('/contact', setContactModalOpen, 'Contact Us')}
        onOpenEditors={() => openPageModal('/editors', setEditorsModalOpen, 'Editorial Board')}
        onOpenAbout={() => openPageModal('/about', setAboutModalOpen, 'About Us')}
      />

      {/* 5. Interactive Long-Form Reading Modal */}
      {activeArticle && (
        <ArticleReaderModal
          article={activeArticle}
          onClose={handleCloseArticle}
        />
      )}

      {/* 6. Compliance, Institutional & Sitemap Modals */}
      <DisclaimerModal
        isOpen={disclaimerModalOpen}
        onClose={() => closePageModal(setDisclaimerModalOpen)}
        onOpenContact={() => openPageModal('/contact', setContactModalOpen, 'Contact Us')}
      />

      <SitemapModal
        isOpen={sitemapModalOpen}
        onClose={() => closePageModal(setSitemapModalOpen)}
        articles={allArticles}
        onSelectArticle={(art) => handleOpenArticle(art)}
        onSelectCategory={(cat) => handleSelectCategory(cat)}
        onOpenAbout={() => openPageModal('/about', setAboutModalOpen, 'About Us')}
        onOpenContact={() => openPageModal('/contact', setContactModalOpen, 'Contact Us')}
        onOpenPrivacy={() => openPageModal('/privacy-policy', setPrivacyModalOpen, 'Privacy Policy')}
        onOpenTerms={() => openPageModal('/terms', setTermsModalOpen, 'Terms & Conditions')}
        onOpenDisclaimer={() => openPageModal('/disclaimer', setDisclaimerModalOpen, 'Disclaimer')}
        onOpenStandards={() => openPageModal('/editorial-standards', setStandardsModalOpen, 'Editorial Standards')}
      />

      <EditorialStandardsModal
        isOpen={standardsModalOpen}
        onClose={() => closePageModal(setStandardsModalOpen)}
      />
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => closePageModal(setPrivacyModalOpen)}
      />
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => closePageModal(setTermsModalOpen)}
      />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => closePageModal(setContactModalOpen)}
      />
      <EditorsModal
        isOpen={editorsModalOpen}
        onClose={() => closePageModal(setEditorsModalOpen)}
      />
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => closePageModal(setAboutModalOpen)}
        onOpenContact={() => openPageModal('/contact', setContactModalOpen, 'Contact Us')}
      />
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        articles={allArticles}
        onSelectArticle={(art) => handleOpenArticle(art)}
      />

      {/* 7. GDPR Cookie Banner */}
      <GdprCookieBanner />
    </div>
  );
}
