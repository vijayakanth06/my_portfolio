import { useCallback, useRef } from 'react';

/**
 * 3D tilt hook for project cards.
 * Returns onMouseMove, onMouseLeave, and ref to attach.
 * Card tilts toward cursor with perspective transform.
 *
 * @param {Object} options
 * @param {number} options.maxTilt - max degrees of tilt (default 8)
 * @param {number} options.perspective - perspective distance in px (default 800)
 * @param {number} options.scale - scale on hover (default 1.02)
 */
export function use3DTilt({ maxTilt = 8, perspective = 800, scale = 1.02 } = {}) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    card.style.transition = 'transform 0.1s ease';
  }, [maxTilt, perspective, scale]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.transition = 'transform 0.4s ease';
  }, []);

  return { cardRef, handleMouseMove, handleMouseLeave };
}
