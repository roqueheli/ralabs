import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "fintech",
    index: "/01",
    name: "Fintech Dashboard",
    description: "Analítica en tiempo real para pagos multi-moneda.",
    stack: ["Next.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "logistics",
    index: "/02",
    name: "Logistics Platform",
    description: "Microservicios para transportistas y rastreo de flotas.",
    stack: ["Node.js", "Docker", "AWS"],
  },
  {
    id: "healthcare",
    index: "/03",
    name: "Healthcare Portal",
    description: "Agendamiento y expedientes clínicos por roles.",
    stack: ["React", "TypeScript", "HIPAA"],
  },
];
