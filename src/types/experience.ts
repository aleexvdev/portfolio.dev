export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: Skill[];
} 