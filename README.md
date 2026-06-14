# Portfolio — Santiago Cañon Morales

Sitio personal de portfolio construido con Next.js 16, React 19 y Tailwind CSS 4. Presenta perfil profesional, stack, experiencia y proyectos con estética terminal y soporte bilingüe (EN/ES).

## Inicio rápido

Requisitos: Node.js 20+ y npm.

```bash
git clone https://github.com/santim025/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El servidor usa Webpack (`next dev --webpack`) por compatibilidad estable en desarrollo.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en el puerto 3000 |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build generado |
| `npm run lint` | ESLint |

## Características

- **App Router** con una sola página (`src/app/page.tsx`) compuesta por secciones modulares.
- **i18n EN/ES** con selector en el header; idioma por defecto inglés, persistido en `localStorage` (`portfolio-locale`).
- **Tema terminal**: System Info, System Log, Deployed Services, Tech Stack.
- **Proyectos reales** enlazados a GitHub y demos en producción cuando aplica.
- **Animaciones** con respeto a `prefers-reduced-motion`.

## Estructura del proyecto

```
src/
├── app/              # layout, página principal, estilos globales
├── components/       # UI por sección (Hero, ProjectsBento, etc.)
├── context/          # LocaleProvider y hook useLocale()
├── data/static.ts    # Datos no traducibles: proyectos, skills, contacto
├── i18n/
│   ├── locales/en.ts # Textos en inglés
│   ├── locales/es.ts # Textos en español
│   └── types.ts      # Tipos del diccionario i18n
└── hooks/            # useCountUp, useReducedMotion
```

## Editar contenido

### Datos fijos (URLs, stack, repos)

Archivo: `src/data/static.ts`

- `personalStatic` — nombre, email, GitHub, LinkedIn, username visible.
- `projectMeta` — título, stack, `repoUrl`, `liveUrl`, `featured`, `isPrivate`.
- `skills` — tecnologías del grid con clases Devicon.

### Textos traducibles

Archivos: `src/i18n/locales/en.ts` y `src/i18n/locales/es.ts`

- Bio, experiencia laboral, descripciones de proyectos (`projectCopies`), stats del hero, labels de secciones.
- Los proyectos se combinan en runtime: metadata de `static.ts` + copy de `projectCopies` por índice.

### Metadatos SEO

- Valores por defecto en `src/app/layout.tsx`.
- El cliente actualiza `title`, `description` y `lang` al cambiar idioma (`LocaleContext`).

## Despliegue

Genera un build estático listo para cualquier hosting compatible con Next.js:

```bash
npm run build
npm run start
```

También puedes desplegar en Vercel, Railway u otro proveedor que soporte Next.js 16.

## Stack

- [Next.js 16](https://nextjs.org/) · [React 19](https://react.dev/) · [Tailwind CSS 4](https://tailwindcss.com/)
- [Devicons](https://devicon.dev/) (CDN) para iconos de tecnologías
- Fuentes: Inter, JetBrains Mono (`next/font`)

## Licencia

Proyecto privado/personal. Consultar al autor antes de reutilizar el diseño o el contenido.
