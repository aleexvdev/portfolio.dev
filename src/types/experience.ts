export interface Experience {
  id: number;
  company: string;
  link?: string;
  role: {
    es: string;
    en: string;
  };
  period: {
    es: string;
    en: string;
  };
  location: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  achievements: Array<{
    es: string;
    en: string;
  }>;
  skills: Array<{
    id: number;
    name: string;
    icon: string;
  }>;
}