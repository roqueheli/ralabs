import type { Project } from "@/types";

interface ProjectsSlideProps {
  projects: Project[];
}

export function ProjectsSlide({ projects }: ProjectsSlideProps) {
  return (
    <section id="proyectos" className="slide">
      <div className="board-dots" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-8 lg:pl-24 w-full relative z-10">
        <p className="eyebrow mb-2 r r1">{"// PROYECTOS"}</p>
        <h2 className="font-display font-semibold text-2xl lg:text-3xl mb-5 r r2">Componentes ya en producción</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, i) => (
            <div key={project.id} className={`chip rounded-lg p-4 r r${Math.min(i + 3, 6)}`}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-medium text-sm leading-tight">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1.5">
                      {project.name}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <span className="font-mono text-[9px] text-[color:var(--text-muted)] ml-2 shrink-0">{project.index}</span>
              </div>
              <p className="text-xs text-[color:var(--text-muted)] mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="pin text-[9px] px-1.5 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>
              {project.stores && project.stores.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-white/10">
                  {project.stores.map((store) => (
                    <a
                      key={store.label}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-medium grad-text hover:underline"
                    >
                      📲 {store.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="chip rounded-lg p-4 flex flex-col justify-between r r6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-medium text-sm">Tu proyecto</h3>
                <span className="font-mono text-[9px] text-[color:var(--text-muted)]">
                  /{String(projects.length + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs text-[color:var(--text-muted)]">Aún no está trazado.</p>
            </div>
            <a href="#contacto" className="text-xs grad-text font-medium mt-3">
              Iniciar conversación →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
