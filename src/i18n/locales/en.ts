import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Santiago Cañon Morales — Senior Backend Developer",
    description:
      "Senior Backend Developer — C#, .NET Core, Python, REST APIs, React, Next.js, React Native. 7+ years shipping digital products to production.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  personal: {
    role: "Senior Backend Developer",
    focus: "Backend · Web · Mobile",
    location: "Bogotá, Colombia",
    modality: "Remote / Hybrid / On-site",
    education: "CUN — Computer Engineering",
    bio: "Backend specialist with 7+ years designing REST APIs, relational data modeling and layered architecture (Clean Architecture, Repository). Core stack: C# / .NET Core, Python, SQL Server, PostgreSQL. I also build web clients (React, Next.js) and mobile apps (React Native / Expo) connected to those services. Experience with Docker deployments, CI/CD and production systems for fintech, agriculture and enterprise software.",
    experienceYears: "7+ years",
  },
  specialization: {
    backend: "C# / .NET Core / Python",
    web: "React / Next.js / TypeScript",
    mobile: "React Native / Expo",
    cloud: "Azure / Docker",
    data: "SQL Server / PostgreSQL / MySQL",
    devops: "Git / REST APIs / CI-CD",
  },
  specializationLabels: {
    backend: "Backend",
    web: "Web",
    mobile: "Mobile",
    cloud: "Cloud",
    data: "Data",
    devops: "DevOps",
  },
  profileLabels: {
    name: "Name",
    role: "Role",
    focus: "Focus",
    experience: "Experience",
    company: "Company",
    location: "Location",
    education: "Education",
    modality: "Modality",
  },
  hero: {
    ariaLabel: "I build systems that scale",
    headline1: "I build systems",
    headline2: "that",
    headlineAccent: "scale",
    subtitle:
      "I turn ideas into real digital products. Backend specialist with experience building web and mobile apps your users can use from day one.",
    ctaProjects: "View projects ↓",
    ctaContact: "Get in touch",
    termLines: [
      { prompt: "$", cmd: "whoami" },
      { output: "santiago.canon" },
      { prompt: "$", cmd: "cat role.txt" },
      {
        accent: "Senior Backend Developer",
        joiner: "|",
        accent2: "APIs · DB · Web/Mobile",
      },
      { prompt: "$", cmd: "uptime --years" },
      { success: "7+ years", dash: "—", msg: "systems nominal", check: true },
    ],
  },
  sections: {
    aboutKicker: "About",
    aboutTitle: "System Info",
    profileCard: "Profile",
    specializationCard: "Specialization",
    skillsKicker: "Tech stack",
    skillsTitle: "Tech Stack",
    skillsRunning: "Active",
    experienceKicker: "Career",
    experienceTitle: "System Log",
    projectsKicker: "Portfolio",
    projectsTitle: "Deployed Services",
    projectsSummary: (total, live, rest) =>
      `${total} services · ${live} in production · ${rest} private or local repos`,
    contactKicker: "Contact",
    contactTitle: "Shall we build something ",
    contactTitleAccent: "together",
    contactBody:
      "Got an idea, a product in progress or a system that needs to scale? Let's talk about getting it to production.",
    footer: "Designed and built by hand",
  },
  projects: {
    serviceActive: "active (running)",
    kubectlHeader: (ns) => `$ kubectl get deployments — namespace ${ns}`,
    privateBadge: "private",
    privateRepo: "private repo",
  },
  common: {
    github: "GitHub",
    linkedin: "LinkedIn",
    liveDemo: "Live demo →",
    home: "Home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    mobileNav: "Navigation menu",
    language: "Language",
  },
  experience: [
    {
      timestamp: "2023 — Present",
      role: "Senior Backend Developer",
      company: "InfoDesign Colombia",
      tag: "Remote",
      details: [
        "Design and development of scalable RESTful APIs with Clean Architecture and Repository pattern",
        "Creation and administration of SQL Server databases for production applications",
        "Real-time solutions with WebSockets for critical business flows",
        "Process automation that reduced manual work by 40%",
        "Mentoring junior developers on best practices and coding standards",
      ],
    },
    {
      timestamp: "Jun 2024 — Aug 2025",
      role: "Full-stack Developer (Blazor)",
      company: "Azesorarte Colombia SAS",
      tag: "Freelance",
      details: [
        "Full-stack development with Blazor: UI components, business logic and data layer",
        "End-to-end feature delivery (frontend and backend) under a freelance contract",
        "SQL Server integration and iterative delivery in a remote setup",
      ],
    },
    {
      timestamp: "2022 — 2023",
      role: "Junior Backend Developer",
      company: "Azesorarte Colombia SAS",
      tag: "Bogotá",
      details: [
        "Full-stack web applications for enterprise clients",
        "Collaboration with cross-functional teams (design, PM, QA) in Agile/Scrum",
        "SQL Server query optimization with 35% performance improvement",
        "Active participation in Scrum ceremonies and iterative delivery",
      ],
    },
    {
      timestamp: "2022",
      role: "Junior Backend Developer",
      company: "Empresariales SAS",
      tag: "Bogotá",
      details: [
        "Backend development support with C# and .NET",
        "Database management and maintenance assistance",
        "Contribution to internal tooling for operations",
      ],
    },
    {
      timestamp: "2020 — 2022",
      role: "HelpDesk",
      company: "Outsourcing S.A.S. BIC",
      tag: "Bogotá",
      details: [
        "Level 1 and 2 technical support for end users",
        "Hardware and software incident diagnosis and resolution",
        "Ticket, network, printer and peripheral device management",
        "User account administration and Active Directory / Office 365",
      ],
    },
  ],
  projectCopies: [
    {
      tag: "EdTech · Mobile",
      description:
        "Mobile app to learn English with grammar, categorized vocabulary and useful phrases. Interactive quizzes, progress profile and 100% offline with SQLite.",
    },
    {
      tag: "Fintech",
      description:
        "Full-stack personal finance system with interactive dashboard, income vs expense charts, filtered search and JWT authentication. Responsive grey-and-black design.",
    },
    {
      tag: "Fintech",
      description:
        "Web app for independent lenders: client, loan, installment and capital management plus PDF reports by email. Real-time dashboard with JWT auth, admin/user roles and Railway deploy.",
    },
    {
      tag: "Full-stack",
      description:
        "Personal PDF library: upload books, learning notes, glossaries and book-mode reading with animation. Express + Prisma backend, PDFs in PostgreSQL and admin panel with cascade delete.",
    },
    {
      tag: "Corporate",
      description:
        "Corporate website for an accounting and tax advisory firm in Bogotá. Next.js static export, Framer Motion animations, SEO (sitemap/JSON-LD) and automated GitHub Pages deploy.",
    },
    {
      tag: "Mobile",
      description:
        "Mobile productivity app with Pomodoro technique. Timestamp-based timer, tasks with pomodoro estimates, weekly stats, 16 themes and local persistence with notifications.",
    },
    {
      tag: "Agro · Analytics",
      description:
        "Agricultural cost management for greenhouse tomato production: dashboard, direct/indirect costs, scenario simulator with IRR/NPV/B/C and profitability projections.",
    },
    {
      tag: "Desktop · Python",
      description:
        "Desktop app with web UI to find heavy files, analyze deletion risk (high/medium/low) and move them safely to the recycle bin. Quick folder shortcuts and scan cancellation.",
    },
  ],
  stats: [
    { count: 7, suffix: "+", label: "Years of experience" },
    { count: 8, suffix: "", label: "GitHub projects" },
    { count: 3, suffix: "", label: "Live in production" },
    { count: 15, suffix: "", label: "Technologies in stack" },
  ],
};
