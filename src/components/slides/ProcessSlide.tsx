import type { ProcessStep } from "@/types";

interface ProcessSlideProps {
  steps: ProcessStep[];
}

export function ProcessSlide({ steps }: ProcessSlideProps) {
  return (
    <section id="proceso" className="slide">
      <div className="board-dots" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-8 lg:pl-24 w-full relative z-10">
        <p className="eyebrow mb-2 r r1">{"// CÓMO TRABAJAMOS"}</p>
        <h2 className="font-display font-semibold text-3xl mb-14 r r2">Cuatro puntos de conexión</h2>

        <div className="relative h-px bg-[rgba(148,163,184,0.25)] mb-14">
          <div className="pulse-dot" />
        </div>

        <div className="grid sm:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.pin} className={`r r${Math.min(i + 3, 6)}`}>
              <span
                className="node-pulse inline-block w-2 h-2 rounded-full mb-3"
                style={{ background: "var(--cyan)", animationDelay: step.delay }}
              />
              <p className="font-mono text-[11px] mb-1" style={{ color: "var(--cyan)" }}>
                {step.pin}
              </p>
              <h3 className="font-display font-medium mb-1.5">{step.title}</h3>
              <p className="text-sm text-[color:var(--text-muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
