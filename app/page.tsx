'use client';

import React, { useState } from 'react';
import { Preloader } from '../components/Preloader';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { InteractivePortfolio } from '../components/InteractivePortfolio';
import { Services } from '../components/Services';
import { Philosophy } from '../components/Philosophy';
import { AwardsAndStats } from '../components/AwardsAndStats';
import { ProjectInquiry } from '../components/ProjectInquiry';
import { Footer } from '../components/Footer';
import { SpatialBackground3D } from '../components/SpatialBackground3D';

export default function Home() {
  const [inquiryService, setInquiryService] = useState<string>('');

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setInquiryService(serviceName);
    }
    const elem = document.querySelector('#inquiry');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f2f2f2] relative selection:bg-neutral-800 selection:text-white">
      {/* Interactive 3D Spatial Background (Award-winning depth without checkbox/grid clutter) */}
      <SpatialBackground3D />

      {/* Preloader */}
      <Preloader />

      {/* Fixed Top Navigation Bar */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Content wrapper with relative positioning so it sits above 3D canvas */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* Selected Works / Interactive Portfolio */}
        <InteractivePortfolio onOpenInquiry={() => handleOpenInquiry()} />

        {/* Services & Capabilities */}
        <Services onSelectService={(srv) => handleOpenInquiry(srv)} />

        {/* Philosophy & Manifesto */}
        <Philosophy />

        {/* Industry Awards & Stats */}
        <AwardsAndStats />

        {/* Interactive Project Inquiry & Estimator */}
        <ProjectInquiry initialService={inquiryService} />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
