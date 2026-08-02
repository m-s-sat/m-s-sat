'use client';

import { useEffect, useState } from 'react';
import Magnetic from './Magnetic';
import MobileMenu from './MobileMenu';
import { navLinks } from '@/data/portfolio';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleNav } from '@/lib/features/uiSlice';
import Image from 'next/image';
import type { Route } from 'next';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const open = useAppSelector((state) => state.ui.navOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { threshold: 0.001, rootMargin: '-45% 0px -45% 0px' },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between gap-4 px-[clamp(18px,3.2vw,44px)] transition-[padding] duration-[400ms] ${scrolled ? 'py-[13px]' : 'py-[22px]'
          }`}
      >
        <a
          href="#home"
          className="flex items-center gap-[11px] rounded-full bg-[rgba(15,17,19,.86)] py-[9px] pl-[10px] pr-[9px] text-[#F4F1EA] backdrop-blur-[14px]"
        >
          <span className="relative block h-[32px] w-[32px] flex-none overflow-hidden rounded-full bg-acc">
            <Image src={"/mrinal.jpg"} alt='profile photo' fill sizes="32px" className='object-cover'></Image>
          </span>
          <span className="max-[700px]:hidden pr-[8px] text-[12.5px] font-medium tracking-[.06em]">
            MRINAL SATYARTHI
          </span>
        </a>

        <div className="flex max-[1040px]:hidden items-center gap-[2px] rounded-full bg-[rgba(15,17,19,.86)] p-[6px] backdrop-blur-[14px]">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`rounded-full px-[16px] py-[9px] text-[12.5px] tracking-[.03em] transition-colors ${active === l.id ? 'bg-[rgba(244,241,234,0.12)] text-[#F4F1EA]' : 'text-[rgba(244,241,234,0.55)] hover:text-[#F4F1EA]'
                }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-[9px]">
          <div className="max-[560px]:hidden">
            <Magnetic
              href="#contact"
              className="flex items-center gap-[9px] whitespace-nowrap rounded-full bg-acc px-[20px] py-[12px] text-[12.5px] font-medium tracking-[.03em] text-[#F4F1EA] shadow-[0_6px_22px_rgba(34,70,58,.28)]"
            >
              <span className="ms-pulse block h-[6px] w-[6px] flex-none rounded-full bg-[#F4F1EA]" />
              Get in touch
            </Magnetic>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => dispatch(toggleNav())}
            className="hidden max-[1040px]:flex items-center gap-[9px] whitespace-nowrap rounded-full bg-[rgba(15,17,19,.86)] px-[18px] py-[12px] text-[12.5px] tracking-[.08em] text-[#F4F1EA] backdrop-blur-[14px]"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-[1.5px] w-[15px] bg-current" />
              <span className="block h-[1.5px] w-[15px] bg-current" />
            </span>
            MENU
          </button>
        </div>
      </nav>

      <MobileMenu open={open} />
    </>
  );
}
