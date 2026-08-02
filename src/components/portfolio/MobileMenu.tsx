'use client';

import { useEffect } from 'react';
import { navLinks, contactInfo } from '@/data/portfolio';
import { useAppDispatch } from '@/lib/hooks';
import { closeNav } from '@/lib/features/uiSlice';

type MobileMenuProps = {
  open: boolean;
};

export default function MobileMenu({ open }: MobileMenuProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch(closeNav());
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dispatch]);

  return (
    <div
      className={`fixed inset-0 z-[250] flex flex-col justify-center gap-1 overflow-y-auto bg-ink px-[clamp(22px,7vw,60px)] pb-[30px] pt-[78px] text-cream transition-opacity duration-[350ms] ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={() => dispatch(closeNav())}
        className="absolute right-[clamp(18px,3.2vw,44px)] top-[22px] rounded-full border border-cream/25 px-[18px] py-3 text-[12.5px] tracking-[.08em]"
      >
        CLOSE ✕
      </button>

      {navLinks.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          onClick={() => dispatch(closeNav())}
          className="text-[clamp(34px,10vw,64px)] leading-[1.18] tracking-[-.035em]"
        >
          {l.label}
        </a>
      ))}
      <a
        href="#contact"
        onClick={() => dispatch(closeNav())}
        className="font-serif text-[clamp(34px,10vw,64px)] italic leading-[1.18] tracking-[-.02em] text-acc"
      >
        Get in touch
      </a>

      <div className="mt-auto flex flex-wrap gap-[18px] pt-[30px] text-xs uppercase tracking-[.1em] text-cream/50">
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={contactInfo.resume} target="_blank" rel="noopener noreferrer">
          Résumé
        </a>
      </div>
    </div>
  );
}
