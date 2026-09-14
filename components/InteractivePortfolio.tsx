'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES, CaseStudy } from '../data/projects';
import { LayoutGrid, List, ArrowUpRight, X, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';

interface InteractivePortfolioProps {
  onOpenInquiry: () => void;
}

export const InteractivePortfolio: React.FC<InteractivePortfolioProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ['ALL', 'DIGITAL PRODUCTS', 'BRAND IDENTITY', 'CREATIVE TECH', 'AI & SPATIAL'];

  const filteredStudies = selectedCategory === 'ALL'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category.toUpperCase() === selectedCategory);

  return (
    <section id="works" className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2 font-semibold">
              [SELECTED WORKS 2024–2026]
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white uppercase">
              High-Craft Portfolio
            </h2>
          </div>

          {/* View Mode & Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Toggle */}
            <div className="flex items-center p-1 rounded border border-white/15 bg-neutral-900/60">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#0d0d0d]'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white text-[#0d0d0d]'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded text-xs font-mono font-semibold tracking-wider transition-all uppercase whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white text-[#0d0d0d]'
                  : 'border border-white/15 hover:border-white text-neutral-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveCaseStudy(item)}
                className="group cursor-pointer border border-white/10 rounded-xl overflow-hidden bg-neutral-900/40 hover:border-white/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-[#0d0d0d]/80 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase border border-white/10">
                    {item.category}
                  </div>
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded bg-white/90 backdrop-blur-md text-[#0d0d0d] text-[10px] font-mono font-bold">
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400 uppercase">{item.client}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:underline">
                    {item.title}
                  </h3>

                  <p className="text-xs font-sans text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Metrics Badges */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2">
                    {item.metrics.map((m, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono font-semibold text-neutral-300 border border-white/5"
                      >
                        {m.label}: <strong className="text-white">{m.value}</strong>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredStudies.map((item) => (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveCaseStudy(item)}
                className="group cursor-pointer p-6 border border-white/10 rounded-xl bg-neutral-900/40 hover:border-white/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm font-mono text-neutral-400 font-bold hidden sm:inline">
                    {item.year}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block">
                      {item.category} • {item.client}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:underline">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden lg:flex items-center gap-2">
                    {item.metrics.map((m, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-neutral-800/80 text-xs font-mono text-neutral-300 border border-white/10">
                        {m.value}
                      </span>
                    ))}
                  </div>
                  <button className="px-4 py-2 rounded border border-white/20 text-xs font-mono font-semibold text-white group-hover:bg-white group-hover:text-[#0d0d0d] transition-colors flex items-center gap-1">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Detail Modal / Drawer */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#141414] text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 p-6 sm:p-10 relative space-y-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/20 hover:bg-white hover:text-[#121212] transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Case Header */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-white text-[#0d0d0d] font-bold">
                    {activeCaseStudy.category}
                  </span>
                  <span className="text-neutral-400">CLIENT: {activeCaseStudy.client}</span>
                  <span className="text-neutral-400">YEAR: {activeCaseStudy.year}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                  {activeCaseStudy.title}
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  {activeCaseStudy.tagline}
                </p>
              </div>

              {/* Showcase Image */}
              <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/9] relative">
                <Image
                  src={activeCaseStudy.thumbnail}
                  alt={activeCaseStudy.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 80vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Key Outcomes / Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-neutral-900/80 border border-white/10">
                {activeCaseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">{m.label}</span>
                    <p className="text-lg font-bold font-mono text-white">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Overview, Challenge, Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm space-y-0">
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-400">
                    THE OVERVIEW & CHALLENGE
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {activeCaseStudy.overview}
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    {activeCaseStudy.challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-400">
                    OUR ARCHITECTURAL SOLUTION
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {activeCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables & Tech Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-neutral-400 uppercase block mb-3 font-bold">DELIVERABLES</span>
                  <ul className="space-y-2">
                    {activeCaseStudy.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-neutral-400 uppercase block mb-3 font-bold">TECHNOLOGY STACK</span>
                  <div className="flex flex-wrap gap-2">
                    {activeCaseStudy.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setActiveCaseStudy(null);
                    onOpenInquiry();
                  }}
                  className="px-6 py-3 rounded bg-white text-[#0d0d0d] text-xs font-mono font-semibold uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>REQUEST SIMILAR PRODUCT ARCHITECTURE</span>
                </button>

                {activeCaseStudy.liveUrl && (
                  <a
                    href={activeCaseStudy.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono font-semibold flex items-center gap-1.5 text-neutral-300 hover:text-white hover:underline"
                  >
                    <span>VISIT PROTOTYPE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
