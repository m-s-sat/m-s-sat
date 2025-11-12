import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ICONS } from "@/data/skills";

export function Skills() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const BASE_SPEED = 0.45; // pixels per frame — increase to speed up, decrease to slow down

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Ensure track is at least twice the container width to allow smooth looping
    const ensureTrackWideEnough = () => {
      const minWidth = container.clientWidth * 2 + 10;
      let clones = 0;
      while (track.scrollWidth < minWidth && clones < 10) {
        const nodes = Array.from(track.children).map((n) => n.cloneNode(true));
        nodes.forEach((n) => track.appendChild(n));
        clones += 1;
      }
    };

    ensureTrackWideEnough();

    let rafId: number | null = null;
    const step = () => {
      if (!container || !track) {
        rafId = requestAnimationFrame(step);
        return;
      }

      container.scrollLeft += BASE_SPEED;

      const firstCopyWidth = track.scrollWidth / 2;
      if (firstCopyWidth > 0 && container.scrollLeft >= firstCopyWidth) {
        container.scrollLeft -= firstCopyWidth;
      }

      rafId = requestAnimationFrame(step);
    };

    if (rafId == null) rafId = requestAnimationFrame(step);
    container.scrollLeft = 0;

    // Re-check on resize to ensure enough content if viewport grows
    const onResize = () => ensureTrackWideEnough();
    window.addEventListener("resize", onResize);

    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden rounded-lg">
          <div
            ref={containerRef}
            className="flex gap-6 items-center overflow-x-auto whitespace-nowrap scroll-smooth py-4 px-2 no-scrollbar"
            style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
            aria-label="Skills carousel — auto scrolling"
            role="region"
          >
            <div ref={trackRef} className="flex items-center gap-6">
              {[...ICONS].map((it, i) => (
                <div
                  key={`${it.name}-${i}`}
                  className="flex items-center justify-center w-[100px] h-[100px] rounded-md flex-shrink-0"
                  aria-label={it.name}
                  title={it.name}
                  role="img"
                >
                  <img
                    src={it.src}
                    alt={it.name}
                    width={100}
                    height={100}
                    draggable={false}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
              ))}

              {/* initial duplicate set (script will clone more if needed) */}
              {[...ICONS].map((it, i) => (
                <div
                  key={`${it.name}-dup-${i}`}
                  className="flex items-center justify-center w-[100px] h-[100px] rounded-md flex-shrink-0"
                  aria-hidden
                >
                  <img
                    src={it.src}
                    alt=""
                    width={100}
                    height={100}
                    draggable={false}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
        </div>
      </div>
    </section>
  );
}
