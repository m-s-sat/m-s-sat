import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpenDetail: (project: Project) => void;
  index: number;
}

export const ProjectCard = ({ project, onOpenDetail, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="glass overflow-hidden h-full flex flex-col group">
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
          {project.cover ? (
            <img 
              src={project.cover} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/10">{project.title.charAt(0)}</div>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="font-mono text-xs">
              {project.year}
            </Badge>
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 flex-1">
            {project.short}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs font-mono">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-xs font-mono">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>
          
          <Button
            onClick={() => onOpenDetail(project)}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            Get Detailed Explanation
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
