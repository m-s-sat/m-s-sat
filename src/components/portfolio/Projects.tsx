import Image from 'next/image';
import SpinSeal from './SpinSeal';
import { projects } from '@/data/portfolio';

const STICKY_TOP = ['top-[104px]', 'top-[120px]', 'top-[136px]', 'top-[152px]'];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-ink px-[clamp(18px,3.2vw,44px)] pb-[clamp(90px,12vw,170px)] pt-[clamp(70px,9vw,130px)] text-cream"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-[clamp(38px,5vw,74px)] flex flex-wrap items-end justify-between gap-7">
          <div>
            <div className="mb-5 flex items-baseline gap-3.5">
              <span className="font-serif text-[15px] text-acc">03</span>
              <span className="text-[11px] uppercase tracking-[.18em] text-cream/50">Selected projects</span>
            </div>
            <h2 className="text-[clamp(34px,5.6vw,86px)] font-medium leading-[.98] tracking-[-.04em]">
              Things I&apos;ve
              <br />
              <span className="font-serif italic text-acc">built</span>
            </h2>
          </div>
          <p className="min-w-0 max-w-[330px] text-[14.5px] leading-[1.7] text-cream/60">
            Four systems, from a C++ routing engine to a real-time emergency response dashboard. Scroll — they
            stack.
          </p>
        </div>

        <div className="relative">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`mb-12 last:mb-0 sticky ${STICKY_TOP[i]} max-[860px]:top-[84px]`}
            >
              <div className="grid grid-cols-1 overflow-hidden rounded-[14px] border border-cream/10 bg-[#16191c] min-[600px]:grid-cols-2">
                <div className="flex min-h-[clamp(380px,46vw,520px)] flex-col justify-between gap-[26px] p-[clamp(28px,3.2vw,52px)] max-[860px]:min-h-0 max-[860px]:gap-4 max-[860px]:p-[22px]">
                  <div>
                    <div className="mb-[22px] flex items-center justify-between gap-4">
                      <span className="font-serif text-[44px] leading-none text-acc">{project.number}</span>
                      <span className="text-[11px] uppercase tracking-[.14em] text-cream/45">{project.date}</span>
                    </div>
                    <h3 className="mb-3.5 text-[clamp(24px,2.9vw,42px)] font-medium leading-[1.06] tracking-[-.03em]">
                      {project.title}
                    </h3>
                    <p className="mb-5 max-w-[460px] text-[14.5px] leading-[1.7] text-cream/62">
                      {project.description}
                    </p>
                    <ul className="flex flex-col gap-2.5 max-[600px]:hidden">
                      {project.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-[13.5px] leading-[1.6] text-cream/72">
                          <span className="flex-none text-acc">→</span>
                          <span className="min-w-0 flex-1">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-[18px]">
                    <div className="flex flex-wrap gap-[7px]">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-cream/18 px-3 py-1.5 text-[11.5px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-view
                      className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-cream px-5 py-[13px] text-[12.5px] tracking-[.03em] text-ink hover:text-ink"
                    >
                      {project.link.label} ↗
                    </a>
                  </div>
                </div>
                <div className="relative hidden min-[600px]:block min-h-[clamp(240px,30vw,520px)] overflow-hidden bg-[#101315] max-[860px]:min-h-[44vw] max-[860px]:max-h-[200px] max-[520px]:min-h-[150px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 600px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <SpinSeal
                    text={`${project.tags[0].toUpperCase()} · ${project.date.toUpperCase()} · `}
                    backdrop
                    className="absolute bottom-5 left-5 h-[92px] w-[92px]"
                    center={
                      <text x={100} y={110} textAnchor="middle" className="fill-acc" style={{ fontSize: 26 }}>
                        →
                      </text>
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
