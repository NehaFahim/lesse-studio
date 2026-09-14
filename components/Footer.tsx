'use client';

import React from 'react';
import { ArrowUp, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#0a0a0a] text-white border-t border-white/10 font-mono text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <span className="text-xl font-display font-extrabold tracking-tighter uppercase text-white">
              LESSE STUDIO®
            </span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Design & Technology Studio crafting digital interfaces, brand systems, and high-performance applications for ambitious brands worldwide.
            </p>
          </div>


          {/* Col 3: Navigation */}
          <div className="space-y-2">
            <span className="text-neutral-400 uppercase block font-bold">NAVIGATION</span>
            <div className="flex flex-col space-y-1 text-neutral-300">
              <a href="#works" className="hover:text-white hover:underline transition-colors">SELECTED WORKS</a>
              <a href="#services" className="hover:text-white hover:underline transition-colors">SERVICES & SYSTEMS</a>
              <a href="#philosophy" className="hover:text-white hover:underline transition-colors">STUDIO MANIFESTO</a>
              <a href="#awards" className="hover:text-white hover:underline transition-colors">HONORS & RECOGNITION</a>
              <a href="#inquiry" className="hover:text-white hover:underline transition-colors">PROJECT INQUIRY</a>
            </div>
          </div>

          {/* Col 4: Direct Inquiries */}
          <div className="space-y-2">
            <span className="text-neutral-400 uppercase block font-bold">DIRECT INQUIRIES</span>
            <a
              href="mailto:hello@lessestudio.com"
              className="text-sm font-bold text-white hover:underline block"
            >
              hello@lessestudio.com
            </a>
            <p className="text-neutral-400 text-[11px] leading-relaxed pt-1">
              Available worldwide for commissions, architectural systems, and digital product partnerships.
            </p>
          </div>
        </div>

        {/* Large Typography Watermark */}
        <div className="py-4 text-center select-none overflow-hidden">
          <h1 className="text-[12vw] font-display font-extrabold tracking-tighter leading-none opacity-10 uppercase text-white">
            LESSE STUDIO
          </h1>
        </div>

        {/* Bottom Legal & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-[11px]">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>© {new Date().getFullYear()} LESSE STUDIO LLC. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 hover:bg-white hover:text-[#0d0d0d] text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
