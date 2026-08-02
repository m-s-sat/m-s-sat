export type NavLink = {
  id: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export const techStack = [
  'React',
  'Next.js',
  'Node.js',
  'C++',
  'Kubernetes',
  'Docker',
  'AWS',
  'PostgreSQL',
  'Jenkins',
  'Terraform',
];

export const heroStats = [
  { label: 'Based in', value: 'Patna, India — Remote' },
  { label: 'Focus', value: 'Full-stack · AI · DevOps' },
  { label: 'Currently', value: 'SWE @ Judix Technologies' },
];

export const aboutStats = [
  { value: 2, label: 'Years shipping' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 4, label: 'Shipped projects' },
  { value: 3, label: 'Hackathon placements' },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
  dashed?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    org: 'Judix Technologies Pvt. Ltd.',
    period: 'Aug 2025 - Present',
    location: 'Remote',
    current: true,
    bullets: [
      "Developed Judix's core AI to instantly answer legal queries using cited Supreme Court cases.",
      'Built the Node.js API handling user authentication, subscriptions and live AI search queries.',
      'Integrated the React frontend with backend APIs to stream live AI responses and legal data.',
    ],
    tags: ['Next.js', 'Node.js', 'Redux.js', 'PostgreSQL', 'MongoDB', 'Cloud Run', 'Docker'],
  },
  {
    role: 'Software Engineer, Intern',
    org: 'Judix Technologies Pvt. Ltd.',
    period: 'May 2025 - Jul 2025',
    location: 'Remote',
    bullets: [
      'Developed and enhanced the Judix landing page — responsive, clean, user-friendly.',
      'Debugged the RAG system and supported frontend-backend integration over the API layer.',
    ],
    tags: ['Next.js', 'Redux.js', 'Python'],
  },
  {
    role: 'B.Tech, Civil & Environmental Engineering',
    org: 'Indian Institute of Technology, Patna',
    period: '2024 - Present',
    location: '',
    bullets: [],
    tags: [],
    dashed: true,
  },
];

export type Project = {
  number: string;
  date: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  link: { label: string; href: string };
  image: string;
};

export const projects: Project[] = [
  {
    number: '01',
    date: 'Feb 2026',
    title: 'Large-Scale Graph Routing Engine',
    description:
      'A fast road-routing system over real OpenStreetMap data for central India — Dijkstra in C++, with the whole graph memory-mapped to stay under a gigabyte of RAM.',
    bullets: [
      "C++ engine navigating central India's full road network",
      'Memory-mapped files keep a massive graph under 1 GB',
    ],
    tags: ['C++ / DSA', 'Node.js', 'Next.js', 'TypeScript'],
    link: { label: 'GitHub', href: 'https://github.com/m-s-sat/map' },
    image: '/map/cover.png',
  },
  {
    number: '02',
    date: 'Apr 2026',
    title: 'RapidCrisis — AI Emergency Response',
    description:
      'A real-time alert system that watches live sensor data from field devices and notifies responders automatically the moment a crisis signal appears.',
    bullets: [
      'Live safety dashboard streaming on-ground sensor telemetry',
      'AI alert pipeline firing automated SMS to responders',
    ],
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Redis', 'Docker'],
    link: { label: 'GitHub', href: 'https://github.com/m-s-sat/rapid-crisis' },
    image: '/rapid-crisis/cover.png',
  },
  {
    number: '03',
    date: 'Aug 2025',
    title: 'Kubernetes Microservice Deployment',
    description:
      'A scalable multi-service application on AWS EKS that absorbs traffic spikes without downtime — every manifest and cluster config authored from scratch.',
    bullets: [
      'Multi-service app deployed on AWS EKS with full manifests',
      'Multi-node cluster with Auto Scaling, zero-downtime spikes',
    ],
    tags: ['AWS EKS', 'Kubernetes', 'Docker', 'ECR'],
    link: { label: 'GitHub', href: 'https://github.com/m-s-sat/Kubernetes-Deployment' },
    image: '/kubernetes/cover.png',
  },
  {
    number: '04',
    date: 'Jul 2025',
    title: 'CI/CD Automation for Java Microservices',
    description:
      'Build, test and deploy — fully automated on AWS. A Groovy-scripted Jenkins pipeline with quality gates that stop bad builds before they ever reach ECS.',
    bullets: [
      'Jenkins pipeline: auto-build, Maven tests, deploy to AWS ECS',
      'Dockerized services behind SonarQube quality gates',
    ],
    tags: ['Jenkins', 'Groovy', 'AWS ECS', 'Maven', 'SonarQube'],
    link: { label: 'LinkedIn', href: 'https://www.linkedin.com/posts/mrinal-satyarthi_ciabrcd-devops-jenkins-activity-7346688957826445312-fW_z' },
    image: '/cicd-java/cover.png',
  },
];

export type SkillGroup = {
  title: string;
  index: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', index: '01', items: ['C++', 'JavaScript', 'TypeScript', 'Python'] },
  { title: 'Frontend', index: '02', items: ['React.js', 'Next.js', 'Redux.js', 'HTML', 'CSS'] },
  { title: 'Backend', index: '03', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'] },
  { title: 'Databases', index: '04', items: ['MongoDB', 'PostgreSQL', 'Redis'] },
  { title: 'DevOps & Cloud', index: '05', items: ['Docker', 'Kubernetes', 'AWS EC2/ECR/EKS/S3', 'Ansible'] },
  { title: 'CI/CD & Tools', index: '06', items: ['Jenkins', 'Terraform', 'GitHub Actions', 'Vercel', 'Netlify', 'Git'] },
];

export const achievements = [
  {
    rank: '2',
    suffix: 'nd',
    title: 'Runner Up — UPES CSA 4.0 Hackathon',
    detail: 'National-level problem-solving competition · 2024',
  },
  {
    rank: '9',
    suffix: 'th',
    title: 'Rank — AI Agent Hackathon',
    detail: 'Full-stack frontend and backend services · 2025',
  },
  {
    rank: '8.0',
    suffix: '',
    title: 'Semifinalist — Flipkart GRiD 8.0',
    detail: 'National engineering challenge · 2026',
  },
];

export const contactInfo = {
  email: 'mrinalsatyarthi2005@gmail.com',
  phone: '+91 76450 54550',
  altEmail: 'mrinal_2401ce60@iitp.ac.in',
  github: 'https://github.com/m-s-sat',
  linkedin: 'https://www.linkedin.com/in/mrinal-satyarthi/',
  resume: '/resume.pdf',
};
