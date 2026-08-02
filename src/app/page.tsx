import Nav from '@/components/portfolio/Nav';
import Hero from '@/components/portfolio/Hero';
import Marquee from '@/components/portfolio/Marquee';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Contact from '@/components/portfolio/Contact';
import ScrollFx from '@/components/portfolio/ScrollFx';
import CustomCursor from '@/components/portfolio/CustomCursor';
import { techStack } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="relative w-full overflow-clip bg-cream text-ink">
      <ScrollFx />
      <CustomCursor />
      <Nav />
      <Hero />
      <Marquee items={techStack} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
