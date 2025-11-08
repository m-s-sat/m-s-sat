import { FloatingNavbar } from "@/components/FloatingNavbar";
import { HeroWithParticles } from "@/components/HeroWithParticles";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNavbar />
      <ThemeToggle />
      <HeroWithParticles />
      <Timeline />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Mrinal Satyarthi. Built with React + TypeScript + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
