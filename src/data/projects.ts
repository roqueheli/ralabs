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
    id: "klipperapp-tienda",
    index: "/03",
    name: "KlipperApp Tienda",
    description:
      "Tienda online por negocio: catálogo propio, checkout con Stripe, pagos por país, campañas con Meta Pixel y ventas.",
    stack: ["Next.js", "Rails", "Stripe Connect", "Meta Pixel"],
    url: "https://www.klipperapp.com",
  },
  {
    id: "dra-carolina-cruz",
    index: "/04",
    name: "Dra. Carolina Cruz",
    description:
      "Landing para médico cirujano con CMS, reseñas moderadas, formulario anti-spam y correos transaccionales.",
    stack: ["Next.js", "Sanity", "Tailwind", "Resend"],
    url: "https://dracarolinacruz.com",
  },
  {
    id: "sirvofood",
    index: "/05",
    name: "SirvoFood",
    description:
      "Gestión de restaurantes multi-sucursal: mesas, caja, inventario con recetas, pedidos online con Mercado Pago y estadísticas.",
    stack: ["Next.js", "Rails", "PostgreSQL", "PWA"],
    url: "https://www.sirvofood.com",
  },
  {
    id: "barber-consulting",
    index: "/06",
    name: "Barber Consulting",
    description:
      "Landing page con animaciones avanzadas y CMS headless para consultora de barberías.",
    stack: ["Next.js", "GSAP", "Framer Motion", "Sanity"],
    url: "https://fn-barberconsulting.com",
  },
  {
    id: "pm-construcciones",
    index: "/07",
    name: "PM Construcciones",
    description:
      "Sitio web corporativo para constructora con CMS, galería de servicios y formulario de contacto.",
    stack: ["Next.js", "Sanity", "Framer Motion", "Resend"],
    url: "https://pm-construcciones-landing-production.up.railway.app",
  },
  {
    id: "lynk-portal",
    index: "/08",
    name: "Lynk Portal",
    description:
      "Portal web con contenido dinámico gestionado desde Sanity CMS y styled-components.",
    stack: ["Next.js", "Sanity", "Styled Components"],
    url: "https://lynkportal.netlify.app",
  },
  {
    id: "root-studio",
    index: "/09",
    name: "Root Studio",
    description:
      "Sitio web para estudio creativo con gestión de contenido headless.",
    stack: ["Next.js", "Sanity"],
    url: "https://rootstudiome.com",
  },
];
