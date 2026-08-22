export interface Project {
  id: string;
  index: string;
  name: string;
  description: string;
  stack: string[];
  url?: string;
  stores?: { label: string; url: string }[];
}

export interface ProcessStep {
  pin: string;
  title: string;
  description: string;
  /** Retraso de animación del pulso del nodo, ej. "0.9s" */
  delay: string;
}

export type SlideId = "hero" | "proyectos" | "proceso" | "stack" | "contacto";

export interface SlideMeta {
  id: SlideId;
  label: string;
}
