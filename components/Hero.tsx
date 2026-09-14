'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Logo3D } from './Logo3D';
import { ArrowDown, ArrowUpRight, Sparkles, Code, Cpu, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const tickerItems = [
    'BRAND ARCHITECTURE',
    'DIGITAL PRODUCTS',
    'WEBGL & SHADERS',
    'CREATIVE ENGINEERING',
    'SYSTEMS & UI KITS',
    'AI & SPATIAL INTERFACES',
    'NEXT.JS & REACT 19',
    'HIGH-PERFORMANCE TECH',
  ];

  const scrollToWorks = () => {
    const elem = document.querySelector('#works');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/15 bg-neutral-900/60 text-xs font-mono font-semibold tracking-wider text-neutral-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>LESSE STUDIO® — ARCHITECTURE & CODE</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-mono text-neutral-400"
          >
            [INDEX 2025/2026] — CRAFT AT SCALE
          </motion.div>
        </div>

        {/* Main Display Title and Interactive 3D Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-bold tracking-tight text-white leading-[1.08] uppercase"
            >
              Design & Tech Studio for Digital Products, Brand Architecture & Creative Code.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-300 font-sans max-w-2xl font-normal leading-relaxed"
            >
              We craft sub-second web applications, bespoke design systems, and AI-powered spatial interfaces for ambitious founders and global technology brands. Zero clutter, pure signal.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-3 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={scrollToWorks}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-[#0d0d0d] font-mono font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all shadow-sm"
              >
                <span>EXPLORE SELECTED WORKS</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 text-white font-mono font-semibold text-xs tracking-wider uppercase hover:bg-white hover:text-[#0d0d0d] transition-colors"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Interactive 3D Wireframe Logo Canvas */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 border border-white/10 rounded-xl bg-neutral-900/40 backdrop-blur-sm">
            <Logo3D size={220} />
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mt-4 text-center">
              INTERACTIVE 3D LOGO ENGINE — DRAG TO ROTATE
            </span>
          </div>
        </div>

        {/* Agency Performance Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-neutral-400 uppercase block">PERFORMANCE AVG</span>
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>99.8% LIGHTHOUSE</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-neutral-400 uppercase block">SHIPPED PRODUCTS</span>
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <Code className="w-4 h-4 text-emerald-400" />
              <span>45+ GLOBAL LAUNCHES</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-neutral-400 uppercase block">CLIENT VALUATION</span>
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>$1.2B+ CREATED</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-neutral-400 uppercase block">RECOGNITION</span>
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>40+ AWWWARDS & FWAs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Horizontal Ticker */}
      <div className="mt-16 border-y border-white/10 bg-white/[0.03] py-3 overflow-hidden select-none">
        <div className="animate-marquee gap-8 items-center text-xs font-mono font-bold tracking-widest text-neutral-200">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-emerald-400">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
