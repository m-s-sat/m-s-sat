import { useEffect, useMemo, useRef, useState } from "react";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { HeroWithParticles } from "@/components/HeroWithParticles";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import AboutMe from "@/components/AboutMe";
import ScrollProgress from "@/components/ScrollProgress";
import { ArrowUpCircle } from "lucide-react";

const Index = () => {
  const [showButton, setShowButton] = useState(false);
  const [navOffset, setNavOffset] = useState(0);
  const rafRef = useRef<number | null>(null);

  const baseBottom = useMemo(
    () => (typeof window !== "undefined" && window.innerWidth < 768 ? 24 : 32),
    []
  );

  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = () => document.getElementById("floating-navbar") as HTMLElement | null;

    const computeOffset = () => {
      const n = el();
      if (!n || window.innerWidth >= 768) {
        setNavOffset(0);
        return;
      }
      const r = n.getBoundingClientRect();
      const visible = Math.max(0, Math.min(r.height, r.bottom - Math.max(r.top, 0)));
      setNavOffset(visible + 12); // + small buffer so the button clears the navbar nicely
    };

    const burst = (ms = 400) => {
      const until = performance.now() + ms;
      const tick = () => {
        computeOffset();
        if (performance.now() < until) rafRef.current = requestAnimationFrame(tick);
        else rafRef.current = null;
      };
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    };

    const navbar = el();
    if (!navbar) {
      // if it mounts later (AnimatePresence), poll briefly
      const t = setTimeout(computeOffset, 100);
      return () => clearTimeout(t);
    }

    const ro = new ResizeObserver(() => burst(500));
    ro.observe(navbar);

    const mo = new MutationObserver(() => burst(500));
    mo.observe(navbar, { attributes: true, attributeFilter: ["class", "style"] });

    const onScrollResize = () => computeOffset();
    window.addEventListener("scroll", onScrollResize, { passive: true });
    window.addEventListener("resize", onScrollResize);

    navbar.addEventListener("transitionstart", () => burst(600));
    navbar.addEventListener("transitionrun", () => burst(600));
    navbar.addEventListener("transitionend", () => burst(200));

    computeOffset();

    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScrollResize);
      window.removeEventListener("resize", onScrollResize);
      navbar.removeEventListener("transitionstart", () => burst(600));
      navbar.removeEventListener("transitionrun", () => burst(600));
      navbar.removeEventListener("transitionend", () => burst(200));
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <FloatingNavbar />
      <ThemeToggle />
      <HeroWithParticles />
      <AboutMe />
      <Timeline />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />

      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Mrinal Satyarthi — Empowering ideas through code and innovation</p>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-6 md:right-10 p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg transition-all duration-300
          ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
          z-[9999]
        `}
        style={{ bottom: `${baseBottom + navOffset}px` }}
        aria-label="Back to top"
      >
        <ArrowUpCircle className="w-6 h-6" strokeWidth={2.2} />
      </button>
    </div>
  );
};

export default Index;
