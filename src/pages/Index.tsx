import { useEffect, useState } from "react";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { HeroWithParticles } from "@/components/HeroWithParticles";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import AboutMe from "@/components/AboutMe";

const Index = () => {
  const [showButton, setShowButton] = useState(false);

  // show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingNavbar />
      <ThemeToggle />
      <HeroWithParticles />
      <AboutMe />
      <Timeline />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Mrinal Satyarthi — Empowering ideas through code and innovation</p>
        </div>
      </footer>

      {/* Back to Top Button (Visible after scroll) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-10 p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg transition-all duration-500 ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Index;
