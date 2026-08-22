export interface StackCategory {
  id: string;
  label: string;
  icon: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "monitor",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: "smartphone",
    items: ["Flutter", "Riverpod", "Dart", "iOS", "Android"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    items: ["Node.js", "Rails", "Python", "PostgreSQL", "Redis", "REST API"],
  },
  {
    id: "infra",
    label: "Infra & DevOps",
    icon: "cloud",
    items: ["AWS", "Docker", "Vercel", "Railway", "CI/CD", "Nginx"],
  },
  {
    id: "tools",
    label: "Herramientas",
    icon: "wrench",
    items: ["Git", "Figma", "Sanity CMS", "Resend", "Stripe", "Cal.com"],
  },
];

// Flat list for backward compatibility
export const stackItems: string[] = stackCategories.flatMap((c) => c.items);
