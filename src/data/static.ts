export interface Skill {
  name: string;
  deviconClass: string;
}

export const personalStatic = {
  name: "Santiago Cañon Morales",
  email: "santimorales2000@gmail.com",
  linkedin: "https://www.linkedin.com/in/santiago-ca%C3%B1on-morales-4732a8206",
  github: "https://github.com/santim025",
  username: "scanon",
  terminalUser: "santiago.canon",
  currentCompany: "InfoDesign Colombia",
};

export interface ProjectMeta {
  title: string;
  iconClass: string;
  stack: string[];
  featured?: boolean;
  isPrivate?: boolean;
  repoUrl: string;
  liveUrl?: string;
  highlights?: { value: string; label: string }[];
}

export const projectMeta: ProjectMeta[] = [
  {
    title: "Engly",
    iconClass: "devicon-react-original colored",
    stack: ["Expo", "React Native", "TypeScript", "SQLite"],
    isPrivate: true,
    repoUrl: "https://github.com/santim025/Engly",
  },
  {
    title: "Dinamo",
    iconClass: "devicon-react-original colored",
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "Vite"],
    isPrivate: true,
    repoUrl: "https://github.com/santim025/Dinamo",
    liveUrl: "https://dinamo-frontend-production.up.railway.app/login",
  },
  {
    title: "LendTrack",
    iconClass: "devicon-typescript-plain colored",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Docker", "Railway"],
    featured: true,
    repoUrl: "https://github.com/santim025/LendTrack",
    liveUrl: "https://prestador-app-production.up.railway.app/auth/login",
    highlights: [
      { value: "JWT", label: "auth" },
      { value: "PDF", label: "reports" },
      { value: "Railway", label: "deploy" },
    ],
  },
  {
    title: "Biblioteca",
    iconClass: "devicon-nodejs-plain colored",
    stack: ["React", "Express", "Prisma", "PostgreSQL", "Tailwind"],
    isPrivate: true,
    repoUrl: "https://github.com/santim025/Biblioteca",
  },
  {
    title: "Asoafil",
    iconClass: "devicon-react-original colored",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repoUrl: "https://github.com/santim025/Asoafil",
    liveUrl: "https://asoafil.com/",
  },
  {
    title: "Cadencia",
    iconClass: "devicon-react-original colored",
    stack: ["React Native", "Expo", "TypeScript", "Zustand"],
    repoUrl: "https://github.com/santim025/FocusPal",
  },
  {
    title: "AgroCostos",
    iconClass: "devicon-react-original colored",
    stack: ["React", "Vite", "Tailwind CSS", "Recharts"],
    isPrivate: true,
    repoUrl: "https://github.com/santim025/AgroCostos",
  },
  {
    title: "Heavy File Finder",
    iconClass: "devicon-python-plain colored",
    stack: ["Python", "Flask", "Tailwind CSS", "JavaScript"],
    isPrivate: true,
    repoUrl: "https://github.com/santim025/HeavyFileFinder",
  },
];

export const skills: Skill[] = [
  { name: "C#", deviconClass: "devicon-csharp-plain colored" },
  { name: ".NET Core", deviconClass: "devicon-dot-net-plain colored" },
  { name: "Blazor", deviconClass: "devicon-blazor-original colored" },
  { name: "Python", deviconClass: "devicon-python-plain colored" },
  { name: "Node.js", deviconClass: "devicon-nodejs-plain colored" },
  { name: "JavaScript", deviconClass: "devicon-javascript-plain colored" },
  { name: "TypeScript", deviconClass: "devicon-typescript-plain colored" },
  { name: "HTML5", deviconClass: "devicon-html5-plain colored" },
  { name: "CSS3", deviconClass: "devicon-css3-plain colored" },
  { name: "Docker", deviconClass: "devicon-docker-plain colored" },
  { name: "Azure", deviconClass: "devicon-azure-plain colored" },
  { name: "Git", deviconClass: "devicon-git-plain colored" },
  { name: "SQL Server", deviconClass: "devicon-microsoftsqlserver-plain colored" },
  { name: "PostgreSQL", deviconClass: "devicon-postgresql-plain colored" },
  { name: "MySQL", deviconClass: "devicon-mysql-plain colored" },
];
