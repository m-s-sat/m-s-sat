import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/data/projects";

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectDetailModal = ({ project, open, onOpenChange }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold gradient-text">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img className="text-9xl font-bold text-primary/10" alt={project.title} src={project.cover} />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-mono">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">Problem Statement</h3>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">Solution</h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">Architecture Overview</h3>
              <p className="text-muted-foreground">{project.architecture}</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {project.repo && (
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open(project.repo, "_blank")}
              >
                <FaGithub /> View Code
              </Button>
            )}
            {project.demo && (
              <Button
                className="gap-2 bg-gradient-to-r from-primary to-secondary"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <FaExternalLinkAlt /> Live Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
