import type { Experience } from "@/types/experience";

export interface LocalizedExperience {
  id: number;
  company: string;
  link?: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  skills: Experience["skills"];
}

export function localizeExperience(
  experience: Experience,
  lang: "es" | "en",
): LocalizedExperience {
  return {
    id: experience.id,
    company: experience.company,
    link: experience.link,
    role: experience.role[lang],
    period: experience.period[lang],
    description: experience.description[lang],
    achievements: experience.achievements.map((item) => item[lang]),
    skills: experience.skills,
  };
}
