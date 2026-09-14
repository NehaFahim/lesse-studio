'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AWARDS_LIST } from '../data/projects';
import { Award, Star, ExternalLink, Trophy } from 'lucide-react';

export const AwardsAndStats: React.FC = () => {
  return (
    <section id="awards" className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2 font-semibold">
              [INDUSTRY RECOGNITION]
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white uppercase">
              Honors & Awards
            </h2>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-white/15 bg-neutral-900/60 text-xs font-mono text-neutral-300">
            <Trophy className="w-4 h-4 text-emerald-400" />
            <span>40+ INTERNATIONAL RECOGNITION BADGES</span>
          </div>
        </div>

        {/* Awards Table */}
        <div className="divide-y divide-white/10 border-y border-white/10 font-mono text-xs">
          {AWARDS_LIST.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.04] px-4 transition-colors rounded"
            >
              <div className="flex items-center gap-6">
                <span className="text-neutral-400 font-bold">{award.year}</span>
                <span className="text-base font-bold text-white font-display tracking-tight">
                  {award.title}
                </span>
              </div>

              <div className="flex items-center gap-4 text-neutral-400">
                <span>{award.body}</span>
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Agency Partners / Press Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-6 text-center">
            FEATURED IN & TRUSTED BY INNOVATORS
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center text-center font-display font-extrabold text-neutral-500 text-lg uppercase tracking-wider">
            <span className="hover:text-white transition-colors cursor-default">AWWWARDS</span>
            <span className="hover:text-white transition-colors cursor-default">FWA</span>
            <span className="hover:text-white transition-colors cursor-default">CODROPS</span>
            <span className="hover:text-white transition-colors cursor-default">SITE INSPIRE</span>
            <span className="hover:text-white transition-colors cursor-default">RED DOT</span>
            <span className="hover:text-white transition-colors cursor-default">MINDSPARKLE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
