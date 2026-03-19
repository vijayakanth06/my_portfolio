import { useEffect, useRef, useCallback } from 'react';

/**
 * Intersection Observer hook for scroll-reveal animations.
 * Adds 'visible' class to elements when they enter the viewport.
 *
 * @param {Object} options
 * @param {number} options.threshold - 0 to 1, how much of element must be visible
 * @param {string} options.rootMargin - margin around root
 * @returns {Function} ref callback to attach to elements
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const observerRef = useRef(null);
  const elementsRef = useRef(new Set());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe any already-registered elements
    elementsRef.current.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [threshold, rootMargin]);

  const ref = useCallback((node) => {
    if (node) {
      elementsRef.current.add(node);
      observerRef.current?.observe(node);
    }
  }, []);

  return ref;
}

/**
 * Hook to observe a single container and reveal all .reveal children.
 * Call once per section.
 */
export function useRevealSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = section.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
            reveals.forEach((el) => el.classList.add('visible'));
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return sectionRef;
}
