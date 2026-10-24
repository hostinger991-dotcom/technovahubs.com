import React from 'react';
import { TICKER_HEADLINES, TickerItem } from '../data/articles';

interface ContinuousTickerProps {
  onSelectArticle: (articleId: string) => void;
}

export const ContinuousTicker: React.FC<ContinuousTickerProps> = ({ onSelectArticle }) => {
  // Duplicate array to enable seamless infinite scroll loop
  const repeatedItems = [...TICKER_HEADLINES, ...TICKER_HEADLINES];

  return (
    <div className="w-full bg-[#061613] border-y border-[#5fdee7]/25 overflow-hidden py-2.5 relative select-none z-20">
      {/* Gradient fade on left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#081c18] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#081c18] to-transparent z-10 pointer-events-none" />

      {/* Ticker Lead Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div className="flex items-center gap-2 mr-4 shrink-0 bg-[#0b2721] px-2.5 py-1 rounded border border-[#5fdee7]/40 shadow-[0_0_12px_rgba(95,222,231,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#5fdee7] animate-ping" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#5fdee7] font-mono">
            DISPATCH WIRE
          </span>
        </div>

        {/* Scrolling Track */}
        <div className="overflow-hidden flex-1">
          <div className="ticker-track flex items-center gap-8">
            {repeatedItems.map((item: TickerItem, idx: number) => (
              <button
                key={`${item.id}-${idx}`}
                onClick={() => onSelectArticle(item.articleId)}
                className="group flex items-center gap-3 shrink-0 text-left cursor-pointer transition-transform hover:scale-[1.01] focus:outline-none"
              >
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider uppercase text-[#5fdee7] border border-[#5fdee7]/60 rounded group-hover:border-[#ffd700] group-hover:text-[#ffd700] transition-colors shadow-[0_0_8px_rgba(95,222,231,0.25)]">
                  {item.tag}
                </span>
                <span className="text-xs font-medium text-slate-200 group-hover:text-[#ffd700] transition-colors whitespace-nowrap">
                  {item.headline}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {item.timestamp}
                </span>
                <span className="text-slate-600 font-bold ml-2">/</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
