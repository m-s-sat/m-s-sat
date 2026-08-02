'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const el = dotRef.current;
    if (!el) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = '1';
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.('[data-cursor-view]');
      if (!target) return;
      el.style.width = '74px';
      el.style.height = '74px';
      el.textContent = 'OPEN';
    };

    const onOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.('[data-cursor-view]');
      if (!target) return;
      el.style.width = '12px';
      el.style.height = '12px';
      el.textContent = '';
    };

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate(${cx.toFixed(1)}px, ${cy.toFixed(1)}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[400] grid h-3 w-3 place-items-center overflow-hidden rounded-full bg-acc text-[10px] font-medium tracking-[.12em] text-cream opacity-0 transition-[width,height,opacity,background] duration-300 ease-[cubic-bezier(.16,1,.3,1)]"
    />
  );
}
