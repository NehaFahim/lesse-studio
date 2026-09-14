'use client';

import React, { useEffect, useRef } from 'react';

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  color: string;
}

export const SpatialBackground3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse state with smooth damping
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -1 and 1
      mouse.targetX = (e.clientX / width) * 2 - 1;
      mouse.targetY = (e.clientY / height) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // 3D Particles simulation
    const particleCount = width < 768 ? 55 : 100;
    const depth = 800;
    const fov = 400; // Field of view
    let particles: Particle3D[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() - 0.5) * width * 1.5,
          y: (Math.random() - 0.5) * height * 1.5,
          z: Math.random() * depth,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.3 - 0.2, // gentle forward drift
          baseRadius: Math.random() * 1.6 + 0.8,
          color: Math.random() > 0.85 ? 'rgba(52, 211, 153, ' : 'rgba(255, 255, 255, ',
        });
      }
    };

    initParticles();

    // 3D Rotation angles
    let angleX = 0;
    let angleY = 0;

    const render = () => {
      // Smooth camera interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      angleY = mouse.x * 0.35;
      angleX = -mouse.y * 0.25;

      ctx.clearRect(0, 0, width, height);

      // Subtle dynamic ambient radial spotlight that follows the cursor
      const spotX = (mouse.x + 1) * 0.5 * width;
      const spotY = (mouse.y + 1) * 0.5 * height;
      const gradient = ctx.createRadialGradient(
        spotX,
        spotY,
        0,
        spotX,
        spotY,
        Math.max(width, height) * 0.6
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.04)');
      gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.015)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Calculate 3D projected points
      const projectedPoints: { x: number; y: number; scale: number; alpha: number; color: string }[] = [];

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update positions with subtle floating motion
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around 3D boundaries
        if (p.z <= 0) p.z = depth;
        if (p.z > depth) p.z = 0;
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;

        // 3D rotation matrix
        // Y rotation
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // X rotation
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // 3D perspective projection
        const scale = fov / (fov + z2 + 200);
        const projX = width / 2 + x1 * scale;
        const projY = height / 2 + y1 * scale;

        // Fade based on z-depth
        const alpha = Math.max(0, Math.min(1, 1 - (z2 / depth))) * 0.65;

        projectedPoints.push({
          x: projX,
          y: projY,
          scale: Math.max(0.2, scale * p.baseRadius),
          alpha,
          color: p.color,
        });
      }

      // Draw 3D spatial connections between near neighbors
      const maxDistance = width < 768 ? 110 : 150;
      ctx.lineWidth = 0.75;

      for (let i = 0; i < projectedPoints.length; i++) {
        const pA = projectedPoints[i];
        if (pA.alpha <= 0.05) continue;

        for (let j = i + 1; j < projectedPoints.length; j++) {
          const pB = projectedPoints[j];
          if (pB.alpha <= 0.05) continue;

          const dx = pA.x - pB.x;
          const dy = pA.y - pB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * Math.min(pA.alpha, pB.alpha) * 0.35;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.stroke();
          }
        }
      }

      // Draw 3D projected nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        if (p.alpha <= 0.05) continue;

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <canvas ref={canvasRef} className="w-full h-full block opacity-75" />
      {/* Subtle depth vignette overlay for cinema-grade studio mood */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.85)_100%)] pointer-events-none" />
    </div>
  );
};
