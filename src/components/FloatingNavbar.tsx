import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Home,
  BriefcaseBusiness,
  FolderGit2,
  Wrench,
  Trophy,
  Mail,
  User,
} from "lucide-react";

type NavItem = {
  id: string;
  name: string;
  href: `#${string}`;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const navLinks: NavItem[] = [
  { id: "hero",         name: "Home",        href: "#hero",         Icon: Home },
  { id: "about",       name: "About",      href: "#about",        Icon: User },
  { id: "experience",   name: "Experience",  href: "#experience",    Icon: BriefcaseBusiness },
  { id: "projects",     name: "Projects",    href: "#projects",      Icon: FolderGit2 },
  { id: "skills",       name: "Skills",      href: "#skills",        Icon: Wrench },
  { id: "achievements", name: "Achievements",href: "#achievements",  Icon: Trophy },
  { id: "contact",      name: "Contact",     href: "#contact",       Icon: Mail },
];

export const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide on scroll direction
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;

      // Update active section
      const current = navLinks.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current.id);
    };

    handleScroll(); // set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.getElementById(href.substring(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {/* Desktop/Tablet TOP navbar (md and up) */}
      {isVisible && (
        <motion.nav
          key="top-nav"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-0 right-0 z-50 hidden md:block w-full"
        >
          <div className="glass rounded-full px-6 py-3 shadow-2xl mx-auto w-fit">
            <ul className="flex items-center gap-1 justify-center">
              {navLinks.map(({ id, name, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                      activeSection === id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label={name}
                  >
                    {activeSection === id && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-primary/20 rounded-full"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}

      {/* Mobile BOTTOM navbar (below md) */}
      {isVisible && (
        <motion.nav
          key="bottom-nav"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed md:hidden left-0 right-0 z-50",
            // Safe area & spacing
            "bottom-[calc(env(safe-area-inset-bottom,0)+0.75rem)]"
          )}
        >
          <div className="glass mx-auto w-[min(96%,560px)] rounded-2xl shadow-2xl px-3 py-2">
            <ul className="flex items-center justify-between">
              {navLinks.map(({ id, name, href, Icon }) => {
                const active = activeSection === id;
                return (
                  <li key={href} className="flex-1">
                    <button
                      onClick={() => scrollToSection(href)}
                      aria-label={name}
                      className={cn(
                        "relative mx-auto flex h-10 w-10 items-center justify-center rounded-xl transition-all",
                        active
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="active-dot"
                          className="absolute inset-0 rounded-xl bg-primary/15"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                      <Icon
                        className={cn(
                          "relative z-10 h-5 w-5",
                          active && "scale-110"
                        )}
                      />
                      {/* Optional tiny label under icon:
                      <span className="sr-only">{name}</span> */}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
