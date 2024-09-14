export interface Project {
  title: string;
  description: string;
  image: ProjectImage;
  skills: Tags[];
  repoLink: string;
  viewLink: string;
  iconUrl: string;
}

export interface Tags {
  name: string;
  color: string;
  icon?: string;
}

export interface ProjectImage {
  urlLarge: ProjectImageUrl;
  urlMedium: ProjectImageUrl;
  urlSmall: ProjectImageUrl;
}

export interface ProjectImageUrl {
  url: string;
  style: string;
}