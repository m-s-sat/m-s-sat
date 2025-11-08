import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const AboutMe: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [engaged, setEngaged] = useState(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  useLayoutEffect(() => {
    if (!sectionRef.current || !leftRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top+=100 top",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: true,
      });

      gsap.from(leftRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".about-stagger", {
        opacity: 0,
        y: 18,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setEngaged(true),
        onLeave: () => setEngaged(false),
        onEnterBack: () => setEngaged(true),
        onLeaveBack: () => setEngaged(false),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!engaged || !sectionRef.current || !bodyRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const { x, y } = mousePosRef.current;
      const inside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      if (!inside) return;

      const el = bodyRef.current;
      const canScroll = el.scrollHeight > el.clientHeight;
      if (!canScroll) return;

      const delta = e.deltaY;
      const atTop = el.scrollTop <= 0;
      const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

      if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) {
        e.preventDefault();
        el.scrollTop += delta;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel as any);
  }, [engaged]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-16 md:py-24 flex justify-center"
    >
      <div className="w-[90%] md:w-[60%] mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A brief overview of who I am and what I do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div ref={leftRef} className="flex items-center justify-center h-full">
              <div
                className="
                  about-stagger
                  rounded-full overflow-hidden border border-border
                  w-[28vh] h-[28vh] md:w-[30vh] md:h-[30vh]
                "
              >
                <img
                  src="/profile.jpg"
                  alt="Mrinal Satyarthi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div
              className="
                about-panel-container
                max-h-[32vh] md:max-h-[34vh]
                flex flex-col gap-0 pr-3
              "
            >
              <div ref={bodyRef} className="flex-1 overflow-y-auto about-panel">
                <p className="about-stagger text-muted-foreground leading-relaxed mb-3">
                  I'm Mrinal Satyarthi, an enthusiastic tech enthusiast and developer who is enrolled at IIT Patna to pursue a B.Tech in Civil and Environmental Engineering. DevOps, scalable cloud deployment systems, and full-stack web development are my main areas of interest. On the front end, I like creating smooth user experiences, and on the back end, I like designing safe, automated, and efficient systems.
                </p>
                <p className="about-stagger text-muted-foreground leading-relaxed mb-3">
                  I have a solid foundation in React, Node.js, FastAPI, Docker, Kubernetes, and AWS, which enable me to transform intricate concepts into productive, production-ready applications. Curiosity and the thrill of using clean, scalable engineering to solve practical issues are what motivate me.
                </p>
                <p className="about-stagger text-muted-foreground leading-relaxed mb-3">
                  Beyond coding, I have a strong interest in fields that connect development and deployment, such as automation, CI/CD pipelines, and cloud-native infrastructure. I strive to provide solutions that are both technically sound and carefully thought out, and I value teamwork, ongoing education, and attention to detail.
                </p>
                {/* <p className="about-stagger text-muted-foreground leading-relaxed">
                  Outside of coding, I fine-tune portfolio visuals, accessibility, and animations
                  to maintain clarity, speed, and polish in every product I build.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
