import Magnetic from './Magnetic';
import SpinSeal from './SpinSeal';
import { heroStats, contactInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-[clamp(18px,3.2vw,44px)] pb-[34px]"
    >
      <div
        data-par="-0.1"
        className="pointer-events-none absolute -right-[8%] -top-[14%] h-[52vw] w-[52vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at 40% 40%, rgba(58,107,91,.20), rgba(58,107,91,0) 62%)',
        }}
      />
      <div
        data-par="0.06"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,17,19,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(15,17,19,.045) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
        }}
      />
      <div
        data-par="-0.22"
        className="pointer-events-none absolute bottom-[16%] left-[clamp(18px,3.2vw,44px)] hidden select-none font-serif text-[clamp(120px,20vw,300px)] leading-[.8] text-transparent [-webkit-text-stroke:1px_rgba(15,17,19,.07)] sm:block"
      >
        engineer
      </div>

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center pt-[130px]">
        <div className="mb-[clamp(18px,2.6vw,30px)] flex items-center gap-[11px]">
          <span className="ms-pulse h-[7px] w-[7px] rounded-full bg-acc" />
          <span className="text-xs font-medium uppercase tracking-[.16em] text-acc">
            Available for SDE roles &amp; internships
          </span>
        </div>
        <h1 className="text-[clamp(50px,11.5vw,188px)] font-medium leading-[.85] tracking-[-.045em]">
          <span className="block">MRINAL</span>
          <span className="block font-serif text-acc italic font-normal tracking-[-.02em]">
            Satyarthi
          </span>
        </h1>
        <div className="mt-[clamp(26px,4vw,54px)] flex flex-wrap items-end justify-between gap-9">
          <p className="min-w-0 max-w-[520px] text-pretty text-[clamp(15px,1.25vw,18.5px)] leading-[1.65] text-[#3a4046]">
            Software engineer at <span className="font-medium text-acc">Judix</span>, building AI
            systems that answer legal questions from real Supreme Court judgments — plus the cloud
            infrastructure that keeps them up. B.Tech, IIT Patna.
          </p>
          <div className="flex flex-wrap gap-3">
            <Magnetic
              href="#projects"
              className="items-center gap-3 whitespace-nowrap rounded-full bg-ink px-[26px] py-4 text-[13.5px] tracking-[.02em] text-cream hover:text-cream"
            >
              View selected work <span className="text-[15px]">↓</span>
            </Magnetic>
            <Magnetic
              href={contactInfo.resume}
              target="_blank"
              className="items-center gap-3 whitespace-nowrap rounded-full border border-ink/18 px-[26px] py-4 text-[13.5px] tracking-[.02em]"
            >
              Résumé <span className="text-[15px]">↗</span>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-wrap items-center justify-between gap-5 border-t border-ink/12 pt-[26px]">
        <div className="flex flex-wrap gap-[clamp(22px,3.5vw,58px)]">
          {heroStats.map((s) => (
            <div key={s.label}>
              <div className="mb-1.5 text-[10.5px] uppercase tracking-[.16em] text-mut">{s.label}</div>
              <div className="text-sm">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10.5px] uppercase tracking-[.16em] text-mut">Scroll</span>
          <span className="ms-drop text-base text-acc">↓</span>
        </div>
      </div>

      <SpinSeal
        text="OPEN TO WORK · SOFTWARE ENGINEER · 2026 · "
        className="pointer-events-none absolute right-[clamp(18px,3.4vw,52px)] top-[clamp(96px,13vh,150px)] h-[clamp(96px,9vw,132px)] w-[clamp(96px,9vw,132px)] max-[860px]:right-[12px] max-[860px]:top-[72px] max-[860px]:h-[76px] max-[860px]:w-[76px] max-[520px]:hidden"
      />
    </section>
  );
}
