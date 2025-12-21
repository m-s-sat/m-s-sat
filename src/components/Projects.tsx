import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // lg: 3 slides
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // md: 2 slides
      } else {
        setSlidesToShow(1); // sm: 1 slide
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleOpenDetail = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building scalable solutions with modern technologies
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={project.slug}
                className={`${slidesToShow === 3
                  ? "md:basis-1/2 lg:basis-1/3"
                  : slidesToShow === 2
                    ? "md:basis-1/2"
                    : "basis-full"
                  }`}
              >
                <div className="p-2">
                  <ProjectCard
                    project={project}
                    onOpenDetail={handleOpenDetail}
                    index={index}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};
