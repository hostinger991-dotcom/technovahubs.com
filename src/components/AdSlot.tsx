import React from 'react';

interface AdSlotProps {
  slotId: string;
  format: 'leaderboard' | 'in-feed' | 'rectangle';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format,
  className = '',
}) => {
  const getContainerDimensions = () => {
    switch (format) {
      case 'leaderboard':
        return 'min-h-[90px] sm:min-h-[100px] max-w-4xl';
      case 'rectangle':
        return 'min-h-[250px] w-full max-w-[336px]';
      case 'in-feed':
      default:
        return 'min-h-[100px] sm:min-h-[120px] w-full max-w-5xl';
    }
  };

  const getFormatBadge = () => {
    switch (format) {
      case 'leaderboard':
        return 'IAB 728×90 / RESPONSIVE LEADERBOARD';
      case 'rectangle':
        return 'IAB 300×250 / 336×280 MEDIUM RECTANGLE';
      case 'in-feed':
      default:
        return 'IAB NATIVE IN-FEED BANNER';
    }
  };

  return (
    <div
      className={`mx-auto w-full my-6 flex flex-col items-center justify-center ${className}`}
      aria-label="Advertisement Container"
    >
      {/* Required IAB / AdSense Disclosure Label */}
      <div className="flex items-center justify-between w-full max-w-4xl px-2 mb-1.5 text-[10px] font-mono text-slate-400">
        <span className="uppercase tracking-widest text-[#ffd700] font-semibold">
          ADVERTISEMENT
        </span>
        <span className="text-[9px] text-slate-400">
          {getFormatBadge()}
        </span>
      </div>

      {/* Programmatic Ad Unit Container (Ready for RevBid / Google AdSense tags) */}
      <div
        id={`revbid-slot-${slotId}`}
        className={`w-full ${getContainerDimensions()} rounded-xl border border-dashed border-[#ffd700]/30 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:border-[#ffd700]/70`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] animate-pulse" />
          <span className="text-xs font-mono font-bold text-slate-300 tracking-wider">
            REVBID AD EXCHANGE &amp; HEADER BIDDING SLOT
          </span>
        </div>
        <p className="text-[11px] text-slate-400 max-w-md font-sans leading-tight">
          Authorized for RevBid Prebid Partners, Google Ad Manager &amp; Direct Header Bidders.
        </p>
        <span className="mt-2 text-[9px] font-mono px-2 py-0.5 rounded bg-[#ffd700]/10 text-[#ffd700] border border-[#ffd700]/30">
          Slot ID: #{slotId} · AdSense &amp; Better Ads Standard Compliant
        </span>
      </div>
    </div>
  );
};
