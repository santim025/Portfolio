export type { Skill } from "./static";

export interface Project {
  title: string;
  tag: string;
  description: string;
  iconClass: string;
  stack: string[];
  featured?: boolean;
  isPrivate?: boolean;
  repoUrl: string;
  liveUrl?: string;
  highlights?: { value: string; label: string }[];
}

export { personalStatic as personalInfo, projectMeta as projects, skills } from "./static";
