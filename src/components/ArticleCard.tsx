import React, { useState } from 'react';
import { Article } from '../types/article';
import { getSafeImageUrl, handleImageError } from '../utils/imageHelper';
import { ArrowUpRight, BookOpen, Clock, Calendar, CheckCircle2, Cpu, Grid } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onOpenArticle: (article: Article) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onOpenArticle,
  featured = false,
}) => {
  const [viewMode, setViewMode] = useState<'photo' | 'matrix'>('photo');

  return (
    <article
      onClick={() => onOpenArticle(article)}
      className={`article-card-yellow-hover rounded-xl cursor-pointer group flex flex-col justify-between overflow-hidden bg-[#081c18] border border-[#ffd700]/25 transition-all duration-300 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Visual Media Showcase Preview */}
        <div className="p-3 sm:p-4 pb-0">
          <div className="relative overflow-hidden rounded-lg border border-[#ffd700]/30 group-hover:border-[#ffd700] transition-all duration-300 bg-[#061411]">
            {viewMode === 'photo' ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#061411]">
                <img
                  src={getSafeImageUrl(article.imageUrl)}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => handleImageError(e, article.imageUrl, () => setViewMode('matrix'))}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                />

                {/* Overlay telemetry badges with Yellow Branding */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-between p-3 pointer-events-none">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/70 text-[#ffd700] border border-[#ffd700]/40 backdrop-blur-xs uppercase truncate max-w-[70%]">
                      {article.keyword}
                    </span>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/80 text-[#ffd700] border border-[#ffd700]/60 backdrop-blur-xs shrink-0 shadow-[0_0_8px_rgba(255,215,0,0.3)]">
                      VERIFIED 2026
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[11px] font-mono text-slate-200 font-semibold truncate max-w-[80%]">
                      {article.infographic.subtitle}
                    </div>
                    <span className="text-[9px] font-mono text-[#ffd700] shrink-0 font-bold">
                      16:9 4K
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Vector 6-Panel Quick Grid View */
              <div className="aspect-[16/9] p-3 sm:p-4 flex flex-col justify-between bg-black/70 font-mono text-xs overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[10px] text-[#ffd700] uppercase font-bold tracking-wider">
                    6-Panel Architecture
                  </span>
                  <span className="text-[10px] text-[#ffd700] font-bold">Hardware Matrix</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 my-auto">
                  {article.infographic.panels.slice(0, 4).map((p, idx) => (
                    <div key={idx} className="p-1.5 rounded bg-white/5 border border-white/5 truncate">
                      <div className="text-[9px] text-[#ffd700] truncate font-bold">{p.title}</div>
                      <div className="text-[10px] text-white font-mono truncate">{p.metric}</div>
                    </div>
                  ))}
                </div>
                <div className="text-[9px] text-slate-300 text-center">
                  Click to open complete 1,200+ word research paper
                </div>
              </div>
            )}

            {/* Quick Toggle: Photo vs Matrix */}
            <div className="absolute top-2 right-2 flex items-center gap-1 z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setViewMode(viewMode === 'photo' ? 'matrix' : 'photo');
                }}
                className="px-2 py-0.5 rounded text-[9px] font-mono bg-black/80 hover:bg-[#ffd700] hover:text-slate-950 text-[#ffd700] border border-[#ffd700]/40 transition-colors shadow-sm cursor-pointer"
                title="Toggle between real photo and 6-panel vector matrix"
              >
                {viewMode === 'photo' ? 'Switch to 6-Vector' : 'Switch to Photo'}
              </button>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3 font-mono">
            <span className="text-[#ffd700] font-bold tracking-wider uppercase article-accent-badge transition-colors">
              {article.category}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{article.publishedAt}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#ffd700]" />
              {article.readTime}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300 font-bold">{article.wordCount} words</span>
          </div>

          {/* Article Title */}
          <h3
            className={`font-bold tracking-tight text-white article-title-heading transition-colors ${
              featured ? 'text-xl sm:text-2xl lg:text-3xl leading-snug' : 'text-lg sm:text-xl leading-snug'
            }`}
          >
            {article.title}
          </h3>

          {/* Subtitle / Deck */}
          <p className="mt-2 text-sm text-slate-300 line-clamp-3 leading-relaxed">
            {article.deck}
          </p>

          {/* Highlights Mini-Strip */}
          <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
            {article.keyTakeaways.slice(0, 2).map((takeaway, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] shrink-0 mt-0.5 group-hover:text-[#ffd700] transition-colors" />
                <span className="line-clamp-1">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Author & Read CTA */}
      <div className="p-4 sm:p-6 pt-0 mt-auto border-t border-white/5 flex items-center justify-between gap-3">
        {/* Author Byline */}
        <div className="flex items-center gap-3">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-8 h-8 rounded-full object-cover border border-[#ffd700]/50 group-hover:border-[#ffd700] transition-colors shadow-[0_0_8px_rgba(255,215,0,0.3)]"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="text-xs font-semibold text-white group-hover:text-[#ffd700] transition-colors">
              {article.author.name}
            </div>
            <div className="text-[10px] text-slate-400 truncate max-w-[150px] sm:max-w-[190px]">
              {article.author.role}
            </div>
          </div>
        </div>

        {/* Read CTA with Special Yellow Hover Transformation */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenArticle(article);
          }}
          className="card-read-cta px-3 py-1.5 rounded-lg bg-[#0b2721] text-xs font-semibold text-[#ffd700] border border-[#ffd700]/40 flex items-center gap-1.5 transition-all shadow-[0_0_8px_rgba(255,215,0,0.2)] group-hover:bg-[#ffd700] group-hover:text-slate-950 group-hover:border-[#ffd700] cursor-pointer"
        >
          <span>Read Paper</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
