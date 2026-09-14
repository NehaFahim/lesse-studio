'use client';

import React, { useEffect, useRef } from 'react';

interface Logo3DProps {
  className?: string;
  size?: number;
}

export const Logo3D: React.FC<Logo3DProps> = ({ className = '', size = 160 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0;
    let angleY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    // Set high DPI canvas resolution
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // 3D icosahedron/cube vertices
    const vertices: [number, number, number][] = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1],
      [0, -1.8, 0], [0, 1.8, 0], [-1.8, 0, 0], [1.8, 0, 0]
    ];

    // Edges connecting vertices
    const edges: [number, number][] = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
      [8, 0], [8, 1], [8, 4], [8, 5],
      [9, 2], [9, 3], [9, 6], [9, 7],
      [10, 0], [10, 3], [10, 4], [10, 7],
      [11, 1], [11, 2], [11, 5], [11, 6]
    ];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      targetAngleY = x * 0.8;
      targetAngleX = -y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      // Smooth interpolation
      angleX += (targetAngleX - angleX) * 0.05 + 0.005;
      angleY += (targetAngleY - angleY) * 0.05 + 0.008;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projected: [number, number, number][] = [];
      const scale = size * 0.22;
      const cx = size / 2;
      const cy = size / 2;

      // Project 3D points
      for (const [x, y, z] of vertices) {
        // Rotate Y
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        // Rotate X
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        // Perspective projection
        const fov = 3.5;
        const distance = fov / (fov + z2 * 0.3);
        const px = cx + x1 * scale * distance;
        const py = cy + y2 * scale * distance;

        projected.push([px, py, z2]);
      }

      // Check current dark mode class on document
      const isDark = document.documentElement.classList.contains('dark');
      const strokeColor = isDark ? 'rgba(255, 255, 255, 0.75)' : 'rgba(18, 18, 18, 0.75)';
      const nodeColor = isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(18, 18, 18, 0.9)';

      // Draw edges with depth sorting opacity
      for (const [i, j] of edges) {
        const p1 = projected[i];
        const p2 = projected[j];
        const avgZ = (p1[2] + p2[2]) / 2;
        const alpha = Math.max(0.15, Math.min(0.9, (avgZ + 2) / 4));

        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.strokeStyle = isDark
          ? `rgba(240, 240, 240, ${alpha})`
          : `rgba(18, 18, 18, ${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Draw vertices
      for (const [px, py, z] of projected) {
        const alpha = Math.max(0.2, (z + 2) / 4);
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(18, 18, 18, ${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ width: `${size}px`, height: `${size}px` }}
        className="cursor-grab active:cursor-grabbing transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};
