export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export interface Activity {
  id: string;
  image: string;
  tags: string[];
  title: string;
  date: string;
  link: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    headline: string;
    email: string;
    linkedin: string;
    github: string;
    about: string;
  };
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  achievements: Achievement[];
  activities?: Activity[];
}
