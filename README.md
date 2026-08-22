# RA Labs

Sitio web de una sola página para RA Labs, estudio de desarrollo de software a medida.
Construido como una experiencia de scroll tipo "diapositivas" (scroll-snap) con estética de
circuito impreso, en línea con el logo de la marca.

## Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [@fontsource](https://fontsource.org/) para fuentes autohospedadas (sin depender de un
  fetch en vivo a Google Fonts durante el build)

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para producción:

```bash
npm run build
npm run start
```

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx       → Metadata, imports de fuentes, layout raíz
│   ├── page.tsx         → Monta <SlidesExperience />
│   └── globals.css      → Design tokens (colores, tipografía) y todo el sistema de animación
│
├── components/
│   ├── SlidesExperience.tsx   → Orquesta el scroll-snap, IntersectionObserver,
│   │                            barra de progreso y navegación por teclado
│   ├── Logo.tsx               → Isotipo fijo (esquina superior izquierda)
│   ├── NavDots.tsx            → Puntos de navegación por sección (derecha)
│   ├── ProgressTrace.tsx      → Barra de progreso tipo "traza de circuito" (izquierda)
│   ├── ScanlineOverlay.tsx    → Efecto ambiental de scanline
│   └── slides/
│       ├── HeroSlide.tsx
│       ├── ProjectsSlide.tsx
│       ├── ProcessSlide.tsx
│       ├── StackSlide.tsx
│       └── ContactSlide.tsx
│
├── data/
│   ├── projects.ts      → Lista de proyectos destacados (editar aquí para agregar los tuyos)
│   ├── process.ts        → Pasos del proceso de trabajo
│   ├── stack.ts          → Badges del stack tecnológico
│   └── slides.ts         → Metadata de las 5 secciones (id + label) para la navegación
│
└── types/
    └── index.ts          → Interfaces compartidas (Project, ProcessStep, SlideMeta)
```

## Cómo editar el contenido

Todo el contenido variable vive en `src/data/`, tipado con las interfaces de `src/types/`.
No hace falta tocar los componentes para:

- **Agregar/editar proyectos** → `src/data/projects.ts`
- **Cambiar los pasos del proceso** → `src/data/process.ts`
- **Actualizar el stack tecnológico** → `src/data/stack.ts`

## Diseño

- **Paleta**: fondo azul-noche (`#080B14`), acentos azul (`#2F6FED`) y cian (`#4DEEEA`) —
  tomados directamente del logo.
- **Tipografía**: `Space Grotesk` (encabezados), `Inter` (cuerpo), `JetBrains Mono`
  (etiquetas, pines, datos técnicos).
- **Motivo visual**: una "espina" de circuito recorre la página (barra de progreso a la
  izquierda) conectando cada sección como si fueran componentes soldados a la misma placa.
- Cada sección ocupa el 100% del viewport y usa `scroll-snap` para comportarse como
  diapositivas. Las animaciones de entrada se disparan por sección vía `IntersectionObserver`,
  y se respetan las preferencias de `prefers-reduced-motion`.

## Próximos pasos sugeridos

- Conectar el formulario de contacto a un servicio real (ej. Resend, Formspree) en vez del
  `mailto:` actual.
- Reemplazar los proyectos de ejemplo por casos reales, idealmente con capturas o mini
  case studies enlazando a `/proyectos/[slug]`.
- Agregar analítica (Vercel Analytics o Plausible).
- Deploy recomendado: [Vercel](https://vercel.com/) (zero-config para Next.js).
