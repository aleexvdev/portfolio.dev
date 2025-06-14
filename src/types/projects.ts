export interface Project {
  title: string;
  description: {
    en: string;
    es: string;
  };
  image: string;
  skills: Tags[];
  repoLink: string;
  viewLink: string;
}

export interface Tags {
  name: string;
  color: string;
  icon?: string;
}