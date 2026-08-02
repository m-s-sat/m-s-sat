import Image from 'next/image';
import Reveal from './Reveal';
import Counter from './Counter';
import { aboutStats } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="relative px-[clamp(18px,3.2vw,44px)] py-[clamp(80px,11vw,168px)]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-[clamp(36px,5vw,86px)] min-[690px]:grid-cols-2">
        <div className="relative">
          <div className="relative h-[clamp(400px,52vw,620px)] overflow-hidden rounded-lg bg-[#e7e3da]">
            <div data-par="0.14" className="absolute inset-x-0 -top-[12%] h-[124%]">
              <Image
                src="/mrinal.jpg"
                alt="Mrinal Satyarthi"
                fill
                sizes="(max-width: 690px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="mt-3.5 flex items-center gap-2.5 text-[11px] uppercase tracking-[.14em] text-mut">
            <span className="h-px w-[22px] bg-mut" />
            IIT Patna · Civil &amp; Environmental Engineering
          </div>
        </div>

        <Reveal>
          <div className="mb-6 flex items-baseline gap-3.5">
            <span className="font-serif text-[15px] text-acc">01</span>
            <span className="text-[11px] uppercase tracking-[.18em] text-mut">About</span>
          </div>
          <h2 className="mb-6 text-balance text-[clamp(30px,3.6vw,54px)] font-medium leading-[1.08] tracking-[-.03em]">
            I build things that <span className="font-serif italic text-acc">hold up</span> in production.
          </h2>
          <p className="mb-[18px] max-w-[560px] text-pretty text-[clamp(14.5px,1.15vw,17px)] leading-[1.75] text-[#3a4046]">
            My journey into software engineering began as a civil engineering undergrad at IIT Patna. Today, I am a Software Engineer at Judix, where I built the core retrieval engine that answers legal queries using cited Supreme Court judgments, the Node.js API powering authentication, and the streaming React frontend on top of it.
          </p>
          <p className="mb-[34px] max-w-[560px] text-pretty text-[clamp(14.5px,1.15vw,17px)] leading-[1.75] text-[#3a4046]">
            Outside of work, I specialize in complex systems—developing a C++ routing engine over memory-mapped data, designing resilient Kubernetes clusters for traffic spikes, and automating Jenkins pipelines. I am deeply motivated by building robust solutions where performance and correctness truly matter.
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink/12 bg-ink/12 sm:grid-cols-4">
            {aboutStats.map((s) => (
              <div key={s.label} className="bg-cream px-5 py-[22px]">
                <div className="text-[clamp(30px,3.2vw,44px)] leading-none tracking-[-.03em]">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2.5 text-[11px] uppercase tracking-[.12em] text-mut">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
