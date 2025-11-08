import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

const TimelineItem = ({ title, company, period, description, index }: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 pb-12 border-l-2 border-primary/30"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
      
      <div className="glass rounded-lg p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="text-primary font-semibold">{company}</p>
          </div>
          <span className="text-sm font-mono text-muted-foreground mt-2 md:mt-0">{period}</span>
        </div>
        
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-muted-foreground flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  const experiences = [
    {
      title: "Software Developer Engineer",
      company: "Judix Pvt. Ltd.",
      period: "May 2025 – Present",
      description: [
        "Developed responsive Next.js + TypeScript UI components for legal intelligence platform",
        "Integrated FastAPI backend with MongoDB and AstraDB for semantic search capabilities",
        "Automated embeddings generation pipelines deployed on AWS EC2",
        "Implemented real-time data synchronization and optimized query performance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
