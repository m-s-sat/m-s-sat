'use client';

import { useEffect, useRef } from 'react';

export default function ScrollFx() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spins = Array.from(document.querySelectorAll<HTMLElement>('[data-spin]'));
    const pars = Array.from(document.querySelectorAll<HTMLElement>('[data-par]')).map((el) => ({
      el,
      s: parseFloat(el.dataset.par || '0') || 0,
    }));

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let angle = 0;
    let lastY = window.scrollY;
    let vel = 0;
    let rafId = 0;

    const tick = () => {
      const y = window.scrollY;
      vel = vel * 0.82 + (y - lastY) * 0.18;
      lastY = y;

      if (!reduceMotion) {
        angle += 0.06 + vel * 0.09;
        for (const el of spins) el.style.transform = `rotate(${angle.toFixed(2)}deg)`;
      }

      const vh = window.innerHeight;
      const parScale = reduceMotion ? 0.3 : 1;
      for (const { el, s } of pars) {
        const rect = el.getBoundingClientRect();
        const off = (rect.top + rect.height / 2 - vh / 2) * s * parScale;
        el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
      }

      const doc = document.documentElement;
      const max = doc.scrollHeight - vh || 1;
      if (barRef.current) {
        barRef.current.style.width = `${Math.min(100, (y / max) * 100).toFixed(2)}%`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed left-0 top-0 z-[300] h-0.5 bg-acc"
      style={{ width: '0%' }}
    />
  );
}
