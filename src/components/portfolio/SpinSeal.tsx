'use client';

import { useId, type ReactNode } from 'react';

type SpinSealProps = {
  text: string;
  className?: string;
  center?: ReactNode;
  backdrop?: boolean;
};

export default function SpinSeal({ text, className = '', center, backdrop }: SpinSealProps) {
  const id = `seal-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div data-spin className={className}>
      <svg viewBox="0 0 200 200" className="h-full w-full" style={{ overflow: 'visible' }}>
        <defs>
          <path id={id} d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        {backdrop && <circle cx={100} cy={100} r={86} fill="rgba(15,17,19,.55)" />}
        <text
          className={backdrop ? 'fill-cream' : 'fill-current'}
          style={{ fontSize: 15, letterSpacing: '.26em' }}
          opacity={backdrop ? 1 : 0.5}
        >
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
        {center ?? <circle cx={100} cy={100} r={7} className="fill-acc" />}
      </svg>
    </div>
  );
}
