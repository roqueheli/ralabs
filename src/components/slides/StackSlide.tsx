import type { StackCategory } from "@/data/stack";

interface StackSlideProps {
  categories: StackCategory[];
}

function CategoryIcon({ icon }: { icon: string }) {
  const props = { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (icon) {
    case "monitor":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case "server":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return null;
  }
}

export function StackSlide({ categories }: StackSlideProps) {
  return (
    <section id="stack" className="slide">
      <div className="board-dots" aria-hidden="true" />

      {/* Animated connection lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute w-full h-full opacity-20">
          <line x1="20%" y1="30%" x2="45%" y2="45%" className="circuit-line" />
          <line x1="45%" y1="45%" x2="75%" y2="35%" className="circuit-line" />
          <line x1="30%" y1="60%" x2="60%" y2="65%" className="circuit-line" />
          <line x1="60%" y1="65%" x2="80%" y2="55%" className="circuit-line" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-8 lg:pl-24 w-full relative z-10">
        <p className="eyebrow mb-2 r r1">{"// STACK"}</p>
        <h2 className="font-display font-semibold text-3xl mb-3 r r2">
          Herramientas con las que conectamos todo
        </h2>
        <p className="text-[color:var(--text-muted)] text-sm mb-8 r r3">
          Cada proyecto necesita su circuito. Elegimos la combinación exacta para tu caso.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.id}
              className={`stack-card chip rounded-lg p-5 r r${Math.min(catIdx + 3, 6)}`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-[var(--cyan)]">
                  <CategoryIcon icon={cat.icon} />
                </span>
                <h3 className="font-display font-medium text-sm">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <span
                    key={item}
                    className="pin pin-in"
                    style={{ transitionDelay: `${0.08 * (catIdx * 3 + i + 1)}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
