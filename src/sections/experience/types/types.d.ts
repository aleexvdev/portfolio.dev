export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  skills: SkillsExperience[];
}

export interface SkillsExperience {
  id: number;
  name: string;
  icon: string;
}