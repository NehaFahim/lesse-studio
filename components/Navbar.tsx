'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, ArrowUpRight, Copy, Check, Clock, Globe } from 'lucide-react';

interface NavbarProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [times, setTimes] = useState<{ nyc: string; berlin: string; tokyo: string }>({
    nyc: '--:--',
    berlin: '--:--',
    tokyo: '--:--',
  });

  // Scroll listener for border opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update live world clocks
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      
      const format = (tz: string) =>
        new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);

      setTimes({
        nyc: format('America/New_York'),
        berlin: format('Europe/Berlin'),
        tokyo: format('Asia/Tokyo'),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@lessestudio.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'SELECTED WORKS', href: '#works', index: '01' },
    { label: 'SERVICES & SYSTEMS', href: '#services', index: '02' },
    { label: 'STUDIO PHILOSOPHY', href: '#philosophy', index: '03' },
    { label: 'RECOGNITION & AWARDS', href: '#awards', index: '04' },
    { label: 'PROJECT INQUIRY', href: '#inquiry', index: '05' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === '#inquiry') {
      onOpenInquiry();
    } else {
      const elem = document.querySelector(href);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group text-xl font-extrabold tracking-tighter font-display uppercase text-white"
          >
            <span className="bg-white text-[#0d0d0d] px-2 py-0.5 rounded text-sm font-bold tracking-widest font-mono">
              LESSE
            </span>
            <span className="hidden sm:inline text-xs tracking-widest font-mono text-neutral-400 group-hover:text-white transition-colors">
              STUDIO®
            </span>
          </a>

          {/* World Clocks (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-tight text-neutral-400 border-x border-white/10 px-6">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
              <span className="font-semibold text-neutral-200">NYC</span>
              <span>{times.nyc}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
              <span className="font-semibold text-neutral-200">BERLIN</span>
              <span>{times.berlin}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
              <span className="font-semibold text-neutral-200">TOKYO</span>
              <span>{times.tokyo}</span>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Availability Pill */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AVAIL Q3/Q4</span>
            </div>

            {/* Direct Inquiry CTA */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-white text-[#0d0d0d] text-xs font-mono font-semibold tracking-wider hover:bg-neutral-200 transition-colors"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Menu Drawer Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 text-xs font-mono font-semibold uppercase text-white hover:bg-white/10 transition-colors"
            >
              {menuOpen ? (
                <>
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4" />
                  <span className="hidden sm:inline">MENU</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 lg:px-24 overflow-y-auto"
          >
            {/* Top drawer header note */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 text-xs font-mono text-neutral-400 gap-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>LESSE STUDIO — GLOBAL DESIGN & TECH AGENCY</span>
              </div>
              <div className="flex items-center gap-4">
                <span>NYC / BERLIN / TOKYO</span>
                <span>EST. 2021</span>
              </div>
            </div>

            {/* Menu Links */}
            <div className="my-8 space-y-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.index}
                  whileHover={{ x: 12 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="border-b border-white/10 pb-4"
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left flex items-baseline justify-between group"
                  >
                    <span className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                      {link.label}
                    </span>
                    <span className="text-sm font-mono text-neutral-500 font-bold tracking-widest">
                      [{link.index}]
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Bottom Drawer Footer Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/10 text-xs font-mono">
              {/* Direct Email */}
              <div>
                <span className="text-neutral-500 uppercase block mb-1">NEW PROJECT INQUIRIES</span>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:hello@lessestudio.com"
                    className="text-base font-semibold text-white hover:underline"
                  >
                    hello@lessestudio.com
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1 rounded hover:bg-white/10 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
                  </button>
                </div>
              </div>

              {/* Coordinates */}
              <div>
                <span className="text-neutral-500 uppercase block mb-1">HEADQUARTERS</span>
                <p className="text-neutral-300">
                  40.7128° N, 74.0060° W — Soho Studio<br />
                  New York, NY 10013
                </p>
              </div>

              {/* Studio Status */}
              <div>
                <span className="text-neutral-500 uppercase block mb-1">AVAILABILITY</span>
                <p className="text-neutral-200">
                  Currently accepting 2 select client partnerships for Q3/Q4.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
