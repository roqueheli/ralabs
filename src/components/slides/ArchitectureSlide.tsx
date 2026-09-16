"use client";

import { useState } from "react";
import {
  architectureNodes,
  architectureEdges,
  architectureBoundary,
  type ArchitectureNode,
} from "@/data/architecture";

const HEROKU_GROUP = ["rails", "postgres", "redis"];

function NodeIcon({ icon }: { icon: ArchitectureNode["icon"] }) {
  const props = {
    width: 18,
    height: 18,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "smartphone":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
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
    case "database":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "radio":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
          <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
        </svg>
      );
    default:
      return null;
  }
}

export function ArchitectureSlide() {
  const [selected, setSelected] = useState<string | null>(null);

  const nodeById = (id: string) => architectureNodes.find((n) => n.id === id)!;

  const connectedIds = (() => {
    if (!selected) return null;
    if (selected === "heroku") return new Set(HEROKU_GROUP);
    const ids = new Set<string>([selected]);
    architectureEdges.forEach((e) => {
      if (e.from === selected) ids.add(e.to);
      if (e.to === selected) ids.add(e.from);
    });
    return ids;
  })();

  const isEdgeActive = (from: string, to: string) => {
    if (!selected) return false;
    if (selected === "heroku") return HEROKU_GROUP.includes(from) && HEROKU_GROUP.includes(to);
    return from === selected || to === selected;
  };

  const activeDescription =
    selected === "heroku"
      ? { title: architectureBoundary.label, text: architectureBoundary.description }
      : selected
        ? { title: nodeById(selected).label, text: nodeById(selected).description }
        : null;

  const toggle = (id: string) => setSelected((prev) => (prev === id ? null : id));

  return (
    <section id="arquitectura" className="slide">
      <div className="board-dots" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-8 lg:pl-24 w-full relative z-10">
        <p className="eyebrow mb-2 r r1">{"// ARQUITECTURA"}</p>
        <h2 className="font-display font-semibold text-2xl lg:text-3xl mb-2 r r2">
          Así conectamos un producto real
        </h2>
        <p className="text-[color:var(--text-muted)] text-sm mb-6 r r3">
          Ejemplo con datos reales: la arquitectura detrás de KlipperApp. Toca un nodo para ver su rol.
        </p>

        <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[400px] r r4">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <rect
              className="arch-boundary"
              x={architectureBoundary.x}
              y={architectureBoundary.y}
              width={architectureBoundary.width}
              height={architectureBoundary.height}
              rx="3"
            />
            {architectureEdges.map((edge) => {
              const from = nodeById(edge.from);
              const to = nodeById(edge.to);
              const active = isEdgeActive(edge.from, edge.to);
              const dim = Boolean(selected) && !active;
              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className={`arch-edge ${active ? "is-active" : ""} ${dim ? "is-dim" : ""}`}
                />
              );
            })}
          </svg>

          <button
            type="button"
            aria-pressed={selected === "heroku"}
            className="absolute font-mono text-[9px] tracking-wide uppercase px-1.5 py-0.5 rounded-sm hover:text-[color:var(--cyan)] transition-colors"
            style={{
              left: `${architectureBoundary.x}%`,
              top: `${architectureBoundary.y}%`,
              transform: "translateY(-100%)",
              color: selected === "heroku" ? "var(--cyan)" : "var(--text-muted)",
            }}
            onClick={() => toggle("heroku")}
          >
            {architectureBoundary.label}
          </button>

          {architectureNodes.map((node) => {
            const isSelected = selected === node.id;
            const isDim = connectedIds ? !connectedIds.has(node.id) : false;
            return (
              <button
                key={node.id}
                type="button"
                aria-pressed={isSelected}
                className={`arch-node ${isSelected ? "is-active" : ""} ${isDim ? "is-dim" : ""}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onClick={() => toggle(node.id)}
              >
                <span className="arch-node-badge">
                  <NodeIcon icon={node.icon} />
                </span>
                <span className="w-16 sm:w-24 text-center font-mono text-[9px] sm:text-[10px] leading-tight text-[color:var(--text-primary)]">
                  {node.label}
                  <span className="block text-[8px] sm:text-[9px] text-[color:var(--text-muted)] mt-0.5">
                    {node.sublabel}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="chip rounded-lg p-4 min-h-[64px] flex items-center r r5">
          <p className="text-xs sm:text-sm text-[color:var(--text-muted)]">
            {activeDescription ? (
              <>
                <span className="font-display font-medium" style={{ color: "var(--cyan)" }}>
                  {activeDescription.title}:
                </span>{" "}
                {activeDescription.text}
              </>
            ) : (
              "Toca cualquier nodo (o el bloque Heroku) para ver cómo encaja en el sistema."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
