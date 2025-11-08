import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FaTrophy } from "react-icons/fa";

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
    title: "Top 1.5%",
    event: "JEE Advanced",
    year: "2024",
    description: "Secured position in top 1.5% nationally in competitive examination"
  }
];

export const Achievements = () => {
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="glass p-6 h-full flex flex-col items-center text-center group">
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
                
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
