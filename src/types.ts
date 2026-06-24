export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "UI/UX Design" | "Java Development" | "Frontend Development";
  techStack: string[];
  description: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Internship {
  company: string;
  role: string;
  duration: string;
  description: string;
  projectTitle: string;
  projectFeatures: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  performance: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  verificationBadge: string;
  credentialId?: string;
}

export interface Service {
  title: string;
  description: string;
  items: string[];
}
