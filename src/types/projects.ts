export interface Project {
  title: string;
  description: string;
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