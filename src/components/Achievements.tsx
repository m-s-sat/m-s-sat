import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FaTrophy } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const achievements = [
  {
    title: "2nd Runner-Up",
    event: "UPES CSA 4.0 Hackathon",
    year: "2024",
    description: "Built a real-time disaster response and management web platform"
  },
  {
    title: "9th Rank",
    event: "AI Agent Hackathon",
    year: "2025",
    description: "Built intelligent AI agent system among 500+ participants"
  },
  {
    title: "Auxiliary Member",
    event: "Inter IIT Tech Meet 14.0",
    year: "2025",
    description: "Supported core participants in technical tasks & coordination"
  }
];

export const Achievements = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition and milestones
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="glass p-6 h-full flex flex-col items-center text-center group hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FaTrophy className="w-8 h-8 text-primary-foreground" />
                      </div>

                      <h3 className="text-xl font-bold mb-2 gradient-text">
                        {achievement.title}
                      </h3>

                      <p className="text-foreground font-semibold mb-1">
                        {achievement.event}
                      </p>

                      <p className="text-sm font-mono text-muted-foreground mb-3">
                        {achievement.year}
                      </p>

                      <p className="text-muted-foreground text-sm min-h-[3rem]">
                        {achievement.description}
                      </p>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 hover:bg-background border-primary/20 hover:border-primary/50" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 hover:bg-background border-primary/20 hover:border-primary/50" />
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
        </motion.div>
      </div>
    </section>
  );
};
