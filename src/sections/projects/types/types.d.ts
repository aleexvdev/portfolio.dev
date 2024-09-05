export interface Project {
  id: number;
  projectName: string;
  description: string;
  image: string;
  liveDemo: string;
  github: string;
  tags: Tags[];
}

export interface Tags {
  id: number;
  name: string;
  icon: string;
}