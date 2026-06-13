import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    title: "Santiago Cañon Morales — Senior Backend Developer",
    description:
      "Senior Backend Developer — C#, .NET Core, Python, APIs REST, React, Next.js, React Native. 7+ años llevando productos digitales a producción.",
  },
  nav: [
    { label: "Sobre mí", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ],
  personal: {
    role: "Senior Backend Developer",
    focus: "Backend · Web · Mobile",
    location: "Bogotá, Colombia",
    modality: "Remoto / Híbrido / Presencial",
    education: "CUN — Ingeniería Informática",
    bio: "Especialista en backend con 7+ años diseñando APIs REST, modelado relacional y arquitectura en capas (Clean Architecture, Repository). Stack principal: C# / .NET Core, Python, SQL Server, PostgreSQL. También desarrollo clientes web (React, Next.js) y móviles (React Native / Expo) conectados a esos servicios. Experiencia en despliegues con Docker, integración continua y sistemas en producción para fintech, agro y software empresarial.",
    experienceYears: "7+ años",
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
    data: "Datos",
    devops: "DevOps",
  },
  profileLabels: {
    name: "Nombre",
    role: "Rol",
    focus: "Enfoque",
    experience: "Experiencia",
    company: "Empresa",
    location: "Ubicación",
    education: "Formación",
    modality: "Modalidad",
  },
  hero: {
    ariaLabel: "Construyo sistemas que escalan",
    headline1: "Construyo sistemas",
    headline2: "que",
    headlineAccent: "escalan",
    subtitle:
      "Transformo ideas en productos digitales reales. Especialista en backend, con experiencia creando apps web y móviles que tus usuarios pueden usar desde el día uno.",
    ctaProjects: "Ver proyectos ↓",
    ctaContact: "Contactar",
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
      { success: "7+ años", dash: "—", msg: "systems nominal", check: true },
    ],
  },
  sections: {
    aboutKicker: "Sobre mí",
    aboutTitle: "System Info",
    profileCard: "Perfil",
    specializationCard: "Especialización",
    skillsKicker: "Stack",
    skillsTitle: "Stack técnico",
    skillsRunning: "Activo",
    experienceKicker: "Trayectoria",
    experienceTitle: "System Log",
    projectsKicker: "Portafolio",
    projectsTitle: "Deployed Services",
    projectsSummary: (total, live, rest) =>
      `${total} servicios · ${live} en producción · ${rest} repos privados o locales`,
    contactKicker: "Contacto",
    contactTitle: "¿Construimos algo ",
    contactTitleAccent: "juntos",
    contactBody:
      "¿Tienes una idea, un producto en marcha o un sistema que necesita crecer? Hablemos de cómo llevarlo a producción.",
    footer: "Diseñado y desarrollado a mano",
  },
  projects: {
    serviceActive: "activo (running)",
    kubectlHeader: (ns) => `$ kubectl get deployments — namespace ${ns}`,
    privateBadge: "privado",
    privateRepo: "repo privado",
  },
  common: {
    github: "GitHub",
    linkedin: "LinkedIn",
    liveDemo: "Demo en vivo →",
    home: "Inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNav: "Navegación principal",
    mobileNav: "Menú de navegación",
    language: "Idioma",
  },
  experience: [
    {
      timestamp: "2023 — Presente",
      role: "Senior Backend Developer",
      company: "InfoDesign Colombia",
      tag: "Remoto",
      details: [
        "Diseño y desarrollo de APIs RESTful escalables con Clean Architecture y patrón Repository",
        "Creación y administración de bases de datos SQL Server para aplicaciones en producción",
        "Soluciones en tiempo real con WebSockets para flujos de negocio críticos",
        "Automatización de procesos que redujo el trabajo manual en un 40%",
        "Mentoría a desarrolladores junior en buenas prácticas y estándares de código",
      ],
    },
    {
      timestamp: "Jun 2024 — Ago 2025",
      role: "Full-stack Developer (Blazor)",
      company: "Azesorarte Colombia SAS",
      tag: "Freelance",
      details: [
        "Desarrollo full-stack con Blazor: componentes UI, lógica de negocio y capa de datos",
        "Construcción de funcionalidades de punta a punta (frontend y backend) bajo contrato freelance",
        "Integración con SQL Server y entrega iterativa en modalidad remota",
      ],
    },
    {
      timestamp: "2022 — 2023",
      role: "Junior Backend Developer",
      company: "Azesorarte Colombia SAS",
      tag: "Bogotá",
      details: [
        "Desarrollo de aplicaciones web full-stack para clientes empresariales",
        "Colaboración con equipos cross-funcionales (diseño, PM, QA) en entorno Agile/Scrum",
        "Optimización de queries SQL Server con mejora del 35% en rendimiento",
        "Participación activa en ceremonias Scrum y entrega iterativa de features",
      ],
    },
    {
      timestamp: "2022",
      role: "Junior Backend Developer",
      company: "Empresariales SAS",
      tag: "Bogotá",
      details: [
        "Soporte en tareas de desarrollo backend con C# y .NET",
        "Asistencia en gestión y mantenimiento de bases de datos SQL Server",
        "Contribución al desarrollo de herramientas internas para operaciones",
      ],
    },
    {
      timestamp: "2020 — 2022",
      role: "HelpDesk",
      company: "Outsourcing S.A.S. BIC",
      tag: "Bogotá",
      details: [
        "Soporte técnico nivel 1 y 2 para usuarios finales",
        "Diagnóstico y resolución de incidencias de hardware y software",
        "Gestión de tickets, redes, impresoras y dispositivos periféricos",
        "Administración de cuentas de usuario y Active Directory / Office 365",
      ],
    },
  ],
  projectCopies: [
    {
      tag: "EdTech · Mobile",
      description:
        "App móvil para aprender inglés con gramática, vocabulario por categorías y frases útiles. Quizzes interactivos, perfil con progreso y funcionamiento 100% offline con SQLite.",
    },
    {
      tag: "Fintech",
      description:
        "Sistema full-stack de finanzas personales con dashboard interactivo, gráficos de ingresos vs gastos, búsqueda con filtros y autenticación JWT. Diseño responsive en gris y negro.",
    },
    {
      tag: "Fintech",
      description:
        "App web para prestamistas independientes: gestión de clientes, préstamos, cuotas, capital y consolidados PDF por correo. Dashboard en tiempo real con auth JWT, roles admin/user y deploy en Railway.",
    },
    {
      tag: "Full-stack",
      description:
        "Biblioteca PDF personal: sube libros, anota aprendizajes, arma glosarios y lee en modo libro con animación. Backend Express + Prisma, PDFs en PostgreSQL y panel admin con borrado en cascada.",
    },
    {
      tag: "Corporativo",
      description:
        "Sitio web corporativo para firma de asesoría contable y tributaria en Bogotá. Static export con Next.js, animaciones Framer Motion, SEO (sitemap/JSON-LD) y deploy automático en GitHub Pages.",
    },
    {
      tag: "Mobile",
      description:
        "App móvil de productividad con técnica Pomodoro. Temporizador por timestamps, tareas con estimación de pomodoros, estadísticas semanales, 16 temas y persistencia local con notificaciones.",
    },
    {
      tag: "Agro · Analytics",
      description:
        "Gestión de costos agrícolas para tomate bajo invernadero: dashboard, costos directos/indirectos, simulador de escenarios con TIR/VAN/B/C y proyecciones de rentabilidad.",
    },
    {
      tag: "Desktop · Python",
      description:
        "App de escritorio con UI web para buscar archivos pesados, analizar riesgo de eliminación (alto/medio/bajo) y moverlos a la papelera de forma segura. Atajos a carpetas comunes y cancelación de scan.",
    },
  ],
  stats: [
    { count: 7, suffix: "+", label: "Años de experiencia" },
    { count: 8, suffix: "", label: "Proyectos en GitHub" },
    { count: 3, suffix: "", label: "En producción" },
    { count: 15, suffix: "", label: "Tecnologías en stack" },
  ],
};
