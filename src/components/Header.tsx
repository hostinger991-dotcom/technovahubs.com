import React, { useState } from 'react';
import { Search, Menu, X, Cpu, Sparkles, Compass } from 'lucide-react';

interface HeaderProps {
  currentCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenEditors: () => void;
  onOpenStandards: () => void;
  onOpenSitemap: () => void;
  onSearchClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  onOpenAbout,
  onOpenContact,
  onOpenEditors,
  onOpenStandards,
  onOpenSitemap,
  onSearchClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact 4 Tech Categories as requested in header
  const categories = [
    { id: 'all', label: 'Home Feed' },
    { id: 'Consumer Electronics & Gadgets', label: 'Consumer Electronics' },
    { id: 'AI & Future Tech', label: 'AI & Future Tech' },
    { id: 'Cybersecurity & Software', label: 'Cybersecurity & Software' },
    { id: 'Smart Home & Computing Hardware', label: 'Smart Home & Hardware' },
  ];

  const handleCategoryClick = (id: string) => {
    onSelectCategory(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#081c18]/95 backdrop-blur-md border-b border-[#ffd700]/25 select-none shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
      {/* Top Essential Header Row (Top Bar Contract: 3 Zones) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark with Vibrant Cyber-Yellow Theme */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectCategory('all')}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          >
            {/* Glowing Hexagonal Hardware Logo Icon */}
            <div className="w-9 h-9 rounded-lg bg-[#0b2721] border border-[#ffd700] flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.4)] group-hover:shadow-[0_0_22px_rgba(255,215,0,0.7)] transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="12,2 21,7 21,17 12,22 3,17 3,7"
                  stroke="#ffd700"
                  strokeWidth="1.75"
                  className="transition-colors"
                />
                <circle cx="12" cy="12" r="2.5" fill="#ffd700" />
                <path d="M12 6V9.5 M12 14.5V18 M7 9.5L9.5 11 M14.5 13L17 14.5" stroke="#ffd700" strokeWidth="1.25" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white transition-colors">
                  technova<span className="text-[#ffd700]">hubs</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ffd700]/15 text-[#ffd700] border border-[#ffd700]/50 font-bold uppercase tracking-wider shadow-[0_0_8px_rgba(255,215,0,0.3)]">
                  Daily Tech Radar
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Zone 2: Primary Navigation Categories with Yellow Active Indicators */}
        <nav className="hidden xl:flex items-center gap-4 text-xs font-semibold text-slate-300">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap shrink-0 transition-all py-1 relative cursor-pointer ${
                currentCategory === cat.id
                  ? 'text-[#ffd700] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#ffd700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]'
                  : 'hover:text-[#ffd700]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Compact Navigation for Medium Screens (lg to xl) */}
        <nav className="hidden lg:flex xl:hidden items-center gap-3 text-xs font-semibold text-slate-300">
          <button
            onClick={() => onSelectCategory('all')}
            className={`whitespace-nowrap cursor-pointer ${currentCategory === 'all' ? 'text-[#ffd700] font-bold' : 'hover:text-[#ffd700]'}`}
          >
            Home
          </button>
          <button
            onClick={() => onSelectCategory('Consumer Electronics & Gadgets')}
            className={`whitespace-nowrap cursor-pointer ${currentCategory === 'Consumer Electronics & Gadgets' ? 'text-[#ffd700] font-bold' : 'hover:text-[#ffd700]'}`}
          >
            Electronics
          </button>
          <button
            onClick={() => onSelectCategory('AI & Future Tech')}
            className={`whitespace-nowrap cursor-pointer ${currentCategory === 'AI & Future Tech' ? 'text-[#ffd700] font-bold' : 'hover:text-[#ffd700]'}`}
          >
            AI &amp; Future
          </button>
          <button
            onClick={() => onSelectCategory('Cybersecurity & Software')}
            className={`whitespace-nowrap cursor-pointer ${currentCategory === 'Cybersecurity & Software' ? 'text-[#ffd700] font-bold' : 'hover:text-[#ffd700]'}`}
          >
            Cybersecurity
          </button>
          <button
            onClick={() => onSelectCategory('Smart Home & Computing Hardware')}
            className={`whitespace-nowrap cursor-pointer ${currentCategory === 'Smart Home & Computing Hardware' ? 'text-[#ffd700] font-bold' : 'hover:text-[#ffd700]'}`}
          >
            Smart Home
          </button>
        </nav>

        {/* Zone 3: Search Action & Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onSearchClick}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0b2721] text-xs font-mono text-slate-200 border border-[#ffd700]/40 hover:border-[#ffd700] hover:text-[#ffd700] transition-all btn-yellow-hover cursor-pointer shadow-[0_0_10px_rgba(255,215,0,0.15)]"
            title="Search 20 research topics"
          >
            <Search className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="hidden sm:inline">Search Papers</span>
            <kbd className="hidden md:inline px-1 py-0.2 bg-black/50 rounded text-[10px] text-[#ffd700] border border-[#ffd700]/30 font-bold">
              /
            </kbd>
          </button>

          {/* Quick Sitemap icon button */}
          <button
            onClick={onOpenSitemap}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0b2721] border border-white/10 text-xs font-mono text-slate-300 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors cursor-pointer"
            title="Open Interactive HTML Sitemap"
          >
            <Compass className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="text-[11px]">Sitemap</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#0b2721] text-slate-300 border border-white/10 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ffd700]" /> : <Menu className="w-5 h-5 text-[#ffd700]" />}
          </button>
        </div>
      </div>

      {/* Brand Sub-Header Tagline Strip in Vibrant Gold-Yellow */}
      <div className="bg-[#0b2721]/95 border-t border-[#ffd700]/20 py-1 px-4 text-center">
        <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#ffd700] uppercase font-bold drop-shadow-[0_0_6px_rgba(255,215,0,0.3)]">
          DAILY TECH RADAR · CONSUMER ELECTRONICS, AI &amp; HARDWARE JOURNAL · PUBLISHED DAILY
        </p>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061411] border-b border-[#ffd700]/30 px-4 py-4 space-y-4 animate-in slide-in-from-top-2">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#ffd700] mb-2 font-bold">
              Header Categories
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    currentCategory === cat.id
                      ? 'bg-[#ffd700] text-slate-950 font-bold shadow-[0_0_12px_rgba(255,215,0,0.4)]'
                      : 'text-slate-300 hover:text-[#ffd700] hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
              Site Pages (Available in Footer)
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAbout();
                }}
                className="p-2 rounded bg-white/5 text-slate-300 hover:text-[#ffd700] text-left cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="p-2 rounded bg-white/5 text-slate-300 hover:text-[#ffd700] text-left cursor-pointer"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSitemap();
                }}
                className="p-2 rounded bg-white/5 text-[#ffd700] hover:text-[#ffcc00] text-left font-mono font-bold cursor-pointer"
              >
                HTML Sitemap
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStandards();
                }}
                className="p-2 rounded bg-white/5 text-slate-300 hover:text-[#ffd700] text-left cursor-pointer"
              >
                Editorial Standards
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
