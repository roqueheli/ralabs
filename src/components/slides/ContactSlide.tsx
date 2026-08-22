export function ContactSlide() {
  return (
    <section id="contacto" className="slide">
      <div className="board-dots" aria-hidden="true" />
      <div className="max-w-3xl mx-auto px-8 lg:pl-24 w-full relative z-10 text-center lg:text-left">
        <p className="eyebrow mb-3 r r1">{"// SIGUIENTE NODO"}</p>
        <h2 className="font-display font-semibold text-3xl lg:text-4xl mb-4 r r2">
          ¿Tienes una idea?
          <br />
          Vamos a trazar el circuito juntos.
        </h2>
        <p className="text-[color:var(--text-muted)] mb-8 r r3">
          Te respondemos en 24–48h con una primera lectura técnica, sin costo.
        </p>
        <a
          href="mailto:hola@ralabs.co"
          className="btn-primary inline-block px-7 py-3 rounded-md text-sm r r4 node-pulse"
        >
          Escríbenos
        </a>
        <p className="font-mono text-[11px] text-[color:var(--text-muted)] mt-16 r r5">
          © 2026 RA Labs — todos los circuitos reservados
        </p>
      </div>
    </section>
  );
}
