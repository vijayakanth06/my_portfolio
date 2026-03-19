import React, { useEffect, useRef } from 'react';

/**
 * Animated dot-grid canvas background — Firecrawl's signature look.
 * Dots pulse in a radial wave pattern emanating from center.
 */
const DotGridCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const DOT_SPACING = 28;
    const DOT_BASE_RADIUS = 0.8;
    const DOT_MAX_RADIUS = 1.6;
    const WAVE_SPEED = 0.015;
    const WAVE_LENGTH = 0.03;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let x = DOT_SPACING; x < canvas.width; x += DOT_SPACING) {
        for (let y = DOT_SPACING; y < canvas.height; y += DOT_SPACING) {
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const wave = Math.sin(dist * WAVE_LENGTH - time) * 0.5 + 0.5;

          const radius = DOT_BASE_RADIUS + wave * (DOT_MAX_RADIUS - DOT_BASE_RADIUS);
          const alpha = 0.08 + wave * 0.18;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 180, 180, ${alpha})`;
          ctx.fill();
        }
      }

      time += WAVE_SPEED;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};

export default React.memo(DotGridCanvas);
