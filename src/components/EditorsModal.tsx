import React from 'react';
import { X, Users, Mail, BookOpen, Award, CheckCircle } from 'lucide-react';
import { EDITORS } from '../data/articles';

interface EditorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditorsModal: React.FC<EditorsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-4xl w-full bg-[#081c18] border border-[#5fdee7]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-[#0b2721] border border-[#5fdee7] text-[#5fdee7]">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Editorial Board &amp; Hardware Engineers</h2>
            <p className="text-xs font-mono text-[#5fdee7]">THE TELEMETRY ARCHITECTS BEHIND TECHNOVAHUBS</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          Our senior masthead brings over four decades of combined experience across semiconductor verification, acoustic engineering, distributed AI training, and Linux kernel cryptanalysis.
        </p>

        {/* Editors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EDITORS.map((editor, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#0b2721] border border-white/10 hover:border-[#ffd700] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={editor.avatar}
                    alt={editor.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#5fdee7]/50 group-hover:border-[#ffd700] transition-colors shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#ffd700] transition-colors">
                      {editor.name}
                    </h3>
                    <div className="text-xs text-[#5fdee7] font-medium leading-tight">
                      {editor.role}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {editor.specialty}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {editor.bio}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-[#ffd700] font-semibold">{editor.articlesWritten} Technical Papers</span>
                <a
                  href={`mailto:${editor.contactEmail}`}
                  className="hover:text-[#5fdee7] transition-colors flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Official Newsroom Note */}
        <div className="mt-6 p-4 rounded-xl bg-[#061411] border border-[#5fdee7]/30 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
          <div>
            <span>Newsroom Desk:</span>{' '}
            <a href="mailto:ahmadali07121@gmail.com" className="text-[#ffd700] hover:underline">
              ahmadali07121@gmail.com
            </a>
          </div>
          <div>
            <span>Direct Phone / WhatsApp:</span>{' '}
            <a href="tel:03069256639" className="text-[#5fdee7] hover:underline">
              03069256639
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors"
          >
            Close Editorial Board
          </button>
        </div>
      </div>
    </div>
  );
};
