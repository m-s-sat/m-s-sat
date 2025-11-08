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
    short:
      "An AI-driven healthcare platform that automates patient appointment scheduling and backend management using intelligent agents.",
    year: "2025",
    tech: [
      "React.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "WebSockets",
      "Docker",
      "AWS (EC2, ELB, ASG)"
    ],
    cover: "/projects/medimitra/cover.png",
    images: [
      { src: "/projects/medimitra/screen1.png", alt: "MediMitra dashboard interface" },
      { src: "/projects/medimitra/screen2.png", alt: "AI-powered scheduling workflow" }
    ],
    repo: "https://github.com/m-s-sat/MediMitra",
    demo: "",
    problem:
      "Healthcare appointment systems often rely on manual scheduling, leading to inefficiencies, double-bookings, and poor patient experience. The challenge was to automate and intelligently manage this workflow with minimal human intervention.",
    solution:
      "Built an AI-powered appointment automation system that connects patients and hospitals through real-time event-driven microservices. Deployed the system on AWS EC2 using Dockerized containers with Elastic Load Balancing and Auto Scaling for high availability.",
    architecture:
      "Frontend built with React.js and TypeScript, communicating with Node.js and WebSocket-based services. Backend integrated with MongoDB for persistence and orchestrated via AWS EC2 Docker containers behind an ELB, ensuring reliability and horizontal scalability."
  },
  {
    slug: "gitops-cicd-iac",
    title: "GitOps-Driven CI/CD with IaC Automation",
    short:
      "Implemented a complete GitOps pipeline using GitHub Workflows, Docker, Kubernetes, and Terraform for automated infrastructure provisioning and continuous deployment.",
    year: "2025",
    tech: [
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS (EKS, ECR, VPC, Subnets)",
      "Helm Charts",
      "CI/CD",
      "GitOps"
    ],
    cover: "/projects/gitops/cover.png",
    images: [
      { src: "/projects/gitops/architecture1.png", alt: "Kubernetes multi-service GitOps deployment flow" },
      { src: "/projects/gitops/architecture2.png", alt: "End-to-end CI/CD and IaC pipeline architecture with EKS, ECR, and Helm" }
    ],
    repo: "https://github.com/m-s-sat/MediMitra",
    demo: "",
    problem:
      "Traditional CI/CD pipelines lacked synchronization between infrastructure provisioning and application deployment. Manual steps led to configuration drift, inconsistent environments, and delayed releases.",
    solution:
      "Designed and implemented a **GitOps-based CI/CD system** using GitHub Workflows, Docker, Kubernetes, and Terraform. The workflow automatically builds and pushes Docker images to AWS ECR, provisions AWS infrastructure via Terraform (EKS, VPC, Subnets), and deploys applications using Helm Charts within EKS clusters.",
    architecture:
      "The developer commits application and IaC code to separate repositories. GitHub Workflows trigger two pipelines: one for IaC (Terraform init → validate → plan → apply) and one for applications (test → build → dockerize → push to ECR → deploy with Helm). The EKS cluster pulls container images from ECR and exposes the app through an NGINX ingress in a secure, autoscaling environment."
  },
  {
    slug: "kubernetes-microservice-deployment",
    title: "Kubernetes Microservice Deployment on AWS",
    short:
      "A secure, scalable microservice deployment architecture using Kubernetes and AWS with production-grade infrastructure setup.",
    year: "2025",
    tech: [
      "Kubernetes",
      "AWS (EC2, ASG, S3)",
      "Docker",
      "Nginx",
      "Tomcat",
      "YAML"
    ],
    cover: "/projects/kubernetes/cover.png",
    images: [
      { src: "/projects/kubernetes/screen1.png", alt: "Kubernetes cluster topology" },
      { src: "/projects/kubernetes/screen2.png", alt: "Microservice deployment manifest" }
    ],
    repo: "https://github.com/m-s-sat/Kubernetes-Deployment.git",
    demo: "",
    problem:
      "Deploying microservices manually on cloud servers leads to scaling challenges, configuration drift, and security vulnerabilities.",
    solution:
      "Implemented a production-grade Kubernetes-based deployment pipeline on AWS, defining modular manifests for deployments, services, volumes, and ingress controllers. Automated scaling and recovery using AWS Auto Scaling Groups.",
    architecture:
      "Each microservice containerized using Docker and deployed on a Kubernetes cluster running across multiple EC2 instances. Ingress controlled by Nginx with persistent storage via AWS S3 and service exposure handled through Kubernetes service objects."
  },
  {
    slug: "cicd-automation-java",
    title: "CI/CD Automation for Java Microservices",
    short:
      "Automated the continuous integration and deployment process for Java microservices using Jenkins, Maven, and SonarQube on AWS.",
    year: "2025",
    tech: [
      "AWS (ECS, ECR)",
      "Jenkins",
      "Docker",
      "Groovy",
      "Maven",
      "SonarQube",
      "Git"
    ],
    cover: "/projects/cicd-java/cover.png",
    images: [
      { src: "/projects/cicd-java/screen1.png", alt: "Jenkins CI/CD pipeline execution view" },
      { src: "/projects/cicd-java/screen2.png", alt: "SonarQube quality gate dashboard" }
    ],
    repo: "",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7346688957826445312/",
    problem:
      "Manual build and deployment processes for Java microservices caused delays and increased the risk of inconsistent environments and code quality issues.",
    solution:
      "Designed and implemented an automated CI/CD pipeline integrating Jenkins, Maven, and SonarQube for build automation, testing, and code quality checks. Integrated Docker for image builds and AWS ECS/ECR for container orchestration and deployment.",
    architecture:
      "The Jenkins pipeline (Groovy-based) triggers on commits, builds Docker images using Maven, pushes them to AWS ECR, and deploys to ECS clusters. SonarQube integration ensures continuous code quality validation before deployment."
  }
];