export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  category: "client" | "backend" | "data" | "realtime";
  icon: "smartphone" | "monitor" | "server" | "database" | "bolt" | "radio";
  x: number;
  y: number;
  description: string;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label: string;
}

export const architectureNodes: ArchitectureNode[] = [
  {
    id: "flutter",
    label: "Flutter App",
    sublabel: "iOS · Android",
    category: "client",
    icon: "smartphone",
    x: 16,
    y: 14,
    description:
      "App nativa para clientes finales y profesionales. Consume la API REST y escucha canales de Pusher para reflejar cambios de agenda al instante.",
  },
  {
    id: "nextjs",
    label: "Next.js Dashboard",
    sublabel: "Panel web",
    category: "client",
    icon: "monitor",
    x: 84,
    y: 14,
    description:
      "Panel de administración para el negocio: agenda, clientes y reportes. Habla con la misma API y recibe actualizaciones en vivo por WebSocket.",
  },
  {
    id: "rails",
    label: "Rails API",
    sublabel: "Backend REST",
    category: "backend",
    icon: "server",
    x: 50,
    y: 48,
    description:
      "Núcleo del sistema: expone la API, aplica las reglas de negocio y coordina la sincronización entre la app móvil y el panel web.",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    sublabel: "Base de datos",
    category: "data",
    icon: "database",
    x: 30,
    y: 82,
    description:
      "Almacena reservas, usuarios y negocios de forma relacional y persistente, con backups automáticos gestionados por Heroku.",
  },
  {
    id: "redis",
    label: "Redis",
    sublabel: "Cache · Sidekiq",
    category: "data",
    icon: "bolt",
    x: 70,
    y: 82,
    description:
      "Acelera respuestas con cache y sostiene las colas de Sidekiq para notificaciones y tareas en segundo plano.",
  },
  {
    id: "pusher",
    label: "Pusher",
    sublabel: "Tiempo real",
    category: "realtime",
    icon: "radio",
    x: 92,
    y: 48,
    description:
      "Canales en tiempo real: cuando algo cambia en el backend, el evento llega al instante a todos los clientes conectados.",
  },
];

export const architectureEdges: ArchitectureEdge[] = [
  { from: "flutter", to: "rails", label: "REST / JSON" },
  { from: "nextjs", to: "rails", label: "REST / JSON" },
  { from: "rails", to: "postgres", label: "SQL" },
  { from: "rails", to: "redis", label: "Cache + Jobs" },
  { from: "rails", to: "pusher", label: "Evento" },
  { from: "pusher", to: "flutter", label: "Push" },
  { from: "pusher", to: "nextjs", label: "Push" },
];

export const architectureBoundary = {
  label: "Heroku",
  description:
    "Rails API, PostgreSQL y Redis corren dentro de Heroku, con despliegue continuo y escalado independiente por dyno.",
  x: 13,
  y: 30,
  width: 74,
  height: 66,
};
