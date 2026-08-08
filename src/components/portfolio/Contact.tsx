import Magnetic from './Magnetic';
import { contactInfo } from '@/data/portfolio';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-[clamp(18px,3.2vw,44px)] pt-[clamp(80px,11vw,160px)] text-cream"
    >
      <div
        data-par="-0.08"
        className="pointer-events-none absolute -left-[6%] -top-[20%] h-[46vw] w-[46vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(58,107,91,.30), rgba(58,107,91,0) 62%)',
        }}
      />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-6 flex items-baseline gap-3.5">
          <span className="font-serif text-[15px] text-acc">05</span>
          <span className="text-[11px] uppercase tracking-[.18em] text-cream/50">Contact</span>
        </div>
        <h2 className="mb-[clamp(30px,4vw,52px)] max-w-[15ch] text-balance text-[clamp(36px,6.4vw,104px)] font-medium leading-[.98] tracking-[-.045em]">
          Let&apos;s build something <span className="font-serif italic text-acc">solid</span>.
        </h2>
        <div className="flex flex-wrap items-end justify-between gap-9 border-b border-cream/14 pb-[clamp(50px,7vw,90px)]">
          <div className="min-w-0 flex flex-col gap-3.5">
            <a
              href={`mailto:${contactInfo.email}`}
              className="[overflow-wrap:anywhere] border-b border-cream/25 pb-1.5 text-[clamp(16px,2.4vw,34px)] tracking-[-.02em]"
            >
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-[clamp(15px,1.4vw,20px)] text-cream/60 hover:text-cream/60">
              {contactInfo.phone}
            </a>
            <span className="text-[13px] text-cream/42">{contactInfo.altEmail}</span>
          </div>
          <div className="flex flex-wrap gap-[11px]">
            <Magnetic
              href={contactInfo.github}
              target="_blank"
              data-cursor-view
              className="items-center whitespace-nowrap rounded-full border border-cream/22 px-[26px] py-[15px] text-[13px] tracking-[.03em]"
            >
              GitHub ↗
            </Magnetic>
            <Magnetic
              href={contactInfo.linkedin}
              target="_blank"
              data-cursor-view
              className="items-center whitespace-nowrap rounded-full border border-cream/22 px-[26px] py-[15px] text-[13px] tracking-[.03em]"
            >
              LinkedIn ↗
            </Magnetic>
            <Magnetic
              href={contactInfo.resume}
              target="_blank"
              className="items-center whitespace-nowrap rounded-full bg-acc px-[26px] py-[15px] text-[13px] tracking-[.03em] text-cream hover:text-cream"
            >
              View résumé ↗
            </Magnetic>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 py-5 text-[11.5px] uppercase tracking-[.08em] text-cream/40">
          <span>© 2026 Mrinal Satyarthi</span>
          <span className="hidden sm:inline">Designed &amp; built end to end</span>
          <a href="#home">Back to top ↑</a>
        </div>
        <div
          data-par="0.05"
          className="overflow-hidden whitespace-nowrap pb-1.5 text-[clamp(60px,15.5vw,240px)] font-medium leading-[.82] tracking-[-.05em] text-transparent [-webkit-text-stroke:1px_rgba(244,241,234,.16)]"
        >
          MRINAL SATYARTHI
        </div>
      </div>
    </section>
  );
}
