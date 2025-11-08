export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS"
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "RESTful APIs",
      "JWT Authentication"
    ]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Ansible"
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Jenkins",
      "SonarQube",
      "Netlify",
      "Vercel"
    ]
  }
];
