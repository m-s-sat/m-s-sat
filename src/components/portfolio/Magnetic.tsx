'use client';

import { useRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';

type MagneticProps = ComponentPropsWithoutRef<'a'> & {
  children: ReactNode;
  strength?: number;
};

export default function Magnetic({
  children,
  strength = 1,
  className = '',
  onMouseMove,
  onMouseLeave,
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      className={`inline-flex transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] ${className}`}
      onMouseMove={(e) => {
        const el = ref.current;
        if (el) {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) * 0.18 * strength;
          const dy = (e.clientY - (r.top + r.height / 2)) * 0.28 * strength;
          el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
        }
        onMouseMove?.(e);
      }}
      onMouseLeave={(e) => {
        if (ref.current) ref.current.style.transform = 'none';
        onMouseLeave?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
