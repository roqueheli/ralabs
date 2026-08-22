import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    pin: "PIN 01",
    title: "Descubrimiento",
    description: "Entendemos el problema real detrás de la idea.",
    delay: "0s",
  },
  {
    pin: "PIN 02",
    title: "Arquitectura",
    description: "Diseñamos el sistema antes de escribir código.",
    delay: "0.9s",
  },
  {
    pin: "PIN 03",
    title: "Desarrollo",
    description: "Sprints cortos, con entregas visibles cada semana.",
    delay: "1.8s",
  },
  {
    pin: "PIN 04",
    title: "Entrega",
    description: "Deploy, documentación y soporte post-lanzamiento.",
    delay: "2.7s",
  },
];
