'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Sparkles, Calculator, Copy, Check, ArrowRight } from 'lucide-react';

interface ProjectInquiryProps {
  initialService?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const ProjectInquiry: React.FC<ProjectInquiryProps> = ({
  initialService = '',
  isOpen = false,
  onClose,
}) => {
  const [services, setServices] = useState<string[]>(initialService ? [initialService] : []);
  const [budget, setBudget] = useState<string>('$30,000 — $60,000');
  const [timeline, setTimeline] = useState<string>('6 — 8 WEEKS');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const [prevInitial, setPrevInitial] = useState(initialService);

  if (initialService !== prevInitial) {
    setPrevInitial(initialService);
    if (initialService && !services.includes(initialService)) {
      setServices((prev) => (prev.includes(initialService) ? prev : [...prev, initialService]));
    }
  }

  const availableServices = [
    'Digital Product Design & Systems',
    'Brand Architecture & Identity',
    'Creative Engineering & WebGL',
    'AI Workflows & Spatial Tools',
    'Mobile Application Development',
    'Full-Spectrum Digital Retainer',
  ];

  const budgetOptions = [
    '$15,000 — $30,000',
    '$30,000 — $60,000',
    '$60,000 — $120,000',
    '$120,000+',
  ];

  const timelineOptions = [
    '3 — 4 WEEKS (RUSH)',
    '6 — 8 WEEKS (STANDARD)',
    '10 — 14 WEEKS (ENTERPRISE)',
    'ONGOING RETAINER',
  ];

  const toggleService = (srv: string) => {
    if (services.includes(srv)) {
      setServices(services.filter((s) => s !== srv));
    } else {
      setServices([...services, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const copyDirectEmail = () => {
    navigator.clipboard.writeText('hello@lessestudio.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="inquiry" className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2 font-semibold">
              [START A COLLABORATION]
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white uppercase">
              Project Inquiry & Estimator
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">DIRECT EMAIL:</span>
            <button
              onClick={copyDirectEmail}
              className="px-3 py-1.5 rounded border border-white/15 bg-neutral-900/60 text-xs font-mono font-semibold flex items-center gap-1.5 text-neutral-200 hover:bg-white hover:text-[#0d0d0d] transition-colors"
            >
              <span>hello@lessestudio.com</span>
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Inquiry Box */}
        <div className="bg-neutral-900/60 border border-white/15 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center space-y-6 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold uppercase text-white">
                INQUIRY DISPATCHED
              </h3>
              <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                Thank you <strong className="text-white">{name}</strong>. Our partner directors review every submission directly. We will get back to <span className="underline text-emerald-400">{email}</span> within 24 hours with an initial scope proposal.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="px-6 py-2.5 rounded bg-white text-[#0d0d0d] text-xs font-mono font-semibold uppercase hover:bg-neutral-200 transition-colors"
              >
                SUBMIT ANOTHER INQUIRY
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Select Services */}
              <div className="space-y-4">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block">
                  01 / WHAT SERVICES DOES YOUR PROJECT REQUIRE?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {availableServices.map((srv) => {
                    const isSelected = services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-white bg-white text-[#0d0d0d] font-bold shadow-md'
                            : 'border-white/10 hover:border-white/30 text-neutral-300 hover:text-white bg-neutral-900/40'
                        }`}
                      >
                        <span>{srv}</span>
                        {isSelected && <Check className="w-4 h-4 ml-2 text-[#0d0d0d]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Estimated Budget */}
              <div className="space-y-4">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block">
                  02 / ESTIMATED BUDGET RANGE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setBudget(opt)}
                      className={`p-3.5 rounded-xl border text-center text-xs font-mono font-semibold transition-all ${
                        budget === opt
                          ? 'border-white bg-white text-[#0d0d0d]'
                          : 'border-white/10 hover:border-white/30 text-neutral-300 hover:text-white bg-neutral-900/40'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Estimated Timeline */}
              <div className="space-y-4">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block">
                  03 / TARGET LAUNCH TIMELINE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timelineOptions.map((tl) => (
                    <button
                      type="button"
                      key={tl}
                      onClick={() => setTimeline(tl)}
                      className={`p-3.5 rounded-xl border text-center text-xs font-mono font-semibold transition-all ${
                        timeline === tl
                          ? 'border-white bg-white text-[#0d0d0d]'
                          : 'border-white/10 hover:border-white/30 text-neutral-300 hover:text-white bg-neutral-900/40'
                      }`}
                    >
                      {tl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="space-y-6 pt-6 border-t border-white/10">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block">
                  04 / CLIENT DETAILS & OVERVIEW
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-white/15 bg-neutral-950/60 text-sm text-white focus:outline-none focus:border-white transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-white/15 bg-neutral-950/60 text-sm text-white focus:outline-none focus:border-white transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">
                      COMPANY / BRAND
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kroma Labs"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-white/15 bg-neutral-950/60 text-sm text-white focus:outline-none focus:border-white transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">
                    PROJECT SUMMARY / GOALS
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your vision, scope, or key challenges..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-white/15 bg-neutral-950/60 text-sm text-white focus:outline-none focus:border-white transition-colors font-sans resize-none"
                  />
                </div>
              </div>

              {/* Submit Button & Live Scope Summary */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-xs font-mono text-neutral-400">
                  ESTIMATED SCOPE: <strong className="text-white">{budget}</strong> • <strong className="text-white">{timeline}</strong>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded bg-white text-[#0d0d0d] font-mono font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>DISPATCHING PROPOSAL...</span>
                  ) : (
                    <>
                      <span>DISPATCH INQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
