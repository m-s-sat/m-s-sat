import Reveal from './Reveal';
import { skillGroups, achievements } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="relative px-[clamp(18px,3.2vw,44px)] py-[clamp(80px,11vw,160px)]">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-[clamp(34px,4.5vw,64px)] flex flex-wrap items-end justify-between gap-[26px]">
          <div>
            <div className="mb-[18px] flex items-baseline gap-3.5">
              <span className="font-serif text-[15px] text-acc">04</span>
              <span className="text-[11px] uppercase tracking-[.18em] text-mut">Toolkit</span>
            </div>
            <h2 className="text-[clamp(32px,4.8vw,72px)] font-medium leading-none tracking-[-.04em]">
              What I work <span className="font-serif italic text-acc">with</span>
            </h2>
          </div>
          <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[.14em] text-mut">
            <span className="h-px w-[26px] bg-mut" />
            Languages to infrastructure
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-ink/13 bg-ink/13 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              index={i}
              className="bg-cream p-[clamp(24px,2.4vw,34px)] transition-colors duration-300 hover:bg-[#efebe2]"
            >
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="text-[17px] font-medium tracking-[-.01em]">{group.title}</h3>
                <span className="font-serif text-sm text-acc">{group.index}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md bg-ink/5 px-[13px] py-1.5 text-[12.5px]">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-[clamp(28px,3.4vw,44px)] grid grid-cols-1 gap-[clamp(18px,2vw,26px)] sm:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} index={i} className="flex items-center gap-[22px] rounded-[10px] bg-ink p-[26px] text-cream">
              <span className="font-serif text-[clamp(30px,3.4vw,48px)] leading-none text-acc">
                {a.rank}
                <sup className="text-[.5em]">{a.suffix}</sup>
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-[5px] text-[15px]">{a.title}</div>
                <div className="text-xs text-cream/55">{a.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
