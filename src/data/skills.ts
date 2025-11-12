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

export const ICONS = [
  { name: "Ansible", src: "/icons/ansible.png" },
  { name: "AWS", src: "/icons/aws.png" },
  { name: "Docker", src: "/icons/docker.png" },
  { name: "Express", src: "/icons/express.png" },
  { name: "Git", src: "/icons/git.png" },
  { name: "GitHub", src: "/icons/github.png" },
  { name: "JavaScript", src: "/icons/javascript.png" },
  { name: "Jenkins", src: "/icons/jenkins.png" },
  { name: "Kubernetes", src: "/icons/kubernetes.png" },
  { name: "Next.js", src: "/icons/next.png" },
  { name: "Node.js", src: "/icons/node.png" },
  { name: "Python", src: "/icons/python.png" },
  { name: "React", src: "/icons/react.png" },
  { name: "Redux", src: "/icons/redux.png" },
  { name: "Tailwind CSS", src: "/icons/tailwind.png" },
  { name: "Terraform", src: "/icons/terraform.png" },
  { name: "TypeScript", src: "/icons/typescript.png" },
];
