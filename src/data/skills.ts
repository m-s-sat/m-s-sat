export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "FastAPI", "Python", "MongoDB", "PostgreSQL"]
  },
  {
    category: "DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Postman", "Figma", "Linear"]
  }
];
