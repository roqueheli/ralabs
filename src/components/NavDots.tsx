"use client";

import type { SlideMeta } from "@/types";

interface NavDotsProps {
  slides: SlideMeta[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export function NavDots({ slides, activeId, onNavigate }: NavDotsProps) {
  return (
    <div className="navdots" role="tablist" aria-label="Secciones de la página">
      {slides.map((slide) => (
        <button
          key={slide.id}
          type="button"
          role="tab"
          aria-selected={activeId === slide.id}
          aria-label={slide.label}
          className={`navdot ${activeId === slide.id ? "active" : ""}`}
          onClick={() => onNavigate(slide.id)}
        />
      ))}
    </div>
  );
}
