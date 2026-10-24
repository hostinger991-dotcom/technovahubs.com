import React, { useState, useEffect, useRef } from 'react';
import { Article } from '../types/article';
import { Search, X, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? articles.slice(0, 6)
    : articles.filter((a) =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.keyword.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase()) ||
        a.deck.toLowerCase().includes(query.toLowerCase()) ||
        a.author.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center pt-20 p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div className="max-w-2xl w-full bg-[#081c18] border border-[#5fdee7]/40 rounded-2xl p-4 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.9)] relative">
        {/* Search Input */}
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <Search className="w-5 h-5 text-[#5fdee7]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search keywords, silicon benchmarks, or topics (e.g. 'flagship', 'vpn', 'rtx 5060')..."
            className="flex-1 bg-transparent text-white text-sm placeholder:text-slate-500 focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>{query ? `Found ${filtered.length} Research Papers` : 'Featured Technical Papers'}</span>
            <span className="text-[#ffd700]">Press ESC to Exit</span>
          </div>

          {filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">
              No technical papers found matching &quot;{query}&quot;. Try searching for &quot;smartphones&quot;, &quot;antivirus&quot;, or &quot;generative ai&quot;.
            </div>
          ) : (
            filtered.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="p-3 rounded-xl bg-[#0b2721] border border-white/5 hover:border-[#ffd700] hover:bg-[#103830] cursor-pointer transition-all flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#5fdee7] mb-1">
                    <span>{art.category}</span>
                    <span>·</span>
                    <span className="text-slate-400">{art.readTime}</span>
                    <span>·</span>
                    <span className="text-[#ffd700] font-bold">{art.wordCount} words</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ffd700] transition-colors line-clamp-1">
                    {art.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {art.deck}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#ffd700] group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
