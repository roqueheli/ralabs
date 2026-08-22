import type { Project } from "@/types";

interface ProjectsSlideProps {
  projects: Project[];
}

export function ProjectsSlide({ projects }: ProjectsSlideProps) {
  return (
    <section id="proyectos" className="slide">
      <div className="board-dots" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-8 lg:pl-24 w-full relative z-10">
        <p className="eyebrow mb-2 r r1">{"// PROYECTOS"}</p>
        <h2 className="font-display font-semibold text-3xl mb-8 r r2">Componentes ya en producción</h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div key={project.id} className={`chip rounded-lg p-5 r r${Math.min(i + 3, 6)}`}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-medium text-base">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="grad-text hover:underline">
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <span className="font-mono text-[10px] text-[color:var(--text-muted)]">{project.index}</span>
              </div>
              <p className="text-sm text-[color:var(--text-muted)] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="pin">
                    {tech}
                  </span>
                ))}
              </div>
              {project.stores && project.stores.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
                  {project.stores.map((store) => (
                    <a
                      key={store.label}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium grad-text hover:underline"
                    >
                      📲 {store.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="chip rounded-lg p-5 flex flex-col justify-between r r6">
            <div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-medium text-base">Tu proyecto</h3>
                <span className="font-mono text-[10px] text-[color:var(--text-muted)]">
                  /{String(projects.length + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm text-[color:var(--text-muted)]">Aún no está trazado.</p>
            </div>
            <a href="#contacto" className="text-sm grad-text font-medium mt-3">
              Iniciar conversación →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
