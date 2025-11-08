export interface Project {
  slug: string;
  title: string;
  short: string;
  year: string;
  tech: string[];
  cover: string;
  images: { src: string; alt: string }[];
  repo?: string;
  demo?: string;
  problem: string;
  solution: string;
  architecture: string;
}

export const projects: Project[] = [
  {
    slug: "medimitra",
    title: "MediMitra — AI-Powered Healthcare Platform",
    short: "AI agent automates patient appointment scheduling with real-time updates.",
    year: "2025",
    tech: ["React", "Node.js", "TypeScript", "MongoDB", "Docker", "AWS"],
    cover: "/projects/medimitra-cover.jpg",
    images: [
      { src: "/projects/medimitra-1.jpg", alt: "Dashboard Overview" },
      { src: "/projects/medimitra-2.jpg", alt: "Appointment Flow" }
    ],
    repo: "https://github.com/m-s-sat/MediMitra",
    demo: "",
    problem: "Healthcare facilities struggle with manual appointment scheduling, leading to patient dissatisfaction and administrative overhead.",
    solution: "Built an AI-powered platform that automates appointment booking, sends real-time notifications, and integrates with existing healthcare systems.",
    architecture: "React frontend with Node.js backend, MongoDB for data persistence, containerized with Docker and deployed on AWS EC2 with auto-scaling."
  },
  {
    slug: "judix-platform",
    title: "Judix — Legal Intelligence Platform",
    short: "AI-powered legal research and document analysis system.",
    year: "2025",
    tech: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "AstraDB", "AWS"],
    cover: "/projects/judix-cover.jpg",
    images: [
      { src: "/projects/judix-1.jpg", alt: "Legal Research Interface" },
      { src: "/projects/judix-2.jpg", alt: "Document Analysis" }
    ],
    repo: "",
    demo: "",
    problem: "Legal professionals spend hours researching case law and analyzing documents manually.",
    solution: "Developed responsive Next.js + TypeScript UI components integrated with FastAPI backend, MongoDB and AstraDB for semantic search, with automated embeddings generation pipelines.",
    architecture: "Microservices architecture with Next.js frontend, FastAPI backend services, vector database integration for semantic search, deployed on AWS EC2."
  },
  {
    slug: "devops-automation",
    title: "Cloud Infrastructure Automation",
    short: "Kubernetes-based deployment pipeline with CI/CD automation.",
    year: "2024",
    tech: ["Kubernetes", "Docker", "GitHub Actions", "Terraform", "AWS", "Python"],
    cover: "/projects/devops-cover.jpg",
    images: [
      { src: "/projects/devops-1.jpg", alt: "Deployment Pipeline" },
      { src: "/projects/devops-2.jpg", alt: "Monitoring Dashboard" }
    ],
    repo: "",
    demo: "",
    problem: "Manual deployment processes are error-prone and time-consuming for development teams.",
    solution: "Created automated CI/CD pipeline with Kubernetes orchestration, infrastructure as code with Terraform, and comprehensive monitoring.",
    architecture: "GitHub Actions for CI/CD, Terraform for infrastructure provisioning, Kubernetes clusters on AWS EKS for container orchestration, with Prometheus and Grafana for monitoring."
  }
];
