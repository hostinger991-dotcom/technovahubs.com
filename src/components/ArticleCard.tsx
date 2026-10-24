import React from 'react';
import { Article } from '../types/article';
import { InfographicVisualizer } from './InfographicVisualizer';
import { ArrowUpRight, BookOpen, Clock, Calendar, BarChart3, CheckCircle2 } from 'lucide-react';

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
  return (
    <article
      onClick={() => onOpenArticle(article)}
      className={`article-card-yellow-hover rounded-xl cursor-pointer group flex flex-col justify-between overflow-hidden ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Visual Infographic Thumbnail Preview */}
        <div className="p-3 sm:p-4 pb-0">
          <div className="overflow-hidden rounded-lg border border-white/10 group-hover:border-[#ffd700]/70 transition-all duration-300">
            <InfographicVisualizer
              infographic={article.infographic}
              approvedPromptText={article.approvedPromptText}
              imageUrl={article.imageUrl}
              compact={!featured}
            />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-6">
          {/* Zero-Pill Unboxed Clean Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3 font-mono">
            <span className="text-[#5fdee7] font-semibold tracking-wider uppercase article-accent-badge transition-colors">
              {article.category}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{article.publishedAt}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
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
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5fdee7] shrink-0 mt-0.5 group-hover:text-[#ffd700] transition-colors" />
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
            className="w-8 h-8 rounded-full object-cover border border-[#5fdee7]/40 group-hover:border-[#ffd700] transition-colors"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="text-xs font-semibold text-white group-hover:text-[#ffd700] transition-colors">
              {article.author.name}
            </div>
            <div className="text-[10px] text-slate-400 truncate max-w-[160px] sm:max-w-[200px]">
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
          className="card-read-cta px-3 py-1.5 rounded-lg bg-[#0b2721] text-xs font-semibold text-[#5fdee7] border border-[#5fdee7]/40 flex items-center gap-1.5 transition-all shadow-[0_0_8px_rgba(95,222,231,0.15)] group-hover:bg-[#ffd700] group-hover:text-slate-950 group-hover:border-[#ffd700]"
        >
          <span>Read Paper</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
