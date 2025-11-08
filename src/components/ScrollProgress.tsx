import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const barRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const tick = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const max = (doc.scrollHeight || 0) - window.innerHeight;
      const progress = max > 0 ? scrollTop / max : 0;

      if (barRef.current) {
        // GPU-accelerated + no layout thrash
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    // Start per-frame loop
    rafRef.current = requestAnimationFrame(tick);

    // Resize can change scroll range; tick will handle it automatically
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[4px] z-[9999] pointer-events-none"
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full origin-left will-change-transform"
        // No transition -> instantaneous; add a tiny duration if you want slight smoothing
        style={{
          transform: "scaleX(0)",
          background:
            "linear-gradient(90deg, var(--progress-from, #3b82f6), var(--progress-to, #8b5cf6))",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
