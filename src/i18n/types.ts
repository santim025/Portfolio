export type Locale = "en" | "es";

export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  timestamp: string;
  role: string;
  company: string;
  tag: string;
  details: string[];
}

export interface ProjectCopy {
  tag: string;
  description: string;
}

export interface StatCopy {
  count: number;
  suffix?: string;
  label: string;
}

export interface HeroTermLine {
  prompt?: string;
  cmd?: string;
  output?: string;
  accent?: string;
  joiner?: string;
  accent2?: string;
  success?: string;
  dash?: string;
  msg?: string;
  check?: boolean;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: NavLink[];
  personal: {
    role: string;
    focus: string;
    location: string;
    modality: string;
    education: string;
    bio: string;
    experienceYears: string;
  };
  specialization: {
    backend: string;
    web: string;
    mobile: string;
    cloud: string;
    data: string;
    devops: string;
  };
  specializationLabels: {
    backend: string;
    web: string;
    mobile: string;
    cloud: string;
    data: string;
    devops: string;
  };
  profileLabels: {
    name: string;
    role: string;
    focus: string;
    experience: string;
    company: string;
    location: string;
    education: string;
    modality: string;
  };
  hero: {
    ariaLabel: string;
    headline1: string;
    headline2: string;
    headlineAccent: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    termLines: HeroTermLine[];
  };
  sections: {
    aboutKicker: string;
    aboutTitle: string;
    profileCard: string;
    specializationCard: string;
    skillsKicker: string;
    skillsTitle: string;
    skillsRunning: string;
    experienceKicker: string;
    experienceTitle: string;
    projectsKicker: string;
    projectsTitle: string;
    projectsSummary: (total: number, live: number, rest: number) => string;
    contactKicker: string;
    contactTitle: string;
    contactTitleAccent: string;
    contactBody: string;
    footer: string;
  };
  projects: {
    serviceActive: string;
    kubectlHeader: (namespace: string) => string;
    privateBadge: string;
    privateRepo: string;
  };
  common: {
    github: string;
    linkedin: string;
    liveDemo: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    mobileNav: string;
    language: string;
  };
  experience: ExperienceEntry[];
  projectCopies: ProjectCopy[];
  stats: StatCopy[];
}
