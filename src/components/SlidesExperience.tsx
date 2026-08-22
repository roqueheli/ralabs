"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { ProgressTrace } from "@/components/ProgressTrace";
import { NavDots } from "@/components/NavDots";
import { ScanlineOverlay } from "@/components/ScanlineOverlay";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { ProjectsSlide } from "@/components/slides/ProjectsSlide";
import { ProcessSlide } from "@/components/slides/ProcessSlide";
import { StackSlide } from "@/components/slides/StackSlide";
import { ContactSlide } from "@/components/slides/ContactSlide";
import { slides } from "@/data/slides";
import { projects } from "@/data/projects";
import { processSteps } from "@/data/process";
import { stackCategories } from "@/data/stack";

const ACTIVE_THRESHOLD = 0.55;

export function SlidesExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const traceFillRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(slides[0].id);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slideEls = Array.from(container.querySelectorAll<HTMLElement>(".slide"));

    // Activa la primera diapositiva de inmediato (dispara sus animaciones de entrada).
    slideEls[0]?.classList.add("active");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > ACTIVE_THRESHOLD) {
            entry.target.classList.add("active");
            setActiveId(entry.target.id);
          }
        });
      },
      { root: container, threshold: [ACTIVE_THRESHOLD] }
    );
    slideEls.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (!traceFillRef.current) return;
      const scrollable = container.scrollHeight - container.clientHeight;
      const pct = scrollable > 0 ? container.scrollTop / scrollable : 0;
      traceFillRef.current.style.height = `${Math.min(100, Math.max(0, pct * 100))}%`;
    };
    container.addEventListener("scroll", handleScroll, { passive: true });

    const handleKeydown = (e: KeyboardEvent) => {
      const idx = slideEls.findIndex((el) => el.classList.contains("active"));
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        slideEls[Math.min(idx + 1, slideEls.length - 1)]?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        slideEls[Math.max(idx - 1, 0)]?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleNavigate = (id: string) => {
    containerRef.current?.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScanlineOverlay />
      <Logo />
      <ProgressTrace ref={traceFillRef} />
      <NavDots slides={slides} activeId={activeId} onNavigate={handleNavigate} />

      <div className="slides" ref={containerRef}>
        <HeroSlide />
        <ProjectsSlide projects={projects} />
        <ProcessSlide steps={processSteps} />
        <StackSlide categories={stackCategories} />
        <ContactSlide />
      </div>
    </>
  );
}
