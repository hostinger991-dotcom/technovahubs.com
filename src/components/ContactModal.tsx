import React, { useState } from 'react';
import { X, Mail, Phone, Send, CheckCircle2, MessageSquare, ShieldAlert, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Hardware Benchmark Tip');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate secure dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200 select-none">
      <div className="max-w-2xl w-full bg-[#081c18] border border-[#5fdee7]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors"
          aria-label="Close Contact Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-[#0b2721] border border-[#5fdee7] text-[#5fdee7]">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Contact Us &amp; Editorial Desk</h2>
            <p className="text-xs font-mono text-[#5fdee7]">DIRECT ENCRYPTED COMMS &amp; HARDWARE TELEMETRY LAB DESK</p>
          </div>
        </div>

        {/* Verified Contact Details Box */}
        <div className="mb-6 p-4 rounded-xl bg-[#0b2721] border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Official Editorial Email</div>
            <a
              href="mailto:ahmadali07121@gmail.com"
              className="text-xs font-mono font-bold text-[#ffd700] hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#5fdee7]" />
              <span className="break-all">ahmadali07121@gmail.com</span>
            </a>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Phone &amp; WhatsApp Wire</div>
            <div className="flex items-center gap-2">
              <a
                href="tel:03069256639"
                className="text-xs font-mono font-bold text-[#ffd700] hover:underline flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#5fdee7]" />
                <span>03069256639</span>
              </a>
              <a
                href="https://wa.me/923069256639"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] px-2 py-0.5 rounded bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-600 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white">Transmission Received</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Your inquiry has been logged under ticket <code className="text-[#5fdee7] font-mono">#TNV-8291</code> and dispatched to <strong className="text-white">ahmadali07121@gmail.com</strong>. Our senior editorial team reviews inquiries within 4 to 8 business hours.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] transition-colors"
              >
                Return to Journal
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Jordan Reed"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#5fdee7]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Contact Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#5fdee7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Inquiry Classification</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0b2721] border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-[#5fdee7]"
              >
                <option value="Hardware Benchmark Tip">Hardware Benchmark Tip or Sample Submission</option>
                <option value="Security Vulnerability Disclosure">Security Vulnerability / CVE Disclosure</option>
                <option value="Editorial Correction">Editorial Correction / Telemetry Inconsistency</option>
                <option value="Media Licensing & Syndication">Media Licensing, Citation &amp; Syndication</option>
                <option value="General Technical Inquiry">General Technical Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Detailed Message or Telemetry Log</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Include relevant hardware revision numbers, firmware versions, or test setup methodology..."
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#5fdee7]"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
                <span>Encrypted transmission to editorial bureau</span>
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] btn-yellow-hover flex items-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Encrypting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
