interface StackSlideProps {
  items: string[];
}

export function StackSlide({ items }: StackSlideProps) {
  return (
    <section id="stack" className="slide">
      <div className="board-dots" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-8 lg:pl-24 w-full relative z-10">
        <p className="eyebrow mb-2 r r1">{"// STACK"}</p>
        <h2 className="font-display font-semibold text-3xl mb-8 r r2">Herramientas con las que conectamos todo</h2>
        <div className="flex flex-wrap gap-3">
          {items.map((item, i) => (
            <span key={item} className="pin pin-in" style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
