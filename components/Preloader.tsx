'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo3D } from './Logo3D';

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0d0d0d] text-white flex flex-col justify-between p-8 sm:p-16 select-none"
        >
          {/* Top Preloader Row */}
          <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
            <span>LESSE STUDIO®</span>
            <span>INITIALIZING ENGINE...</span>
          </div>

          {/* Center 3D Logo & Percentage */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <Logo3D size={180} />

            <div className="text-center space-y-2">
              <span className="text-6xl sm:text-8xl font-display font-extrabold tracking-tighter text-white">
                {Math.min(progress, 100).toString().padStart(3, '0')}%
              </span>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                CRAFT AT SCALE • DESIGN & TECHNOLOGY
              </p>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full space-y-2">
            <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className="flex justify-between font-mono text-[10px] text-neutral-400">
              <span>NYC / BERLIN / TOKYO</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
