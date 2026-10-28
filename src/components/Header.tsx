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
    <header className="sticky top-0 z-40 bg-[#081c18]/95 backdrop-blur-md border-b border-[#5fdee7]/20 select-none">
      {/* Top Essential Header Row (Top Bar Contract: 3 Zones) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark (dailytechrader.com inspired tech magazine branding) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectCategory('all')}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            {/* Glowing Hexagonal Hardware Logo Icon */}
            <div className="w-9 h-9 rounded-lg bg-[#0b2721] border border-[#5fdee7]/40 flex items-center justify-center shadow-[0_0_12px_rgba(95,222,231,0.3)] group-hover:border-[#ffd700] group-hover:shadow-[0_0_16px_rgba(255,215,0,0.5)] transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="12,2 21,7 21,17 12,22 3,17 3,7"
                  stroke="#5fdee7"
                  strokeWidth="1.75"
                  className="group-hover:stroke-[#ffd700] transition-colors"
                />
                <circle cx="12" cy="12" r="2.5" fill="#ffd700" />
                <path d="M12 6V9.5 M12 14.5V18 M7 9.5L9.5 11 M14.5 13L17 14.5" stroke="#5fdee7" strokeWidth="1.25" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-[#ffd700] transition-colors">
                  technovahubs
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ffd700]/10 text-[#ffd700] border border-[#ffd700]/30 font-bold uppercase tracking-wider">
                  Daily Tech Radar
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Zone 2: Primary Navigation Categories (Directly in Header as requested) */}
        <nav className="hidden xl:flex items-center gap-4 text-xs font-semibold text-slate-300">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                currentCategory === cat.id
                  ? 'text-[#ffd700] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#ffd700] shadow-[0_0_8px_rgba(255,215,0,0.4)]'
                  : 'hover:text-[#5fdee7]'
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
            className={`whitespace-nowrap ${currentCategory === 'all' ? 'text-[#ffd700] font-bold' : 'hover:text-[#5fdee7]'}`}
          >
            Home
          </button>
          <button
            onClick={() => onSelectCategory('Consumer Electronics & Gadgets')}
            className={`whitespace-nowrap ${currentCategory === 'Consumer Electronics & Gadgets' ? 'text-[#ffd700] font-bold' : 'hover:text-[#5fdee7]'}`}
          >
            Electronics
          </button>
          <button
            onClick={() => onSelectCategory('AI & Future Tech')}
            className={`whitespace-nowrap ${currentCategory === 'AI & Future Tech' ? 'text-[#ffd700] font-bold' : 'hover:text-[#5fdee7]'}`}
          >
            AI &amp; Future
          </button>
          <button
            onClick={() => onSelectCategory('Cybersecurity & Software')}
            className={`whitespace-nowrap ${currentCategory === 'Cybersecurity & Software' ? 'text-[#ffd700] font-bold' : 'hover:text-[#5fdee7]'}`}
          >
            Cybersecurity
          </button>
          <button
            onClick={() => onSelectCategory('Smart Home & Computing Hardware')}
            className={`whitespace-nowrap ${currentCategory === 'Smart Home & Computing Hardware' ? 'text-[#ffd700] font-bold' : 'hover:text-[#5fdee7]'}`}
          >
            Smart Home
          </button>
        </nav>

        {/* Zone 3: Search Action & Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onSearchClick}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0b2721] text-xs font-mono text-slate-300 border border-[#5fdee7]/30 hover:border-[#ffd700] hover:text-[#ffd700] transition-all btn-yellow-hover"
            title="Search 20 research topics"
          >
            <Search className="w-3.5 h-3.5 text-[#5fdee7]" />
            <span className="hidden sm:inline">Search Papers</span>
            <kbd className="hidden md:inline px-1 py-0.2 bg-black/40 rounded text-[10px] text-slate-500 border border-white/10">
              /
            </kbd>
          </button>

          {/* Quick Sitemap icon button */}
          <button
            onClick={onOpenSitemap}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors"
            title="Open Interactive HTML Sitemap"
          >
            <Compass className="w-3.5 h-3.5 text-[#5fdee7]" />
            <span className="text-[11px]">Sitemap</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#0b2721] text-slate-300 border border-white/10 hover:text-[#ffd700] hover:border-[#ffd700] transition-colors"
            aria-label="Toggle Navigation Drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Brand Sub-Header Tagline Strip */}
      <div className="bg-[#0b2721]/90 border-t border-white/5 py-1 px-4 text-center">
        <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#5fdee7] uppercase font-bold">
          DAILY TECH RADAR · CONSUMER ELECTRONICS &amp; HARDWARE JOURNAL
        </p>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061411] border-b border-[#5fdee7]/30 px-4 py-4 space-y-4 animate-in slide-in-from-top-2">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#ffd700] mb-2">
              Header Categories
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    currentCategory === cat.id
                      ? 'bg-[#ffd700] text-slate-950 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
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
                className="p-2 rounded bg-white/5 text-slate-300 hover:text-[#ffd700] text-left"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="p-2 rounded bg-white/5 text-slate-300 hover:text-[#ffd700] text-left"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSitemap();
                }}
                className="p-2 rounded bg-white/5 text-[#5fdee7] hover:text-[#ffd700] text-left font-mono"
              >
                HTML Sitemap
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStandards();
                }}
                className="p-2 rounded bg-white/5 text-slate-300 hover:text-[#ffd700] text-left"
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
