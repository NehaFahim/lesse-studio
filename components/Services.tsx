'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/projects';
import { ChevronDown, ArrowUpRight, Check, Layers, Cpu, Code2, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expanded, setExpanded] = useState<string>('01');

  const getIcon = (num: string) => {
    switch (num) {
      case '01': return <Layers className="w-5 h-5 text-emerald-500" />;
      case '02': return <Code2 className="w-5 h-5 text-emerald-500" />;
      case '03': return <Cpu className="w-5 h-5 text-emerald-500" />;
      case '04': return <Sparkles className="w-5 h-5 text-emerald-500" />;
      default: return null;
    }
  };

  return (
    <section id="services" className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2 font-semibold">
            [CAPABILITIES & ARCHITECTURE]
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white uppercase">
            Services & Core Systems
          </h2>
        </div>

        {/* Accordions / Cards List */}
        <div className="space-y-6">
          {SERVICES_DATA.map((service) => {
            const isOpen = expanded === service.number;

            return (
              <motion.div
                key={service.number}
                layout
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-white/80 bg-neutral-900/90 shadow-2xl'
                    : 'border-white/10 bg-neutral-900/40 hover:border-white/30'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setExpanded(isOpen ? '' : service.number)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="text-sm font-mono font-bold text-neutral-500">
                      [{service.number}]
                    </span>
                    <div className="flex items-center gap-3">
                      {getIcon(service.number)}
                      <h3 className="text-xl sm:text-3xl font-display font-bold text-white uppercase">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block text-xs font-mono text-neutral-400 uppercase">
                      {isOpen ? 'COLLAPSE' : 'EXPLORE'}
                    </span>
                    <div className={`p-2 rounded-full border border-white/15 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white text-[#0d0d0d]' : 'text-neutral-400'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-8 sm:px-8 border-t border-white/10 pt-6 space-y-6"
                    >
                      <p className="text-base sm:text-lg text-neutral-300 font-sans max-w-3xl leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-mono pt-4">
                        {/* Deliverables */}
                        <div className="space-y-3">
                          <span className="text-neutral-400 uppercase block font-bold">CORE DELIVERABLES</span>
                          <ul className="space-y-2">
                            {service.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-neutral-200">
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                          <span className="text-neutral-400 uppercase block font-bold">CORE STACK & TOOLS</span>
                          <div className="flex flex-wrap gap-2">
                            {service.stack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded bg-white/10 border border-white/15 font-semibold text-neutral-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 flex justify-end">
                        <button
                          onClick={() => onSelectService(service.title)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white text-[#0d0d0d] text-xs font-mono font-semibold uppercase hover:bg-neutral-200 transition-colors"
                        >
                          <span>INQUIRE FOR THIS SERVICE</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
