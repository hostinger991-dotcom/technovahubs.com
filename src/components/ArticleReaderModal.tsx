import React, { useState, useEffect } from 'react';
import { Article } from '../types/article';
import { InfographicVisualizer } from './InfographicVisualizer';
import { 
  X, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  Sparkles, 
  FileText, 
  Table, 
  ShieldAlert,
  Sliders,
  Type
} from 'lucide-react';

interface ArticleReaderModalProps {
  article: Article;
  onClose: () => void;
  onSelectRelatedArticle?: (id: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onSelectRelatedArticle,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Scroll listener for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const modalEl = document.getElementById('article-reader-container');
      if (modalEl) {
        const totalHeight = modalEl.scrollHeight - modalEl.clientHeight;
        if (totalHeight > 0) {
          const current = (modalEl.scrollTop / totalHeight) * 100;
          setScrollProgress(Math.min(100, Math.max(0, current)));
        }
      }
    };

    const modalEl = document.getElementById('article-reader-container');
    if (modalEl) {
      modalEl.addEventListener('scroll', handleScroll);
      return () => modalEl.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Audio reading progress simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + `/article/${article.slug}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg leading-relaxed';
      case 'xlarge':
        return 'text-xl leading-loose';
      case 'normal':
      default:
        return 'text-base leading-relaxed';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#040e0c]/90 backdrop-blur-xl flex flex-col justify-start items-center overflow-hidden animate-in fade-in duration-200">
      {/* Top Reading Progress Bar */}
      <div className="w-full bg-[#081c18] border-b border-[#5fdee7]/25 sticky top-0 z-50">
        <div
          className="h-1 bg-gradient-to-r from-[#5fdee7] via-[#ffd700] to-[#ffcc00] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
        
        {/* Navigation & Controls Ribbon */}
        <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#ffd700] btn-yellow-hover px-2.5 py-1 rounded-md border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Feed</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="text-[#5fdee7] font-semibold">{article.category}</span>
            <span>·</span>
            <span className="text-white truncate max-w-xs">{article.title}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio narration toggle */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium border transition-colors ${
                isPlayingAudio
                  ? 'bg-[#ffd700] text-slate-950 border-[#ffd700]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-[#ffd700] hover:text-[#ffd700]'
              }`}
              title="Listen to synthesized audio narration"
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isPlayingAudio ? 'Listening...' : 'Audio Wire'}</span>
            </button>

            {/* Font size switcher */}
            <div className="flex items-center border border-white/10 rounded overflow-hidden">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 text-xs font-mono ${
                  fontSize === 'normal' ? 'bg-[#5fdee7] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Default text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 text-xs font-mono font-semibold ${
                  fontSize === 'large' ? 'bg-[#5fdee7] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Larger text size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 text-xs font-mono font-bold ${
                  fontSize === 'xlarge' ? 'bg-[#5fdee7] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Maximum text size"
              >
                A++
              </button>
            </div>

            {/* Share link button */}
            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded border border-white/10 text-slate-300 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors"
              title="Copy citation link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#ffd700]" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Scrollable Article Body */}
      <div
        id="article-reader-container"
        className="w-full flex-1 overflow-y-auto px-4 sm:px-6 py-8"
      >
        <div className="max-w-4xl mx-auto bg-[#081c18]/95 border border-[#5fdee7]/20 rounded-2xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md">
          {/* Article Header Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <span className="text-[#5fdee7] font-bold uppercase tracking-wider">{article.category}</span>
            <span>·</span>
            <span>Published {article.publishedAt}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>·</span>
            <span className="text-[#ffd700] font-bold">{article.wordCount} words (Full Research Standard)</span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            {article.title}
          </h1>

          {/* Subtitle / Deck */}
          <p className="text-base sm:text-lg text-[#5fdee7] font-medium leading-relaxed mb-6">
            {article.subtitle}
          </p>

          {/* Author Block */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#5fdee7]/60"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{article.author.name}</span>
                  <span className="text-[10px] px-2 py-0.2 rounded bg-white/5 border border-white/10 text-slate-300 font-mono">
                    VERIFIED CONTRIBUTOR
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-sans">{article.author.role}</div>
                <div className="text-[11px] text-slate-500 font-mono">{article.author.credentials}</div>
              </div>
            </div>

            {/* Simulated Audio Player Pill */}
            {isPlayingAudio && (
              <div className="flex items-center gap-3 bg-[#0b2721] px-3 py-1.5 rounded-lg border border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                <Volume2 className="w-4 h-4 text-[#ffd700] animate-pulse" />
                <div className="text-xs font-mono text-[#ffd700]">
                  <span>Narrating Section ({Math.round(audioProgress)}%)</span>
                </div>
              </div>
            )}
          </div>

          {/* Infographic Visualizer Centerpiece */}
          <div className="mb-10">
            <InfographicVisualizer
              infographic={article.infographic}
              approvedPromptText={article.approvedPromptText}
              imageUrl={article.imageUrl}
            />
          </div>

          {/* Key Findings Box */}
          <div className="mb-8 p-5 rounded-xl bg-[#0b2721]/90 border border-[#5fdee7]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2 text-sm font-bold text-[#ffd700] mb-3 uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Laboratory Key Takeaways &amp; Findings</span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#5fdee7] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Empirical Benchmarks Data Table */}
          <div className="mb-10 overflow-x-auto rounded-xl border border-white/10 bg-[#061411]">
            <div className="p-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase">
                <Table className="w-4 h-4 text-[#5fdee7]" />
                <span>Empirical Hardware Telemetry &amp; Comparative Benchmarks</span>
              </div>
              <span className="text-[10px] font-mono text-[#ffd700]">STANDARDIZED TEST RIGS</span>
            </div>
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#0b2721] text-slate-400 border-b border-white/10">
                <tr>
                  <th className="p-3 font-semibold">Test Specification</th>
                  <th className="p-3 font-semibold text-[#5fdee7]">Laboratory Winner</th>
                  <th className="p-3 font-semibold">Runner-Up</th>
                  <th className="p-3 font-semibold text-[#ffd700]">Performance Delta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {article.benchmarks.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-medium text-slate-200">{row.testName}</td>
                    <td className="p-3 text-[#5fdee7] font-bold">{row.categoryWinner}</td>
                    <td className="p-3 text-slate-400">{row.runnerUp}</td>
                    <td className="p-3 text-[#ffd700] font-bold">{row.performanceDelta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Main Article Body Prose (1,200 - 1,300 words) */}
          <div className={`prose prose-invert max-w-none text-slate-200 space-y-8 font-sans ${getFontSizeClass()}`}>
            {article.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
                  {section.heading}
                </h2>
                {section.subheading && (
                  <h3 className="text-base font-semibold text-[#5fdee7]">
                    {section.subheading}
                  </h3>
                )}
                {section.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className={`text-slate-300 leading-relaxed ${
                      sIdx === 0 && pIdx === 0
                        ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-[#ffd700] first-letter:float-left first-letter:mr-3 first-letter:mt-1'
                        : ''
                    }`}
                  >
                    {para}
                  </p>
                ))}

                {/* Optional Section Callout Box */}
                {section.calloutBox && (
                  <div className="my-6 p-4 rounded-lg bg-[#0b2721] border border-[#5fdee7]/40 shadow-inner">
                    <div className="text-xs font-mono font-bold text-[#5fdee7] uppercase tracking-wider mb-1">
                      {section.calloutBox.title}
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {section.calloutBox.text}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Pros & Cons Engineering Analysis */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-emerald-400 uppercase mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineering Strengths (Verified)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {article.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">+</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-rose-400 uppercase mb-3">
                <XCircle className="w-4 h-4" />
                <span>Engineering Vulnerabilities &amp; Trade-offs</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {article.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">−</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Author Citation Card & Official Contact */}
          <div className="mt-10 p-6 rounded-xl bg-[#0b2721] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-[#5fdee7] uppercase tracking-wider">
                PEER-REVIEWED JOURNAL ACCREDITATION
              </div>
              <div className="text-sm font-bold text-white mt-1">
                technovahubs Engineering &amp; Consumer Tech Review Board
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-lg">
                Independent, non-sponsored hardware evaluation. All measurements conducted in accordance with IEEE, AES, and NIST standardized laboratory protocols.
              </p>
              <div className="mt-2 text-xs font-mono text-[#ffd700]">
                Official Contact: ahmadali07121@gmail.com · Tel/WhatsApp: 03069256639 (+92 306 9256639)
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] btn-yellow-hover shrink-0 transition-all shadow-[0_0_15px_rgba(255,215,0,0.4)]"
            >
              Close Technical Paper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
