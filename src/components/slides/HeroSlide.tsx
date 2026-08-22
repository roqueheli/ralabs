export function HeroSlide() {
  return (
    <section id="hero" className="slide">
      <div className="board-dots" aria-hidden="true" />
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.5 }}
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="draw" d="M0 120 H260 L320 180 H620" stroke="#2F6FED" strokeWidth={1.5} fill="none" />
        <path
          className="draw"
          d="M1000 560 H700 L640 500 H360"
          stroke="#4DEEEA"
          strokeWidth={1.5}
          fill="none"
          style={{ transitionDelay: ".25s" }}
        />
        <circle cx="320" cy="180" r="3.5" fill="#2F6FED" />
        <circle cx="640" cy="500" r="3.5" fill="#4DEEEA" />
      </svg>

      <div className="max-w-4xl mx-auto px-8 lg:pl-24 relative z-10">
        <p className="eyebrow mb-5 r r1">{"// STUDIO DE SOFTWARE A MEDIDA"}</p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
          <span className="word" style={{ transitionDelay: ".10s" }}>Cualquier</span>{" "}
          <span className="word" style={{ transitionDelay: ".16s" }}>idea</span>{" "}
          <span className="word" style={{ transitionDelay: ".22s" }}>es</span>{" "}
          <span className="word" style={{ transitionDelay: ".28s" }}>un</span>{" "}
          <span className="word" style={{ transitionDelay: ".34s" }}>circuito</span>
          <br className="hidden sm:block" />
          <span className="word" style={{ transitionDelay: ".40s" }}>que</span>{" "}
          <span className="word" style={{ transitionDelay: ".46s" }}>aún</span>{" "}
          <span className="word" style={{ transitionDelay: ".52s" }}>no</span>{" "}
          <span className="word grad-text" style={{ transitionDelay: ".58s" }}>hemos</span>{" "}
          <span className="word grad-text" style={{ transitionDelay: ".64s" }}>trazado.</span>
        </h1>
        <p className="mt-6 text-lg text-[color:var(--text-muted)] max-w-xl r r4">
          Diseñamos y construimos software a la medida — de un MVP a una plataforma completa, punto por punto,
          hasta que funciona.
        </p>
        <div className="mt-9 flex flex-wrap gap-4 r r5">
          <a href="#proyectos" className="btn-primary px-6 py-3 rounded-md text-sm">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn-ghost px-6 py-3 rounded-md text-sm">
            Cuéntanos tu idea
          </a>
        </div>
      </div>

      <div className="scrollcue r r6">
        <span className="font-mono text-[10px] text-[color:var(--text-muted)]">SCROLL</span>
        <div className="bar" />
      </div>
    </section>
  );
}
