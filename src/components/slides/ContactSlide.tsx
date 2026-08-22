"use client";

import { useState, type FormEvent } from "react";

export function ContactSlide() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="slide">
      <div className="board-dots" aria-hidden="true" />
      <div className="max-w-3xl mx-auto px-8 lg:pl-24 w-full relative z-10">
        <p className="eyebrow mb-3 r r1">{"// SIGUIENTE NODO"}</p>
        <h2 className="font-display font-semibold text-3xl lg:text-4xl mb-4 r r2">
          ¿Tienes una idea?
          <br />
          Vamos a trazar el circuito juntos.
        </h2>
        <p className="text-[color:var(--text-muted)] mb-8 r r3">
          Te respondemos en 24–48h con una primera lectura técnica, sin costo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 r r4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-mono text-[11px] text-[color:var(--text-muted)] mb-1.5">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Tu nombre"
                className="w-full bg-[var(--bg-panel)] border border-[var(--border-soft)] rounded-md px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--cyan)] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-[11px] text-[color:var(--text-muted)] mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="w-full bg-[var(--bg-panel)] border border-[var(--border-soft)] rounded-md px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--cyan)] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-[11px] text-[color:var(--text-muted)] mb-1.5">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full bg-[var(--bg-panel)] border border-[var(--border-soft)] rounded-md px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--cyan)] transition-colors resize-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary px-7 py-3 rounded-md text-sm node-pulse disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            <a
              href={process.env.NEXT_PUBLIC_CAL_URL || "https://cal.com/ralabs/consulta"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-7 py-3 rounded-md text-sm inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar cita
            </a>

            <a
              href="https://wa.me/56992469431?text=Hola%2C%20vengo%20desde%20ralabs.co%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-7 py-3 rounded-md text-sm inline-flex items-center gap-2 hover:border-[#25D366]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {status === "sent" && (
              <span className="text-sm text-[var(--cyan)]">✓ Mensaje enviado</span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-400">Error al enviar. Intenta de nuevo.</span>
            )}
          </div>
        </form>

        <p className="font-mono text-[11px] text-[color:var(--text-muted)] mt-12 r r5">
          © 2026 RA Labs — todos los circuitos reservados
        </p>
      </div>
    </section>
  );
}
