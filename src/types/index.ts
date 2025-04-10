

// Experience types
export interface Experience {
  id: number;
  company: string;
  logo: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
  details?: string[];
  projects?: ExperienceProject[];
  stacks?: string[];
}

export interface ExperienceProject {
  name: string;
  description: string;
  image: string;
}

// Project types
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  videoUrl?: string;
  iframeUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

// Blog types
export interface ContentLanguage {
  lang: string;
  content: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
  content: string;
  contentMultiLang?: ContentLanguage[];
  isPinned?: boolean;
  tags: string[];
}

// Certification types
export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  logo: string;
  credentialUrl?: string;
  skills?: string[];
}

// Education types
export interface Education {
  id: number;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  logo: string;
  description?: string;
  achievements?: string[];
}

// Photo types
export interface Photo {
  id: number;
  title: string;
  imageUrl: string;
  category?: string;
}
