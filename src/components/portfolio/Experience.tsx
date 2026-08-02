import Reveal from './Reveal';
import SpinSeal from './SpinSeal';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section
      id="work"
      className="relative border-t border-ink/12 px-[clamp(18px,3.2vw,44px)] pb-[clamp(80px,11vw,150px)] pt-[clamp(60px,8vw,110px)]"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-[clamp(40px,5vw,100px)] min-[860px]:grid-cols-[1fr_2fr]">
        <div className="min-[860px]:sticky top-[124px] max-[860px]:top-[84px]">
          <div className="mb-[22px] flex items-baseline gap-3.5">
            <span className="font-serif text-[15px] text-acc">02</span>
            <span className="text-[11px] uppercase tracking-[.18em] text-mut">Experience</span>
          </div>
          <h2 className="mb-[22px] text-[clamp(32px,4.4vw,66px)] font-medium leading-[1.02] tracking-[-.035em]">
            Where I&apos;ve
            <br />
            <span className="font-serif italic text-acc">worked</span>
          </h2>
          <p className="mb-[30px] max-w-[340px] text-[14.5px] leading-[1.7] text-[#3a4046]">
            From intern to full-time engineer on the same product — I know it end to end.
          </p>
          <SpinSeal
            text="JUDIX TECHNOLOGIES · REMOTE · INDIA · "
            className="h-[112px] w-[112px]"
            center={
              <text x={100} y={107} textAnchor="middle" className="fill-acc font-serif italic" style={{ fontSize: 30 }}>
                2y
              </text>
            }
          />
        </div>

        <div className="flex min-w-0 flex-col gap-[clamp(20px,2.4vw,32px)]">
          {experience.map((entry, i) => (
            <Reveal key={entry.role} index={i}>
              {entry.dashed ? (
                <article className="rounded-[10px] border border-dashed border-ink/22 p-[clamp(26px,3vw,40px)]">
                  <h3 className="text-[clamp(21px,2.1vw,30px)] font-medium tracking-[-.025em]">{entry.role}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-[13.5px] text-mut">
                    <span className="font-medium text-acc">{entry.org}</span>
                    <span>·</span>
                    <span>{entry.period}</span>
                  </div>
                </article>
              ) : (
                <article className="rounded-[10px] border border-ink/10 bg-[#efebe2] p-[clamp(26px,3vw,40px)] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-[5px] hover:shadow-[0_22px_46px_rgba(15,17,19,.10)]">
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-[clamp(21px,2.1vw,30px)] font-medium tracking-[-.025em]">{entry.role}</h3>
                    {entry.current && (
                      <span className="rounded-full bg-acc px-[13px] py-1.5 text-[11px] uppercase tracking-[.1em] text-cream">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="mb-[22px] flex flex-wrap items-center gap-3 text-[13.5px] text-mut">
                    <span className="font-medium text-acc">{entry.org}</span>
                    <span>·</span>
                    <span>{entry.period}</span>
                    <span>·</span>
                    <span>{entry.location}</span>
                  </div>
                  <ul className="mb-6 flex flex-col gap-3">
                    {entry.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[14.5px] leading-[1.65] text-[#3a4046]">
                        <span className="flex-none text-acc">—</span>
                        <span className="min-w-0 flex-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-ink/16 px-3 py-1.5 text-[11.5px] tracking-[.03em]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
