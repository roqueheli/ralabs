import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "klipperapp-mobile",
    index: "/01",
    name: "KlipperApp Mobile",
    description:
      "App móvil nativa para gestión de agenda híbrida inteligente en negocios de belleza. Disponible en App Store y Play Store.",
    stack: ["Flutter", "Riverpod", "Go Router", "Dio"],
    url: "https://www.klipperapp.com",
    stores: [
      { label: "App Store", url: "https://apps.apple.com/us/app/klipperapp/id6755696003?l=pt-BR" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.klipperapp.klipperapp_flutter&hl=es_CL" },
    ],
  },
  {
    id: "klipperapp-panel",
    index: "/02",
    name: "KlipperApp Web",
    description:
      "Dashboard web para administración de negocios: agenda, clientes, reportes y configuración, con backend API en Rails.",
    stack: ["Next.js", "React Query", "Zustand", "Rails", "PostgreSQL"],
    url: "https://www.klipperapp.com",
  },
  {
    id: "barber-consulting",
    index: "/03",
    name: "Barber Consulting",
    description:
      "Landing page con animaciones avanzadas y CMS headless para consultora de barberías.",
    stack: ["Next.js", "GSAP", "Framer Motion", "Sanity"],
    url: "https://fn-barberconsulting.com",
  },
  {
    id: "pm-construcciones",
    index: "/04",
    name: "PM Construcciones",
    description:
      "Sitio web corporativo para constructora con CMS, galería de servicios y formulario de contacto.",
    stack: ["Next.js", "Sanity", "Framer Motion", "Resend"],
    url: "https://pm-construcciones-landing-production.up.railway.app",
  },
  {
    id: "lynk-portal",
    index: "/05",
    name: "Lynk Portal",
    description:
      "Portal web con contenido dinámico gestionado desde Sanity CMS y styled-components.",
    stack: ["Next.js", "Sanity", "Styled Components"],
    url: "https://lynkportal.netlify.app",
  },
  {
    id: "root-studio",
    index: "/06",
    name: "Root Studio",
    description:
      "Sitio web para estudio creativo con gestión de contenido headless.",
    stack: ["Next.js", "Sanity"],
    url: "https://rootstudiome.com",
  },
];
