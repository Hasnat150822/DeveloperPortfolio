// Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

// Skill type
export interface Skill {
  name: string;
  percentage: number;
}

// Form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
