import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface NeuralCoreProps {
  active?: boolean;
  processing?: boolean;
  speaking?: boolean;
}

const NeuralCore: React.FC<NeuralCoreProps> = ({ active = true, processing = false, speaking = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const particleCount = 40;

    const init = () => {
      canvas.width = 200;
      canvas.height = 200;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: i % 2 === 0 ? '#84cc16' : '#22d3ee'
        });
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 60 + (processing ? Math.sin(time / 100) * 10 : 0) + (speaking ? Math.sin(time / 50) * 15 : 0);

      // Draw Core Glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, speaking ? 'rgba(34, 211, 238, 0.4)' : 'rgba(132, 204, 22, 0.2)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw Particles
      particles.forEach((p, i) => {
        p.x += p.vx * (processing ? 3 : 1);
        p.y += p.vy * (processing ? 3 : 1);

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Pull towards center
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > radius) {
          p.vx += dx * 0.0001;
          p.vy += dy * 0.0001;
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 40) {
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 1 - dist / 40;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      // Draw Central Ring
      ctx.strokeStyle = speaking ? '#22d3ee' : '#84cc16';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.4, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw(0);

    return () => cancelAnimationFrame(animationFrameId);
  }, [processing, speaking]);

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div 
        animate={{ 
          scale: speaking ? [1, 1.2, 1] : [1, 1.05, 1],
          rotate: processing ? 360 : 0
        }}
        transition={{ 
          duration: speaking ? 0.5 : 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`w-12 h-12 rounded-full border-2 ${speaking ? 'border-cyber-accent shadow-[0_0_20px_#22d3ee]' : 'border-cyber-accent shadow-[0_0_15px_#84cc16]'} flex items-center justify-center z-10 bg-black/50 backdrop-blur-sm`}
      >
        <div className={`w-4 h-4 rounded-full ${speaking ? 'bg-cyber-accent animate-pulse' : 'bg-cyber-accent'}`}></div>
      </motion.div>
    </div>
  );
};

export default NeuralCore;
