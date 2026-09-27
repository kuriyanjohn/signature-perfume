import React, { useEffect, useRef } from 'react';

export default function GoldDustParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particlesCount = Math.min(Math.floor(window.innerWidth / 20), 65);
    const particles = Array.from({ length: particlesCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.5,
      color: `rgba(${195 + Math.random() * 60}, ${155 + Math.random() * 60}, ${40 + Math.random() * 50}, ${0.15 + Math.random() * 0.45})`,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.15 - Math.random() * 0.35,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.y < 0) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        const currentAlpha = 0.2 + Math.sin(p.pulse) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d\.]+\)$/, `${currentAlpha})`);
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
