import React, { useState } from 'react';
import { X, Mail, Phone, Send, CheckCircle2, MessageSquare, ShieldAlert } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-2xl w-full bg-[#081c18] border border-[#5fdee7]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 text-slate-300 hover:bg-[#ffd700] hover:text-slate-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-[#0b2721] border border-[#5fdee7] text-[#5fdee7]">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Contact the Editorial Desk</h2>
            <p className="text-xs font-mono text-[#5fdee7]">DIRECT ENCRYPTED COMMS &amp; TELEMETRY LAB DESK</p>
          </div>
        </div>

        {/* Verified Contact Details Box */}
        <div className="mb-6 p-4 rounded-xl bg-[#0b2721] border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Official Editorial Email</div>
            <a
              href="mailto:sagheerofficial21dnb@gmail.com"
              className="text-xs font-mono font-bold text-[#ffd700] hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#5fdee7]" />
              <span className="break-all">sagheerofficial21dnb@gmail.com</span>
            </a>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Phone &amp; WhatsApp Wire</div>
            <a
              href="tel:03069256639"
              className="text-xs font-mono font-bold text-[#ffd700] hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#5fdee7]" />
              <span>03069256639</span>
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white">Transmission Received</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Your inquiry has been assigned secure ticket <code className="text-[#5fdee7] font-mono">#TNV-8291</code>. Our senior editorial team typically reviews hardware tips within 4 to 8 business hours.
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
                  placeholder="e.g. Alex Jensen"
                  className="w-full px-3 py-2 rounded-lg bg-[#061411] border border-white/10 text-white text-xs focus:border-[#ffd700] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@domain.com"
                  className="w-full px-3 py-2 rounded-lg bg-[#061411] border border-white/10 text-white text-xs focus:border-[#ffd700] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Topic / Inquiry Category</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#061411] border border-white/10 text-white text-xs focus:border-[#ffd700] focus:outline-none transition-colors font-mono"
              >
                <option value="Hardware Benchmark Tip">Hardware Benchmark Tip</option>
                <option value="Correction or Data Clarification">Correction or Data Clarification</option>
                <option value="Research Submission / Paper Inquiry">Research Submission / Paper Inquiry</option>
                <option value="Hardware Teardown Sample Offer">Hardware Teardown Sample Offer</option>
                <option value="Press &amp; Media Interview">Press &amp; Media Interview</option>
                <option value="General Editorial Feedback">General Editorial Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Message / Telemetry Data</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Detail your inquiry, hardware specifications, or benchmark feedback..."
                className="w-full px-3 py-2 rounded-lg bg-[#061411] border border-white/10 text-white text-xs focus:border-[#ffd700] focus:outline-none transition-colors"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                Encrypted via TLS 1.3 · Zero SPAM
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-lg bg-[#ffd700] text-slate-950 font-bold text-xs hover:bg-[#ffcc00] btn-yellow-hover flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,215,0,0.4)]"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
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
