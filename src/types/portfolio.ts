export interface Project {
  id: string;
  title: string;
  badge: string; // e.g., "FEATURED / AI", "AI / COMPUTER VISION", "HACKATHON", "FULL STACK"
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
  architecture?: string[];
  keyFeatures?: string[];
  technicalHighlights?: string[];
}

export interface MetricCard {
  id: string;
  title: string;
  subtitle: string;
  icon: 'star' | 'academic' | 'briefcase' | 'trophy';
  value?: string;
}

export interface SkillCategory {
  title: string;
  isPrimary?: boolean;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: 'award' | 'calendar' | 'users' | 'code';
  date?: string;
}

export interface JourneyItem {
  id: string;
  filename: string;
  icon: 'terminal' | 'analytics' | 'web' | 'graduation';
  role: string;
  company: string;
  duration: string;
  employmentType: string;
  program?: string;
  techStack?: string[];
  footnote?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  action?: 'link' | 'email' | 'resume';
}
