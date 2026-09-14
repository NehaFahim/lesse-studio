'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MANIFESTO_ITEMS } from '../data/projects';
import { Terminal, Shield, Zap, Compass } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const getIcon = (code: string) => {
    switch (code) {
      case '01': return <Terminal className="w-5 h-5 text-emerald-500" />;
      case '02': return <Zap className="w-5 h-5 text-emerald-500" />;
      case '03': return <Compass className="w-5 h-5 text-emerald-500" />;
      case '04': return <Shield className="w-5 h-5 text-emerald-500" />;
      default: return null;
    }
  };

  return (
    <section id="philosophy" className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2 font-semibold">
              [AGENCY MANIFESTO]
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white uppercase">
              Studio Philosophy
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-md leading-relaxed">
            We reject the bloat of traditional agencies. We operate as a high-density collective of senior designers and systems engineers who write real code.
          </p>
        </div>

        {/* Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {MANIFESTO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:border-white/40 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-500">
                    [{item.code}]
                  </span>
                  {getIcon(item.code)}
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                  {item.body}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                LESS STUDIO PROTOCOL • PRINCIPLE {item.code}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
